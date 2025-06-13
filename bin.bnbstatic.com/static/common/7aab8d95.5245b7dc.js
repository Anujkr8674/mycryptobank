"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4a6824e2-b823-5f2e-aecc-596f21327388")
    } catch (e) {}
}();
(self.webpackChunkmini_notification_center = self.webpackChunkmini_notification_center || []).push([
    [499], {
        "vW+O": (_, e, t) => {
            t.d(e, {
                Yq: () => v_,
                un: () => S_,
                YL: () => f_
            });
            var a, n = t("BK7R"),
                s = t("QUKP"),
                r = t("09Dg"),
                m = t.n(r),
                i = t("/I5v"),
                d = t.n(i),
                M = {
                    "zh-TC": "zh-tw",
                    "es-LA": "es",
                    "uk-UA": "uk",
                    no: "nb",
                    "da-DK": "da",
                    "my-MM": "my",
                    "lo-LA": "lo",
                    "az-AZ": "az",
                    "de-CH": "de",
                    "es-AR": "es",
                    "fr-AF": "fr",
                    "kk-KZ": "kk",
                    "pt-PT": "pt",
                    "ru-KZ": "ru",
                    "si-LK": "si"
                },
                o = function(_) {
                    return M[_] || _.toLowerCase()
                },
                Y = {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    l: "D/M/YYYY",
                    RR: "DD/MM"
                };
            ! function(_) {
                _.LT = "LT", _.LTS = "LTS", _.L = "L", _.l = "l", _.MD = "RR", _.MDHM = "RR LT", _.YMDHM = "L LT", _.YMDHMS = "L LTS"
            }(a || (a = {}));
            var u = ["RR"],
                l = function(_, e) {
                    for (var t, n = (null === e || void 0 === e || null === (t = e.formatTypes) || void 0 === t ? void 0 : t[_]) || a[_] || _, s = 0; s < u.length; s++) n = n.replace(u[s], e.formats[u[s]]);
                    return n
                };
            Array.from({
                length: 24
            }, (function(_, e) {
                return e.toString().split("").map((function(_) {
                    return String.fromCodePoint(8320 + parseInt(_, 10))
                })).join("")
            }));

            function L(_) {
                return _ % 10 < 5 && _ % 10 > 1 && ~~(_ / 10) % 10 !== 1
            }

            function h(_, e, t) {
                var a = "".concat(_, " ");
                switch (t) {
                    case "m":
                        return e ? "minuta" : "minut\u0119";
                    case "mm":
                        return a + (L(_) ? "minuty" : "minut");
                    case "h":
                        return e ? "godzina" : "godzin\u0119";
                    case "hh":
                        return a + (L(_) ? "godziny" : "godzin");
                    case "MM":
                        return a + (L(_) ? "miesi\u0105ce" : "miesi\u0119cy");
                    case "yy":
                        return a + (L(_) ? "lata" : "lat")
                }
            }
            var p = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_"),
                c = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
                y = /D MMMM/,
                D = function(_, e) {
                    return y.test(e) ? p[_.month()] : c[_.month()]
                };
            D.s = c, D.f = p;
            const k = {
                name: "pl",
                weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
                months: D,
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                weekStart: 1,
                yearStart: 4,
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    m: h,
                    mm: h,
                    h: h,
                    hh: h,
                    d: "1 dzie\u0144",
                    dd: "%d dni",
                    M: "miesi\u0105c",
                    MM: h,
                    y: "rok",
                    yy: h
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm",
                    RR: "DD.MM"
                }
            };
            var H = "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),
                f = "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
                v = "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),
                S = "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),
                g = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

            function T(_, e, t) {
                var a = {
                    mm: e ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",
                    hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",
                    dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",
                    MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                    yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"
                };
                return "m" === t ? e ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : "".concat(_, " ").concat(function(_, e) {
                    var t = _.split("_");
                    return e % 10 === 1 && e % 100 !== 11 ? t[0] : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? t[1] : t[2]
                }(a[t], +_))
            }
            var w = function(_, e) {
                return g.test(e) ? H[_.month()] : f[_.month()]
            };
            w.s = f, w.f = H;
            var b = function(_, e) {
                return g.test(e) ? v[_.month()] : S[_.month()]
            };
            b.s = S, b.f = v;
            const j = {
                name: "ru",
                weekdays: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),
                weekdaysShort: "\u0432\u0441\u043a_\u043f\u043d\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043f\u0442\u043d_\u0441\u0431\u0442".split("_"),
                weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                months: w,
                monthsShort: b,
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY \u0433.",
                    LLL: "D MMMM YYYY \u0433., H:mm",
                    LLLL: "dddd, D MMMM YYYY \u0433., H:mm",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "\u0447\u0435\u0440\u0435\u0437 %s",
                    past: "%s \u043d\u0430\u0437\u0430\u0434",
                    s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
                    m: T,
                    mm: T,
                    h: "\u0447\u0430\u0441",
                    hh: T,
                    d: "\u0434\u0435\u043d\u044c",
                    dd: T,
                    M: "\u043c\u0435\u0441\u044f\u0446",
                    MM: T,
                    y: "\u0433\u043e\u0434",
                    yy: T
                },
                ordinal: function(_) {
                    return _
                },
                meridiem: function(_) {
                    return _ < 4 ? "\u043d\u043e\u0447\u0438" : _ < 12 ? "\u0443\u0442\u0440\u0430" : _ < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430"
                }
            };
            const R = {
                name: "es",
                monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                weekStart: 1,
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
                    RR: "D/M"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un d\xeda",
                    dd: "%d d\xedas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un a\xf1o",
                    yy: "%d a\xf1os"
                },
                ordinal: function(_) {
                    return "".concat(_, "\xba")
                }
            };
            var A = "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),
                z = "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_"),
                J = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

            function F(_, e, t) {
                var a = {
                    ss: e ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",
                    mm: e ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
                    hh: e ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",
                    dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",
                    MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",
                    yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"
                };
                return "m" === t ? e ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === t ? e ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : "".concat(_, " ").concat(function(_, e) {
                    var t = _.split("_");
                    return e % 10 === 1 && e % 100 !== 11 ? t[0] : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? t[1] : t[2]
                }(a[t], +_))
            }
            var I = function(_, e) {
                return J.test(e) ? A[_.month()] : z[_.month()]
            };
            I.s = z, I.f = A;
            const N = {
                name: "uk",
                weekdays: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                weekdaysShort: "\u043d\u0434\u043b_\u043f\u043d\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043f\u0442\u043d_\u0441\u0431\u0442".split("_"),
                weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                months: I,
                monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
                weekStart: 1,
                relativeTime: {
                    future: "\u0437\u0430 %s",
                    past: "%s \u0442\u043e\u043c\u0443",
                    s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",
                    m: F,
                    mm: F,
                    h: F,
                    hh: F,
                    d: "\u0434\u0435\u043d\u044c",
                    dd: F,
                    M: "\u043c\u0456\u0441\u044f\u0446\u044c",
                    MM: F,
                    y: "\u0440\u0456\u043a",
                    yy: F
                },
                ordinal: function(_) {
                    return _
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY \u0440.",
                    LLL: "D MMMM YYYY \u0440., HH:mm",
                    LLLL: "dddd, D MMMM YYYY \u0440., HH:mm",
                    RR: "DD.MM"
                }
            };

            function C(_) {
                return _ > 1 && _ < 5 && 1 !== ~~(_ / 10)
            }

            function P(_, e, t, a) {
                var n = "".concat(_, " ");
                switch (t) {
                    case "s":
                        return e || a ? "p\xe1r sekund" : "p\xe1r sekundami";
                    case "m":
                        return e ? "minuta" : a ? "minutu" : "minutou";
                    case "mm":
                        return e || a ? n + (C(_) ? "minuty" : "minut") : "".concat(n, "minutami");
                    case "h":
                        return e ? "hodina" : a ? "hodinu" : "hodinou";
                    case "hh":
                        return e || a ? n + (C(_) ? "hodiny" : "hodin") : "".concat(n, "hodinami");
                    case "d":
                        return e || a ? "den" : "dnem";
                    case "dd":
                        return e || a ? n + (C(_) ? "dny" : "dn\xed") : "".concat(n, "dny");
                    case "M":
                        return e || a ? "m\u011bs\xedc" : "m\u011bs\xedcem";
                    case "MM":
                        return e || a ? n + (C(_) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : "".concat(n, "m\u011bs\xedci");
                    case "y":
                        return e || a ? "rok" : "rokem";
                    case "yy":
                        return e || a ? n + (C(_) ? "roky" : "let") : "".concat(n, "lety");
                    default:
                        return n
                }
            }
            const O = {
                name: "cs",
                weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),
                weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
                weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
                months: "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
                monthsShort: "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),
                weekStart: 1,
                yearStart: 4,
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "za %s",
                    past: "p\u0159ed %s",
                    s: P,
                    m: P,
                    mm: P,
                    h: P,
                    hh: P,
                    d: P,
                    dd: P,
                    M: P,
                    MM: P,
                    y: P,
                    yy: P
                }
            };
            var q = {
                s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
                ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea",
                m: "\u05d3\u05e7\u05d4",
                mm: "%d \u05d3\u05e7\u05d5\u05ea",
                h: "\u05e9\u05e2\u05d4",
                hh: "%d \u05e9\u05e2\u05d5\u05ea",
                hh2: "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",
                d: "\u05d9\u05d5\u05dd",
                dd: "%d \u05d9\u05de\u05d9\u05dd",
                dd2: "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd",
                M: "\u05d7\u05d5\u05d3\u05e9",
                MM: "%d \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd",
                MM2: "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",
                y: "\u05e9\u05e0\u05d4",
                yy: "%d \u05e9\u05e0\u05d9\u05dd",
                yy2: "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"
            };

            function K(_, e, t) {
                return (q[t + (2 === _ ? "2" : "")] || q[t]).replace("%d", _)
            }
            const W = {
                name: "he",
                weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),
                weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),
                weekdaysMin: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5_\u05e9\u05f3".split("_"),
                months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),
                monthsShort: "\u05d9\u05e0\u05d5_\u05e4\u05d1\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0_\u05d9\u05d5\u05dc_\u05d0\u05d5\u05d2_\u05e1\u05e4\u05d8_\u05d0\u05d5\u05e7_\u05e0\u05d5\u05d1_\u05d3\u05e6\u05de".split("_"),
                relativeTime: {
                    future: "\u05d1\u05e2\u05d5\u05d3 %s",
                    past: "\u05dc\u05e4\u05e0\u05d9 %s",
                    s: K,
                    m: K,
                    mm: K,
                    h: K,
                    hh: K,
                    d: K,
                    dd: K,
                    M: K,
                    MM: K,
                    y: K,
                    yy: K
                },
                ordinal: function(_) {
                    return _
                },
                format: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [\u05d1]MMMM YYYY",
                    LLL: "D [\u05d1]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm",
                    RR: "DD/MM"
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [\u05d1]MMMM YYYY",
                    LLL: "D [\u05d1]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                }
            };
            var B = {
                s: "ein paar Sekunden",
                m: ["eine Minute", "einer Minute"],
                mm: "%d Minuten",
                h: ["eine Stunde", "einer Stunde"],
                hh: "%d Stunden",
                d: ["ein Tag", "einem Tag"],
                dd: ["%d Tage", "%d Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: ["%d Monate", "%d Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: ["%d Jahre", "%d Jahren"]
            };

            function x(_, e, t) {
                var a = B[t];
                return Array.isArray(a) && (a = a[e ? 0 : 1]), a.replace("%d", _)
            }
            const E = {
                name: "de",
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LTS: "HH:mm:ss",
                    LT: "HH:mm",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: x,
                    m: x,
                    mm: x,
                    h: x,
                    hh: x,
                    d: x,
                    dd: x,
                    M: x,
                    MM: x,
                    y: x,
                    yy: x
                }
            };
            const V = {
                name: "bg",
                weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
                weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
                weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
                monthsShort: "\u044f\u043d\u0443_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
                weekStart: 1,
                ordinal: function(_) {
                    var e = _ % 100;
                    if (e > 10 && e < 20) return "".concat(_, "-\u0442\u0438");
                    var t = _ % 10;
                    return "".concat(_, 1 === t ? "-\u0432\u0438" : 2 === t ? "-\u0440\u0438" : 7 === t || 8 === t ? "-\u043c\u0438" : "-\u0442\u0438")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm",
                    RR: "D.MM"
                },
                relativeTime: {
                    future: "\u0441\u043b\u0435\u0434 %s",
                    past: "\u043f\u0440\u0435\u0434\u0438 %s",
                    s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                    m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                    mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                    h: "\u0447\u0430\u0441",
                    hh: "%d \u0447\u0430\u0441\u0430",
                    d: "\u0434\u0435\u043d",
                    dd: "%d \u0434\u0435\u043d\u0430",
                    M: "\u043c\u0435\u0441\u0435\u0446",
                    MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
                    y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                    yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
                }
            };
            var U = {
                    1: "\u09e7",
                    2: "\u09e8",
                    3: "\u09e9",
                    4: "\u09ea",
                    5: "\u09eb",
                    6: "\u09ec",
                    7: "\u09ed",
                    8: "\u09ee",
                    9: "\u09ef",
                    0: "\u09e6"
                },
                Z = {
                    "\u09e7": "1",
                    "\u09e8": "2",
                    "\u09e9": "3",
                    "\u09ea": "4",
                    "\u09eb": "5",
                    "\u09ec": "6",
                    "\u09ed": "7",
                    "\u09ee": "8",
                    "\u09ef": "9",
                    "\u09e6": "0"
                };
            const G = {
                name: "bn",
                weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),
                months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),
                weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
                monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),
                weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
                preparse: function(_) {
                    return _.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, (function(_) {
                        return Z[_]
                    }))
                },
                postformat: function(_) {
                    return _.replace(/\d/g, (function(_) {
                        return U[_]
                    }))
                },
                ordinal: function(_) {
                    return _
                },
                formats: {
                    LT: "A h:mm \u09b8\u09ae\u09df",
                    LTS: "A h:mm:ss \u09b8\u09ae\u09df",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
                    LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
                    RR: "DD/MM"
                },
                relativeTime: {
                    future: "%s \u09aa\u09b0\u09c7",
                    past: "%s \u0986\u0997\u09c7",
                    s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
                    m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
                    mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
                    h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
                    hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
                    d: "\u098f\u0995 \u09a6\u09bf\u09a8",
                    dd: "%d \u09a6\u09bf\u09a8",
                    M: "\u098f\u0995 \u09ae\u09be\u09b8",
                    MM: "%d \u09ae\u09be\u09b8",
                    y: "\u098f\u0995 \u09ac\u099b\u09b0",
                    yy: "%d \u09ac\u099b\u09b0"
                }
            };

            function Q(_, e, t, a) {
                var n = {
                        s: "muutama sekunti",
                        m: "minuutti",
                        mm: "%d minuuttia",
                        h: "tunti",
                        hh: "%d tuntia",
                        d: "p\xe4iv\xe4",
                        dd: "%d p\xe4iv\xe4\xe4",
                        M: "kuukausi",
                        MM: "%d kuukautta",
                        y: "vuosi",
                        yy: "%d vuotta",
                        numbers: "nolla_yksi_kaksi_kolme_nelj\xe4_viisi_kuusi_seitsem\xe4n_kahdeksan_yhdeks\xe4n".split("_")
                    },
                    s = {
                        s: "muutaman sekunnin",
                        m: "minuutin",
                        mm: "%d minuutin",
                        h: "tunnin",
                        hh: "%d tunnin",
                        d: "p\xe4iv\xe4n",
                        dd: "%d p\xe4iv\xe4n",
                        M: "kuukauden",
                        MM: "%d kuukauden",
                        y: "vuoden",
                        yy: "%d vuoden",
                        numbers: "nollan_yhden_kahden_kolmen_nelj\xe4n_viiden_kuuden_seitsem\xe4n_kahdeksan_yhdeks\xe4n".split("_")
                    },
                    r = a && !e ? s : n,
                    m = r[t];
                return _ < 10 ? m.replace("%d", r.numbers[_]) : m.replace("%d", _)
            }
            const X = {
                name: "fi",
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                weekStart: 1,
                yearStart: 4,
                relativeTime: {
                    future: "%s p\xe4\xe4st\xe4",
                    past: "%s sitten",
                    s: Q,
                    m: Q,
                    mm: Q,
                    h: Q,
                    hh: Q,
                    d: Q,
                    dd: Q,
                    M: Q,
                    MM: Q,
                    y: Q,
                    yy: Q
                },
                formats: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM[ta] YYYY",
                    LLL: "D. MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "D. MMM YYYY",
                    lll: "D. MMM YYYY, [klo] HH.mm",
                    llll: "ddd, D. MMM YYYY, [klo] HH.mm",
                    RR: "DD.MM"
                }
            };

            function $(_) {
                return _ > 1 && _ < 5 && 1 !== ~~(_ / 10)
            }

            function __(_, e, t, a) {
                var n = "".concat(_, " ");
                switch (t) {
                    case "s":
                        return e || a ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
                    case "m":
                        return e ? "min\xfata" : a ? "min\xfatu" : "min\xfatou";
                    case "mm":
                        return e || a ? n + ($(_) ? "min\xfaty" : "min\xfat") : "".concat(n, "min\xfatami");
                    case "h":
                        return e ? "hodina" : a ? "hodinu" : "hodinou";
                    case "hh":
                        return e || a ? n + ($(_) ? "hodiny" : "hod\xedn") : "".concat(n, "hodinami");
                    case "d":
                        return e || a ? "de\u0148" : "d\u0148om";
                    case "dd":
                        return e || a ? n + ($(_) ? "dni" : "dn\xed") : "".concat(n, "d\u0148ami");
                    case "M":
                        return e || a ? "mesiac" : "mesiacom";
                    case "MM":
                        return e || a ? n + ($(_) ? "mesiace" : "mesiacov") : "".concat(n, "mesiacmi");
                    case "y":
                        return e || a ? "rok" : "rokom";
                    case "yy":
                        return e || a ? n + ($(_) ? "roky" : "rokov") : "".concat(n, "rokmi");
                    default:
                        return n
                }
            }
            const e_ = {
                name: "sk",
                weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
                months: "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_"),
                weekStart: 1,
                yearStart: 4,
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: __,
                    m: __,
                    mm: __,
                    h: __,
                    hh: __,
                    d: __,
                    dd: __,
                    M: __,
                    MM: __,
                    y: __,
                    yy: __
                }
            };

            function t_(_) {
                return _ % 100 == 2
            }

            function a_(_) {
                return _ % 100 == 3 || _ % 100 == 4
            }

            function n_(_, e, t, a) {
                var n = "".concat(_, " ");
                switch (t) {
                    case "s":
                        return e || a ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return e ? "ena minuta" : "eno minuto";
                    case "mm":
                        return t_(_) ? n + (e || a ? "minuti" : "minutama") : a_(_) ? n + (e || a ? "minute" : "minutami") : n + (e || a ? "minut" : "minutami");
                    case "h":
                        return e ? "ena ura" : "eno uro";
                    case "hh":
                        return t_(_) ? n + (e || a ? "uri" : "urama") : a_(_) ? n + (e || a ? "ure" : "urami") : n + (e || a ? "ur" : "urami");
                    case "d":
                        return e || a ? "en dan" : "enim dnem";
                    case "dd":
                        return t_(_) ? n + (e || a ? "dneva" : "dnevoma") : n + (e || a ? "dni" : "dnevi");
                    case "M":
                        return e || a ? "en mesec" : "enim mesecem";
                    case "MM":
                        return t_(_) ? n + (e || a ? "meseca" : "mesecema") : a_(_) ? n + (e || a ? "mesece" : "meseci") : n + (e || a ? "mesecev" : "meseci");
                    case "y":
                        return e || a ? "eno leto" : "enim letom";
                    case "yy":
                        return t_(_) ? n + (e || a ? "leti" : "letoma") : a_(_) ? n + (e || a ? "leta" : "leti") : n + (e || a ? "let" : "leti");
                    default:
                        return n
                }
            }
            const s_ = {
                name: "sl",
                weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                weekStart: 1,
                weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm",
                    l: "D. M. YYYY",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "\u010dez %s",
                    past: "pred %s",
                    s: n_,
                    m: n_,
                    mm: n_,
                    h: n_,
                    hh: n_,
                    d: n_,
                    dd: n_,
                    M: n_,
                    MM: n_,
                    y: n_,
                    yy: n_
                }
            };

            function r_(_, e, t, a) {
                var n = {
                    s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
                    m: ["\xfche minuti", "\xfcks minut"],
                    mm: ["%d minuti", "%d minutit"],
                    h: ["\xfche tunni", "tund aega", "\xfcks tund"],
                    hh: ["%d tunni", "%d tundi"],
                    d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
                    M: ["kuu aja", "kuu aega", "\xfcks kuu"],
                    MM: ["%d kuu", "%d kuud"],
                    y: ["\xfche aasta", "aasta", "\xfcks aasta"],
                    yy: ["%d aasta", "%d aastat"]
                };
                return e ? (n[t][2] ? n[t][2] : n[t][1]).replace("%d", _) : (a ? n[t][0] : n[t][1]).replace("%d", _)
            }
            const m_ = {
                name: "et",
                weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                weekStart: 1,
                relativeTime: {
                    future: "%s p\xe4rast",
                    past: "%s tagasi",
                    s: r_,
                    m: r_,
                    mm: r_,
                    h: r_,
                    hh: r_,
                    d: r_,
                    dd: "%d p\xe4eva",
                    M: r_,
                    MM: r_,
                    y: r_,
                    yy: r_
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. MMM YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm",
                    RR: "D. MMM"
                }
            };
            var i_ = "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),
                d_ = "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),
                M_ = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
                o_ = function(_, e) {
                    return M_.test(e) ? i_[_.month()] : d_[_.month()]
                };
            o_.s = d_, o_.f = i_;
            const Y_ = {
                name: "lt",
                weekdays: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),
                weekdaysShort: "sek_pir_ant_tre_ket_pen_\u0161e\u0161".split("_"),
                weekdaysMin: "s_p_a_t_k_pn_\u0161".split("_"),
                months: o_,
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                weekStart: 1,
                relativeTime: {
                    future: "u\u017e %s",
                    past: "prie\u0161 %s",
                    s: "kelias sekundes",
                    m: "minut\u0119",
                    mm: "%d minutes",
                    h: "valand\u0105",
                    hh: "%d valandas",
                    d: "dien\u0105",
                    dd: "%d dienas",
                    M: "m\u0117nes\u012f",
                    MM: "%d m\u0117nesius",
                    y: "metus",
                    yy: "%d metus"
                },
                format: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
                    RR: "MM-DD"
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                }
            };
            var u_ = "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                l_ = "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
                L_ = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/,
                h_ = function(_, e) {
                    return L_.test(e) ? u_[_.month()] : l_[_.month()]
                };
            h_.s = l_, h_.f = u_;
            const p_ = {
                name: "hr",
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                months: h_,
                monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                weekStart: 1,
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "sekunda",
                    m: "minuta",
                    mm: "%d minuta",
                    h: "sat",
                    hh: "%d sati",
                    d: "dan",
                    dd: "%d dana",
                    M: "mjesec",
                    MM: "%d mjeseci",
                    y: "godina",
                    yy: "%d godine"
                },
                ordinal: function(_) {
                    return "".concat(_, ".")
                }
            };
            var c_ = {
                words: {
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["%d minut", "%d minuta", "%d minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["%d sat", "%d sata", "%d sati"],
                    d: ["jedan dan", "jednog dana"],
                    dd: ["%d dan", "%d dana", "%d dana"],
                    M: ["jedan mesec", "jednog meseca"],
                    MM: ["%d mesec", "%d meseca", "%d meseci"],
                    y: ["jednu godinu", "jedne godine"],
                    yy: ["%d godinu", "%d godine", "%d godina"]
                },
                correctGrammarCase: function(_, e) {
                    return _ % 10 >= 1 && _ % 10 <= 4 && (_ % 100 < 10 || _ % 100 >= 20) ? _ % 10 === 1 ? e[0] : e[1] : e[2]
                },
                relativeTimeFormatter: function(_, e, t, a) {
                    var n = c_.words[t];
                    if (1 === t.length) return "y" === t && e ? "jedna godina" : a || e ? n[0] : n[1];
                    var s = c_.correctGrammarCase(_, n);
                    return "yy" === t && e && "%d godinu" === s ? "".concat(_, " godina") : s.replace("%d", _)
                }
            };
            const y_ = {
                name: "sr",
                weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_\u010cetvrtak_Petak_Subota".split("_"),
                weekdaysShort: "Ned._Pon._Uto._Sre._\u010cet._Pet._Sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),
                monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),
                weekStart: 1,
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    m: c_.relativeTimeFormatter,
                    mm: c_.relativeTimeFormatter,
                    h: c_.relativeTimeFormatter,
                    hh: c_.relativeTimeFormatter,
                    d: c_.relativeTimeFormatter,
                    dd: c_.relativeTimeFormatter,
                    M: c_.relativeTimeFormatter,
                    MM: c_.relativeTimeFormatter,
                    y: c_.relativeTimeFormatter,
                    yy: c_.relativeTimeFormatter
                },
                ordinal: function(_) {
                    return "".concat(_, ".")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. M. YYYY.",
                    LL: "D. MMMM YYYY.",
                    LLL: "D. MMMM YYYY. H:mm",
                    LLLL: "dddd, D. MMMM YYYY. H:mm",
                    RR: "D. M."
                }
            };
            const D_ = {
                name: "kk",
                weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),
                weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),
                weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),
                months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),
                monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),
                weekStart: 1,
                relativeTime: {
                    future: "%s \u0456\u0448\u0456\u043d\u0434\u0435",
                    past: "%s \u0431\u04b1\u0440\u044b\u043d",
                    s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
                    m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",
                    mm: "%d \u043c\u0438\u043d\u0443\u0442",
                    h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
                    hh: "%d \u0441\u0430\u0493\u0430\u0442",
                    d: "\u0431\u0456\u0440 \u043a\u04af\u043d",
                    dd: "%d \u043a\u04af\u043d",
                    M: "\u0431\u0456\u0440 \u0430\u0439",
                    MM: "%d \u0430\u0439",
                    y: "\u0431\u0456\u0440 \u0436\u044b\u043b",
                    yy: "%d \u0436\u044b\u043b"
                },
                ordinal: function(_) {
                    return _
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm",
                    RR: "DD.MM"
                }
            };
            const k_ = {
                en: {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "MM/DD/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                        RR: "MM/DD"
                    },
                    ordinal: function(_) {
                        var e = ["th", "st", "nd", "rd"],
                            t = _ % 100;
                        return "[".concat(_).concat(e[(t - 20) % 10] || e[t] || e[0], "]")
                    },
                    formatTypes: {
                        YMDHM: "L LT",
                        YMDHMS: "L LTS"
                    }
                },
                "en-in": {
                    name: "en-in",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    ordinal: function(_) {
                        var e = ["th", "st", "nd", "rd"],
                            t = _ % 100;
                        return "[".concat(_).concat(e[(t - 20) % 10] || e[t] || e[0], "]")
                    }
                },
                "en-nz": {
                    name: "en-nz",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    weekStart: 1,
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    ordinal: function(_) {
                        var e = ["th", "st", "nd", "rd"],
                            t = _ % 100;
                        return "[".concat(_).concat(e[(t - 20) % 10] || e[t] || e[0], "]")
                    },
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    }
                },
                "en-au": {
                    name: "en-au",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    weekStart: 1,
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    }
                },
                "zh-cn": {
                    name: "zh-cn",
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    ordinal: function(_, e) {
                        return "".concat(_, "W" === e ? "\u5468" : "\u65e5")
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",
                        l: "YYYY/M/D",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                        RR: "MM/DD"
                    },
                    relativeTime: {
                        future: "%s\u5185",
                        past: "%s\u524d",
                        s: "\u51e0\u79d2",
                        m: "1 \u5206\u949f",
                        mm: "%d \u5206\u949f",
                        h: "1 \u5c0f\u65f6",
                        hh: "%d \u5c0f\u65f6",
                        d: "1 \u5929",
                        dd: "%d \u5929",
                        M: "1 \u4e2a\u6708",
                        MM: "%d \u4e2a\u6708",
                        y: "1 \u5e74",
                        yy: "%d \u5e74"
                    },
                    meridiem: function(_, e) {
                        var t = 100 * _ + e;
                        return t < 600 ? "\u51cc\u6668" : t < 900 ? "\u65e9\u4e0a" : t < 1100 ? "\u4e0a\u5348" : t < 1300 ? "\u4e2d\u5348" : t < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    }
                },
                "zh-tw": {
                    name: "zh-tw",
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    ordinal: function(_, e) {
                        return "".concat(_, "W" === e ? "\u9031" : "\u65e5")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                        RR: "MM/DD"
                    },
                    relativeTime: {
                        future: "%s\u5167",
                        past: "%s\u524d",
                        s: "\u5e7e\u79d2",
                        m: "1 \u5206\u9418",
                        mm: "%d \u5206\u9418",
                        h: "1 \u5c0f\u6642",
                        hh: "%d \u5c0f\u6642",
                        d: "1 \u5929",
                        dd: "%d \u5929",
                        M: "1 \u500b\u6708",
                        MM: "%d \u500b\u6708",
                        y: "1 \u5e74",
                        yy: "%d \u5e74"
                    },
                    meridiem: function(_, e) {
                        var t = 100 * _ + e;
                        return t < 600 ? "\u51cc\u6668" : t < 900 ? "\u65e9\u4e0a" : t < 1100 ? "\u4e0a\u5348" : t < 1300 ? "\u4e2d\u5348" : t < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    }
                },
                ar: {
                    name: "ar",
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    weekStart: 6,
                    meridiem: function(_) {
                        return _ > 12 ? "\u0645" : "\u0635"
                    },
                    relativeTime: {
                        future: "\u0628\u0639\u062f %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",
                        m: "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",
                        yy: "%d \u0623\u0639\u0648\u0627\u0645"
                    },
                    preparse: function(_) {
                        return _.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, (function(_) {
                            return {
                                "\u0661": "1",
                                "\u0662": "2",
                                "\u0663": "3",
                                "\u0664": "4",
                                "\u0665": "5",
                                "\u0666": "6",
                                "\u0667": "7",
                                "\u0668": "8",
                                "\u0669": "9",
                                "\u0660": "0"
                            }[_]
                        })).replace(/\u060c/g, ",")
                    },
                    postformat: function(_) {
                        return _.replace(/\d/g, (function(_) {
                            return {
                                1: "\u0661",
                                2: "\u0662",
                                3: "\u0663",
                                4: "\u0664",
                                5: "\u0665",
                                6: "\u0666",
                                7: "\u0667",
                                8: "\u0668",
                                9: "\u0669",
                                0: "\u0660"
                            }[_]
                        })).replace(/,/g, "\u060c")
                    },
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "D/M"
                    },
                    formatTypes: {
                        MDHM: "RR LT",
                        YMDHM: "L LT",
                        YMDHMS: "L LTS"
                    }
                },
                nl: {
                    name: "nl",
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    ordinal: function(_) {
                        return "[".concat(_).concat(1 === _ || 8 === _ || _ >= 20 ? "ste" : "de", "]")
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "DD-MM"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        m: "een minuut",
                        mm: "%d minuten",
                        h: "een uur",
                        hh: "%d uur",
                        d: "een dag",
                        dd: "%d dagen",
                        M: "een maand",
                        MM: "%d maanden",
                        y: "een jaar",
                        yy: "%d jaar"
                    }
                },
                fr: {
                    name: "fr",
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinal: function(_) {
                        var e = 1 === _ ? "er" : "";
                        return "".concat(_).concat(e)
                    }
                },
                de: E,
                id: {
                    name: "id",
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
                        RR: "DD-MM"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    ordinal: function(_) {
                        return "".concat(_, ".")
                    }
                },
                it: {
                    name: "it",
                    weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    weekStart: 1,
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "tra %s",
                        past: "%s fa",
                        s: "qualche secondo",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un' ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    ordinal: function(_) {
                        return "".concat(_, "\xba")
                    }
                },
                ja: {
                    name: "ja",
                    weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
                    weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
                    weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
                    months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    ordinal: function(_) {
                        return "".concat(_, "\u65e5")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",
                        l: "YYYY/MM/DD",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"
                    },
                    meridiem: function(_) {
                        return _ < 12 ? "\u5348\u524d" : "\u5348\u5f8c"
                    },
                    relativeTime: {
                        future: "%s\u5f8c",
                        past: "%s\u524d",
                        s: "\u6570\u79d2",
                        m: "1\u5206",
                        mm: "%d\u5206",
                        h: "1\u6642\u9593",
                        hh: "%d\u6642\u9593",
                        d: "1\u65e5",
                        dd: "%d\u65e5",
                        M: "1\u30f6\u6708",
                        MM: "%d\u30f6\u6708",
                        y: "1\u5e74",
                        yy: "%d\u5e74"
                    }
                },
                ko: {
                    name: "ko",
                    weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
                    weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
                    weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
                    months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
                    monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
                    ordinal: function(_) {
                        return "".concat(_, "\uc77c")
                    },
                    formats: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY\ub144 MMMM D\uc77c",
                        LLL: "YYYY\ub144 MMMM D\uc77c A h:mm",
                        LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
                        l: "YYYY.MM.DD.",
                        ll: "YYYY\ub144 MMMM D\uc77c",
                        lll: "YYYY\ub144 MMMM D\uc77c A h:mm",
                        llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
                        RR: "MM.DD"
                    },
                    meridiem: function(_) {
                        return _ < 12 ? "\uc624\uc804" : "\uc624\ud6c4"
                    },
                    relativeTime: {
                        future: "%s \ud6c4",
                        past: "%s \uc804",
                        s: "\uba87 \ucd08",
                        m: "1\ubd84",
                        mm: "%d\ubd84",
                        h: "\ud55c \uc2dc\uac04",
                        hh: "%d\uc2dc\uac04",
                        d: "\ud558\ub8e8",
                        dd: "%d\uc77c",
                        M: "\ud55c \ub2ec",
                        MM: "%d\ub2ec",
                        y: "\uc77c \ub144",
                        yy: "%d\ub144"
                    }
                },
                pl: k,
                "pt-br": {
                    name: "pt-br",
                    weekdays: "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),
                    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
                    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    ordinal: function(_) {
                        return "".concat(_, "\xba")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "h\xe1 %s",
                        s: "poucos segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um m\xeas",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    }
                },
                pt: {
                    name: "pt",
                    weekdays: "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"),
                    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_Sa".split("_"),
                    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    ordinal: function(_) {
                        return "".concat(_, "\xba")
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "h\xe1 %s",
                        s: "alguns segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um m\xeas",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    }
                },
                ru: j,
                "es-la": R,
                es: R,
                th: {
                    name: "th",
                    weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
                    weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
                    weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),
                    months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),
                    monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
                        LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "\u0e2d\u0e35\u0e01 %s",
                        past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
                        s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
                        m: "1 \u0e19\u0e32\u0e17\u0e35",
                        mm: "%d \u0e19\u0e32\u0e17\u0e35",
                        h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                        hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                        d: "1 \u0e27\u0e31\u0e19",
                        dd: "%d \u0e27\u0e31\u0e19",
                        M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19",
                        MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19",
                        y: "1 \u0e1b\u0e35",
                        yy: "%d \u0e1b\u0e35"
                    },
                    ordinal: function(_) {
                        return "".concat(_, ".")
                    }
                },
                tr: {
                    name: "tr",
                    weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
                    months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
                    monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \xf6nce",
                        s: "birka\xe7 saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir y\u0131l",
                        yy: "%d y\u0131l"
                    },
                    ordinal: function(_) {
                        return "".concat(_, ".")
                    }
                },
                uk: N,
                vi: {
                    name: "vi",
                    weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),
                    months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),
                    weekStart: 1,
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [n\u0103m] YYYY",
                        LLL: "D MMMM [n\u0103m] YYYY HH:mm",
                        LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    formatTypes: {
                        MDHM: "LT RR",
                        YMDHM: "LT L",
                        YMDHMS: "LTS L"
                    },
                    relativeTime: {
                        future: "%s t\u1edbi",
                        past: "%s tr\u01b0\u1edbc",
                        s: "v\xe0i gi\xe2y",
                        m: "m\u1ed9t ph\xfat",
                        mm: "%d ph\xfat",
                        h: "m\u1ed9t gi\u1edd",
                        hh: "%d gi\u1edd",
                        d: "m\u1ed9t ng\xe0y",
                        dd: "%d ng\xe0y",
                        M: "m\u1ed9t th\xe1ng",
                        MM: "%d th\xe1ng",
                        y: "m\u1ed9t n\u0103m",
                        yy: "%d n\u0103m"
                    }
                },
                ro: {
                    name: "ro",
                    weekdays: "Duminic\u0103_Luni_Mar\u021bi_Miercuri_Joi_Vineri_S\xe2mb\u0103t\u0103".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
                    months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),
                    monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "acum %s",
                        s: "c\xe2teva secunde",
                        m: "un minut",
                        mm: "%d minute",
                        h: "o or\u0103",
                        hh: "%d ore",
                        d: "o zi",
                        dd: "%d zile",
                        M: "o lun\u0103",
                        MM: "%d luni",
                        y: "un an",
                        yy: "%d ani"
                    },
                    ordinal: function(_) {
                        return _
                    }
                },
                cs: O,
                he: W,
                bg: V,
                lv: {
                    name: "lv",
                    weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    weekStart: 1,
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "p\u0113c %s",
                        past: "pirms %s",
                        s: "da\u017e\u0101m sekund\u0113m",
                        m: "min\u016btes",
                        mm: "%d min\u016bt\u0113m",
                        h: "stundas",
                        hh: "%d stund\u0101m",
                        d: "dienas",
                        dd: "%d dien\u0101m",
                        M: "m\u0113ne\u0161a",
                        MM: "%d m\u0113ne\u0161iem",
                        y: "gada",
                        yy: "%d gadiem"
                    }
                },
                bn: G,
                sv: {
                    name: "sv",
                    weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),
                    weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
                    weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
                    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    ordinal: function(_) {
                        var e = _ % 10,
                            t = 1 === e || 2 === e ? "a" : "e";
                        return "[".concat(_).concat(t, "]")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd D MMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "f\xf6r %s sedan",
                        s: "n\xe5gra sekunder",
                        m: "en minut",
                        mm: "%d minuter",
                        h: "en timme",
                        hh: "%d timmar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en m\xe5nad",
                        MM: "%d m\xe5nader",
                        y: "ett \xe5r",
                        yy: "%d \xe5r"
                    }
                },
                fi: X,
                nb: {
                    name: "nb",
                    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                    weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
                    weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    ordinal: function(_) {
                        return "".concat(_, ".")
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "noen sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        M: "en m\xe5ned",
                        MM: "%d m\xe5neder",
                        y: "ett \xe5r",
                        yy: "%d \xe5r"
                    }
                },
                sk: e_,
                sl: s_,
                ur: {
                    name: "ur",
                    weekdays: "\u0627\u062a\u0648\u0627\u0631_\u067e\u06cc\u0631_\u0645\u0646\u06af\u0644_\u0628\u062f\u06be_\u062c\u0645\u0639\u0631\u0627\u062a_\u062c\u0645\u0639\u06c1_\u06c1\u0641\u062a\u06c1".split("_"),
                    months: "\u062c\u0646\u0648\u0631\u06cc_\u0641\u0631\u0648\u0631\u06cc_\u0645\u0627\u0631\u0686_\u0627\u067e\u0631\u06cc\u0644_\u0645\u0626\u06cc_\u062c\u0648\u0646_\u062c\u0648\u0644\u0627\u0626\u06cc_\u0627\u06af\u0633\u062a_\u0633\u062a\u0645\u0628\u0631_\u0627\u06a9\u062a\u0648\u0628\u0631_\u0646\u0648\u0645\u0628\u0631_\u062f\u0633\u0645\u0628\u0631".split("_"),
                    weekStart: 1,
                    weekdaysShort: "\u0627\u062a\u0648\u0627\u0631_\u067e\u06cc\u0631_\u0645\u0646\u06af\u0644_\u0628\u062f\u06be_\u062c\u0645\u0639\u0631\u0627\u062a_\u062c\u0645\u0639\u06c1_\u06c1\u0641\u062a\u06c1".split("_"),
                    monthsShort: "\u062c\u0646\u0648\u0631\u06cc_\u0641\u0631\u0648\u0631\u06cc_\u0645\u0627\u0631\u0686_\u0627\u067e\u0631\u06cc\u0644_\u0645\u0626\u06cc_\u062c\u0648\u0646_\u062c\u0648\u0644\u0627\u0626\u06cc_\u0627\u06af\u0633\u062a_\u0633\u062a\u0645\u0628\u0631_\u0627\u06a9\u062a\u0648\u0628\u0631_\u0646\u0648\u0645\u0628\u0631_\u062f\u0633\u0645\u0628\u0631".split("_"),
                    weekdaysMin: "\u0627\u062a\u0648\u0627\u0631_\u067e\u06cc\u0631_\u0645\u0646\u06af\u0644_\u0628\u062f\u06be_\u062c\u0645\u0639\u0631\u0627\u062a_\u062c\u0645\u0639\u06c1_\u06c1\u0641\u062a\u06c1".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd\u060c D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "%s \u0628\u0639\u062f",
                        past: "%s \u0642\u0628\u0644",
                        s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",
                        m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679",
                        mm: "%d \u0645\u0646\u0679",
                        h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",
                        hh: "%d \u06af\u06be\u0646\u0679\u06d2",
                        d: "\u0627\u06cc\u06a9 \u062f\u0646",
                        dd: "%d \u062f\u0646",
                        M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1",
                        MM: "%d \u0645\u0627\u06c1",
                        y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644",
                        yy: "%d \u0633\u0627\u0644"
                    }
                },
                el: {
                    name: "el",
                    weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),
                    weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),
                    weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),
                    months: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),
                    monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03b9_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0\u03c4_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    weekStart: 1,
                    relativeTime: {
                        future: "\u03c3\u03b5 %s",
                        past: "\u03c0\u03c1\u03b9\u03bd %s",
                        s: "\u03bc\u03b5\u03c1\u03b9\u03ba\u03ac \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
                        m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                        mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac",
                        h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
                        hh: "%d \u03ce\u03c1\u03b5\u03c2",
                        d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",
                        dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2",
                        M: "\u03ad\u03bd\u03b1 \u03bc\u03ae\u03bd\u03b1",
                        MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2",
                        y: "\u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
                        yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                    },
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A",
                        RR: "DD/MM"
                    }
                },
                hi: {
                    name: "hi",
                    weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
                    months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),
                    weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
                    monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),
                    weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "A h:mm \u092c\u091c\u0947",
                        LTS: "A h:mm:ss \u092c\u091c\u0947",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947",
                        LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "%s \u092e\u0947\u0902",
                        past: "%s \u092a\u0939\u0932\u0947",
                        s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",
                        m: "\u090f\u0915 \u092e\u093f\u0928\u091f",
                        mm: "%d \u092e\u093f\u0928\u091f",
                        h: "\u090f\u0915 \u0918\u0902\u091f\u093e",
                        hh: "%d \u0918\u0902\u091f\u0947",
                        d: "\u090f\u0915 \u0926\u093f\u0928",
                        dd: "%d \u0926\u093f\u0928",
                        M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",
                        MM: "%d \u092e\u0939\u0940\u0928\u0947",
                        y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
                        yy: "%d \u0935\u0930\u094d\u0937"
                    }
                },
                et: m_,
                da: {
                    name: "da",
                    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                    weekdaysShort: "s\xf8n._man._tirs._ons._tors._fre._l\xf8r.".split("_"),
                    weekdaysMin: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    ordinal: function(_) {
                        return "".concat(_, ".")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D. MMM YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
                        RR: "D. MMM"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "f\xe5 sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en m\xe5ned",
                        MM: "%d m\xe5neder",
                        y: "et \xe5r",
                        yy: "%d \xe5r"
                    }
                },
                lt: Y_,
                hr: p_,
                sr: y_,
                bs: {
                    name: "bs",
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                    weekStart: 1,
                    weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm",
                        RR: "DD.MM"
                    }
                },
                kk: D_,
                kz: D_,
                hu: {
                    name: "hu",
                    weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),
                    weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),
                    monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),
                    ordinal: function(_) {
                        return "".concat(_, ".")
                    },
                    weekStart: 1,
                    relativeTime: {
                        future: "%s m\xfalva",
                        past: "%s",
                        s: function(_, e, t, a) {
                            return "n\xe9h\xe1ny m\xe1sodperc".concat(a || e ? "" : "e")
                        },
                        m: function(_, e, t, a) {
                            return "egy perc".concat(a || e ? "" : "e")
                        },
                        mm: function(_, e, t, a) {
                            return "".concat(_, " perc").concat(a || e ? "" : "e")
                        },
                        h: function(_, e, t, a) {
                            return "egy ".concat(a || e ? "\xf3ra" : "\xf3r\xe1ja")
                        },
                        hh: function(_, e, t, a) {
                            return "".concat(_, " ").concat(a || e ? "\xf3ra" : "\xf3r\xe1ja")
                        },
                        d: function(_, e, t, a) {
                            return "egy ".concat(a || e ? "nap" : "napja")
                        },
                        dd: function(_, e, t, a) {
                            return "".concat(_, " ").concat(a || e ? "nap" : "napja")
                        },
                        M: function(_, e, t, a) {
                            return "egy ".concat(a || e ? "h\xf3nap" : "h\xf3napja")
                        },
                        MM: function(_, e, t, a) {
                            return "".concat(_, " ").concat(a || e ? "h\xf3nap" : "h\xf3napja")
                        },
                        y: function(_, e, t, a) {
                            return "egy ".concat(a || e ? "\xe9v" : "\xe9ve")
                        },
                        yy: function(_, e, t, a) {
                            return "".concat(_, " ").concat(a || e ? "\xe9v" : "\xe9ve")
                        }
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm",
                        RR: "MM.DD"
                    }
                },
                my: {
                    name: "my",
                    weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),
                    months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),
                    weekStart: 1,
                    weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
                    monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),
                    weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",
                        past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",
                        s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",
                        m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",
                        mm: "%d \u1019\u102d\u1014\u1005\u103a",
                        h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e",
                        hh: "%d \u1014\u102c\u101b\u102e",
                        d: "\u1010\u1005\u103a\u101b\u1000\u103a",
                        dd: "%d \u101b\u1000\u103a",
                        M: "\u1010\u1005\u103a\u101c",
                        MM: "%d \u101c",
                        y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a",
                        yy: "%d \u1014\u103e\u1005\u103a"
                    }
                },
                lo: {
                    name: "lo",
                    weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
                    months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
                    weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
                    monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
                    weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "\u0ead\u0eb5\u0e81 %s",
                        past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",
                        s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
                        m: "1 \u0e99\u0eb2\u0e97\u0eb5",
                        mm: "%d \u0e99\u0eb2\u0e97\u0eb5",
                        h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
                        hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
                        d: "1 \u0ea1\u0eb7\u0ec9",
                        dd: "%d \u0ea1\u0eb7\u0ec9",
                        M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",
                        MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",
                        y: "1 \u0e9b\u0eb5",
                        yy: "%d \u0e9b\u0eb5"
                    }
                },
                si: {
                    name: "si",
                    weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),
                    months: "\u0daf\u0dd4\u0dbb\u0dd4\u0dad\u0dd4_\u0db1\u0dc0\u0db8\u0dca_\u0db8\u0dd0\u0daf\u0dd2\u0db1\u0dca_\u0db6\u0d9a\u0dca_\u0dc0\u0dd9\u0dc3\u0d9a\u0dca_\u0db4\u0ddc\u0dc3\u0ddc\u0db1\u0dca_\u0d87\u0dc3\u0dc5_\u0db1\u0dd2\u0d9a\u0dd2\u0dab\u0dd2_\u0db6\u0dd2\u0db1\u0dbb_\u0dc0\u0db4\u0dca_\u0d89\u0dbd\u0dca_\u0d8b\u0db3\u0dd4\u0dc0\u0db4\u0dca".split("_"),
                    weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),
                    monthsShort: "\u0daf\u0dd4\u0dbb\u0dd4_\u0db1\u0dc0_\u0db8\u0dd0\u0daf\u0dd2_\u0db6\u0d9a\u0dca_\u0dc0\u0dd9\u0dc3_\u0db4\u0ddc\u0dc3\u0ddc_\u0d87\u0dc3_\u0db1\u0dd2\u0d9a\u0dd2_\u0db6\u0dd2\u0db1_\u0dc0\u0db4\u0dca_\u0d89\u0dbd\u0dca_\u0d8b\u0db3\u0dd4".split("_"),
                    weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "a h:mm",
                        LTS: "a h:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY MMMM D",
                        LLL: "YYYY MMMM D, a h:mm",
                        LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss",
                        RR: "MM/DD"
                    },
                    relativeTime: {
                        future: "%s\u0d9a\u0dd2\u0db1\u0dca",
                        past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",
                        s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",
                        m: "\u0dc0\u0dd2\u0db1\u0dcf\u0da9\u0dd2\u0dba",
                        mm: "\u0dc0\u0dd2\u0db1\u0dcf\u0da9\u0dd2 %d",
                        h: "\u0db4\u0dd0\u0dba",
                        hh: "\u0db4\u0dd0\u0dba %d",
                        d: "\u0daf\u0dd2\u0db1\u0dba",
                        dd: "\u0daf\u0dd2\u0db1 %d",
                        M: "\u0db8\u0dcf\u0dc3\u0dba",
                        MM: "\u0db8\u0dcf\u0dc3 %d",
                        y: "\u0dc0\u0dc3\u0dbb",
                        yy: "\u0dc0\u0dc3\u0dbb %d"
                    }
                },
                az: {
                    name: "az",
                    weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),
                    weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),
                    weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0433.",
                        LLL: "D MMMM YYYY \u0433., H:mm",
                        LLLL: "dddd, D MMMM YYYY \u0433., H:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \u0259vv\u0259l",
                        s: "bir ne\xe7\u0259 saniy\u0259",
                        m: "bir d\u0259qiq\u0259",
                        mm: "%d d\u0259qiq\u0259",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir il",
                        yy: "%d il"
                    },
                    ordinal: function(_) {
                        return _
                    }
                },
                km: {
                    name: "km",
                    weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),
                    months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
                    weekStart: 1,
                    weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
                    monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
                    weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
                    ordinal: function(_) {
                        return _
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "%s\u1791\u17c0\u178f",
                        past: "%s\u1798\u17bb\u1793",
                        s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",
                        m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",
                        mm: "%d \u1793\u17b6\u1791\u17b8",
                        h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",
                        hh: "%d \u1798\u17c9\u17c4\u1784",
                        d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",
                        dd: "%d \u1790\u17d2\u1784\u17c3",
                        M: "\u1798\u17bd\u1799\u1781\u17c2",
                        MM: "%d \u1781\u17c2",
                        y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",
                        yy: "%d \u1786\u17d2\u1793\u17b6\u17c6"
                    }
                },
                ka: {
                    name: "ka",
                    weekdays: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),
                    weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),
                    weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),
                    months: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),
                    monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "%s \u10e8\u10d4\u10db\u10d3\u10d4\u10d2",
                        past: "%s \u10ec\u10d8\u10dc",
                        s: "\u10ec\u10d0\u10db\u10d8",
                        m: "\u10ec\u10e3\u10d7\u10d8",
                        mm: "%d \u10ec\u10e3\u10d7\u10d8",
                        h: "\u10e1\u10d0\u10d0\u10d7\u10d8",
                        hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1",
                        d: "\u10d3\u10e6\u10d4\u10e1",
                        dd: "%d \u10d3\u10e6\u10d8\u10e1 \u10d2\u10d0\u10dc\u10db\u10d0\u10d5\u10da\u10dd\u10d1\u10d0\u10e8\u10d8",
                        M: "\u10d7\u10d5\u10d8\u10e1",
                        MM: "%d \u10d7\u10d5\u10d8\u10e1",
                        y: "\u10ec\u10d4\u10da\u10d8",
                        yy: "%d \u10ec\u10da\u10d8\u10e1"
                    },
                    ordinal: function(_) {
                        return _
                    }
                }
            };
            m().extend(d());
            var H_ = null;

            function f_() {
                var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en",
                    e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    t = o(_),
                    a = k_[t];
                return a || (a = k_.en), a = (0, s.A)((0, n.A)({}, a), {
                    formats: (0, n.A)({}, Y, a.formats)
                }), m().locale(H_, null, !e), e && (H_ = a), a
            }

            function v_(_, e, t) {
                if (t) {
                    var n = f_(t, !1),
                        s = e ? l(e, n) : a.L;
                    return m()(_).locale(n.name).format(s)
                }
                var r = e ? l(e, H_) : a.L;
                return m()(_).format(r)
            }

            function S_() {
                return H_
            }
            f_("en")
        },
        OShd: (_, e, t) => {
            t.d(e, {
                P: () => M,
                U: () => d
            });
            var a = t("BK7R"),
                n = t("VyXn"),
                s = t("tKUM"),
                r = t("LhI6"),
                m = t("jhL5");
            var i = (0, m.yV)("theme", !0),
                d = "commonModel",
                M = (0, n.NP)({
                    state: {
                        theme: i,
                        headerHeight: 64,
                        isLogged: !1,
                        userInfo: {},
                        customNavigatorContentHeight: m.Lj,
                        navigatorStyleInfo: {
                            style: {},
                            titleInTop: !0
                        },
                        systemInfo: (0, m.yV)(),
                        appSettings: {}
                    },
                    actions: {
                        setTheme: function(_) {
                            this.theme = _
                        },
                        setAppSettings: function(_) {
                            this.appSettings = _
                        },
                        setUserInfo: function(_) {
                            this.userInfo = _
                        },
                        setLoginStatus: function(_) {
                            this.isLogged = _
                        },
                        setCustomNavigatorHeight: function(_) {
                            this.customNavigatorContentHeight = _
                        },
                        setNavigatorStyleInfo: function(_) {
                            this.navigatorStyleInfo = (0, a.A)({}, this.navigatorStyleInfo, _)
                        },
                        resetNavigatorToTopOrBottom: function(_) {
                            if (_) {
                                if (this.customNavigatorContentHeight === m.Lj) return;
                                this.setCustomNavigatorHeight(m.Lj), this.setNavigatorStyleInfo({
                                    style: {},
                                    titleInTop: !0
                                })
                            } else {
                                if (this.customNavigatorContentHeight === m.zw) return;
                                this.setCustomNavigatorHeight(m.zw), this.setNavigatorStyleInfo({
                                    style: {},
                                    titleInTop: !1
                                })
                            }
                        },
                        updateSystemInfo: function(_) {
                            var e;
                            ("object" !== typeof(e = _) || 0 !== Object.keys(e).length) && (this.systemInfo = (0, a.A)({}, this.systemInfo, _))
                        }
                    },
                    views: {
                        isDevTools: function(_) {
                            var e;
                            return "devtools" === (null === (e = _.systemInfo) || void 0 === e ? void 0 : e.platform)
                        },
                        isIOS: function(_) {
                            var e, t, a;
                            return "ios" === (null === (e = _.systemInfo) || void 0 === e || null === (t = e.platform) || void 0 === t || null === (a = t.toLocaleLowerCase) || void 0 === a ? void 0 : a.call(t))
                        },
                        isAndroid: function(_) {
                            var e, t, a;
                            return "android" === (null === (e = _.systemInfo) || void 0 === e || null === (t = e.platform) || void 0 === t || null === (a = t.toLocaleLowerCase) || void 0 === a ? void 0 : a.call(t))
                        },
                        statusBarHeight: function(_) {
                            return null == _.systemInfo.statusBarHeight ? 44 : _.systemInfo.statusBarHeight
                        },
                        safeAreaInsetsBottom: function(_) {
                            var e, t, a;
                            return "android" === (null === (e = _.systemInfo) || void 0 === e || null === (t = e.platform) || void 0 === t || null === (a = t.toLocaleLowerCase) || void 0 === a ? void 0 : a.call(t)) && (0, r.c0)("2.96.0") || null == _.systemInfo.safeArea ? 0 : _.systemInfo.screenHeight - _.systemInfo.safeArea.bottom
                        },
                        lang: function(_) {
                            var e = _.systemInfo.language || (0, m.yV)("language") || "en";
                            return m.x9[e] || e
                        },
                        isRTL: function() {
                            return "rtl" === (0, s.dir)(this.lang)
                        }
                    }
                })
        },
        LhI6: (_, e, t) => {
            t.d(e, {
                c0: () => r,
                m0: () => s,
                un: () => n
            });
            var a = t("jhL5");

            function n(_) {
                var e = _ || (null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) || "";
                return /ip(hone|od)|ipad/i.test(e)
            }

            function s(_) {
                var e = _ || (null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) || "";
                return /android/i.test(e) && !n()
            }

            function r(_) {
                var e = (0, a.yV)("version").split("."),
                    t = _.split("."),
                    n = e.length;
                if (n !== t.length) return n > t.length;
                for (var s = 0; s < n; s++) {
                    var r = parseInt(t[s], 10),
                        m = parseInt(e[s], 10);
                    if (m > r) return !0;
                    if (m < r) return !1
                }
                return !0
            }
        }
    }
]);
//# debugId=4a6824e2-b823-5f2e-aecc-596f21327388