! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "df3a215f-bfd1-5b95-a24a-0329b845d3dc")
    } catch (e) {}
}();
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([
    [895], {

        /***/
        "LHcd":
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";

                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "syncLocalDfp": () => ( /* binding */ syncLocalDfp)
                });

                // UNUSED EXPORTS: generateFvideoToken, generateToken, getFvideoId

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_async_to_generator.mjs
                var _async_to_generator = __webpack_require__("ttNT");
                // EXTERNAL MODULE: external "regeneratorRuntime"
                var external_regeneratorRuntime_ = __webpack_require__("Pz56");
                var external_regeneratorRuntime_default = /*#__PURE__*/ __webpack_require__.n(external_regeneratorRuntime_);; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/constant.js
                var SDK_VERSION = "2024.12.17";
                var DEFAULT_PLACEHOLDER = "unknown";
                var FINGERPRINT_INFO = "FV_INFO";
                var DEVICE_ID_KEY = "BNC_FV_KEY";
                var DEVICE_DFP_EXPIRE = "BNC_FV_KEY_EXPIRE";
                var REPORT_FREQUENCY = 6 * 3600 * 1000 // report every 6 hour
                ;

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/runtime.js
                var ref;
                var isClient = "object" !== "undefined";
                var isElectron = !!(true && ((ref = window) === null || ref === void 0 ? void 0 : ref.__RUN_BY_ELECTRON__));
                var getJsBridgeVersion = function() {
                    try {
                        if (false) {}
                        if (window && window.navigator.userAgent) {
                            var ua = window.navigator.userAgent;
                            if (/BNC\/[\d\.]+/i.test(ua)) {
                                var ref4, ref1, ref2, ref3;
                                return ua === null || ua === void 0 ? void 0 : (ref4 = ua.match) === null || ref4 === void 0 ? void 0 : (ref1 = ref4.call(ua, /BNC\/[\d\.]+/i)) === null || ref1 === void 0 ? void 0 : (ref2 = ref1[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.slice) === null || ref3 === void 0 ? void 0 : ref3.call(ref2, 4);
                            }
                            return "";
                        }
                        return "";
                    } catch (e) {
                        return "";
                    }
                };
                var isHybrid = !!getJsBridgeVersion();
                var isTelegramMiniApp = function() {
                    return true && !!window.Telegram;
                };

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_object_spread.mjs
                var _object_spread = __webpack_require__("ys0/");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_object_spread_props.mjs
                var _object_spread_props = __webpack_require__("L2LL");
                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_instanceof.mjs
                var _instanceof = __webpack_require__("jNo/");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/libs/fingerprintjs4.js

                /**
                 * FingerprintJS v4.5.1 - Copyright (c) FingerprintJS, Inc, 2024 (https://fingerprint.com)
                 *
                 * Licensed under Business Source License 1.1 https://mariadb.com/bsl11/
                 * Licensor: FingerprintJS, Inc.
                 * Licensed Work: FingerprintJS browser fingerprinting library
                 * Additional Use Grant: None
                 * Change Date: Four years from first release for the specific version.
                 * Change License: MIT, text at https://opensource.org/license/mit/ with the following copyright notice:
                 * Copyright 2015-present FingerprintJS, Inc.
                 */
                var n147 = function() {
                    return n147 = Object.assign || function(n1) {
                        for (var e1, t1 = 1, r1 = arguments.length; t1 < r1; t1++)
                            for (var o1 in e1 = arguments[t1]) Object.prototype.hasOwnProperty.call(e1, o1) && (n1[o1] = e1[o1]);
                        return n1;
                    }, n147.apply(this, arguments);
                };

                function e46(n2, e2, t2, r2) {
                    return new(t2 || (t2 = Promise))(function(o2, i1) {
                        var a = function a(n3) {
                            try {
                                u1(r2.next(n3));
                            } catch (e3) {
                                i1(e3);
                            }
                        };
                        var c = function c(n4) {
                            try {
                                u1(r2.throw(n4));
                            } catch (e4) {
                                i1(e4);
                            }
                        };
                        var u1 = function u1(n5) {
                            var _$e;
                            n5.done ? o2(n5.value) : (_$e = n5.value, (0, _instanceof /* default */ .Z)(_$e, t2) ? _$e : new t2(function(n6) {
                                n6(_$e);
                            })).then(a, c);
                        };
                        u1((r2 = r2.apply(n2, e2 || [])).next());
                    });
                }

                function t(n7, e5) {
                    var c2 = function c2(c3) {
                        return function(u2) {
                            return function(c) {
                                if (t3) throw new TypeError("Generator is already executing.");
                                for (; i2 && (i2 = 0, c[0] && (a = 0)), a;) try {
                                    if (t3 = 1, r3 && (o3 = 2 & c[0] ? r3.return : c[0] ? r3.throw || ((o3 = r3.return) && o3.call(r3), 0) : r3.next) && !(o3 = o3.call(r3, c[1])).done) return o3;
                                    switch (r3 = 0, o3 && (c = [
                                        2 & c[0],
                                        o3.value
                                    ]), c[0]) {
                                        case 0:
                                        case 1:
                                            o3 = c;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: c[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r3 = c[1], c = [
                                                0
                                            ];
                                            continue;
                                        case 7:
                                            c = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o3 = a.trys, (o3 = o3.length > 0 && o3[o3.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === c[0] && (!o3 || c[1] > o3[0] && c[1] < o3[3])) {
                                                a.label = c[1];
                                                break;
                                            }
                                            if (6 === c[0] && a.label < o3[1]) {
                                                a.label = o3[1], o3 = c;
                                                break;
                                            }
                                            if (o3 && a.label < o3[2]) {
                                                a.label = o3[2], a.ops.push(c);
                                                break;
                                            }
                                            o3[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    c = e5.call(n7, a);
                                } catch (u3) {
                                    c = [
                                        6,
                                        u3
                                    ], r3 = 0;
                                } finally {
                                    t3 = o3 = 0;
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                };
                            }([
                                c3,
                                u2
                            ]);
                        };
                    };
                    var t3, r3, o3, i2, a = {
                        label: 0,
                        sent: function sent() {
                            if (1 & o3[0]) throw o3[1];
                            return o3[1];
                        },
                        trys: [],
                        ops: []
                    };
                    return i2 = {
                        next: c2(0),
                        throw: c2(1),
                        return: c2(2)
                    }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
                        return this;
                    }), i2;
                }

                function r(n8, e6, t4) {
                    if (t4 || 2 === arguments.length)
                        for (var r4, o4 = 0, i3 = e6.length; o4 < i3; o4++) !r4 && o4 in e6 || (r4 || (r4 = Array.prototype.slice.call(e6, 0, o4)), r4[o4] = e6[o4]);
                    return n8.concat(r4 || Array.prototype.slice.call(e6));
                }

                function o(n9, e7) {
                    return new Promise(function(t5) {
                        return setTimeout(t5, n9, e7);
                    });
                }

                function i(n10) {
                    return !!n10 && "function" == typeof n10.then;
                }

                function a1(n11, e8) {
                    try {
                        var t6 = n11();
                        i(t6) ? t6.then(function(n12) {
                            return e8(!0, n12);
                        }, function(n13) {
                            return e8(!1, n13);
                        }) : e8(!0, t6);
                    } catch (r5) {
                        e8(!1, r5);
                    }
                }

                function c1(n14, r6, o5) {
                    return void 0 === o5 && (o5 = 16), e46(this, void 0, void 0, function() {
                        var _$e1, i4, a, c;
                        return t(this, function(t7) {
                            switch (t7.label) {
                                case 0:
                                    _$e1 = Array(n14.length), i4 = Date.now(), a = 0, t7.label = 1;
                                case 1:
                                    return a < n14.length ? (_$e1[a] = r6(n14[a], a), (c = Date.now()) >= i4 + o5 ? (i4 = c, [
                                        4,
                                        new Promise(function(n15) {
                                            var _$e = new MessageChannel;
                                            _$e.port1.onmessage = function() {
                                                return n15();
                                            }, _$e.port2.postMessage(null);
                                        })
                                    ]) : [
                                        3,
                                        3
                                    ]) : [
                                        3,
                                        4
                                    ];
                                case 2:
                                    t7.sent(), t7.label = 3;
                                case 3:
                                    return ++a, [
                                        3,
                                        1
                                    ];
                                case 4:
                                    return [
                                        2,
                                        _$e1
                                    ];
                            }
                        });
                    });
                }

                function u8(n16) {
                    return n16.then(void 0, function() {}), n16;
                }

                function l(n17) {
                    return parseInt(n17);
                }

                function s(n18) {
                    return parseFloat(n18);
                }

                function d(n19, e9) {
                    return "number" == typeof n19 && isNaN(n19) ? e9 : n19;
                }

                function f(n20) {
                    return n20.reduce(function(n21, e10) {
                        return n21 + (e10 ? 1 : 0);
                    }, 0);
                }

                function m2(n22, e11) {
                    if (void 0 === e11 && (e11 = 1), Math.abs(e11) >= 1) return Math.round(n22 / e11) * e11;
                    var t8 = 1 / e11;
                    return Math.round(n22 * t8) / t8;
                }

                function v(n23, e12) {
                    var t9 = n23[0] >>> 16,
                        r7 = 65535 & n23[0],
                        o6 = n23[1] >>> 16,
                        i5 = 65535 & n23[1],
                        a = e12[0] >>> 16,
                        c = 65535 & e12[0],
                        u4 = e12[1] >>> 16,
                        l1 = 0,
                        s1 = 0,
                        d1 = 0,
                        f1 = 0;
                    d1 += (f1 += i5 + (65535 & e12[1])) >>> 16, f1 &= 65535, s1 += (d1 += o6 + u4) >>> 16, d1 &= 65535, l1 += (s1 += r7 + c) >>> 16, s1 &= 65535, l1 += t9 + a, l1 &= 65535, n23[0] = l1 << 16 | s1, n23[1] = d1 << 16 | f1;
                }

                function h(n24, e13) {
                    var t10 = n24[0] >>> 16,
                        r8 = 65535 & n24[0],
                        o7 = n24[1] >>> 16,
                        i6 = 65535 & n24[1],
                        a = e13[0] >>> 16,
                        c = 65535 & e13[0],
                        u5 = e13[1] >>> 16,
                        l2 = 65535 & e13[1],
                        s2 = 0,
                        d2 = 0,
                        f2 = 0,
                        m1 = 0;
                    f2 += (m1 += i6 * l2) >>> 16, m1 &= 65535, d2 += (f2 += o7 * l2) >>> 16, f2 &= 65535, d2 += (f2 += i6 * u5) >>> 16, f2 &= 65535, s2 += (d2 += r8 * l2) >>> 16, d2 &= 65535, s2 += (d2 += o7 * u5) >>> 16, d2 &= 65535, s2 += (d2 += i6 * c) >>> 16, d2 &= 65535, s2 += t10 * l2 + r8 * u5 + o7 * c + i6 * a, s2 &= 65535, n24[0] = s2 << 16 | d2, n24[1] = f2 << 16 | m1;
                }

                function p(n25, e14) {
                    var t11 = n25[0];
                    32 === (e14 %= 64) ? (n25[0] = n25[1], n25[1] = t11) : e14 < 32 ? (n25[0] = t11 << e14 | n25[1] >>> 32 - e14, n25[1] = n25[1] << e14 | t11 >>> 32 - e14) : (e14 -= 32, n25[0] = n25[1] << e14 | t11 >>> 32 - e14, n25[1] = t11 << e14 | n25[1] >>> 32 - e14);
                }

                function b(n26, e15) {
                    0 !== (e15 %= 64) && (e15 < 32 ? (n26[0] = n26[1] >>> 32 - e15, n26[1] = n26[1] << e15) : (n26[0] = n26[1] << e15 - 32, n26[1] = 0));
                }

                function y(n27, e16) {
                    n27[0] ^= e16[0], n27[1] ^= e16[1];
                }
                var g = [
                        4283543511,
                        3981806797
                    ],
                    w = [
                        3301882366,
                        444984403
                    ];

                function L(n28) {
                    var e17 = [
                        0,
                        n28[0] >>> 1
                    ];
                    y(n28, e17), h(n28, g), e17[1] = n28[0] >>> 1, y(n28, e17), h(n28, w), e17[1] = n28[0] >>> 1, y(n28, e17);
                }
                var k = [
                        2277735313,
                        289559509
                    ],
                    V = [
                        1291169091,
                        658871167
                    ],
                    S = [
                        0,
                        5
                    ],
                    W = [
                        0,
                        1390208809
                    ],
                    x = [
                        0,
                        944331445
                    ];

                function Z(n29, e18) {
                    var t12 = function(n30) {
                        for (var _$e = new Uint8Array(n30.length), t13 = 0; t13 < n30.length; t13++) {
                            var r10 = n30.charCodeAt(t13);
                            if (r10 > 127) return (new TextEncoder).encode(n30);
                            _$e[t13] = r10;
                        }
                        return _$e;
                    }(n29);
                    e18 = e18 || 0;
                    var r9, o8 = [
                            0,
                            t12.length
                        ],
                        i7 = o8[1] % 16,
                        a = o8[1] - i7,
                        c = [
                            0,
                            e18
                        ],
                        u6 = [
                            0,
                            e18
                        ],
                        l3 = [
                            0,
                            0
                        ],
                        s3 = [
                            0,
                            0
                        ];
                    for (r9 = 0; r9 < a; r9 += 16) l3[0] = t12[r9 + 4] | t12[r9 + 5] << 8 | t12[r9 + 6] << 16 | t12[r9 + 7] << 24, l3[1] = t12[r9] | t12[r9 + 1] << 8 | t12[r9 + 2] << 16 | t12[r9 + 3] << 24, s3[0] = t12[r9 + 12] | t12[r9 + 13] << 8 | t12[r9 + 14] << 16 | t12[r9 + 15] << 24, s3[1] = t12[r9 + 8] | t12[r9 + 9] << 8 | t12[r9 + 10] << 16 | t12[r9 + 11] << 24, h(l3, k), p(l3, 31), h(l3, V), y(c, l3), p(c, 27), v(c, u6), h(c, S), v(c, W), h(s3, V), p(s3, 33), h(s3, k), y(u6, s3), p(u6, 31), v(u6, c), h(u6, S), v(u6, x);
                    l3[0] = 0, l3[1] = 0, s3[0] = 0, s3[1] = 0;
                    var d3 = [
                        0,
                        0
                    ];
                    switch (i7) {
                        case 15:
                            d3[1] = t12[r9 + 14], b(d3, 48), y(s3, d3);
                        case 14:
                            d3[1] = t12[r9 + 13], b(d3, 40), y(s3, d3);
                        case 13:
                            d3[1] = t12[r9 + 12], b(d3, 32), y(s3, d3);
                        case 12:
                            d3[1] = t12[r9 + 11], b(d3, 24), y(s3, d3);
                        case 11:
                            d3[1] = t12[r9 + 10], b(d3, 16), y(s3, d3);
                        case 10:
                            d3[1] = t12[r9 + 9], b(d3, 8), y(s3, d3);
                        case 9:
                            d3[1] = t12[r9 + 8], y(s3, d3), h(s3, V), p(s3, 33), h(s3, k), y(u6, s3);
                        case 8:
                            d3[1] = t12[r9 + 7], b(d3, 56), y(l3, d3);
                        case 7:
                            d3[1] = t12[r9 + 6], b(d3, 48), y(l3, d3);
                        case 6:
                            d3[1] = t12[r9 + 5], b(d3, 40), y(l3, d3);
                        case 5:
                            d3[1] = t12[r9 + 4], b(d3, 32), y(l3, d3);
                        case 4:
                            d3[1] = t12[r9 + 3], b(d3, 24), y(l3, d3);
                        case 3:
                            d3[1] = t12[r9 + 2], b(d3, 16), y(l3, d3);
                        case 2:
                            d3[1] = t12[r9 + 1], b(d3, 8), y(l3, d3);
                        case 1:
                            d3[1] = t12[r9], y(l3, d3), h(l3, k), p(l3, 31), h(l3, V), y(c, l3);
                    }
                    return y(c, o8), y(u6, o8), v(c, u6), v(u6, c), L(c), L(u6), v(c, u6), v(u6, c), ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u6[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u6[1] >>> 0).toString(16)).slice(-8);
                }

                function R(n31) {
                    return "function" != typeof n31;
                }

                function M(n32, r11, o9, i8) {
                    var l4 = Object.keys(n32).filter(function(n33) {
                            return ! function(n34, e19) {
                                for (var t14 = 0, r12 = n34.length; t14 < r12; ++t14)
                                    if (n34[t14] === e19) return !0;
                                return !1;
                            }(o9, n33);
                        }),
                        s4 = u8(c1(l4, function(e20) {
                            return function(n35, e21) {
                                var t15 = u8(new Promise(function(t16) {
                                    var _$r1 = Date.now();
                                    a1(n35.bind(null, e21), function() {
                                        for (var _$n = [], _$e2 = 0; _$e2 < arguments.length; _$e2++) _$n[_$e2] = arguments[_$e2];
                                        var o10 = Date.now() - _$r1;
                                        if (!_$n[0]) return t16(function() {
                                            return {
                                                error: _$n[1],
                                                duration: o10
                                            };
                                        });
                                        var _$i1 = _$n[1];
                                        if (R(_$i1)) return t16(function() {
                                            return {
                                                value: _$i1,
                                                duration: o10
                                            };
                                        });
                                        t16(function() {
                                            return new Promise(function(n36) {
                                                var _$e = Date.now();
                                                a1(_$i1, function() {
                                                    for (var _$t = [], _$r = 0; _$r < arguments.length; _$r++) _$t[_$r] = arguments[_$r];
                                                    var _$i = o10 + Date.now() - _$e;
                                                    if (!_$t[0]) return n36({
                                                        error: _$t[1],
                                                        duration: _$i
                                                    });
                                                    n36({
                                                        value: _$t[1],
                                                        duration: _$i
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }));
                                return function() {
                                    return t15.then(function(n37) {
                                        return n37();
                                    });
                                };
                            }(n32[e20], r11);
                        }, i8));
                    return function() {
                        return e46(this, void 0, void 0, function() {
                            var _$n, _$e, r13, o11;
                            return t(this, function(t17) {
                                switch (t17.label) {
                                    case 0:
                                        return [
                                            4,
                                            s4
                                        ];
                                    case 1:
                                        return [
                                            4,
                                            c1(t17.sent(), function(n38) {
                                                return u8(n38());
                                            }, i8)
                                        ];
                                    case 2:
                                        return _$n = t17.sent(), [
                                            4,
                                            Promise.all(_$n)
                                        ];
                                    case 3:
                                        for (_$e = t17.sent(), r13 = {}, o11 = 0; o11 < l4.length; ++o11) r13[l4[o11]] = _$e[o11];
                                        return [
                                            2,
                                            r13
                                        ];
                                }
                            });
                        });
                    };
                }

                function G(n39, e22) {
                    var t18 = function t18(n40) {
                        return R(n40) ? e22(n40) : function() {
                            var t20 = n40();
                            return i(t20) ? t20.then(e22) : e22(t20);
                        };
                    };
                    return function(e23) {
                        var r14 = n39(e23);
                        return i(r14) ? r14.then(t18) : t18(r14);
                    };
                }

                function F() {
                    var n41 = window,
                        e24 = navigator;
                    return f([
                        "MSCSSMatrix" in n41,
                        "msSetImmediate" in n41,
                        "msIndexedDB" in n41,
                        "msMaxTouchPoints" in e24,
                        "msPointerEnabled" in e24
                    ]) >= 4;
                }

                function I() {
                    var n42 = window,
                        e25 = navigator;
                    return f([
                        "msWriteProfilerMark" in n42,
                        "MSStream" in n42,
                        "msLaunchUri" in e25,
                        "msSaveBlob" in e25
                    ]) >= 3 && !F();
                }

                function Y() {
                    var n43 = window,
                        e26 = navigator;
                    return f([
                        "webkitPersistentStorage" in e26,
                        "webkitTemporaryStorage" in e26,
                        0 === e26.vendor.indexOf("Google"),
                        "webkitResolveLocalFileSystemURL" in n43,
                        "BatteryManager" in n43,
                        "webkitMediaStream" in n43,
                        "webkitSpeechGrammar" in n43
                    ]) >= 5;
                }

                function j() {
                    var n44 = window;
                    return f([
                        "ApplePayError" in n44,
                        "CSSPrimitiveValue" in n44,
                        "Counter" in n44,
                        0 === navigator.vendor.indexOf("Apple"),
                        "RGBColor" in n44,
                        "WebKitMediaKeys" in n44
                    ]) >= 4;
                }

                function X() {
                    var n45 = window,
                        e27 = n45.HTMLElement,
                        t21 = n45.Document;
                    return f([
                        "safari" in n45, !("ongestureend" in n45), !("TouchEvent" in n45), !("orientation" in n45),
                        e27 && !("autocapitalize" in e27.prototype),
                        t21 && "pointerLockElement" in t21.prototype
                    ]) >= 4;
                }

                function C() {
                    var n46, e28 = window;
                    return n46 = e28.print, /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n46)) && "[object WebPageNamespace]" === String(e28.browser);
                }

                function P() {
                    var n47, e29, t22 = window;
                    return f([
                        "buildID" in navigator,
                        "MozAppearance" in (null !== (e29 = null === (n47 = document.documentElement) || void 0 === n47 ? void 0 : n47.style) && void 0 !== e29 ? e29 : {}),
                        "onmozfullscreenchange" in t22,
                        "mozInnerScreenX" in t22,
                        "CSSMozDocumentRule" in t22,
                        "CanvasCaptureMediaStream" in t22
                    ]) >= 4;
                }

                function E() {
                    var n48 = window,
                        e30 = navigator,
                        t23 = n48.CSS,
                        r15 = n48.HTMLButtonElement;
                    return f([!("getStorageUpdates" in e30),
                        r15 && "popover" in r15.prototype,
                        "CSSCounterStyleRule" in n48,
                        t23.supports("font-size-adjust: ex-height 0.5"),
                        t23.supports("text-transform: full-width")
                    ]) >= 4;
                }

                function H() {
                    var n49 = document;
                    return n49.fullscreenElement || n49.msFullscreenElement || n49.mozFullScreenElement || n49.webkitFullscreenElement || null;
                }

                function A() {
                    var n50 = Y(),
                        e31 = P(),
                        t24 = window,
                        r16 = navigator,
                        o12 = "connection";
                    return n50 ? f([!("SharedWorker" in t24),
                        r16[o12] && "ontypechange" in r16[o12], !("sinkId" in new Audio)
                    ]) >= 2 : !!e31 && f([
                        "onorientationchange" in t24,
                        "orientation" in t24,
                        /android/i.test(r16.appVersion)
                    ]) >= 2;
                }

                function N() {
                    var n51 = navigator,
                        e32 = window,
                        t25 = Audio.prototype,
                        r17 = e32.visualViewport;
                    return f([
                        "srLatency" in t25,
                        "srChannelCount" in t25,
                        "devicePosture" in n51,
                        r17 && "segments" in r17,
                        "getTextInformation" in Image.prototype
                    ]) >= 3;
                }

                function J() {
                    var n52 = window,
                        e33 = n52.OfflineAudioContext || n52.webkitOfflineAudioContext;
                    if (!e33) return -2;
                    if (j() && !X() && ! function() {
                            var n53 = window;
                            return f([
                                "DOMRectList" in n53,
                                "RTCPeerConnectionIceEvent" in n53,
                                "SVGGeometryElement" in n53,
                                "ontransitioncancel" in n53
                            ]) >= 3;
                        }()) return -1;
                    var t26 = new e33(1, 5e3, 44100),
                        r18 = t26.createOscillator();
                    r18.type = "triangle", r18.frequency.value = 1e4;
                    var o13 = t26.createDynamicsCompressor();
                    o13.threshold.value = -50, o13.knee.value = 40, o13.ratio.value = 12, o13.attack.value = 0, o13.release.value = .25, r18.connect(o13), o13.connect(t26.destination), r18.start(0);
                    var a2 = function(n54) {
                            var e34 = 3,
                                t27 = 500,
                                r19 = 500,
                                o14 = 5e3,
                                a = function a() {};
                            return [
                                new Promise(function(c, l6) {
                                    var s6 = !1,
                                        d4 = 0,
                                        f3 = 0;
                                    n54.oncomplete = function(n55) {
                                        return c(n55.renderedBuffer);
                                    };
                                    var m = function m() {
                                            setTimeout(function() {
                                                return l6(T("timeout"));
                                            }, Math.min(r19, f3 + o14 - Date.now()));
                                        },
                                        v1 = function() {
                                            try {
                                                var r20 = n54.startRendering();
                                                switch (i(r20) && u8(r20), n54.state) {
                                                    case "running":
                                                        f3 = Date.now(), s6 && m();
                                                        break;
                                                    case "suspended":
                                                        document.hidden || d4++, s6 && d4 >= e34 ? l6(T("suspended")) : setTimeout(v1, t27);
                                                }
                                            } catch (o15) {
                                                l6(o15);
                                            }
                                        };
                                    v1(), a = function a() {
                                        s6 || (s6 = !0, f3 > 0 && m());
                                    };
                                }),
                                a
                            ];
                        }(t26),
                        c4 = a2[0],
                        l5 = a2[1],
                        s5 = u8(c4.then(function(n56) {
                            return function(n57) {
                                for (var e35 = 0, t28 = 0; t28 < n57.length; ++t28) e35 += Math.abs(n57[t28]);
                                return e35;
                            }(n56.getChannelData(0).subarray(4500));
                        }, function(n58) {
                            if ("timeout" === n58.name || "suspended" === n58.name) return -3;
                            throw n58;
                        }));
                    return function() {
                        return l5(), s5;
                    };
                }

                function T(n59) {
                    var e36 = new Error(n59);
                    return e36.name = n59, e36;
                }

                function D(n60, r21, i9) {
                    var a3, c5, u7;
                    return void 0 === i9 && (i9 = 50), e46(this, void 0, void 0, function() {
                        var _$e3, l7;
                        return t(this, function(t29) {
                            switch (t29.label) {
                                case 0:
                                    _$e3 = document, t29.label = 1;
                                case 1:
                                    return _$e3.body ? [
                                        3,
                                        3
                                    ] : [
                                        4,
                                        o(i9)
                                    ];
                                case 2:
                                    return t29.sent(), [
                                        3,
                                        1
                                    ];
                                case 3:
                                    l7 = _$e3.createElement("iframe"), t29.label = 4;
                                case 4:
                                    return t29.trys.push([
                                        4, ,
                                        10,
                                        11
                                    ]), [
                                        4,
                                        new Promise(function(n61, t30) {
                                            var _$o = !1,
                                                _$i = function _$i() {
                                                    _$o = !0, n61();
                                                };
                                            l7.onload = _$i, l7.onerror = function(n62) {
                                                _$o = !0, t30(n62);
                                            };
                                            var a = l7.style;
                                            a.setProperty("display", "block", "important"), a.position = "absolute", a.top = "0", a.left = "0", a.visibility = "hidden", r21 && "srcdoc" in l7 ? l7.srcdoc = r21 : l7.src = "about:blank", _$e3.body.appendChild(l7);
                                            var c = function() {
                                                var _$n, _$e;
                                                _$o || ("complete" === (null === (_$e = null === (_$n = l7.contentWindow) || void 0 === _$n ? void 0 : _$n.document) || void 0 === _$e ? void 0 : _$e.readyState) ? _$i() : setTimeout(c, 10));
                                            };
                                            c();
                                        })
                                    ];
                                case 5:
                                    t29.sent(), t29.label = 6;
                                case 6:
                                    return (null === (c5 = null === (a3 = l7.contentWindow) || void 0 === a3 ? void 0 : a3.document) || void 0 === c5 ? void 0 : c5.body) ? [
                                        3,
                                        8
                                    ] : [
                                        4,
                                        o(i9)
                                    ];
                                case 7:
                                    return t29.sent(), [
                                        3,
                                        6
                                    ];
                                case 8:
                                    return [
                                        4,
                                        n60(l7, l7.contentWindow)
                                    ];
                                case 9:
                                    return [
                                        2,
                                        t29.sent()
                                    ];
                                case 10:
                                    return null === (u7 = l7.parentNode) || void 0 === u7 || u7.removeChild(l7), [
                                        7
                                    ];
                                case 11:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }

                function _(n63) {
                    for (var e37 = function(n64) {
                            for (var e38, t32, r23 = "Unexpected syntax '".concat(n64, "'"), o17 = /^\s*([a-z-]*)(.*)$/i.exec(n64), i11 = o17[1] || void 0, a = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function u(n65, e39) {
                                    a[n65] = a[n65] || [], a[n65].push(e39);
                                };;) {
                                var l8 = c.exec(o17[2]);
                                if (!l8) break;
                                var s7 = l8[0];
                                switch (s7[0]) {
                                    case ".":
                                        u("class", s7.slice(1));
                                        break;
                                    case "#":
                                        u("id", s7.slice(1));
                                        break;
                                    case "[":
                                        var d5 = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s7);
                                        if (!d5) throw new Error(r23);
                                        u(d5[1], null !== (t32 = null !== (e38 = d5[4]) && void 0 !== e38 ? e38 : d5[5]) && void 0 !== t32 ? t32 : "");
                                        break;
                                    default:
                                        throw new Error(r23);
                                }
                            }
                            return [
                                i11,
                                a
                            ];
                        }(n63), t31 = e37[0], r22 = e37[1], o16 = document.createElement(null != t31 ? t31 : "div"), i10 = 0, a4 = Object.keys(r22); i10 < a4.length; i10++) {
                        var c6 = a4[i10],
                            u9 = r22[c6].join(" ");
                        "style" === c6 ? z(o16.style, u9) : o16.setAttribute(c6, u9);
                    }
                    return o16;
                }

                function z(n66, e40) {
                    for (var t33 = 0, r24 = e40.split(";"); t33 < r24.length; t33++) {
                        var o18 = r24[t33],
                            i12 = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o18);
                        if (i12) {
                            var a = i12[1],
                                c = i12[2],
                                u = i12[4];
                            n66.setProperty(a, c, u || "");
                        }
                    }
                }
                var B = [
                        "monospace",
                        "sans-serif",
                        "serif"
                    ],
                    O = [
                        "sans-serif-thin",
                        "ARNO PRO",
                        "Agency FB",
                        "Arabic Typesetting",
                        "Arial Unicode MS",
                        "AvantGarde Bk BT",
                        "BankGothic Md BT",
                        "Batang",
                        "Bitstream Vera Sans Mono",
                        "Calibri",
                        "Century",
                        "Century Gothic",
                        "Clarendon",
                        "EUROSTILE",
                        "Franklin Gothic",
                        "Futura Bk BT",
                        "Futura Md BT",
                        "GOTHAM",
                        "Gill Sans",
                        "HELV",
                        "Haettenschweiler",
                        "Helvetica Neue",
                        "Humanst521 BT",
                        "Leelawadee",
                        "Letter Gothic",
                        "Levenim MT",
                        "Lucida Bright",
                        "Lucida Sans",
                        "Menlo",
                        "MS Mincho",
                        "MS Outlook",
                        "MS Reference Specialty",
                        "MS UI Gothic",
                        "MT Extra",
                        "MYRIAD PRO",
                        "Marlett",
                        "Meiryo UI",
                        "Microsoft Uighur",
                        "Minion Pro",
                        "Monotype Corsiva",
                        "PMingLiU",
                        "Pristina",
                        "SCRIPTINA",
                        "Segoe UI Light",
                        "Serifa",
                        "SimHei",
                        "Small Fonts",
                        "Staccato222 BT",
                        "TRAJAN PRO",
                        "Univers CE 55 Medium",
                        "Vrinda",
                        "ZWAdobeF"
                    ];

                function U(n67) {
                    var e41, t34, r25, o19 = !1,
                        i13 = function() {
                            var _$n = document.createElement("canvas");
                            return _$n.width = 1, _$n.height = 1, [
                                _$n,
                                _$n.getContext("2d")
                            ];
                        }(),
                        a5 = i13[0],
                        c7 = i13[1];
                    return ! function(n68, e42) {
                        return !(!e42 || !n68.toDataURL);
                    }(a5, c7) ? t34 = r25 = "unsupported" : (o19 = function(n69) {
                        return n69.rect(0, 0, 10, 10), n69.rect(2, 2, 6, 6), !n69.isPointInPath(5, 5, "evenodd");
                    }(c7), n67 ? t34 = r25 = "skipped" : (e41 = function(n70, e43) {
                        ! function(n71, e44) {
                            n71.width = 240, n71.height = 60, e44.textBaseline = "alphabetic", e44.fillStyle = "#f60", e44.fillRect(100, 1, 62, 20), e44.fillStyle = "#069", e44.font = '11pt "Times New Roman"';
                            var t36 = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                            e44.fillText(t36, 2, 15), e44.fillStyle = "rgba(102, 204, 0, 0.2)", e44.font = "18pt Arial", e44.fillText(t36, 4, 45);
                        }(n70, e43);
                        var t35 = Q(n70),
                            r26 = Q(n70);
                        if (t35 !== r26) return [
                            "unstable",
                            "unstable"
                        ];
                        return function(n72, e45) {
                            n72.width = 122, n72.height = 110, e45.globalCompositeOperation = "multiply";
                            for (var t37 = 0, r27 = [
                                    [
                                        "#f2f",
                                        40,
                                        40
                                    ],
                                    [
                                        "#2ff",
                                        80,
                                        40
                                    ],
                                    [
                                        "#ff2",
                                        60,
                                        80
                                    ]
                                ]; t37 < r27.length; t37++) {
                                var o20 = r27[t37],
                                    i14 = o20[0],
                                    a = o20[1],
                                    c = o20[2];
                                e45.fillStyle = i14, e45.beginPath(), e45.arc(a, c, 40, 0, 2 * Math.PI, !0), e45.closePath(), e45.fill();
                            }
                            e45.fillStyle = "#f9c", e45.arc(60, 60, 60, 0, 2 * Math.PI, !0), e45.arc(60, 60, 20, 0, 2 * Math.PI, !0), e45.fill("evenodd");
                        }(n70, e43), [
                            Q(n70),
                            t35
                        ];
                    }(a5, c7), t34 = e41[0], r25 = e41[1])), {
                        winding: o19,
                        geometry: t34,
                        text: r25
                    };
                }

                function Q(n73) {
                    return n73.toDataURL();
                }

                function K() {
                    var n74 = screen,
                        e = function e(n75) {
                            return d(l(n75), null);
                        },
                        t38 = [
                            e(n74.width),
                            e(n74.height)
                        ];
                    return t38.sort().reverse(), t38;
                }
                var q, $;

                function nn() {
                    var n76 = this;
                    return function() {
                            if (void 0 === $) {
                                var n77 = function() {
                                    var e = en();
                                    tn(e) ? $ = setTimeout(n77, 2500) : (q = e, $ = void 0);
                                };
                                n77();
                            }
                        }(),
                        function() {
                            return e46(n76, void 0, void 0, function() {
                                var n78;
                                return t(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return tn(n78 = en()) ? q ? [
                                                2,
                                                r([], q, !0)
                                            ] : H() ? [
                                                4,
                                                (_$t = document, (_$t.exitFullscreen || _$t.msExitFullscreen || _$t.mozCancelFullScreen || _$t.webkitExitFullscreen).call(_$t))
                                            ] : [
                                                3,
                                                2
                                            ] : [
                                                3,
                                                2
                                            ];
                                        case 1:
                                            e.sent(), n78 = en(), e.label = 2;
                                        case 2:
                                            return tn(n78) || (q = n78), [
                                                2,
                                                n78
                                            ];
                                    }
                                    var _$t;
                                });
                            });
                        };
                }

                function en() {
                    var n79 = screen;
                    return [
                        d(s(n79.availTop), null),
                        d(s(n79.width) - s(n79.availWidth) - d(s(n79.availLeft), 0), null),
                        d(s(n79.height) - s(n79.availHeight) - d(s(n79.availTop), 0), null),
                        d(s(n79.availLeft), null)
                    ];
                }

                function tn(n80) {
                    for (var e = 0; e < 4; ++e)
                        if (n80[e]) return !1;
                    return !0;
                }

                function rn(n81) {
                    var r28;
                    return e46(this, void 0, void 0, function() {
                        var _$e, i15, a, c, u, l9, s8;
                        return t(this, function(t39) {
                            switch (t39.label) {
                                case 0:
                                    for (_$e = document, i15 = _$e.createElement("div"), a = new Array(n81.length), c = {}, on(i15), s8 = 0; s8 < n81.length; ++s8) "DIALOG" === (u = _(n81[s8])).tagName && u.show(), on(l9 = _$e.createElement("div")), l9.appendChild(u), i15.appendChild(l9), a[s8] = u;
                                    t39.label = 1;
                                case 1:
                                    return _$e.body ? [
                                        3,
                                        3
                                    ] : [
                                        4,
                                        o(50)
                                    ];
                                case 2:
                                    return t39.sent(), [
                                        3,
                                        1
                                    ];
                                case 3:
                                    _$e.body.appendChild(i15);
                                    try {
                                        for (s8 = 0; s8 < n81.length; ++s8) a[s8].offsetParent || (c[n81[s8]] = !0);
                                    } finally {
                                        null === (r28 = i15.parentNode) || void 0 === r28 || r28.removeChild(i15);
                                    }
                                    return [
                                        2,
                                        c
                                    ];
                            }
                        });
                    });
                }

                function on(n82) {
                    n82.style.setProperty("visibility", "hidden", "important"), n82.style.setProperty("display", "block", "important");
                }

                function an(n83) {
                    return matchMedia("(inverted-colors: ".concat(n83, ")")).matches;
                }

                function cn(n84) {
                    return matchMedia("(forced-colors: ".concat(n84, ")")).matches;
                }

                function un(n85) {
                    return matchMedia("(prefers-contrast: ".concat(n85, ")")).matches;
                }

                function ln(n86) {
                    return matchMedia("(prefers-reduced-motion: ".concat(n86, ")")).matches;
                }

                function sn(n87) {
                    return matchMedia("(prefers-reduced-transparency: ".concat(n87, ")")).matches;
                }

                function dn(n88) {
                    return matchMedia("(dynamic-range: ".concat(n88, ")")).matches;
                }
                var fn = Math,
                    mn = function mn() {
                        return 0;
                    };
                var vn = {
                    default: [],
                    apple: [{
                        font: "-apple-system-body"
                    }],
                    serif: [{
                        fontFamily: "serif"
                    }],
                    sans: [{
                        fontFamily: "sans-serif"
                    }],
                    mono: [{
                        fontFamily: "monospace"
                    }],
                    min: [{
                        fontSize: "1px"
                    }],
                    system: [{
                        fontFamily: "system-ui"
                    }]
                };
                var hn = function hn() {
                    for (var n89 = window;;) {
                        var e = n89.parent;
                        if (!e || e === n89) return !1;
                        try {
                            if (e.location.origin !== n89.location.origin) return !0;
                        } catch (t40) {
                            if ((0, _instanceof /* default */ .Z)(t40, Error) && "SecurityError" === t40.name) return !0;
                            throw t40;
                        }
                        n89 = e;
                    }
                };
                var pn = new Set([
                        10752,
                        2849,
                        2884,
                        2885,
                        2886,
                        2928,
                        2929,
                        2930,
                        2931,
                        2932,
                        2960,
                        2961,
                        2962,
                        2963,
                        2964,
                        2965,
                        2966,
                        2967,
                        2968,
                        2978,
                        3024,
                        3042,
                        3088,
                        3089,
                        3106,
                        3107,
                        32773,
                        32777,
                        32777,
                        32823,
                        32824,
                        32936,
                        32937,
                        32938,
                        32939,
                        32968,
                        32969,
                        32970,
                        32971,
                        3317,
                        33170,
                        3333,
                        3379,
                        3386,
                        33901,
                        33902,
                        34016,
                        34024,
                        34076,
                        3408,
                        3410,
                        3411,
                        3412,
                        3413,
                        3414,
                        3415,
                        34467,
                        34816,
                        34817,
                        34818,
                        34819,
                        34877,
                        34921,
                        34930,
                        35660,
                        35661,
                        35724,
                        35738,
                        35739,
                        36003,
                        36004,
                        36005,
                        36347,
                        36348,
                        36349,
                        37440,
                        37441,
                        37443,
                        7936,
                        7937,
                        7938
                    ]),
                    bn = new Set([
                        34047,
                        35723,
                        36063,
                        34852,
                        34853,
                        34854,
                        34229,
                        36392,
                        36795,
                        38449
                    ]),
                    yn = [
                        "FRAGMENT_SHADER",
                        "VERTEX_SHADER"
                    ],
                    gn = [
                        "LOW_FLOAT",
                        "MEDIUM_FLOAT",
                        "HIGH_FLOAT",
                        "LOW_INT",
                        "MEDIUM_INT",
                        "HIGH_INT"
                    ];

                function wn(n90) {
                    if (n90.webgl) return n90.webgl.context;
                    var e, t41 = document.createElement("canvas");
                    t41.addEventListener("webglCreateContextError", function() {
                        return e = void 0;
                    });
                    for (var r29 = 0, o21 = [
                            "webgl",
                            "experimental-webgl"
                        ]; r29 < o21.length; r29++) {
                        var i16 = o21[r29];
                        try {
                            e = t41.getContext(i16);
                        } catch (a) {}
                        if (e) break;
                    }
                    return n90.webgl = {
                        context: e
                    }, e;
                }

                function Ln(n91, e, t42) {
                    var r30 = n91.getShaderPrecisionFormat(n91[e], n91[t42]);
                    return r30 ? [
                        r30.rangeMin,
                        r30.rangeMax,
                        r30.precision
                    ] : [];
                }

                function kn(n92) {
                    return Object.keys(n92.__proto__).filter(Vn);
                }

                function Vn(n93) {
                    return "string" == typeof n93 && !n93.match(/[^A-Z0-9_x]/);
                }

                function Sn() {
                    return P();
                }

                function Wn(n94) {
                    return "function" == typeof n94.getParameter;
                }
                var xn = {
                    fonts: function fonts() {
                        var n95 = this;
                        return D(function(r31, o22) {
                            var i17 = o22.document;
                            return e46(n95, void 0, void 0, function() {
                                var n96, _$e4, r32, _$o, a, c, u, l10, s9, d6, f4;
                                return t(this, function(t43) {
                                    for ((n96 = i17.body).style.fontSize = "48px", (_$e4 = i17.createElement("div")).style.setProperty("visibility", "hidden", "important"), r32 = {}, _$o = {}, a = function a(n97) {
                                            var _$t = i17.createElement("span"),
                                                r33 = _$t.style;
                                            return r33.position = "absolute", r33.top = "0", r33.left = "0", r33.fontFamily = n97, _$t.textContent = "mmMwWLliI0O&1", _$e4.appendChild(_$t), _$t;
                                        }, c = function c(n98, e) {
                                            return a("'".concat(n98, "',").concat(e));
                                        }, u = function u() {
                                            for (var n99 = {}, _$e = function _$e(e) {
                                                    n99[e] = B.map(function(n100) {
                                                        return c(e, n100);
                                                    });
                                                }, _$t = 0, r34 = O; _$t < r34.length; _$t++) {
                                                _$e(r34[_$t]);
                                            }
                                            return n99;
                                        }, l10 = function l10(n101) {
                                            return B.some(function(e, t44) {
                                                return n101[t44].offsetWidth !== r32[e] || n101[t44].offsetHeight !== _$o[e];
                                            });
                                        }, s9 = function() {
                                            return B.map(a);
                                        }(), d6 = u(), n96.appendChild(_$e4), f4 = 0; f4 < B.length; f4++) r32[B[f4]] = s9[f4].offsetWidth, _$o[B[f4]] = s9[f4].offsetHeight;
                                    return [
                                        2,
                                        O.filter(function(n102) {
                                            return l10(d6[n102]);
                                        })
                                    ];
                                });
                            });
                        });
                    },
                    domBlockers: function domBlockers(n103) {
                        var r35 = (void 0 === n103 ? {} : n103).debug;
                        return e46(this, void 0, void 0, function() {
                            var _$n, _$e, o23, i18, a6;
                            return t(this, function(t45) {
                                switch (t45.label) {
                                    case 0:
                                        return j() || A() ? (c8 = atob, _$n = {
                                            abpIndo: [
                                                "#Iklan-Melayang",
                                                "#Kolom-Iklan-728",
                                                "#SidebarIklan-wrapper",
                                                '[title="ALIENBOLA" i]',
                                                c8("I0JveC1CYW5uZXItYWRz")
                                            ],
                                            abpvn: [
                                                ".quangcao",
                                                "#mobileCatfish",
                                                c8("LmNsb3NlLWFkcw=="),
                                                '[id^="bn_bottom_fixed_"]',
                                                "#pmadv"
                                            ],
                                            adBlockFinland: [
                                                ".mainostila",
                                                c8("LnNwb25zb3JpdA=="),
                                                ".ylamainos",
                                                c8("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
                                                c8("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")
                                            ],
                                            adBlockPersian: [
                                                "#navbar_notice_50",
                                                ".kadr",
                                                'TABLE[width="140px"]',
                                                "#divAgahi",
                                                c8("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")
                                            ],
                                            adBlockWarningRemoval: [
                                                "#adblock-honeypot",
                                                ".adblocker-root",
                                                ".wp_adblock_detect",
                                                c8("LmhlYWRlci1ibG9ja2VkLWFk"),
                                                c8("I2FkX2Jsb2NrZXI=")
                                            ],
                                            adGuardAnnoyances: [
                                                ".hs-sosyal",
                                                "#cookieconsentdiv",
                                                'div[class^="app_gdpr"]',
                                                ".as-oil",
                                                '[data-cypress="soft-push-notification-modal"]'
                                            ],
                                            adGuardBase: [
                                                ".BetterJsPopOverlay",
                                                c8("I2FkXzMwMFgyNTA="),
                                                c8("I2Jhbm5lcmZsb2F0MjI="),
                                                c8("I2NhbXBhaWduLWJhbm5lcg=="),
                                                c8("I0FkLUNvbnRlbnQ=")
                                            ],
                                            adGuardChinese: [
                                                c8("LlppX2FkX2FfSA=="),
                                                c8("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
                                                "#widget-quan",
                                                c8("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
                                                c8("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")
                                            ],
                                            adGuardFrench: [
                                                "#pavePub",
                                                c8("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
                                                ".mobile_adhesion",
                                                ".widgetadv",
                                                c8("LmFkc19iYW4=")
                                            ],
                                            adGuardGerman: [
                                                'aside[data-portal-id="leaderboard"]'
                                            ],
                                            adGuardJapanese: [
                                                "#kauli_yad_1",
                                                c8("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
                                                c8("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
                                                c8("LmFkZ29vZ2xl"),
                                                c8("Ll9faXNib29zdFJldHVybkFk")
                                            ],
                                            adGuardMobile: [
                                                c8("YW1wLWF1dG8tYWRz"),
                                                c8("LmFtcF9hZA=="),
                                                'amp-embed[type="24smi"]',
                                                "#mgid_iframe1",
                                                c8("I2FkX2ludmlld19hcmVh")
                                            ],
                                            adGuardRussian: [
                                                c8("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
                                                c8("LnJlY2xhbWE="),
                                                'div[id^="smi2adblock"]',
                                                c8("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
                                                "#psyduckpockeball"
                                            ],
                                            adGuardSocial: [
                                                c8("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
                                                c8("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
                                                ".etsy-tweet",
                                                "#inlineShare",
                                                ".popup-social"
                                            ],
                                            adGuardSpanishPortuguese: [
                                                "#barraPublicidade",
                                                "#Publicidade",
                                                "#publiEspecial",
                                                "#queTooltip",
                                                ".cnt-publi"
                                            ],
                                            adGuardTrackingProtection: [
                                                "#qoo-counter",
                                                c8("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
                                                c8("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
                                                c8("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
                                                "#top100counter"
                                            ],
                                            adGuardTurkish: [
                                                "#backkapat",
                                                c8("I3Jla2xhbWk="),
                                                c8("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
                                                c8("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
                                                c8("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")
                                            ],
                                            bulgarian: [
                                                c8("dGQjZnJlZW5ldF90YWJsZV9hZHM="),
                                                "#ea_intext_div",
                                                ".lapni-pop-over",
                                                "#xenium_hot_offers"
                                            ],
                                            easyList: [
                                                ".yb-floorad",
                                                c8("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
                                                c8("LnRyYWZmaWNqdW5reS1hZA=="),
                                                ".textad_headline",
                                                c8("LnNwb25zb3JlZC10ZXh0LWxpbmtz")
                                            ],
                                            easyListChina: [
                                                c8("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
                                                c8("LmZyb250cGFnZUFkdk0="),
                                                "#taotaole",
                                                "#aafoot.top_box",
                                                ".cfa_popup"
                                            ],
                                            easyListCookie: [
                                                ".ezmob-footer",
                                                ".cc-CookieWarning",
                                                "[data-cookie-number]",
                                                c8("LmF3LWNvb2tpZS1iYW5uZXI="),
                                                ".sygnal24-gdpr-modal-wrap"
                                            ],
                                            easyListCzechSlovak: [
                                                "#onlajny-stickers",
                                                c8("I3Jla2xhbW5pLWJveA=="),
                                                c8("LnJla2xhbWEtbWVnYWJvYXJk"),
                                                ".sklik",
                                                c8("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")
                                            ],
                                            easyListDutch: [
                                                c8("I2FkdmVydGVudGll"),
                                                c8("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
                                                ".adstekst",
                                                c8("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
                                                "#semilo-lrectangle"
                                            ],
                                            easyListGermany: [
                                                "#SSpotIMPopSlider",
                                                c8("LnNwb25zb3JsaW5rZ3J1ZW4="),
                                                c8("I3dlcmJ1bmdza3k="),
                                                c8("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
                                                c8("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")
                                            ],
                                            easyListItaly: [
                                                c8("LmJveF9hZHZfYW5udW5jaQ=="),
                                                ".sb-box-pubbliredazionale",
                                                c8("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
                                                c8("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
                                                c8("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")
                                            ],
                                            easyListLithuania: [
                                                c8("LnJla2xhbW9zX3RhcnBhcw=="),
                                                c8("LnJla2xhbW9zX251b3JvZG9z"),
                                                c8("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
                                                c8("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
                                                c8("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")
                                            ],
                                            estonian: [
                                                c8("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")
                                            ],
                                            fanboyAnnoyances: [
                                                "#ac-lre-player",
                                                ".navigate-to-top",
                                                "#subscribe_popup",
                                                ".newsletter_holder",
                                                "#back-top"
                                            ],
                                            fanboyAntiFacebook: [
                                                ".util-bar-module-firefly-visible"
                                            ],
                                            fanboyEnhancedTrackers: [
                                                ".open.pushModal",
                                                "#issuem-leaky-paywall-articles-zero-remaining-nag",
                                                "#sovrn_container",
                                                'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
                                                ".BlockNag__Card"
                                            ],
                                            fanboySocial: [
                                                "#FollowUs",
                                                "#meteored_share",
                                                "#social_follow",
                                                ".article-sharer",
                                                ".community__social-desc"
                                            ],
                                            frellwitSwedish: [
                                                c8("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
                                                c8("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
                                                "article.category-samarbete",
                                                c8("ZGl2LmhvbGlkQWRz"),
                                                "ul.adsmodern"
                                            ],
                                            greekAdBlock: [
                                                c8("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
                                                c8("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
                                                c8("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
                                                "DIV.agores300",
                                                "TABLE.advright"
                                            ],
                                            hungarian: [
                                                "#cemp_doboz",
                                                ".optimonk-iframe-container",
                                                c8("LmFkX19tYWlu"),
                                                c8("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
                                                "#hirdetesek_box"
                                            ],
                                            iDontCareAboutCookies: [
                                                '.alert-info[data-block-track*="CookieNotice"]',
                                                ".ModuleTemplateCookieIndicator",
                                                ".o--cookies--container",
                                                "#cookies-policy-sticky",
                                                "#stickyCookieBar"
                                            ],
                                            icelandicAbp: [
                                                c8("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")
                                            ],
                                            latvian: [
                                                c8("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
                                                c8("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")
                                            ],
                                            listKr: [
                                                c8("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
                                                c8("I2xpdmVyZUFkV3JhcHBlcg=="),
                                                c8("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
                                                c8("aW5zLmZhc3R2aWV3LWFk"),
                                                ".revenue_unit_item.dable"
                                            ],
                                            listeAr: [
                                                c8("LmdlbWluaUxCMUFk"),
                                                ".right-and-left-sponsers",
                                                c8("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
                                                c8("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
                                                c8("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")
                                            ],
                                            listeFr: [
                                                c8("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
                                                c8("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
                                                c8("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
                                                ".site-pub-interstitiel",
                                                'div[id^="crt-"][data-criteo-id]'
                                            ],
                                            officialPolish: [
                                                "#ceneo-placeholder-ceneo-12",
                                                c8("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
                                                c8("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
                                                c8("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
                                                c8("ZGl2I3NrYXBpZWNfYWQ=")
                                            ],
                                            ro: [
                                                c8("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
                                                c8("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
                                                c8("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
                                                c8("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
                                                'a[href^="/url/"]'
                                            ],
                                            ruAd: [
                                                c8("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
                                                c8("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
                                                c8("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
                                                "#pgeldiz",
                                                ".yandex-rtb-block"
                                            ],
                                            thaiAds: [
                                                "a[href*=macau-uta-popup]",
                                                c8("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
                                                c8("LmFkczMwMHM="),
                                                ".bumq",
                                                ".img-kosana"
                                            ],
                                            webAnnoyancesUltralist: [
                                                "#mod-social-share-2",
                                                "#social-tools",
                                                c8("LmN0cGwtZnVsbGJhbm5lcg=="),
                                                ".zergnet-recommend",
                                                ".yt.btn-link.btn-md.btn"
                                            ]
                                        }, _$e = Object.keys(_$n), [
                                            4,
                                            rn((a6 = []).concat.apply(a6, _$e.map(function(e) {
                                                return _$n[e];
                                            })))
                                        ]) : [
                                            2,
                                            void 0
                                        ];
                                    case 1:
                                        return o23 = t45.sent(), r35 && function(n104, e) {
                                            for (var _$t = "DOM blockers debug:\n```", r36 = 0, o24 = Object.keys(n104); r36 < o24.length; r36++) {
                                                var i19 = o24[r36];
                                                _$t += "\n".concat(i19, ":");
                                                for (var a = 0, c = n104[i19]; a < c.length; a++) {
                                                    var u = c[a];
                                                    _$t += "\n  ".concat(e[u] ? "\uD83D\uDEAB" : "\u27A1\uFE0F", " ").concat(u);
                                                }
                                            }
                                            console.log("".concat(_$t, "\n```"));
                                        }(_$n, o23), (i18 = _$e.filter(function(e) {
                                            var _$t = _$n[e];
                                            return f(_$t.map(function(n105) {
                                                return o23[n105];
                                            })) > .6 * _$t.length;
                                        })).sort(), [
                                            2,
                                            i18
                                        ];
                                }
                                var c8;
                            });
                        });
                    },
                    fontPreferences: function fontPreferences() {
                        return function(n106, e) {
                            void 0 === e && (e = 4e3);
                            return D(function(t, o25) {
                                var i20 = o25.document,
                                    a = i20.body,
                                    c = a.style;
                                c.width = "".concat(e, "px"), c.webkitTextSizeAdjust = c.textSizeAdjust = "none", Y() ? a.style.zoom = "".concat(1 / o25.devicePixelRatio) : j() && (a.style.zoom = "reset");
                                var u = i20.createElement("div");
                                return u.textContent = r([], Array(e / 20 << 0), !0).map(function() {
                                    return "word";
                                }).join(" "), a.appendChild(u), n106(i20, a);
                            }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
                        }(function(n107, e) {
                            for (var t46 = {}, r37 = {}, o26 = 0, i21 = Object.keys(vn); o26 < i21.length; o26++) {
                                var a = i21[o26],
                                    c = vn[a],
                                    u = c[0],
                                    l11 = void 0 === u ? {} : u,
                                    s10 = c[1],
                                    d7 = void 0 === s10 ? "mmMwWLliI0fiflO&1" : s10,
                                    f5 = n107.createElement("span");
                                f5.textContent = d7, f5.style.whiteSpace = "nowrap";
                                for (var m = 0, v2 = Object.keys(l11); m < v2.length; m++) {
                                    var h1 = v2[m],
                                        p1 = l11[h1];
                                    void 0 !== p1 && (f5.style[h1] = p1);
                                }
                                t46[a] = f5, e.append(n107.createElement("br"), f5);
                            }
                            for (var b1 = 0, y1 = Object.keys(vn); b1 < y1.length; b1++) {
                                r37[a = y1[b1]] = t46[a].getBoundingClientRect().width;
                            }
                            return r37;
                        });
                    },
                    audio: function audio() {
                        return j() && E() && C() || Y() && N() && (n108 = window, e = n108.URLPattern, f([
                            "union" in Set.prototype,
                            "Iterator" in n108,
                            e && "hasRegExpGroups" in e.prototype,
                            "RGB8" in WebGLRenderingContext.prototype
                        ]) >= 3) ? -4 : J();
                        var n108, e;
                    },
                    screenFrame: function screenFrame() {
                        var n109 = this;
                        if (j() && E() && C()) return function() {
                            return Promise.resolve(void 0);
                        };
                        var r38 = nn();
                        return function() {
                            return e46(n109, void 0, void 0, function() {
                                var n110, _$e;
                                return t(this, function(t47) {
                                    switch (t47.label) {
                                        case 0:
                                            return [
                                                4,
                                                r38()
                                            ];
                                        case 1:
                                            return n110 = t47.sent(), [
                                                2, [
                                                    (_$e = function _$e(n111) {
                                                        return null === n111 ? null : m2(n111, 10);
                                                    })(n110[0]),
                                                    _$e(n110[1]),
                                                    _$e(n110[2]),
                                                    _$e(n110[3])
                                                ]
                                            ];
                                    }
                                });
                            });
                        };
                    },
                    canvas: function canvas() {
                        return U(j() && E() && C());
                    },
                    osCpu: function osCpu() {
                        return navigator.oscpu;
                    },
                    languages: function languages() {
                        var n112, e = navigator,
                            t48 = [],
                            r39 = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
                        if (void 0 !== r39 && t48.push([
                                r39
                            ]), Array.isArray(e.languages)) Y() && f([!("MediaSettingsRange" in (n112 = window)),
                            "RTCEncodedAudioFrame" in n112,
                            "" + n112.Intl == "[object Intl]",
                            "" + n112.Reflect == "[object Reflect]"
                        ]) >= 3 || t48.push(e.languages);
                        else if ("string" == typeof e.languages) {
                            var o27 = e.languages;
                            o27 && t48.push(o27.split(","));
                        }
                        return t48;
                    },
                    colorDepth: function colorDepth() {
                        return window.screen.colorDepth;
                    },
                    deviceMemory: function deviceMemory() {
                        return d(s(navigator.deviceMemory), void 0);
                    },
                    screenResolution: function screenResolution() {
                        if (!(j() && E() && C())) return K();
                    },
                    hardwareConcurrency: function hardwareConcurrency() {
                        return d(l(navigator.hardwareConcurrency), void 0);
                    },
                    timezone: function timezone() {
                        var n113, e = null === (n113 = window.Intl) || void 0 === n113 ? void 0 : n113.DateTimeFormat;
                        if (e) {
                            var t49 = (new e).resolvedOptions().timeZone;
                            if (t49) return t49;
                        }
                        var r40, o28 = (r40 = (new Date).getFullYear(), -Math.max(s(new Date(r40, 0, 1).getTimezoneOffset()), s(new Date(r40, 6, 1).getTimezoneOffset())));
                        return "UTC".concat(o28 >= 0 ? "+" : "").concat(o28);
                    },
                    sessionStorage: function sessionStorage() {
                        try {
                            return !!window.sessionStorage;
                        } catch (n) {
                            return !0;
                        }
                    },
                    localStorage: function localStorage() {
                        try {
                            return !!window.localStorage;
                        } catch (n) {
                            return !0;
                        }
                    },
                    indexedDB: function indexedDB() {
                        if (!F() && !I()) try {
                            return !!window.indexedDB;
                        } catch (n) {
                            return !0;
                        }
                    },
                    openDatabase: function openDatabase() {
                        return !!window.openDatabase;
                    },
                    cpuClass: function cpuClass() {
                        return navigator.cpuClass;
                    },
                    platform: function platform() {
                        var n114 = navigator.platform;
                        return "MacIntel" === n114 && j() && !X() ? function() {
                            if ("iPad" === navigator.platform) return !0;
                            var n115 = screen,
                                e = n115.width / n115.height;
                            return f([
                                "MediaSource" in window, !!Element.prototype.webkitRequestFullscreen,
                                e > .65 && e < 1.53
                            ]) >= 2;
                        }() ? "iPad" : "iPhone" : n114;
                    },
                    plugins: function plugins() {
                        var n116 = navigator.plugins;
                        if (n116) {
                            for (var e = [], t50 = 0; t50 < n116.length; ++t50) {
                                var r41 = n116[t50];
                                if (r41) {
                                    for (var o29 = [], i22 = 0; i22 < r41.length; ++i22) {
                                        var a = r41[i22];
                                        o29.push({
                                            type: a.type,
                                            suffixes: a.suffixes
                                        });
                                    }
                                    e.push({
                                        name: r41.name,
                                        description: r41.description,
                                        mimeTypes: o29
                                    });
                                }
                            }
                            return e;
                        }
                    },
                    touchSupport: function touchSupport() {
                        var n117, e = navigator,
                            t51 = 0;
                        void 0 !== e.maxTouchPoints ? t51 = l(e.maxTouchPoints) : void 0 !== e.msMaxTouchPoints && (t51 = e.msMaxTouchPoints);
                        try {
                            document.createEvent("TouchEvent"), n117 = !0;
                        } catch (r) {
                            n117 = !1;
                        }
                        return {
                            maxTouchPoints: t51,
                            touchEvent: n117,
                            touchStart: "ontouchstart" in window
                        };
                    },
                    vendor: function vendor() {
                        return navigator.vendor || "";
                    },
                    vendorFlavors: function vendorFlavors() {
                        for (var n118 = [], e = 0, t52 = [
                                "chrome",
                                "safari",
                                "__crWeb",
                                "__gCrWeb",
                                "yandex",
                                "__yb",
                                "__ybro",
                                "__firefox__",
                                "__edgeTrackingPreventionStatistics",
                                "webkit",
                                "oprt",
                                "samsungAr",
                                "ucweb",
                                "UCShellJava",
                                "puffinDevice"
                            ]; e < t52.length; e++) {
                            var r42 = t52[e],
                                o30 = window[r42];
                            o30 && "object" == typeof o30 && n118.push(r42);
                        }
                        return n118.sort();
                    },
                    cookiesEnabled: function cookiesEnabled() {
                        var n119 = document;
                        try {
                            n119.cookie = "cookietest=1; SameSite=Strict;";
                            var e = -1 !== n119.cookie.indexOf("cookietest=");
                            return n119.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", e;
                        } catch (t) {
                            return !1;
                        }
                    },
                    colorGamut: function colorGamut() {
                        for (var n120 = 0, e = [
                                "rec2020",
                                "p3",
                                "srgb"
                            ]; n120 < e.length; n120++) {
                            var t53 = e[n120];
                            if (matchMedia("(color-gamut: ".concat(t53, ")")).matches) return t53;
                        }
                    },
                    invertedColors: function invertedColors() {
                        return !!an("inverted") || !an("none") && void 0;
                    },
                    forcedColors: function forcedColors() {
                        return !!cn("active") || !cn("none") && void 0;
                    },
                    monochrome: function monochrome() {
                        if (matchMedia("(min-monochrome: 0)").matches) {
                            for (var n121 = 0; n121 <= 100; ++n121)
                                if (matchMedia("(max-monochrome: ".concat(n121, ")")).matches) return n121;
                            throw new Error("Too high value");
                        }
                    },
                    contrast: function contrast() {
                        return un("no-preference") ? 0 : un("high") || un("more") ? 1 : un("low") || un("less") ? -1 : un("forced") ? 10 : void 0;
                    },
                    reducedMotion: function reducedMotion() {
                        return !!ln("reduce") || !ln("no-preference") && void 0;
                    },
                    reducedTransparency: function reducedTransparency() {
                        return !!sn("reduce") || !sn("no-preference") && void 0;
                    },
                    hdr: function hdr() {
                        return !!dn("high") || !dn("standard") && void 0;
                    },
                    math: function math() {
                        var n122, e = fn.acos || mn,
                            t54 = fn.acosh || mn,
                            r43 = fn.asin || mn,
                            o31 = fn.asinh || mn,
                            i23 = fn.atanh || mn,
                            a = fn.atan || mn,
                            c = fn.sin || mn,
                            u = fn.sinh || mn,
                            l12 = fn.cos || mn,
                            s11 = fn.cosh || mn,
                            d8 = fn.tan || mn,
                            f6 = fn.tanh || mn,
                            m = fn.exp || mn,
                            v3 = fn.expm1 || mn,
                            h2 = fn.log1p || mn;
                        return {
                            acos: e(.12312423423423424),
                            acosh: t54(1e308),
                            acoshPf: (n122 = 1e154, fn.log(n122 + fn.sqrt(n122 * n122 - 1))),
                            asin: r43(.12312423423423424),
                            asinh: o31(1),
                            asinhPf: function(n123) {
                                return fn.log(n123 + fn.sqrt(n123 * n123 + 1));
                            }(1),
                            atanh: i23(.5),
                            atanhPf: function(n124) {
                                return fn.log((1 + n124) / (1 - n124)) / 2;
                            }(.5),
                            atan: a(.5),
                            sin: c(-1e300),
                            sinh: u(1),
                            sinhPf: function(n125) {
                                return fn.exp(n125) - 1 / fn.exp(n125) / 2;
                            }(1),
                            cos: l12(10.000000000123),
                            cosh: s11(1),
                            coshPf: function(n126) {
                                return (fn.exp(n126) + 1 / fn.exp(n126)) / 2;
                            }(1),
                            tan: d8(-1e300),
                            tanh: f6(1),
                            tanhPf: function(n127) {
                                return (fn.exp(2 * n127) - 1) / (fn.exp(2 * n127) + 1);
                            }(1),
                            exp: m(1),
                            expm1: v3(1),
                            expm1Pf: function(n128) {
                                return fn.exp(n128) - 1;
                            }(1),
                            log1p: h2(10),
                            log1pPf: function(n129) {
                                return fn.log(1 + n129);
                            }(10),
                            powPI: function(n130) {
                                return fn.pow(fn.PI, n130);
                            }(-100)
                        };
                    },
                    pdfViewerEnabled: function pdfViewerEnabled() {
                        return navigator.pdfViewerEnabled;
                    },
                    architecture: function architecture() {
                        var n131 = new Float32Array(1),
                            e = new Uint8Array(n131.buffer);
                        return n131[0] = 1 / 0, n131[0] = n131[0] - n131[0], e[3];
                    },
                    applePay: function applePay() {
                        var n132 = window.ApplePaySession;
                        if ("function" != typeof(null == n132 ? void 0 : n132.canMakePayments)) return -1;
                        if (hn()) return -3;
                        try {
                            return n132.canMakePayments() ? 1 : 0;
                        } catch (e) {
                            return function(n133) {
                                if ((0, _instanceof /* default */ .Z)(n133, Error) && "InvalidAccessError" === n133.name && /\bfrom\b.*\binsecure\b/i.test(n133.message)) return -2;
                                throw n133;
                            }(e);
                        }
                    },
                    privateClickMeasurement: function privateClickMeasurement() {
                        var n134, e = document.createElement("a"),
                            t55 = null !== (n134 = e.attributionSourceId) && void 0 !== n134 ? n134 : e.attributionsourceid;
                        return void 0 === t55 ? void 0 : String(t55);
                    },
                    audioBaseLatency: function audioBaseLatency() {
                        var n135;
                        return A() || j() ? window.AudioContext && null !== (n135 = (new AudioContext).baseLatency) && void 0 !== n135 ? n135 : -1 : -2;
                    },
                    webGlBasics: function webGlBasics(n136) {
                        var e, t56, r44, o32, i24, a, c = wn(n136.cache);
                        if (!c) return -1;
                        if (!Wn(c)) return -2;
                        var u = Sn() ? null : c.getExtension("WEBGL_debug_renderer_info");
                        return {
                            version: (null === (e = c.getParameter(c.VERSION)) || void 0 === e ? void 0 : e.toString()) || "",
                            vendor: (null === (t56 = c.getParameter(c.VENDOR)) || void 0 === t56 ? void 0 : t56.toString()) || "",
                            vendorUnmasked: u ? null === (r44 = c.getParameter(u.UNMASKED_VENDOR_WEBGL)) || void 0 === r44 ? void 0 : r44.toString() : "",
                            renderer: (null === (o32 = c.getParameter(c.RENDERER)) || void 0 === o32 ? void 0 : o32.toString()) || "",
                            rendererUnmasked: u ? null === (i24 = c.getParameter(u.UNMASKED_RENDERER_WEBGL)) || void 0 === i24 ? void 0 : i24.toString() : "",
                            shadingLanguageVersion: (null === (a = c.getParameter(c.SHADING_LANGUAGE_VERSION)) || void 0 === a ? void 0 : a.toString()) || ""
                        };
                    },
                    webGlExtensions: function webGlExtensions(n137) {
                        var e = wn(n137.cache);
                        if (!e) return -1;
                        if (!Wn(e)) return -2;
                        var t57 = e.getSupportedExtensions(),
                            r45 = e.getContextAttributes(),
                            o33 = [],
                            i25 = [],
                            a = [],
                            c = [],
                            u = [];
                        if (r45)
                            for (var l13 = 0, s12 = Object.keys(r45); l13 < s12.length; l13++) {
                                var d9 = s12[l13];
                                i25.push("".concat(d9, "=").concat(r45[d9]));
                            }
                        for (var f7 = 0, m = kn(e); f7 < m.length; f7++) {
                            var v4 = e[L1 = m[f7]];
                            a.push("".concat(L1, "=").concat(v4).concat(pn.has(v4) ? "=".concat(e.getParameter(v4)) : ""));
                        }
                        if (t57)
                            for (var h3 = 0, p2 = t57; h3 < p2.length; h3++) {
                                var b2 = p2[h3];
                                if (!("WEBGL_debug_renderer_info" === b2 && Sn() || "WEBGL_polygon_mode" === b2 && (Y() || j()))) {
                                    var y2 = e.getExtension(b2);
                                    if (y2)
                                        for (var g1 = 0, w1 = kn(y2); g1 < w1.length; g1++) {
                                            var L1;
                                            v4 = y2[L1 = w1[g1]];
                                            c.push("".concat(L1, "=").concat(v4).concat(bn.has(v4) ? "=".concat(e.getParameter(v4)) : ""));
                                        }
                                    else o33.push(b2);
                                }
                            }
                        for (var k1 = 0, V1 = yn; k1 < V1.length; k1++)
                            for (var S1 = V1[k1], W1 = 0, x1 = gn; W1 < x1.length; W1++) {
                                var _$Z = x1[W1],
                                    R1 = Ln(e, S1, _$Z);
                                u.push("".concat(S1, ".").concat(_$Z, "=").concat(R1.join(",")));
                            }
                        return c.sort(), a.sort(), {
                            contextAttributes: i25,
                            parameters: a,
                            shaderPrecisions: u,
                            extensions: t57,
                            extensionParameters: c,
                            unsupportedExtensions: o33
                        };
                    }
                };

                function Zn(n138) {
                    var e47 = function(n139) {
                            if (A()) return .4;
                            if (j()) return !X() || E() && C() ? .3 : .5;
                            var e = "value" in n139.platform ? n139.platform.value : "";
                            if (/^Win/.test(e)) return .6;
                            if (/^Mac/.test(e)) return .5;
                            return .7;
                        }(n138),
                        t58 = function(n140) {
                            return m2(.99 + .01 * n140, 1e-4);
                        }(e47);
                    return {
                        score: e47,
                        comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "".concat(t58))
                    };
                }

                function Rn(e) {
                    return JSON.stringify(e, function(e, t59) {
                        return (0, _instanceof /* default */ .Z)(t59, Error) ? n147({
                            name: (r46 = t59).name,
                            message: r46.message,
                            stack: null === (o34 = r46.stack) || void 0 === o34 ? void 0 : o34.split("\n")
                        }, r46) : t59;
                        var r46, o34;
                    }, 2);
                }

                function Mn(n141) {
                    return Z(function(n142) {
                        for (var e = "", t60 = 0, r47 = Object.keys(n142).sort(); t60 < r47.length; t60++) {
                            var o35 = r47[t60],
                                i26 = n142[o35],
                                a = "error" in i26 ? "error" : JSON.stringify(i26.value);
                            e += "".concat(e ? "|" : "").concat(o35.replace(/([:|\\])/g, "\\$1"), ":").concat(a);
                        }
                        return e;
                    }(n141));
                }

                function Gn(n143) {
                    return void 0 === n143 && (n143 = 50),
                        function(n144, e) {
                            void 0 === e && (e = 1 / 0);
                            var t61 = window.requestIdleCallback;
                            return t61 ? new Promise(function(n145) {
                                return t61.call(window, function() {
                                    return n145();
                                }, {
                                    timeout: e
                                });
                            }) : o(Math.min(n144, e));
                        }(n143, 2 * n143);
                }

                function Fn(n146, r48) {
                    var o36 = Date.now();
                    return {
                        get: function get(i27) {
                            return e46(this, void 0, void 0, function() {
                                var _$e5, a, c;
                                return t(this, function(t62) {
                                    switch (t62.label) {
                                        case 0:
                                            return _$e5 = Date.now(), [
                                                4,
                                                n146()
                                            ];
                                        case 1:
                                            return a = t62.sent(), c = function(n148) {
                                                var _$e;
                                                return {
                                                    get visitorId() {
                                                        return void 0 === _$e && (_$e = Mn(this.components)), _$e;
                                                    },
                                                    set visitorId(n) {
                                                        _$e = n;
                                                    },
                                                    confidence: Zn(n148),
                                                    components: n148,
                                                    version: "4.5.1"
                                                };
                                            }(a), (r48 || (null == i27 ? void 0 : i27.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(_$e5 - o36, "\nvisitorId: ").concat(c.visitorId, "\ncomponents: ").concat(Rn(a), "\n```")), [
                                                2,
                                                c
                                            ];
                                    }
                                });
                            });
                        }
                    };
                }

                function In(n149) {
                    return void 0 === n149 && (n149 = {}), e46(this, void 0, void 0, function() {
                        var _$e, r49, o37;
                        return t(this, function(t63) {
                            switch (t63.label) {
                                case 0:
                                    return n149.monitoring, _$e = n149.delayFallback, r49 = n149.debug, [
                                        4,
                                        Gn(_$e)
                                    ];
                                case 1:
                                    return t63.sent(), o37 = function(n) {
                                        return M(xn, n, []);
                                    }({
                                        cache: {},
                                        debug: r49
                                    }), [
                                        2,
                                        Fn(o37, r49)
                                    ];
                            }
                        });
                    });
                }
                var Yn = {
                        load: In,
                        hashComponents: Mn,
                        componentsToDebugString: Rn
                    },
                    jn = ( /* unused pure expression or super */ null && (Z));


                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/tgma/telegramMAInfoCollector.js



                // @ts-nocheck

                var getFpInfo = function() {
                    var _ref1 = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee1() {
                        var getMiniAppInfo, getWebAppUser, getUserAgent, getBiometricManagerInfo, getWebAppChat, getData;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx1) {
                            while (1) switch (_ctx1.prev = _ctx1.next) {
                                case 0:
                                    getMiniAppInfo = function _getMiniAppInfo() {
                                        var ref, ref1, ref2, ref3;
                                        if (typeof window.Telegram === "undefined") {
                                            return {};
                                        }
                                        return {
                                            platform: (ref = window.Telegram) === null || ref === void 0 ? void 0 : (ref1 = ref.WebApp) === null || ref1 === void 0 ? void 0 : ref1.platform,
                                            version: (ref2 = window.Telegram) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.WebApp) === null || ref3 === void 0 ? void 0 : ref3.version
                                        };
                                    };
                                    getWebAppUser = function _getWebAppUser() {
                                        var ref, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18;
                                        if (typeof window.Telegram === "undefined") {
                                            return {};
                                        }
                                        return {
                                            userId: (ref = window.Telegram) === null || ref === void 0 ? void 0 : (ref4 = ref.WebApp) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.initDataUnsafe) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.user) === null || ref6 === void 0 ? void 0 : ref6.id,
                                            username: (ref7 = window.Telegram) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.WebApp) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.initDataUnsafe) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.user) === null || ref10 === void 0 ? void 0 : ref10.username,
                                            userLanguageCode: (ref11 = window.Telegram) === null || ref11 === void 0 ? void 0 : (ref12 = ref11.WebApp) === null || ref12 === void 0 ? void 0 : (ref13 = ref12.initDataUnsafe) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.user) === null || ref14 === void 0 ? void 0 : ref14.language_code,
                                            userIsBot: (ref15 = window.Telegram) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.WebApp) === null || ref16 === void 0 ? void 0 : (ref17 = ref16.initDataUnsafe) === null || ref17 === void 0 ? void 0 : (ref18 = ref17.user) === null || ref18 === void 0 ? void 0 : ref18.is_bot
                                        };
                                    };
                                    getUserAgent = function _getUserAgent() {
                                        return {
                                            ua: navigator.userAgent
                                        };
                                    };
                                    getBiometricManagerInfo = function _getBiometricManagerInfo() {
                                        var ref, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29;
                                        if (typeof window.Telegram === "undefined") {
                                            return {};
                                        }
                                        return {
                                            isBioInited: (ref = window.Telegram) === null || ref === void 0 ? void 0 : (ref19 = ref.WebApp) === null || ref19 === void 0 ? void 0 : (ref20 = ref19.BiometricManager) === null || ref20 === void 0 ? void 0 : ref20.isInited,
                                            isBioAva: (ref21 = window.Telegram) === null || ref21 === void 0 ? void 0 : (ref22 = ref21.WebApp) === null || ref22 === void 0 ? void 0 : (ref23 = ref22.BiometricManager) === null || ref23 === void 0 ? void 0 : ref23.isBiometricAvailable,
                                            bioType: (ref24 = window.Telegram) === null || ref24 === void 0 ? void 0 : (ref25 = ref24.WebApp) === null || ref25 === void 0 ? void 0 : (ref26 = ref25.BiometricManager) === null || ref26 === void 0 ? void 0 : ref26.biometricType,
                                            bioDeviceId: (ref27 = window.Telegram) === null || ref27 === void 0 ? void 0 : (ref28 = ref27.WebApp) === null || ref28 === void 0 ? void 0 : (ref29 = ref28.BiometricManager) === null || ref29 === void 0 ? void 0 : ref29.deviceId
                                        };
                                    };
                                    getWebAppChat = function _getWebAppChat() {
                                        var ref, ref30, ref31;
                                        if (typeof window.Telegram === "undefined") {
                                            return {};
                                        }
                                        return {
                                            // chatId: window.Telegram.WebApp?.initDataUnsafe?.id,
                                            chatType: (ref = window.Telegram) === null || ref === void 0 ? void 0 : (ref30 = ref.WebApp) === null || ref30 === void 0 ? void 0 : (ref31 = ref30.initDataUnsafe) === null || ref31 === void 0 ? void 0 : ref31.chat_type
                                        };
                                    };;;;;;
                                    getData = function() {
                                        var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                                            var fp, fpResult, _components, applePay, architecture, audio, cookiesEnabled, cpuClass, deviceMemory, fonts, hardwareConcurrency, hdr, languages, pdfViewerEnabled, plugins, screenResolution, timezone, touchSupport, vendor, webGlBasics, resultFromFingerprintJS, result;
                                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                                while (1) switch (_ctx.prev = _ctx.next) {
                                                    case 0:
                                                        _ctx.next = 2;
                                                        return Yn.load();
                                                    case 2:
                                                        fp = _ctx.sent;
                                                        _ctx.next = 5;
                                                        return fp.get();
                                                    case 5:
                                                        fpResult = _ctx.sent;
                                                        _components = fpResult.components, applePay = _components.applePay, architecture = _components.architecture, audio = _components.audio, cookiesEnabled = _components.cookiesEnabled, cpuClass = _components.cpuClass, deviceMemory = _components.deviceMemory, fonts = _components.fonts, hardwareConcurrency = _components.hardwareConcurrency, hdr = _components.hdr, languages = _components.languages, pdfViewerEnabled = _components.pdfViewerEnabled, plugins = _components.plugins, screenResolution = _components.screenResolution, timezone = _components.timezone, touchSupport = _components.touchSupport, vendor = _components.vendor, webGlBasics = _components.webGlBasics;
                                                        resultFromFingerprintJS = {
                                                            applePay: applePay.value,
                                                            architecture: architecture.value,
                                                            audio: audio.value,
                                                            cookiesEnabled: cookiesEnabled.value,
                                                            cpuClass: cpuClass.value,
                                                            deviceMemory: deviceMemory.value,
                                                            fonts: fonts.value,
                                                            hardwareConcurrency: hardwareConcurrency.value,
                                                            hdr: hdr.value,
                                                            languages: languages.value,
                                                            pdfViewerEnabled: pdfViewerEnabled.value,
                                                            plugins: plugins.value,
                                                            screenResolution: screenResolution.value,
                                                            timezone: timezone.value,
                                                            touchSupport: touchSupport.value,
                                                            browserVendor: vendor.value,
                                                            webGlVendor: webGlBasics.value.vendor,
                                                            webGlVendorUnmasked: webGlBasics.value.vendorUnmasked,
                                                            webGlRenderer: webGlBasics.value.renderer,
                                                            webGlRendererUnmasked: webGlBasics.value.rendererUnmasked,
                                                            webGlVersion: webGlBasics.value.version
                                                        };
                                                        result = (0, _object_spread /* default */ .Z)({}, getMiniAppInfo(), getUserAgent(), getBiometricManagerInfo(), getWebAppUser(), getWebAppChat(), resultFromFingerprintJS);
                                                        console.log(result);
                                                        return _ctx.abrupt("return", {});
                                                    case 11:
                                                    case "end":
                                                        return _ctx.stop();
                                                }
                                            }, _callee);
                                        }));
                                        return function getData() {
                                            return _ref.apply(this, arguments);
                                        };
                                    }();
                                    _ctx1.prev = 11;
                                    _ctx1.next = 14;
                                    return getData();
                                case 14:
                                    return _ctx1.abrupt("return", _ctx1.sent);
                                case 17:
                                    _ctx1.prev = 17;
                                    _ctx1.t0 = _ctx1["catch"](11);
                                    // eslint-disable-next-line no-console
                                    console.error("Fingerprint error: ", _ctx1.t0);
                                case 20:
                                    return _ctx1.abrupt("return", Promise.resolve({}));
                                case 21:
                                case "end":
                                    return _ctx1.stop();
                            }
                        }, _callee1, null, [
                            [
                                11,
                                17
                            ]
                        ]);
                    }));
                    return function getFpInfo() {
                        return _ref1.apply(this, arguments);
                    };
                }();
                /* harmony default export */
                const telegramMAInfoCollector = (getFpInfo);

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/config.js

                var initConfig = {
                    t: "",
                    domain: "",
                    storeKey: {
                        device_id_key: DEVICE_ID_KEY,
                        device_dfp_expire_key: DEVICE_DFP_EXPIRE
                    },
                    fvideo_token_key: "".concat(DEVICE_ID_KEY, "_T")
                };

                function mergeConfig(config) {
                    var ref, ref1, ref2;
                    if (!config.t) {
                        throw new Error("please make sure config.t and config.domain are not empty");
                    }
                    initConfig = {
                        t: config.t,
                        domain: config.domain || "",
                        storeKey: {
                            device_id_key: (config === null || config === void 0 ? void 0 : (ref = config.storeKey) === null || ref === void 0 ? void 0 : ref.device_id_key) || DEVICE_ID_KEY,
                            device_dfp_expire_key: (config === null || config === void 0 ? void 0 : (ref1 = config.storeKey) === null || ref1 === void 0 ? void 0 : ref1.device_dfp_expire_key) || DEVICE_DFP_EXPIRE
                        },
                        // token key
                        fvideo_token_key: "".concat((config === null || config === void 0 ? void 0 : (ref2 = config.storeKey) === null || ref2 === void 0 ? void 0 : ref2.device_id_key) || DEVICE_ID_KEY, "_T")
                    };
                    return initConfig;
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/cookie.js

                function tryDecode(str) {
                    try {
                        return decodeURIComponent(str);
                    } catch (e) {
                        return str;
                    }
                }

                function getSubDomain() {
                    var hostname = window.location.hostname;
                    var domains = hostname.split(".");
                    return domains.length > 2 ? domains.slice(-2).join(".") : hostname;
                }
                var isLegalKey = function(key) {
                    return [
                        undefined,
                        null,
                        ""
                    ].indexOf(key) === -1;
                };
                var cookie_getCookie = function(name) {
                    if (!isClient || !isLegalKey(name)) {
                        return null;
                    }
                    if (isElectron) {
                        if (name === "BNC-Location") {
                            // @ts-ignore: just for electron
                            return window.__store.getState().temp.bncLocation;
                        }
                        var value = window.localStorage.getItem("APP_COOKIES_".concat(name));
                        return value ? tryDecode(value) : null;
                    }
                    var nameEQ = "".concat(name, "=").trim();
                    var ref = document || {},
                        cookieStr = ref.cookie;
                    var cookieList = (cookieStr || "").split(";");
                    for (var i = 0; i < cookieList.length; i++) {
                        var ckTrim = (cookieList[i] || "").trim();
                        // startWith
                        if (ckTrim.indexOf(nameEQ) === 0) {
                            var value1 = ckTrim.slice(nameEQ.length).trim();
                            // quoted values
                            return tryDecode(value1[0] === '"' ? value1.slice(1, -1) : value1);
                        }
                    }
                    return null;
                };
                var setCookie = function(name, value) {
                    var days = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 365,
                        shouldUseSubDomain = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
                    if (!isClient || !isLegalKey(name)) {
                        return;
                    }
                    if (isElectron) {
                        if (value) {
                            window.localStorage.setItem("APP_COOKIES_".concat(name), encodeURIComponent(value));
                        } else {
                            window.localStorage.removeItem("APP_COOKIES_".concat(name));
                        }
                    }
                    var optionArr = [
                        "path=/"
                    ];
                    if (shouldUseSubDomain) {
                        optionArr.unshift("Domain=".concat(getSubDomain()));
                    }
                    if (!Number.isNaN(+days)) {
                        optionArr.unshift("Max-Age=".concat(Math.floor(24 * 60 * 60 * days)));
                    }
                    optionArr.unshift("".concat(name, "=").concat(encodeURIComponent(value)));
                    document.cookie = optionArr.join("; ");
                };
                var cookie_deleteCookie = function(name) {
                    document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/json.js
                var json_safeJsonParse = function(s) {
                    if (!s) return s;
                    try {
                        return JSON.parse(s);
                    } catch (error) {
                        return s;
                    }
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/store.js

                var isSupportLocal = function() {
                    return typeof localStorage !== "undefined";
                };
                var isSupportSession = function() {
                    return typeof sessionStorage !== "undefined";
                };
                var setLocalStorage = function(key, value) {
                    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    if (!isSupportLocal()) return;
                    if (!options.ttl) {
                        return localStorage.setItem(key, JSON.stringify(value));
                    }
                    // set ttl
                    return localStorage.setItem(key, JSON.stringify({
                        value: value,
                        expire: new Date().getTime() + options.ttl
                    }));
                };
                var setSessionStorage = function(key, value) {
                    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    if (!isSupportSession()) return;
                    if (!options.ttl) {
                        return sessionStorage.setItem(key, JSON.stringify(value));
                    }
                    return sessionStorage.setItem(key, JSON.stringify({
                        value: value,
                        expire: new Date().getTime() + options.ttl
                    }));
                };
                var getLocalStorage = function(key) {
                    if (!isSupportLocal()) return;
                    var originValue = localStorage.getItem(key);
                    var data = json_safeJsonParse(originValue);
                    if (!data) return data;
                    // expire is null
                    if (!data.expire) return data;
                    // has an expiration time and does not expire
                    if (data.expire && data.expire > new Date().getTime()) return data.value;
                    return null;
                };
                var getSessionStorage = function(key) {
                    if (!isSupportSession()) return;
                    var originValue = sessionStorage.getItem(key);
                    var data = safeJsonParse(originValue);
                    if (!data) return data;
                    // expire is null
                    if (!data.expire) return data;
                    // has an expiration time and does not expire
                    if (data.expire && data.expire > new Date().getTime()) return data.value;
                    return null;
                };
                var store_deleteLocalStorageItem = function(key) {
                    if (!isSupportLocal()) return;
                    localStorage.removeItem(key);
                };
                var deleteSessionStorageItem = function(key) {
                    if (!isSupportSession()) return;
                    sessionStorage.removeItem(key);
                };
                var setLocalStoragePlain = function(key, value) {
                    if (!isSupportLocal()) return;
                    return localStorage.setItem(key, value);
                };
                var setSessionStoragePlain = function(key, value) {
                    if (!isSupportSession()) return;
                    return sessionStorage.setItem(key, value);
                };
                var getLocalStoragePlain = function(key) {
                    if (!isSupportLocal()) return;
                    var originValue = localStorage.getItem(key);
                    return originValue;
                };
                var getSessionStoragePlain = function(key) {
                    if (!isSupportSession()) return;
                    var originValue = sessionStorage.getItem(key);
                    return originValue;
                };

                // EXTERNAL MODULE: external "MD5"
                var external_MD5_ = __webpack_require__("F3rx");
                var external_MD5_default = /*#__PURE__*/ __webpack_require__.n(external_MD5_);; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/request.js




                var addAuthHeader = function(options) {
                    if (false) {}
                    var csrftoken = cookie_getCookie("cr00");
                    options.headers = options.headers || {};
                    if (!options.headers.csrftoken) {
                        options.headers.csrftoken = external_MD5_default()(csrftoken || "");
                    }
                    return options;
                };
                var generateRequestPayload = function(options, reqMethod, params) {
                    var ref = addAuthHeader(options) || {},
                        headers = ref.headers,
                        credentials = ref.credentials;
                    var opts = {
                        method: reqMethod || "GET",
                        mode: "cors",
                        headers: headers,
                        credentials: credentials,
                        body: params
                    };
                    if (!(options.headers && options.headers["Content-Type"])) {
                        var ref1;
                        opts === null || opts === void 0 ? void 0 : (ref1 = opts.headers) === null || ref1 === void 0 ? void 0 : delete ref1["Content-Type"];
                    }
                    return opts;
                };
                var request = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(url, opts) {
                        var res;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    _ctx.next = 2;
                                    return fetch(url, opts);
                                case 2:
                                    res = _ctx.sent;
                                    _ctx.next = 5;
                                    return res.json();
                                case 5:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 6:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function request(url, opts) {
                        return _ref.apply(this, arguments);
                    };
                }();
                var post = function() {
                    var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(url, params) {
                        var options, opts, _args = arguments;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    options = _args.length > 2 && _args[2] !== void 0 ? _args[2] : {};
                                    opts = generateRequestPayload(options, "POST", params);
                                    return _ctx.abrupt("return", request(url, opts));
                                case 3:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return function post(url, params) {
                        return _ref.apply(this, arguments);
                    };
                }();

                // EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.4.3/node_modules/@swc/helpers/src/_define_property.mjs
                var _define_property = __webpack_require__("vctd");; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/fingerprintStore.js




                var getFirstNonNull = function() {
                    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
                        values[_key] = arguments[_key];
                    }
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var value = _step.value;
                            if (value !== null && value !== undefined) {
                                return value;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return null;
                };
                var getInfo = function(config) {
                    var ref;
                    var device_id_key = config.storeKey.device_id_key;
                    var fvideo_token_key = config.fvideo_token_key;
                    var dfpInCookie = cookie_getCookie(device_id_key);
                    var dfpInLS = (ref = getLocalStorage(device_id_key)) === null || ref === void 0 ? void 0 : ref.value;
                    var dtInCookie = cookie_getCookie(fvideo_token_key);
                    var dtInLS = getLocalStoragePlain(fvideo_token_key);
                    return {
                        dfp: getFirstNonNull(dfpInCookie, dfpInLS),
                        dt: getFirstNonNull(dtInCookie, dtInLS)
                    };
                };
                var saveInfo = function(dfp, token, config) {
                    var _storeKey = config.storeKey,
                        device_id_key = _storeKey.device_id_key,
                        device_dfp_expire_key = _storeKey.device_dfp_expire_key;
                    var fvideo_token_key = config.fvideo_token_key;
                    var expireTime = Date.now() + REPORT_FREQUENCY;
                    setCookie(device_id_key, dfp, 365);
                    setCookie(fvideo_token_key, token, 365);
                    setCookie(device_dfp_expire_key, expireTime, 365);
                    setLocalStorage(device_id_key, (0, _define_property /* default */ .Z)({
                        value: dfp
                    }, device_dfp_expire_key, expireTime));
                    setLocalStoragePlain(fvideo_token_key, token);
                };
                var removeInfo = function(config) {
                    var _storeKey = config.storeKey,
                        device_id_key = _storeKey.device_id_key,
                        device_dfp_expire_key = _storeKey.device_dfp_expire_key;
                    var fvideo_token_key = config.fvideo_token_key;
                    deleteCookie(device_id_key);
                    deleteCookie(fvideo_token_key);
                    deleteCookie(device_dfp_expire_key);
                    deleteLocalStorageItem(device_id_key);
                    deleteLocalStorageItem(fvideo_token_key);
                };
                var getReportExpireTime = function(config) {
                    var key = config.storeKey.device_dfp_expire_key;
                    var valueInCookie = cookie_getCookie(key);
                    if (valueInCookie != null) {
                        valueInCookie = Number(valueInCookie);
                    }
                    var valueInLS = getLocalStorage(key);
                    if (valueInLS != null && typeof valueInLS === "string") {
                        valueInLS = Number(valueInCookie);
                    }
                    return getFirstNonNull(valueInCookie, valueInLS);
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/libs/xxtea.js
                /**********************************************************\
                |                                                          |
                | xxtea.js                                                 |
                |                                                          |
                | XXTEA encryption algorithm library for JavaScript.       |
                |                                                          |
                | Encryption Algorithm Authors:                            |
                |      David J. Wheeler                                    |
                |      Roger M. Needham                                    |
                |                                                          |
                | Code Author: Ma Bingyao <mabingyao@gmail.com>            |
                | LastModified: Dec 27, 2019                               |
                |                                                          |
                \**********************************************************/ // load from https://github.com/xxtea/xxtea-js/blob/master/src/xxtea.js
                // do not use btoa from https://github.com/kaelzhang/b2a#readme it will cause encrypted result cannot decrypt in backend
                function btoa() {
                    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                    return function(str) {
                        var buf, i, j, len, r, l, c;
                        i = j = 0;
                        len = str.length;
                        r = len % 3;
                        len = len - r;
                        l = len / 3 << 2;
                        if (r > 0) {
                            l += 4;
                        }
                        buf = new Array(l);
                        while (i < len) {
                            c = str.charCodeAt(i++) << 16 | str.charCodeAt(i++) << 8 | str.charCodeAt(i++);
                            buf[j++] = base64EncodeChars[c >> 18] + base64EncodeChars[c >> 12 & 0x3f] + base64EncodeChars[c >> 6 & 0x3f] + base64EncodeChars[c & 0x3f];
                        }
                        if (r == 1) {
                            c = str.charCodeAt(i++);
                            buf[j++] = base64EncodeChars[c >> 2] + base64EncodeChars[(c & 0x03) << 4] + "==";
                        } else if (r == 2) {
                            c = str.charCodeAt(i++) << 8 | str.charCodeAt(i++);
                            buf[j++] = base64EncodeChars[c >> 10] + base64EncodeChars[c >> 4 & 0x3f] + base64EncodeChars[(c & 0x0f) << 2] + "=";
                        }
                        return buf.join("");
                    };
                }

                function xxtea_atob() {
                    var base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                        62, -1, -1, -1,
                        63,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59,
                        60,
                        61, -1, -1, -1, -1, -1, -1, -1,
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25, -1, -1, -1, -1, -1, -1,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51, -1, -1, -1, -1, -1,
                    ];
                    return function(str) {
                        var c1, c2, c3, c4;
                        var i, j, len, r, l, out;
                        len = str.length;
                        if (len % 4 !== 0) {
                            return "";
                        }
                        if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)) {
                            return "";
                        }
                        if (str.charAt(len - 2) == "=") {
                            r = 1;
                        } else if (str.charAt(len - 1) == "=") {
                            r = 2;
                        } else {
                            r = 0;
                        }
                        l = len;
                        if (r > 0) {
                            l -= 4;
                        }
                        l = (l >> 2) * 3 + r;
                        out = new Array(l);
                        i = j = 0;
                        while (i < len) {
                            // c1
                            c1 = base64DecodeChars[str.charCodeAt(i++)];
                            if (c1 == -1) break;
                            // c2
                            c2 = base64DecodeChars[str.charCodeAt(i++)];
                            if (c2 == -1) break;
                            out[j++] = String.fromCharCode(c1 << 2 | (c2 & 0x30) >> 4);
                            // c3
                            c3 = base64DecodeChars[str.charCodeAt(i++)];
                            if (c3 == -1) break;
                            out[j++] = String.fromCharCode((c2 & 0x0f) << 4 | (c3 & 0x3c) >> 2);
                            // c4
                            c4 = base64DecodeChars[str.charCodeAt(i++)];
                            if (c4 == -1) break;
                            out[j++] = String.fromCharCode((c3 & 0x03) << 6 | c4);
                        }
                        return out.join("");
                    };
                }
                var DELTA = 0x9e3779b9;

                function toBinaryString(v, includeLength) {
                    var length = v.length;
                    var n = length << 2;
                    if (includeLength) {
                        var m = v[length - 1];
                        n -= 4;
                        if (m < n - 3 || m > n) {
                            return null;
                        }
                        n = m;
                    }
                    for (var i = 0; i < length; i++) {
                        v[i] = String.fromCharCode(v[i] & 0xff, v[i] >>> 8 & 0xff, v[i] >>> 16 & 0xff, v[i] >>> 24 & 0xff);
                    }
                    var result = v.join("");
                    if (includeLength) {
                        return result.substring(0, n);
                    }
                    return result;
                }

                function toUint32Array(bs, includeLength) {
                    var length = bs.length;
                    var n = length >> 2;
                    if ((length & 3) !== 0) {
                        ++n;
                    }
                    var v;
                    if (includeLength) {
                        v = new Array(n + 1);
                        v[n] = length;
                    } else {
                        v = new Array(n);
                    }
                    for (var i = 0; i < length; ++i) {
                        v[i >> 2] |= bs.charCodeAt(i) << ((i & 3) << 3);
                    }
                    return v;
                }

                function int32(i) {
                    return i & 0xffffffff;
                }

                function mx(sum, y, z, p, e, k) {
                    return (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
                }

                function fixk(k) {
                    if (k.length < 4) k.length = 4;
                    return k;
                }

                function encryptUint32Array(v, k) {
                    var length = v.length;
                    var n = length - 1;
                    var y, z, sum, e, p, q;
                    z = v[n];
                    sum = 0;
                    for (q = Math.floor(6 + 52 / length) | 0; q > 0; --q) {
                        sum = int32(sum + DELTA);
                        e = sum >>> 2 & 3;
                        for (p = 0; p < n; ++p) {
                            y = v[p + 1];
                            z = v[p] = int32(v[p] + mx(sum, y, z, p, e, k));
                        }
                        y = v[0];
                        z = v[n] = int32(v[n] + mx(sum, y, z, n, e, k));
                    }
                    return v;
                }

                function decryptUint32Array(v, k) {
                    var length = v.length;
                    var n = length - 1;
                    var y, z, sum, e, p, q;
                    y = v[0];
                    q = Math.floor(6 + 52 / length);
                    for (sum = int32(q * DELTA); sum !== 0; sum = int32(sum - DELTA)) {
                        e = sum >>> 2 & 3;
                        for (p = n; p > 0; --p) {
                            z = v[p - 1];
                            y = v[p] = int32(v[p] - mx(sum, y, z, p, e, k));
                        }
                        z = v[n];
                        y = v[0] = int32(v[0] - mx(sum, y, z, 0, e, k));
                    }
                    return v;
                }

                function utf8Encode(str) {
                    if (/^[\x00-\x7f]*$/.test(str)) {
                        return str;
                    }
                    var buf = [];
                    var n = str.length;
                    for (var i = 0, j = 0; i < n; ++i, ++j) {
                        var codeUnit = str.charCodeAt(i);
                        if (codeUnit < 0x80) {
                            // @ts-ignore
                            buf[j] = str.charAt(i);
                        } else if (codeUnit < 0x800) {
                            // @ts-ignore
                            buf[j] = String.fromCharCode(0xc0 | codeUnit >> 6, 0x80 | codeUnit & 0x3f);
                        } else if (codeUnit < 0xd800 || codeUnit > 0xdfff) {
                            // @ts-ignore
                            buf[j] = String.fromCharCode(0xe0 | codeUnit >> 12, 0x80 | codeUnit >> 6 & 0x3f, 0x80 | codeUnit & 0x3f);
                        } else {
                            if (i + 1 < n) {
                                var nextCodeUnit = str.charCodeAt(i + 1);
                                if (codeUnit < 0xdc00 && 0xdc00 <= nextCodeUnit && nextCodeUnit <= 0xdfff) {
                                    var rune = ((codeUnit & 0x03ff) << 10 | nextCodeUnit & 0x03ff) + 0x010000;
                                    // @ts-ignore
                                    buf[j] = String.fromCharCode(0xf0 | rune >> 18 & 0x3f, 0x80 | rune >> 12 & 0x3f, 0x80 | rune >> 6 & 0x3f, 0x80 | rune & 0x3f);
                                    ++i;
                                    continue;
                                }
                            }
                            throw new Error("Malformed string");
                        }
                    }
                    return buf.join("");
                }

                function utf8DecodeShortString(bs, n) {
                    var charCodes = new Array(n);
                    var i = 0,
                        off = 0;
                    for (var len = bs.length; i < n && off < len; i++) {
                        var unit = bs.charCodeAt(off++);
                        switch (unit >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                charCodes[i] = unit;
                                break;
                            case 12:
                            case 13:
                                if (off < len) {
                                    charCodes[i] = (unit & 0x1f) << 6 | bs.charCodeAt(off++) & 0x3f;
                                } else {
                                    throw new Error("Unfinished UTF-8 octet sequence");
                                }
                                break;
                            case 14:
                                if (off + 1 < len) {
                                    charCodes[i] = (unit & 0x0f) << 12 | (bs.charCodeAt(off++) & 0x3f) << 6 | bs.charCodeAt(off++) & 0x3f;
                                } else {
                                    throw new Error("Unfinished UTF-8 octet sequence");
                                }
                                break;
                            case 15:
                                if (off + 2 < len) {
                                    var rune = ((unit & 0x07) << 18 | (bs.charCodeAt(off++) & 0x3f) << 12 | (bs.charCodeAt(off++) & 0x3f) << 6 | bs.charCodeAt(off++) & 0x3f) - 0x10000;
                                    if (0 <= rune && rune <= 0xfffff) {
                                        charCodes[i++] = rune >> 10 & 0x03ff | 0xd800;
                                        charCodes[i] = rune & 0x03ff | 0xdc00;
                                    } else {
                                        throw new Error("Character outside valid Unicode range: 0x" + rune.toString(16));
                                    }
                                } else {
                                    throw new Error("Unfinished UTF-8 octet sequence");
                                }
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + unit.toString(16));
                        }
                    }
                    if (i < n) {
                        charCodes.length = i;
                    }
                    return String.fromCharCode.apply(String, charCodes);
                }

                function utf8DecodeLongString(bs, n) {
                    var buf = [];
                    var charCodes = new Array(0x8000);
                    var i = 0,
                        off = 0;
                    for (var len = bs.length; i < n && off < len; i++) {
                        var unit = bs.charCodeAt(off++);
                        switch (unit >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                charCodes[i] = unit;
                                break;
                            case 12:
                            case 13:
                                if (off < len) {
                                    charCodes[i] = (unit & 0x1f) << 6 | bs.charCodeAt(off++) & 0x3f;
                                } else {
                                    throw new Error("Unfinished UTF-8 octet sequence");
                                }
                                break;
                            case 14:
                                if (off + 1 < len) {
                                    charCodes[i] = (unit & 0x0f) << 12 | (bs.charCodeAt(off++) & 0x3f) << 6 | bs.charCodeAt(off++) & 0x3f;
                                } else {
                                    throw new Error("Unfinished UTF-8 octet sequence");
                                }
                                break;
                            case 15:
                                if (off + 2 < len) {
                                    var rune = ((unit & 0x07) << 18 | (bs.charCodeAt(off++) & 0x3f) << 12 | (bs.charCodeAt(off++) & 0x3f) << 6 | bs.charCodeAt(off++) & 0x3f) - 0x10000;
                                    if (0 <= rune && rune <= 0xfffff) {
                                        charCodes[i++] = rune >> 10 & 0x03ff | 0xd800;
                                        charCodes[i] = rune & 0x03ff | 0xdc00;
                                    } else {
                                        throw new Error("Character outside valid Unicode range: 0x" + rune.toString(16));
                                    }
                                } else {
                                    throw new Error("Unfinished UTF-8 octet sequence");
                                }
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + unit.toString(16));
                        }
                        if (i >= 0x7fff - 1) {
                            var size = i + 1;
                            charCodes.length = size;
                            // @ts-ignore
                            buf[buf.length] = String.fromCharCode.apply(String, charCodes);
                            n -= size;
                            i = -1;
                        }
                    }
                    if (i > 0) {
                        charCodes.length = i;
                        // @ts-ignore
                        buf[buf.length] = String.fromCharCode.apply(String, charCodes);
                    }
                    return buf.join("");
                }
                // n is UTF16 length
                function utf8Decode(bs, n) {
                    if (n === undefined || n === null || n < 0) n = bs.length;
                    if (n === 0) return "";
                    if (/^[\x00-\x7f]*$/.test(bs) || !/^[\x00-\xff]*$/.test(bs)) {
                        if (n === bs.length) return bs;
                        return bs.substr(0, n);
                    }
                    return n < 0x7fff ? utf8DecodeShortString(bs, n) : utf8DecodeLongString(bs, n);
                }

                function encrypt(data, key) {
                    if (data === undefined || data === null || data.length === 0) {
                        return data;
                    }
                    data = utf8Encode(data);
                    key = utf8Encode(key);
                    return toBinaryString(encryptUint32Array(toUint32Array(data, true), fixk(toUint32Array(key, false))), false);
                }

                function encryptToBase64(data, key) {
                    // @ts-ignore
                    return btoa()(encrypt(data, key));
                }

                function decrypt(data, key) {
                    if (data === undefined || data === null || data.length === 0) {
                        return data;
                    }
                    key = utf8Encode(key);
                    // @ts-ignore
                    return utf8Decode(toBinaryString(decryptUint32Array(toUint32Array(data, false), fixk(toUint32Array(key, false))), true));
                }

                function decryptFromBase64(data, key) {
                    if (data === undefined || data === null || data.length === 0) {
                        return data;
                    }
                    // @ts-ignore
                    return decrypt(xxtea_atob()(data), key);
                }
                /* harmony default export */
                const xxtea = ({
                    utf8Encode: utf8Encode,
                    utf8Decode: utf8Decode,
                    encrypt: encrypt,
                    encryptToBase64: encryptToBase64,
                    decrypt: decrypt,
                    decryptFromBase64: decryptFromBase64
                });

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/xxteaService.js

                var generateRandomKey = function(length) {
                    var all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                    var key = "";
                    while (key.length < length) {
                        var index = Math.floor(Math.random() * all.length);
                        key += all[index];
                    }
                    return key;
                };
                /**
                 * Calculates a checksum for a given string and returns it as a two-character hexadecimal string
                 * @param str
                 */
                var generateChecksum = function(str) {
                    var cs = 0;
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var char = _step.value;
                            cs ^= char.charCodeAt(0);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    var hex = cs.toString(16);
                    return hex.length === 2 ? hex : "0".concat(hex);
                };
                /**
                 * Encrypt content using a self-defined format containing time information and a checksum
                 * @param token
                 */
                var xxteaService_encryptWithChecksum = function(token) {
                    var randomKey = generateRandomKey(6);
                    var ts = Date.now();
                    var toEncrypt = "".concat(token, "|").concat(ts);
                    var xxteaEncryptedToken = xxtea.encryptToBase64(toEncrypt, randomKey);
                    var checksum = generateChecksum("".concat(randomKey).concat(xxteaEncryptedToken));
                    return "".concat(randomKey).concat(xxteaEncryptedToken).concat(checksum);
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/fingerprintAPI.js






                var sign = function(initConfig, params, client) {
                    var url = "".concat(initConfig.domain, "/fvideo/dt/sign/").concat(client, "?en=YDS&t=").concat(initConfig.t, "&v=").concat(SDK_VERSION);
                    var body = xxteaService_encryptWithChecksum(JSON.stringify(params));
                    try {
                        post(url, body, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(function(resp) {
                            if (resp.success) {
                                saveInfo(resp.dfp, resp.dt, initConfig);
                            }
                        });
                    } catch (e) {}
                };
                var report = function(initConfig, dfp, token, params, client) {
                    var reportDfpData = token || dfp;
                    var url = "".concat(initConfig.domain, "/fvideo/dt/report/").concat(client, "?en=YDS&t=").concat(initConfig.t, "&v=").concat(SDK_VERSION);
                    var body = xxteaService_encryptWithChecksum(JSON.stringify((0, _object_spread_props /* default */ .Z)((0, _object_spread /* default */ .Z)({}, params), {
                        dfp: reportDfpData
                    })));
                    try {
                        post(url, body, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(function(resp) {
                            if (resp.success) {
                                saveInfo(resp.dfp, resp.dt, initConfig);
                            }
                        });
                    } catch (e) {}
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/tgma/index.js




                // @ts-nocheck







                var deleteAllPlaces = function(key) {
                    cookie_deleteCookie(key);
                    store_deleteLocalStorageItem(key);
                    deleteSessionStorageItem(key);
                };
                var migrateTGToWeb = function(config) {
                    deleteAllPlaces(config.storeKey.device_id_key);
                    deleteAllPlaces(config.storeKey.device_dfp_expire_key);
                    deleteAllPlaces(config.fvideo_token_key);
                    var dfp = cookie_getCookie("BNC_TG_FV_KEY");
                    var dt = cookie_getCookie("BNC_TG_FV_KEY_T");
                    deleteAllPlaces("BNC_TG_FV_KEY");
                    deleteAllPlaces("BNC_TG_FV_KEY_T");
                    deleteAllPlaces("BNC_TG_FV_UT");
                    return {
                        dfp: dfp,
                        dt: dt
                    };
                };
                // 同步cookie 和 本地 localstorage
                function syncLocalTGMADfp(config) {
                    return _syncLocalTGMADfp.apply(this, arguments);
                }

                function _syncLocalTGMADfp() {
                    _syncLocalTGMADfp = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(config) {
                        var mergedConfig, fingerprints, dfp, dt, reportExpireTime, tgFingerprint, dfpInfo, params;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    _ctx.prev = 0;
                                    if (!(false || isHybrid)) {
                                        _ctx.next = 3;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 3:
                                    mergedConfig = mergeConfig(config);
                                    fingerprints = getInfo(mergedConfig);
                                    dfp = fingerprints.dfp;
                                    dt = fingerprints.dt;
                                    reportExpireTime = getReportExpireTime(mergedConfig);
                                    if (dfp && dfp.startsWith("3")) {
                                        tgFingerprint = migrateTGToWeb(mergedConfig);
                                        dfp = tgFingerprint.dfp;
                                        dt = tgFingerprint.dt;
                                        reportExpireTime = null;
                                    }
                                    if (!(dfp && dt && reportExpireTime && Number(reportExpireTime) > Date.now())) {
                                        _ctx.next = 11;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 11:
                                    _ctx.next = 13;
                                    return telegramMAInfoCollector();
                                case 13:
                                    dfpInfo = _ctx.sent;
                                    params = (0, _object_spread_props /* default */ .Z)((0, _object_spread /* default */ .Z)({}, dfpInfo), {
                                        deviceTime: Date.now()
                                    });
                                    if (dfp) {
                                        report(mergedConfig, dfp, dt, params, "tgma");
                                    } else {
                                        sign(mergedConfig, params, "tgma");
                                    }
                                    _ctx.next = 21;
                                    break;
                                case 18:
                                    _ctx.prev = 18;
                                    _ctx.t0 = _ctx["catch"](0);
                                    console.log(_ctx.t0);
                                case 21:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                0,
                                18
                            ]
                        ]);
                    }));
                    return _syncLocalTGMADfp.apply(this, arguments);
                }

                // EXTERNAL MODULE: ./node_modules/.pnpm/ua-parser-js@0.7.40/node_modules/ua-parser-js/src/ua-parser.js
                var ua_parser = __webpack_require__("kxow");
                // EXTERNAL MODULE: ./node_modules/.pnpm/fingerprintjs2@2.1.4/node_modules/fingerprintjs2/fingerprint2.js
                var fingerprint2 = __webpack_require__("pxnI");
                var fingerprint2_default = /*#__PURE__*/ __webpack_require__.n(fingerprint2);; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/timezone.js
                var formatTimeZone = function formatTimeZone(offset) {
                    var hours = Math.floor(Math.abs(offset) / 60);
                    var minutes = Math.abs(offset % 60);
                    var tz;
                    if (minutes === 0) {
                        tz = "".concat(hours.toString().padStart(2, "0"), ":00");
                    } else {
                        tz = "".concat(hours.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0"));
                    }
                    // If offset is positive, use negative timezone; if negative, use positive timezone
                    if (offset > 0) {
                        tz = "-".concat(tz);
                    } else {
                        tz = "+".concat(tz);
                    }
                    return "GMT".concat(tz);
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/browserPlugin.js

                var formatPlugins = function(data) {
                    var plugins = data.plugins || data.regular_plugins || data.ie_plugins;
                    if (!Array.isArray(plugins)) return DEFAULT_PLACEHOLDER;
                    var result = [];
                    plugins.forEach(function(plugin) {
                        result.push(plugin[0]);
                    });
                    if (result.length > 500) {
                        return result.slice(0, 500).join(",");
                    }
                    return result.join(",");
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/canvas.js

                var formatCanvas = function formatCanvas(canvasList) {
                    var baseStr = canvasList[1].replace("canvas fp:data:image/png;base64,", "");
                    var bin2hex = function bin2hex(s) {
                        var i;
                        var l;
                        var o = "";
                        var n;
                        s += "";
                        for (i = 0, l = s.length; i < l; i++) {
                            n = s.charCodeAt(i).toString(16);
                            o += n.length < 2 ? "0".concat(n) : n;
                        }
                        return o;
                    };
                    try {
                        var bin = atob(baseStr);
                        var crc = bin2hex(bin.slice(-16, -12));
                        return crc;
                    } catch (error) {
                        console.warn("Failed to get canvas code: ", error);
                        return DEFAULT_PLACEHOLDER;
                    }
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/screen.js

                var formatScreenResolution = function(data) {
                    var result = {
                        screenResolution: DEFAULT_PLACEHOLDER,
                        avaScreenResolution: DEFAULT_PLACEHOLDER
                    };
                    if (data.screenResolution) {
                        result.screenResolution = data.screenResolution.join(",");
                    }
                    if (data.availableScreenResolution) {
                        result.avaScreenResolution = data.availableScreenResolution.join(",");
                    }
                    return result;
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/utils/webgl.js

                var formatWebglInfo = function formatWebglInfo(webgl) {
                    var result = {
                        vendor: DEFAULT_PLACEHOLDER,
                        renderer: DEFAULT_PLACEHOLDER
                    };
                    if (!webgl || !webgl.length) return result;
                    var len = webgl.length;
                    var cnt = 0;
                    for (var i = 0; i < len; i++) {
                        var item = webgl[i] || "";
                        if (item.indexOf("webgl unmasked vendor:") > -1) {
                            result.vendor = item.split("webgl unmasked vendor:")[1] || DEFAULT_PLACEHOLDER;
                            cnt += 1;
                        } else if (item.indexOf("webgl unmasked renderer:") > -1) {
                            result.renderer = item.split("webgl unmasked renderer:")[1] || DEFAULT_PLACEHOLDER;
                            cnt += 1;
                        }
                        if (cnt === 2) break;
                    }
                    return result;
                };

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/web/webInfoCollector.js














                var excludesFpOptions = {
                    colorDepth: true,
                    deviceMemory: true,
                    pixelRatio: true,
                    hardwareConcurrency: true,
                    sessionStorage: true,
                    localStorage: true,
                    indexedDb: true,
                    addBehavior: true,
                    openDatabase: true,
                    // cpuClass: true,
                    // doNotTrack: true,
                    adBlock: true,
                    hasLiedLanguages: true,
                    hasLiedResolution: true,
                    hasLiedOs: true,
                    hasLiedBrowser: true,
                    touchSupport: true,
                    fonts: true,
                    fontsFlash: true,
                    enumerateDevices: true
                };
                var uaParseResult;

                function getUAParseResult() {
                    uaParseResult = uaParseResult || new ua_parser.UAParser().getResult();
                    return uaParseResult;
                }
                var defaultValue = DEFAULT_PLACEHOLDER;
                var getSystemAndVersion = function getSystemAndVersion() {
                    var os = getUAParseResult().os;
                    if (!os || !os.name) return defaultValue;
                    return "".concat(os.name, " ").concat(os.version);
                };
                var getBrandAndModal = function getBrandAndModal() {
                    var device = getUAParseResult().device;
                    if (!device || !device.model) return defaultValue;
                    return [
                        device.type,
                        device.vendor,
                        device.model,
                        ""
                    ].join(" ");
                };
                var getDeviceName = function getDeviceName() {
                    var _uaParseResult = getUAParseResult();
                    var browser = _uaParseResult.browser;
                    var os = _uaParseResult.os || {};
                    if (!browser || !browser.name) return defaultValue;
                    return "".concat(browser.name, " V").concat(browser.version, " (").concat(os.name || "", ")");
                };
                var _getFpInfoCacheKey = function() {
                    return FINGERPRINT_INFO;
                };
                var webInfoCollector_getFpInfo = function() {
                    var _ref1 = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee1() {
                        var cacheKey, options, fpInfo, getData;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx1) {
                            while (1) switch (_ctx1.prev = _ctx1.next) {
                                case 0:
                                    if (isClient) {
                                        _ctx1.next = 2;
                                        break;
                                    }
                                    return _ctx1.abrupt("return", Promise.resolve({}));
                                case 2:
                                    cacheKey = _getFpInfoCacheKey();
                                    options = (0, _object_spread /* default */ .Z)({}, excludesFpOptions);
                                    fpInfo = json_safeJsonParse(getLocalStorage(cacheKey));
                                    if (!fpInfo) {
                                        _ctx1.next = 8;
                                        break;
                                    }
                                    fpInfo.deviceTime = Date.now();
                                    return _ctx1.abrupt("return", fpInfo);
                                case 8:
                                    getData = function() {
                                        var _ref = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee() {
                                            var result, resultObj, webgl, screen, res1, values;
                                            return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                                                while (1) switch (_ctx.prev = _ctx.next) {
                                                    case 0:
                                                        _ctx.next = 2;
                                                        return fingerprint2_default().getPromise({
                                                            excludes: options
                                                        });
                                                    case 2:
                                                        result = _ctx.sent;
                                                        resultObj = result.reduce(function(res, cur) {
                                                            res[cur.key] = cur.value;
                                                            return res;
                                                        }, {});
                                                        webgl = formatWebglInfo(resultObj.webgl);
                                                        screen = formatScreenResolution(resultObj);
                                                        res1 = {
                                                            resolution: screen.screenResolution,
                                                            availableResolution: screen.avaScreenResolution,
                                                            systemVersion: getSystemAndVersion(),
                                                            brandModel: getBrandAndModal(),
                                                            sysLanguage: resultObj.language,
                                                            timezone: formatTimeZone(resultObj.timezoneOffset),
                                                            timezoneOffset: resultObj.timezoneOffset,
                                                            // web
                                                            ua: resultObj.userAgent,
                                                            pluginList: formatPlugins(resultObj),
                                                            canvas: formatCanvas(resultObj.canvas),
                                                            webglVendor: webgl.vendor,
                                                            webglRenderer: webgl.renderer,
                                                            audio: resultObj.audio,
                                                            platform: resultObj.platform,
                                                            webTimezone: resultObj.timezone,
                                                            cpuClass: resultObj.cpuClass,
                                                            doNotTrack: resultObj.doNotTrack,
                                                            deviceName: getDeviceName(),
                                                            domain: document.domain
                                                        };
                                                        values = Object.keys(res1).sort().map(function(k) {
                                                            return res1[k];
                                                        });
                                                        res1.fingerprint = fingerprint2_default().x64hash128(values.join(""), 32);
                                                        // expire time: 1 days
                                                        setLocalStorage(cacheKey, JSON.stringify(res1), {
                                                            ttl: 24 * 3600 * 1000
                                                        });
                                                        return _ctx.abrupt("return", res1);
                                                    case 11:
                                                    case "end":
                                                        return _ctx.stop();
                                                }
                                            }, _callee);
                                        }));
                                        return function getData() {
                                            return _ref.apply(this, arguments);
                                        };
                                    }();
                                    _ctx1.prev = 9;
                                    _ctx1.next = 12;
                                    return getData();
                                case 12:
                                    return _ctx1.abrupt("return", _ctx1.sent);
                                case 15:
                                    _ctx1.prev = 15;
                                    _ctx1.t0 = _ctx1["catch"](9);
                                    // eslint-disable-next-line no-console
                                    console.error("Fingerprint error: ", _ctx1.t0);
                                case 18:
                                    return _ctx1.abrupt("return", Promise.resolve({}));
                                case 19:
                                case "end":
                                    return _ctx1.stop();
                            }
                        }, _callee1, null, [
                            [
                                9,
                                15
                            ]
                        ]);
                    }));
                    return function getFpInfo() {
                        return _ref1.apply(this, arguments);
                    };
                }();
                /* harmony default export */
                const webInfoCollector = (webInfoCollector_getFpInfo);

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/web/index.js









                // 同步cookie 和 本地 localstorage
                function syncLocalWebDfp(config) {
                    return _syncLocalWebDfp.apply(this, arguments);
                }

                function _syncLocalWebDfp() {
                    _syncLocalWebDfp = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(config) {
                        var mergedConfig, fingerprints, dfp, dt, reportExpireTime, dfpInfo, params;
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    _ctx.prev = 0;
                                    if (!(false || isHybrid)) {
                                        _ctx.next = 3;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 3:
                                    mergedConfig = mergeConfig(config);
                                    fingerprints = getInfo(mergedConfig);
                                    dfp = fingerprints.dfp;
                                    dt = fingerprints.dt;
                                    reportExpireTime = getReportExpireTime(mergedConfig);
                                    if (!(dfp && dt && reportExpireTime && Number(reportExpireTime) > Date.now())) {
                                        _ctx.next = 10;
                                        break;
                                    }
                                    return _ctx.abrupt("return");
                                case 10:
                                    _ctx.next = 12;
                                    return webInfoCollector();
                                case 12:
                                    dfpInfo = _ctx.sent;
                                    params = (0, _object_spread_props /* default */ .Z)((0, _object_spread /* default */ .Z)({}, dfpInfo), {
                                        deviceTime: Date.now()
                                    });
                                    if (dfp) {
                                        report(mergedConfig, dfp, dt, params, "web");
                                    } else {
                                        sign(mergedConfig, params, "web");
                                    }
                                    _ctx.next = 20;
                                    break;
                                case 17:
                                    _ctx.prev = 17;
                                    _ctx.t0 = _ctx["catch"](0);
                                    console.log(_ctx.t0);
                                case 20:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, null, [
                            [
                                0,
                                17
                            ]
                        ]);
                    }));
                    return _syncLocalWebDfp.apply(this, arguments);
                }

                ; // CONCATENATED MODULE: ./node_modules/.pnpm/@binance+fingerprintjs@0.2.0/node_modules/@binance/fingerprintjs/dist/esm/index.js


                // @ts-nocheck






                var esm_initConfig = {
                    t: "",
                    client: "",
                    domain: "",
                    storeKey: {
                        device_id_key: DEVICE_ID_KEY,
                        device_dfp_expire_key: DEVICE_DFP_EXPIRE
                    },
                    fvideo_token_key: "".concat(DEVICE_ID_KEY, "_T")
                };
                // 同步cookie 和 本地 localstorage
                function syncLocalDfp(config) {
                    return _syncLocalDfp.apply(this, arguments);
                }

                function _syncLocalDfp() {
                    _syncLocalDfp = (0, _async_to_generator /* default */ .Z)(external_regeneratorRuntime_default().mark(function _callee(config) {
                        return external_regeneratorRuntime_default().wrap(function _callee$(_ctx) {
                            while (1) switch (_ctx.prev = _ctx.next) {
                                case 0:
                                    if (!isTelegramMiniApp()) {
                                        _ctx.next = 5;
                                        break;
                                    }
                                    _ctx.next = 3;
                                    return syncLocalTGMADfp(config);
                                case 3:
                                    _ctx.next = 7;
                                    break;
                                case 5:
                                    _ctx.next = 7;
                                    return syncLocalWebDfp(config);
                                case 7:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }));
                    return _syncLocalDfp.apply(this, arguments);
                }
                var generateFvideoToken = function(token) {
                    return encryptWithChecksum(token);
                };
                var generateToken = function() {
                    var dtInCookie = getCookie(esm_initConfig.fvideo_token_key);
                    if (!dtInCookie) {
                        return "";
                    }
                    return generateFvideoToken(dtInCookie);
                };
                var getFvideoId = function() {
                    return getCookie(esm_initConfig.storeKey.device_id_key) || "";
                };


                /***/
            }),

        /***/
        "pxnI":
            /***/
            (function(module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
                /*
                 * Fingerprintjs2 2.1.4 - Modern & flexible browser fingerprint library v2
                 * https://github.com/fingerprintjs/fingerprintjs
                 * Copyright (c) 2020 Valentin Vasilyev (valentin@fingerprintjs.com)
                 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
                 *
                 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
                 * ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
                 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
                 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
                 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
                 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
                 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
                 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                 */
                /*
                 * This software contains code from open-source projects:
                 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
                 */

                /* global define */
                (function(name, context, definition) {
                    'use strict'
                    if (true) {
                        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
                            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                                (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
                                __WEBPACK_AMD_DEFINE_FACTORY__),
                            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
                    } else {}
                })('Fingerprint2', this, function() {
                    'use strict'

                    // detect if object is array
                    // only implement if no native implementation is available
                    if (typeof Array.isArray === 'undefined') {
                        Array.isArray = function(obj) {
                            return Object.prototype.toString.call(obj) === '[object Array]'
                        }
                    };

                    /// MurmurHash3 related functions

                    //
                    // Given two 64bit ints (as an array of two 32bit ints) returns the two
                    // added together as a 64bit int (as an array of two 32bit ints).
                    //
                    var x64Add = function(m, n) {
                        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
                        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
                        var o = [0, 0, 0, 0]
                        o[3] += m[3] + n[3]
                        o[2] += o[3] >>> 16
                        o[3] &= 0xffff
                        o[2] += m[2] + n[2]
                        o[1] += o[2] >>> 16
                        o[2] &= 0xffff
                        o[1] += m[1] + n[1]
                        o[0] += o[1] >>> 16
                        o[1] &= 0xffff
                        o[0] += m[0] + n[0]
                        o[0] &= 0xffff
                        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
                    }

                    //
                    // Given two 64bit ints (as an array of two 32bit ints) returns the two
                    // multiplied together as a 64bit int (as an array of two 32bit ints).
                    //
                    var x64Multiply = function(m, n) {
                        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
                        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
                        var o = [0, 0, 0, 0]
                        o[3] += m[3] * n[3]
                        o[2] += o[3] >>> 16
                        o[3] &= 0xffff
                        o[2] += m[2] * n[3]
                        o[1] += o[2] >>> 16
                        o[2] &= 0xffff
                        o[2] += m[3] * n[2]
                        o[1] += o[2] >>> 16
                        o[2] &= 0xffff
                        o[1] += m[1] * n[3]
                        o[0] += o[1] >>> 16
                        o[1] &= 0xffff
                        o[1] += m[2] * n[2]
                        o[0] += o[1] >>> 16
                        o[1] &= 0xffff
                        o[1] += m[3] * n[1]
                        o[0] += o[1] >>> 16
                        o[1] &= 0xffff
                        o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
                        o[0] &= 0xffff
                        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
                    }
                    //
                    // Given a 64bit int (as an array of two 32bit ints) and an int
                    // representing a number of bit positions, returns the 64bit int (as an
                    // array of two 32bit ints) rotated left by that number of positions.
                    //
                    var x64Rotl = function(m, n) {
                        n %= 64
                        if (n === 32) {
                            return [m[1], m[0]]
                        } else if (n < 32) {
                            return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
                        } else {
                            n -= 32
                            return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
                        }
                    }
                    //
                    // Given a 64bit int (as an array of two 32bit ints) and an int
                    // representing a number of bit positions, returns the 64bit int (as an
                    // array of two 32bit ints) shifted left by that number of positions.
                    //
                    var x64LeftShift = function(m, n) {
                        n %= 64
                        if (n === 0) {
                            return m
                        } else if (n < 32) {
                            return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
                        } else {
                            return [m[1] << (n - 32), 0]
                        }
                    }
                    //
                    // Given two 64bit ints (as an array of two 32bit ints) returns the two
                    // xored together as a 64bit int (as an array of two 32bit ints).
                    //
                    var x64Xor = function(m, n) {
                        return [m[0] ^ n[0], m[1] ^ n[1]]
                    }
                    //
                    // Given a block, returns murmurHash3's final x64 mix of that block.
                    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
                    // only place where we need to right shift 64bit ints.)
                    //
                    var x64Fmix = function(h) {
                        h = x64Xor(h, [0, h[0] >>> 1])
                        h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
                        h = x64Xor(h, [0, h[0] >>> 1])
                        h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
                        h = x64Xor(h, [0, h[0] >>> 1])
                        return h
                    }

                    //
                    // Given a string and an optional seed as an int, returns a 128 bit
                    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
                    //
                    var x64hash128 = function(key, seed) {
                        key = key || ''
                        seed = seed || 0
                        var remainder = key.length % 16
                        var bytes = key.length - remainder
                        var h1 = [0, seed]
                        var h2 = [0, seed]
                        var k1 = [0, 0]
                        var k2 = [0, 0]
                        var c1 = [0x87c37b91, 0x114253d5]
                        var c2 = [0x4cf5ad43, 0x2745937f]
                        for (var i = 0; i < bytes; i = i + 16) {
                            k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
                            k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
                            k1 = x64Multiply(k1, c1)
                            k1 = x64Rotl(k1, 31)
                            k1 = x64Multiply(k1, c2)
                            h1 = x64Xor(h1, k1)
                            h1 = x64Rotl(h1, 27)
                            h1 = x64Add(h1, h2)
                            h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
                            k2 = x64Multiply(k2, c2)
                            k2 = x64Rotl(k2, 33)
                            k2 = x64Multiply(k2, c1)
                            h2 = x64Xor(h2, k2)
                            h2 = x64Rotl(h2, 31)
                            h2 = x64Add(h2, h1)
                            h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
                        }
                        k1 = [0, 0]
                        k2 = [0, 0]
                        switch (remainder) {
                            case 15:
                                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
                                // fallthrough
                            case 14:
                                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
                                // fallthrough
                            case 13:
                                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
                                // fallthrough
                            case 12:
                                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
                                // fallthrough
                            case 11:
                                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
                                // fallthrough
                            case 10:
                                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
                                // fallthrough
                            case 9:
                                k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
                                k2 = x64Multiply(k2, c2)
                                k2 = x64Rotl(k2, 33)
                                k2 = x64Multiply(k2, c1)
                                h2 = x64Xor(h2, k2)
                                // fallthrough
                            case 8:
                                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
                                // fallthrough
                            case 7:
                                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
                                // fallthrough
                            case 6:
                                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
                                // fallthrough
                            case 5:
                                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
                                // fallthrough
                            case 4:
                                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
                                // fallthrough
                            case 3:
                                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
                                // fallthrough
                            case 2:
                                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
                                // fallthrough
                            case 1:
                                k1 = x64Xor(k1, [0, key.charCodeAt(i)])
                                k1 = x64Multiply(k1, c1)
                                k1 = x64Rotl(k1, 31)
                                k1 = x64Multiply(k1, c2)
                                h1 = x64Xor(h1, k1)
                                // fallthrough
                        }
                        h1 = x64Xor(h1, [0, key.length])
                        h2 = x64Xor(h2, [0, key.length])
                        h1 = x64Add(h1, h2)
                        h2 = x64Add(h2, h1)
                        h1 = x64Fmix(h1)
                        h2 = x64Fmix(h2)
                        h1 = x64Add(h1, h2)
                        h2 = x64Add(h2, h1)
                        return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
                    }

                    var defaultOptions = {
                        preprocessor: null,
                        audio: {
                            timeout: 1000,
                            // On iOS 11, audio context can only be used in response to user interaction.
                            // We require users to explicitly enable audio fingerprinting on iOS 11.
                            // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
                            excludeIOS11: true
                        },
                        fonts: {
                            swfContainerId: 'fingerprintjs2',
                            swfPath: 'flash/compiled/FontList.swf',
                            userDefinedFonts: [],
                            extendedJsFonts: false
                        },
                        screen: {
                            // To ensure consistent fingerprints when users rotate their mobile devices
                            detectScreenOrientation: true
                        },
                        plugins: {
                            sortPluginsFor: [/palemoon/i],
                            excludeIE: false
                        },
                        extraComponents: [],
                        excludes: {
                            // Unreliable on Windows, see https://github.com/fingerprintjs/fingerprintjs/issues/375
                            'enumerateDevices': true,
                            // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
                            'pixelRatio': true,
                            // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
                            'doNotTrack': true,
                            // uses js fonts already
                            'fontsFlash': true,
                            // Extensions (including AdBlock) are disabled by default in Incognito mod of Chrome and Firefox
                            // See https://github.com/fingerprintjs/fingerprintjs/issues/405
                            'adBlock': true
                        },
                        NOT_AVAILABLE: 'not available',
                        ERROR: 'error',
                        EXCLUDED: 'excluded'
                    }

                    var each = function(obj, iterator) {
                        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
                            obj.forEach(iterator)
                        } else if (obj.length === +obj.length) {
                            for (var i = 0, l = obj.length; i < l; i++) {
                                iterator(obj[i], i, obj)
                            }
                        } else {
                            for (var key in obj) {
                                if (obj.hasOwnProperty(key)) {
                                    iterator(obj[key], key, obj)
                                }
                            }
                        }
                    }

                    var map = function(obj, iterator) {
                        var results = []
                        // Not using strict equality so that this acts as a
                        // shortcut to checking for `null` and `undefined`.
                        if (obj == null) {
                            return results
                        }
                        if (Array.prototype.map && obj.map === Array.prototype.map) {
                            return obj.map(iterator)
                        }
                        each(obj, function(value, index, list) {
                            results.push(iterator(value, index, list))
                        })
                        return results
                    }

                    var extendSoft = function(target, source) {
                        if (source == null) {
                            return target
                        }
                        var value
                        var key
                        for (key in source) {
                            value = source[key]
                            if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
                                target[key] = value
                            }
                        }
                        return target
                    }

                    // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
                    var enumerateDevicesKey = function(done, options) {
                        if (!isEnumerateDevicesSupported()) {
                            return done(options.NOT_AVAILABLE)
                        }
                        navigator.mediaDevices.enumerateDevices().then(function(devices) {
                            done(devices.map(function(device) {
                                return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
                            }))
                        }).catch(function(error) {
                            done(error)
                        })
                    }

                    var isEnumerateDevicesSupported = function() {
                        return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
                    }
                    // Inspired by and based on https://github.com/cozylife/audio-fingerprint
                    var audioKey = function(done, options) {
                        var audioOptions = options.audio
                        if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
                            // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
                            return done(options.EXCLUDED)
                        }

                        var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

                        if (AudioContext == null) {
                            return done(options.NOT_AVAILABLE)
                        }

                        var context = new AudioContext(1, 44100, 44100)

                        var oscillator = context.createOscillator()
                        oscillator.type = 'triangle'
                        oscillator.frequency.setValueAtTime(10000, context.currentTime)

                        var compressor = context.createDynamicsCompressor()
                        each([
                            ['threshold', -50],
                            ['knee', 40],
                            ['ratio', 12],
                            ['reduction', -20],
                            ['attack', 0],
                            ['release', 0.25]
                        ], function(item) {
                            if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
                                compressor[item[0]].setValueAtTime(item[1], context.currentTime)
                            }
                        })

                        oscillator.connect(compressor)
                        compressor.connect(context.destination)
                        oscillator.start(0)
                        context.startRendering()

                        var audioTimeoutId = setTimeout(function() {
                            console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' + navigator.userAgent + '".')
                            context.oncomplete = function() {}
                            context = null
                            return done('audioTimeout')
                        }, audioOptions.timeout)

                        context.oncomplete = function(event) {
                            var fingerprint
                            try {
                                clearTimeout(audioTimeoutId)
                                fingerprint = event.renderedBuffer.getChannelData(0)
                                    .slice(4500, 5000)
                                    .reduce(function(acc, val) {
                                        return acc + Math.abs(val)
                                    }, 0)
                                    .toString()
                                oscillator.disconnect()
                                compressor.disconnect()
                            } catch (error) {
                                done(error)
                                return
                            }
                            done(fingerprint)
                        }
                    }
                    var UserAgent = function(done) {
                        done(navigator.userAgent)
                    }
                    var webdriver = function(done, options) {
                        done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
                    }
                    var languageKey = function(done, options) {
                        done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
                    }
                    var colorDepthKey = function(done, options) {
                        done(window.screen.colorDepth || options.NOT_AVAILABLE)
                    }
                    var deviceMemoryKey = function(done, options) {
                        done(navigator.deviceMemory || options.NOT_AVAILABLE)
                    }
                    var pixelRatioKey = function(done, options) {
                        done(window.devicePixelRatio || options.NOT_AVAILABLE)
                    }
                    var screenResolutionKey = function(done, options) {
                        done(getScreenResolution(options))
                    }
                    var getScreenResolution = function(options) {
                        var resolution = [window.screen.width, window.screen.height]
                        if (options.screen.detectScreenOrientation) {
                            resolution.sort().reverse()
                        }
                        return resolution
                    }
                    var availableScreenResolutionKey = function(done, options) {
                        done(getAvailableScreenResolution(options))
                    }
                    var getAvailableScreenResolution = function(options) {
                        if (window.screen.availWidth && window.screen.availHeight) {
                            var available = [window.screen.availHeight, window.screen.availWidth]
                            if (options.screen.detectScreenOrientation) {
                                available.sort().reverse()
                            }
                            return available
                        }
                        // headless browsers
                        return options.NOT_AVAILABLE
                    }
                    var timezoneOffset = function(done) {
                        done(new Date().getTimezoneOffset())
                    }
                    var timezone = function(done, options) {
                        if (window.Intl && window.Intl.DateTimeFormat) {
                            done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone || options.NOT_AVAILABLE)
                            return
                        }
                        done(options.NOT_AVAILABLE)
                    }
                    var sessionStorageKey = function(done, options) {
                        done(hasSessionStorage(options))
                    }
                    var localStorageKey = function(done, options) {
                        done(hasLocalStorage(options))
                    }
                    var indexedDbKey = function(done, options) {
                        done(hasIndexedDB(options))
                    }
                    var addBehaviorKey = function(done) {
                        done(!!window.HTMLElement.prototype.addBehavior)
                    }
                    var openDatabaseKey = function(done) {
                        done(!!window.openDatabase)
                    }
                    var cpuClassKey = function(done, options) {
                        done(getNavigatorCpuClass(options))
                    }
                    var platformKey = function(done, options) {
                        done(getNavigatorPlatform(options))
                    }
                    var doNotTrackKey = function(done, options) {
                        done(getDoNotTrack(options))
                    }
                    var canvasKey = function(done, options) {
                        if (isCanvasSupported()) {
                            done(getCanvasFp(options))
                            return
                        }
                        done(options.NOT_AVAILABLE)
                    }
                    var webglKey = function(done, options) {
                        if (isWebGlSupported()) {
                            done(getWebglFp())
                            return
                        }
                        done(options.NOT_AVAILABLE)
                    }
                    var webglVendorAndRendererKey = function(done) {
                        if (isWebGlSupported()) {
                            done(getWebglVendorAndRenderer())
                            return
                        }
                        done()
                    }
                    var adBlockKey = function(done) {
                        done(getAdBlock())
                    }
                    var hasLiedLanguagesKey = function(done) {
                        done(getHasLiedLanguages())
                    }
                    var hasLiedResolutionKey = function(done) {
                        done(getHasLiedResolution())
                    }
                    var hasLiedOsKey = function(done) {
                        done(getHasLiedOs())
                    }
                    var hasLiedBrowserKey = function(done) {
                        done(getHasLiedBrowser())
                    }
                    // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
                    var flashFontsKey = function(done, options) {
                        // we do flash if swfobject is loaded
                        if (!hasSwfObjectLoaded()) {
                            return done('swf object not loaded')
                        }
                        if (!hasMinFlashInstalled()) {
                            return done('flash not installed')
                        }
                        if (!options.fonts.swfPath) {
                            return done('missing options.fonts.swfPath')
                        }
                        loadSwfAndDetectFonts(function(fonts) {
                            done(fonts)
                        }, options)
                    }
                    // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
                    var jsFontsKey = function(done, options) {
                        // a font will be compared against all the three default fonts.
                        // and if it doesn't match all 3 then that font is not available.
                        var baseFonts = ['monospace', 'sans-serif', 'serif']

                        var fontList = [
                            'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
                            'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
                            'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
                            'Geneva', 'Georgia',
                            'Helvetica', 'Helvetica Neue',
                            'Impact',
                            'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
                            'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
                            'Palatino', 'Palatino Linotype',
                            'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
                            'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
                            'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
                        ]

                        if (options.fonts.extendedJsFonts) {
                            var extendedFontList = [
                                'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
                                'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
                                'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
                                'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
                                'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
                                'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
                                'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
                                'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
                                'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
                                'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
                                'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
                                'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
                                'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
                                'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
                                'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
                                'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
                                'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
                                'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
                                'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
                                'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
                                'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
                                'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
                                'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
                                'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
                                'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
                                'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
                                'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
                                'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
                                'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
                                'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
                                'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF'
                            ]
                            fontList = fontList.concat(extendedFontList)
                        }

                        fontList = fontList.concat(options.fonts.userDefinedFonts)

                        // remove duplicate fonts
                        fontList = fontList.filter(function(font, position) {
                            return fontList.indexOf(font) === position
                        })

                        // we use m or w because these two characters take up the maximum width.
                        // And we use a LLi so that the same matching fonts can get separated
                        var testString = 'mmmmmmmmmmlli'

                        // we test using 72px font size, we may use any size. I guess larger the better.
                        var testSize = '72px'

                        var h = document.getElementsByTagName('body')[0]

                        // div to load spans for the base fonts
                        var baseFontsDiv = document.createElement('div')

                        // div to load spans for the fonts to detect
                        var fontsDiv = document.createElement('div')

                        var defaultWidth = {}
                        var defaultHeight = {}

                        // creates a span where the fonts will be loaded
                        var createSpan = function() {
                            var s = document.createElement('span')
                            /*
                             * We need this css as in some weird browser this
                             * span elements shows up for a microSec which creates a
                             * bad user experience
                             */
                            s.style.position = 'absolute'
                            s.style.left = '-9999px'
                            s.style.fontSize = testSize

                            // css font reset to reset external styles
                            s.style.fontStyle = 'normal'
                            s.style.fontWeight = 'normal'
                            s.style.letterSpacing = 'normal'
                            s.style.lineBreak = 'auto'
                            s.style.lineHeight = 'normal'
                            s.style.textTransform = 'none'
                            s.style.textAlign = 'left'
                            s.style.textDecoration = 'none'
                            s.style.textShadow = 'none'
                            s.style.whiteSpace = 'normal'
                            s.style.wordBreak = 'normal'
                            s.style.wordSpacing = 'normal'

                            s.innerHTML = testString
                            return s
                        }

                        // creates a span and load the font to detect and a base font for fallback
                        var createSpanWithFonts = function(fontToDetect, baseFont) {
                            var s = createSpan()
                            s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
                            return s
                        }

                        // creates spans for the base fonts and adds them to baseFontsDiv
                        var initializeBaseFontsSpans = function() {
                            var spans = []
                            for (var index = 0, length = baseFonts.length; index < length; index++) {
                                var s = createSpan()
                                s.style.fontFamily = baseFonts[index]
                                baseFontsDiv.appendChild(s)
                                spans.push(s)
                            }
                            return spans
                        }

                        // creates spans for the fonts to detect and adds them to fontsDiv
                        var initializeFontsSpans = function() {
                            var spans = {}
                            for (var i = 0, l = fontList.length; i < l; i++) {
                                var fontSpans = []
                                for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                                    var s = createSpanWithFonts(fontList[i], baseFonts[j])
                                    fontsDiv.appendChild(s)
                                    fontSpans.push(s)
                                }
                                spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
                            }
                            return spans
                        }

                        // checks if a font is available
                        var isFontAvailable = function(fontSpans) {
                            var detected = false
                            for (var i = 0; i < baseFonts.length; i++) {
                                detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
                                if (detected) {
                                    return detected
                                }
                            }
                            return detected
                        }

                        // create spans for base fonts
                        var baseFontsSpans = initializeBaseFontsSpans()

                        // add the spans to the DOM
                        h.appendChild(baseFontsDiv)

                        // get the default width for the three base fonts
                        for (var index = 0, length = baseFonts.length; index < length; index++) {
                            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
                            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
                        }

                        // create spans for fonts to detect
                        var fontsSpans = initializeFontsSpans()

                        // add all the spans to the DOM
                        h.appendChild(fontsDiv)

                        // check available fonts
                        var available = []
                        for (var i = 0, l = fontList.length; i < l; i++) {
                            if (isFontAvailable(fontsSpans[fontList[i]])) {
                                available.push(fontList[i])
                            }
                        }

                        // remove spans from DOM
                        h.removeChild(fontsDiv)
                        h.removeChild(baseFontsDiv)
                        done(available)
                    }
                    var pluginsComponent = function(done, options) {
                        if (isIE()) {
                            if (!options.plugins.excludeIE) {
                                done(getIEPlugins(options))
                            } else {
                                done(options.EXCLUDED)
                            }
                        } else {
                            done(getRegularPlugins(options))
                        }
                    }
                    var getRegularPlugins = function(options) {
                        if (navigator.plugins == null) {
                            return options.NOT_AVAILABLE
                        }

                        var plugins = []
                        // plugins isn't defined in Node envs.
                        for (var i = 0, l = navigator.plugins.length; i < l; i++) {
                            if (navigator.plugins[i]) {
                                plugins.push(navigator.plugins[i])
                            }
                        }

                        // sorting plugins only for those user agents, that we know randomize the plugins
                        // every time we try to enumerate them
                        if (pluginsShouldBeSorted(options)) {
                            plugins = plugins.sort(function(a, b) {
                                if (a.name > b.name) {
                                    return 1
                                }
                                if (a.name < b.name) {
                                    return -1
                                }
                                return 0
                            })
                        }
                        return map(plugins, function(p) {
                            var mimeTypes = map(p, function(mt) {
                                return [mt.type, mt.suffixes]
                            })
                            return [p.name, p.description, mimeTypes]
                        })
                    }
                    var getIEPlugins = function(options) {
                        var result = []
                        if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
                            var names = [
                                'AcroPDF.PDF', // Adobe PDF reader 7+
                                'Adodb.Stream',
                                'AgControl.AgControl', // Silverlight
                                'DevalVRXCtrl.DevalVRXCtrl.1',
                                'MacromediaFlashPaper.MacromediaFlashPaper',
                                'Msxml2.DOMDocument',
                                'Msxml2.XMLHTTP',
                                'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
                                'QuickTime.QuickTime', // QuickTime
                                'QuickTimeCheckObject.QuickTimeCheck.1',
                                'RealPlayer',
                                'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
                                'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
                                'Scripting.Dictionary',
                                'SWCtl.SWCtl', // ShockWave player
                                'Shell.UIHelper',
                                'ShockwaveFlash.ShockwaveFlash', // flash plugin
                                'Skype.Detection',
                                'TDCCtl.TDCCtl',
                                'WMPlayer.OCX', // Windows media player
                                'rmocx.RealPlayer G2 Control',
                                'rmocx.RealPlayer G2 Control.1'
                            ]
                            // starting to detect plugins in IE
                            result = map(names, function(name) {
                                try {
                                    // eslint-disable-next-line no-new
                                    new window.ActiveXObject(name)
                                    return name
                                } catch (e) {
                                    return options.ERROR
                                }
                            })
                        } else {
                            result.push(options.NOT_AVAILABLE)
                        }
                        if (navigator.plugins) {
                            result = result.concat(getRegularPlugins(options))
                        }
                        return result
                    }
                    var pluginsShouldBeSorted = function(options) {
                        var should = false
                        for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
                            var re = options.plugins.sortPluginsFor[i]
                            if (navigator.userAgent.match(re)) {
                                should = true
                                break
                            }
                        }
                        return should
                    }
                    var touchSupportKey = function(done) {
                        done(getTouchSupport())
                    }
                    var hardwareConcurrencyKey = function(done, options) {
                        done(getHardwareConcurrency(options))
                    }
                    var hasSessionStorage = function(options) {
                        try {
                            return !!window.sessionStorage
                        } catch (e) {
                            return options.ERROR // SecurityError when referencing it means it exists
                        }
                    }

                    // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
                    var hasLocalStorage = function(options) {
                        try {
                            return !!window.localStorage
                        } catch (e) {
                            return options.ERROR // SecurityError when referencing it means it exists
                        }
                    }
                    var hasIndexedDB = function(options) {
                        // IE and Edge don't allow accessing indexedDB in private mode, therefore IE and Edge will have different
                        // fingerprints in normal and private modes.
                        if (isIEOrOldEdge()) {
                            return options.EXCLUDED
                        }
                        try {
                            return !!window.indexedDB
                        } catch (e) {
                            return options.ERROR // SecurityError when referencing it means it exists
                        }
                    }
                    var getHardwareConcurrency = function(options) {
                        if (navigator.hardwareConcurrency) {
                            return navigator.hardwareConcurrency
                        }
                        return options.NOT_AVAILABLE
                    }
                    var getNavigatorCpuClass = function(options) {
                        return navigator.cpuClass || options.NOT_AVAILABLE
                    }
                    var getNavigatorPlatform = function(options) {
                        if (navigator.platform) {
                            return navigator.platform
                        } else {
                            return options.NOT_AVAILABLE
                        }
                    }
                    var getDoNotTrack = function(options) {
                        if (navigator.doNotTrack) {
                            return navigator.doNotTrack
                        } else if (navigator.msDoNotTrack) {
                            return navigator.msDoNotTrack
                        } else if (window.doNotTrack) {
                            return window.doNotTrack
                        } else {
                            return options.NOT_AVAILABLE
                        }
                    }
                    // This is a crude and primitive touch screen detection.
                    // It's not possible to currently reliably detect the  availability of a touch screen
                    // with a JS, without actually subscribing to a touch event.
                    // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
                    // https://github.com/Modernizr/Modernizr/issues/548
                    // method returns an array of 3 values:
                    // maxTouchPoints, the success or failure of creating a TouchEvent,
                    // and the availability of the 'ontouchstart' property

                    var getTouchSupport = function() {
                        var maxTouchPoints = 0
                        var touchEvent
                        if (typeof navigator.maxTouchPoints !== 'undefined') {
                            maxTouchPoints = navigator.maxTouchPoints
                        } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
                            maxTouchPoints = navigator.msMaxTouchPoints
                        }
                        try {
                            document.createEvent('TouchEvent')
                            touchEvent = true
                        } catch (_) {
                            touchEvent = false
                        }
                        var touchStart = 'ontouchstart' in window
                        return [maxTouchPoints, touchEvent, touchStart]
                    }
                    // https://www.browserleaks.com/canvas#how-does-it-work

                    var getCanvasFp = function(options) {
                        var result = []
                        // Very simple now, need to make it more complex (geo shapes etc)
                        var canvas = document.createElement('canvas')
                        canvas.width = 2000
                        canvas.height = 200
                        canvas.style.display = 'inline'
                        var ctx = canvas.getContext('2d')
                        // detect browser support of canvas winding
                        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
                        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
                        ctx.rect(0, 0, 10, 10)
                        ctx.rect(2, 2, 6, 6)
                        result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

                        ctx.textBaseline = 'alphabetic'
                        ctx.fillStyle = '#f60'
                        ctx.fillRect(125, 1, 62, 20)
                        ctx.fillStyle = '#069'
                        // https://github.com/fingerprintjs/fingerprintjs/issues/66
                        if (options.dontUseFakeFontInCanvas) {
                            ctx.font = '11pt Arial'
                        } else {
                            ctx.font = '11pt no-real-font-123'
                        }
                        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
                        ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
                        ctx.font = '18pt Arial'
                        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

                        // canvas blending
                        // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
                        // http://jsfiddle.net/NDYV8/16/
                        ctx.globalCompositeOperation = 'multiply'
                        ctx.fillStyle = 'rgb(255,0,255)'
                        ctx.beginPath()
                        ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
                        ctx.closePath()
                        ctx.fill()
                        ctx.fillStyle = 'rgb(0,255,255)'
                        ctx.beginPath()
                        ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
                        ctx.closePath()
                        ctx.fill()
                        ctx.fillStyle = 'rgb(255,255,0)'
                        ctx.beginPath()
                        ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
                        ctx.closePath()
                        ctx.fill()
                        ctx.fillStyle = 'rgb(255,0,255)'
                        // canvas winding
                        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
                        // http://jsfiddle.net/NDYV8/19/
                        ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
                        ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
                        ctx.fill('evenodd')

                        if (canvas.toDataURL) {
                            result.push('canvas fp:' + canvas.toDataURL())
                        }
                        return result
                    }
                    var getWebglFp = function() {
                        var gl
                        var fa2s = function(fa) {
                            gl.clearColor(0.0, 0.0, 0.0, 1.0)
                            gl.enable(gl.DEPTH_TEST)
                            gl.depthFunc(gl.LEQUAL)
                            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
                            return '[' + fa[0] + ', ' + fa[1] + ']'
                        }
                        var maxAnisotropy = function(gl) {
                            var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
                            if (ext) {
                                var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                                if (anisotropy === 0) {
                                    anisotropy = 2
                                }
                                return anisotropy
                            } else {
                                return null
                            }
                        }

                        gl = getWebglCanvas()
                        if (!gl) {
                            return null
                        }
                        // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
                        // First it draws a gradient object with shaders and convers the image to the Base64 string.
                        // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
                        // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
                        var result = []
                        var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
                        var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
                        var vertexPosBuffer = gl.createBuffer()
                        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
                        var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
                        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
                        vertexPosBuffer.itemSize = 3
                        vertexPosBuffer.numItems = 3
                        var program = gl.createProgram()
                        var vshader = gl.createShader(gl.VERTEX_SHADER)
                        gl.shaderSource(vshader, vShaderTemplate)
                        gl.compileShader(vshader)
                        var fshader = gl.createShader(gl.FRAGMENT_SHADER)
                        gl.shaderSource(fshader, fShaderTemplate)
                        gl.compileShader(fshader)
                        gl.attachShader(program, vshader)
                        gl.attachShader(program, fshader)
                        gl.linkProgram(program)
                        gl.useProgram(program)
                        program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
                        program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
                        gl.enableVertexAttribArray(program.vertexPosArray)
                        gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
                        gl.uniform2f(program.offsetUniform, 1, 1)
                        gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
                        try {
                            result.push(gl.canvas.toDataURL())
                        } catch (e) {
                            /* .toDataURL may be absent or broken (blocked by extension) */
                        }
                        result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
                        result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
                        result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
                        result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
                        result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
                        result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
                        result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
                        result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
                        result.push('webgl max anisotropy:' + maxAnisotropy(gl))
                        result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
                        result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
                        result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
                        result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
                        result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
                        result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
                        result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
                        result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
                        result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
                        result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
                        result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
                        result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
                        result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
                        result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
                        result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
                        result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
                        result.push('webgl version:' + gl.getParameter(gl.VERSION))

                        try {
                            // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
                            var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
                            if (extensionDebugRendererInfo) {
                                result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
                                result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
                            }
                        } catch (e) { /* squelch */ }

                        if (!gl.getShaderPrecisionFormat) {
                            loseWebglContext(gl)
                            return result
                        }

                        each(['FLOAT', 'INT'], function(numType) {
                            each(['VERTEX', 'FRAGMENT'], function(shader) {
                                each(['HIGH', 'MEDIUM', 'LOW'], function(numSize) {
                                    each(['precision', 'rangeMin', 'rangeMax'], function(key) {
                                        var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
                                        if (key !== 'precision') {
                                            key = 'precision ' + key
                                        }
                                        var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
                                        result.push(line)
                                    })
                                })
                            })
                        })
                        loseWebglContext(gl)
                        return result
                    }
                    var getWebglVendorAndRenderer = function() {
                        /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
                        try {
                            var glContext = getWebglCanvas()
                            var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
                            var params = glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
                            loseWebglContext(glContext)
                            return params
                        } catch (e) {
                            return null
                        }
                    }
                    var getAdBlock = function() {
                        var ads = document.createElement('div')
                        ads.innerHTML = '&nbsp;'
                        ads.className = 'adsbox'
                        var result = false
                        try {
                            // body may not exist, that's why we need try/catch
                            document.body.appendChild(ads)
                            result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
                            document.body.removeChild(ads)
                        } catch (e) {
                            result = false
                        }
                        return result
                    }
                    var getHasLiedLanguages = function() {
                        // We check if navigator.language is equal to the first language of navigator.languages
                        // navigator.languages is undefined on IE11 (and potentially older IEs)
                        if (typeof navigator.languages !== 'undefined') {
                            try {
                                var firstLanguages = navigator.languages[0].substr(0, 2)
                                if (firstLanguages !== navigator.language.substr(0, 2)) {
                                    return true
                                }
                            } catch (err) {
                                return true
                            }
                        }
                        return false
                    }
                    var getHasLiedResolution = function() {
                        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                    }
                    var getHasLiedOs = function() {
                        var userAgent = navigator.userAgent.toLowerCase()
                        var oscpu = navigator.oscpu
                        var platform = navigator.platform.toLowerCase()
                        var os
                        // We extract the OS from the user agent (respect the order of the if else if statement)
                        if (userAgent.indexOf('windows phone') >= 0) {
                            os = 'Windows Phone'
                        } else if (userAgent.indexOf('windows') >= 0 || userAgent.indexOf('win16') >= 0 || userAgent.indexOf('win32') >= 0 || userAgent.indexOf('win64') >= 0 || userAgent.indexOf('win95') >= 0 || userAgent.indexOf('win98') >= 0 || userAgent.indexOf('winnt') >= 0 || userAgent.indexOf('wow64') >= 0) {
                            os = 'Windows'
                        } else if (userAgent.indexOf('android') >= 0) {
                            os = 'Android'
                        } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0 || userAgent.indexOf('x11') >= 0) {
                            os = 'Linux'
                        } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0 || userAgent.indexOf('ipod') >= 0 || userAgent.indexOf('crios') >= 0 || userAgent.indexOf('fxios') >= 0) {
                            os = 'iOS'
                        } else if (userAgent.indexOf('macintosh') >= 0 || userAgent.indexOf('mac_powerpc)') >= 0) {
                            os = 'Mac'
                        } else {
                            os = 'Other'
                        }
                        // We detect if the person uses a touch device
                        var mobileDevice = (('ontouchstart' in window) ||
                            (navigator.maxTouchPoints > 0) ||
                            (navigator.msMaxTouchPoints > 0))

                        if (mobileDevice && os !== 'Windows' && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other' && userAgent.indexOf('cros') === -1) {
                            return true
                        }

                        // We compare oscpu with the OS extracted from the UA
                        if (typeof oscpu !== 'undefined') {
                            oscpu = oscpu.toLowerCase()
                            if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
                                return true
                            } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
                                return true
                            } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
                                return true
                            } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
                                return true
                            }
                        }

                        // We compare platform with the OS extracted from the UA
                        if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
                            return true
                        } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
                            return true
                        } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
                            return true
                        } else if (platform.indexOf('arm') >= 0 && os === 'Windows Phone') {
                            return false
                        } else if (platform.indexOf('pike') >= 0 && userAgent.indexOf('opera mini') >= 0) {
                            return false
                        } else {
                            var platformIsOther = platform.indexOf('win') < 0 &&
                                platform.indexOf('linux') < 0 &&
                                platform.indexOf('mac') < 0 &&
                                platform.indexOf('iphone') < 0 &&
                                platform.indexOf('ipad') < 0 &&
                                platform.indexOf('ipod') < 0
                            if (platformIsOther !== (os === 'Other')) {
                                return true
                            }
                        }

                        return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
                    }
                    var getHasLiedBrowser = function() {
                        var userAgent = navigator.userAgent.toLowerCase()
                        var productSub = navigator.productSub

                        // we extract the browser from the user agent (respect the order of the tests)
                        var browser
                        if (userAgent.indexOf('edge/') >= 0 || userAgent.indexOf('iemobile/') >= 0) {
                            // Unreliable, different versions use EdgeHTML, Webkit, Blink, etc.
                            return false
                        } else if (userAgent.indexOf('opera mini') >= 0) {
                            // Unreliable, different modes use Presto, WebView, Webkit, etc.
                            return false
                        } else if (userAgent.indexOf('firefox/') >= 0) {
                            browser = 'Firefox'
                        } else if (userAgent.indexOf('opera/') >= 0 || userAgent.indexOf(' opr/') >= 0) {
                            browser = 'Opera'
                        } else if (userAgent.indexOf('chrome/') >= 0) {
                            browser = 'Chrome'
                        } else if (userAgent.indexOf('safari/') >= 0) {
                            if (userAgent.indexOf('android 1.') >= 0 || userAgent.indexOf('android 2.') >= 0 || userAgent.indexOf('android 3.') >= 0 || userAgent.indexOf('android 4.') >= 0) {
                                browser = 'AOSP'
                            } else {
                                browser = 'Safari'
                            }
                        } else if (userAgent.indexOf('trident/') >= 0) {
                            browser = 'Internet Explorer'
                        } else {
                            browser = 'Other'
                        }

                        if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
                            return true
                        }

                        // eslint-disable-next-line no-eval
                        var tempRes = eval.toString().length
                        if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
                            return true
                        } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
                            return true
                        } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'AOSP' && browser !== 'Opera' && browser !== 'Other') {
                            return true
                        }

                        // We create an error to see how it is handled
                        var errFirefox
                        try {
                            // eslint-disable-next-line no-throw-literal
                            throw 'a'
                        } catch (err) {
                            try {
                                err.toSource()
                                errFirefox = true
                            } catch (errOfErr) {
                                errFirefox = false
                            }
                        }
                        return errFirefox && browser !== 'Firefox' && browser !== 'Other'
                    }
                    var isCanvasSupported = function() {
                        var elem = document.createElement('canvas')
                        return !!(elem.getContext && elem.getContext('2d'))
                    }
                    var isWebGlSupported = function() {
                        // code taken from Modernizr
                        if (!isCanvasSupported()) {
                            return false
                        }

                        var glContext = getWebglCanvas()
                        var isSupported = !!window.WebGLRenderingContext && !!glContext
                        loseWebglContext(glContext)
                        return isSupported
                    }
                    var isIE = function() {
                        if (navigator.appName === 'Microsoft Internet Explorer') {
                            return true
                        } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
                            return true
                        }
                        return false
                    }
                    var isIEOrOldEdge = function() {
                        // The properties are checked to be in IE 10, IE 11 and Edge 18 and not to be in other browsers
                        return ('msWriteProfilerMark' in window) + ('msLaunchUri' in navigator) + ('msSaveBlob' in navigator) >= 2
                    }
                    var hasSwfObjectLoaded = function() {
                        return typeof window.swfobject !== 'undefined'
                    }
                    var hasMinFlashInstalled = function() {
                        return window.swfobject.hasFlashPlayerVersion('9.0.0')
                    }
                    var addFlashDivNode = function(options) {
                        var node = document.createElement('div')
                        node.setAttribute('id', options.fonts.swfContainerId)
                        document.body.appendChild(node)
                    }
                    var loadSwfAndDetectFonts = function(done, options) {
                        var hiddenCallback = '___fp_swf_loaded'
                        window[hiddenCallback] = function(fonts) {
                            done(fonts)
                        }
                        var id = options.fonts.swfContainerId
                        addFlashDivNode()
                        var flashvars = {
                            onReady: hiddenCallback
                        }
                        var flashparams = {
                            allowScriptAccess: 'always',
                            menu: 'false'
                        }
                        window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
                    }
                    var getWebglCanvas = function() {
                        var canvas = document.createElement('canvas')
                        var gl = null
                        try {
                            gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
                        } catch (e) { /* squelch */ }
                        if (!gl) {
                            gl = null
                        }
                        return gl
                    }
                    var loseWebglContext = function(context) {
                        var loseContextExtension = context.getExtension('WEBGL_lose_context')
                        if (loseContextExtension != null) {
                            loseContextExtension.loseContext()
                        }
                    }

                    var components = [{
                            key: 'userAgent',
                            getData: UserAgent
                        },
                        {
                            key: 'webdriver',
                            getData: webdriver
                        },
                        {
                            key: 'language',
                            getData: languageKey
                        },
                        {
                            key: 'colorDepth',
                            getData: colorDepthKey
                        },
                        {
                            key: 'deviceMemory',
                            getData: deviceMemoryKey
                        },
                        {
                            key: 'pixelRatio',
                            getData: pixelRatioKey
                        },
                        {
                            key: 'hardwareConcurrency',
                            getData: hardwareConcurrencyKey
                        },
                        {
                            key: 'screenResolution',
                            getData: screenResolutionKey
                        },
                        {
                            key: 'availableScreenResolution',
                            getData: availableScreenResolutionKey
                        },
                        {
                            key: 'timezoneOffset',
                            getData: timezoneOffset
                        },
                        {
                            key: 'timezone',
                            getData: timezone
                        },
                        {
                            key: 'sessionStorage',
                            getData: sessionStorageKey
                        },
                        {
                            key: 'localStorage',
                            getData: localStorageKey
                        },
                        {
                            key: 'indexedDb',
                            getData: indexedDbKey
                        },
                        {
                            key: 'addBehavior',
                            getData: addBehaviorKey
                        },
                        {
                            key: 'openDatabase',
                            getData: openDatabaseKey
                        },
                        {
                            key: 'cpuClass',
                            getData: cpuClassKey
                        },
                        {
                            key: 'platform',
                            getData: platformKey
                        },
                        {
                            key: 'doNotTrack',
                            getData: doNotTrackKey
                        },
                        {
                            key: 'plugins',
                            getData: pluginsComponent
                        },
                        {
                            key: 'canvas',
                            getData: canvasKey
                        },
                        {
                            key: 'webgl',
                            getData: webglKey
                        },
                        {
                            key: 'webglVendorAndRenderer',
                            getData: webglVendorAndRendererKey
                        },
                        {
                            key: 'adBlock',
                            getData: adBlockKey
                        },
                        {
                            key: 'hasLiedLanguages',
                            getData: hasLiedLanguagesKey
                        },
                        {
                            key: 'hasLiedResolution',
                            getData: hasLiedResolutionKey
                        },
                        {
                            key: 'hasLiedOs',
                            getData: hasLiedOsKey
                        },
                        {
                            key: 'hasLiedBrowser',
                            getData: hasLiedBrowserKey
                        },
                        {
                            key: 'touchSupport',
                            getData: touchSupportKey
                        },
                        {
                            key: 'fonts',
                            getData: jsFontsKey,
                            pauseBefore: true
                        },
                        {
                            key: 'fontsFlash',
                            getData: flashFontsKey,
                            pauseBefore: true
                        },
                        {
                            key: 'audio',
                            getData: audioKey
                        },
                        {
                            key: 'enumerateDevices',
                            getData: enumerateDevicesKey
                        }
                    ]

                    var Fingerprint2 = function(options) {
                        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200")
                    }

                    Fingerprint2.get = function(options, callback) {
                        if (!callback) {
                            callback = options
                            options = {}
                        } else if (!options) {
                            options = {}
                        }
                        extendSoft(options, defaultOptions)
                        options.components = options.extraComponents.concat(components)

                        var keys = {
                            data: [],
                            addPreprocessedComponent: function(key, value) {
                                if (typeof options.preprocessor === 'function') {
                                    value = options.preprocessor(key, value)
                                }
                                keys.data.push({
                                    key: key,
                                    value: value
                                })
                            }
                        }

                        var i = -1
                        var chainComponents = function(alreadyWaited) {
                            i += 1
                            if (i >= options.components.length) { // on finish
                                callback(keys.data)
                                return
                            }
                            var component = options.components[i]

                            if (options.excludes[component.key]) {
                                chainComponents(false) // skip
                                return
                            }

                            if (!alreadyWaited && component.pauseBefore) {
                                i -= 1
                                setTimeout(function() {
                                    chainComponents(true)
                                }, 1)
                                return
                            }

                            try {
                                component.getData(function(value) {
                                    keys.addPreprocessedComponent(component.key, value)
                                    chainComponents(false)
                                }, options)
                            } catch (error) {
                                // main body error
                                keys.addPreprocessedComponent(component.key, String(error))
                                chainComponents(false)
                            }
                        }

                        chainComponents(false)
                    }

                    Fingerprint2.getPromise = function(options) {
                        return new Promise(function(resolve, reject) {
                            Fingerprint2.get(options, resolve)
                        })
                    }

                    Fingerprint2.getV18 = function(options, callback) {
                        if (callback == null) {
                            callback = options
                            options = {}
                        }
                        return Fingerprint2.get(options, function(components) {
                            var newComponents = []
                            for (var i = 0; i < components.length; i++) {
                                var component = components[i]
                                if (component.value === (options.NOT_AVAILABLE || 'not available')) {
                                    newComponents.push({
                                        key: component.key,
                                        value: 'unknown'
                                    })
                                } else if (component.key === 'plugins') {
                                    newComponents.push({
                                        key: 'plugins',
                                        value: map(component.value, function(p) {
                                            var mimeTypes = map(p[2], function(mt) {
                                                if (mt.join) {
                                                    return mt.join('~')
                                                }
                                                return mt
                                            }).join(',')
                                            return [p[0], p[1], mimeTypes].join('::')
                                        })
                                    })
                                } else if (['canvas', 'webgl'].indexOf(component.key) !== -1 && Array.isArray(component.value)) {
                                    // sometimes WebGL returns error in headless browsers (during CI testing for example)
                                    // so we need to join only if the values are array
                                    newComponents.push({
                                        key: component.key,
                                        value: component.value.join('~')
                                    })
                                } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
                                    if (component.value) {
                                        newComponents.push({
                                            key: component.key,
                                            value: 1
                                        })
                                    } else {
                                        // skip
                                        continue
                                    }
                                } else {
                                    if (component.value) {
                                        newComponents.push(component.value.join ? {
                                            key: component.key,
                                            value: component.value.join(';')
                                        } : component)
                                    } else {
                                        newComponents.push({
                                            key: component.key,
                                            value: component.value
                                        })
                                    }
                                }
                            }
                            var murmur = x64hash128(map(newComponents, function(component) {
                                return component.value
                            }).join('~~~'), 31)
                            callback(murmur, newComponents)
                        })
                    }

                    Fingerprint2.x64hash128 = x64hash128
                    Fingerprint2.VERSION = '2.1.4'
                    return Fingerprint2
                })


                /***/
            })

    }
]);
//# debugId=df3a215f-bfd1-5b95-a24a-0329b845d3dc