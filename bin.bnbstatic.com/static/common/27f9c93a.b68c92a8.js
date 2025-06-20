! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7e4a32f5-51dd-5063-af59-570d23d0d2a3")
    } catch (e) {}
}();
(self.webpackChunkmuses_ui = self.webpackChunkmuses_ui || []).push([
    [257], {
        "3as9": (i, s, e) => {
            var o;
            ! function(r, a) {
                "use strict";
                var n = "function",
                    t = "undefined",
                    l = "object",
                    w = "string",
                    d = "model",
                    b = "name",
                    u = "type",
                    c = "vendor",
                    m = "version",
                    p = "architecture",
                    h = "console",
                    f = "mobile",
                    g = "tablet",
                    v = "smarttv",
                    x = "wearable",
                    k = "embedded",
                    y = {
                        extend: function(i, s) {
                            var e = {};
                            for (var o in i) s[o] && s[o].length % 2 === 0 ? e[o] = s[o].concat(i[o]) : e[o] = i[o];
                            return e
                        },
                        has: function(i, s) {
                            return typeof i === w && -1 !== s.toLowerCase().indexOf(i.toLowerCase())
                        },
                        lowerize: function(i) {
                            return i.toLowerCase()
                        },
                        major: function(i) {
                            return typeof i === w ? i.replace(/[^\d\.]/g, "").split(".")[0] : a
                        },
                        trim: function(i, s) {
                            return i = i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof s === t ? i : i.substring(0, 255)
                        }
                    },
                    S = {
                        rgx: function(i, s) {
                            for (var e, o, r, t, w, d, b = 0; b < s.length && !w;) {
                                var u = s[b],
                                    c = s[b + 1];
                                for (e = o = 0; e < u.length && !w;)
                                    if (w = u[e++].exec(i))
                                        for (r = 0; r < c.length; r++) d = w[++o], typeof(t = c[r]) === l && t.length > 0 ? 2 == t.length ? typeof t[1] == n ? this[t[0]] = t[1].call(this, d) : this[t[0]] = t[1] : 3 == t.length ? typeof t[1] !== n || t[1].exec && t[1].test ? this[t[0]] = d ? d.replace(t[1], t[2]) : a : this[t[0]] = d ? t[1].call(this, d, t[2]) : a : 4 == t.length && (this[t[0]] = d ? t[3].call(this, d.replace(t[1], t[2])) : a) : this[t] = d || a;
                                b += 2
                            }
                        },
                        str: function(i, s) {
                            for (var e in s)
                                if (typeof s[e] === l && s[e].length > 0) {
                                    for (var o = 0; o < s[e].length; o++)
                                        if (y.has(s[e][o], i)) return "?" === e ? a : e
                                } else if (y.has(s[e], i)) return "?" === e ? a : e;
                            return i
                        }
                    },
                    E = {
                        browser: {
                            oldSafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            },
                            oldEdge: {
                                version: {
                                    .1: "12.",
                                    21: "13.",
                                    31: "14.",
                                    39: "15.",
                                    41: "16.",
                                    42: "17.",
                                    44: "18."
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    A = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [m, [b, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [m, [b, "Edge"]],
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                            [b, m],
                            [/opios[\/\s]+([\w\.]+)/i],
                            [m, [b, "Opera Mini"]],
                            [/\sopr\/([\w\.]+)/i],
                            [m, [b, "Opera"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [b, m],
                            [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [m, [b, "UCBrowser"]],
                            [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                            [m, [b, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [m, [b, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [m, [b, "Konqueror"]],
                            [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                            [m, [b, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [m, [b, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [b, /(.+)/, "$1 Secure Browser"], m
                            ],
                            [/focus\/([\w\.]+)/i],
                            [m, [b, "Firefox Focus"]],
                            [/opt\/([\w\.]+)/i],
                            [m, [b, "Opera Touch"]],
                            [/coc_coc_browser\/([\w\.]+)/i],
                            [m, [b, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [m, [b, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [m, [b, "Opera Coast"]],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [m, [b, "MIUI Browser"]],
                            [/fxios\/([\w\.-]+)/i],
                            [m, [b, "Firefox"]],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [
                                [b, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                            [
                                [b, /(.+)/, "$1 Browser"], m
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [b, /_/g, " "], m
                            ],
                            [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                            [b, m],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                            [b],
                            [/;fbav\/([\w\.]+);/i],
                            [m, [b, "Facebook"]],
                            [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                            [
                                [b, "Facebook"]
                            ],
                            [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                            [b, m],
                            [/\bgsa\/([\w\.]+)\s.*safari\//i],
                            [m, [b, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [m, [b, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [b, "Chrome WebView"], m
                            ],
                            [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                            [m, [b, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [b, m],
                            [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                            [m, [b, "Mobile Safari"]],
                            [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                            [m, b],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [b, [m, S.str, E.browser.oldSafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [b, m],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [b, "Netscape"], m
                            ],
                            [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                            [m, [b, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [b, m]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [p, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [p, y.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [p, "ia32"]
                            ],
                            [/\b(aarch64|armv?8e?l?)\b/i],
                            [
                                [p, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [p, "armhf"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [p, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [p, /ower/, "", y.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [p, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [p, y.lowerize]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                            [d, [c, "Samsung"],
                                [u, g]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                            [d, [c, "Samsung"],
                                [u, f]
                            ],
                            [/\((ip(?:hone|od)[\s\w]*);/i],
                            [d, [c, "Apple"],
                                [u, f]
                            ],
                            [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [c, "Apple"],
                                [u, g]
                            ],
                            [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                            [d, [c, "Huawei"],
                                [u, g]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                            [d, [c, "Huawei"],
                                [u, f]
                            ],
                            [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                            [
                                [d, /_/g, " "],
                                [c, "Xiaomi"],
                                [u, f]
                            ],
                            [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                            [
                                [d, /_/g, " "],
                                [c, "Xiaomi"],
                                [u, g]
                            ],
                            [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                            [d, [c, "OPPO"],
                                [u, f]
                            ],
                            [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                            [d, [c, "Vivo"],
                                [u, f]
                            ],
                            [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                            [d, [c, "Realme"],
                                [u, f]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                            [d, [c, "Motorola"],
                                [u, f]
                            ],
                            [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [d, [c, "Motorola"],
                                [u, g]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                            [d, [c, "LG"],
                                [u, g]
                            ],
                            [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                            [d, [c, "LG"],
                                [u, f]
                            ],
                            [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                            [d, [c, "Lenovo"],
                                [u, g]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                            [
                                [d, /_/g, " "],
                                [c, "Nokia"],
                                [u, f]
                            ],
                            [/droid.+;\s(pixel\sc)[\s)]/i],
                            [d, [c, "Google"],
                                [u, g]
                            ],
                            [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                            [d, [c, "Google"],
                                [u, f]
                            ],
                            [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [c, "Sony"],
                                [u, f]
                            ],
                            [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [c, "Sony"],
                                [u, g]
                            ],
                            [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                            [d, [c, "OnePlus"],
                                [u, f]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                            [d, [c, "Amazon"],
                                [u, g]
                            ],
                            [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                            [
                                [d, "Fire Phone"],
                                [c, "Amazon"],
                                [u, f]
                            ],
                            [/\((playbook);[\w\s\),;-]+(rim)/i],
                            [d, c, [u, g]],
                            [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                            [d, [c, "BlackBerry"],
                                [u, f]
                            ],
                            [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                            [d, [c, "ASUS"],
                                [u, g]
                            ],
                            [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                            [d, [c, "ASUS"],
                                [u, f]
                            ],
                            [/(nexus\s9)/i],
                            [d, [c, "HTC"],
                                [u, g]
                            ],
                            [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [c, [d, /_/g, " "],
                                [u, f]
                            ],
                            [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [d, [c, "Acer"],
                                [u, g]
                            ],
                            [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                            [d, [c, "Meizu"],
                                [u, f]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [c, d, [u, f]],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
                            [c, d, [u, g]],
                            [/\s(surface\sduo)\s/i],
                            [d, [c, "Microsoft"],
                                [u, g]
                            ],
                            [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                            [d, [c, "Fairphone"],
                                [u, f]
                            ],
                            [/\s(u304aa)\sbuild/i],
                            [d, [c, "AT&T"],
                                [u, f]
                            ],
                            [/sie-(\w*)/i],
                            [d, [c, "Siemens"],
                                [u, f]
                            ],
                            [/[;\/]\s?(rct\w+)\sbuild/i],
                            [d, [c, "RCA"],
                                [u, g]
                            ],
                            [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                            [d, [c, "Dell"],
                                [u, g]
                            ],
                            [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                            [d, [c, "Verizon"],
                                [u, g]
                            ],
                            [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                            [d, [c, "Barnes & Noble"],
                                [u, g]
                            ],
                            [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                            [d, [c, "NuVision"],
                                [u, g]
                            ],
                            [/;\s(k88)\sbuild/i],
                            [d, [c, "ZTE"],
                                [u, g]
                            ],
                            [/;\s(nx\d{3}j)\sbuild/i],
                            [d, [c, "ZTE"],
                                [u, f]
                            ],
                            [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                            [d, [c, "Swiss"],
                                [u, f]
                            ],
                            [/[;\/]\s?(zur\d{3})\sbuild/i],
                            [d, [c, "Swiss"],
                                [u, g]
                            ],
                            [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                            [d, [c, "Zeki"],
                                [u, g]
                            ],
                            [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                            [
                                [c, "Dragon Touch"], d, [u, g]
                            ],
                            [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                            [d, [c, "Insignia"],
                                [u, g]
                            ],
                            [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                            [d, [c, "NextBook"],
                                [u, g]
                            ],
                            [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                            [
                                [c, "Voice"], d, [u, f]
                            ],
                            [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                            [
                                [c, "LvTel"], d, [u, f]
                            ],
                            [/;\s(ph-1)\s/i],
                            [d, [c, "Essential"],
                                [u, f]
                            ],
                            [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                            [d, [c, "Envizen"],
                                [u, g]
                            ],
                            [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                            [d, [c, "MachSpeed"],
                                [u, g]
                            ],
                            [/[;\/]\s?tu_(1491)\sbuild/i],
                            [d, [c, "Rotor"],
                                [u, g]
                            ],
                            [/(shield[\w\s]+)\sbuild/i],
                            [d, [c, "Nvidia"],
                                [u, g]
                            ],
                            [/(sprint)\s(\w+)/i],
                            [c, d, [u, f]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [c, "Microsoft"],
                                [u, f]
                            ],
                            [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [c, "Zebra"],
                                [u, g]
                            ],
                            [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [c, "Zebra"],
                                [u, f]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                            [c, d, [u, h]],
                            [/droid.+;\s(shield)\sbuild/i],
                            [d, [c, "Nvidia"],
                                [u, h]
                            ],
                            [/(playstation\s[345portablevi]+)/i],
                            [d, [c, "Sony"],
                                [u, h]
                            ],
                            [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                            [d, [c, "Microsoft"],
                                [u, h]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [c, [u, v]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [c, "Samsung"],
                                [u, v]
                            ],
                            [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                            [
                                [c, "LG"],
                                [u, v]
                            ],
                            [/(apple)\s?tv/i],
                            [c, [d, "Apple TV"],
                                [u, v]
                            ],
                            [/crkey/i],
                            [
                                [d, "Chromecast"],
                                [c, "Google"],
                                [u, v]
                            ],
                            [/droid.+aft([\w])(\sbuild\/|\))/i],
                            [d, [c, "Amazon"],
                                [u, v]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [d, [c, "Sharp"],
                                [u, v]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [c, y.trim],
                                [d, y.trim],
                                [u, v]
                            ],
                            [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                            [
                                [u, v]
                            ],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [c, d, [u, x]],
                            [/droid.+;\s(glass)\s\d/i],
                            [d, [c, "Google"],
                                [u, x]
                            ],
                            [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                            [d, [c, "Zebra"],
                                [u, x]
                            ],
                            [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                            [c, [u, k]],
                            [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                            [d, [u, f]],
                            [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                            [d, [u, g]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [u, y.lowerize]
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [d, [c, "Generic"]],
                            [/(phone)/i],
                            [
                                [u, f]
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [m, [b, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [m, [b, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [b, m],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [m, b]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [b, m],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                            [b, [m, S.str, E.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [b, "Windows"],
                                [m, S.str, E.os.windows.version]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [m, /_/g, "."],
                                [b, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                            [
                                [b, "Mac OS"],
                                [m, /_/g, "."]
                            ],
                            [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                            [b, m],
                            [/\(bb(10);/i],
                            [m, [b, "BlackBerry"]],
                            [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                            [m, [b, "Symbian"]],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [b, "Firefox OS"]
                            ],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [m, [b, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [m, [b, "Chromecast"]],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [b, "Chromium OS"], m
                            ],
                            [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
                            [b, m],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [b, "Solaris"], m
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [b, m]
                        ]
                    },
                    _ = function(i, s) {
                        if ("object" === typeof i && (s = i, i = a), !(this instanceof _)) return new _(i, s).getResult();
                        var e = i || ("undefined" !== typeof r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                            o = s ? y.extend(A, s) : A;
                        return this.getBrowser = function() {
                            var i = {
                                name: a,
                                version: a
                            };
                            return S.rgx.call(i, e, o.browser), i.major = y.major(i.version), i
                        }, this.getCPU = function() {
                            var i = {
                                architecture: a
                            };
                            return S.rgx.call(i, e, o.cpu), i
                        }, this.getDevice = function() {
                            var i = {
                                vendor: a,
                                model: a,
                                type: a
                            };
                            return S.rgx.call(i, e, o.device), i
                        }, this.getEngine = function() {
                            var i = {
                                name: a,
                                version: a
                            };
                            return S.rgx.call(i, e, o.engine), i
                        }, this.getOS = function() {
                            var i = {
                                name: a,
                                version: a
                            };
                            return S.rgx.call(i, e, o.os), i
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return e
                        }, this.setUA = function(i) {
                            return e = typeof i === w && i.length > 255 ? y.trim(i, 255) : i, this
                        }, this.setUA(e), this
                    };
                _.VERSION = "0.7.28", _.BROWSER = {
                    NAME: b,
                    MAJOR: "major",
                    VERSION: m
                }, _.CPU = {
                    ARCHITECTURE: p
                }, _.DEVICE = {
                    MODEL: d,
                    VENDOR: c,
                    TYPE: u,
                    CONSOLE: h,
                    MOBILE: f,
                    SMARTTV: v,
                    TABLET: g,
                    WEARABLE: x,
                    EMBEDDED: k
                }, _.ENGINE = {
                    NAME: b,
                    VERSION: m
                }, _.OS = {
                    NAME: b,
                    VERSION: m
                }, typeof s !== t ? (i.exports && (s = i.exports = _), s.UAParser = _) : (o = function() {
                    return _
                }.call(s, e, s, i)) === a || (i.exports = o);
                var N = "undefined" !== typeof r && (r.jQuery || r.Zepto);
                if (N && !N.ua) {
                    var T = new _;
                    N.ua = T.getResult(), N.ua.get = function() {
                        return T.getUA()
                    }, N.ua.set = function(i) {
                        T.setUA(i);
                        var s = T.getResult();
                        for (var e in s) N.ua[e] = s[e]
                    }
                }
            }(window)
        }
    }
]);
//# debugId=7e4a32f5-51dd-5063-af59-570d23d0d2a3