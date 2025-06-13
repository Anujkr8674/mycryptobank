! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "84c14ad2-0137-5e53-9043-8f5a07e06c71")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [1259], {
        "3Oec": (e, t, n) => {
            "use strict";
            n.d(t, {
                ZL: () => Ye,
                NC: () => qe,
                Ay: () => Je
            });
            var r = n("sViW"),
                a = n("888e"),
                o = n("gZfF"),
                i = n("tEf9"),
                c = n("3yYM"),
                l = n.n(c),
                s = n("DTvD"),
                u = n.n(s),
                d = n("Kzjd"),
                p = n("Hb45"),
                f = n("a75W"),
                m = n("BK7R"),
                h = n("aVXY"),
                v = n("C6y2"),
                y = n("cKr8"),
                g = n("VA12"),
                k = function() {
                    var e = (0, r.A)(l().mark((function e(t) {
                        var n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.post)("/bapi/kyc/v1/public/kyc/user-face/sdk-face-init", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = (function() {
                    var e = (0, r.A)(l().mark((function e(t, n) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.post)("/bapi/kyc/v3/public/kyc/user-face/sdk-face-init", t, {
                                        headers: {
                                            "X-Access-Token": n
                                        }
                                    });
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(l().mark((function e(t) {
                        var n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.post)("/bapi/kyc/v1/public/kyc/user-face/web-face-init", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r.A)(l().mark((function e(t) {
                        var n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.post)("/bapi/kyc/v1/public/kyc/user-face/face-is-passed", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                b = function() {
                    var e = (0, r.A)(l().mark((function e(t) {
                        var n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.post)("/bapi/kyc/v1/public/certificate/user-face/web-face-init", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, r.A)(l().mark((function e(t, n) {
                    var r;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/kyc/v3/public/certificate/user-face/web-face-init", t, {
                                    headers: {
                                        "X-Access-Token": n
                                    }
                                });
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var x, C = function() {
                    var e = (0, r.A)(l().mark((function e(t) {
                        var n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.post)("/bapi/kyc/v1/public/kyc/user-face/request-source", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                E = n("T9BW"),
                _ = "ONFIDO",
                A = {
                    "zh-CN": "zh_CN",
                    "zh-TC": "zh_TW",
                    "pt-BR": "pt_BR"
                },
                S = ["ar", "hy", "bg", "zh_CN", "zh_TW", "hr", "cs", "da", "nl", "en_GB", "en_US", "en", "et", "fi", "fr_CA", "fr", "de", "el", "he", "hi", "hu", "id", "it", "ja", "ko", "lv", "lt", "ms", "nb", "fa", "pl", "pt", "pt_BR", "ro", "ru", "sr", "sk", "sl", "es", "sv", "th", "tr", "uk", "vi"],
                M = ["widget-face", "kyc-widget", "newkyc"],
                I = function() {
                    var e = (0, E.useTranslation)(M),
                        t = e.t,
                        n = (0, o.A)(e, ["t"]),
                        r = (0, s.useCallback)((function(e) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                            var o = M.find((function(n) {
                                    return t("".concat(n, ":").concat(e)) !== e
                                })),
                                c = o ? t.apply(void 0, ["".concat(o, ":").concat(e)].concat((0, i.A)(r))) : t.apply(void 0, [e].concat((0, i.A)(r)));
                            return c === e || "_empty" === c ? "" : c
                        }), [t]);
                    return (0, m.A)({
                        t: r
                    }, n)
                },
                D = [{
                    name: "hats",
                    textI18n: "exchange-kyc-avoidWearingHats",
                    default: "Avoid wearing hats"
                }, {
                    name: "glasses",
                    textI18n: "exchange-kyc-avoidWearingGlasses",
                    default: "Avoid wearing glasses"
                }, {
                    name: "filters",
                    textI18n: "exchange-kyc-avoidUsingFilters",
                    default: "Avoid using filters"
                }, {
                    name: "light",
                    textI18n: "exchange-kyc-useEnoughLighting",
                    default: "Use enough lighting"
                }];
            ! function(e) {
                e.DESKTOP = "desktop", e.MOBILE = "mobile"
            }(x || (x = {}));
            x.DESKTOP, x.MOBILE, x.DESKTOP;
            var T = n("ycr1"),
                L = n("yhUQ"),
                O = n("LCuF"),
                P = n("cJDP"),
                B = function() {
                    return u().createElement("svg", {
                        width: "88",
                        height: "88",
                        viewBox: "0 0 88 88",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, u().createElement("g", {
                        opacity: "0.6"
                    }, u().createElement("ellipse", {
                        cx: "44",
                        cy: "43.8642",
                        rx: "44",
                        ry: "43.8642",
                        fill: "#F5F5F5"
                    }), u().createElement("path", {
                        d: "M39.196 57.4975L24.927 39.9427C23.2212 37.8442 23.5448 34.7629 25.6495 33.062L43.2562 18.833C45.361 17.1321 48.4512 17.4546 50.157 19.5532L64.426 37.1079C66.1318 39.2065 65.8083 42.2877 63.7035 43.9886L46.0978 58.2178C43.9921 59.9186 40.9028 59.5961 39.196 57.4975Z",
                        fill: "url(#paint0_filter_linear)"
                    }), u().createElement("path", {
                        d: "M37.6484 38.6907C40.4938 38.9876 43.042 36.9284 43.3399 34.0913C43.6379 31.2541 41.5727 28.7134 38.7273 28.4165C35.8819 28.1195 33.3337 30.1787 33.0357 33.0159C32.7378 35.853 34.803 38.3937 37.6484 38.6907Z",
                        fill: "white"
                    }), u().createElement("path", {
                        d: "M51.6162 40.1488C54.4616 40.4457 57.0098 38.3865 57.3077 35.5494C57.6056 32.7123 55.5405 30.1716 52.6951 29.8746C49.8496 29.5776 47.3014 31.6369 47.0035 34.474C46.7056 37.3111 48.7707 39.8518 51.6162 40.1488Z",
                        fill: "white"
                    }), u().createElement("path", {
                        d: "M35.7966 32.7999C35.9397 32.9276 35.8904 33.1417 35.7219 33.2314C35.3488 33.43 35.1022 33.5379 34.7309 33.6876C34.481 33.7884 34.2763 33.8366 34.2747 34.0881C34.274 34.3399 34.6751 35.0465 35.5098 35.4248C36.5919 35.9154 37.901 35.5267 38.4901 34.4974C39.148 33.3506 38.7017 31.9028 37.5334 31.3151C36.7194 30.9054 35.7764 31.0258 35.0994 31.5452C34.9721 31.6429 34.9655 31.8324 35.0855 31.9385L35.7966 32.7999Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M49.7966 34.7937C49.9397 34.9214 49.8904 35.1355 49.7219 35.2252C49.3488 35.4237 49.1022 35.5317 48.7309 35.6813C48.481 35.7822 48.2763 35.8303 48.2747 36.0819C48.274 36.3336 48.6751 37.0403 49.5098 37.4185C50.5919 37.9091 51.901 37.5205 52.4901 36.4911C53.148 35.3444 52.7017 33.8966 51.5334 33.3089C50.7194 32.8992 49.7764 33.0195 49.0994 33.539C48.9721 33.6366 48.9655 33.8262 49.0855 33.9322L49.7966 34.7937Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M59 17.2613L61.0478 15.9506L63.6531 20.0405L61.6052 21.3512L59 17.2613ZM75.9522 43.8641L62.9018 23.4023L64.9496 22.0915L78 42.5534L75.9522 43.8641Z",
                        fill: "#22293E"
                    }), u().createElement("path", {
                        d: "M20.467 20.9351H18.6797V22.7049H20.467V20.9351Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M20.468 26.2444H18.6807V28.0143H20.468V26.2444Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M23.1496 23.5898H21.3623V25.3597H23.1496V23.5898Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M17.7873 23.5898H16V25.3597H17.7873V23.5898Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M70.8302 60.929H69.5518V62.1949H70.8302V60.929Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M70.8312 63.4609H69.5527V64.7269H70.8312V63.4609Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M72.1076 62.1951H70.8291V63.461H72.1076V62.1951Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        d: "M69.5529 62.1952H68.2744V63.4612H69.5529V62.1952Z",
                        fill: "#474D57"
                    }), u().createElement("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M65.4775 76.5776C59.3189 80.6379 51.9364 83.0021 44 83.0021C22.4688 83.0021 5.01425 65.6014 5.01425 44.1367C5.01425 36.2248 7.3857 28.8651 11.4587 22.7254L65.4775 76.5776ZM69.5096 73.5278L14.5178 18.7058C21.6663 10.4768 32.2233 5.27123 44 5.27123C65.5312 5.27123 82.9858 22.6719 82.9858 44.1367C82.9858 55.877 77.764 66.4014 69.5096 73.5278ZM88 44.1367C88 68.3622 68.3005 88.0008 44 88.0008C19.6995 88.0008 0 68.3622 0 44.1367C0 19.9111 19.6995 0.272461 44 0.272461C68.3005 0.272461 88 19.9111 88 44.1367Z",
                        fill: "url(#paint1_filter_linear)"
                    }), u().createElement("path", {
                        d: "M58.9557 50.8425H54.2478V52.7073H56.131V54.5721H32.5911V52.7073H34.4743V50.8425H28.8248C27.2617 50.8425 26 52.0919 26 53.6397C26 55.1875 27.2617 56.4369 28.8248 56.4369H58.9557C60.5188 56.4369 61.7805 55.1875 61.7805 53.6397C61.7805 52.1013 60.5188 50.8425 58.9557 50.8425Z",
                        fill: "#22293E"
                    }), u().createElement("path", {
                        d: "M55.189 58.3019H32.5908V61.0991H55.189V58.3019Z",
                        fill: "#22293E"
                    }), u().createElement("path", {
                        d: "M32.5908 74.1525C32.5908 75.1781 33.4383 76.0173 34.474 76.0173H53.3059C54.3416 76.0173 55.189 75.1781 55.189 74.1525V62.9637H32.5908V74.1525Z",
                        fill: "#22293E"
                    })), u().createElement("defs", null, u().createElement("linearGradient", {
                        id: "paint0_filter_linear",
                        x1: "42.4973",
                        y1: "59.2828",
                        x2: "46.8302",
                        y2: "17.7652",
                        gradientUnits: "userSpaceOnUse"
                    }, u().createElement("stop", {
                        "stop-color": "#AEB4BC"
                    }), u().createElement("stop", {
                        offset: "1",
                        "stop-color": "#76808F"
                    })), u().createElement("linearGradient", {
                        id: "paint1_filter_linear",
                        x1: "66.5",
                        y1: "5.98232",
                        x2: "16.7093",
                        y2: "78.4024",
                        gradientUnits: "userSpaceOnUse"
                    }, u().createElement("stop", {
                        "stop-color": "#848FA0"
                    }), u().createElement("stop", {
                        offset: "1",
                        "stop-color": "#A6B3C8"
                    }))))
                };
            const F = u().memo(B);
            var j = function() {
                return u().createElement("svg", {
                    width: "88",
                    height: "88",
                    viewBox: "0 0 88 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, u().createElement("g", {
                    opacity: "0.6"
                }, u().createElement("ellipse", {
                    cx: "44",
                    cy: "43.3729",
                    rx: "44",
                    ry: "43.3729",
                    fill: "#F5F5F5"
                }), u().createElement("path", {
                    d: "M37.4869 70.4773L19.5937 48.7104C17.4547 46.1083 17.8604 42.2877 20.4998 40.1787L42.5784 22.5355C45.2177 20.4265 49.0929 20.8264 51.2319 23.4285L69.1251 45.1953C71.2641 47.7975 70.8584 51.6181 68.219 53.7271L46.1417 71.3704C43.5011 73.4793 39.6272 73.0795 37.4869 70.4773Z",
                    fill: "url(#paint0_glasses_linear)"
                }), u().createElement("path", {
                    d: "M35.5462 47.1578C39.1143 47.526 42.3097 44.9727 42.6833 41.4548C43.0569 37.9369 40.4673 34.7866 36.8991 34.4184C33.331 34.0502 30.1356 36.6035 29.762 40.1214C29.3884 43.6393 31.9781 46.7896 35.5462 47.1578Z",
                    fill: "white"
                }), u().createElement("path", {
                    d: "M53.0638 48.9657C56.6319 49.3339 59.8273 46.7806 60.2009 43.2627C60.5745 39.7448 57.9848 36.5945 54.4167 36.2263C50.8486 35.8581 47.6532 38.4114 47.2796 41.9293C46.906 45.4471 49.4957 48.5975 53.0638 48.9657Z",
                    fill: "white"
                }), u().createElement("path", {
                    d: "M39.5328 42.7558C39.3304 42.6272 39.3493 42.3555 39.5402 42.2129C39.9631 41.8974 40.2473 41.7175 40.6776 41.4622C40.9671 41.2902 41.2112 41.1916 41.1636 40.8833C41.1147 40.5748 40.4786 39.7872 39.3701 39.4858C37.9333 39.0948 36.3887 39.8246 35.8621 41.1993C35.2737 42.7311 36.112 44.4176 37.6749 44.9108C38.7638 45.2547 39.9079 44.9245 40.6438 44.1571C40.7822 44.0129 40.753 43.7795 40.5835 43.6729L39.5328 42.7558Z",
                    fill: "#474D57"
                }), u().createElement("path", {
                    d: "M56.6783 44.5252C56.4759 44.3966 56.4948 44.1249 56.6857 43.9823C57.1086 43.6669 57.3928 43.4869 57.8231 43.2316C58.1126 43.0596 58.3567 42.961 58.3091 42.6527C58.2602 42.3442 57.6241 41.5566 56.5156 41.2552C55.0788 40.8642 53.5342 41.594 53.0077 42.9687C52.4192 44.5005 53.2575 46.187 54.8204 46.6802C55.9093 47.0241 57.0534 46.6939 57.7893 45.9265C57.9277 45.7823 57.8985 45.549 57.729 45.4423L56.6783 44.5252Z",
                    fill: "#474D57"
                }), u().createElement("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M66.0742 76.3079C59.7982 80.5652 52.1944 83.0573 44 83.0573C22.4688 83.0573 5.01425 65.8515 5.01425 44.6272C5.01425 36.5496 7.54238 29.0541 11.8612 22.8676L66.0742 76.3079ZM70.0405 73.2275L14.9861 18.9578C22.1232 11.1242 32.4779 6.19705 44 6.19705C65.5312 6.19705 82.9858 23.4028 82.9858 44.6272C82.9858 55.985 77.9873 66.1921 70.0405 73.2275ZM88 44.6272C88 68.5813 68.3005 88 44 88C19.6995 88 0 68.5813 0 44.6272C0 20.673 19.6995 1.25427 44 1.25427C68.3005 1.25427 88 20.673 88 44.6272Z",
                    fill: "url(#paint1_glasses_linear)"
                }), u().createElement("path", {
                    d: "M22.5635 28.6956C22.1404 28.7833 21.8154 29.1281 21.7483 29.5568L21.3845 31.8681C21.3026 32.3834 21.5787 32.8859 22.0499 33.0916L22.3445 33.2201C22.0411 34.7107 21.8622 36.2243 21.8121 37.7438C21.8701 39.949 21.7495 46.0395 29.4084 47.8202C37.3868 49.6751 40.5183 46.7464 42.6065 42.9627C44.0286 40.3811 44.6501 38.7723 46.0732 39.1031C47.4963 39.434 47.323 41.147 47.4249 44.0829C47.5765 48.3934 49.0461 52.3858 57.0301 54.2421C64.689 56.0227 67.3421 50.5209 68.3935 48.5737C69.0375 47.1923 69.5637 45.7594 69.968 44.2923L70.2897 44.307C70.8046 44.3306 71.2793 44.0027 71.4396 43.5055L72.162 41.2777C72.2963 40.8646 72.1632 40.4073 71.8244 40.1424L69.592 38.3985C68.0598 37.2136 65.2671 35.9819 61.1043 35.014C53.2156 33.18 50.6518 34.6255 47.3294 33.853C44.0069 33.0806 42.3686 30.6581 34.4799 28.8241C30.3171 27.8562 27.2604 27.728 25.3499 28.1244C25.3512 28.1187 22.5635 28.6956 22.5635 28.6956Z",
                    fill: "#22293E"
                })), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "paint0_glasses_linear",
                    x1: "41.6267",
                    y1: "72.6909",
                    x2: "46.9403",
                    y2: "21.1992",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    "stop-color": "#AEB4BC"
                }), u().createElement("stop", {
                    offset: "1",
                    "stop-color": "#76808F"
                })), u().createElement("linearGradient", {
                    id: "paint1_glasses_linear",
                    x1: "66.5",
                    y1: "6.90018",
                    x2: "17.4678",
                    y2: "79.0248",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    "stop-color": "#848FA0"
                }), u().createElement("stop", {
                    offset: "1",
                    "stop-color": "#A6B3C8"
                }))))
            };
            const R = u().memo(j);
            var z = function() {
                return u().createElement("svg", {
                    width: "88",
                    height: "88",
                    viewBox: "0 0 88 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, u().createElement("g", {
                    opacity: "0.6"
                }, u().createElement("ellipse", {
                    cx: "44",
                    cy: "43.8642",
                    rx: "44",
                    ry: "43.8642",
                    fill: "#F5F5F5"
                }), u().createElement("path", {
                    d: "M37.5219 70.2279L22.4334 51.6651C20.6297 49.446 20.9718 46.1877 23.1975 44.3892L41.8153 29.343C44.0409 27.5444 47.3086 27.8854 49.1124 30.1045L64.2009 48.6674C66.0046 50.8865 65.6625 54.1447 63.4368 55.9433L44.8201 70.9896C42.5934 72.788 39.3267 72.4471 37.5219 70.2279Z",
                    fill: "url(#paint0_hats_linear)"
                }), u().createElement("path", {
                    d: "M35.8852 50.3412C38.8941 50.6552 41.5886 48.4778 41.9036 45.4777C42.2187 42.4776 40.0349 39.791 37.0261 39.477C34.0173 39.163 31.3227 41.3405 31.0077 44.3405C30.6927 47.3406 32.8764 50.0272 35.8852 50.3412Z",
                    fill: "white"
                }), u().createElement("path", {
                    d: "M50.6577 51.8828C53.6665 52.1969 56.361 50.0194 56.6761 47.0193C56.9911 44.0192 54.8074 41.3327 51.7986 41.0186C48.7897 40.7046 46.0952 42.8821 45.7802 45.8822C45.4651 48.8822 47.6489 51.5688 50.6577 51.8828Z",
                    fill: "white"
                }), u().createElement("path", {
                    d: "M39.2468 46.5871C39.0761 46.4774 39.092 46.2457 39.253 46.1242C39.6096 45.8551 39.8492 45.7016 40.2121 45.4839C40.4562 45.3373 40.6621 45.2532 40.6219 44.9902C40.5807 44.7272 40.0443 44.0555 39.1096 43.7985C37.8979 43.465 36.5955 44.0874 36.1514 45.2598C35.6552 46.5661 36.3621 48.0043 37.68 48.4249C38.5982 48.7182 39.5631 48.4366 40.1836 47.7822C40.3003 47.6592 40.2757 47.4602 40.1327 47.3692L39.2468 46.5871Z",
                    fill: "#474D57"
                }), u().createElement("path", {
                    d: "M53.7048 48.0958C53.5341 47.9861 53.55 47.7544 53.711 47.6328C54.0676 47.3638 54.3072 47.2103 54.6701 46.9926C54.9142 46.8459 55.1201 46.7618 55.0799 46.4989C55.0387 46.2358 54.5023 45.5642 53.5676 45.3071C52.356 44.9737 51.0535 45.596 50.6095 46.7684C50.1132 48.0748 50.8201 49.513 52.138 49.9336C53.0562 50.2269 54.0211 49.9453 54.6416 49.2908C54.7583 49.1678 54.7337 48.9688 54.5907 48.8779L53.7048 48.0958Z",
                    fill: "#474D57"
                }), u().createElement("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M66.0747 76.1759C59.7986 80.4816 52.1946 83.0021 44 83.0021C22.4688 83.0021 5.01425 65.6014 5.01425 44.1367C5.01425 35.9674 7.5425 28.3868 11.8615 22.1301L66.0747 76.1759ZM70.0409 73.0606L14.9865 18.1761C22.1236 10.2541 32.4781 5.27123 44 5.27123C65.5312 5.27123 82.9858 22.6719 82.9858 44.1367C82.9858 55.623 77.9875 65.9455 70.0409 73.0606ZM88 44.1367C88 68.3622 68.3005 88.0008 44 88.0008C19.6995 88.0008 0 68.3622 0 44.1367C0 19.9111 19.6995 0.272461 44 0.272461C68.3005 0.272461 88 19.9111 88 44.1367Z",
                    fill: "url(#paint1_hats_linear)"
                }), u().createElement("rect", {
                    width: "51.2494",
                    height: "6.41205",
                    rx: "2",
                    transform: "matrix(0.966125 0.258073 -0.259566 0.965725 23.8564 25.869)",
                    fill: "#22293E"
                }), u().createElement("rect", {
                    width: "27.7405",
                    height: "2.25005",
                    transform: "matrix(0.966125 0.258073 -0.259566 0.965725 36.7617 25.2489)",
                    fill: "#22293E"
                }), u().createElement("path", {
                    d: "M37.5508 23.7394L63.4338 30.3104C63.823 26.2241 64.9941 22.2193 63.4338 19.4708C61.7711 16.5418 58.0762 14.9799 54.6924 13.9877C51.3938 13.0206 46.9702 12.265 44.1924 13.9877C41.4466 15.6906 39.522 19.8356 37.5508 23.7394Z",
                    fill: "#22293E"
                })), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "paint0_hats_linear",
                    x1: "41.0127",
                    y1: "72.1157",
                    x2: "45.5945",
                    y2: "28.2139",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    "stop-color": "#AEB4BC"
                }), u().createElement("stop", {
                    offset: "1",
                    "stop-color": "#76808F"
                })), u().createElement("linearGradient", {
                    id: "paint1_hats_linear",
                    x1: "66.5",
                    y1: "5.98232",
                    x2: "16.7093",
                    y2: "78.4024",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    "stop-color": "#848FA0"
                }), u().createElement("stop", {
                    offset: "1",
                    "stop-color": "#A6B3C8"
                }))))
            };
            const H = u().memo(z);
            var N = function() {
                return u().createElement("svg", {
                    width: "88",
                    height: "88",
                    viewBox: "0 0 88 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, u().createElement("g", {
                    opacity: "0.6"
                }, u().createElement("ellipse", {
                    cx: "44",
                    cy: "43.3729",
                    rx: "44",
                    ry: "43.3729",
                    fill: "#F5F5F5"
                }), u().createElement("path", {
                    d: "M52.2333 82.0334L39.0094 65.9467C37.4286 64.0237 37.7284 61.2001 39.679 59.6414L55.9961 46.6023C57.9467 45.0436 60.8106 45.3392 62.3915 47.2623L75.6153 63.3489C77.1962 65.272 76.8963 68.0956 74.9457 69.6543L58.6296 82.6935C56.6781 84.2521 53.8151 83.9566 52.2333 82.0334Z",
                    fill: "url(#paint0_light_linear)"
                }), u().createElement("path", {
                    d: "M50.7993 64.7993C53.4363 65.0714 55.7978 63.1844 56.0739 60.5846C56.35 57.9847 54.4361 55.6565 51.7991 55.3843C49.1621 55.1122 46.8006 56.9992 46.5245 59.5991C46.2484 62.199 48.1623 64.5272 50.7993 64.7993Z",
                    fill: "white"
                }), u().createElement("path", {
                    d: "M63.7455 66.1353C66.3826 66.4074 68.7441 64.5204 69.0202 61.9205C69.2963 59.3206 67.3824 56.9924 64.7454 56.7203C62.1084 56.4481 59.7469 58.3352 59.4708 60.935C59.1947 63.5349 61.1085 65.8631 63.7455 66.1353Z",
                    fill: "white"
                }), u().createElement("path", {
                    d: "M53.7456 61.5458C53.596 61.4507 53.6099 61.2499 53.751 61.1446C54.0636 60.9114 54.2736 60.7784 54.5916 60.5898C54.8056 60.4627 54.986 60.3898 54.9508 60.1619C54.9146 59.9339 54.4445 59.3519 53.6253 59.1291C52.5634 58.8402 51.4219 59.3795 51.0328 60.3955C50.5978 61.5276 51.2174 62.7739 52.3724 63.1384C53.1772 63.3926 54.0228 63.1486 54.5666 62.5814C54.6689 62.4748 54.6473 62.3024 54.522 62.2236L53.7456 61.5458Z",
                    fill: "#474D57"
                }), u().createElement("path", {
                    d: "M66.4165 62.8537C66.2669 62.7586 66.2808 62.5578 66.4219 62.4524C66.7345 62.2193 66.9445 62.0863 67.2625 61.8976C67.4765 61.7705 67.6569 61.6976 67.6217 61.4698C67.5855 61.2418 67.1154 60.6597 66.2962 60.437C65.2343 60.148 64.0928 60.6874 63.7037 61.7033C63.2687 62.8354 63.8883 64.0818 65.0433 64.4463C65.8481 64.7005 66.6937 64.4564 67.2375 63.8893C67.3398 63.7827 67.3182 63.6102 67.1929 63.5314L66.4165 62.8537Z",
                    fill: "#474D57"
                }), u().createElement("g", {
                    "clip-path": "url(#clip0)"
                }, u().createElement("path", {
                    d: "M21.3534 15.6991L14.6918 23.007L15.8308 23.9848L22.4924 16.6769L21.3534 15.6991Z",
                    fill: "#22293E"
                }), u().createElement("path", {
                    d: "M25.5318 19.2856L23.2938 17.3649L16.6322 24.6728L19.3294 26.9879C20.225 25.0958 21.4003 23.3457 22.8159 21.7928C23.647 20.8819 24.5554 20.0432 25.5318 19.2856Z",
                    fill: "#22293E"
                }), u().createElement("path", {
                    d: "M18.226 15.313L13.9009 20.0561C13.6008 20.3852 13.4486 20.8197 13.4784 21.261C13.5035 21.6442 13.6539 22.009 13.9075 22.3004L20.5338 15.0319C19.7848 14.5754 18.8059 14.6755 18.226 15.313Z",
                    fill: "#22293E"
                }), u().createElement("path", {
                    d: "M47.1026 36.053C47.0059 34.5405 46.3532 33.1147 45.2668 32.0419L37.0791 41.0232C39.7319 42.9533 43.4512 42.6853 45.6027 40.3246C46.6671 39.1585 47.2084 37.618 47.1026 36.053Z",
                    fill: "#22293E"
                }), u().createElement("path", {
                    d: "M37.3242 15.7433C31.9802 16.2539 27.1081 18.6507 23.606 22.4933C17.0915 29.6391 16.6759 40.1843 22.2285 48.1249L49.6631 18.0295C45.8504 16.1368 41.5732 15.3444 37.3242 15.7433Z",
                    fill: "#22293E"
                }), u().createElement("path", {
                    d: "M53.2044 20.9144C53.1399 20.3979 52.8523 19.9339 52.4163 19.6414C51.9018 19.2891 51.3732 18.959 50.8325 18.6513L50.6286 18.5352L22.8623 48.9963C23.2818 49.5334 23.7303 50.0578 24.2074 50.5682C24.5682 50.956 25.0785 51.1759 25.6127 51.1734C26.1076 51.1769 26.5802 50.9722 26.9129 50.6102L52.7932 22.2205C53.116 21.8649 53.2664 21.3881 53.2044 20.9144Z",
                    fill: "#22293E"
                })), u().createElement("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M66.0745 76.3077C59.7985 80.5651 52.1945 83.0573 44 83.0573C22.4688 83.0573 5.01425 65.8515 5.01425 44.6272C5.01425 36.5495 7.54245 29.0539 11.8614 22.8673L66.0745 76.3077ZM70.0408 73.2273L14.9863 18.9575C22.1234 11.1241 32.478 6.19705 44 6.19705C65.5312 6.19705 82.9858 23.4028 82.9858 44.6272C82.9858 55.9849 77.9874 66.1919 70.0408 73.2273ZM88 44.6272C88 68.5813 68.3005 88 44 88C19.6995 88 0 68.5813 0 44.6272C0 20.673 19.6995 1.25427 44 1.25427C68.3005 1.25427 88 20.673 88 44.6272Z",
                    fill: "url(#paint1_light_linear)"
                }), u().createElement("path", {
                    d: "M42.4922 44.5249L42.4922 48.5646",
                    stroke: "#22293E"
                }), u().createElement("line", {
                    y1: "-0.5",
                    x2: "4.21251",
                    y2: "-0.5",
                    transform: "matrix(0.712164 0.702013 -0.712164 0.702013 47 42.6499)",
                    stroke: "black"
                }), u().createElement("line", {
                    x1: "50",
                    y1: "36.2355",
                    x2: "54",
                    y2: "36.2355",
                    stroke: "#22293E"
                })), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "paint0_light_linear",
                    x1: "57.0002",
                    y1: "55.2019",
                    x2: "78.6272",
                    y2: "81.6294",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    "stop-color": "#CDD3DA"
                }), u().createElement("stop", {
                    offset: "1",
                    "stop-color": "#76808F"
                })), u().createElement("linearGradient", {
                    id: "paint1_light_linear",
                    x1: "66.5",
                    y1: "6.90018",
                    x2: "17.4678",
                    y2: "79.0248",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    "stop-color": "#848FA0"
                }), u().createElement("stop", {
                    offset: "1",
                    "stop-color": "#A6B3C8"
                })), u().createElement("clipPath", {
                    id: "clip0"
                }, u().createElement("rect", {
                    width: "37.7644",
                    height: "40.9976",
                    fill: "white",
                    transform: "matrix(0.869106 0.494627 -0.505393 0.862889 23.7197 3.22009)"
                }))))
            };
            const U = u().memo(N);
            var V = {
                    hats: u().createElement(H, null),
                    glasses: u().createElement(R, null),
                    filters: u().createElement(F, null),
                    light: u().createElement(U, null)
                },
                Z = function(e) {
                    var t = e.imgName,
                        n = e.text,
                        r = e.isLongTextLang;
                    return u().createElement(v.A, {
                        my: "sm",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50%",
                        maxWidth: "50%",
                        minWidth: "50%",
                        fontSize: 14
                    }, u().createElement(O.A, {
                        mb: r ? "minor" : "sm"
                    }, V[t]), u().createElement(L.A, {
                        color: "t.secondary",
                        textAlign: "center",
                        maxWidth: "180px"
                    }, n))
                };
            const G = u().memo(Z);

            function K(e) {
                var t = e.staticHost,
                    n = e.type,
                    r = e.sx,
                    a = e.onClick,
                    o = e.extraNode,
                    i = e.theme,
                    c = e.isFullPageKyc,
                    l = (0, E.useTranslation)().t,
                    s = "web" === n ? l("kyc-complete-liveness-web", "I want to complete on web") : l("kyc-complete-liveness-mobile-phone", "I want to complete on mobile phone");
                return u().createElement(O.A, {
                    className: "popup_click_binance_popup_click_kyc_verification_center_page_intermediate_popup_video_switch_qr_code",
                    sx: (0, m.A)({
                        width: c ? "100%" : "80px",
                        height: c ? "56px" : "80px",
                        position: "absolute",
                        right: c ? "auto" : 0,
                        bottom: 0,
                        borderRadius: "5px"
                    }, r || {}),
                    onClick: a
                }, c ? u().createElement(O.A, {
                    sx: {
                        cursor: "pointer"
                    }
                }, u().createElement(L.A, {
                    variant: "subtitle2",
                    color: "t.yellow"
                }, s)) : u().createElement("img", {
                    width: "100%",
                    style: {
                        cursor: "pointer"
                    },
                    src: "".concat(t || "https://bin.bnbstatic.com", "/image/julia/kyc/").concat("web" === n ? "dark" === i ? "desktop-right-dark1" : "desktop-right" : "qrcode-right", ".png")
                }), c ? null : o)
            }
            var W = function(e) {
                var t = e.handleConfirmFace,
                    n = e.toFace,
                    r = e.grayModel,
                    a = e.onSwitchSDK,
                    o = e.fixedSwitchIcon,
                    i = e.staticHost,
                    c = e.customConfirmButton,
                    l = e.theme,
                    d = e.isFullPageKyc,
                    p = void 0 !== d && d,
                    f = I(),
                    m = f.t,
                    h = f.i18n.language,
                    y = (0, s.useMemo)((function() {
                        return "ru" === h || "ua" === h || "nl" === h || "id" === h || "pt" === h
                    }), [h]),
                    g = (0, s.useMemo)((function() {
                        return window.document.body.clientWidth >= 1024
                    }), []);
                return u().createElement(v.A, {
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                    mt: "8px"
                }, u().createElement(L.A, {
                    variant: "body2",
                    color: "t.secondary",
                    mb: "24px"
                }, m("newkyc-confirm-identity-desc", "We will now confirm your identity. Face the camera and follow the on-screen instructions to begin.")), u().createElement(v.A, {
                    width: "auto",
                    height: "auto",
                    sx: {
                        borderRadius: "5px",
                        boxSizing: "content-box"
                    },
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "flex-start"
                }, D.map((function(e, t) {
                    return u().createElement(G, {
                        isLongTextLang: y,
                        key: t,
                        imgName: e.name,
                        text: m(e.textI18n, e.default)
                    })
                }))), g && "ONLY_WEB" !== r && u().createElement(u().Fragment, null, o && u().createElement(u().Fragment, null, u().createElement(L.A, {
                    pt: "ls",
                    fontSize: 14,
                    fontWeight: 400,
                    textAlign: "right",
                    color: "#D0980B",
                    sx: {
                        cursor: "pointer"
                    },
                    onClick: t
                }, m("newkyc-completed-phone", "I have completed this on my phone"), "."), u().createElement(K, {
                    staticHost: i,
                    type: "sdk",
                    theme: l,
                    onClick: a,
                    isFullPageKyc: p,
                    extraNode: u().createElement(O.A, {
                        color: "bg5",
                        sx: {
                            background: "linear-gradient(180deg, #F0B90B 0%, #F8D33A 100%)",
                            borderRadius: "3px",
                            padding: "2px 4px",
                            position: "absolute",
                            right: "0",
                            transform: "translateY(4px)",
                            whiteSpace: "nowrap"
                        }
                    }, u().createElement(O.A, {
                        sx: {
                            width: "0",
                            height: "0",
                            position: "absolute",
                            right: "15px",
                            top: "-5px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderBottom: "5px solid #F0B90B"
                        }
                    }), m("newkyc-do-not-have-camera", "My device doesn\u2019t have a camera."))
                }))), c || u().createElement(P.A, {
                    height: "40px",
                    variant: "primary",
                    fontSize: 16,
                    mt: "md",
                    onClick: n
                }, m("newkyc-begin-verification", "Begin Verification")))
            };
            const q = u().memo(W);
            var Y = n("rLOQ"),
                X = n("HDxn"),
                J = n("eEzz"),
                Q = n.n(J),
                $ = function(e) {
                    var t = e.qrcodeLink,
                        n = e.onRefresh,
                        r = e.onFaceConfirm,
                        a = e.grayModel,
                        o = e.onSwitchWeb,
                        i = e.fixedSwitchIcon,
                        c = e.staticHost,
                        l = e.theme,
                        s = e.isFullPageKyc,
                        d = void 0 !== s && s,
                        p = I().t,
                        f = window.document.body.clientWidth >= 1024;
                    return u().createElement(v.A, {
                        width: "100%",
                        height: "100%",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center"
                    }, u().createElement(v.A, {
                        width: "100%",
                        bg: "invbg",
                        py: "40px",
                        sx: {
                            borderRadius: "5px"
                        },
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }, u().createElement(L.A, {
                        color: "t.primary",
                        fontSize: "sm",
                        mb: "50px"
                    }, u().createElement(E.Trans, {
                        t: p,
                        i18nKey: "newkyc-open-binance-app",
                        defaults: "Open <b>Binance APP</b> and scan the QR code below",
                        components: {
                            b: u().createElement("b", null)
                        }
                    })), u().createElement(v.A, {
                        alignItems: "baseline"
                    }, u().createElement(Y.A, {
                        sx: {
                            maxWidth: "160px"
                        },
                        mr: "16px",
                        src: "".concat(c, "/static/images/kyc/phone.png")
                    }), u().createElement(O.A, {
                        pt: "16px"
                    }, u().createElement(O.A, {
                        sx: {
                            border: "4px solid white"
                        }
                    }, u().createElement(Q(), {
                        size: 160,
                        value: t
                    })), u().createElement(X.A, {
                        fontSize: 12,
                        sx: {
                            display: "block",
                            textAlign: "center",
                            color: "t.yellow",
                            cursor: "pointer",
                            mt: "8px"
                        },
                        onClick: function(e) {
                            return n(e)
                        }
                    }, p("exchange-common-refresh", "Refresh")))), u().createElement(L.A, {
                        mt: "50px",
                        color: "t.third"
                    }, p("newkyc-binance-app-version", "Binance app (version 2.18.0 or above)"))), u().createElement(P.A, {
                        onClick: r,
                        variant: "default",
                        colorStyle: "flatprimary",
                        sx: {
                            width: "100%",
                            mt: "24px",
                            minHeight: "48px",
                            mb: d ? "10px" : "0px"
                        }
                    }, p("newkyc-completed-phone", "I have completed this on my phone")), f && ("ONLY_SDK" !== a && i ? u().createElement(K, {
                        staticHost: c,
                        type: "web",
                        theme: l,
                        onClick: o,
                        isFullPageKyc: d
                    }) : u().createElement(L.A, {
                        color: "primary",
                        textAlign: "center",
                        fontSize: 12,
                        width: "100%",
                        mt: "sm",
                        sx: {
                            cursor: "pointer"
                        },
                        onClick: o
                    }, p("newkyc-use-pc-face", "Use PC to do verification"))))
                };
            const ee = u().memo($);
            (function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/appealInfo", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, r.A)(l().mark((function e() {
                    var t;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.get)("/bapi/haodesk/v2/protect/haodesk/appeal/resetApply/reset2faAppealInfo");
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e() {
                    var t;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.get)("/bapi/haodesk/v2/protect/haodesk/appeal/resetApply/unlockAccountAppealInfo");
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/appealSubmit", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/appealInfoResubmit", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/appealFilesUploadPrepare", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/kycDeleteUploadPrepare", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e() {
                    var t;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/kycDeleteAppealInfo", {});
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/kycDeleteAppealSubmit", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/kycDeleteAppealResubmit", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/kycResetUploadPrepare", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e() {
                    var t;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/kycResetAppealInfo", {});
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/kycResetAppealSubmit", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v1/private/haodesk/appeal/kycResetAppealResubmit", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, r.A)(l().mark((function e() {
                    var t;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/haodesk/v2/private/haodesk/appeal/withdrawEntrance");
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var te = function() {
                    var e = (0, r.A)(l().mark((function e(t) {
                        var n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.post)("/bapi/kyc/v1/private/certificate/user-face/is-can-appeal", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ne = n("a59x"),
                re = n("M5j3"),
                ae = function(e) {
                    return u().createElement("svg", (0, re.A)({
                        width: "96",
                        height: "96",
                        viewBox: "0 0 96 96",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), u().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M88 48C88 70.0914 70.0914 88 48 88C25.9086 88 8 70.0914 8 48C8 25.9086 25.9086 8 48 8C70.0914 8 88 25.9086 88 48Z",
                        fill: "url(#paint_fail_linear)"
                    }), u().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19 48C19 31.9837 31.9837 19 48 19C64.0163 19 77 31.9837 77 48C77 64.0163 64.0163 77 48 77C31.9837 77 19 64.0163 19 48ZM33 37.1985L43.6066 47.6946L33 58.1907L37.2426 62.3891L47.8492 51.893L58.4558 62.3891L62.6985 58.1907L52.0919 47.6946L62.6985 37.1985L58.4558 33L47.8492 43.4961L37.2426 33L33 37.1985Z",
                        fill: "url(#paint_fail1_linear)"
                    }), u().createElement("path", {
                        d: "M43.6066 47.6946L33 37.1984L37.2426 33L47.8492 43.4961L58.4558 33L62.6985 37.1984L52.0919 47.6946L62.6985 58.1907L58.4558 62.3891L47.8492 51.893L37.2426 62.3891L33 58.1907L43.6066 47.6946Z",
                        fill: "white"
                    }), u().createElement("defs", null, u().createElement("linearGradient", {
                        id: "paint_fail_linear",
                        x1: "8",
                        y1: "48",
                        x2: "88",
                        y2: "48",
                        gradientUnits: "userSpaceOnUse"
                    }, u().createElement("stop", {
                        stopColor: "#F84960",
                        stopOpacity: "0"
                    }), u().createElement("stop", {
                        offset: "1",
                        stopColor: "#F84960"
                    })), u().createElement("linearGradient", {
                        id: "paint_fail1_linear",
                        x1: "77",
                        y1: "48",
                        x2: "19",
                        y2: "48",
                        gradientUnits: "userSpaceOnUse"
                    }, u().createElement("stop", {
                        stopColor: "#F84960"
                    }), u().createElement("stop", {
                        offset: "1",
                        stopColor: "#D9304E"
                    }))))
                };
            const oe = u().memo(ae);
            var ie = function() {
                return u().createElement("svg", {
                    width: "96",
                    height: "96",
                    viewBox: "0 0 96 96",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, u().createElement("path", {
                    d: "M18 8L22 12L26 8L22 4L18 8Z",
                    fill: "url(#paint0_success_linear)"
                }), u().createElement("path", {
                    d: "M85 76L88 79L91 76L88 73L85 76Z",
                    fill: "url(#paint1_success_linear)"
                }), u().createElement("path", {
                    d: "M86 20L88 22L90 20L88 18L86 20Z",
                    fill: "url(#paint2_success_linear)"
                }), u().createElement("path", {
                    d: "M0 47L3 50L6 47L3 44L0 47Z",
                    fill: "url(#paint3_success_linear)"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 88C70.0914 88 88 70.0914 88 48C88 25.9086 70.0914 8 48 8C25.9086 8 8 25.9086 8 48C8 70.0914 25.9086 88 48 88ZM31.0002 48.3353L43.4749 61L64.0001 40.2413L59.812 36L43.4749 52.547L35.1581 44.1241L31.0002 48.3353Z",
                    fill: "url(#paint4_success_linear)"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 19C64.0163 19 77 31.9837 77 48C77 64.0163 64.0163 77 48 77C31.9837 77 19 64.0163 19 48C19 31.9837 31.9837 19 48 19ZM31.0002 48.3353L43.4749 61L64.0001 40.2413L59.812 36L43.4749 52.547L35.1581 44.1241L31.0002 48.3353Z",
                    fill: "url(#paint5_success_linear)"
                }), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "paint0_success_linear",
                    x1: "22",
                    y1: "12",
                    x2: "22",
                    y2: "4",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#02C076"
                }), u().createElement("stop", {
                    offset: "1",
                    stopColor: "#28D294"
                })), u().createElement("linearGradient", {
                    id: "paint1_success_linear",
                    x1: "88",
                    y1: "79",
                    x2: "88",
                    y2: "73",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#02C076"
                }), u().createElement("stop", {
                    offset: "1",
                    stopColor: "#28D294"
                })), u().createElement("linearGradient", {
                    id: "paint2_success_linear",
                    x1: "88",
                    y1: "22",
                    x2: "88",
                    y2: "18",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#02C076"
                }), u().createElement("stop", {
                    offset: "1",
                    stopColor: "#28D294"
                })), u().createElement("linearGradient", {
                    id: "paint3_success_linear",
                    x1: "3",
                    y1: "50",
                    x2: "3",
                    y2: "44",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#02C076"
                }), u().createElement("stop", {
                    offset: "1",
                    stopColor: "#28D294"
                })), u().createElement("linearGradient", {
                    id: "paint4_success_linear",
                    x1: "8",
                    y1: "48",
                    x2: "88",
                    y2: "48",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#28D294",
                    stopOpacity: "0"
                }), u().createElement("stop", {
                    offset: "1",
                    stopColor: "#28D294"
                })), u().createElement("linearGradient", {
                    id: "paint5_success_linear",
                    x1: "48",
                    y1: "77",
                    x2: "48",
                    y2: "19",
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#02C076"
                }), u().createElement("stop", {
                    offset: "1",
                    stopColor: "#28D294"
                }))))
            };
            const ce = u().memo(ie);

            function le(e) {
                var t = e.type,
                    n = e.msg,
                    r = e.onResultClick,
                    a = e.faceType,
                    o = e.transId,
                    i = I(),
                    c = i.t,
                    l = i.i18n.language,
                    d = (0, h.A)((0, s.useState)(!1), 2),
                    p = d[0],
                    f = d[1],
                    m = (0, h.A)((0, s.useState)(""), 2),
                    y = m[0],
                    g = m[1];
                (0, s.useEffect)((function() {
                    "faceFail" === t && o && a && te({
                        transId: o,
                        type: a
                    }).then((function(e) {
                        var t = e.success,
                            n = e.data;
                        if (t) {
                            var r = n || {},
                                a = r.appeal,
                                o = r.notifyAppealId;
                            f(a || !1), g(o || "")
                        }
                    })).catch((function() {}))
                }), [t]);
                var k = (0, s.useMemo)((function() {
                    return "https://www.".concat((0, ne.bG)(2), "/").concat(l, "/my/risk/facial-verification-failed-appeal?id=").concat(y)
                }), [y]);
                return u().createElement(v.A, {
                    width: "100%",
                    mt: "md",
                    flexDirection: "column",
                    alignItems: "center"
                }, u().createElement(O.A, {
                    width: "100%"
                }, u().createElement(O.A, {
                    textAlign: "center",
                    minHeight: ["0", "198px"],
                    mt: "96px",
                    mb: "205px"
                }, "faceFail" === t ? u().createElement(oe, null) : u().createElement(ce, null), u().createElement(L.A, {
                    fontSize: 20,
                    lineHeight: "24px",
                    mt: "20px",
                    mb: "8px",
                    fontWeight: "500"
                }, "faceFail" === t && c("newkyc-verification-face-failed", "Verification failed, please try again"), "faceSuccess" === t && c("newkyc-verification-face-completed", "Verification completed")), "faceFail" === t && n && u().createElement(L.A, {
                    color: "t.third",
                    lineHeight: "20px"
                }, n)), u().createElement(O.A, {
                    width: "100%",
                    sx: {
                        position: ["fixed", "absolute"],
                        bottom: ["16px", "0"],
                        left: "0",
                        padding: ["md", "0 64px 40px 64px"]
                    }
                }, u().createElement(v.A, {
                    flexDirection: "column",
                    justifyContent: "space-between"
                }, u().createElement(P.A, {
                    height: ["38px", "48px"],
                    variant: "default",
                    colorStyle: "flatprimary",
                    width: "100%",
                    onClick: r
                }, "faceFail" === t && c("newkyc-try-again", "Try again"), "faceSuccess" === t && c("newkyc-close", "Close")), "faceFail" === t && p && u().createElement(E.Trans, {
                    t: c,
                    i18nKey: "widget-face:face-apply-appeal",
                    defaults: "<a>Apply for appeal</a>",
                    components: {
                        a: u().createElement(X.A, {
                            color: "t.yellow",
                            mt: "22px",
                            textAlign: "center",
                            href: k,
                            sx: {
                                textDecoration: "none"
                            }
                        })
                    }
                })))))
            }
            const se = u().memo(le);
            var ue = n("Hkrp"),
                de = function() {
                    var e = (0, r.A)(l().mark((function e(t) {
                        var n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.get)("/bapi/kyc/v1/friendly/inspector/faceid/client-gray".concat(t ? "?bizType=".concat(t) : ""));
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                pe = function() {
                    var e = (0, r.A)(l().mark((function e(t, n) {
                        var r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.get)("/bapi/kyc/v3/public/inspector/faceid/client-gray".concat(t ? "?bizType=".concat(t) : ""), {
                                        headers: {
                                            "X-ACCESS-TOKEN": n
                                        }
                                    });
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                fe = n("UhfZ"),
                me = n("Cjys"),
                he = n("Utn3");
            var ve = function() {
                    return {
                        isHybrid: (0, s.useMemo)((function() {
                            return Boolean(window.navigator.userAgent && /BNC\/[\d\.]+/i.test(window.navigator.userAgent) ? window.navigator.userAgent.match(/BNC\/[\d\.]+/i)[0].slice(4) : "")
                        }), []),
                        bridge: (0, s.useMemo)((function() {
                            return (0, me.vt)((0, me.Q)(he))
                        }), []),
                        clientType: (0, s.useMemo)((function() {
                            return function() {
                                var e = window.navigator.userAgent || window.navigator.vendor || window.opera;
                                if (e) {
                                    if (/android/i.test(e)) return "Android";
                                    if (/iPad|iPhone|iPod/.test(e) && !window.MSStream) return "iOS"
                                }
                                return "unknown"
                            }()
                        }), [])
                    }
                },
                ye = n("nnm9"),
                ge = n.n(ye),
                ke = n("QUKP"),
                we = function(e) {
                    var t = null,
                        n = (0, s.useRef)(!1),
                        a = (0, T.A)().enqueueNotification,
                        o = function() {
                            t && (clearTimeout(t), n.current = !0)
                        },
                        i = (0, s.useCallback)(function() {
                            var c = (0, r.A)(l().mark((function r(c, s) {
                                var u, d, p, f, h, v, y;
                                return l().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (u = s.asyncReqCount, d = s.asyncReqSeconds, p = s.asyncType, r.prev = 1, !n.current) {
                                                r.next = 4;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 4:
                                            if (!((f = u - 1) < 0 && t)) {
                                                r.next = 9;
                                                break
                                            }
                                            return clearTimeout(t), n.current = !0, r.abrupt("return");
                                        case 9:
                                            return r.next = 11, (0, g.post)("/bapi/kyc/v3/protect/certificate/user-face/get-async-result", {
                                                faceTransId: c,
                                                asyncType: p
                                            });
                                        case 11:
                                            if (h = r.sent, v = h.success, y = h.data, !v) {
                                                r.next = 20;
                                                break
                                            }
                                            if (!((null === y || void 0 === y ? void 0 : y.status) && (null === y || void 0 === y ? void 0 : y.result) || 0 === f)) {
                                                r.next = 18;
                                                break
                                            }
                                            return e(y), r.abrupt("return");
                                        case 18:
                                            return t = setTimeout((function() {
                                                i(c, (0, ke.A)((0, m.A)({}, s), {
                                                    asyncReqCount: f
                                                }))
                                            }), 1e3 * d), r.abrupt("return");
                                        case 20:
                                            r.next = 27;
                                            break;
                                        case 22:
                                            r.prev = 22, r.t0 = r.catch(1), console.error(r.t0), o(), a(r.t0);
                                        case 27:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [1, 22]
                                ])
                            })));
                            return function(e, t) {
                                return c.apply(this, arguments)
                            }
                        }(), []);
                    return {
                        handleVendorPolling: i,
                        clearTimer: o
                    }
                };
            var be = n("GlbY");

            function xe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    var n = be.u4,
                        r = !1;
                    "function" === typeof window.__KYC_STUDIO_FACE_TRACK__ && (r = !0, n = window.__KYC_STUDIO_FACE_TRACK__), n("Action", (0, m.A)({
                        pageName: r ? "kyc-face-studio" : "kyc-face",
                        elementID: e,
                        type: e
                    }, t))
                } catch (a) {
                    console.error("trackAction[faceV2] error", a)
                }
            }

            function Ce(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    var n = Date.now(),
                        r = !1;
                    return function() {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        try {
                            if (r) return;
                            var o = Date.now() - n,
                                i = {
                                    status: (null === a || void 0 === a ? void 0 : a.status) || "success",
                                    df_duration: o,
                                    extraInfo: (0, m.A)({
                                        duration: o
                                    }, t, a)
                                };
                            xe(e, i)
                        } catch (c) {
                            console.log("createPerformanceAction[faceV2] error", c)
                        } finally {
                            r = !0
                        }
                    }
                } catch (a) {
                    console.log("createPerformanceAction[faceV2] error", a)
                }
                return function() {}
            }
            var Ee = function() {
                function e(t, n, r) {
                    (0, a.A)(this, e), this.user_id = "0", this.appid = t, this.channel = n, this.app_event = r, this.fvideo_id = "", this.event_params = {}
                }
                var t = e.prototype;
                return t.getBaseBean = function() {
                    return {
                        appid: this.appid,
                        user_id: this.user_id,
                        channel: this.channel,
                        app_event: this.app_event,
                        fvideo_id: this.fvideo_id,
                        event_params: this.event_params
                    }
                }, t.setEventParam = function(e, t) {
                    this.event_params[e] = t
                }, e
            }();
            var _e, Ae, Se, Me, Ie, De, Te = function(e, t) {
                    return t ? function(e, t) {
                        return (0, g.post)("/bapi/kyc/v3/public/certificate/user-face/track", e, {
                            headers: {
                                "X-Access-Token": t
                            }
                        })
                    }(e, t) : function(e) {
                        return (0, g.post)("/bapi/kyc/v1/friendly/certificate/user-face/track", e)
                    }(e)
                },
                Le = {
                    get: g.get,
                    post: g.post
                },
                Oe = function() {
                    var e = (0, r.A)(l().mark((function e(t, n, r) {
                        var a;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!window.falcon1024 || !window.falcon1024.getVCLog) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, window.falcon1024.getVCLog(t, Le, n, r);
                                case 4:
                                    return a = e.sent, console.log("[falcon] getVCLog success", a), xe("falcon_getVCLog_success", {
                                        extraInfo: {
                                            r: a
                                        }
                                    }), e.abrupt("return", a);
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(1), console.log("[falcon] getVCLog error", e.t0), xe("falcon_getVCLog_error", {
                                        extraInfo: {
                                            e: e.t0
                                        }
                                    }), e.abrupt("return", null);
                                case 15:
                                    return e.abrupt("return", null);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Pe = function() {
                    var e = (0, r.A)(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, navigator.mediaDevices.enumerateDevices();
                                case 3:
                                    return t = e.sent, e.abrupt("return", t);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), console.log("[falcon] enumerateDevices error", e.t0), e.abrupt("return", []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Be = function() {
                    var e = (0, r.A)(l().mark((function e(t) {
                        var n, r, a, o, i, c, s, u, d;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.mediaStream, r = t.constraints, a = t.userId, o = t.type, i = t.transId, c = t.accessToken, e.prev = 1, s = new Ee("fc8q5jqk", "browser", "APP_KYC"), a && (s.user_id = a), s.setEventParam("transId", i), e.next = 7, Oe(s, n, r);
                                case 7:
                                    return u = e.sent, e.next = 10, Pe();
                                case 10:
                                    return d = e.sent, e.next = 13, Te({
                                        transId: i,
                                        type: o,
                                        infos: d,
                                        extraInfo: {
                                            vcLog: u
                                        }
                                    }, c);
                                case 13:
                                    e.next = 19;
                                    break;
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(1), console.log("[falcon] sendCameraLog error", e.t0), xe("falcon-sendCameraLog", {
                                        status: "error",
                                        extraInfo: {
                                            e: e.t0
                                        }
                                    });
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 15]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Fe = ge();

            function je(e) {
                var t, a = e.id,
                    o = e.type,
                    i = e.faceType,
                    c = void 0 === i ? "video" : i,
                    d = e.onfidoSuccessFn,
                    p = e.updateFacialRecognitionFlow,
                    f = e.accessToken,
                    y = e.extraInfo,
                    k = e.language,
                    w = e.showCloseIcon,
                    b = void 0 === w || w,
                    x = e.initProps,
                    C = void 0 === x ? {} : x,
                    _ = ge(),
                    M = (0, E.useTranslation)().t,
                    I = (0, h.A)((0, s.useState)(""), 2),
                    D = I[0],
                    L = I[1],
                    O = (0, h.A)((0, s.useState)(!0), 2),
                    P = O[0],
                    B = O[1],
                    F = (0, T.A)().enqueueNotification,
                    j = (0, E.useTranslation)().i18n.language,
                    R = ve().clientType,
                    z = function(e) {
                        var t, n = A[e];
                        return null !== n && void 0 !== n ? n : null === (t = null === e || void 0 === e ? void 0 : e.split("-")) || void 0 === t ? void 0 : t[0]
                    }(j),
                    H = (null === R || void 0 === R ? void 0 : R.match(/android/gi)) ? window.innerHeight : "auto",
                    N = we((function(e) {
                        var n;
                        "success" === (null === e || void 0 === e ? void 0 : e.status) && (L(null === e || void 0 === e ? void 0 : e.result), Fe = function(e) {
                            var t, n;
                            if ("undefined" === typeof(null === (t = window.navigator) || void 0 === t || null === (n = t.mediaDevices) || void 0 === n ? void 0 : n.getUserMedia)) return function() {};
                            var r = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                            return navigator.mediaDevices.getUserMedia = function(t) {
                                    return new Promise((function(n, a) {
                                        r(t).then((function(r) {
                                            n(r), null === e || void 0 === e || e({
                                                mediaStream: r,
                                                constraints: t
                                            })
                                        })).catch((function(e) {
                                            a(e)
                                        }))
                                    }))
                                },
                                function() {
                                    navigator.mediaDevices.getUserMedia = r
                                }
                        }((function(e) {
                            var t = e.mediaStream,
                                n = e.constraints;
                            Be({
                                accessToken: f,
                                userId: null === y || void 0 === y ? void 0 : y.userId,
                                mediaStream: t,
                                constraints: n,
                                type: o,
                                transId: a
                            })
                        }))), _({
                            status: null === e || void 0 === e ? void 0 : e.status,
                            result: "".concat(null === e || void 0 === e || null === (n = e.result) || void 0 === n ? void 0 : n.slice(0, 20), "...")
                        }), "fail" === (null === e || void 0 === e ? void 0 : e.status) && ((null === e || void 0 === e ? void 0 : e.result) && F(M("onfidoliveness-waitresult")), null === t || void 0 === t || t.tearDown(), null === p || void 0 === p || p({
                            status: "FAIL"
                        })), xe("onfido-token-init", {
                            status: null === e || void 0 === e ? void 0 : e.status
                        })
                    })),
                    U = N.handleVendorPolling,
                    V = N.clearTimer,
                    Z = function() {
                        var e = (0, s.useRef)(),
                            t = (0, h.A)((0, s.useState)(!1), 2),
                            r = t[0],
                            a = t[1];
                        return (0, s.useEffect)((function() {
                            n.e(7386).then(n.bind(n, "HHXA")).then((function(t) {
                                var n = t.Onfido;
                                e.current = n, a(!0)
                            }))
                        }), []), {
                            Onfido: e.current,
                            ready: r
                        }
                    }(),
                    G = Z.ready,
                    K = Z.Onfido;
                if ((0, s.useEffect)((function() {
                        function e() {
                            return (e = (0, r.A)(l().mark((function e() {
                                var n, r, i;
                                return l().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, _ = Ce("onfido-init-token-time"), e.next = 4, (0, g.post)("/bapi/kyc/v3/protect/certificate/user-face/onfido-init-token", {
                                                faceTransId: a,
                                                transType: o
                                            });
                                        case 4:
                                            n = e.sent, r = n.success, i = n.data, r && U(a, i), e.next = 17;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), F(e.t0), null === window || void 0 === window || window.Sentry.captureMessage("onfido-init-token Error: ", e.t0), null === t || void 0 === t || t.tearDown(), null === p || void 0 === p || p({
                                                status: "INIT_ERROR"
                                            }), xe("onfido-token-request-error", {
                                                status: "fail"
                                            });
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }();
                        var n = getComputedStyle(document.documentElement)["font-size"];
                        return document.getElementsByTagName("html")[0].style.fontSize = "16px",
                            function() {
                                V(), null === t || void 0 === t || t.tearDown(), document.getElementsByTagName("html")[0].style.fontSize = n, Fe()
                            }
                    }), []), D && G) {
                    var W = Ce("onfido-verify-time");
                    t = K.init((0, m.A)({
                        token: D,
                        containerId: "liveness-onfido",
                        onComplete: function(e) {
                            var n;
                            e && (W({
                                status: "success"
                            }), d() && (null === t || void 0 === t || null === (n = t.tearDown) || void 0 === n || n.call(t)))
                        },
                        onError: function(e) {
                            var n, r;
                            "user_consent_denied" === (null === e || void 0 === e ? void 0 : e.type) ? (W({
                                status: "fail",
                                error: "user-exit"
                            }), null === t || void 0 === t || null === (n = t.tearDown) || void 0 === n || n.call(t), null === p || void 0 === p || p({
                                status: "USER_CONSENT_DENIED"
                            })) : (null === window || void 0 === window || window.Sentry.captureMessage("onfido-modal Error: ", e), W({
                                status: "fail",
                                error: null === e || void 0 === e ? void 0 : e.message
                            }), F(e) && (null === t || void 0 === t || null === (r = t.tearDown) || void 0 === r || r.call(t)));
                            xe("onfido-face-process", {
                                status: null === e || void 0 === e ? void 0 : e.type,
                                extraInfo: {
                                    error: e
                                }
                            })
                        },
                        steps: [{
                            type: "face",
                            options: {
                                requestedVariant: c,
                                motionFallbackVariant: "video",
                                photoCaptureFallback: !1,
                                uploadFallback: !1
                            }
                        }],
                        disableAnalytics: !0,
                        colorBorderSurfaceModal: "white",
                        colorBackgroundSurfaceModal: "white",
                        borderRadiusSurfaceModal: "6px",
                        colorContentButtonPrimaryText: "black",
                        colorBackgroundButtonPrimary: "#FCD535",
                        colorBackgroundButtonPrimaryHover: "#FCD535",
                        colorBackgroundButtonPrimaryActive: "#FCD535",
                        colorBorderButtonPrimary: "#FCD535",
                        colorContentButtonSecondaryText: "black",
                        colorBackgroundButtonSecondary: "#EAECEF",
                        colorBackgroundButtonSecondaryHover: "#EAECEF",
                        colorBackgroundButtonSecondaryActive: "#EAECEF",
                        colorBorderButtonSecondary: "#EAECEF",
                        colorBackgroundIcon: "#FCD535",
                        language: k || (S.includes(z) ? z : "en")
                    }, C)), L("")
                }
                return u().createElement(fe.A, {
                    id: "onfido-liveness-container",
                    width: ["767px", "auto"],
                    contentSx: {
                        minHeight: [H, "680px"],
                        minWidth: ["auto", "580px"],
                        maxWidth: ["100%"],
                        padding: 0
                    },
                    open: P,
                    showCloseIcon: b,
                    sx: {
                        backgroundColor: "bg1"
                    },
                    closeSx: {
                        zIndex: 1e3
                    },
                    onCloseIconClick: function() {
                        null === t || void 0 === t || t.tearDown(), null === p || void 0 === p || p({
                            status: "USER_CANCEL"
                        }), B(!1)
                    }
                }, u().createElement(v.A, {
                    id: "liveness-onfido",
                    width: "100%",
                    height: ["100%", "680px"],
                    style: {
                        position: "absolute",
                        maxWidth: "100%",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        backgroundImage: "url(https://sdk.onfido.com/assets/icons/spinner.svg)",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                    }
                }))
            }
            var Re = function(e) {
                var t, n = e.id,
                    r = e.type,
                    a = e.successFn,
                    o = e.failedFn,
                    i = e.onTriggerDisableCamera,
                    c = e.staticHost,
                    l = e.size,
                    d = e.accessToken,
                    p = e.extraInfo,
                    f = function() {
                        Ie && "closed" !== Ie.signalingState && (Ae && clearInterval(Ae), _e && _e.close(), Ie.getTransceivers && Ie.getTransceivers().forEach((function(e) {
                            e.stop && e.stop()
                        })), Ie.getSenders().forEach((function(e) {
                            var t;
                            null === e || void 0 === e || null === (t = e.track) || void 0 === t || t.stop()
                        })), Se.getTracks().forEach((function(e) {
                            e.stop()
                        })), w && w.current && (w.current.srcObject = null), setTimeout((function() {
                            Ie.close()
                        }), 500))
                    },
                    m = function(e, t, n) {
                        for (var r = [], a = new RegExp("a=fmtp:(\\d+) apt=(\\d+)\r$"), o = new RegExp("a=rtpmap:([0-9]+) ".concat(G(t))), i = new RegExp("(m=".concat(e, " .*?)( ([0-9]+))*\\s*$")), c = n.split("\n"), l = !1, s = 0; s < c.length; s++)
                            if (c[s].startsWith("m=".concat(e, " ")) ? l = !0 : c[s].startsWith("m=") && (l = !1), l) {
                                var u = c[s].match(o);
                                u && r.push(parseInt(u[1], 10)), (u = c[s].match(a)) && r.includes(parseInt(u[2], 10)) && r.push(parseInt(u[1], 10))
                            }
                        var d = "";
                        l = !1;
                        for (var p = 0; p < c.length; p++)
                            if (c[p].startsWith("m=".concat(e, " ")) ? l = !0 : c[p].startsWith("m=") && (l = !1), l) {
                                var f = c[p].match("a=(fmtp|rtcp-fb|rtpmap):([0-9]+)");
                                if (f && !r.includes(parseInt(f[2], 10))) continue;
                                c[p].match(i) ? d += "".concat(c[p].replace(i, "$1 ".concat(r.join(" "))), "\n") : d += "".concat(c[p], "\n")
                            } else d += "".concat(c[p], "\n");
                        return d
                    },
                    y = function() {
                        var e, t = [],
                            i = !1,
                            c = 0;

                        function l(e, t, n) {
                            var r = g.current,
                                a = R,
                                o = R,
                                i = R / 2 - 10;
                            r.width = a, r.height = o;
                            var c = r.getContext("2d");
                            c.lineWidth = 10, c.strokeStyle = "#E6E8EA", c.arc(i + 10, i + 10, i, 0, 2 * Math.PI), c.stroke(), c.beginPath(), c.lineCap = "round";
                            var l = c.createLinearGradient(0, 0, 220, 220);
                            if (l.addColorStop(0, "#FFDB67"), l.addColorStop(1, "#F0B90B"), c.strokeStyle = l, c.arc(i + 10, i + 10, i, 1.5 * Math.PI, t * Math.PI), c.stroke(), 0 !== e) var s = 1,
                                u = setInterval((function() {
                                    s >= e && (s = e, clearInterval(u)), c.beginPath(), c.lineCap = "round";
                                    var n = c.createLinearGradient(0, 0, 220, 220);
                                    n.addColorStop(0, "#FFDB67"), n.addColorStop(1, "#F0B90B"), c.strokeStyle = n;
                                    var r = s >= 100 ? 0 : Math.PI * t,
                                        a = s / 100,
                                        o = s >= 100 ? 2 * Math.PI : (t + 2 * a) * Math.PI;
                                    c.arc(i + 10, i + 10, i, r, o), c.stroke(), s++
                                }), n)
                        }
                        Ie = Z(), l(0, 1.5, 100), P(H("newkyc-loading-please-wait", "Loading, please wait..."));

                        function s(n) {
                            if (n.type) {
                                var r = C[n.value],
                                    s = k.current;
                                if (r) {
                                    r.icon ? (j({
                                        msg: H(r.key, r.default),
                                        icon: r.icon,
                                        success: "M000201" === n.value
                                    }), P("")) : (j({
                                        msg: "",
                                        icon: "",
                                        success: !1
                                    }), P(H(r.key, r.default))), t.push("a");
                                    var u = "audio_".concat(N).toLowerCase(),
                                        d = r[u] ? [r[u]] : [r.audio_en];
                                    if (Array.isArray(d) && d[0] && (s.src = d, function(e) {
                                            e.load();
                                            var t = e.play();
                                            t && t.then((function() {
                                                e.play()
                                            })).catch((function(e) {
                                                console.log(e)
                                            }))
                                        }(s)), "M001000" === n.value || "" === n.value)(0 === c || i) && c++, i && (clearTimeout(e), i = !1), i || (e = setTimeout((function() {
                                        i = !0
                                    }), 2e3)), t = [], l(0, 1.5, 100);
                                    else if ("M000201" === n.value) f(), a && setTimeout(a, 1500);
                                    else if (_[n.value]) f(), setTimeout((function() {
                                        return o && o(H(r.key, r.default), n.value)
                                    }), 1500);
                                    else if (E[n.value]) {
                                        var p = De.split("/")[9].length;
                                        1 === p ? 1 === t.length && l(100, 1.5, 30) : 2 === p ? 1 === t.length ? l(50, 1.5, 50) : 2 === t.length && l(50, .5, 50) : 3 === p ? 1 === t.length ? l(34, 1.5, 50) : 2 === t.length ? l(33, .25, 50) : 3 === t.length && l(33, .85, 50) : 4 === p && (1 === t.length ? l(25, 1.5, 100) : 2 === t.length ? l(25, 0, 100) : 3 === t.length ? l(25, .5, 100) : 4 === t.length && l(25, 1, 100))
                                    } else t = []
                                }
                            }
                        }(_e = Ie.createDataChannel("chat", {
                            ordered: !0
                        })).onclose = function() {
                            Ae && clearInterval(Ae)
                        }, _e.onopen = function() {
                            Ae = setInterval((function() {
                                _e.send("ping ")
                            }), 500)
                        }, _e.onmessage = function(e) {
                            V(e.data) && s(JSON.parse(e.data))
                        }, w.current.srcObject = Se, Se.getTracks().forEach((function(e) {
                            Ie.addTrack(e, Se), e.applyConstraints({
                                width: R,
                                height: R
                            })
                        })), Ie.createOffer().then((function(e) {
                            return Ie.setLocalDescription(e)
                        })).then((function() {
                            return new Promise((function(e) {
                                if ("complete" === Ie.iceGatheringState) e();
                                else {
                                    var t = function() {
                                        "complete" === Ie.iceGatheringState && (Ie.removeEventListener("icegatheringstatechange", t), e())
                                    };
                                    Ie.addEventListener("icegatheringstatechange", t)
                                }
                            }))
                        })).then((function() {
                            var e, t = Ie.localDescription;
                            return "default" !== (e = "default") && (t.sdp = m("audio", e, t.sdp)), "default" !== (e = "default") && (t.sdp = m("video", e, t.sdp)), b({
                                offerSdf: t.sdp,
                                offerType: t.type,
                                offerVideoTransform: "none",
                                transId: n,
                                type: r
                            })
                        })).then((function(e) {
                            var t = e.data,
                                a = e.message;
                            if (e.success && t) {
                                var i = e.data;
                                De = i.faceUrl;
                                var c = JSON.parse(i.offerAnswer);
                                Ie.setRemoteDescription(c), Be({
                                    mediaStream: Se,
                                    constraints: Me,
                                    type: r,
                                    transId: n,
                                    userId: null === p || void 0 === p ? void 0 : p.userId,
                                    accessToken: d
                                })
                            } else P(a), f(), setTimeout((function() {
                                return o && o(a, e)
                            }), 1500);
                            M(!1)
                        })).catch((function(e) {
                            P(e.message), M(!1), f(), setTimeout((function() {
                                return o && o(e.message)
                            }), 1500)
                        }))
                    },
                    g = (0, s.useRef)(null),
                    k = (0, s.useRef)(null),
                    w = (0, s.useRef)(),
                    x = function(e) {
                        var t = "".concat(e, "/static/audios/facialVerify");
                        return {
                            ALL_MSG_LIST: {
                                M000400: {
                                    key: "newkyc-blink-eyes",
                                    audio_ar: "".concat(t, "/ar/ar-eye-blink.mp3"),
                                    "audio_zh-cn": "".concat(t, "/ZH_CN_eye_blink.mp3"),
                                    audio_de: "".concat(t, "/de/de-eye-blink.mp3"),
                                    audio_es: "".concat(t, "/es/es-eye-blink.mp3"),
                                    "audio_es-ar": "".concat(t, "/es/es-eye-blink.mp3"),
                                    "audio_es-la": "".concat(t, "/es/es-eye-blink.mp3"),
                                    "audio_es-mx": "".concat(t, "/es/es-eye-blink.mp3"),
                                    audio_en: "".concat(t, "/EN_US_eye_blink.mp3"),
                                    audio_fr: "".concat(t, "/fr/fr-eye-blink.mp3"),
                                    audio_it: "".concat(t, "/it/it-eye-blink.mp3"),
                                    audio_ja: "".concat(t, "/ja/ja-eye-blink.mp3"),
                                    audio_ko: "".concat(t, "/ko/ko-eye-blink.mp3"),
                                    audio_ph: "".concat(t, "/ph/ph-eye-blink.mp3"),
                                    "audio_pt-br": "".concat(t, "/pt/pt-eye-blink.mp3"),
                                    "audio_pt-pt": "".concat(t, "/pt/pt-eye-blink.mp3"),
                                    audio_ru: "".concat(t, "/ru/ru-eye-blink.mp3"),
                                    audio_th: "".concat(t, "/th/th-eye-blink.mp3"),
                                    audio_tr: "".concat(t, "/tr/tr-eye-blink.mp3"),
                                    "audio_uk-ua": "".concat(t, "/uk-ua/uk-ua-eye-blink.mp3"),
                                    audio_vi: "".concat(t, "/vi/vi-eye-blink.mp3"),
                                    default: "Please blink your eyes",
                                    icon: "/image/julia/kyc/blink-your-eyes.png"
                                },
                                M000401: {
                                    key: "newkyc-open-mouth",
                                    audio_ar: "".concat(t, "/ar/ar-mouth-open.mp3"),
                                    "audio_zh-cn": "".concat(t, "/ZH_CN_mouth_open.mp3"),
                                    audio_de: "".concat(t, "/de/de-mouth-open.mp3"),
                                    audio_es: "".concat(t, "/es/es-mouth-open.mp3"),
                                    "audio_es-ar": "".concat(t, "/es/es-mouth-open.mp3"),
                                    "audio_es-la": "".concat(t, "/es/es-mouth-open.mp3"),
                                    "audio_es-mx": "".concat(t, "/es/es-mouth-open.mp3"),
                                    audio_en: "".concat(t, "/EN_US_mouth_open.mp3"),
                                    audio_fr: "".concat(t, "/fr/fr-mouth-open.mp3"),
                                    audio_it: "".concat(t, "/it/it-mouth-open.mp3"),
                                    audio_ja: "".concat(t, "/ja/ja-mouth-open.mp3"),
                                    audio_ko: "".concat(t, "/ko/ko-mouth-open.mp3"),
                                    audio_ph: "".concat(t, "/ph/ph-mouth-open.mp3"),
                                    "audio_pt-br": "".concat(t, "/pt/pt-mouth-open.mp3"),
                                    "audio_pt-pt": "".concat(t, "/pt/pt-mouth-open.mp3"),
                                    audio_ru: "".concat(t, "/ru/ru-mouth-open.mp3"),
                                    audio_th: "".concat(t, "/th/th-mouth-open.mp3"),
                                    audio_tr: "".concat(t, "/tr/tr-mouth-open.mp3"),
                                    "audio_uk-ua": "".concat(t, "/uk-ua/uk-ua-mouth-open.mp3"),
                                    audio_vi: "".concat(t, "/vi/vi-mouth-open.mp3"),
                                    default: "Please open your mouth",
                                    icon: "/image/julia/kyc/open-your-mouse.png"
                                },
                                M000402: {
                                    key: "newkyc-shake-head",
                                    audio_ar: "".concat(t, "/ar/ar-shake.mp3"),
                                    "audio_zh-cn": "".concat(t, "/ZH_CN_shake.mp3"),
                                    audio_de: "".concat(t, "/de/de-shake.mp3"),
                                    audio_es: "".concat(t, "/es/es-shake.mp3"),
                                    "audio_es-ar": "".concat(t, "/es/es-shake.mp3"),
                                    "audio_es-la": "".concat(t, "/es/es-shake.mp3"),
                                    "audio_es-mx": "".concat(t, "/es/es-shake.mp3"),
                                    audio_en: "".concat(t, "/EN_US_shake.mp3"),
                                    audio_fr: "".concat(t, "/fr/fr-shake.mp3"),
                                    audio_it: "".concat(t, "/it/it-shake.mp3"),
                                    audio_ja: "".concat(t, "/ja/ja-shake.mp3"),
                                    audio_ko: "".concat(t, "/ko/ko-shake.mp3"),
                                    audio_ph: "".concat(t, "/ph/ph-shake.mp3"),
                                    "audio_pt-br": "".concat(t, "/pt/pt-shake.mp3"),
                                    "audio_pt-pt": "".concat(t, "/pt/pt-shake.mp3"),
                                    audio_ru: "".concat(t, "/ru/ru-shake.mp3"),
                                    audio_th: "".concat(t, "/th/th-shake.mp3"),
                                    audio_tr: "".concat(t, "/tr/tr-shake.mp3"),
                                    "audio_uk-ua": "".concat(t, "/uk-ua/uk-ua-shake.mp3"),
                                    audio_vi: "".concat(t, "/vi/vi-shake.mp3"),
                                    default: "Please shake your head",
                                    icon: "/image/julia/kyc/shake-your-head.png"
                                },
                                M000403: {
                                    key: "newkyc-nod-head",
                                    audio_ar: "".concat(t, "/ar/ar-nod.mp3"),
                                    "audio_zh-cn": "".concat(t, "/ZH_CN_node.mp3"),
                                    audio_de: "".concat(t, "/de/de-nod.mp3"),
                                    audio_es: "".concat(t, "/es/es-nod.mp3"),
                                    "audio_es-ar": "".concat(t, "/es/es-nod.mp3"),
                                    "audio_es-la": "".concat(t, "/es/es-nod.mp3"),
                                    "audio_es-mx": "".concat(t, "/es/es-nod.mp3"),
                                    audio_en: "".concat(t, "/EN_US_node.mp3"),
                                    audio_fr: "".concat(t, "/fr/fr-nod.mp3"),
                                    audio_it: "".concat(t, "/it/it-nod.mp3"),
                                    audio_ja: "".concat(t, "/ja/ja-nod.mp3"),
                                    audio_ko: "".concat(t, "/ko/ko-nod.mp3"),
                                    audio_ph: "".concat(t, "/ph/ph-nod.mp3"),
                                    "audio_pt-br": "".concat(t, "/pt/pt-nod.mp3"),
                                    "audio_pt-pt": "".concat(t, "/pt/pt-nod.mp3"),
                                    audio_ru: "".concat(t, "/ru/ru-nod.mp3"),
                                    audio_th: "".concat(t, "/th/th-nod.mp3"),
                                    audio_tr: "".concat(t, "/tr/tr-nod.mp3"),
                                    "audio_uk-ua": "".concat(t, "/uk-ua/uk-ua-nod.mp3"),
                                    audio_vi: "".concat(t, "/vi/vi-nod.mp3"),
                                    default: "Please nod your head",
                                    icon: "/image/julia/kyc/nod-head.png"
                                },
                                M001000: {
                                    key: "newkyc-face-camera",
                                    audio_ar: "".concat(t, "/ar/ar-face.mp3"),
                                    "audio_zh-cn": "".concat(t, "/ZH_CN_face.mp3"),
                                    audio_de: "".concat(t, "/de/de-face.mp3"),
                                    audio_es: "".concat(t, "/es/es-face.mp3"),
                                    "audio_es-ar": "".concat(t, "/es/es-face.mp3"),
                                    "audio_es-la": "".concat(t, "/es/es-face.mp3"),
                                    "audio_es-mx": "".concat(t, "/es/es-face.mp3"),
                                    audio_en: "".concat(t, "/EN_US_face.mp3"),
                                    audio_fr: "".concat(t, "/fr/fr-face.mp3"),
                                    audio_it: "".concat(t, "/it/it-face.mp3"),
                                    audio_ja: "".concat(t, "/ja/ja-face.mp3"),
                                    audio_ko: "".concat(t, "/ko/ko-face.mp3"),
                                    audio_ph: "".concat(t, "/ph/ph-face.mp3"),
                                    "audio_pt-br": "".concat(t, "/pt/pt-face.mp3"),
                                    "audio_pt-pt": "".concat(t, "/pt/pt-face.mp3"),
                                    audio_ru: "".concat(t, "/ru/ru-face.mp3"),
                                    audio_th: "".concat(t, "/th/th-face.mp3"),
                                    audio_tr: "".concat(t, "/tr/tr-face.mp3"),
                                    "audio_uk-ua": "".concat(t, "/uk-ua/uk-ua-face.mp3"),
                                    audio_vi: "".concat(t, "/vi/vi-face.mp3"),
                                    default: "Please face the camera"
                                },
                                M000903: {
                                    key: "newkyc-action-timeout-fail",
                                    default: "Detection failed, please try again"
                                },
                                M000904: {
                                    key: "newkyc-page-timeout-fail",
                                    default: "Detection failed, please try again"
                                },
                                M000200: {
                                    key: "newkyc-detection-start",
                                    default: "Detecting now"
                                },
                                M000201: {
                                    key: "newkyc-liveness-check-completed",
                                    audio_ar: "".concat(t, "/ar/ar-success.mp3"),
                                    "audio_zh-cn": "".concat(t, "/ZH_CN_success.mp3"),
                                    audio_de: "".concat(t, "/de/de-success.mp3"),
                                    audio_es: "".concat(t, "/es/es-success.mp3"),
                                    "audio_es-ar": "".concat(t, "/es/es-success.mp3"),
                                    "audio_es-la": "".concat(t, "/es/es-success.mp3"),
                                    "audio_es-mx": "".concat(t, "/es/es-success.mp3"),
                                    audio_en: "".concat(t, "/EN_US_success.mp3"),
                                    audio_fr: "".concat(t, "/fr/fr-success.mp3"),
                                    audio_it: "".concat(t, "/it/it-success.mp3"),
                                    audio_ja: "".concat(t, "/ja/ja-success.mp3"),
                                    audio_ko: "".concat(t, "/ko/ko-success.mp3"),
                                    audio_ph: "".concat(t, "/ph/ph-success.mp3"),
                                    "audio_pt-br": "".concat(t, "/pt/pt-success.mp3"),
                                    "audio_pt-pt": "".concat(t, "/pt/pt-success.mp3"),
                                    audio_ru: "".concat(t, "/ru/ru-success.mp3"),
                                    audio_th: "".concat(t, "/th/th-success.mp3"),
                                    audio_tr: "".concat(t, "/tr/tr-success.mp3"),
                                    "audio_uk-ua": "".concat(t, "/uk-ua/uk-ua-success.mp3"),
                                    audio_vi: "".concat(t, "/vi/vi-success.mp3"),
                                    default: "Detection passed",
                                    icon: "/image/julia/kyc/success.png"
                                },
                                M000000: {
                                    key: "newkyc-signature-mismatch",
                                    default: "Detection failed, please try again"
                                },
                                M000102: {
                                    key: "newkyc-distinct-faces-retry",
                                    default: "Distinct faces detected, please try again"
                                },
                                M001103: {
                                    key: "newkyc-next-frame-retry",
                                    default: "Please try again"
                                },
                                M001001: {
                                    key: "newkyc-action-error-retry",
                                    default: "Unrecognized motion detected, please try again"
                                },
                                M001002: {
                                    key: "newkyc-video-quality-fail",
                                    default: "Detection failed, please try again by changing the device or switching to a better network environment"
                                },
                                M000104: {
                                    key: "newkyc-adjust-posture",
                                    default: "Please adjust your posture and make sure to face the camera"
                                },
                                M000101: {
                                    key: "newkyc-face-detected",
                                    default: "Face recognized "
                                },
                                M000103: {
                                    key: "newkyc-face-timeout",
                                    default: "Detection failed, please try again"
                                },
                                M000600: {
                                    key: "action-completed",
                                    default: "Action completed"
                                },
                                M001003: {
                                    key: "newkyc-poor-network",
                                    default: "Detection failed, please switch to a better network environment and try again"
                                },
                                M000500: {
                                    key: "newkyc-blink-eyes-fail",
                                    default: "Detection failed, please blink your eyes"
                                },
                                M000601: {
                                    key: "action-completed",
                                    default: "Action completed"
                                },
                                M000501: {
                                    key: "newkyc-open-mouth-fail",
                                    default: "Detection failed, please open your mouth"
                                },
                                M000602: {
                                    key: "action-completed",
                                    default: "Action completed"
                                },
                                M000700: {
                                    key: "newkyc-shake-head-slow",
                                    default: "Do not shake head too quickly"
                                },
                                M000502: {
                                    key: "newkyc-shake-head-fail",
                                    default: "Detection failed, please shake your head"
                                },
                                M000701: {
                                    key: "newkyc-nod-head-slow",
                                    default: "Please nod your head slowly"
                                },
                                M000503: {
                                    key: "newkyc-nod-head-fail",
                                    default: "Detection failed, please nod your head"
                                },
                                M000603: {
                                    key: "action-completed",
                                    default: "Action completed"
                                },
                                M000001: {
                                    key: "newkyc-token-verify-fail",
                                    default: "Detection failed, please try again"
                                },
                                M000003: {
                                    key: "newkyc-loading",
                                    default: "Loading..."
                                },
                                M000002: {
                                    key: "newkyc-server-busy",
                                    default: "The server is busy now, please try again later"
                                },
                                M000100: {
                                    key: "newkyc-face-acquisition-start",
                                    default: "Detecting now"
                                },
                                M000202: {
                                    key: "newkyc-detection-fail",
                                    "audio_zh-cn": "".concat(t, "/ZH_CN_fail.mp3"),
                                    audio_en: "".concat(t, "/EN_US_failed.mp3"),
                                    default: "Detection failed"
                                },
                                M000203: {
                                    key: "newkyc-detection-fail-face",
                                    default: "Identification failed. Please make sure it's you"
                                },
                                M000204: {
                                    key: "newkyc-detection-fail-eye",
                                    default: "Identification failed. Please make sure your eyes are showing"
                                },
                                M000205: {
                                    key: "newkyc-detection-fail-ps",
                                    default: "Please make sure it's you"
                                },
                                M000206: {
                                    key: "newkyc-detection-fail-mask",
                                    default: "Please make sure it's you"
                                },
                                M000207: {
                                    key: "newkyc-detection-fail-replay",
                                    default: "Please make sure it's you"
                                },
                                M000208: {
                                    key: "newkyc-detection-fail-system-error",
                                    default: "Identification failed. Please start over"
                                },
                                M000900: {
                                    key: "newkyc-action-timeout-retry",
                                    default: "Detection failed, please try again"
                                },
                                M000901: {
                                    key: "newkyc-page-timeout-retry",
                                    default: "Detection failed, please try again"
                                },
                                M000902: {
                                    key: "newkyc-page-timeout",
                                    default: "Detection failed, please try again"
                                },
                                M001004: {
                                    key: "newkyc-multiple-faces",
                                    default: "Identification failed. Please make sure no one else is in the frame"
                                }
                            },
                            DETECT_SUCCESS_LIST: {
                                M000600: {
                                    key: "newkyc-blink-complete"
                                },
                                M000601: {
                                    key: "newkyc-open-mouth-complete"
                                },
                                M000603: {
                                    key: "newkyc-nod-head-complete"
                                },
                                M000602: {
                                    key: "newkyc-shake-head-complete"
                                }
                            },
                            FAIL_MSG_LIST: {
                                M000900: {
                                    key: "newkyc-action-timeout-retry"
                                },
                                M000901: {
                                    key: "newkyc-page-timeout-retry"
                                },
                                M000903: {
                                    key: "newkyc-action-timeout-fail"
                                },
                                M000904: {
                                    key: "newkyc-page-timeout-fail"
                                },
                                M001001: {
                                    key: "newkyc-action-error-retry"
                                },
                                M000208: {
                                    key: "newkyc-detection-fail-system-error"
                                },
                                M000207: {
                                    key: "newkyc-detection-fail-replay"
                                },
                                M000206: {
                                    key: "newkyc-detection-fail-mask"
                                },
                                M000205: {
                                    key: "newkyc-detection-fail-ps"
                                },
                                M000204: {
                                    key: "newkyc-detection-fail-eye"
                                },
                                M000203: {
                                    key: "newkyc-detection-fail-face"
                                },
                                M000202: {
                                    key: "newkyc-detection-fail",
                                    "audio_zh-cn": "".concat(t, "/ZH_CN_fail.mp3"),
                                    audio_en: "".concat(t, "/EN_US_failed.mp3")
                                },
                                M000001: {
                                    key: "newkyc-token-verify-fail"
                                },
                                M000000: {
                                    key: "newkyc-signature-mismatch"
                                },
                                M000002: {
                                    key: "newkyc-server-busy"
                                }
                            },
                            START_FROM_BEGINNING_MSG_LIST: ["M000904", "M000200", "M000102", "M001002", "M000103", "M001003", "M000001", "M000003", "M000002", "M000100", "M000202", "M000203", "M000208", "M000901", "M000902", "M001004"]
                        }
                    }(c),
                    C = x.ALL_MSG_LIST,
                    E = x.DETECT_SUCCESS_LIST,
                    _ = x.FAIL_MSG_LIST,
                    A = (0, h.A)((0, s.useState)(!0), 2),
                    S = A[0],
                    M = A[1],
                    D = (0, h.A)((0, s.useState)(""), 2),
                    T = D[0],
                    P = D[1],
                    B = (0, h.A)((0, s.useState)({
                        msg: "",
                        icon: "",
                        success: !1
                    }), 2),
                    F = B[0],
                    j = B[1],
                    R = l || 300,
                    z = I(),
                    H = z.t,
                    N = z.i18n.language,
                    U = (0, s.useCallback)((function(e) {
                        var t, n = {
                            audio: !1,
                            video: !0
                        };
                        null === navigator || void 0 === navigator || null === (t = navigator.mediaDevices) || void 0 === t || t.getUserMedia(n).then((function(t) {
                            Se = t, Me = n, e()
                        }), (function(e) {
                            console.log("debug-log requestCam error", e), i && i()
                        }))
                    }), [null === p || void 0 === p ? void 0 : p.userId, c]),
                    V = (0, s.useCallback)((function(e) {
                        return e.indexOf('{"type":') > -1
                    }), []),
                    Z = (0, s.useCallback)((function() {
                        var e = window.RTCPeerConnection || window.webkitRTCPeerConnection || null;
                        return e && new e({
                            sdpSemantics: "unified-plan"
                        }) || null
                    }), []),
                    G = (0, s.useCallback)((function(e) {
                        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                    }), []);
                return (0, s.useEffect)((function() {
                    return U(y), f
                }), []), u().createElement(O.A, {
                    width: "100%"
                }, u().createElement(v.A, {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    sx: {
                        display: S ? "flex" : "none",
                        bg: "#fff"
                    }
                }, u().createElement(Y.A, {
                    src: "".concat(c, "/static/images/facialVerify/loading.gif"),
                    alt: "loading-gif"
                })), u().createElement(v.A, {
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    sx: {
                        display: S ? "none" : "flex"
                    }
                }, u().createElement(v.A, {
                    width: "100%",
                    minHeight: ["70px", "96px"],
                    mb: "30px",
                    alignItems: "center",
                    justifyContent: "center"
                }, !T && F.msg && u().createElement(v.A, {
                    justifyContent: ["center", "space-between"],
                    width: "100%"
                }, u().createElement(O.A, {
                    display: ["none", "block"]
                }, u().createElement(L.A, {
                    color: "t.secondary"
                }, F.success ? H("newkyc-common-congratulations", "Congratulations!") : H("newkyc-face-camera")), u().createElement(L.A, {
                    color: "t.secondary",
                    variant: "title4",
                    mt: "10px",
                    sx: {
                        maxWidth: "298px"
                    }
                }, null === (t = F.msg) || void 0 === t ? void 0 : t.replace("Please", ""))), F.icon && u().createElement(Y.A, {
                    sx: {
                        width: ["70px", "96px"],
                        minHeight: ["70px", "96px"]
                    },
                    src: "".concat(c).concat(F.icon),
                    alt: "loading-gif"
                })), u().createElement(L.A, {
                    fontSize: "md",
                    color: "t.secondary"
                }, T)), u().createElement(O.A, {
                    width: "".concat(R, "px"),
                    height: "".concat(R, "px"),
                    sx: {
                        position: "relative"
                    }
                }, u().createElement("canvas", {
                    ref: g,
                    style: {
                        position: "absolute",
                        width: "100%",
                        zIndex: 999
                    }
                }), u().createElement(O.A, {
                    m: "5px",
                    width: "".concat(R - 10, "px"),
                    height: "".concat(R - 10, "px"),
                    sx: {
                        position: "absolute",
                        borderRadius: "50%",
                        overflow: "hidden"
                    }
                }, u().createElement("video", {
                    ref: w,
                    width: "".concat(R, "px"),
                    height: "".concat(R, "px"),
                    style: {
                        objectFit: "fill"
                    },
                    playsInline: !0,
                    autoPlay: !0,
                    muted: !0
                }))), !T && F.msg && u().createElement(O.A, {
                    display: ["block", "none"],
                    mt: "15px",
                    width: "100%",
                    sx: {
                        textAlign: "center"
                    }
                }, u().createElement(L.A, {
                    fontSize: "12px",
                    lineHeight: "20px"
                }, F.success ? H("newkyc-common-congratulations", "Congratulations!") : H("newkyc-face-camera")), u().createElement(L.A, {
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "24px"
                }, F.msg))), u().createElement(O.A, null, u().createElement("audio", {
                    ref: k
                }, u().createElement("source", {
                    src: ""
                }))))
            };
            const ze = u().memo(Re);

            function He(e) {
                var t = e.transId,
                    n = e.type,
                    r = e.enhanceSuccessFn,
                    a = e.enhanceFailFn,
                    o = e.handleDisableCamera,
                    i = e.onfidoSuccessFn,
                    c = e.staticHost,
                    l = e.size,
                    s = e.vendorType,
                    d = e.updateFacialRecognitionFlow,
                    p = e.extraInfo;
                return s === _ ? u().createElement(je, {
                    id: t,
                    type: n,
                    onfidoSuccessFn: i,
                    updateFacialRecognitionFlow: d,
                    extraInfo: p
                }) : u().createElement(ze, {
                    id: t,
                    type: n,
                    successFn: r,
                    failedFn: a,
                    onTriggerDisableCamera: o,
                    staticHost: c,
                    size: l,
                    extraInfo: p
                })
            }
            var Ne;
            const Ue = (0, s.forwardRef)((function(e, t) {
                var n = e.transId,
                    a = e.type,
                    i = e.onSwitchWeb,
                    c = e.onSwitchSDK,
                    d = e.onFinishFaceConfirm,
                    p = e.onFaceConfirm,
                    f = e.onFaceSuccessFn,
                    b = e.onFaceFailFn,
                    x = e.onFaceBeginFn,
                    E = e.onUserFaceSdkInitError,
                    _ = e.onSuccessClose,
                    A = e.showDefaultLanding,
                    S = e.bizScene,
                    M = e.bizType,
                    D = e.staticHost,
                    L = void 0 === D ? "https://bin.bnbstatic.com" : D,
                    O = e.siteHost,
                    P = void 0 === O ? "https://www.devfdg.net" : O,
                    B = e.customConfirmButton,
                    F = e.fixedSwitchIcon,
                    j = e.isFullPageKyc,
                    R = void 0 !== j && j,
                    z = e.size,
                    H = e.theme,
                    N = e.livenessVendor,
                    U = e.updateFacialRecognitionFlow,
                    V = e.extraInfo,
                    Z = (0, h.A)((0, s.useState)("entry"), 2),
                    G = Z[0],
                    K = Z[1],
                    W = (0, h.A)((0, s.useState)(""), 2),
                    Y = W[0],
                    X = W[1],
                    J = (0, h.A)((0, s.useState)(0), 2),
                    Q = J[0],
                    $ = J[1],
                    te = (0, h.A)((0, s.useState)(""), 2),
                    ne = te[0],
                    re = te[1],
                    ae = (0, h.A)((0, s.useState)(""), 2),
                    oe = ae[0],
                    ie = ae[1],
                    ce = (0, T.A)().enqueueNotification,
                    le = I(),
                    me = le.t,
                    he = le.i18n.language,
                    ve = void 0 === he ? "en" : he,
                    ye = we((function(e) {
                        "success" !== (null === e || void 0 === e ? void 0 : e.status) ? "fail" !== (null === e || void 0 === e ? void 0 : e.status) ? f && f(): De(null === e || void 0 === e ? void 0 : e.result): Me()
                    })).handleVendorPolling,
                    ge = function(e, t) {
                        var n = (0, ue.s)((0, r.A)(l().mark((function n() {
                                var r, a, o;
                                return l().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!t) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.next = 4, pe(e, t);
                                        case 4:
                                            r = n.sent, n.next = 10;
                                            break;
                                        case 7:
                                            return n.next = 9, de(e);
                                        case 9:
                                            r = n.sent;
                                        case 10:
                                            if (a = r.success, o = r.data, !a) {
                                                n.next = 13;
                                                break
                                            }
                                            return n.abrupt("return", o);
                                        case 13:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), [], {
                                value: [],
                                loading: !0
                            }),
                            a = n.value,
                            i = (0, o.A)(n, ["value"]);
                        return (0, m.A)({
                            showFaceGray: a
                        }, i)
                    }(M),
                    ke = ge.showFaceGray.grayModel,
                    be = ge.loading,
                    xe = (null === window || void 0 === window ? void 0 : window.__RUN_BY_ELECTRON__) && P || "SCAN_BIDS" === S ? "".concat(P, "/").concat(ve, "/qr/") : "https://www." + window.document.domain.split(".").slice(-2).join(".") + "/".concat(ve, "/qr/"),
                    Ce = (0, s.useCallback)(function() {
                        var e = (0, r.A)(l().mark((function e(t) {
                            var r, o, i, c, s, u;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t && t.stopPropagation(), e.prev = 1, e.next = 4, k({
                                            transId: n,
                                            type: a
                                        });
                                    case 4:
                                        r = e.sent, o = r.success, i = r.data, c = r.message, s = r.code, o ? (i.newQrCode ? (u = xe + i.newQrCode, X(u)) : X(i.qrCode), $(1e3 * parseInt(i.qrCodeValidSeconds, 10))) : (E && E({
                                            message: c,
                                            code: s
                                        }), ce(c, {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            },
                                            autoHideDuration: 2e3
                                        }), clearInterval(Ne)), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), clearInterval(Ne);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 9]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [ce, n, a]),
                    Ee = (0, s.useCallback)((0, r.A)(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !S) {
                                        e.next = 5;
                                        break
                                    }
                                    return t = {
                                        transId: n,
                                        type: a,
                                        requestSource: S
                                    }, e.next = 5, C(t);
                                case 5:
                                    e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    }))), [n, a]);
                (0, s.useEffect)((function() {
                    return n && a && (Ce(null), Ee()),
                        function() {
                            clearInterval(Ne)
                        }
                }), [n, a, Ee]);
                var _e = (0, s.useCallback)((function() {
                        Q && n ? Ne = setInterval((0, r.A)(l().mark((function e() {
                            var t, r, o, i, c, s;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, k({
                                            transId: n,
                                            type: a
                                        });
                                    case 2:
                                        t = e.sent, r = t.success, o = t.data, i = t.message, c = t.code, r ? (o.newQrCode ? (s = xe + o.newQrCode, X(s)) : X(o.qrCode), $(1e3 * parseInt(o.qrCodeValidSeconds, 10))) : (E && E({
                                            message: i,
                                            code: c
                                        }), ce(i, {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            },
                                            autoHideDuration: 2e3
                                        }), clearInterval(Ne));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), Q) : clearInterval(Ne)
                    }), [ce, Q, n, a]),
                    Ae = function() {
                        var e = (0, r.A)(l().mark((function e() {
                            var t, r, o, i;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return null === p || void 0 === p || p(), e.next = 3, w({
                                            transId: n,
                                            type: a
                                        });
                                    case 3:
                                        if (t = e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        r = t.success, o = t.data, i = t.message, r ? o ? d && d() : ce(me("exchange-kyc-notCompleteFacial", "You have not completed facial verification yet."), {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            },
                                            autoHideDuration: 2e3
                                        }) : ce(i, {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            },
                                            autoHideDuration: 2e3
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Se = (0, s.useCallback)((function() {
                        ce(me("newkyc-open-camera-tips", "Unable to open or use the camera, please refresh the pagecheck the browser settings, or restart the browser to try again."), {
                            variant: "warning",
                            autoHideDuration: 5e3,
                            anchorOrigin: {
                                vertical: "top",
                                horizontal: "right"
                            }
                        })
                    }), [ce]),
                    Me = (0, s.useCallback)((function() {
                        A && K("faceSuccess"), f && f()
                    }), [f]),
                    Ie = (0, s.useCallback)((0, r.A)(l().mark((function e() {
                        var t, r, o;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, g.post)("/bapi/kyc/v3/protect/certificate/user-face/onfido-complete-event", {
                                        faceTransId: n,
                                        transType: a
                                    });
                                case 3:
                                    if (t = e.sent, r = t.success, o = t.data, !r) {
                                        e.next = 11;
                                        break
                                    }
                                    if (0 !== (null === o || void 0 === o ? void 0 : o.asyncReqCount)) {
                                        e.next = 10;
                                        break
                                    }
                                    return f && f(), e.abrupt("return");
                                case 10:
                                    ye(n, (0, m.A)({}, o));
                                case 11:
                                    e.next = 17;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(0), console.error(e.t0), ce(e.t0);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    }))), [n]),
                    De = (0, s.useCallback)((function(e, t) {
                        A && K("faceFail"), e && re(e), b && b(e, t)
                    }), [b]),
                    Te = (0, s.useCallback)((function() {
                        x && x(), K("face")
                    }), [x]),
                    Le = function() {
                        K("entry")
                    };
                if ((0, s.useEffect)((function() {
                        clearInterval(Ne), _e()
                    }), [Q]), (0, s.useImperativeHandle)(t, (function() {
                        return {
                            toFace: Te,
                            toEntry: Le
                        }
                    }), []), be) return u().createElement(v.A, {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }, u().createElement(y.A, null));
                return u().createElement(u().Fragment, null, "entry" === G && u().createElement(u().Fragment, null, ("ONLY_SDK" === ke || "MAIN_SDK" === ke || "sdk" === oe) && "web" !== oe && u().createElement(ee, {
                    qrcodeLink: Y,
                    onRefresh: function(e) {
                        return Ce(e)
                    },
                    onFaceConfirm: Ae,
                    grayModel: ke,
                    onSwitchWeb: function() {
                        ie("web"), null === i || void 0 === i || i()
                    },
                    fixedSwitchIcon: F,
                    staticHost: L,
                    theme: H,
                    isFullPageKyc: R
                }), ("MAIN_WEB" === ke || "ONLY_WEB" === ke || "web" === oe) && "sdk" !== oe && u().createElement(q, {
                    handleConfirmFace: Ae,
                    toFace: Te,
                    curQrCode: Y,
                    faceInitFresh: Ce,
                    grayModel: ke,
                    onSwitchSDK: function() {
                        ie("sdk"), null === c || void 0 === c || c()
                    },
                    fixedSwitchIcon: F,
                    staticHost: L,
                    customConfirmButton: B,
                    theme: H,
                    isFullPageKyc: R
                })), "face" === G && (R ? u().createElement(fe.A, {
                    contentSx: {
                        minHeight: "630px",
                        minWidth: ["564px"],
                        maxWidth: ["564px"],
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    width: "564px",
                    height: "630px",
                    open: "face" === G,
                    showCloseIcon: !0,
                    onCloseIconClick: function() {
                        return K("entry")
                    }
                }, u().createElement(He, {
                    transId: n,
                    type: a,
                    enhanceSuccessFn: Me,
                    enhanceFailFn: De,
                    handleDisableCamera: Se,
                    onfidoSuccessFn: Ie,
                    staticHost: L,
                    size: z,
                    vendorType: N,
                    updateFacialRecognitionFlow: U,
                    extraInfo: V
                })) : u().createElement(He, {
                    transId: n,
                    type: a,
                    enhanceSuccessFn: Me,
                    enhanceFailFn: De,
                    handleDisableCamera: Se,
                    onfidoSuccessFn: Ie,
                    staticHost: L,
                    size: z,
                    vendorType: N,
                    updateFacialRecognitionFlow: U,
                    extraInfo: V
                })), A && u().createElement(u().Fragment, null, "faceSuccess" === G && u().createElement(se, {
                    faceType: a,
                    transId: n,
                    type: "faceSuccess",
                    onResultClick: function() {
                        _ && _()
                    }
                }), "faceFail" === G && u().createElement(se, {
                    faceType: a,
                    transId: n,
                    type: "faceFail",
                    msg: ne,
                    onResultClick: function() {
                        K("face")
                    }
                })))
            }));
            var Ve = n("wYc8"),
                Ze = n("i55B");
            const Ge = function() {
                var e = (0, r.A)(l().mark((function e() {
                    var t, n, r, a, o, i, c;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, Ze.MC)();
                            case 2:
                                if (t = e.sent, n = t.data, r = t.success, a = t.message, !(r && (null === n || void 0 === n ? void 0 : n.qrCode) && (null === n || void 0 === n ? void 0 : n.id))) {
                                    e.next = 17;
                                    break
                                }
                                return e.next = 9, (0, Ze.sK)({
                                    transId: n.qrCode
                                });
                            case 9:
                                if (o = e.sent, i = o.success, c = o.message, !i) {
                                    e.next = 15;
                                    break
                                }
                                return (0, f.aF)({
                                    needCloseIcon: !1,
                                    content: u().createElement(Ue, {
                                        transId: n.id,
                                        type: "withdrawFace",
                                        bizType: "withdrawFace",
                                        showDefaultLanding: !0
                                    }),
                                    sx: {
                                        width: ["100%", "400px"],
                                        height: "500px"
                                    },
                                    isMaskClose: !0
                                }), e.abrupt("return");
                            case 15:
                                return (0, Ve.A)({
                                    message: c,
                                    confirmText: d.A.t("c2c-ui-iknow"),
                                    hideCancelButton: !0,
                                    needCloseIcon: !0
                                }), e.abrupt("return");
                            case 17:
                                (0, Ve.A)({
                                    message: a,
                                    confirmText: d.A.t("c2c-ui-iknow"),
                                    hideCancelButton: !0,
                                    needCloseIcon: !0
                                });
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            const Ke = function(e) {
                var t = e.children,
                    a = e.linkSx,
                    o = e.linkTrackingId,
                    i = e.as,
                    c = void 0 === i ? "div" : i,
                    d = e.html,
                    p = void 0 !== d && d,
                    f = (0, h.A)((0, s.useState)(t), 2),
                    v = f[0],
                    y = f[1],
                    g = (0, s.useRef)(null);
                return (0, s.useEffect)((function() {
                    var e = !1;
                    if ("string" === typeof t) {
                        var a = function() {
                            var a = (0, r.A)(l().mark((function r() {
                                var a, i, c, s, u, d;
                                return l().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.t0 = h.A, r.next = 3, Promise.all([n.e(6635).then(n.t.bind(n, "PZQm", 23)), n.e(1651).then(n.t.bind(n, "Pgl2", 23))]);
                                        case 3:
                                            r.t1 = r.sent, a = (0, r.t0)(r.t1, 2), i = a[0], c = i.default, s = a[1], u = s.default, d = c({
                                                html: p,
                                                linkify: !0
                                            }).renderInline(t), u.addHook("afterSanitizeAttributes", (function(e) {
                                                "A" === e.tagName && (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener"), o && e.setAttribute("id", o))
                                            })), e || y(u.sanitize(d));
                                        case 12:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })));
                            return function() {
                                return a.apply(this, arguments)
                            }
                        }();
                        return a(),
                            function() {
                                e = !0
                            }
                    }
                }), [t, p, o]), "string" !== typeof t ? u().createElement(u().Fragment, null, t) : u().createElement(L.A, {
                    ref: g,
                    as: c,
                    sx: {
                        a: (0, m.A)({
                            cursor: "pointer",
                            color: "t.link",
                            fontWeight: 400,
                            textDecoration: "underline"
                        }, a)
                    },
                    dangerouslySetInnerHTML: {
                        __html: v
                    }
                })
            };
            var We = n("cKGJ"),
                qe = function() {
                    window.__isC2CInterceptorPluginRegistered || console.warn("c2c-widget: C2CInterceptorPlugin is missing, please make sure you register C2CInterceptorPlugin in httpErrorMsgInterceptor")
                },
                Ye = new RegExp("^(-2002|08[34]\\d+|031\\d+)$"),
                Xe = new Map;
            const Je = function() {
                function e(t) {
                    var n = t.enableFaceValidation,
                        r = void 0 === n || n,
                        o = t.enableGlobalAlert,
                        c = void 0 === o || o,
                        l = t.excludeErrorCodes,
                        s = void 0 === l ? [] : l;
                    (0, a.A)(this, e), this.enableFaceValidation = !0, this.enableGlobalAlert = !0, this.excludeErrorCodes = [], window.__isC2CInterceptorPluginRegistered = !0, this.enableFaceValidation = r, this.enableGlobalAlert = c, this.excludeErrorCodes = (0, i.A)(s).concat([p.yy])
                }
                return e.prototype.apply = function(e) {
                    var t = this;
                    return (0, r.A)(l().mark((function n() {
                        var r, a, i, c, s;
                        return l().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    c = e.res.code, s = (0, o.A)(e.res, ["code"]), c === p.ZS && t.enableFaceValidation ? Ge() : t.enableGlobalAlert && !t.excludeErrorCodes.includes(c) && Ye.test(c) && (null === e || void 0 === e || null === (r = e.response) || void 0 === r || null === (a = r.url) || void 0 === a ? void 0 : a.includes("/bapi/c2c")) && "toast" !== (null === s || void 0 === s || null === (i = s.messageDetail) || void 0 === i ? void 0 : i.type) && (Xe.has(null === s || void 0 === s ? void 0 : s.message) || (Xe.set(null === s || void 0 === s ? void 0 : s.message, !0), (0, We.A)({
                                        message: u().createElement(Ke, null, null === s || void 0 === s ? void 0 : s.message),
                                        confirmText: null === d.A || void 0 === d.A ? void 0 : d.A.t("c2c-ui-iknow", {
                                            ns: "c2c-ui"
                                        }),
                                        hideCancelButton: !0,
                                        onClose: function() {
                                            Xe.delete(null === s || void 0 === s ? void 0 : s.message)
                                        }
                                    })));
                                case 3:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                }, e
            }()
        },
        "44NZ": (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => s
            });
            var r = n("BK7R"),
                a = n("QUKP"),
                o = n("aVXY"),
                i = n("DTvD"),
                c = n("HIvj"),
                l = {
                    emailPrefix: "",
                    formatEmail: "",
                    tradeLevel: 0,
                    lastLoginTime: 0,
                    lastLoginIp: "",
                    idPhoto: "-1",
                    authenticationType: 1,
                    commissionStatus: !1,
                    kycStatus: "-",
                    withdrawWhiteStatus: !1
                },
                s = function() {
                    var e = (0, c.Py)(),
                        t = (0, o.A)((0, i.useState)((0, r.A)({}, l, e)), 2),
                        n = t[0],
                        s = t[1];
                    return (0, i.useEffect)((function() {
                        var t = e.email,
                            n = e.commissionStatus,
                            o = e.idPhoto,
                            i = function(e) {
                                if (!e) return {
                                    emailPrefix: "**",
                                    formatEmail: "******"
                                };
                                var t = e.substr(0, 2),
                                    n = e.split("@");
                                return {
                                    emailPrefix: t,
                                    formatEmail: "".concat(t, "***@").concat(n[1])
                                }
                            }(t),
                            c = i.emailPrefix,
                            l = i.formatEmail;
                        void 0 !== o && s((0, a.A)((0, r.A)({}, e), {
                            emailPrefix: c,
                            commissionStatus: !!n,
                            formatEmail: l,
                            kycStatus: "1" === o
                        }))
                    }), [e]), {
                        userBaseInfo: n,
                        setUserBaseInfo: s
                    }
                }
        },
        dHBJ: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => x
            });
            var r = n("sViW"),
                a = n("BK7R"),
                o = n("QUKP"),
                i = n("gZfF"),
                c = n("aVXY"),
                l = n("3yYM"),
                s = n.n(l),
                u = n("VA12"),
                d = n("a59x"),
                p = !0,
                f = {
                    "uk-UA": "ua",
                    "en-AU": "au",
                    "en-NG": "ng",
                    "pt-BR": "br",
                    "en-IN": "in",
                    "zh-CN": "cn",
                    "zh-TW": "tw",
                    vi: "vn",
                    kr: "ko"
                },
                m = function() {
                    var e = (0, r.A)(s().mark((function e(t) {
                        var n, r, a, o, i, c, l, h, v, y;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.country, r = t.lng, a = void 0 === r ? "en" : r, o = t.version, i = void 0 === o ? "" : o, e.prev = 1, l = (0, d.Eg)("/bapi/apex/v1/public/apex/marketing/config/international/web/query", {
                                        gary: p ? "false" : "true",
                                        country: [n, f[a] || a, i].filter(Boolean).join("-")
                                    }), e.next = 6, (0, u.get)(l);
                                case 6:
                                    if (h = e.sent, !("string" === typeof(v = null === h || void 0 === h || null === (c = h.data) || void 0 === c ? void 0 : c.webConfigs) && v.length > 100)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", h);
                                case 10:
                                    throw new Error("fallback ".concat(a));
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(1), "en" === a && !i) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, m({
                                        country: n,
                                        lng: i ? a : "en"
                                    });
                                case 18:
                                    if (y = e.sent, !(Object.keys(y).length > 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", y);
                                case 21:
                                    throw new Error("get\u3010".concat(n, "-").concat(a, "\u3011julia international config error"));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = (0, r.A)(s().mark((function e(t) {
                        var n, r, a, o, i, c, l, m, v, y;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.country, r = t.lng, a = void 0 === r ? "en" : r, o = t.version, i = void 0 === o ? "" : o, e.prev = 1, l = (0, d.Eg)("/bapi/apex/v1/public/apex/marketing/config/international/web/query", {
                                        gary: p ? "false" : "true",
                                        country: [n, f[a] || a, i].filter(Boolean).join("-")
                                    }), e.next = 6, (0, u.get)(l);
                                case 6:
                                    if (m = e.sent, !("string" === typeof(v = null === m || void 0 === m || null === (c = m.data) || void 0 === c ? void 0 : c.webConfigs) && v.length > 100)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", m);
                                case 10:
                                    throw new Error("fallback ".concat(a));
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(1), "en" === a && !i) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, h({
                                        country: n,
                                        lng: i ? a : "en"
                                    });
                                case 18:
                                    if (y = e.sent, !(Object.keys(y).length > 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", y);
                                case 21:
                                    throw new Error("get\u3010".concat(n, "-").concat(a, "\u3011julia international config error"));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = (0, r.A)(s().mark((function e(t) {
                        var n, r, a, o, i, c, l, f, m, h;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.projectId, r = t.lng, a = void 0 === r ? "en" : r, o = t.fallback, i = void 0 !== o && o, e.prev = 1, l = (0, d.Eg)("/bapi/apex/v1/public/apex/marketing/config/web/query", {
                                        projectId: n,
                                        gray: p ? "false" : "true"
                                    }), e.next = 6, (0, u.get)(l, {
                                        headers: {
                                            lang: a
                                        }
                                    });
                                case 6:
                                    if (f = e.sent, !("string" === typeof(m = null === f || void 0 === f || null === (c = f.data) || void 0 === c ? void 0 : c.webConfigs) && m.length > 100)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", m);
                                case 10:
                                    throw new Error("fallback en");
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(1), !i || "en" === a) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, v({
                                        projectId: n
                                    });
                                case 18:
                                    if (h = e.sent, !(Object.keys(h).length > 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", h);
                                case 21:
                                    throw new Error("get\u3010".concat(n, "-").concat(a, "\u3011julia config error"));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function() {
                    var e = (0, r.A)(s().mark((function e(t) {
                        var n, r, a, o, i, c, l, d, p, m, h, v;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.project, r = t.locale, a = void 0 === r ? "en" : r, o = t.isGray, i = void 0 !== o && o, c = t.fallback, l = void 0 === c || c, e.prev = 1, p = "/bapi/apex/v1/public/apex/marketing/config/international/web/query?gary=".concat(i, "&country=future_header_").concat(n, "-").concat(f[a] || a), e.next = 6, (0, u.get)(p);
                                case 6:
                                    if (m = e.sent, !("string" === typeof(h = null === m || void 0 === m || null === (d = m.data) || void 0 === d ? void 0 : d.webConfigs) && h.length > 100)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", JSON.parse(h));
                                case 10:
                                    throw new Error("fallback en");
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(1), !l || "en" === a) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 18, y({
                                        project: n,
                                        locale: "en",
                                        isGray: i,
                                        fallback: !1
                                    });
                                case 18:
                                    if (v = e.sent, !(Object.keys(v).length > 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", v);
                                case 21:
                                    throw new Error("queryFutureHeaderConfig ".concat(n, "-").concat(a, "\u3011julia config error"));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = n("eZh5"),
                k = (window.__RUN_BY_ELECTRON__, JSON.stringify({}), {}),
                w = function(e, t, n) {
                    return v({
                        lng: e,
                        projectId: t,
                        fallback: n
                    }).then((function(e) {
                        var t = JSON.parse(e),
                            n = t.header,
                            r = t.footer,
                            a = t.scenes,
                            o = n || {},
                            c = o.config,
                            l = (0, i.A)(o, ["config"]),
                            s = r || {},
                            u = s.config,
                            d = (0, i.A)(s, ["config"]);
                        return c && (c.scenes = a), u && (u.scenes = a), {
                            header: c,
                            headerProps: l,
                            footer: u,
                            footerProps: d
                        }
                    })).catch((function() {
                        return k
                    }))
                },
                b = /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/,
                x = function() {
                    var e = (0, r.A)(s().mark((function e(t) {
                        var n, r, i, l, u, d, p, f, m, h, v, y, k, x, C;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.teamId, r = t.locale, i = t.origin, l = t.albHost, u = t.staticUrl, d = t.i18nBasePath, p = t.fallback, f = void 0 !== p && p, "string" === typeof u || "string" === typeof d) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new TypeError("staticUrl or i18nBasePath must be defined");
                                case 3:
                                    if (m = !1, h = (i || "https://www.binance.com").replace(/\/$/, ""), !b.test(h)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        origin: h
                                    });
                                case 7:
                                    return r = r || "en", "Navigation", v = m ? l || "http://bin.bnbstatic.com.s3.ap-northeast-1.amazonaws.com" : u, y = d || [v, "/api/i18n/-/web/cms"].join(""), e.t0 = c.A, e.next = 14, Promise.all([w(r, n || "com", f), (0, g.TU)({
                                        basePath: y,
                                        namespace: "Navigation",
                                        locale: r
                                    })]);
                                case 14:
                                    return e.t1 = e.sent, k = (0, e.t0)(e.t1, 2), x = k[0], C = k[1], e.abrupt("return", (0, o.A)((0, a.A)({}, x), {
                                        origin: h,
                                        lang: C
                                    }));
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        HeEp: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("6aZm"),
                c = n("LCuF"),
                l = (0, i.UF)("uikit-core", "Mask"),
                s = (0, a.forwardRef)((function(e, t) {
                    return l(), e.visible ? o().createElement(c.A, (0, r.A)({
                        ref: t,
                        variant: "mask"
                    }, e, {
                        __css: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }
                    })) : null
                }));
            s.displayName = "Mask";
            const u = s
        },
        ypKN: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const c = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                    fill: "currentColor"
                }))
            }
        },
        "5cux": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const c = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.326 13.909l-1.429 1.417L12 13.429l-3.897 3.897-1.429-1.417 3.909-3.898-3.909-3.908 1.429-1.417L12 10.583l3.897-3.897 1.429 1.417-3.897 3.908 3.897 3.898z",
                    fill: "currentColor"
                }))
            }
        },
        "1eoB": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const c = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M88 48c0 22.091-17.909 40-40 40S8 70.091 8 48 25.909 8 48 8s40 17.909 40 40z",
                    fill: "url(#general-warning_svg__paint0_linear_22059_28207)"
                }), o().createElement("path", {
                    d: "M48 19c16.016 0 29 12.984 29 29S64.016 77 48 77 19 64.016 19 48s12.984-29 29-29z",
                    fill: "url(#general-warning_svg__paint1_linear_22059_28207)"
                }), o().createElement("path", {
                    d: "M45 66h6v-6h-6v6zM51 54V30h-6v24h6z",
                    fill: "#14151A"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "general-warning_svg__paint0_linear_22059_28207",
                    x1: 8,
                    y1: 48,
                    x2: 102.5,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B",
                    stopOpacity: 0
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F0B90B"
                })), o().createElement("linearGradient", {
                    id: "general-warning_svg__paint1_linear_22059_28207",
                    x1: 77,
                    y1: 48,
                    x2: 19,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            }
        },
        OolH: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const c = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M88 48c0 22.091-17.909 40-40 40S8 70.091 8 48 25.909 8 48 8s40 17.909 40 40z",
                    fill: "url(#prompt-b96_svg__paint0_linear)"
                }), o().createElement("path", {
                    d: "M48 19c16.016 0 29 12.984 29 29S64.016 77 48 77 19 64.016 19 48s12.984-29 29-29z",
                    fill: "url(#prompt-b96_svg__paint1_linear)"
                }), o().createElement("path", {
                    d: "M45 66h6v-6h-6v6zM51 54V30h-6v24h6z",
                    fill: "#14151A"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "prompt-b96_svg__paint0_linear",
                    x1: 8,
                    y1: 48,
                    x2: 102.5,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B",
                    stopOpacity: 0
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F0B90B"
                })), o().createElement("linearGradient", {
                    id: "prompt-b96_svg__paint1_linear",
                    x1: 77,
                    y1: 48,
                    x2: 19,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            }
        },
        BMA0: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("w/Qz");
            const c = function(e) {
                return o().createElement(i.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z",
                    fill: "currentColor"
                }))
            }
        },
        S8bp: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("DTvD"),
                a = n("VXBK"),
                o = n("NrY2");
            const i = function(e) {
                var t = e.children,
                    n = e.dir,
                    i = e.theme;
                return r.createElement(o.A.Consumer, null, (function(e) {
                    return r.createElement(o.A.Provider, {
                        value: n || e
                    }, r.createElement(a.NP, {
                        theme: i
                    }, t))
                }))
            }
        },
        UhfZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("M5j3"),
                a = n("BK7R"),
                o = n("gZfF"),
                i = n("DTvD"),
                c = n.n(i),
                l = n("5XPI"),
                s = n("C6y2"),
                u = n("HeEp"),
                d = n("LCuF"),
                p = n("yhUQ"),
                f = n("/Lz3"),
                m = c().useLayoutEffect,
                h = (0, i.forwardRef)((function(e, t) {
                    var n = e.open,
                        h = e.title,
                        v = e.titleSx,
                        y = e.containerSx,
                        g = e.contentSx,
                        k = e.mask,
                        w = void 0 === k || k,
                        b = e.maskSx,
                        x = e.showMaskOnMobile,
                        C = void 0 !== x && x,
                        E = e.onMaskClick,
                        _ = e.onCloseIconClick,
                        A = e.showCloseIcon,
                        S = void 0 === A || A,
                        M = e.children,
                        I = e.onPressEnter,
                        D = void 0 === I ? function() {} : I,
                        T = e.onPressEsc,
                        L = void 0 === T ? function() {} : T,
                        O = e.specialCss,
                        P = void 0 === O ? {} : O,
                        B = e.closeSx,
                        F = void 0 === B ? {} : B,
                        j = e.closeIconProps,
                        R = void 0 === j ? {} : j,
                        z = e.showTitleBottomLine,
                        H = void 0 === z || z,
                        N = e.closeIconSize,
                        U = void 0 === N ? 24 : N,
                        V = e.dialogClassName,
                        Z = void 0 === V ? "" : V,
                        G = (0, o.A)(e, ["open", "title", "titleSx", "containerSx", "contentSx", "mask", "maskSx", "showMaskOnMobile", "onMaskClick", "onCloseIconClick", "showCloseIcon", "children", "onPressEnter", "onPressEsc", "specialCss", "closeSx", "closeIconProps", "showTitleBottomLine", "closeIconSize", "dialogClassName"]),
                        K = function(e) {
                            13 === e.keyCode ? D(e) : 27 === e.keyCode && L(e)
                        };
                    if ((0, i.useEffect)((function() {
                            return n ? document.addEventListener("keydown", K) : document.removeEventListener("keydown", K),
                                function() {
                                    document.removeEventListener("keydown", K)
                                }
                        }), [n]), m((function() {
                            return w && n ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"),
                                function() {
                                    document.body.style.removeProperty("overflow")
                                }
                        }), [w, n]), !n || "undefined" === typeof document || !document.body) return null;
                    var W = !1;
                    window.matchMedia("(max-width: 766px)").matches && (W = !0);
                    var q = (0, a.A)({
                            zIndex: "unset"
                        }, b),
                        Y = w && (C || !W);
                    return c().createElement(l.Ay, null, c().createElement(s.A, {
                        __css: (0, a.A)({
                            zIndex: "modal",
                            position: "fixed",
                            alignItems: "center",
                            justifyContent: "center",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }, P),
                        sx: y,
                        className: Z
                    }, Y && c().createElement(u.A, {
                        visible: !0,
                        onClick: function(e) {
                            return E && E(e)
                        },
                        sx: q
                    }), c().createElement(d.A, (0, r.A)({
                        ref: t,
                        __css: {
                            position: "relative",
                            borderRadius: ["0px", "large", "large"],
                            boxShadow: "dialog",
                            backgroundColor: "popupBg",
                            width: ["100%", "auto"],
                            height: ["100%", "auto"],
                            color: "t.primary"
                        }
                    }, G), S && c().createElement(d.A, (0, r.A)({
                        __css: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            left: "unset",
                            pt: "20px",
                            pr: "md",
                            color: "t.disabled",
                            cursor: "pointer",
                            ":hover": {
                                color: "t.third"
                            }
                        }
                    }, R, {
                        sx: F,
                        onClick: function(e) {
                            return _ && _(e)
                        }
                    }), c().createElement(f.A, {
                        size: U,
                        style: {
                            width: "".concat(U, "px"),
                            height: "".concat(U, "px")
                        }
                    })), h && c().createElement(p.A, {
                        variant: "headline6",
                        className: "modal-title",
                        __css: {
                            pl: "md",
                            pr: "lg",
                            pt: "20px",
                            pb: "19px",
                            borderBottom: "1px solid",
                            borderBottomColor: "line",
                            border: H ? "" : "none",
                            textAlign: "left"
                        },
                        sx: v
                    }, h), c().createElement(d.A, {
                        className: "style-dialog-body",
                        __css: {
                            p: "md",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        sx: g
                    }, M))))
                }));
            h.displayName = "StyledDialog";
            const v = h
        },
        eEzz: (e, t, n) => {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function a() {
                return a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, a.apply(this, arguments)
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function i(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), e
            }

            function u(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? m(e) : t
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }

            function p(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }

            function f(e, t) {
                return f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, f(e, t)
            }

            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var v = n("DTvD"),
                y = n("aWzz"),
                g = n("1PNn"),
                k = n("FFk3");

            function w(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t += String.fromCharCode(r) : r < 2048 ? (t += String.fromCharCode(192 | r >> 6), t += String.fromCharCode(128 | 63 & r)) : r < 55296 || r >= 57344 ? (t += String.fromCharCode(224 | r >> 12), t += String.fromCharCode(128 | r >> 6 & 63), t += String.fromCharCode(128 | 63 & r)) : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)), t += String.fromCharCode(240 | r >> 18), t += String.fromCharCode(128 | r >> 12 & 63), t += String.fromCharCode(128 | r >> 6 & 63), t += String.fromCharCode(128 | 63 & r))
                }
                return t
            }
            var b = {
                    size: 128,
                    level: "L",
                    bgColor: "#FFFFFF",
                    fgColor: "#000000",
                    includeMargin: !1
                },
                x = {
                    value: y.string.isRequired,
                    size: y.number,
                    level: y.oneOf(["L", "M", "Q", "H"]),
                    bgColor: y.string,
                    fgColor: y.string,
                    includeMargin: y.bool
                };

            function C(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = [];
                return e.forEach((function(e, r) {
                    var a = null;
                    e.forEach((function(o, i) {
                        if (!o && null !== a) return n.push("M".concat(a + t, " ").concat(r + t, "h").concat(i - a, "v1H").concat(a + t, "z")), void(a = null);
                        if (i !== e.length - 1) o && null === a && (a = i);
                        else {
                            if (!o) return;
                            null === a ? n.push("M".concat(i + t, ",").concat(r + t, " h1v1H").concat(i + t, "z")) : n.push("M".concat(a + t, ",").concat(r + t, " h").concat(i + 1 - a, "v1H").concat(a + t, "z"))
                        }
                    }))
                })), n.join("")
            }
            var E = function() {
                    try {
                        (new Path2D).addPath(new Path2D)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }(),
                _ = function(e) {
                    function t() {
                        var e, n;
                        c(this, t);
                        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                        return h(m(m(n = u(this, (e = d(t)).call.apply(e, [this].concat(a))))), "_canvas", void 0), n
                    }
                    return p(t, e), s(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.update()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.update()
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this.props,
                                t = e.value,
                                n = e.size,
                                r = e.level,
                                a = e.bgColor,
                                o = e.fgColor,
                                i = e.includeMargin,
                                c = new g(-1, k[r]);
                            if (c.addData(w(t)), c.make(), null != this._canvas) {
                                var l = this._canvas,
                                    s = l.getContext("2d");
                                if (!s) return;
                                var u = c.modules;
                                if (null === u) return;
                                var d = i ? 4 : 0,
                                    p = u.length + 2 * d,
                                    f = window.devicePixelRatio || 1;
                                l.height = l.width = n * f;
                                var m = n / p * f;
                                s.scale(m, m), s.fillStyle = a, s.fillRect(0, 0, p, p), s.fillStyle = o, E ? s.fill(new Path2D(C(u, d))) : u.forEach((function(e, t) {
                                    e.forEach((function(e, n) {
                                        e && s.fillRect(n + d, t + d, 1, 1)
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = (t.value, t.size),
                                r = (t.level, t.bgColor, t.fgColor, t.style),
                                c = (t.includeMargin, i(t, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin"])),
                                l = o({
                                    height: n,
                                    width: n
                                }, r);
                            return v.createElement("canvas", a({
                                style: l,
                                height: n,
                                width: n,
                                ref: function(t) {
                                    return e._canvas = t
                                }
                            }, c))
                        }
                    }]), t
                }(v.PureComponent);
            h(_, "defaultProps", b), h(_, "propTypes", x);
            var A = function(e) {
                function t() {
                    return c(this, t), u(this, d(t).apply(this, arguments))
                }
                return p(t, e), s(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.value,
                            n = e.size,
                            r = e.level,
                            o = e.bgColor,
                            c = e.fgColor,
                            l = e.includeMargin,
                            s = i(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin"]),
                            u = new g(-1, k[r]);
                        u.addData(w(t)), u.make();
                        var d = u.modules;
                        if (null === d) return null;
                        var p = l ? 4 : 0,
                            f = C(d, p),
                            m = d.length + 2 * p;
                        return v.createElement("svg", a({
                            shapeRendering: "crispEdges",
                            height: n,
                            width: n,
                            viewBox: "0 0 ".concat(m, " ").concat(m)
                        }, s), v.createElement("path", {
                            fill: o,
                            d: "M0,0 h".concat(m, "v").concat(m, "H0z")
                        }), v.createElement("path", {
                            fill: c,
                            d: f
                        }))
                    }
                }]), t
            }(v.PureComponent);
            h(A, "defaultProps", b), h(A, "propTypes", x);
            var S = function(e) {
                var t = e.renderAs,
                    n = i(e, ["renderAs"]),
                    r = "svg" === t ? A : _;
                return v.createElement(r, n)
            };
            S.defaultProps = o({
                renderAs: "canvas"
            }, b), e.exports = S
        },
        B4SR: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("zUKr");
            const a = function() {
                return {
                    getFlag: function() {
                        return "true" === window.sessionStorage.getItem(r.Xk)
                    },
                    setFlag: function() {
                        window.sessionStorage.setItem(r.Xk, "true"), window.name = r.u
                    }
                }
            }
        },
        VhXe: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("HS2I"),
                a = n("BK9r"),
                o = n("ubfX");
            const i = function() {
                return function(e) {
                    var t, n = null === (t = null === e || void 0 === e ? void 0 : e.split("/")) || void 0 === t ? void 0 : t[1];
                    return "undefined" !== typeof o.YD.find((function(e) {
                        return "/".concat(n) === e
                    }))
                }((0, a.K7)().pathname)
            };
            const c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ignoreDarkThemeWhistListRestriction,
                    n = void 0 !== t && t,
                    a = (0, r.useTheme)().theme,
                    o = i() || n;
                return {
                    isLight: "light" === a || !o
                }
            }
        },
        JzJJ: (e, t, n) => {
            "use strict";
            n.d(t, {
                aj: () => y,
                gh: () => v
            });
            var r, a = n("sViW"),
                o = n("0GOp"),
                i = n.n(o),
                c = n("TrCV"),
                l = n("DTvD"),
                s = n("44NZ"),
                u = n("cNVJ"),
                d = n("8tQJ"),
                p = n("zUKr"),
                f = n("J0xf"),
                m = function() {
                    var e = (0, a.A)(i().mark((function e(t, n) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("undefined" === typeof r) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 2:
                                    return e.next = 4, d.Ay.init({
                                        uid: n,
                                        trace_id: f.Hy.get(),
                                        strategy_ids: [],
                                        env: p.lF
                                    }, {
                                        authHeader: "MjE1MDA1NDY2NDpMODdaWjdXNFF2TEZsN2hTZXA4VFF6Znp2dnI2d3VZdQ==",
                                        baseUrl: "https://api.saasexch.com/bapi/themis/api/"
                                    }, t);
                                case 4:
                                    return r = e.sent, e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = (n("+bTb"), function() {
                    var e, t = (0, u.wA)(),
                        n = (0, u.d4)((function(t) {
                            var n;
                            return null !== (e = null === t || void 0 === t || null === (n = t.common) || void 0 === n ? void 0 : n.themisConfig) && void 0 !== e ? e : {}
                        })),
                        r = n.themisHelper,
                        o = n.isLoading,
                        c = (0, s.v)().userBaseInfo.userId,
                        d = (0, l.useCallback)((function(e) {
                            t.common.updateThemisConfig({
                                config: e
                            })
                        }), [t]),
                        p = function() {
                            var e = (0, a.A)(i().mark((function e() {
                                var n;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.common.updateThemisConfig({
                                                isLoaded: !1,
                                                isLoading: !0
                                            }), e.prev = 2, e.next = 5, m(d, c);
                                        case 5:
                                            (n = e.sent).subscribe(d), t.common.updateThemisConfig({
                                                isLoaded: !0,
                                                themisHelper: n
                                            }), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), console.error(e.t0);
                                        case 13:
                                            return e.prev = 13, t.common.updateThemisConfig({
                                                isLoading: !1
                                            }), e.finish(13);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10, 13, 16]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        f = (0, l.useCallback)((function(e) {
                            return null === r || void 0 === r ? void 0 : r.getFeatureGateValueByName(e)
                        }), [r]);
                    return {
                        themis: r,
                        isLoading: o,
                        getFeatureGateValueByName: f,
                        init: p
                    }
                }),
                v = function() {
                    var e, t = (0, u.d4)((function(t) {
                        var n;
                        return null !== (e = null === t || void 0 === t || null === (n = t.common) || void 0 === n ? void 0 : n.themisConfig) && void 0 !== e ? e : {}
                    }));
                    return {
                        config: t.config,
                        isLoading: t.isLoading
                    }
                },
                y = function(e) {
                    var t = e.children,
                        n = h().init,
                        r = (0, s.v)().userBaseInfo.userId;
                    return (0, l.useEffect)((function() {
                        n()
                    }), [r]), (0, c.jsx)(c.Fragment, {
                        children: t
                    })
                }
        },
        "4P7N": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n("TrCV"),
                a = n("MEAY"),
                o = n("ulLh"),
                i = n("S8bp"),
                c = n("VhXe"),
                l = n("ubfX"),
                s = function(e) {
                    var t = e.children,
                        n = e.ignoreDarkThemeWhistListRestriction,
                        a = e.overrideThemeColor,
                        o = (0, c.A)({
                            ignoreDarkThemeWhistListRestriction: n
                        }).isLight,
                        s = ("undefined" !== typeof a ? "light" === a : o) ? l.wl : l.iz;
                    return (0, r.jsx)(i.A, {
                        theme: s,
                        children: t
                    })
                },
                u = function(e) {
                    var t = e.children,
                        n = (e.scope, e.ignoreDarkThemeWhistListRestriction),
                        i = e.overrideThemeColor,
                        s = (0, c.A)({
                            ignoreDarkThemeWhistListRestriction: n
                        }).isLight,
                        u = "undefined" !== typeof i ? "light" === i : s,
                        d = u ? "light" : "dark",
                        p = u ? l.Hw : l.F1,
                        f = u ? a.bK : a.zd;
                    return (0, r.jsx)(o.A, {
                        scope: !0,
                        mode: d,
                        themeColors: p,
                        themeExtraColors: f,
                        children: t
                    })
                };
            const d = function(e) {
                var t = e.children,
                    n = e.ignoreDarkThemeWhistListRestriction,
                    a = void 0 !== n && n,
                    o = e.scope,
                    i = void 0 !== o && o,
                    c = e.overrideThemeColor;
                return (0, r.jsx)(s, {
                    ignoreDarkThemeWhistListRestriction: a,
                    overrideThemeColor: c,
                    children: (0, r.jsx)(u, {
                        ignoreDarkThemeWhistListRestriction: a,
                        scope: i,
                        overrideThemeColor: c,
                        children: t
                    })
                })
            }
        },
        had0: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => a
            });
            var r = n("DTvD"),
                a = n.n(r)().createContext({
                    metaData: {},
                    configs: {}
                })
        },
        rETT: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => Pt
            });
            var r = n("sViW"),
                a = n("0GOp"),
                o = n.n(a),
                i = n("TrCV"),
                c = n("DTvD"),
                l = n.n(c),
                s = n("oRTC");
            const u = function() {
                return null
            };
            var d = n("JyHn"),
                p = n("cPbI"),
                f = n("6FIE"),
                m = n("dHBJ"),
                h = n("ezuS"),
                v = n("BK7R"),
                y = n("QUKP"),
                g = n("gZfF"),
                k = n("aVXY"),
                w = n("tEf9"),
                b = n("Enqy"),
                x = function() {
                    if (Object.keys) return Object.keys;
                    var e = Object.prototype.hasOwnProperty,
                        t = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        r = n.length;
                    return function(a) {
                        if ("object" !== typeof a && "function" !== typeof a || null === a) throw new TypeError("Object.keys called on non-object");
                        var o = [];
                        for (var i in a) e.call(a, i) && o.push(i);
                        if (t)
                            for (var c = 0; c < r; c++) e.call(a, n[c]) && o.push(n[c]);
                        return o
                    }
                }(),
                C = n("pR+c"),
                E = n("M5j3"),
                _ = n("5XPI"),
                A = n("C6y2"),
                S = {
                    default: "stretch",
                    left: "flex-start",
                    right: "flex-end",
                    center: "center"
                };
            const M = l().memo((function(e) {
                var t = e.anchorOrigin,
                    n = e.position,
                    r = e.enablePortal,
                    a = e.container,
                    o = (0, g.A)(e, ["anchorOrigin", "position", "enablePortal", "container"]),
                    i = {
                        position: n,
                        zIndex: "notification",
                        alignItems: S[t.horizontal] || S.default
                    };
                return "top" === t.vertical ? i.top = 12 : i.bottom = 12, "left" === t.horizontal ? i.left = 12 : "center" === t.horizontal ? (i.left = "50%", i.transform = "translateX(-50%)") : i.right = 12, r || a ? l().createElement(_.Ay, {
                    container: a
                }, l().createElement(A.A, (0, E.A)({
                    className: "UikitWidget_NotificationContainer",
                    flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                }, o, {
                    __css: i
                }))) : l().createElement(A.A, (0, E.A)({
                    className: "UikitWidget_NotificationContainer",
                    flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                }, o, {
                    __css: i
                }))
            }));
            var I = n("LCuF"),
                D = n("yhUQ"),
                T = n("w/Qz");
            const L = function(e) {
                return l().createElement(T.A, (0, E.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M11.989 22H12c5.527 0 10-4.473 10-10 0-5.528-4.473-10-10-10-5.516 0-9.989 4.472-10 9.989-.011 5.527 4.461 10 9.989 10.011zM10.99 5.016h2.018v2.007h-2.018V5.016zm0 4.633h2.018v9.346h-2.018V9.65z",
                    fill: "currentColor"
                }))
            };
            var O = n("5cux"),
                P = n("BMA0");
            const B = function(e) {
                return l().createElement(T.A, (0, E.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "currentColor"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 4.791a.723.723 0 00.716-.729V2.729c0-.402-.32-.729-.716-.729a.723.723 0 00-.716.73v1.332c0 .402.32.73.716.73zM6.884 6.51a.713.713 0 01-.716.72.733.733 0 01-.508-.2l-.936-.94a.713.713 0 01-.212-.515c0-.197.076-.385.212-.515a.734.734 0 011.016 0l.932.934c.136.13.212.319.212.516zm4.436 14.032h1.336c.396 0 .716.326.716.729 0 .402-.32.729-.716.729h-1.332a.723.723 0 01-.716-.73c0-.38.32-.707.712-.729zM2.716 10.268h1.332c.388 0 .716.335.716.73 0 .401-.32.728-.716.728H2.716A.723.723 0 012 10.998c0-.394.328-.73.716-.73zm16.776-4.694a.696.696 0 00-.212-.511.701.701 0 00-1.02 0l-.932.934a.713.713 0 00-.212.516c0 .197.076.386.212.515.14.135.324.202.508.202a.719.719 0 00.508-.206l.932-.934a.73.73 0 00.216-.516zm.46 4.694h1.332c.388 0 .716.335.716.73 0 .401-.32.728-.716.728h-1.332a.723.723 0 01-.716-.729c0-.402.32-.73.716-.73zm-5.964 8.294h-3.976a.723.723 0 00-.716.73c0 .402.32.729.716.729h3.976a.723.723 0 00.716-.73c0-.402-.32-.729-.716-.729zM12 5.981c1.612 0 3.124.625 4.26 1.76A5.984 5.984 0 0118.024 12c0 1.61-.628 3.122-1.764 4.258a5.982 5.982 0 01-4.26 1.76 5.982 5.982 0 01-4.26-1.76A5.984 5.984 0 015.976 12c0-1.61.628-3.123 1.764-4.258A5.982 5.982 0 0112 5.982z",
                    fill: "currentColor"
                }))
            };
            var F = n("ypKN"),
                j = n("/Lz3"),
                R = {
                    info: L,
                    error: O.A,
                    warning: P.A,
                    success: F.A,
                    tips: B
                },
                z = (0, c.forwardRef)((function(e, t) {
                    var n = e.message,
                        r = e.header,
                        a = e.footer,
                        o = e.icon,
                        i = e.variant,
                        s = void 0 === i ? "tips" : i,
                        u = e.closable,
                        d = void 0 !== u && u,
                        p = e.showIcon,
                        f = void 0 === p || p,
                        m = e.onClose,
                        h = e.progress,
                        y = (e.showProgress, (0, g.A)(e, ["message", "header", "footer", "icon", "variant", "closable", "showIcon", "onClose", "progress", "showProgress"])),
                        k = R[s],
                        w = "toast.".concat(s),
                        b = (0, c.isValidElement)(o) ? l().cloneElement(o, (0, v.A)({
                            size: 20,
                            display: "block"
                        }, o.props), []) : k ? l().createElement(k, {
                            size: 20,
                            display: "block"
                        }) : null;
                    return l().createElement(A.A, (0, E.A)({
                        ref: t,
                        sx: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        tx: "toast",
                        variant: s
                    }, y), l().createElement(I.A, {
                        sx: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(h, "%"),
                            height: "3px",
                            bg: "primary"
                        }
                    }), l().createElement(A.A, {
                        alignItems: "flex-start",
                        __css: {
                            width: "100%"
                        }
                    }, f ? l().createElement(I.A, {
                        color: w,
                        __css: {
                            mr: "ls",
                            pt: "2px",
                            flexShrink: 0
                        }
                    }, b) : null, l().createElement(A.A, {
                        className: "bn-notification-body-wrapper",
                        __css: {
                            maxHeight: "146px",
                            flexDirection: "column",
                            width: "100%"
                        }
                    }, r ? l().createElement(D.A, {
                        sx: {
                            color: "t.primary",
                            mb: "2px",
                            flexShrink: 0
                        },
                        variant: "subtitle1"
                    }, r) : null, n ? l().createElement(D.A, {
                        className: "bn-notification-msg-wrapper",
                        variant: "body2",
                        sx: {
                            color: "t.secondary",
                            overflow: "auto",
                            maxHeight: 120,
                            pr: d ? "md" : 0,
                            wordWrap: "break-word"
                        }
                    }, n) : null, a ? l().createElement(D.A, {
                        variant: "label5",
                        sx: {
                            color: "toast.content",
                            flexShrink: 0,
                            pr: d ? "md" : 0
                        }
                    }, a) : null)), d ? l().createElement(I.A, {
                        __css: {
                            position: "absolute",
                            right: "sm",
                            alignItems: "flex-start",
                            flexShrink: 0,
                            p: "minor"
                        }
                    }, l().createElement(j.A, {
                        size: 20,
                        onClick: m,
                        display: "block",
                        cursor: "pointer",
                        color: "toast.closeColor"
                    })) : null)
                }));
            z.displayName = "Toast";
            const H = z;

            function N(e) {
                var t = (0, k.A)((0, c.useState)(0), 2),
                    n = t[0],
                    r = t[1],
                    a = e.onClose,
                    o = e.item,
                    i = e.style,
                    s = o.autoHideDuration,
                    u = o.open,
                    d = o.key,
                    p = o.showProgress,
                    f = o.onClose,
                    m = (0, g.A)(o, ["autoHideDuration", "open", "key", "showProgress", "onClose"]),
                    h = l().useRef(),
                    v = l().useCallback((function(e, t) {
                        f && f(e, t, d), a(e, t, d)
                    }), [d]),
                    y = l().useCallback((function() {
                        s && (clearTimeout(h.current), h.current = setTimeout((function() {
                            s && v(null, "timeout")
                        }), s))
                    }), [s, v]);
                return (0, c.useEffect)((function() {
                    return u && y(),
                        function() {
                            clearTimeout(h.current)
                        }
                }), [u, y]), (0, c.useEffect)((function() {
                    if (s && p) var e = setInterval((function() {
                        r((function(t) {
                            return t >= 100 ? (clearInterval(e), 100) : t + 1e3 / s
                        }))
                    }), 10)
                }), [s]), u ? l().createElement(H, (0, E.A)({
                    mb: "xs",
                    onClose: v,
                    progress: n,
                    showProgress: p
                }, m, {
                    style: i
                })) : null
            }
            var U = {
                    vertical: "top",
                    horizontal: "center"
                },
                V = function(e, t) {
                    var n;
                    return "object" !== typeof t[0] || c.isValidElement(t[0]) ? (n = t[1] || e).message = n.message || t[0] : n = t[0] || e, n
                };
            const Z = function(e) {
                var t = e.anchorOrigin,
                    n = void 0 === t ? U : t,
                    r = e.autoHideDuration,
                    a = void 0 === r ? 4500 : r,
                    o = e.closable,
                    i = void 0 !== o && o,
                    l = e.disableAnimate,
                    s = void 0 !== l && l,
                    u = e.position,
                    d = void 0 === u ? "fixed" : u,
                    p = e.children,
                    f = e.queueSize,
                    m = void 0 === f ? 10 : f,
                    E = e.container,
                    _ = e.enablePortal,
                    A = (0, k.A)(c.useState(_), 2),
                    S = A[0],
                    I = A[1],
                    D = c.useMemo((function() {
                        return []
                    }), []),
                    T = (0, k.A)(c.useState([]), 2),
                    L = T[0],
                    O = T[1],
                    P = c.useCallback((function(t, n, r) {
                        e.onClose && e.onClose(t, n, r), O(void 0 !== r && null !== r ? function(e) {
                            return e.filter((function(e) {
                                return e.key !== r.toString()
                            }))
                        } : [])
                    }), [e]),
                    B = c.useRef(null),
                    F = c.useCallback((function() {
                        O((function(t) {
                            var n = t.length - m + 1;
                            if (n >= 1) {
                                for (var r = t.splice(0, n), a = 0; a < r.length; ++a) {
                                    var o = r[a];
                                    o && (o.onClose && o.onClose(null, "max", o.key), e.onClose && e.onClose(null, "max", o.key))
                                }
                                var i = D.splice(0, Math.min(n - 1, D.length));
                                if (i.length > 0) return (0, w.A)(t).concat((0, w.A)(i))
                            }
                            return (0, w.A)(t)
                        }))
                    }), [e, D, m]),
                    j = c.useCallback((function() {
                        D.length > 0 && O((function(e) {
                            var t = D.shift();
                            return t ? (0, w.A)(e).concat([t]) : e
                        }))
                    }), [D]),
                    R = c.useCallback((function() {
                        return F(), j()
                    }), [F, j]),
                    z = L.reduce((function(e, t) {
                        var r, a = (r = t.anchorOrigin || n, "".concat(r.vertical, "-").concat(r.horizontal)),
                            o = e[a] || [];
                        return (0, y.A)((0, v.A)({}, e), (0, h.A)({}, a, (0, w.A)(o).concat([t])))
                    }), {}),
                    H = c.useMemo((function() {
                        return {
                            enqueueNotification: function() {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                if (void 0 !== t[0] || void 0 !== t[1]) {
                                    var o = V({
                                        anchorOrigin: n,
                                        autoHideDuration: a,
                                        closable: i,
                                        enablePortal: _
                                    }, t);
                                    o.enablePortal && I(o.enablePortal), o.container && (B.current = o.container);
                                    var c = o.key,
                                        l = o.anchorOrigin,
                                        s = void 0 === l ? n : l,
                                        u = o.autoHideDuration,
                                        d = void 0 === u ? a : u,
                                        p = o.closable,
                                        f = void 0 === p ? i : p,
                                        m = o.persist,
                                        h = o.message,
                                        k = (0, g.A)(o, ["key", "anchorOrigin", "autoHideDuration", "closable", "persist", "message"]),
                                        w = c && c.toString() || (new Date).getTime().toString() + Math.random().toString(),
                                        b = (0, y.A)((0, v.A)({
                                            key: w
                                        }, k), {
                                            persist: Boolean(m),
                                            autoHideDuration: m ? 0 : d,
                                            closable: f,
                                            open: !0,
                                            message: h,
                                            anchorOrigin: s
                                        });
                                    return D.push(b), R(), w
                                }
                            },
                            closeNotification: function(e) {
                                P(null, null, e)
                            }
                        }
                    }), [D, n, a, i, _, P, R]);
                return c.createElement(C.A.Provider, {
                    value: H
                }, p, function(e) {
                    if (Object.entries) return Object.entries(e);
                    for (var t = x(e), n = t.length, r = new Array(n); n--;) r[n] = [t[n], e[t[n]]];
                    return r
                }(z).map((function(e) {
                    var t = (0, k.A)(e, 2),
                        n = t[0],
                        r = t[1],
                        a = r[0],
                        o = a.anchorOrigin,
                        i = a.style,
                        l = "top" === o.vertical ? -1 : 1;
                    return s ? c.createElement(M, {
                        key: n,
                        anchorOrigin: o,
                        position: d,
                        container: B.current || E,
                        enablePortal: S,
                        style: null !== i && void 0 !== i ? i : {}
                    }, r.map((function(e) {
                        return c.createElement(N, {
                            key: e.key,
                            item: e,
                            onClose: P
                        })
                    }))) : c.createElement(b.S6, {
                        key: n,
                        defaultStyles: r.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    opacity: 0,
                                    translateY: 60 * l
                                }
                            }
                        })),
                        styles: r.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    translateY: (0, b.oz)(0, b.v4.gentle),
                                    opacity: (0, b.oz)(1, b.v4.gentle)
                                }
                            }
                        })),
                        willLeave: function(e) {
                            var t = e.key;
                            return {
                                translateY: (0, b.oz)(-60 * l * (r[0].key === t ? 1 : -1)),
                                opacity: (0, b.oz)(0)
                            }
                        },
                        willEnter: function() {
                            return {
                                translateY: 60 * l,
                                opacity: 1
                            }
                        }
                    }, (function(e) {
                        return c.createElement(M, {
                            key: n,
                            anchorOrigin: o,
                            position: d,
                            container: B.current || E,
                            enablePortal: S,
                            style: (0, v.A)({
                                transform: "translate3d(".concat("center" === o.horizontal ? "-50%" : "0", ", ").concat(e[e.length - 1].style.translateY, "px, 0)")
                            }, null !== i && void 0 !== i ? i : {})
                        }, e.map((function(e) {
                            var t = e.key,
                                n = e.style.opacity,
                                r = e.data;
                            return c.createElement(N, {
                                key: t,
                                item: r,
                                onClose: P,
                                style: {
                                    opacity: n
                                }
                            })
                        })))
                    }))
                })))
            };
            var G = _.N5.Provider,
                K = _.Ki.Target,
                W = _.Ki.Source;
            const q = function(e) {
                var t = e.children;
                return l().createElement(c.Fragment, null, l().createElement(K, {
                    style: {
                        position: "relative"
                    }
                }), l().createElement(G, {
                    value: W
                }, t))
            };
            var Y = n("a75W"),
                X = n("faht"),
                J = n("Srb9"),
                Q = n("BK9r"),
                $ = n("4P7N"),
                ee = n("44NZ");
            const te = function() {
                var e = (0, ee.v)().userBaseInfo.userId;
                (0, c.useEffect)((function() {
                    e && "undefined" !== typeof Sentry && Sentry.setUser({
                        id: e
                    })
                }), [e])
            };
            var ne = n("nocm"),
                re = n("zUKr"),
                ae = n("cNVJ"),
                oe = n("0wco"),
                ie = n("B4SR"),
                ce = n("JzJJ"),
                le = n("HS2I");
            const se = function() {
                var e = (0, ae.wA)(),
                    t = (0, le.useCurrency)(),
                    n = t.currency,
                    r = t.currencyMap,
                    a = t.currencyList;
                return (0, c.useEffect)((function() {
                    a && e.userCenter.updateState({
                        fiatCurrencyInfo: a
                    })
                }), [a, e.userCenter]), (0, c.useEffect)((function() {
                    r && e.userCenter.updateState({
                        fiatCurrency: r
                    })
                }), [r, e.userCenter]), (0, c.useEffect)((function() {
                    n && e.cookies.updateState({
                        userPreferredCurrency: n
                    })
                }), [n, e.cookies]), {
                    preferredCurrency: n
                }
            };
            var ue = n("x9UB");
            const de = function() {
                var e = (0, s.wA)(),
                    t = (0, ue.k)().isLoggedIn,
                    n = (0, le.useUserBaseDetail)(),
                    r = n.value,
                    a = n.loading;
                return (0, c.useEffect)((function() {
                    !0 === t && !window.__RUN_BY_ELECTRON__ && (null === r || void 0 === r ? void 0 : r.userId) && e.userCenter.updateState({
                        userInfo: r
                    })
                }), [e.userCenter, r, t]), {
                    userInfo: r,
                    isLoading: a
                }
            };
            var pe = function(e) {
                    var t = e.children;
                    return de(), se(), (0, i.jsx)(i.Fragment, {
                        children: t
                    })
                },
                fe = n("had0"),
                me = n("Hb45"),
                he = n("3Oec"),
                ve = n("3yYM"),
                ye = n.n(ve),
                ge = n("wvGK"),
                ke = n("95yF"),
                we = n("ONK2"),
                be = [],
                xe = function(e) {
                    return e >= 200 && e < 300 || 401 === e
                };

            function Ce(e) {
                return "string" !== typeof e ? "" : e.replace(/(https?:\/\/)?([^/]+)(.*)/, "$3")
            }

            function Ee(e) {
                try {
                    return new URL(e).pathname
                } catch (t) {
                    return e
                }
            }

            function _e(e) {
                if (Array.isArray(e)) return function(t, n) {
                    try {
                        var r = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                                var l = i.value;
                                if (l) {
                                    if ("string" === typeof l && new RegExp(l).test(t)) return "***";
                                    if (Array.isArray(l) && "function" === typeof l[1] && new RegExp(l[0], l[2]).test(t)) return l[1](t, n)
                                }
                            }
                        } catch (s) {
                            a = !0, o = s
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return n
                    } catch (u) {
                        return n
                    }
                }
            }

            function Ae(e) {
                var t = e.url,
                    n = e.include,
                    r = e.exclude;
                return !be.some((function(e) {
                    return new RegExp(e).test(t)
                })) && (!(n.length && !(null === n || void 0 === n ? void 0 : n.some((function(e) {
                    return new RegExp(e).test(t)
                })))) && (!r.length || !r.some((function(e) {
                    return new RegExp(e).test(t)
                }))))
            }

            function Se(e) {
                return Me.apply(this, arguments)
            }

            function Me() {
                return Me = (0, r.A)(ye().mark((function e(t) {
                    var n, r, a, o, i, c, l, s, u, d, p, f, m, h, g, k, w, b, x, C, E, _, A, S, M, I, D, T, L, O, P, B, F, j, R, z = arguments;
                    return ye().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = z.length > 1 && void 0 !== z[1] ? z[1] : {
                                        includes: [],
                                        excludes: []
                                    }, r = z.length > 2 ? z[2] : void 0, e.prev = 1, (null === n || void 0 === n ? void 0 : n.enableServer) || !(0, we.S$)()) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 5:
                                if ("function" === typeof t.clone) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 7:
                                if (Ae({
                                        url: t.url,
                                        include: (null === n || void 0 === n ? void 0 : n.includes) || [],
                                        exclude: (null === n || void 0 === n ? void 0 : n.excludes) || []
                                    })) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 9:
                                return e.next = 11, null === (a = t.clone()) || void 0 === a || null === (o = a.json) || void 0 === o ? void 0 : o.call(a);
                            case 11:
                                if (m = e.sent) {
                                    e.next = 14;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 14:
                                xe(t.status) ? (g = m.code, k = m.success, w = m.data, x = (b = w || {}).errorMappingData, C = b.body, E = void 0 === C ? {} : C, x || (null === E || void 0 === E || null === (h = E.data) || void 0 === h ? void 0 : h.errorMappingData) ? ke.A.logCounter("http_business_error_withTip", {
                                    api: Ee(t.url),
                                    code: null !== (_ = null === E || void 0 === E ? void 0 : E.code) && void 0 !== _ ? _ : g
                                }) : !1 !== k && !1 !== (null === E || void 0 === E ? void 0 : E.success) || ke.A.logCounter("http_business_error", {
                                    api: Ee(t.url),
                                    code: null !== (A = null === E || void 0 === E ? void 0 : E.code) && void 0 !== A ? A : g
                                })) : ke.A.logCounter("http_error", {
                                    api: Ee(t.url),
                                    code: t.status
                                }), S = null === n || void 0 === n ? void 0 : n.sensitiveFilterConfig, M = null;
                                try {
                                    M = JSON.stringify(m, S ? _e(S) : void 0)
                                } catch (H) {}
                                if (!Ae({
                                        url: t.url,
                                        include: (null === n || void 0 === n ? void 0 : n.manualUploadList) || [],
                                        exclude: []
                                    })) {
                                    e.next = 23;
                                    break
                                }
                                return ge.Ay.send((0, y.A)((0, v.A)({
                                    t: "res-track"
                                }, r || {}), {
                                    s: t.status,
                                    path: Ce(t.url),
                                    suc: null !== (j = null === m || void 0 === m || null === (I = m.data) || void 0 === I || null === (D = I.body) || void 0 === D ? void 0 : D.success) && void 0 !== j ? j : m.success,
                                    req: (null === n || void 0 === n || null === (T = n.opts) || void 0 === T ? void 0 : T.body) ? JSON.stringify(JSON.parse(null === n || void 0 === n || null === (L = n.opts) || void 0 === L ? void 0 : L.body), S ? _e(S) : void 0) : "",
                                    res: M,
                                    duration: (null === n || void 0 === n || null === (O = n.opts) || void 0 === O ? void 0 : O._start_time) ? Date.now() - (null === n || void 0 === n || null === (P = n.opts) || void 0 === P ? void 0 : P._start_time) : void 0,
                                    "x-track-id": (null === (B = n.opts) || void 0 === B || null === (F = B.headers) || void 0 === F ? void 0 : F["X-TRACE-ID"]) || null
                                })), e.abrupt("return", t);
                            case 23:
                                return ge.Ay.throttleSend((0, y.A)((0, v.A)({}, r || {}), {
                                    t: "res-track",
                                    s: t.status,
                                    path: Ce(t.url),
                                    suc: null !== (R = null === m || void 0 === m || null === (i = m.data) || void 0 === i || null === (c = i.body) || void 0 === c ? void 0 : c.success) && void 0 !== R ? R : m.success,
                                    req: (null === n || void 0 === n || null === (l = n.opts) || void 0 === l ? void 0 : l.body) ? JSON.stringify(JSON.parse(null === n || void 0 === n || null === (s = n.opts) || void 0 === s ? void 0 : s.body), S ? _e(S) : void 0) : "",
                                    res: M,
                                    duration: (null === n || void 0 === n || null === (u = n.opts) || void 0 === u ? void 0 : u._start_time) ? Date.now() - (null === n || void 0 === n || null === (d = n.opts) || void 0 === d ? void 0 : d._start_time) : void 0,
                                    "x-track-id": (null === (p = n.opts) || void 0 === p || null === (f = p.headers) || void 0 === f ? void 0 : f["X-TRACE-ID"]) || null
                                })), e.abrupt("return", t);
                            case 28:
                                return e.prev = 28, e.t0 = e.catch(1), e.abrupt("return", t);
                            case 31:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 28]
                    ])
                }))), Me.apply(this, arguments)
            }
            var Ie = n("eZh5");
            var De, Te = {
                    "err-http-400": "Invalid request, please check whether the input parameters meet the specifications before request again",
                    "err-http-401": "Haven't logged in yet, please log in first",
                    "err-http-403": "Sorry, you have no permission to access this service",
                    "err-http-404": "The visited address doesn\u2019t seem to exist",
                    "err-http-405": "Service request failed, please report to customer service or other staff",
                    "err-http-418": "Your operations are too frequent. Please try again later. Additionally, if you are using a proxy service, consider switching the proxy.",
                    "err-http-429": "Your operations are too frequent. Please try again later. Additionally, if you are using a proxy service, consider switching the proxy.",
                    "err-http-500": "Something is wrong with the server, please try to request a moment later",
                    "err-http-502": "Server is busy, please try to request a moment later",
                    "err-http-503": "System is busy, please try again later",
                    "err-http-504": "System is busy, please try again later",
                    "err-http-default": "System is busy, please try again later",
                    "err-http-timeout": "Request timed out, please check your network status",
                    OK: "OK",
                    "dialog-i-understand": "I understand",
                    "default-error-message": "System busy, please try again later."
                },
                Le = !1,
                Oe = function(e) {
                    var t = e.i18nHost,
                        n = e.language;
                    return new Promise((function(e) {
                        Le && e(Te), De ? De.then((function(t) {
                            return e(t)
                        })).catch((function() {
                            De = null, e(Te)
                        })) : null === (De = (0, Ie.TU)({
                            basePath: t,
                            locale: n,
                            namespace: "universal",
                            fallback: "en"
                        })) || void 0 === De || De.then((function(t) {
                            Le = !0, Te = t, e(t)
                        })).catch((function(t) {
                            console.error(t), De = null, e(Te)
                        }))
                    }))
                },
                Pe = function(e) {
                    var t = e.message,
                        n = e.title,
                        r = e.toastOpts;
                    (0, Y.rG)(t, (0, v.A)({
                        header: n,
                        variant: "error"
                    }, r))
                },
                Be = function(e, t) {
                    return t["err-http-".concat(e)] || t["err-http-default"]
                },
                Fe = function(e) {
                    var t, n = e.response,
                        r = e.apiOpts;
                    if ((t = n.status) >= 200 && t < 300) return !1;
                    var a = (r || {}).enableHttpStatusDefaultMsgInterceptor;
                    return !(void 0 !== a && !a)
                },
                je = function() {
                    var e = (0, r.A)(ye().mark((function e(t) {
                        var n, r, a, o, i, c, l, s, u, d;
                        return ye().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.response, r = t.apiOpts, a = t.globalOpts, Fe({
                                            response: n,
                                            apiOpts: r
                                        })) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 3:
                                    return o = a.enableAutoToast, i = a.i18nHost, c = a.language, l = a.toastOpts, e.next = 7, Oe({
                                        i18nHost: i,
                                        language: c
                                    });
                                case 7:
                                    return u = e.sent, e.prev = 8, e.next = 12, null === (d = null === n || void 0 === n ? void 0 : n.clone()) || void 0 === d ? void 0 : d.json();
                                case 12:
                                    throw s = e.sent, new Error(s.message);
                                case 16:
                                    throw e.prev = 16, e.t0 = e.catch(8), e.t0.defaultErrorMessage = e.t0.message, s && s.message || (e.t0.message = Be(n.status, u)), e.t0.status = n.status, e.t0.errorMsg = s || {}, o && Pe({
                                        message: e.t0.message,
                                        toastOpts: l
                                    }), e.t0;
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [8, 16]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Re = n("1eoB"),
                ze = n("HDxn"),
                He = n("cJDP"),
                Ne = (n("F63i"), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = window.location.hostname,
                        r = n.split(".");
                    return "https://www.".concat(r.length > 2 ? r.slice(-e).join(".") : n, "/").concat(t)
                }),
                Ue = function(e) {
                    var t = e.onClose,
                        n = e.title,
                        r = e.message,
                        a = e.okText,
                        o = e.cancelText,
                        i = e.linkTitle,
                        c = e.linkUrl,
                        s = e.closeAble,
                        u = void 0 === s || s,
                        d = e.code,
                        p = Boolean(n),
                        f = d ? "error-dialog-ok-button-".concat(d) : "error-dialog-ok-button",
                        m = d ? "error-dialog-cancel-button-".concat(d) : "error-dialog-cancel-button",
                        h = d ? "error-dialog-text-".concat(d) : "error-dialog-text";
                    return l().createElement(A.A, {
                        flexDirection: "column",
                        alignItems: "center",
                        width: ["calc(100vw - 32px)", "360px", "360px"],
                        maxWidth: "360px",
                        p: "28px 24px",
                        textAlign: "center",
                        bg: "modalBg"
                    }, l().createElement(Re.A, {
                        size: 85,
                        mb: "16px"
                    }), p && l().createElement(D.A, {
                        variant: "headline6",
                        mb: "xs",
                        color: "t.primary"
                    }, n), l().createElement(D.A, {
                        variant: p ? "body2" : "subtitle1",
                        color: p ? "t.third" : "t.primary",
                        mb: "md",
                        textAlign: "center",
                        maxHeight: "140px",
                        overflowY: "auto",
                        overflowX: "hidden",
                        px: "2px",
                        sx: {
                            wordBreak: "break-word"
                        },
                        "data-testid": h
                    }, r), c && i ? l().createElement(A.A, {
                        flexDirection: "column",
                        width: "100%"
                    }, l().createElement(ze.A, {
                        target: "_blank",
                        href: "".concat(Ne(2, c)),
                        title: i
                    }, l().createElement(He.A, {
                        sz: "normal",
                        variant: "default",
                        colorStyle: "flatprimary",
                        width: "100%",
                        height: "40px"
                    }, l().createElement(D.A, {
                        sx: {
                            wordBreak: "break-word",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            fontSize: 2
                        }
                    }, i))), l().createElement(He.A, {
                        "data-testid": m,
                        sz: "normal",
                        variant: "text",
                        mt: "10px",
                        fontSize: 2,
                        onClick: t
                    }, o)) : u && l().createElement(He.A, {
                        sz: "normal",
                        variant: "default",
                        colorStyle: "flatprimary",
                        flex: "1",
                        width: 1,
                        height: "40px",
                        onClick: t,
                        "data-testid": f
                    }, a))
                };
            var Ve = function(e) {
                    var t = e.message,
                        n = e.title,
                        r = e.linkUrl,
                        a = e.linkTitle,
                        o = e.i18n,
                        i = e.code,
                        c = e.closeAble,
                        s = void 0 === c || c;
                    ! function(e) {
                        var t = (0, Y.aF)({
                            content: l().createElement(Ue, (0, E.A)({
                                onClose: function() {
                                    return t()
                                }
                            }, e)),
                            needCloseIcon: !1,
                            sx: {
                                p: 0,
                                bg: "unset",
                                borderRadius: "8px"
                            }
                        }).close
                    }({
                        message: t,
                        title: n,
                        okText: o["dialog-i-understand"] || "I understand",
                        cancelText: o["dialog-Cancel"] || "Cancel",
                        linkTitle: a,
                        linkUrl: r,
                        closeAble: s,
                        code: i
                    })
                },
                Ze = "dialog",
                Ge = "toast";

            function Ke(e) {
                var t = e.url,
                    n = e.res,
                    r = e.options;
                console.groupCollapsed("Response Interceptor Matched ".concat(t)), console.log("Request url is ".concat(t)), console.log("Res is ".concat(JSON.stringify(n))), console.log("Api options is ".concat(JSON.stringify(r))), console.groupEnd()
            }

            function We(e, t) {
                return e === t || Boolean(-1 !== (null === e || void 0 === e ? void 0 : e.indexOf(t))) || new RegExp(t).test(e)
            }

            function qe(e) {
                var t = e.res,
                    n = e.i18n,
                    r = e.defaultMsg,
                    a = e.toastOpts,
                    o = e.enableErrorDialogOnly,
                    i = t || {},
                    c = i.messageDetail,
                    l = i.message,
                    s = i.code,
                    u = c || {},
                    d = u.type,
                    p = u.title,
                    f = u.linkUrl,
                    m = u.linkTitle,
                    h = l || r || n["default-error-message"] || "System busy, please try again later.";
                d !== Ge && d || o || Pe({
                    message: h,
                    title: p,
                    toastOpts: a
                }), d === Ze && Ve({
                    message: h,
                    linkUrl: f,
                    linkTitle: m,
                    i18n: n,
                    title: p,
                    code: s
                })
            }
            var Ye = function() {
                    var e = (0, r.A)(ye().mark((function e(t) {
                        var n, r, a, o, i, c, l, s, u, d, p, f, m, h, y, g, k, w, b, x, C, E, _, A, S, M, I, D;
                        return ye().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = t.response, r = t.apiOpts, a = t.globalOpts, e.next = 4;
                                    break;
                                case 4:
                                    if ("function" !== typeof(null === n || void 0 === n ? void 0 : n.clone)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7, null === (o = null === n || void 0 === n ? void 0 : n.clone()) || void 0 === o ? void 0 : o.json();
                                case 7:
                                    e.t0 = e.sent, e.next = 11;
                                    break;
                                case 10:
                                    e.t0 = {};
                                case 11:
                                    if (c = e.t0, l = c.code, void 0 !== (s = c.success) && !0 !== s) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 15:
                                    u = {
                                        globalOpts: a = a || {},
                                        apiOpts: r = r || {},
                                        res: c,
                                        response: n
                                    }, d = !0, p = !1, f = void 0, e.prev = 19, m = (a.plugins || [])[Symbol.iterator]();
                                case 21:
                                    if (d = (h = m.next()).done) {
                                        e.next = 30;
                                        break
                                    }
                                    if (y = h.value, !u.skipAllPlugins) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.abrupt("break", 30);
                                case 25:
                                    return e.next = 27, null === y || void 0 === y ? void 0 : y.apply(u);
                                case 27:
                                    d = !0, e.next = 21;
                                    break;
                                case 30:
                                    e.next = 36;
                                    break;
                                case 32:
                                    e.prev = 32, e.t1 = e.catch(19), p = !0, f = e.t1;
                                case 36:
                                    e.prev = 36, e.prev = 37, d || null == m.return || m.return();
                                case 39:
                                    if (e.prev = 39, !p) {
                                        e.next = 42;
                                        break
                                    }
                                    throw f;
                                case 42:
                                    return e.finish(39);
                                case 43:
                                    return e.finish(36);
                                case 44:
                                    if (g = (null === (i = a.excludeErrorCode || []) || void 0 === i ? void 0 : i.concat(r.excludeErrorCode || [])) || [], k = (0, v.A)({}, a.customCode, r.customCode), w = r.enableErrorMsgIntercept, b = r.enableErrorDialogOnly, x = a.debug, C = void 0 !== x && x, E = a.enable, _ = void 0 !== E && E, A = a.i18nHost, S = a.language, M = a.toastOpts, void 0 === w ? _ : w) {
                                        e.next = 51;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 51:
                                    if (!(null === g || void 0 === g ? void 0 : g.some((function(e) {
                                            return We(l, e)
                                        })))) {
                                        e.next = 53;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 53:
                                    if (I = !1, Object.keys(k).forEach((function(e) {
                                            var t;
                                            We(l, e) && (I = !0, null === k || void 0 === k || null === (t = k[e]) || void 0 === t || t.call(k, c))
                                        })), !I) {
                                        e.next = 57;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 57:
                                    return e.prev = 57, C && Ke({
                                        url: n.url,
                                        res: c,
                                        options: r
                                    }), e.next = 61, Oe({
                                        i18nHost: A,
                                        language: S
                                    });
                                case 61:
                                    D = e.sent, qe({
                                        res: c,
                                        i18n: D,
                                        defaultMsg: r.defaultMsg || a.defaultMsg || "",
                                        toastOpts: M,
                                        enableErrorDialogOnly: b
                                    }), e.next = 68;
                                    break;
                                case 65:
                                    e.prev = 65, e.t2 = e.catch(57), console.error("http error msg interceptor error", e.t2);
                                case 68:
                                    return e.abrupt("return", n);
                                case 69:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [19, 32, 36, 44],
                            [37, , 39, 43],
                            [57, 65]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Xe = n("888e");
            const Je = function(e) {
                return l().createElement(T.A, (0, E.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 97",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M66 8.088l4 4 4-4-4-4-4 4zM41 91.088l3 3 3-3-3-3-3 3zM14 87.088h3v-3h-3v3z",
                    fill: "#E6E8EA"
                }), l().createElement("path", {
                    d: "M6 18.088h84v60H6v-60z",
                    fill: "url(#kyc-light_svg__paint0_linear)"
                }), l().createElement("path", {
                    d: "M6 49.088h84v29H6v-29z",
                    fill: "url(#kyc-light_svg__paint1_linear)"
                }), l().createElement("path", {
                    fill: "#fff",
                    d: "M14 31.088h24v34H14z"
                }), l().createElement("path", {
                    fill: "#fff",
                    d: "M14 31.088h24v18H14z"
                }), l().createElement("path", {
                    d: "M33 44.089a7 7 0 10-14.001 0 7 7 0 0014 0z",
                    fill: "url(#kyc-light_svg__paint2_linear)"
                }), l().createElement("path", {
                    d: "M14 55.088v12h24v-12h-7l-5 5-5-5h-7z",
                    fill: "url(#kyc-light_svg__paint3_linear)"
                }), l().createElement("path", {
                    d: "M45 31.088h19v4H45v-4z",
                    fill: "url(#kyc-light_svg__paint4_linear)"
                }), l().createElement("path", {
                    d: "M45 43.088h37v4H45v-4z",
                    fill: "url(#kyc-light_svg__paint5_linear)"
                }), l().createElement("path", {
                    fill: "#76808F",
                    d: "M45 55.088h37v4H45zM45 63.088h37v4H45z"
                }), l().createElement("path", {
                    d: "M32.999 44.089a7 7 0 11-14 0 7 7 0 0114 0z",
                    fill: "url(#kyc-light_svg__paint6_linear)"
                }), l().createElement("path", {
                    d: "M31.744 48.088a6.992 6.992 0 01-5.745 3 6.992 6.992 0 01-5.746-3h11.491z",
                    fill: "#E6E8EA"
                }), l().createElement("path", {
                    d: "M0 47.088h96v4H0v-4z",
                    fill: "#76808F"
                }), l().createElement("defs", null, l().createElement("linearGradient", {
                    id: "kyc-light_svg__paint0_linear",
                    x1: 48,
                    y1: 18.088,
                    x2: 48,
                    y2: 78.088,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#929AA5"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), l().createElement("linearGradient", {
                    id: "kyc-light_svg__paint1_linear",
                    x1: 90,
                    y1: 49.845,
                    x2: 90,
                    y2: 77.088,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#FAFAFA"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#E6E8EA"
                })), l().createElement("linearGradient", {
                    id: "kyc-light_svg__paint2_linear",
                    x1: 26,
                    y1: 37.088,
                    x2: 26,
                    y2: 67.088,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#929AA5"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), l().createElement("linearGradient", {
                    id: "kyc-light_svg__paint3_linear",
                    x1: 26,
                    y1: 37.088,
                    x2: 26,
                    y2: 67.088,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#929AA5"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), l().createElement("linearGradient", {
                    id: "kyc-light_svg__paint4_linear",
                    x1: 45,
                    y1: 39.088,
                    x2: 82,
                    y2: 39.088,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#F0B90B"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), l().createElement("linearGradient", {
                    id: "kyc-light_svg__paint5_linear",
                    x1: 45,
                    y1: 39.088,
                    x2: 82,
                    y2: 39.088,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#F0B90B"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), l().createElement("linearGradient", {
                    id: "kyc-light_svg__paint6_linear",
                    x1: 25.999,
                    y1: 51.089,
                    x2: 25.999,
                    y2: 37.089,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#F0B90B"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            var Qe = n("a59x"),
                $e = n("vpUY"),
                et = n("T9BW"),
                tt = function() {
                    return function(e) {
                        return window.location.href = e
                    }
                },
                nt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        web: "",
                        app: "",
                        electron: ""
                    };
                    return (0, $e.S)().isHybrid ? e.app : e.web
                },
                rt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            web: "",
                            app: "",
                            electron: ""
                        },
                        t = tt(),
                        n = nt(e);
                    return function() {
                        return t(n)
                    }
                },
                at = function(e, t) {
                    var n = (0, et.useTranslation)("kyc-errorCode"),
                        r = n.t,
                        a = n.i18n.language;
                    return (0, c.useMemo)((function() {
                        return function(e) {
                            var t = e.t,
                                n = e.language,
                                r = e.code,
                                a = e.close;
                            return {
                                200003903: {
                                    Icon: Je,
                                    title: t("false-title"),
                                    message: t("false-message"),
                                    buttons: [l().createElement(He.A, {
                                        key: "cancel",
                                        sz: "normal",
                                        flex: "1",
                                        width: 1,
                                        variant: "default",
                                        colorStyle: "secondary",
                                        mr: [0, 2],
                                        onClick: a
                                    }, t("Cancel")), l().createElement(He.A, {
                                        key: "submit",
                                        sz: "normal",
                                        flex: "1",
                                        width: 1,
                                        variant: "default",
                                        colorStyle: "flatprimary",
                                        mb: [2, 0],
                                        onClick: function() {
                                            a(), rt({
                                                web: "https://www.".concat((0, Qe.bG)(), "/").concat(n, "/my/settings/profile"),
                                                app: "bnc://app.binance.com/account/identityAuthentication",
                                                electron: "binance://account/kyc"
                                            })()
                                        }
                                    }, t("Verify Again"))]
                                },
                                200003904: {
                                    Icon: Je,
                                    title: t("none-title"),
                                    message: l().createElement(l().Fragment, null, t("none-message"), l().createElement(ze.A, {
                                        sx: {
                                            display: "inline",
                                            ml: 1
                                        },
                                        variant: "standardLink",
                                        target: "_blank",
                                        href: "https://www.".concat((0, Qe.bG)(), "/").concat(n, "/support/announcement/51bf294e26324211a4731ca998e110ca")
                                    }, t("Learn more"))),
                                    buttons: [l().createElement(He.A, {
                                        key: "cancel",
                                        sz: "normal",
                                        flex: "1",
                                        width: 1,
                                        variant: "default",
                                        colorStyle: "secondary",
                                        mr: [0, 2],
                                        onClick: a
                                    }, t("Cancel")), l().createElement(He.A, {
                                        key: "submit",
                                        sz: "normal",
                                        flex: "1",
                                        width: 1,
                                        variant: "default",
                                        colorStyle: "flatprimary",
                                        mb: [2, 0],
                                        onClick: function() {
                                            a(), rt({
                                                web: "https://www.".concat((0, Qe.bG)(), "/").concat(n, "/my/settings/profile"),
                                                app: "bnc://app.binance.com/account/identityAuthentication",
                                                electron: "binance://account/kyc"
                                            })()
                                        }
                                    }, t("Verify Now"))]
                                },
                                200003905: {
                                    Icon: Je,
                                    title: t("review-title"),
                                    message: t("review-message"),
                                    buttons: [l().createElement(He.A, {
                                        key: "cancel",
                                        sz: "normal",
                                        flex: "1",
                                        width: 1,
                                        variant: "default",
                                        colorStyle: "flatprimary",
                                        onClick: a
                                    }, t("Close"))]
                                },
                                200003906: {
                                    Icon: Re.A,
                                    title: t("refuse-title"),
                                    message: t("refuse-message"),
                                    buttons: [l().createElement(He.A, {
                                        key: "cancel",
                                        sz: "normal",
                                        flex: "1",
                                        width: 1,
                                        variant: "default",
                                        colorStyle: "secondary",
                                        mr: [0, 2],
                                        onClick: a
                                    }, t("Cancel")), l().createElement(He.A, {
                                        key: "submit",
                                        sz: "normal",
                                        flex: "1",
                                        width: 1,
                                        variant: "default",
                                        colorStyle: "flatprimary",
                                        mb: [2, 0],
                                        onClick: function() {
                                            a(), rt({
                                                web: "https://www.".concat((0, Qe.bG)(), "/").concat(n, "/my/wallet/account/main/withdrawal/crypto/BTC"),
                                                app: "bnc://app.binance.com/funds/withdrawChooseCoin",
                                                electron: "binance://account/withdraw/crypto/BTC"
                                            })()
                                        }
                                    }, t("Withdraw"))]
                                },
                                200003909: {
                                    Icon: Re.A,
                                    title: t("sg-title"),
                                    message: t("sg-message"),
                                    buttons: [l().createElement(He.A, {
                                        key: "cancel",
                                        sz: "normal",
                                        flex: "1",
                                        width: 1,
                                        variant: "default",
                                        colorStyle: "flatprimary",
                                        onClick: a
                                    }, t("Close"))]
                                }
                            }[r] || {}
                        }({
                            t: r,
                            language: a,
                            code: e,
                            close: t
                        })
                    }), [e, r, a, t])
                },
                ot = function(e) {
                    var t = e.code,
                        n = e.close,
                        r = at(t, n);
                    return l().createElement(A.A, {
                        flexDirection: "column",
                        alignItems: "center",
                        width: ["calc(100vw - 32px)", "360px", "360px"],
                        maxWidth: "360px",
                        p: "28px 24px",
                        textAlign: "center",
                        bg: "tooltipBg"
                    }, l().createElement(r.Icon, {
                        size: 85
                    }), l().createElement(D.A, {
                        variant: "headline6",
                        mt: 3,
                        color: "t.primary"
                    }, r.title), l().createElement(D.A, {
                        variant: "body2",
                        mt: 2,
                        color: "t.third"
                    }, r.message), l().createElement(A.A, {
                        flexDirection: ["column-reverse", "row", "row"],
                        width: "100%",
                        mt: 4
                    }, r.buttons))
                };

            function it(e, t) {
                var n = (0, Y.aF)({
                    content: l().createElement(ot, {
                        code: e,
                        close: function() {
                            n(), t && t(e)
                        }
                    }),
                    needCloseIcon: !1,
                    sx: {
                        p: 0,
                        bg: "unset",
                        borderRadius: "8px"
                    }
                }).close
            }

            function ct(e) {
                return lt.apply(this, arguments)
            }

            function lt() {
                return lt = (0, r.A)(ye().mark((function e(t) {
                    var n, r, a, o;
                    return ye().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.i18nInstance, r = t.language, a = t.i18nHost, o = t.namespace, !(null === n || void 0 === n ? void 0 : n.hasResourceBundle(r, o))) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (null !== n && void 0 !== n) {
                                    e.next = 7;
                                    break
                                }
                                e.next = 14;
                                break;
                            case 7:
                                return e.t0 = n, e.t1 = r, e.t2 = o, e.next = 12, (0, Ie.TU)({
                                    basePath: a,
                                    locale: r,
                                    namespace: o,
                                    fallback: "en"
                                });
                            case 12:
                                e.t3 = e.sent, e.t0.addResourceBundle.call(e.t0, e.t1, e.t2, e.t3, !0, !0);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), lt.apply(this, arguments)
            }
            var st = function() {
                    function e(t) {
                        (0, Xe.A)(this, e), this.opts = {}, this.opts = t || {}
                    }
                    return e.prototype.apply = function(e) {
                        var t = this;
                        return (0, r.A)(ye().mark((function n() {
                            var r, a, o, i, c;
                            return ye().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.res.code, a = e.globalOpts, o = a.language, i = a.i18nInstance, c = a.i18nHost, !new RegExp("20000390[34569]").test(r)) {
                                            n.next = 6;
                                            break
                                        }
                                        return e.globalOpts.enable = !1, n.next = 5, ct({
                                            language: o,
                                            i18nInstance: i,
                                            i18nHost: c,
                                            namespace: "kyc-errorCode"
                                        });
                                    case 5:
                                        it(r, t.opts.onClose);
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e
                }(),
                ut = n("hTvQ"),
                dt = n.n(ut),
                pt = n("S8bp"),
                ft = n("8fYl"),
                mt = n("Ki6D"),
                ht = n("kxKT"),
                vt = n("OolH"),
                yt = 0,
                gt = new function e() {
                    var t = this;
                    (0, Xe.A)(this, e), this.show = function(e) {
                        var n = e.isLight,
                            r = void 0 === n || n,
                            a = e.message,
                            o = void 0 === a ? "" : a,
                            i = e.okText,
                            c = void 0 === i ? "" : i,
                            s = e.sx,
                            u = e.onClose,
                            d = t,
                            p = document.getElementById(t.id);
                        p || ((p = document.createElement("div")).id = t.id, document.body.appendChild(p)), dt().unmountComponentAtNode(p), requestAnimationFrame((function() {
                            var e = d;
                            dt().render(l().createElement(pt.A, {
                                theme: r ? ft.A : mt.A
                            }, l().createElement(ht.A, {
                                visible: !0,
                                sx: (0, v.A)({
                                    width: ["85%", "360px", "360px"],
                                    p: "md"
                                }, s)
                            }, l().createElement(A.A, {
                                flexDirection: "column",
                                alignItems: "center"
                            }, l().createElement(vt.A, {
                                mt: ["minor", "xs"],
                                mb: "md",
                                sx: {
                                    fontSize: [60, 96]
                                }
                            }), l().createElement(D.A, {
                                variant: "body2",
                                mb: ["sm", "md"],
                                color: "t.third",
                                textAlign: "center",
                                sx: {
                                    maxHeight: ["200px", "254px", "254px"],
                                    overflow: "auto"
                                }
                            }, o), l().createElement(He.A, {
                                sz: "l",
                                width: "100%",
                                onClick: function() {
                                    e.close(), null === u || void 0 === u || u()
                                }
                            }, c)))), p)
                        }))
                    }, this.close = function() {
                        var e = document.getElementById(t.id);
                        e && dt().unmountComponentAtNode(e)
                    }, this.id = "kycDialog".concat(yt), yt++
                };
            const kt = gt;
            n("F63i");
            var wt = function() {
                    function e(t) {
                        (0, Xe.A)(this, e), this.opts = {}, this.opts = t || {}
                    }
                    return e.prototype.apply = function(e) {
                        var t = this;
                        return (0, r.A)(ye().mark((function n() {
                            var r, a, o, i, c, l, s, u, d, p, f, m, h, v;
                            return ye().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.res, a = r.code, o = r.message, i = r.messageDetail, c = e.globalOpts, l = c.language, s = c.i18nInstance, u = c.i18nHost, d = e.response.url, p = t.opts, f = p.onClose, m = p.isLight, h = p.shouldSkip, !new RegExp("(?=^200003)(?!20000390[34569])").test(a) || (null === i || void 0 === i ? void 0 : i.type)) {
                                            n.next = 10;
                                            break
                                        }
                                        return e.globalOpts.enable = !1, n.next = 7, ct({
                                            language: l,
                                            i18nInstance: s,
                                            i18nHost: u,
                                            namespace: "universal"
                                        });
                                    case 7:
                                        if (!h || !h({
                                                url: d,
                                                code: a
                                            })) {
                                            n.next = 9;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 9:
                                        kt.show({
                                            isLight: void 0 === m ? null === (v = document.cookie) || void 0 === v ? void 0 : v.includes("light") : m,
                                            message: o,
                                            okText: null === s || void 0 === s ? void 0 : s.t("universal:dialog-i-understand"),
                                            onClose: f
                                        });
                                    case 10:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e
                }(),
                bt = n("wYc8"),
                xt = n("HcTV"),
                Ct = function() {
                    function e() {
                        (0, Xe.A)(this, e)
                    }
                    return e.prototype.apply = function(e) {
                        return (0, r.A)(o().mark((function t() {
                            var n, r, a, i, c, l, s;
                            return o().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.res, r = n.code, a = n.message, i = n.messageDetail, c = e.globalOpts.language, t.prev = 1, !new RegExp("20000397[3467]").test(r)) {
                                            t.next = 10;
                                            break
                                        }
                                        return e.skipAllPlugins = !0, e.globalOpts.enable = !1, t.next = 8, (0, bt.A)({
                                            title: "",
                                            message: a,
                                            confirmText: (null === i || void 0 === i ? void 0 : i.linkTitle) || (null === (l = (0, xt.TO)()) || void 0 === l ? void 0 : l.t("c2c-ui-iknow")),
                                            cancelText: null === (s = (0, xt.TO)()) || void 0 === s ? void 0 : s.t("c2c-ui-cancel"),
                                            needCloseIcon: !0
                                        });
                                    case 8:
                                        t.sent && (window.location.href = "".concat(ne.A.MAIN_HOST, "/").concat(c, "/").concat((null === i || void 0 === i ? void 0 : i.linkUrl) || "compliance/france-terms-and-conditions"));
                                    case 10:
                                        t.next = 14;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(1);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 12]
                            ])
                        })))()
                    }, e
                }(),
                Et = function(e) {
                    var t = e.message,
                        n = e.onCancel,
                        r = (0, xt.Ay)().t;
                    return (0, i.jsxs)(I.A, {
                        width: "312px",
                        sx: {
                            textAlign: "center"
                        },
                        children: [(0, i.jsx)(A.A, {
                            className: "justify-center",
                            children: (0, i.jsx)(Re.A, {
                                size: 96,
                                mb: "sm"
                            })
                        }), (0, i.jsx)(D.A, {
                            color: "t.third",
                            children: t
                        }), (0, i.jsx)(ze.A, {
                            href: "/userCenter/restrictions",
                            children: (0, i.jsx)(He.A, {
                                width: 1,
                                mt: "md",
                                sz: "normal",
                                children: r("c2c-user-restriction-remove")
                            })
                        }), (0, i.jsx)(He.A, {
                            width: 1,
                            variant: "quiet",
                            onClick: n,
                            children: r("c2c-ui-cancel")
                        })]
                    })
                },
                _t = function(e) {
                    var t = (0, Y.aF)({
                        needCloseIcon: !1,
                        content: (0, i.jsx)(Et, {
                            message: e,
                            onCancel: function() {
                                return t()
                            }
                        })
                    }).close
                },
                At = ["083021", "083804", "083805", "083713", "083714", "083715", "083716", "083717", "083718", "083719", "083720", "083721", "083722", "083723", "083727", "083728", "083729", "083730", "083731", "083061"];
            const St = function() {
                function e() {
                    (0, Xe.A)(this, e)
                }
                return e.prototype.apply = function(e) {
                    return (0, r.A)(o().mark((function t() {
                        var n, r, a;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    n = e.res, r = n.code, a = n.message, At.includes(r) && _t(a);
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }, e
            }();
            var Mt = re.HN,
                It = ["MFA_CANCEL", "031101", "083747", "083750", "083689", "000000", "100001005", "083637", "083022", "000002", "083913", "083020", me.oF, re.Nk.BLOCKED_BY_ADVERTISER, re.Nk.BLOCKING_ADVERTISER].concat((0, w.A)(me.w5), (0, w.A)(me.Wz), (0, w.A)(re.hW), (0, w.A)(Object.values(re.dE)), (0, w.A)(Object.values(re.UR)), (0, w.A)(At), (0, w.A)(me.UQ), (0, w.A)(me.hw), [me.WU, me.uE, me.P0, me.Aw]),
                Dt = function() {
                    var e = (0, r.A)(o().mark((function e(t, n, r) {
                        var a, i;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return Se(t, {
                                        excludes: ["/cms"],
                                        opts: r,
                                        enableServer: !0
                                    }), e.next = 4, je({
                                        response: t,
                                        apiOpts: n,
                                        globalOpts: {
                                            language: null !== (a = (0, xt.TO)().language) && void 0 !== a ? a : "",
                                            i18nHost: Mt,
                                            enableAutoToast: !1,
                                            toastOpts: {
                                                anchorOrigin: {
                                                    horizontal: "right",
                                                    vertical: "top"
                                                }
                                            },
                                            excludeErrorCode: ["MFA_CANCEL"]
                                        }
                                    });
                                case 4:
                                    return Ye({
                                        response: t,
                                        apiOpts: n,
                                        globalOpts: {
                                            i18nHost: Mt,
                                            i18nInstance: (0, xt.TO)(),
                                            language: null !== (i = (0, xt.TO)().language) && void 0 !== i ? i : "",
                                            enable: !0,
                                            excludeErrorCode: (0, w.A)(It).concat([he.ZL]),
                                            plugins: [new Ct, new st, new wt, new St, new he.Ay({
                                                excludeErrorCodes: It
                                            })],
                                            debug: !1
                                        }
                                    }), e.abrupt("return", t);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }();
            const Tt = function() {
                (0, c.useEffect)((function() {
                    try {
                        var e, t = document.createElement("style");
                        t.innerHTML = "#onetrust-consent-sdk{display:none!important}", document.head.appendChild(t);
                        var n = function() {
                            t.parentNode && document.head.removeChild(t)
                        };
                        if (null === window || void 0 === window || null === (e = window.OneTrust) || void 0 === e ? void 0 : e.ToggleInfoDisplay) {
                            var r = window.OneTrust.ToggleInfoDisplay;
                            window.OneTrust.ToggleInfoDisplay = function() {
                                n(), setTimeout((function() {
                                    r.apply(window.OneTrust)
                                }), 0)
                            }
                        }
                        try {
                            var a, o;
                            (null === window || void 0 === window || null === (a = window.location) || void 0 === a || null === (o = a.pathname) || void 0 === o ? void 0 : o.includes("/h5-content")) || setTimeout((function() {
                                n()
                            }), 6e3)
                        } catch (i) {
                            console.error(i)
                        }
                    } catch (c) {
                        console.error(c)
                    }
                }), [])
            };
            var Lt = re.ur;
            (0, f.addResponseInterceptor)(Dt), (0, f.addRequestInterceptor)((function(e, t) {
                return t.headers.c2ctype = "c2c_web", [e, t]
            }));
            var Ot = function() {
                return (0, i.jsx)("div", {})
            };
            const Pt = function() {
                var e = (0, J.L)(),
                    t = e.lng,
                    n = e.pageProps,
                    a = n.configs,
                    l = n.metaData,
                    f = e.isPassEntry;
                te(), Tt();
                var h = (0, s.Pj)(),
                    v = (0, ae.wA)(),
                    y = (0, ie.A)(),
                    g = y.setFlag,
                    k = (0, y.getFlag)();
                return (0, c.useEffect)((function() {
                    v.common.getWssConfig()
                }), []), (0, c.useEffect)((function() {
                    var e = function() {
                        var e = (0, r.A)(o().mark((function e() {
                            var n;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, m.U)({
                                            staticUrl: re.K5,
                                            origin: ne.A.MAIN_HOST,
                                            locale: t,
                                            albHost: Lt,
                                            teamId: re.u
                                        });
                                    case 2:
                                        n = e.sent, v.common.update({
                                            navigationConfigs: n
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    f ? g() : !f && k && e()
                }), [a, f, k]), (0, i.jsx)(c.Suspense, {
                    fallback: (0, i.jsx)(Ot, {}),
                    children: (0, i.jsx)(X.C_, {
                        lang: t,
                        queryClient: oe.qQ,
                        runtimeConfig: {
                            API_HOST_PRIVATE: re.CJ
                        },
                        c2cType: "c2c_web",
                        children: (0, i.jsx)(s.Kq, {
                            store: h,
                            children: (0, i.jsx)(ce.aj, {
                                children: (0, i.jsx)($.A, {
                                    children: (0, i.jsx)(Z, {
                                        children: (0, i.jsxs)(pe, {
                                            children: [(0, i.jsx)(fe.B.Provider, {
                                                value: {
                                                    configs: a,
                                                    metaData: l
                                                },
                                                children: (0, i.jsx)(d.A, {
                                                    children: (0, i.jsx)(q, {
                                                        children: (0, i.jsxs)(p.A, {
                                                            children: [Y.j7, (0, i.jsx)(Q.Tp, {})]
                                                        })
                                                    })
                                                })
                                            }), (0, i.jsx)(u, {
                                                initialIsOpen: !0
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        J0xf: (e, t, n) => {
            "use strict";
            n.d(t, {
                Hy: () => l,
                og: () => u,
                rf: () => s
            });
            var r = n("zJWh"),
                a = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return r.U.write(e, t, n, a)
                },
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return r.U.read(e, t)
                },
                i = function(e) {
                    return r.U.erase(e)
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = {
                            get: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return o(e, t)
                            },
                            set: function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 365,
                                    r = arguments.length > 2 ? arguments[2] : void 0;
                                return a(e, t, n, r)
                            },
                            delete: function() {
                                return i(e)
                            }
                        };
                    return t && (delete n.delete, delete n.set), n
                },
                l = c("bnc-uuid", !0),
                s = c("language", !0),
                u = (c("theme"), c("common_fiat"))
        },
        cPbI: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s,
                r: () => l
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("hyZw"),
                c = (0, a.createContext)({
                    getCoachMark: i.es,
                    showCoachMark: i.es,
                    preCoachMark: i.es,
                    nextCoachMark: i.es,
                    closeCoachMark: i.es
                }),
                l = function() {
                    return o().useContext(c)
                };
            const s = function(e) {
                var t = e.children,
                    n = o().useState({}),
                    i = n[0],
                    l = n[1],
                    s = (0, a.useCallback)((function(e) {
                        l((function(t) {
                            var n = t.index,
                                a = void 0 === n ? 0 : n,
                                o = Math.max(a + e, 0);
                            return t.id ? (0, r.__assign)((0, r.__assign)({}, t), {
                                index: o
                            }) : t
                        }))
                    }), []),
                    u = {};
                return u.getCoachMark = (0, a.useCallback)((function(e) {
                    return i.id === e ? i.index : void 0
                }), [i]), u.showCoachMark = (0, a.useCallback)((function(e) {
                    return l({
                        id: e,
                        index: 0
                    })
                }), []), u.preCoachMark = (0, a.useCallback)((function() {
                    return s(-1)
                }), []), u.nextCoachMark = (0, a.useCallback)((function() {
                    return s(1)
                }), []), u.closeCoachMark = (0, a.useCallback)((function() {
                    return l({})
                }), []), o().createElement(c.Provider, {
                    value: u,
                    children: t
                })
            }
        },
        VXBK: (e, t, n) => {
            "use strict";
            n.d(t, {
                NP: () => d,
                DP: () => p
            });
            var r = n("OHGK"),
                a = n("DTvD"),
                o = n.n(a),
                i = n("f+pp");
            const c = function(e) {
                var t = new WeakMap;
                return function(n) {
                    if (t.has(n)) return t.get(n);
                    var r = e(n);
                    return t.set(n, r), r
                }
            };
            n("oXkQ");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var s = function(e, t) {
                    return "function" === typeof t ? t(e) : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(n, !0).forEach((function(t) {
                                (0, r.A)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e, {}, t)
                },
                u = c((function(e) {
                    return c((function(t) {
                        return s(e, t)
                    }))
                })),
                d = function(e) {
                    return (0, a.createElement)(i.Dx.Consumer, null, (function(t) {
                        return e.theme !== t && (t = u(t)(e.theme)), (0, a.createElement)(i.Dx.Provider, {
                            value: t
                        }, e.children)
                    }))
                };

            function p() {
                return o().useContext(i.Dx)
            }
        },
        FF9q: function(e, t, n) {
            var r = n("F63i");
            (function() {
                var t, n, a, o, i, c;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof r && null !== r && r.hrtime ? (e.exports = function() {
                    return (t() - i) / 1e6
                }, n = r.hrtime, o = (t = function() {
                    var e;
                    return 1e9 * (e = n())[0] + e[1]
                })(), c = 1e9 * r.uptime(), i = o - c) : Date.now ? (e.exports = function() {
                    return Date.now() - a
                }, a = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - a
                }, a = (new Date).getTime())
            }).call(this)
        },
        aHiY: (e, t, n) => {
            var r = n("u0rh");

            function a(e) {
                this.mode = r.MODE_8BIT_BYTE, this.data = e
            }
            a.prototype = {
                getLength: function(e) {
                    return this.data.length
                },
                write: function(e) {
                    for (var t = 0; t < this.data.length; t++) e.put(this.data.charCodeAt(t), 8)
                }
            }, e.exports = a
        },
        "8mpF": e => {
            function t() {
                this.buffer = new Array, this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    var t = Math.floor(e / 8);
                    return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
                },
                put: function(e, t) {
                    for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    var t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        FFk3: e => {
            e.exports = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }
        },
        "6Hy7": (e, t, n) => {
            var r = n("dmxF");

            function a(e, t) {
                if (void 0 == e.length) throw new Error(e.length + "/" + t);
                for (var n = 0; n < e.length && 0 == e[n];) n++;
                this.num = new Array(e.length - n + t);
                for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n]
            }
            a.prototype = {
                get: function(e) {
                    return this.num[e]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(e) {
                    for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                        for (var o = 0; o < e.getLength(); o++) t[n + o] ^= r.gexp(r.glog(this.get(n)) + r.glog(e.get(o)));
                    return new a(t, 0)
                },
                mod: function(e) {
                    if (this.getLength() - e.getLength() < 0) return this;
                    for (var t = r.glog(this.get(0)) - r.glog(e.get(0)), n = new Array(this.getLength()), o = 0; o < this.getLength(); o++) n[o] = this.get(o);
                    for (o = 0; o < e.getLength(); o++) n[o] ^= r.gexp(r.glog(e.get(o)) + t);
                    return new a(n, 0).mod(e)
                }
            }, e.exports = a
        },
        "1PNn": (e, t, n) => {
            var r = n("aHiY"),
                a = n("0p+c"),
                o = n("8mpF"),
                i = n("Tjmx"),
                c = n("6Hy7");

            function l(e, t) {
                this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            var s = l.prototype;
            s.addData = function(e) {
                var t = new r(e);
                this.dataList.push(t), this.dataCache = null
            }, s.isDark = function(e, t) {
                if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
                return this.modules[e][t]
            }, s.getModuleCount = function() {
                return this.moduleCount
            }, s.make = function() {
                if (this.typeNumber < 1) {
                    var e = 1;
                    for (e = 1; e < 40; e++) {
                        for (var t = a.getRSBlocks(e, this.errorCorrectLevel), n = new o, r = 0, c = 0; c < t.length; c++) r += t[c].dataCount;
                        for (c = 0; c < this.dataList.length; c++) {
                            var l = this.dataList[c];
                            n.put(l.mode, 4), n.put(l.getLength(), i.getLengthInBits(l.mode, e)), l.write(n)
                        }
                        if (n.getLengthInBits() <= 8 * r) break
                    }
                    this.typeNumber = e
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            }, s.makeImpl = function(e, t) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                for (var n = 0; n < this.moduleCount; n++) {
                    this.modules[n] = new Array(this.moduleCount);
                    for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null
                }
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = l.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
            }, s.setupPositionProbePattern = function(e, t) {
                for (var n = -1; n <= 7; n++)
                    if (!(e + n <= -1 || this.moduleCount <= e + n))
                        for (var r = -1; r <= 7; r++) t + r <= -1 || this.moduleCount <= t + r || (this.modules[e + n][t + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4)
            }, s.getBestMaskPattern = function() {
                for (var e = 0, t = 0, n = 0; n < 8; n++) {
                    this.makeImpl(!0, n);
                    var r = i.getLostPoint(this);
                    (0 == n || e > r) && (e = r, t = n)
                }
                return t
            }, s.createMovieClip = function(e, t, n) {
                var r = e.createEmptyMovieClip(t, n);
                this.make();
                for (var a = 0; a < this.modules.length; a++)
                    for (var o = 1 * a, i = 0; i < this.modules[a].length; i++) {
                        var c = 1 * i;
                        this.modules[a][i] && (r.beginFill(0, 100), r.moveTo(c, o), r.lineTo(c + 1, o), r.lineTo(c + 1, o + 1), r.lineTo(c, o + 1), r.endFill())
                    }
                return r
            }, s.setupTimingPattern = function() {
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
            }, s.setupPositionAdjustPattern = function() {
                for (var e = i.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                    for (var n = 0; n < e.length; n++) {
                        var r = e[t],
                            a = e[n];
                        if (null == this.modules[r][a])
                            for (var o = -2; o <= 2; o++)
                                for (var c = -2; c <= 2; c++) this.modules[r + o][a + c] = -2 == o || 2 == o || -2 == c || 2 == c || 0 == o && 0 == c
                    }
            }, s.setupTypeNumber = function(e) {
                for (var t = i.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                    var r = !e && 1 == (t >> n & 1);
                    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                }
                for (n = 0; n < 18; n++) {
                    r = !e && 1 == (t >> n & 1);
                    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                }
            }, s.setupTypeInfo = function(e, t) {
                for (var n = this.errorCorrectLevel << 3 | t, r = i.getBCHTypeInfo(n), a = 0; a < 15; a++) {
                    var o = !e && 1 == (r >> a & 1);
                    a < 6 ? this.modules[a][8] = o : a < 8 ? this.modules[a + 1][8] = o : this.modules[this.moduleCount - 15 + a][8] = o
                }
                for (a = 0; a < 15; a++) {
                    o = !e && 1 == (r >> a & 1);
                    a < 8 ? this.modules[8][this.moduleCount - a - 1] = o : a < 9 ? this.modules[8][15 - a - 1 + 1] = o : this.modules[8][15 - a - 1] = o
                }
                this.modules[this.moduleCount - 8][8] = !e
            }, s.mapData = function(e, t) {
                for (var n = -1, r = this.moduleCount - 1, a = 7, o = 0, c = this.moduleCount - 1; c > 0; c -= 2)
                    for (6 == c && c--;;) {
                        for (var l = 0; l < 2; l++)
                            if (null == this.modules[r][c - l]) {
                                var s = !1;
                                o < e.length && (s = 1 == (e[o] >>> a & 1)), i.getMask(t, r, c - l) && (s = !s), this.modules[r][c - l] = s, -1 == --a && (o++, a = 7)
                            }
                        if ((r += n) < 0 || this.moduleCount <= r) {
                            r -= n, n = -n;
                            break
                        }
                    }
            }, l.PAD0 = 236, l.PAD1 = 17, l.createData = function(e, t, n) {
                for (var r = a.getRSBlocks(e, t), c = new o, s = 0; s < n.length; s++) {
                    var u = n[s];
                    c.put(u.mode, 4), c.put(u.getLength(), i.getLengthInBits(u.mode, e)), u.write(c)
                }
                var d = 0;
                for (s = 0; s < r.length; s++) d += r[s].dataCount;
                if (c.getLengthInBits() > 8 * d) throw new Error("code length overflow. (" + c.getLengthInBits() + ">" + 8 * d + ")");
                for (c.getLengthInBits() + 4 <= 8 * d && c.put(0, 4); c.getLengthInBits() % 8 != 0;) c.putBit(!1);
                for (; !(c.getLengthInBits() >= 8 * d) && (c.put(l.PAD0, 8), !(c.getLengthInBits() >= 8 * d));) c.put(l.PAD1, 8);
                return l.createBytes(c, r)
            }, l.createBytes = function(e, t) {
                for (var n = 0, r = 0, a = 0, o = new Array(t.length), l = new Array(t.length), s = 0; s < t.length; s++) {
                    var u = t[s].dataCount,
                        d = t[s].totalCount - u;
                    r = Math.max(r, u), a = Math.max(a, d), o[s] = new Array(u);
                    for (var p = 0; p < o[s].length; p++) o[s][p] = 255 & e.buffer[p + n];
                    n += u;
                    var f = i.getErrorCorrectPolynomial(d),
                        m = new c(o[s], f.getLength() - 1).mod(f);
                    l[s] = new Array(f.getLength() - 1);
                    for (p = 0; p < l[s].length; p++) {
                        var h = p + m.getLength() - l[s].length;
                        l[s][p] = h >= 0 ? m.get(h) : 0
                    }
                }
                var v = 0;
                for (p = 0; p < t.length; p++) v += t[p].totalCount;
                var y = new Array(v),
                    g = 0;
                for (p = 0; p < r; p++)
                    for (s = 0; s < t.length; s++) p < o[s].length && (y[g++] = o[s][p]);
                for (p = 0; p < a; p++)
                    for (s = 0; s < t.length; s++) p < l[s].length && (y[g++] = l[s][p]);
                return y
            }, e.exports = l
        },
        "0p+c": (e, t, n) => {
            var r = n("FFk3");

            function a(e, t) {
                this.totalCount = e, this.dataCount = t
            }
            a.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], a.getRSBlocks = function(e, t) {
                var n = a.getRsBlockTable(e, t);
                if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                for (var r = n.length / 3, o = new Array, i = 0; i < r; i++)
                    for (var c = n[3 * i + 0], l = n[3 * i + 1], s = n[3 * i + 2], u = 0; u < c; u++) o.push(new a(l, s));
                return o
            }, a.getRsBlockTable = function(e, t) {
                switch (t) {
                    case r.L:
                        return a.RS_BLOCK_TABLE[4 * (e - 1) + 0];
                    case r.M:
                        return a.RS_BLOCK_TABLE[4 * (e - 1) + 1];
                    case r.Q:
                        return a.RS_BLOCK_TABLE[4 * (e - 1) + 2];
                    case r.H:
                        return a.RS_BLOCK_TABLE[4 * (e - 1) + 3];
                    default:
                        return
                }
            }, e.exports = a
        },
        dmxF: e => {
            for (var t = {
                    glog: function(e) {
                        if (e < 1) throw new Error("glog(" + e + ")");
                        return t.LOG_TABLE[e]
                    },
                    gexp: function(e) {
                        for (; e < 0;) e += 255;
                        for (; e >= 256;) e -= 255;
                        return t.EXP_TABLE[e]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, n = 0; n < 8; n++) t.EXP_TABLE[n] = 1 << n;
            for (n = 8; n < 256; n++) t.EXP_TABLE[n] = t.EXP_TABLE[n - 4] ^ t.EXP_TABLE[n - 5] ^ t.EXP_TABLE[n - 6] ^ t.EXP_TABLE[n - 8];
            for (n = 0; n < 255; n++) t.LOG_TABLE[t.EXP_TABLE[n]] = n;
            e.exports = t
        },
        u0rh: e => {
            e.exports = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            }
        },
        Tjmx: (e, t, n) => {
            var r = n("u0rh"),
                a = n("6Hy7"),
                o = n("dmxF"),
                i = 0,
                c = 1,
                l = 2,
                s = 3,
                u = 4,
                d = 5,
                p = 6,
                f = 7,
                m = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        for (var t = e << 10; m.getBCHDigit(t) - m.getBCHDigit(m.G15) >= 0;) t ^= m.G15 << m.getBCHDigit(t) - m.getBCHDigit(m.G15);
                        return (e << 10 | t) ^ m.G15_MASK
                    },
                    getBCHTypeNumber: function(e) {
                        for (var t = e << 12; m.getBCHDigit(t) - m.getBCHDigit(m.G18) >= 0;) t ^= m.G18 << m.getBCHDigit(t) - m.getBCHDigit(m.G18);
                        return e << 12 | t
                    },
                    getBCHDigit: function(e) {
                        for (var t = 0; 0 != e;) t++, e >>>= 1;
                        return t
                    },
                    getPatternPosition: function(e) {
                        return m.PATTERN_POSITION_TABLE[e - 1]
                    },
                    getMask: function(e, t, n) {
                        switch (e) {
                            case i:
                                return (t + n) % 2 == 0;
                            case c:
                                return t % 2 == 0;
                            case l:
                                return n % 3 == 0;
                            case s:
                                return (t + n) % 3 == 0;
                            case u:
                                return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                            case d:
                                return t * n % 2 + t * n % 3 == 0;
                            case p:
                                return (t * n % 2 + t * n % 3) % 2 == 0;
                            case f:
                                return (t * n % 3 + (t + n) % 2) % 2 == 0;
                            default:
                                throw new Error("bad maskPattern:" + e)
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var t = new a([1], 0), n = 0; n < e; n++) t = t.multiply(new a([1, o.gexp(n)], 0));
                        return t
                    },
                    getLengthInBits: function(e, t) {
                        if (1 <= t && t < 10) switch (e) {
                            case r.MODE_NUMBER:
                                return 10;
                            case r.MODE_ALPHA_NUM:
                                return 9;
                            case r.MODE_8BIT_BYTE:
                            case r.MODE_KANJI:
                                return 8;
                            default:
                                throw new Error("mode:" + e)
                        } else if (t < 27) switch (e) {
                            case r.MODE_NUMBER:
                                return 12;
                            case r.MODE_ALPHA_NUM:
                                return 11;
                            case r.MODE_8BIT_BYTE:
                                return 16;
                            case r.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error("mode:" + e)
                        } else {
                            if (!(t < 41)) throw new Error("type:" + t);
                            switch (e) {
                                case r.MODE_NUMBER:
                                    return 14;
                                case r.MODE_ALPHA_NUM:
                                    return 13;
                                case r.MODE_8BIT_BYTE:
                                    return 16;
                                case r.MODE_KANJI:
                                    return 12;
                                default:
                                    throw new Error("mode:" + e)
                            }
                        }
                    },
                    getLostPoint: function(e) {
                        for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
                            for (var a = 0; a < t; a++) {
                                for (var o = 0, i = e.isDark(r, a), c = -1; c <= 1; c++)
                                    if (!(r + c < 0 || t <= r + c))
                                        for (var l = -1; l <= 1; l++) a + l < 0 || t <= a + l || 0 == c && 0 == l || i == e.isDark(r + c, a + l) && o++;
                                o > 5 && (n += 3 + o - 5)
                            }
                        for (r = 0; r < t - 1; r++)
                            for (a = 0; a < t - 1; a++) {
                                var s = 0;
                                e.isDark(r, a) && s++, e.isDark(r + 1, a) && s++, e.isDark(r, a + 1) && s++, e.isDark(r + 1, a + 1) && s++, 0 != s && 4 != s || (n += 3)
                            }
                        for (r = 0; r < t; r++)
                            for (a = 0; a < t - 6; a++) e.isDark(r, a) && !e.isDark(r, a + 1) && e.isDark(r, a + 2) && e.isDark(r, a + 3) && e.isDark(r, a + 4) && !e.isDark(r, a + 5) && e.isDark(r, a + 6) && (n += 40);
                        for (a = 0; a < t; a++)
                            for (r = 0; r < t - 6; r++) e.isDark(r, a) && !e.isDark(r + 1, a) && e.isDark(r + 2, a) && e.isDark(r + 3, a) && e.isDark(r + 4, a) && !e.isDark(r + 5, a) && e.isDark(r + 6, a) && (n += 40);
                        var u = 0;
                        for (a = 0; a < t; a++)
                            for (r = 0; r < t; r++) e.isDark(r, a) && u++;
                        return n += 10 * (Math.abs(100 * u / t / t - 50) / 5)
                    }
                };
            e.exports = m
        },
        "0xii": (e, t, n) => {
            for (var r = n("FF9q"), a = window, o = ["moz", "webkit"], i = "AnimationFrame", c = a["request" + i], l = a["cancel" + i] || a["cancelRequest" + i], s = 0; !c && s < o.length; s++) c = a[o[s] + "Request" + i], l = a[o[s] + "Cancel" + i] || a[o[s] + "CancelRequest" + i];
            if (!c || !l) {
                var u = 0,
                    d = 0,
                    p = [];
                c = function(e) {
                    if (0 === p.length) {
                        var t = r(),
                            n = Math.max(0, 16.666666666666668 - (t - u));
                        u = n + t, setTimeout((function() {
                            var e = p.slice(0);
                            p.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try {
                                    e[t].callback(u)
                                } catch (n) {
                                    setTimeout((function() {
                                        throw n
                                    }), 0)
                                }
                        }), Math.round(n))
                    }
                    return p.push({
                        handle: ++d,
                        callback: e,
                        cancelled: !1
                    }), d
                }, l = function(e) {
                    for (var t = 0; t < p.length; t++) p[t].handle === e && (p[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return c.call(a, e)
            }, e.exports.cancel = function() {
                l.apply(a, arguments)
            }, e.exports.polyfill = function(e) {
                e || (e = a), e.requestAnimationFrame = c, e.cancelAnimationFrame = l
            }
        },
        Z6fc: (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = o(n("XwoM")),
                c = o(n("vmhH")),
                l = o(n("RU0+")),
                s = o(n("7k4P")),
                u = o(n("0xii")),
                d = o(n("KDEh")),
                p = o(n("DTvD")),
                f = o(n("aWzz")),
                m = 1e3 / 60,
                h = function(e) {
                    function t(n) {
                        var a = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e.call(this, n), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
                            var t = !1,
                                n = a.state,
                                o = n.currentStyle,
                                i = n.currentVelocity,
                                c = n.lastIdealStyle,
                                l = n.lastIdealVelocity;
                            for (var s in e)
                                if (Object.prototype.hasOwnProperty.call(e, s)) {
                                    var u = e[s];
                                    "number" === typeof u && (t || (t = !0, o = r({}, o), i = r({}, i), c = r({}, c), l = r({}, l)), o[s] = u, i[s] = 0, c[s] = u, l[s] = 0)
                                }
                            t && a.setState({
                                currentStyle: o,
                                currentVelocity: i,
                                lastIdealStyle: c,
                                lastIdealVelocity: l
                            })
                        }, this.startAnimationIfNecessary = function() {
                            a.animationID = u.default((function(e) {
                                var t = a.props.style;
                                if (d.default(a.state.currentStyle, t, a.state.currentVelocity)) return a.wasAnimating && a.props.onRest && a.props.onRest(), a.animationID = null, a.wasAnimating = !1, void(a.accumulatedTime = 0);
                                a.wasAnimating = !0;
                                var n = e || s.default(),
                                    r = n - a.prevTime;
                                if (a.prevTime = n, a.accumulatedTime = a.accumulatedTime + r, a.accumulatedTime > 10 * m && (a.accumulatedTime = 0), 0 === a.accumulatedTime) return a.animationID = null, void a.startAnimationIfNecessary();
                                var o = (a.accumulatedTime - Math.floor(a.accumulatedTime / m) * m) / m,
                                    i = Math.floor(a.accumulatedTime / m),
                                    c = {},
                                    u = {},
                                    p = {},
                                    f = {};
                                for (var h in t)
                                    if (Object.prototype.hasOwnProperty.call(t, h)) {
                                        var v = t[h];
                                        if ("number" === typeof v) p[h] = v, f[h] = 0, c[h] = v, u[h] = 0;
                                        else {
                                            for (var y = a.state.lastIdealStyle[h], g = a.state.lastIdealVelocity[h], k = 0; k < i; k++) {
                                                var w = l.default(m / 1e3, y, g, v.val, v.stiffness, v.damping, v.precision);
                                                y = w[0], g = w[1]
                                            }
                                            var b = l.default(m / 1e3, y, g, v.val, v.stiffness, v.damping, v.precision),
                                                x = b[0],
                                                C = b[1];
                                            p[h] = y + (x - y) * o, f[h] = g + (C - g) * o, c[h] = y, u[h] = g
                                        }
                                    }
                                a.animationID = null, a.accumulatedTime -= i * m, a.setState({
                                    currentStyle: p,
                                    currentVelocity: f,
                                    lastIdealStyle: c,
                                    lastIdealVelocity: u
                                }), a.unreadPropStyle = null, a.startAnimationIfNecessary()
                            }))
                        }, this.state = this.defaultState()
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
                    }(t, e), a(t, null, [{
                        key: "propTypes",
                        value: {
                            defaultStyle: f.default.objectOf(f.default.number),
                            style: f.default.objectOf(f.default.oneOfType([f.default.number, f.default.object])).isRequired,
                            children: f.default.func.isRequired,
                            onRest: f.default.func
                        },
                        enumerable: !0
                    }]), t.prototype.defaultState = function() {
                        var e = this.props,
                            t = e.defaultStyle,
                            n = e.style,
                            r = t || c.default(n),
                            a = i.default(r);
                        return {
                            currentStyle: r,
                            currentVelocity: a,
                            lastIdealStyle: r,
                            lastIdealVelocity: a
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.prevTime = s.default(), this.startAnimationIfNecessary()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = s.default(), this.startAnimationIfNecessary())
                    }, t.prototype.componentWillUnmount = function() {
                        null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
                    }, t.prototype.render = function() {
                        var e = this.props.children(this.state.currentStyle);
                        return e && p.default.Children.only(e)
                    }, t
                }(p.default.Component);
            t.default = h, e.exports = t.default
        },
        "7Xug": (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = o(n("XwoM")),
                c = o(n("vmhH")),
                l = o(n("RU0+")),
                s = o(n("7k4P")),
                u = o(n("0xii")),
                d = o(n("KDEh")),
                p = o(n("DTvD")),
                f = o(n("aWzz")),
                m = 1e3 / 60;
            var h = function(e) {
                function t(n) {
                    var a = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = a.state, n = t.currentStyles, o = t.currentVelocities, i = t.lastIdealStyles, c = t.lastIdealVelocities, l = !1, s = 0; s < e.length; s++) {
                            var u = e[s],
                                d = !1;
                            for (var p in u)
                                if (Object.prototype.hasOwnProperty.call(u, p)) {
                                    var f = u[p];
                                    "number" === typeof f && (d || (d = !0, l = !0, n[s] = r({}, n[s]), o[s] = r({}, o[s]), i[s] = r({}, i[s]), c[s] = r({}, c[s])), n[s][p] = f, o[s][p] = 0, i[s][p] = f, c[s][p] = 0)
                                }
                        }
                        l && a.setState({
                            currentStyles: n,
                            currentVelocities: o,
                            lastIdealStyles: i,
                            lastIdealVelocities: c
                        })
                    }, this.startAnimationIfNecessary = function() {
                        a.animationID = u.default((function(e) {
                            var t = a.props.styles(a.state.lastIdealStyles);
                            if (function(e, t, n) {
                                    for (var r = 0; r < e.length; r++)
                                        if (!d.default(e[r], t[r], n[r])) return !1;
                                    return !0
                                }(a.state.currentStyles, t, a.state.currentVelocities)) return a.animationID = null, void(a.accumulatedTime = 0);
                            var n = e || s.default(),
                                r = n - a.prevTime;
                            if (a.prevTime = n, a.accumulatedTime = a.accumulatedTime + r, a.accumulatedTime > 10 * m && (a.accumulatedTime = 0), 0 === a.accumulatedTime) return a.animationID = null, void a.startAnimationIfNecessary();
                            for (var o = (a.accumulatedTime - Math.floor(a.accumulatedTime / m) * m) / m, i = Math.floor(a.accumulatedTime / m), c = [], u = [], p = [], f = [], h = 0; h < t.length; h++) {
                                var v = t[h],
                                    y = {},
                                    g = {},
                                    k = {},
                                    w = {};
                                for (var b in v)
                                    if (Object.prototype.hasOwnProperty.call(v, b)) {
                                        var x = v[b];
                                        if ("number" === typeof x) y[b] = x, g[b] = 0, k[b] = x, w[b] = 0;
                                        else {
                                            for (var C = a.state.lastIdealStyles[h][b], E = a.state.lastIdealVelocities[h][b], _ = 0; _ < i; _++) {
                                                var A = l.default(m / 1e3, C, E, x.val, x.stiffness, x.damping, x.precision);
                                                C = A[0], E = A[1]
                                            }
                                            var S = l.default(m / 1e3, C, E, x.val, x.stiffness, x.damping, x.precision),
                                                M = S[0],
                                                I = S[1];
                                            y[b] = C + (M - C) * o, g[b] = E + (I - E) * o, k[b] = C, w[b] = E
                                        }
                                    }
                                p[h] = y, f[h] = g, c[h] = k, u[h] = w
                            }
                            a.animationID = null, a.accumulatedTime -= i * m, a.setState({
                                currentStyles: p,
                                currentVelocities: f,
                                lastIdealStyles: c,
                                lastIdealVelocities: u
                            }), a.unreadPropStyles = null, a.startAnimationIfNecessary()
                        }))
                    }, this.state = this.defaultState()
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
                }(t, e), a(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: f.default.arrayOf(f.default.objectOf(f.default.number)),
                        styles: f.default.func.isRequired,
                        children: f.default.func.isRequired
                    },
                    enumerable: !0
                }]), t.prototype.defaultState = function() {
                    var e = this.props,
                        t = e.defaultStyles,
                        n = e.styles,
                        r = t || n().map(c.default),
                        a = r.map((function(e) {
                            return i.default(e)
                        }));
                    return {
                        currentStyles: r,
                        currentVelocities: a,
                        lastIdealStyles: r,
                        lastIdealVelocities: a
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = s.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = s.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = this.props.children(this.state.currentStyles);
                    return e && p.default.Children.only(e)
                }, t
            }(p.default.Component);
            t.default = h, e.exports = t.default
        },
        "9RcZ": (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = o(n("XwoM")),
                c = o(n("vmhH")),
                l = o(n("RU0+")),
                s = o(n("F6G4")),
                u = o(n("7k4P")),
                d = o(n("0xii")),
                p = o(n("KDEh")),
                f = o(n("DTvD")),
                m = o(n("aWzz")),
                h = 1e3 / 60;

            function v(e, t, n) {
                var r = t;
                return null == r ? e.map((function(e, t) {
                    return {
                        key: e.key,
                        data: e.data,
                        style: n[t]
                    }
                })) : e.map((function(e, t) {
                    for (var a = 0; a < r.length; a++)
                        if (r[a].key === e.key) return {
                            key: r[a].key,
                            data: r[a].data,
                            style: n[t]
                        };
                    return {
                        key: e.key,
                        data: e.data,
                        style: n[t]
                    }
                }))
            }

            function y(e, t, n, r, a, o, c, l, u) {
                for (var d = s.default(r, a, (function(e, r) {
                        var a = t(r);
                        return null == a || p.default(o[e], a, c[e]) ? (n({
                            key: r.key,
                            data: r.data
                        }), null) : {
                            key: r.key,
                            data: r.data,
                            style: a
                        }
                    })), f = [], m = [], h = [], v = [], y = 0; y < d.length; y++) {
                    for (var g = d[y], k = null, w = 0; w < r.length; w++)
                        if (r[w].key === g.key) {
                            k = w;
                            break
                        }
                    if (null == k) {
                        var b = e(g);
                        f[y] = b, h[y] = b;
                        var x = i.default(g.style);
                        m[y] = x, v[y] = x
                    } else f[y] = o[k], h[y] = l[k], m[y] = c[k], v[y] = u[k]
                }
                return [d, f, m, h, v]
            }
            var g = function(e) {
                function t(n) {
                    var a = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = y(a.props.willEnter, a.props.willLeave, a.props.didLeave, a.state.mergedPropsStyles, e, a.state.currentStyles, a.state.currentVelocities, a.state.lastIdealStyles, a.state.lastIdealVelocities), n = t[0], o = t[1], i = t[2], c = t[3], l = t[4], s = 0; s < e.length; s++) {
                            var u = e[s].style,
                                d = !1;
                            for (var p in u)
                                if (Object.prototype.hasOwnProperty.call(u, p)) {
                                    var f = u[p];
                                    "number" === typeof f && (d || (d = !0, o[s] = r({}, o[s]), i[s] = r({}, i[s]), c[s] = r({}, c[s]), l[s] = r({}, l[s]), n[s] = {
                                        key: n[s].key,
                                        data: n[s].data,
                                        style: r({}, n[s].style)
                                    }), o[s][p] = f, i[s][p] = 0, c[s][p] = f, l[s][p] = 0, n[s].style[p] = f)
                                }
                        }
                        a.setState({
                            currentStyles: o,
                            currentVelocities: i,
                            mergedPropsStyles: n,
                            lastIdealStyles: c,
                            lastIdealVelocities: l
                        })
                    }, this.startAnimationIfNecessary = function() {
                        a.unmounting || (a.animationID = d.default((function(e) {
                            if (!a.unmounting) {
                                var t = a.props.styles,
                                    n = "function" === typeof t ? t(v(a.state.mergedPropsStyles, a.unreadPropStyles, a.state.lastIdealStyles)) : t;
                                if (function(e, t, n, r) {
                                        if (r.length !== t.length) return !1;
                                        for (var a = 0; a < r.length; a++)
                                            if (r[a].key !== t[a].key) return !1;
                                        for (a = 0; a < r.length; a++)
                                            if (!p.default(e[a], t[a].style, n[a])) return !1;
                                        return !0
                                    }(a.state.currentStyles, n, a.state.currentVelocities, a.state.mergedPropsStyles)) return a.animationID = null, void(a.accumulatedTime = 0);
                                var r = e || u.default(),
                                    o = r - a.prevTime;
                                if (a.prevTime = r, a.accumulatedTime = a.accumulatedTime + o, a.accumulatedTime > 10 * h && (a.accumulatedTime = 0), 0 === a.accumulatedTime) return a.animationID = null, void a.startAnimationIfNecessary();
                                for (var i = (a.accumulatedTime - Math.floor(a.accumulatedTime / h) * h) / h, c = Math.floor(a.accumulatedTime / h), s = y(a.props.willEnter, a.props.willLeave, a.props.didLeave, a.state.mergedPropsStyles, n, a.state.currentStyles, a.state.currentVelocities, a.state.lastIdealStyles, a.state.lastIdealVelocities), d = s[0], f = s[1], m = s[2], g = s[3], k = s[4], w = 0; w < d.length; w++) {
                                    var b = d[w].style,
                                        x = {},
                                        C = {},
                                        E = {},
                                        _ = {};
                                    for (var A in b)
                                        if (Object.prototype.hasOwnProperty.call(b, A)) {
                                            var S = b[A];
                                            if ("number" === typeof S) x[A] = S, C[A] = 0, E[A] = S, _[A] = 0;
                                            else {
                                                for (var M = g[w][A], I = k[w][A], D = 0; D < c; D++) {
                                                    var T = l.default(h / 1e3, M, I, S.val, S.stiffness, S.damping, S.precision);
                                                    M = T[0], I = T[1]
                                                }
                                                var L = l.default(h / 1e3, M, I, S.val, S.stiffness, S.damping, S.precision),
                                                    O = L[0],
                                                    P = L[1];
                                                x[A] = M + (O - M) * i, C[A] = I + (P - I) * i, E[A] = M, _[A] = I
                                            }
                                        }
                                    g[w] = E, k[w] = _, f[w] = x, m[w] = C
                                }
                                a.animationID = null, a.accumulatedTime -= c * h, a.setState({
                                    currentStyles: f,
                                    currentVelocities: m,
                                    lastIdealStyles: g,
                                    lastIdealVelocities: k,
                                    mergedPropsStyles: d
                                }), a.unreadPropStyles = null, a.startAnimationIfNecessary()
                            }
                        })))
                    }, this.state = this.defaultState()
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
                }(t, e), a(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: m.default.arrayOf(m.default.shape({
                            key: m.default.string.isRequired,
                            data: m.default.any,
                            style: m.default.objectOf(m.default.number).isRequired
                        })),
                        styles: m.default.oneOfType([m.default.func, m.default.arrayOf(m.default.shape({
                            key: m.default.string.isRequired,
                            data: m.default.any,
                            style: m.default.objectOf(m.default.oneOfType([m.default.number, m.default.object])).isRequired
                        }))]).isRequired,
                        children: m.default.func.isRequired,
                        willEnter: m.default.func,
                        willLeave: m.default.func,
                        didLeave: m.default.func
                    },
                    enumerable: !0
                }, {
                    key: "defaultProps",
                    value: {
                        willEnter: function(e) {
                            return c.default(e.style)
                        },
                        willLeave: function() {
                            return null
                        },
                        didLeave: function() {}
                    },
                    enumerable: !0
                }]), t.prototype.defaultState = function() {
                    var e = this.props,
                        t = e.defaultStyles,
                        n = e.styles,
                        r = e.willEnter,
                        a = e.willLeave,
                        o = e.didLeave,
                        l = "function" === typeof n ? n(t) : n,
                        s = void 0;
                    s = null == t ? l : t.map((function(e) {
                        for (var t = 0; t < l.length; t++)
                            if (l[t].key === e.key) return l[t];
                        return e
                    }));
                    var u = null == t ? l.map((function(e) {
                            return c.default(e.style)
                        })) : t.map((function(e) {
                            return c.default(e.style)
                        })),
                        d = null == t ? l.map((function(e) {
                            return i.default(e.style)
                        })) : t.map((function(e) {
                            return i.default(e.style)
                        })),
                        p = y(r, a, o, s, l, u, d, u, d),
                        f = p[0];
                    return {
                        currentStyles: p[1],
                        currentVelocities: p[2],
                        lastIdealStyles: p[3],
                        lastIdealVelocities: p[4],
                        mergedPropsStyles: f
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = u.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
                    var t = e.styles;
                    this.unreadPropStyles = "function" === typeof t ? t(v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    this.unmounting = !0, null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
                        t = this.props.children(e);
                    return t && f.default.Children.only(t)
                }, t
            }(f.default.Component);
            t.default = g, e.exports = t.default
        },
        XwoM: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = 0);
                return t
            }, e.exports = t.default
        },
        F6G4: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, n) {
                for (var r = {}, a = 0; a < e.length; a++) r[e[a].key] = a;
                var o = {};
                for (a = 0; a < t.length; a++) o[t[a].key] = a;
                var i = [];
                for (a = 0; a < t.length; a++) i[a] = t[a];
                for (a = 0; a < e.length; a++)
                    if (!Object.prototype.hasOwnProperty.call(o, e[a].key)) {
                        var c = n(a, e[a]);
                        null != c && i.push(c)
                    }
                return i.sort((function(e, n) {
                    var a = o[e.key],
                        i = o[n.key],
                        c = r[e.key],
                        l = r[n.key];
                    if (null != a && null != i) return o[e.key] - o[n.key];
                    if (null != c && null != l) return r[e.key] - r[n.key];
                    if (null != a) {
                        for (var s = 0; s < t.length; s++) {
                            var u = t[s].key;
                            if (Object.prototype.hasOwnProperty.call(r, u)) {
                                if (a < o[u] && l > r[u]) return -1;
                                if (a > o[u] && l < r[u]) return 1
                            }
                        }
                        return 1
                    }
                    for (s = 0; s < t.length; s++) {
                        u = t[s].key;
                        if (Object.prototype.hasOwnProperty.call(r, u)) {
                            if (i < o[u] && c > r[u]) return 1;
                            if (i > o[u] && c < r[u]) return -1
                        }
                    }
                    return -1
                }))
            }, e.exports = t.default
        },
        "5p+V": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = {
                noWobble: {
                    stiffness: 170,
                    damping: 26
                },
                gentle: {
                    stiffness: 120,
                    damping: 14
                },
                wobbly: {
                    stiffness: 180,
                    damping: 12
                },
                stiff: {
                    stiffness: 210,
                    damping: 20
                }
            }, e.exports = t.default
        },
        Enqy: (e, t, n) => {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e.default : e
            }
            r(n("Z6fc")), r(n("7Xug"));
            var a = n("9RcZ");
            t.S6 = r(a);
            var o = n("a1xD");
            t.oz = r(o);
            var i = n("5p+V");
            t.v4 = r(i), r(n("vmhH")), r(n("xB03"))
        },
        xB03: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function() {
                0
            };
            e.exports = t.default
        },
        KDEh: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, n) {
                for (var r in t)
                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                        if (0 !== n[r]) return !1;
                        var a = "number" === typeof t[r] ? t[r] : t[r].val;
                        if (e[r] !== a) return !1
                    }
                return !0
            }, e.exports = t.default
        },
        a1xD: (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.default = function(e, t) {
                return r({}, c, t, {
                    val: e
                })
            };
            var a, o = n("5p+V"),
                i = (a = o) && a.__esModule ? a : {
                    default: a
                },
                c = r({}, i.default.noWobble, {
                    precision: .01
                });
            e.exports = t.default
        },
        "RU0+": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, r, a, o, i, c) {
                var l = r + (-o * (t - a) + -i * r) * e,
                    s = t + l * e;
                if (Math.abs(l) < c && Math.abs(s - a) < c) return n[0] = a, n[1] = 0, n;
                return n[0] = s, n[1] = l, n
            };
            var n = [0, 0];
            e.exports = t.default
        },
        vmhH: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = "number" === typeof e[n] ? e[n] : e[n].val);
                return t
            }, e.exports = t.default
        },
        "7k4P": function(e, t, n) {
            var r = n("F63i");
            (function() {
                var t, n, a;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof r && null !== r && r.hrtime ? (e.exports = function() {
                    return (t() - a) / 1e6
                }, n = r.hrtime, a = (t = function() {
                    var e;
                    return 1e9 * (e = n())[0] + e[1]
                })()) : Date.now ? (e.exports = function() {
                    return Date.now() - a
                }, a = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - a
                }, a = (new Date).getTime())
            }).call(this)
        }
    }
]);
//# debugId=84c14ad2-0137-5e53-9043-8f5a07e06c71