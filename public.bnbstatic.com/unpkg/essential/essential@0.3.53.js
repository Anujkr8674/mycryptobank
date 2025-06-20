/*! For license information please see essential@0.3.53.js.LICENSE.txt */ ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports._bne = t() : e._bne = t()
}(self, (() => (() => {
    var e = {
            232: (e, t, r) => {
                var n;
                ! function(i, o) {
                    "use strict";
                    var a = "function",
                        s = "undefined",
                        c = "object",
                        u = "string",
                        l = "major",
                        d = "model",
                        f = "name",
                        p = "type",
                        h = "vendor",
                        g = "version",
                        w = "architecture",
                        b = "console",
                        v = "mobile",
                        m = "tablet",
                        y = "smarttv",
                        x = "wearable",
                        _ = "embedded",
                        T = "Amazon",
                        S = "Apple",
                        E = "ASUS",
                        O = "BlackBerry",
                        k = "Browser",
                        A = "Chrome",
                        C = "Firefox",
                        B = "Google",
                        P = "Huawei",
                        R = "LG",
                        I = "Microsoft",
                        N = "Motorola",
                        M = "Opera",
                        D = "Samsung",
                        L = "Sharp",
                        j = "Sony",
                        U = "Xiaomi",
                        F = "Zebra",
                        G = "Facebook",
                        V = "Chromium OS",
                        H = "Mac OS",
                        z = function(e) {
                            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
                            return t
                        },
                        W = function(e, t) {
                            return typeof e === u && -1 !== q(t).indexOf(q(e))
                        },
                        q = function(e) {
                            return e.toLowerCase()
                        },
                        X = function(e, t) {
                            if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
                        },
                        K = function(e, t) {
                            for (var r, n, i, s, u, l, d = 0; d < t.length && !u;) {
                                var f = t[d],
                                    p = t[d + 1];
                                for (r = n = 0; r < f.length && !u && f[r];)
                                    if (u = f[r++].exec(e))
                                        for (i = 0; i < p.length; i++) l = u[++n], typeof(s = p[i]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
                                d += 2
                            }
                        },
                        Z = function(e, t) {
                            for (var r in t)
                                if (typeof t[r] === c && t[r].length > 0) {
                                    for (var n = 0; n < t[r].length; n++)
                                        if (W(t[r][n], e)) return "?" === r ? o : r
                                } else if (W(t[r], e)) return "?" === r ? o : r;
                            return e
                        },
                        J = {
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
                        },
                        $ = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [g, [f, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [g, [f, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [f, g],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [g, [f, M + " Mini"]],
                                [/\bop(?:rg)?x\/([\w\.]+)/i],
                                [g, [f, M + " GX"]],
                                [/\bopr\/([\w\.]+)/i],
                                [g, [f, M]],
                                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                                [g, [f, "Baidu"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [f, g],
                                [/\bddg\/([\w\.]+)/i],
                                [g, [f, "DuckDuckGo"]],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [g, [f, "UC" + k]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                                [g, [f, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [g, [f, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [g, [f, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [g, [f, "Yandex"]],
                                [/slbrowser\/([\w\.]+)/i],
                                [g, [f, "Smart Lenovo " + k]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 Secure " + k], g
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [g, [f, C + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [g, [f, M + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [g, [f, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [g, [f, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [g, [f, M + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [g, [f, "MIUI " + k]],
                                [/fxios\/([-\w\.]+)/i],
                                [g, [f, C]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [f, "360 " + k]
                                ],
                                [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 " + k], g
                                ],
                                [/samsungbrowser\/([\w\.]+)/i],
                                [g, [f, D + " Internet"]],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [f, /_/g, " "], g
                                ],
                                [/metasr[\/ ]?([\d\.]+)/i],
                                [g, [f, "Sogou Explorer"]],
                                [/(sogou)mo\w+\/([\d\.]+)/i],
                                [
                                    [f, "Sogou Mobile"], g
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [f, g],
                                [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [f],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [f, G], g
                                ],
                                [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                [f, g],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [g, [f, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [g, [f, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [g, [f, A + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [f, A + " WebView"], g
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [g, [f, "Android " + k]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [f, g],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [g, [f, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [g, f],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [f, [g, Z, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [f, g],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [f, "Netscape"], g
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [g, [f, C + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [f, g],
                                [/(cobalt)\/([\w\.]+)/i],
                                [f, [g, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [w, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [w, q]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [w, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [w, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [w, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [w, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [w, /ower/, "", q]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [w, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [w, q]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [d, [h, D],
                                    [p, m]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [d, [h, D],
                                    [p, v]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [d, [h, S],
                                    [p, v]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [d, [h, S],
                                    [p, m]
                                ],
                                [/(macintosh);/i],
                                [d, [h, S]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [d, [h, L],
                                    [p, v]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [d, [h, P],
                                    [p, m]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [d, [h, P],
                                    [p, v]
                                ],
                                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [h, U],
                                    [p, v]
                                ],
                                [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [h, U],
                                    [p, m]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [d, [h, "OPPO"],
                                    [p, v]
                                ],
                                [/\b(opd2\d{3}a?) bui/i],
                                [d, [h, "OPPO"],
                                    [p, m]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [d, [h, "Vivo"],
                                    [p, v]
                                ],
                                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                                [d, [h, "Realme"],
                                    [p, v]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [d, [h, N],
                                    [p, v]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [d, [h, N],
                                    [p, m]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [d, [h, R],
                                    [p, m]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [d, [h, R],
                                    [p, v]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [d, [h, "Lenovo"],
                                    [p, m]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [d, /_/g, " "],
                                    [h, "Nokia"],
                                    [p, v]
                                ],
                                [/(pixel c)\b/i],
                                [d, [h, B],
                                    [p, m]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [d, [h, B],
                                    [p, v]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [d, [h, j],
                                    [p, v]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [d, "Xperia Tablet"],
                                    [h, j],
                                    [p, m]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [d, [h, "OnePlus"],
                                    [p, v]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [d, [h, T],
                                    [p, m]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [d, /(.+)/g, "Fire Phone $1"],
                                    [h, T],
                                    [p, v]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [d, h, [p, m]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [d, [h, O],
                                    [p, v]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [d, [h, E],
                                    [p, m]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [d, [h, E],
                                    [p, v]
                                ],
                                [/(nexus 9)/i],
                                [d, [h, "HTC"],
                                    [p, m]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [h, [d, /_/g, " "],
                                    [p, v]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [d, [h, "Acer"],
                                    [p, m]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [d, [h, "Meizu"],
                                    [p, v]
                                ],
                                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                                [d, [h, "Ulefone"],
                                    [p, v]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [h, d, [p, v]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [h, d, [p, m]],
                                [/(surface duo)/i],
                                [d, [h, I],
                                    [p, m]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [d, [h, "Fairphone"],
                                    [p, v]
                                ],
                                [/(u304aa)/i],
                                [d, [h, "AT&T"],
                                    [p, v]
                                ],
                                [/\bsie-(\w*)/i],
                                [d, [h, "Siemens"],
                                    [p, v]
                                ],
                                [/\b(rct\w+) b/i],
                                [d, [h, "RCA"],
                                    [p, m]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [d, [h, "Dell"],
                                    [p, m]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [d, [h, "Verizon"],
                                    [p, m]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [d, [h, "Barnes & Noble"],
                                    [p, m]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [d, [h, "NuVision"],
                                    [p, m]
                                ],
                                [/\b(k88) b/i],
                                [d, [h, "ZTE"],
                                    [p, m]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [d, [h, "ZTE"],
                                    [p, v]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [d, [h, "Swiss"],
                                    [p, v]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [d, [h, "Swiss"],
                                    [p, m]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [d, [h, "Zeki"],
                                    [p, m]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [h, "Dragon Touch"], d, [p, m]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [d, [h, "Insignia"],
                                    [p, m]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [d, [h, "NextBook"],
                                    [p, m]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [h, "Voice"], d, [p, v]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [h, "LvTel"], d, [p, v]
                                ],
                                [/\b(ph-1) /i],
                                [d, [h, "Essential"],
                                    [p, v]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [d, [h, "Envizen"],
                                    [p, m]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [d, [h, "MachSpeed"],
                                    [p, m]
                                ],
                                [/\btu_(1491) b/i],
                                [d, [h, "Rotor"],
                                    [p, m]
                                ],
                                [/(shield[\w ]+) b/i],
                                [d, [h, "Nvidia"],
                                    [p, m]
                                ],
                                [/(sprint) (\w+)/i],
                                [h, d, [p, v]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [d, /\./g, " "],
                                    [h, I],
                                    [p, v]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [d, [h, F],
                                    [p, m]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [d, [h, F],
                                    [p, v]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [h, [p, y]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [d, /^/, "SmartTV"],
                                    [h, D],
                                    [p, y]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [h, R],
                                    [p, y]
                                ],
                                [/(apple) ?tv/i],
                                [h, [d, S + " TV"],
                                    [p, y]
                                ],
                                [/crkey/i],
                                [
                                    [d, A + "cast"],
                                    [h, B],
                                    [p, y]
                                ],
                                [/droid.+aft(\w+)( bui|\))/i],
                                [d, [h, T],
                                    [p, y]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [d, [h, L],
                                    [p, y]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [d, [h, j],
                                    [p, y]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [d, [h, U],
                                    [p, y]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [h, d, [p, y]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [h, X],
                                    [d, X],
                                    [p, y]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [p, y]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [h, d, [p, b]],
                                [/droid.+; (shield) bui/i],
                                [d, [h, "Nvidia"],
                                    [p, b]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [d, [h, j],
                                    [p, b]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [d, [h, I],
                                    [p, b]
                                ],
                                [/((pebble))app/i],
                                [h, d, [p, x]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [d, [h, S],
                                    [p, x]
                                ],
                                [/droid.+; (glass) \d/i],
                                [d, [h, B],
                                    [p, x]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [d, [h, F],
                                    [p, x]
                                ],
                                [/(quest( \d| pro)?)/i],
                                [d, [h, G],
                                    [p, x]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [h, [p, _]],
                                [/(aeobc)\b/i],
                                [d, [h, T],
                                    [p, _]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                                [d, [p, v]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [d, [p, m]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [p, m]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [p, v]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [d, [h, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [g, [f, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [g, [f, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [f, g],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [g, f]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [f, g],
                                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                                [f, [g, Z, J]],
                                [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [g, Z, J],
                                    [f, "Windows"]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [g, /_/g, "."],
                                    [f, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [f, H],
                                    [g, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [g, f],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [f, g],
                                [/\(bb(10);/i],
                                [g, [f, O]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [g, [f, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [g, [f, C + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [g, [f, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [g, [f, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [g, [f, A + "cast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [f, V], g
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [f, g],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [f, "Solaris"], g
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [f, g]
                            ]
                        },
                        Y = function(e, t) {
                            if (typeof e === c && (t = e, e = o), !(this instanceof Y)) return new Y(e, t).getResult();
                            var r = typeof i !== s && i.navigator ? i.navigator : o,
                                n = e || (r && r.userAgent ? r.userAgent : ""),
                                b = r && r.userAgentData ? r.userAgentData : o,
                                y = t ? function(e, t) {
                                    var r = {};
                                    for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                                    return r
                                }($, t) : $,
                                x = r && r.userAgent == n;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t[f] = o, t[g] = o, K.call(t, n, y.browser), t[l] = typeof(e = t[g]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, x && r && r.brave && typeof r.brave.isBrave == a && (t[f] = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e[w] = o, K.call(e, n, y.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[h] = o, e[d] = o, e[p] = o, K.call(e, n, y.device), x && !e[p] && b && b.mobile && (e[p] = v), x && "Macintosh" == e[d] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[d] = "iPad", e[p] = m), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[f] = o, e[g] = o, K.call(e, n, y.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[f] = o, e[g] = o, K.call(e, n, y.os), x && !e[f] && b && b.platform && "Unknown" != b.platform && (e[f] = b.platform.replace(/chrome os/i, V).replace(/macos/i, H)), e
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
                                return n
                            }, this.setUA = function(e) {
                                return n = typeof e === u && e.length > 500 ? X(e, 500) : e, this
                            }, this.setUA(n), this
                        };
                    Y.VERSION = "1.0.38", Y.BROWSER = z([f, g, l]), Y.CPU = z([w]), Y.DEVICE = z([d, h, p, b, v, y, m, x, _]), Y.ENGINE = Y.OS = z([f, g]), typeof t !== s ? (e.exports && (t = e.exports = Y), t.UAParser = Y) : r.amdO ? (n = function() {
                        return Y
                    }.call(t, r, t, e)) === o || (e.exports = n) : typeof i !== s && (i.UAParser = Y);
                    var Q = typeof i !== s && (i.jQuery || i.Zepto);
                    if (Q && !Q.ua) {
                        var ee = new Y;
                        Q.ua = ee.getResult(), Q.ua.get = function() {
                            return ee.getUA()
                        }, Q.ua.set = function(e) {
                            ee.setUA(e);
                            var t = ee.getResult();
                            for (var r in t) Q.ua[r] = t[r]
                        }
                    }
                }(window)
            },
            829: function(e, t, r) {
                var n;
                ! function(i) {
                    "use strict";

                    function o(e, t) {
                        var r = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                    }

                    function a(e, t, r, n, i, a) {
                        return o((s = o(o(t, e), o(n, a))) << (c = i) | s >>> 32 - c, r);
                        var s, c
                    }

                    function s(e, t, r, n, i, o, s) {
                        return a(t & r | ~t & n, e, t, i, o, s)
                    }

                    function c(e, t, r, n, i, o, s) {
                        return a(t & n | r & ~n, e, t, i, o, s)
                    }

                    function u(e, t, r, n, i, o, s) {
                        return a(t ^ r ^ n, e, t, i, o, s)
                    }

                    function l(e, t, r, n, i, o, s) {
                        return a(r ^ (t | ~n), e, t, i, o, s)
                    }

                    function d(e, t) {
                        var r, n, i, a, d;
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        var f = 1732584193,
                            p = -271733879,
                            h = -1732584194,
                            g = 271733878;
                        for (r = 0; r < e.length; r += 16) n = f, i = p, a = h, d = g, f = s(f, p, h, g, e[r], 7, -680876936), g = s(g, f, p, h, e[r + 1], 12, -389564586), h = s(h, g, f, p, e[r + 2], 17, 606105819), p = s(p, h, g, f, e[r + 3], 22, -1044525330), f = s(f, p, h, g, e[r + 4], 7, -176418897), g = s(g, f, p, h, e[r + 5], 12, 1200080426), h = s(h, g, f, p, e[r + 6], 17, -1473231341), p = s(p, h, g, f, e[r + 7], 22, -45705983), f = s(f, p, h, g, e[r + 8], 7, 1770035416), g = s(g, f, p, h, e[r + 9], 12, -1958414417), h = s(h, g, f, p, e[r + 10], 17, -42063), p = s(p, h, g, f, e[r + 11], 22, -1990404162), f = s(f, p, h, g, e[r + 12], 7, 1804603682), g = s(g, f, p, h, e[r + 13], 12, -40341101), h = s(h, g, f, p, e[r + 14], 17, -1502002290), f = c(f, p = s(p, h, g, f, e[r + 15], 22, 1236535329), h, g, e[r + 1], 5, -165796510), g = c(g, f, p, h, e[r + 6], 9, -1069501632), h = c(h, g, f, p, e[r + 11], 14, 643717713), p = c(p, h, g, f, e[r], 20, -373897302), f = c(f, p, h, g, e[r + 5], 5, -701558691), g = c(g, f, p, h, e[r + 10], 9, 38016083), h = c(h, g, f, p, e[r + 15], 14, -660478335), p = c(p, h, g, f, e[r + 4], 20, -405537848), f = c(f, p, h, g, e[r + 9], 5, 568446438), g = c(g, f, p, h, e[r + 14], 9, -1019803690), h = c(h, g, f, p, e[r + 3], 14, -187363961), p = c(p, h, g, f, e[r + 8], 20, 1163531501), f = c(f, p, h, g, e[r + 13], 5, -1444681467), g = c(g, f, p, h, e[r + 2], 9, -51403784), h = c(h, g, f, p, e[r + 7], 14, 1735328473), f = u(f, p = c(p, h, g, f, e[r + 12], 20, -1926607734), h, g, e[r + 5], 4, -378558), g = u(g, f, p, h, e[r + 8], 11, -2022574463), h = u(h, g, f, p, e[r + 11], 16, 1839030562), p = u(p, h, g, f, e[r + 14], 23, -35309556), f = u(f, p, h, g, e[r + 1], 4, -1530992060), g = u(g, f, p, h, e[r + 4], 11, 1272893353), h = u(h, g, f, p, e[r + 7], 16, -155497632), p = u(p, h, g, f, e[r + 10], 23, -1094730640), f = u(f, p, h, g, e[r + 13], 4, 681279174), g = u(g, f, p, h, e[r], 11, -358537222), h = u(h, g, f, p, e[r + 3], 16, -722521979), p = u(p, h, g, f, e[r + 6], 23, 76029189), f = u(f, p, h, g, e[r + 9], 4, -640364487), g = u(g, f, p, h, e[r + 12], 11, -421815835), h = u(h, g, f, p, e[r + 15], 16, 530742520), f = l(f, p = u(p, h, g, f, e[r + 2], 23, -995338651), h, g, e[r], 6, -198630844), g = l(g, f, p, h, e[r + 7], 10, 1126891415), h = l(h, g, f, p, e[r + 14], 15, -1416354905), p = l(p, h, g, f, e[r + 5], 21, -57434055), f = l(f, p, h, g, e[r + 12], 6, 1700485571), g = l(g, f, p, h, e[r + 3], 10, -1894986606), h = l(h, g, f, p, e[r + 10], 15, -1051523), p = l(p, h, g, f, e[r + 1], 21, -2054922799), f = l(f, p, h, g, e[r + 8], 6, 1873313359), g = l(g, f, p, h, e[r + 15], 10, -30611744), h = l(h, g, f, p, e[r + 6], 15, -1560198380), p = l(p, h, g, f, e[r + 13], 21, 1309151649), f = l(f, p, h, g, e[r + 4], 6, -145523070), g = l(g, f, p, h, e[r + 11], 10, -1120210379), h = l(h, g, f, p, e[r + 2], 15, 718787259), p = l(p, h, g, f, e[r + 9], 21, -343485551), f = o(f, n), p = o(p, i), h = o(h, a), g = o(g, d);
                        return [f, p, h, g]
                    }

                    function f(e) {
                        var t, r = "",
                            n = 32 * e.length;
                        for (t = 0; t < n; t += 8) r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                        return r
                    }

                    function p(e) {
                        var t, r = [];
                        for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
                        var n = 8 * e.length;
                        for (t = 0; t < n; t += 8) r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                        return r
                    }

                    function h(e) {
                        var t, r, n = "0123456789abcdef",
                            i = "";
                        for (r = 0; r < e.length; r += 1) t = e.charCodeAt(r), i += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
                        return i
                    }

                    function g(e) {
                        return unescape(encodeURIComponent(e))
                    }

                    function w(e) {
                        return function(e) {
                            return f(d(p(e), 8 * e.length))
                        }(g(e))
                    }

                    function b(e, t) {
                        return function(e, t) {
                            var r, n, i = p(e),
                                o = [],
                                a = [];
                            for (o[15] = a[15] = void 0, i.length > 16 && (i = d(i, 8 * e.length)), r = 0; r < 16; r += 1) o[r] = 909522486 ^ i[r], a[r] = 1549556828 ^ i[r];
                            return n = d(o.concat(p(t)), 512 + 8 * t.length), f(d(a.concat(n), 640))
                        }(g(e), g(t))
                    }

                    function v(e, t, r) {
                        return t ? r ? b(t, e) : h(b(t, e)) : r ? w(e) : h(w(e))
                    }
                    void 0 === (n = function() {
                        return v
                    }.call(t, r, t, e)) || (e.exports = n)
                }()
            },
            934: e => {
                var t = {
                    utf8: {
                        stringToBytes: function(e) {
                            return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                        },
                        bytesToString: function(e) {
                            return decodeURIComponent(escape(t.bin.bytesToString(e)))
                        }
                    },
                    bin: {
                        stringToBytes: function(e) {
                            for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                            return t
                        },
                        bytesToString: function(e) {
                            for (var t = [], r = 0; r < e.length; r++) t.push(String.fromCharCode(e[r]));
                            return t.join("")
                        }
                    }
                };
                e.exports = t
            },
            242: e => {
                var t, r;
                t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
                    rotl: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    rotr: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    endian: function(e) {
                        if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
                        for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
                        return e
                    },
                    randomBytes: function(e) {
                        for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                        return t
                    },
                    bytesToWords: function(e) {
                        for (var t = [], r = 0, n = 0; r < e.length; r++, n += 8) t[n >>> 5] |= e[r] << 24 - n % 32;
                        return t
                    },
                    wordsToBytes: function(e) {
                        for (var t = [], r = 0; r < 32 * e.length; r += 8) t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
                        return t
                    },
                    bytesToHex: function(e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16));
                        return t.join("")
                    },
                    hexToBytes: function(e) {
                        for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                        return t
                    },
                    bytesToBase64: function(e) {
                        for (var r = [], n = 0; n < e.length; n += 3)
                            for (var i = e[n] << 16 | e[n + 1] << 8 | e[n + 2], o = 0; o < 4; o++) 8 * n + 6 * o <= 8 * e.length ? r.push(t.charAt(i >>> 6 * (3 - o) & 63)) : r.push("=");
                        return r.join("")
                    },
                    base64ToBytes: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/gi, "");
                        for (var r = [], n = 0, i = 0; n < e.length; i = ++n % 4) 0 != i && r.push((t.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(n)) >>> 6 - 2 * i);
                        return r
                    }
                }, e.exports = r
            },
            427: function(e, t, r) {
                var n, i;
                ! function(o, a, s) {
                    "use strict";
                    n = function() {
                        var e = function(e, t) {
                                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                                var r = [0, 0, 0, 0];
                                return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                            },
                            t = function(e, t) {
                                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                                var r = [0, 0, 0, 0];
                                return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                            },
                            r = function(e, t) {
                                return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                            },
                            n = function(e, t) {
                                return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                            },
                            i = function(e, t) {
                                return [e[0] ^ t[0], e[1] ^ t[1]]
                            },
                            o = function(e) {
                                return e = i(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = i(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), i(e, [0, e[0] >>> 1])
                            },
                            a = function(a, s) {
                                s = s || 0;
                                for (var c = (a = a || "").length % 16, u = a.length - c, l = [0, s], d = [0, s], f = [0, 0], p = [0, 0], h = [2277735313, 289559509], g = [1291169091, 658871167], w = 0; w < u; w += 16) f = [255 & a.charCodeAt(w + 4) | (255 & a.charCodeAt(w + 5)) << 8 | (255 & a.charCodeAt(w + 6)) << 16 | (255 & a.charCodeAt(w + 7)) << 24, 255 & a.charCodeAt(w) | (255 & a.charCodeAt(w + 1)) << 8 | (255 & a.charCodeAt(w + 2)) << 16 | (255 & a.charCodeAt(w + 3)) << 24], p = [255 & a.charCodeAt(w + 12) | (255 & a.charCodeAt(w + 13)) << 8 | (255 & a.charCodeAt(w + 14)) << 16 | (255 & a.charCodeAt(w + 15)) << 24, 255 & a.charCodeAt(w + 8) | (255 & a.charCodeAt(w + 9)) << 8 | (255 & a.charCodeAt(w + 10)) << 16 | (255 & a.charCodeAt(w + 11)) << 24], f = t(f, h), f = r(f, 31), f = t(f, g), l = i(l, f), l = r(l, 27), l = e(l, d), l = e(t(l, [0, 5]), [0, 1390208809]), p = t(p, g), p = r(p, 33), p = t(p, h), d = i(d, p), d = r(d, 31), d = e(d, l), d = e(t(d, [0, 5]), [0, 944331445]);
                                switch (f = [0, 0], p = [0, 0], c) {
                                    case 15:
                                        p = i(p, n([0, a.charCodeAt(w + 14)], 48));
                                    case 14:
                                        p = i(p, n([0, a.charCodeAt(w + 13)], 40));
                                    case 13:
                                        p = i(p, n([0, a.charCodeAt(w + 12)], 32));
                                    case 12:
                                        p = i(p, n([0, a.charCodeAt(w + 11)], 24));
                                    case 11:
                                        p = i(p, n([0, a.charCodeAt(w + 10)], 16));
                                    case 10:
                                        p = i(p, n([0, a.charCodeAt(w + 9)], 8));
                                    case 9:
                                        p = i(p, [0, a.charCodeAt(w + 8)]), p = t(p, g), p = r(p, 33), p = t(p, h), d = i(d, p);
                                    case 8:
                                        f = i(f, n([0, a.charCodeAt(w + 7)], 56));
                                    case 7:
                                        f = i(f, n([0, a.charCodeAt(w + 6)], 48));
                                    case 6:
                                        f = i(f, n([0, a.charCodeAt(w + 5)], 40));
                                    case 5:
                                        f = i(f, n([0, a.charCodeAt(w + 4)], 32));
                                    case 4:
                                        f = i(f, n([0, a.charCodeAt(w + 3)], 24));
                                    case 3:
                                        f = i(f, n([0, a.charCodeAt(w + 2)], 16));
                                    case 2:
                                        f = i(f, n([0, a.charCodeAt(w + 1)], 8));
                                    case 1:
                                        f = i(f, [0, a.charCodeAt(w)]), f = t(f, h), f = r(f, 31), f = t(f, g), l = i(l, f)
                                }
                                return l = i(l, [0, a.length]), d = i(d, [0, a.length]), l = e(l, d), d = e(d, l), l = o(l), d = o(d), l = e(l, d), d = e(d, l), ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                            },
                            s = {
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
                                    fontsFlash: !0
                                },
                                NOT_AVAILABLE: "not available",
                                ERROR: "error",
                                EXCLUDED: "excluded"
                            },
                            c = function(e, t) {
                                if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
                                else if (e.length === +e.length)
                                    for (var r = 0, n = e.length; r < n; r++) t(e[r], r, e);
                                else
                                    for (var i in e) e.hasOwnProperty(i) && t(e[i], i, e)
                            },
                            u = function(e, t) {
                                var r = [];
                                return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (c(e, (function(e, n, i) {
                                    r.push(t(e, n, i))
                                })), r)
                            },
                            l = function() {
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
                            p = function(e) {
                                if (null == navigator.plugins) return e.NOT_AVAILABLE;
                                for (var t = [], r = 0, n = navigator.plugins.length; r < n; r++) navigator.plugins[r] && t.push(navigator.plugins[r]);
                                return g(e) && (t = t.sort((function(e, t) {
                                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                                }))), u(t, (function(e) {
                                    var t = u(e, (function(e) {
                                        return [e.type, e.suffixes]
                                    }));
                                    return [e.name, e.description, t]
                                }))
                            },
                            h = function(e) {
                                var t = [];
                                return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? t = u(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(t) {
                                    try {
                                        return new window.ActiveXObject(t), t
                                    } catch (t) {
                                        return e.ERROR
                                    }
                                })) : t.push(e.NOT_AVAILABLE), navigator.plugins && (t = t.concat(p(e))), t
                            },
                            g = function(e) {
                                for (var t = !1, r = 0, n = e.plugins.sortPluginsFor.length; r < n; r++) {
                                    var i = e.plugins.sortPluginsFor[r];
                                    if (navigator.userAgent.match(i)) {
                                        t = !0;
                                        break
                                    }
                                }
                                return t
                            },
                            w = function(e) {
                                try {
                                    return !!window.sessionStorage
                                } catch (t) {
                                    return e.ERROR
                                }
                            },
                            b = function(e) {
                                try {
                                    return !!window.localStorage
                                } catch (t) {
                                    return e.ERROR
                                }
                            },
                            v = function(e) {
                                try {
                                    return !!window.indexedDB
                                } catch (t) {
                                    return e.ERROR
                                }
                            },
                            m = function(e) {
                                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                            },
                            y = function(e) {
                                return navigator.cpuClass || e.NOT_AVAILABLE
                            },
                            x = function(e) {
                                return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                            },
                            _ = function(e) {
                                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                            },
                            T = function() {
                                var e, t = 0;
                                void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                                try {
                                    document.createEvent("TouchEvent"), e = !0
                                } catch (t) {
                                    e = !1
                                }
                                return [t, e, "ontouchstart" in window]
                            },
                            S = function(e) {
                                var t = [],
                                    r = document.createElement("canvas");
                                r.width = 2e3, r.height = 200, r.style.display = "inline";
                                var n = r.getContext("2d");
                                return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", e.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), r.toDataURL && t.push("canvas fp:" + r.toDataURL()), t
                            },
                            E = function() {
                                var e, t = function(t) {
                                    return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                                };
                                if (!(e = j())) return null;
                                var r = [],
                                    n = e.createBuffer();
                                e.bindBuffer(e.ARRAY_BUFFER, n);
                                var i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                                e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), n.itemSize = 3, n.numItems = 3;
                                var o = e.createProgram(),
                                    a = e.createShader(e.VERTEX_SHADER);
                                e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(a);
                                var s = e.createShader(e.FRAGMENT_SHADER);
                                e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(o, a), e.attachShader(o, s), e.linkProgram(o), e.useProgram(o), o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"), o.offsetUniform = e.getUniformLocation(o, "uniformOffset"), e.enableVertexAttribArray(o.vertexPosArray), e.vertexAttribPointer(o.vertexPosAttrib, n.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(o.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, n.numItems);
                                try {
                                    r.push(e.canvas.toDataURL())
                                } catch (e) {}
                                r.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), r.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), r.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), r.push("webgl max anisotropy:" + function(e) {
                                    var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                                    if (t) {
                                        var r = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                        return 0 === r && (r = 2), r
                                    }
                                    return null
                                }(e)), r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), r.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), r.push("webgl red bits:" + e.getParameter(e.RED_BITS)), r.push("webgl renderer:" + e.getParameter(e.RENDERER)), r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), r.push("webgl vendor:" + e.getParameter(e.VENDOR)), r.push("webgl version:" + e.getParameter(e.VERSION));
                                try {
                                    var u = e.getExtension("WEBGL_debug_renderer_info");
                                    u && (r.push("webgl unmasked vendor:" + e.getParameter(u.UNMASKED_VENDOR_WEBGL)), r.push("webgl unmasked renderer:" + e.getParameter(u.UNMASKED_RENDERER_WEBGL)))
                                } catch (e) {}
                                return e.getShaderPrecisionFormat ? (c(["FLOAT", "INT"], (function(t) {
                                    c(["VERTEX", "FRAGMENT"], (function(n) {
                                        c(["HIGH", "MEDIUM", "LOW"], (function(i) {
                                            c(["precision", "rangeMin", "rangeMax"], (function(o) {
                                                var a = e.getShaderPrecisionFormat(e[n + "_SHADER"], e[i + "_" + t])[o];
                                                "precision" !== o && (o = "precision " + o);
                                                var s = ["webgl ", n.toLowerCase(), " shader ", i.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", a].join("");
                                                r.push(s)
                                            }))
                                        }))
                                    }))
                                })), r) : r
                            },
                            O = function() {
                                try {
                                    var e = j(),
                                        t = e.getExtension("WEBGL_debug_renderer_info");
                                    return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                                } catch (e) {
                                    return null
                                }
                            },
                            k = function() {
                                var e = document.createElement("div");
                                e.innerHTML = "&nbsp;", e.className = "adsbox";
                                var t = !1;
                                try {
                                    document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                                } catch (e) {
                                    t = !1
                                }
                                return t
                            },
                            A = function() {
                                if (void 0 !== navigator.languages) try {
                                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                                } catch (e) {
                                    return !0
                                }
                                return !1
                            },
                            C = function() {
                                return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                            },
                            B = function() {
                                var e, t = navigator.userAgent.toLowerCase(),
                                    r = navigator.oscpu,
                                    n = navigator.platform.toLowerCase();
                                if (e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 || t.indexOf("cros") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                                if (void 0 !== r) {
                                    if ((r = r.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                                    if (r.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                                    if (r.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                                    if ((-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) != ("Other" === e)) return !0
                                }
                                return n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || (n.indexOf("linux") >= 0 || n.indexOf("android") >= 0 || n.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || (n.indexOf("mac") >= 0 || n.indexOf("ipad") >= 0 || n.indexOf("ipod") >= 0 || n.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || (n.indexOf("win") < 0 && n.indexOf("linux") < 0 && n.indexOf("mac") < 0 && n.indexOf("iphone") < 0 && n.indexOf("ipad") < 0) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e
                            },
                            P = function() {
                                var e, t = navigator.userAgent.toLowerCase(),
                                    r = navigator.productSub;
                                if (("Chrome" == (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== r) return !0;
                                var n, i = eval.toString().length;
                                if (37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                                if (39 === i && "Internet Explorer" !== e && "Other" !== e) return !0;
                                if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                                try {
                                    throw "a"
                                } catch (e) {
                                    try {
                                        e.toSource(), n = !0
                                    } catch (e) {
                                        n = !1
                                    }
                                }
                                return n && "Firefox" !== e && "Other" !== e
                            },
                            R = function() {
                                var e = document.createElement("canvas");
                                return !(!e.getContext || !e.getContext("2d"))
                            },
                            I = function() {
                                if (!R()) return !1;
                                var e = j();
                                return !!window.WebGLRenderingContext && !!e
                            },
                            N = function() {
                                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                            },
                            M = function() {
                                return void 0 !== window.swfobject
                            },
                            D = function() {
                                return window.swfobject.hasFlashPlayerVersion("9.0.0")
                            },
                            L = function(e, t) {
                                var r = "___fp_swf_loaded";
                                window[r] = function(t) {
                                    e(t)
                                };
                                var n = t.fonts.swfContainerId;
                                ! function(e) {
                                    var t = document.createElement("div");
                                    t.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(t)
                                }();
                                var i = {
                                    onReady: r
                                };
                                window.swfobject.embedSWF(t.fonts.swfPath, n, "1", "1", "9.0.0", !1, i, {
                                    allowScriptAccess: "always",
                                    menu: "false"
                                }, {})
                            },
                            j = function() {
                                var e = document.createElement("canvas"),
                                    t = null;
                                try {
                                    t = e.getContext("webgl") || e.getContext("experimental-webgl")
                                } catch (e) {}
                                return t || (t = null), t
                            },
                            U = [{
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
                                    e(m(t))
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
                                    window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
                                }
                            }, {
                                key: "sessionStorage",
                                getData: function(e, t) {
                                    e(w(t))
                                }
                            }, {
                                key: "localStorage",
                                getData: function(e, t) {
                                    e(b(t))
                                }
                            }, {
                                key: "indexedDb",
                                getData: function(e, t) {
                                    e(v(t))
                                }
                            }, {
                                key: "addBehavior",
                                getData: function(e) {
                                    e(!(!document.body || !document.body.addBehavior))
                                }
                            }, {
                                key: "openDatabase",
                                getData: function(e) {
                                    e(!!window.openDatabase)
                                }
                            }, {
                                key: "cpuClass",
                                getData: function(e, t) {
                                    e(y(t))
                                }
                            }, {
                                key: "platform",
                                getData: function(e, t) {
                                    e(x(t))
                                }
                            }, {
                                key: "doNotTrack",
                                getData: function(e, t) {
                                    e(_(t))
                                }
                            }, {
                                key: "plugins",
                                getData: function(e, t) {
                                    N() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(h(t)) : e(p(t))
                                }
                            }, {
                                key: "canvas",
                                getData: function(e, t) {
                                    R() ? e(S(t)) : e(t.NOT_AVAILABLE)
                                }
                            }, {
                                key: "webgl",
                                getData: function(e, t) {
                                    I() ? e(E()) : e(t.NOT_AVAILABLE)
                                }
                            }, {
                                key: "webglVendorAndRenderer",
                                getData: function(e) {
                                    I() ? e(O()) : e()
                                }
                            }, {
                                key: "adBlock",
                                getData: function(e) {
                                    e(k())
                                }
                            }, {
                                key: "hasLiedLanguages",
                                getData: function(e) {
                                    e(A())
                                }
                            }, {
                                key: "hasLiedResolution",
                                getData: function(e) {
                                    e(C())
                                }
                            }, {
                                key: "hasLiedOs",
                                getData: function(e) {
                                    e(B())
                                }
                            }, {
                                key: "hasLiedBrowser",
                                getData: function(e) {
                                    e(P())
                                }
                            }, {
                                key: "touchSupport",
                                getData: function(e) {
                                    e(T())
                                }
                            }, {
                                key: "fonts",
                                getData: function(e, t) {
                                    var r = ["monospace", "sans-serif", "serif"],
                                        n = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                                    if (t.fonts.extendedJsFonts) {
                                        n = n.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])
                                    }
                                    n = (n = n.concat(t.fonts.userDefinedFonts)).filter((function(e, t) {
                                        return n.indexOf(e) === t
                                    }));
                                    var i = document.getElementsByTagName("body")[0],
                                        o = document.createElement("div"),
                                        a = document.createElement("div"),
                                        s = {},
                                        c = {},
                                        u = function() {
                                            var e = document.createElement("span");
                                            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                                        },
                                        l = function(e, t) {
                                            var r = u();
                                            return r.style.fontFamily = "'" + e + "'," + t, r
                                        },
                                        d = function(e) {
                                            for (var t = !1, n = 0; n < r.length; n++)
                                                if (t = e[n].offsetWidth !== s[r[n]] || e[n].offsetHeight !== c[r[n]]) return t;
                                            return t
                                        },
                                        f = function() {
                                            for (var e = [], t = 0, n = r.length; t < n; t++) {
                                                var i = u();
                                                i.style.fontFamily = r[t], o.appendChild(i), e.push(i)
                                            }
                                            return e
                                        }();
                                    i.appendChild(o);
                                    for (var p = 0, h = r.length; p < h; p++) s[r[p]] = f[p].offsetWidth, c[r[p]] = f[p].offsetHeight;
                                    var g = function() {
                                        for (var e = {}, t = 0, i = n.length; t < i; t++) {
                                            for (var o = [], s = 0, c = r.length; s < c; s++) {
                                                var u = l(n[t], r[s]);
                                                a.appendChild(u), o.push(u)
                                            }
                                            e[n[t]] = o
                                        }
                                        return e
                                    }();
                                    i.appendChild(a);
                                    for (var w = [], b = 0, v = n.length; b < v; b++) d(g[n[b]]) && w.push(n[b]);
                                    i.removeChild(a), i.removeChild(o), e(w)
                                },
                                pauseBefore: !0
                            }, {
                                key: "fontsFlash",
                                getData: function(e, t) {
                                    return M() ? D() ? t.fonts.swfPath ? void L((function(t) {
                                        e(t)
                                    }), t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                                },
                                pauseBefore: !0
                            }, {
                                key: "audio",
                                getData: function(e, t) {
                                    var r = t.audio;
                                    if (r.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                                    var n = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                                    if (null == n) return e(t.NOT_AVAILABLE);
                                    var i = new n(1, 44100, 44100),
                                        o = i.createOscillator();
                                    o.type = "triangle", o.frequency.setValueAtTime(1e4, i.currentTime);
                                    var a = i.createDynamicsCompressor();
                                    c([
                                        ["threshold", -50],
                                        ["knee", 40],
                                        ["ratio", 12],
                                        ["reduction", -20],
                                        ["attack", 0],
                                        ["release", .25]
                                    ], (function(e) {
                                        void 0 !== a[e[0]] && "function" == typeof a[e[0]].setValueAtTime && a[e[0]].setValueAtTime(e[1], i.currentTime)
                                    })), o.connect(a), a.connect(i.destination), o.start(0), i.startRendering();
                                    var s = setTimeout((function() {
                                        return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'), i.oncomplete = function() {}, i = null, e("audioTimeout")
                                    }), r.timeout);
                                    i.oncomplete = function(t) {
                                        var r;
                                        try {
                                            clearTimeout(s), r = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, t) {
                                                return e + Math.abs(t)
                                            }), 0).toString(), o.disconnect(), a.disconnect()
                                        } catch (t) {
                                            return void e(t)
                                        }
                                        e(r)
                                    }
                                }
                            }, {
                                key: "enumerateDevices",
                                getData: function(e, t) {
                                    if (!l()) return e(t.NOT_AVAILABLE);
                                    navigator.mediaDevices.enumerateDevices().then((function(t) {
                                        e(t.map((function(e) {
                                            return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                                        })))
                                    })).catch((function(t) {
                                        e(t)
                                    }))
                                }
                            }],
                            F = function(e) {
                                throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
                            };
                        return F.get = function(e, t) {
                            t ? e || (e = {}) : (t = e, e = {}),
                                function(e, t) {
                                    if (null == t) return e;
                                    var r, n;
                                    for (n in t) null == (r = t[n]) || Object.prototype.hasOwnProperty.call(e, n) || (e[n] = r)
                                }(e, s), e.components = e.extraComponents.concat(U);
                            var r = {
                                    data: [],
                                    addPreprocessedComponent: function(t, n) {
                                        "function" == typeof e.preprocessor && (n = e.preprocessor(t, n)), r.data.push({
                                            key: t,
                                            value: n
                                        })
                                    }
                                },
                                n = -1,
                                i = function(o) {
                                    if ((n += 1) >= e.components.length) t(r.data);
                                    else {
                                        var a = e.components[n];
                                        if (e.excludes[a.key]) i(!1);
                                        else {
                                            if (!o && a.pauseBefore) return n -= 1, void setTimeout((function() {
                                                i(!0)
                                            }), 1);
                                            try {
                                                a.getData((function(e) {
                                                    r.addPreprocessedComponent(a.key, e), i(!1)
                                                }), e)
                                            } catch (e) {
                                                r.addPreprocessedComponent(a.key, String(e)), i(!1)
                                            }
                                        }
                                    }
                                };
                            i(!1)
                        }, F.getPromise = function(e) {
                            return new Promise((function(t, r) {
                                F.get(e, t)
                            }))
                        }, F.getV18 = function(e, t) {
                            return null == t && (t = e, e = {}), F.get(e, (function(r) {
                                for (var n = [], i = 0; i < r.length; i++) {
                                    var o = r[i];
                                    if (o.value === (e.NOT_AVAILABLE || "not available")) n.push({
                                        key: o.key,
                                        value: "unknown"
                                    });
                                    else if ("plugins" === o.key) n.push({
                                        key: "plugins",
                                        value: u(o.value, (function(e) {
                                            var t = u(e[2], (function(e) {
                                                return e.join ? e.join("~") : e
                                            })).join(",");
                                            return [e[0], e[1], t].join("::")
                                        }))
                                    });
                                    else if (-1 !== ["canvas", "webgl"].indexOf(o.key)) n.push({
                                        key: o.key,
                                        value: o.value.join("~")
                                    });
                                    else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(o.key)) {
                                        if (!o.value) continue;
                                        n.push({
                                            key: o.key,
                                            value: 1
                                        })
                                    } else o.value ? n.push(o.value.join ? {
                                        key: o.key,
                                        value: o.value.join(";")
                                    } : o) : n.push({
                                        key: o.key,
                                        value: o.value
                                    })
                                }
                                var s = a(u(n, (function(e) {
                                    return e.value
                                })).join("~~~"), 31);
                                t(s, n)
                            }))
                        }, F.x64hash128 = a, F.VERSION = "2.1.0", F
                    }, void 0 === (i = n.call(t, r, t, e)) || (e.exports = i)
                }()
            },
            703: e => {
                function t(e) {
                    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
                e.exports = function(e) {
                    return null != e && (t(e) || function(e) {
                        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
                    }(e) || !!e._isBuffer)
                }
            },
            812: (e, t) => {
                var r, n;
                n = "undefined" != typeof self ? self : window, e.exports = function(n) {
                    "use strict";
                    var i, o = (n = n || {}).Base64,
                        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        s = function(e) {
                            for (var t = {}, r = 0, n = e.length; r < n; r++) t[e.charAt(r)] = r;
                            return t
                        }(a),
                        c = String.fromCharCode,
                        u = function(e) {
                            if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? c(192 | t >>> 6) + c(128 | 63 & t) : c(224 | t >>> 12 & 15) + c(128 | t >>> 6 & 63) + c(128 | 63 & t);
                            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                            return c(240 | t >>> 18 & 7) + c(128 | t >>> 12 & 63) + c(128 | t >>> 6 & 63) + c(128 | 63 & t)
                        },
                        l = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        d = function(e) {
                            return e.replace(l, u)
                        },
                        f = function(e) {
                            var t = [0, 2, 1][e.length % 3],
                                r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                            return [a.charAt(r >>> 18), a.charAt(r >>> 12 & 63), t >= 2 ? "=" : a.charAt(r >>> 6 & 63), t >= 1 ? "=" : a.charAt(63 & r)].join("")
                        },
                        p = n.btoa && "function" == typeof n.btoa ? function(e) {
                            return n.btoa(e)
                        } : function(e) {
                            if (e.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters.");
                            return e.replace(/[\s\S]{1,3}/g, f)
                        },
                        h = function(e) {
                            return p(d(String(e)))
                        },
                        g = function(e) {
                            return e.replace(/[+\/]/g, (function(e) {
                                return "+" == e ? "-" : "_"
                            })).replace(/=/g, "")
                        },
                        w = function(e, t) {
                            return t ? g(h(e)) : h(e)
                        };
                    n.Uint8Array && (i = function(e, t) {
                        for (var r = "", n = 0, i = e.length; n < i; n += 3) {
                            var o = e[n],
                                s = e[n + 1],
                                c = e[n + 2],
                                u = o << 16 | s << 8 | c;
                            r += a.charAt(u >>> 18) + a.charAt(u >>> 12 & 63) + (void 0 !== s ? a.charAt(u >>> 6 & 63) : "=") + (void 0 !== c ? a.charAt(63 & u) : "=")
                        }
                        return t ? g(r) : r
                    });
                    var b, v = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                        m = function(e) {
                            switch (e.length) {
                                case 4:
                                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                                    return c(55296 + (t >>> 10)) + c(56320 + (1023 & t));
                                case 3:
                                    return c((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                                default:
                                    return c((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                            }
                        },
                        y = function(e) {
                            return e.replace(v, m)
                        },
                        x = function(e) {
                            var t = e.length,
                                r = t % 4,
                                n = (t > 0 ? s[e.charAt(0)] << 18 : 0) | (t > 1 ? s[e.charAt(1)] << 12 : 0) | (t > 2 ? s[e.charAt(2)] << 6 : 0) | (t > 3 ? s[e.charAt(3)] : 0),
                                i = [c(n >>> 16), c(n >>> 8 & 255), c(255 & n)];
                            return i.length -= [0, 0, 2, 1][r], i.join("")
                        },
                        _ = n.atob && "function" == typeof n.atob ? function(e) {
                            return n.atob(e)
                        } : function(e) {
                            return e.replace(/\S{1,4}/g, x)
                        },
                        T = function(e) {
                            return _(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        },
                        S = function(e) {
                            return String(e).replace(/[-_]/g, (function(e) {
                                return "-" == e ? "+" : "/"
                            })).replace(/[^A-Za-z0-9\+\/]/g, "")
                        },
                        E = function(e) {
                            return function(e) {
                                return y(_(e))
                            }(S(e))
                        };
                    n.Uint8Array && (b = function(e) {
                        return Uint8Array.from(T(S(e)), (function(e) {
                            return e.charCodeAt(0)
                        }))
                    });
                    if (n.Base64 = {
                            VERSION: "2.6.4",
                            atob: T,
                            btoa: p,
                            fromBase64: E,
                            toBase64: w,
                            utob: d,
                            encode: w,
                            encodeURI: function(e) {
                                return w(e, !0)
                            },
                            btou: y,
                            decode: E,
                            noConflict: function() {
                                var e = n.Base64;
                                return n.Base64 = o, e
                            },
                            fromUint8Array: i,
                            toUint8Array: b
                        }, "function" == typeof Object.defineProperty) {
                        var O = function(e) {
                            return {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        };
                        n.Base64.extendString = function() {
                            Object.defineProperty(String.prototype, "fromBase64", O((function() {
                                return E(this)
                            }))), Object.defineProperty(String.prototype, "toBase64", O((function(e) {
                                return w(this, e)
                            }))), Object.defineProperty(String.prototype, "toBase64URI", O((function() {
                                return w(this, !0)
                            })))
                        }
                    }
                    return n.Meteor && (Base64 = n.Base64), e.exports ? e.exports.Base64 = n.Base64 : void 0 === (r = function() {
                        return n.Base64
                    }.apply(t, [])) || (e.exports = r), {
                        Base64: n.Base64
                    }
                }(n)
            },
            150: (e, t, r) => {
                var n, i, o, a, s;
                n = r(242), i = r(934).utf8, o = r(703), a = r(934).bin, (s = function(e, t) {
                    e.constructor == String ? e = t && "binary" === t.encoding ? a.stringToBytes(e) : i.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                    for (var r = n.bytesToWords(e), c = 8 * e.length, u = 1732584193, l = -271733879, d = -1732584194, f = 271733878, p = 0; p < r.length; p++) r[p] = 16711935 & (r[p] << 8 | r[p] >>> 24) | 4278255360 & (r[p] << 24 | r[p] >>> 8);
                    r[c >>> 5] |= 128 << c % 32, r[14 + (c + 64 >>> 9 << 4)] = c;
                    var h = s._ff,
                        g = s._gg,
                        w = s._hh,
                        b = s._ii;
                    for (p = 0; p < r.length; p += 16) {
                        var v = u,
                            m = l,
                            y = d,
                            x = f;
                        u = h(u, l, d, f, r[p + 0], 7, -680876936), f = h(f, u, l, d, r[p + 1], 12, -389564586), d = h(d, f, u, l, r[p + 2], 17, 606105819), l = h(l, d, f, u, r[p + 3], 22, -1044525330), u = h(u, l, d, f, r[p + 4], 7, -176418897), f = h(f, u, l, d, r[p + 5], 12, 1200080426), d = h(d, f, u, l, r[p + 6], 17, -1473231341), l = h(l, d, f, u, r[p + 7], 22, -45705983), u = h(u, l, d, f, r[p + 8], 7, 1770035416), f = h(f, u, l, d, r[p + 9], 12, -1958414417), d = h(d, f, u, l, r[p + 10], 17, -42063), l = h(l, d, f, u, r[p + 11], 22, -1990404162), u = h(u, l, d, f, r[p + 12], 7, 1804603682), f = h(f, u, l, d, r[p + 13], 12, -40341101), d = h(d, f, u, l, r[p + 14], 17, -1502002290), u = g(u, l = h(l, d, f, u, r[p + 15], 22, 1236535329), d, f, r[p + 1], 5, -165796510), f = g(f, u, l, d, r[p + 6], 9, -1069501632), d = g(d, f, u, l, r[p + 11], 14, 643717713), l = g(l, d, f, u, r[p + 0], 20, -373897302), u = g(u, l, d, f, r[p + 5], 5, -701558691), f = g(f, u, l, d, r[p + 10], 9, 38016083), d = g(d, f, u, l, r[p + 15], 14, -660478335), l = g(l, d, f, u, r[p + 4], 20, -405537848), u = g(u, l, d, f, r[p + 9], 5, 568446438), f = g(f, u, l, d, r[p + 14], 9, -1019803690), d = g(d, f, u, l, r[p + 3], 14, -187363961), l = g(l, d, f, u, r[p + 8], 20, 1163531501), u = g(u, l, d, f, r[p + 13], 5, -1444681467), f = g(f, u, l, d, r[p + 2], 9, -51403784), d = g(d, f, u, l, r[p + 7], 14, 1735328473), u = w(u, l = g(l, d, f, u, r[p + 12], 20, -1926607734), d, f, r[p + 5], 4, -378558), f = w(f, u, l, d, r[p + 8], 11, -2022574463), d = w(d, f, u, l, r[p + 11], 16, 1839030562), l = w(l, d, f, u, r[p + 14], 23, -35309556), u = w(u, l, d, f, r[p + 1], 4, -1530992060), f = w(f, u, l, d, r[p + 4], 11, 1272893353), d = w(d, f, u, l, r[p + 7], 16, -155497632), l = w(l, d, f, u, r[p + 10], 23, -1094730640), u = w(u, l, d, f, r[p + 13], 4, 681279174), f = w(f, u, l, d, r[p + 0], 11, -358537222), d = w(d, f, u, l, r[p + 3], 16, -722521979), l = w(l, d, f, u, r[p + 6], 23, 76029189), u = w(u, l, d, f, r[p + 9], 4, -640364487), f = w(f, u, l, d, r[p + 12], 11, -421815835), d = w(d, f, u, l, r[p + 15], 16, 530742520), u = b(u, l = w(l, d, f, u, r[p + 2], 23, -995338651), d, f, r[p + 0], 6, -198630844), f = b(f, u, l, d, r[p + 7], 10, 1126891415), d = b(d, f, u, l, r[p + 14], 15, -1416354905), l = b(l, d, f, u, r[p + 5], 21, -57434055), u = b(u, l, d, f, r[p + 12], 6, 1700485571), f = b(f, u, l, d, r[p + 3], 10, -1894986606), d = b(d, f, u, l, r[p + 10], 15, -1051523), l = b(l, d, f, u, r[p + 1], 21, -2054922799), u = b(u, l, d, f, r[p + 8], 6, 1873313359), f = b(f, u, l, d, r[p + 15], 10, -30611744), d = b(d, f, u, l, r[p + 6], 15, -1560198380), l = b(l, d, f, u, r[p + 13], 21, 1309151649), u = b(u, l, d, f, r[p + 4], 6, -145523070), f = b(f, u, l, d, r[p + 11], 10, -1120210379), d = b(d, f, u, l, r[p + 2], 15, 718787259), l = b(l, d, f, u, r[p + 9], 21, -343485551), u = u + v >>> 0, l = l + m >>> 0, d = d + y >>> 0, f = f + x >>> 0
                    }
                    return n.endian([u, l, d, f])
                })._ff = function(e, t, r, n, i, o, a) {
                    var s = e + (t & r | ~t & n) + (i >>> 0) + a;
                    return (s << o | s >>> 32 - o) + t
                }, s._gg = function(e, t, r, n, i, o, a) {
                    var s = e + (t & n | r & ~n) + (i >>> 0) + a;
                    return (s << o | s >>> 32 - o) + t
                }, s._hh = function(e, t, r, n, i, o, a) {
                    var s = e + (t ^ r ^ n) + (i >>> 0) + a;
                    return (s << o | s >>> 32 - o) + t
                }, s._ii = function(e, t, r, n, i, o, a) {
                    var s = e + (r ^ (t | ~n)) + (i >>> 0) + a;
                    return (s << o | s >>> 32 - o) + t
                }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, t) {
                    if (null == e) throw new Error("Illegal argument " + e);
                    var r = n.wordsToBytes(s(e, t));
                    return t && t.asBytes ? r : t && t.asString ? a.bytesToString(r) : n.bytesToHex(r)
                }
            },
            989: e => {
                var t = function(e) {
                    "use strict";
                    var t, r = Object.prototype,
                        n = r.hasOwnProperty,
                        i = Object.defineProperty || function(e, t, r) {
                            e[t] = r.value
                        },
                        o = "function" == typeof Symbol ? Symbol : {},
                        a = o.iterator || "@@iterator",
                        s = o.asyncIterator || "@@asyncIterator",
                        c = o.toStringTag || "@@toStringTag";

                    function u(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        u({}, "")
                    } catch (e) {
                        u = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function l(e, t, r, n) {
                        var o = t && t.prototype instanceof b ? t : b,
                            a = Object.create(o.prototype),
                            s = new B(n || []);
                        return i(a, "_invoke", {
                            value: O(e, r, s)
                        }), a
                    }

                    function d(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = l;
                    var f = "suspendedStart",
                        p = "suspendedYield",
                        h = "executing",
                        g = "completed",
                        w = {};

                    function b() {}

                    function v() {}

                    function m() {}
                    var y = {};
                    u(y, a, (function() {
                        return this
                    }));
                    var x = Object.getPrototypeOf,
                        _ = x && x(x(P([])));
                    _ && _ !== r && n.call(_, a) && (y = _);
                    var T = m.prototype = b.prototype = Object.create(y);

                    function S(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            u(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function E(e, t) {
                        function r(i, o, a, s) {
                            var c = d(e[i], e, o);
                            if ("throw" !== c.type) {
                                var u = c.arg,
                                    l = u.value;
                                return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                    r("next", e, a, s)
                                }), (function(e) {
                                    r("throw", e, a, s)
                                })) : t.resolve(l).then((function(e) {
                                    u.value = e, a(u)
                                }), (function(e) {
                                    return r("throw", e, a, s)
                                }))
                            }
                            s(c.arg)
                        }
                        var o;
                        i(this, "_invoke", {
                            value: function(e, n) {
                                function i() {
                                    return new t((function(t, i) {
                                        r(e, n, t, i)
                                    }))
                                }
                                return o = o ? o.then(i, i) : i()
                            }
                        })
                    }

                    function O(e, r, n) {
                        var i = f;
                        return function(o, a) {
                            if (i === h) throw new Error("Generator is already running");
                            if (i === g) {
                                if ("throw" === o) throw a;
                                return {
                                    value: t,
                                    done: !0
                                }
                            }
                            for (n.method = o, n.arg = a;;) {
                                var s = n.delegate;
                                if (s) {
                                    var c = k(s, n);
                                    if (c) {
                                        if (c === w) continue;
                                        return c
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (i === f) throw i = g, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                i = h;
                                var u = d(e, r, n);
                                if ("normal" === u.type) {
                                    if (i = n.done ? g : p, u.arg === w) continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === u.type && (i = g, n.method = "throw", n.arg = u.arg)
                            }
                        }
                    }

                    function k(e, r) {
                        var n = r.method,
                            i = e.iterator[n];
                        if (i === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, k(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), w;
                        var o = d(i, e.iterator, r.arg);
                        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, w;
                        var a = o.arg;
                        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, w) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, w)
                    }

                    function A(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function C(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function B(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(A, this), this.reset(!0)
                    }

                    function P(e) {
                        if (null != e) {
                            var r = e[a];
                            if (r) return r.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var i = -1,
                                    o = function r() {
                                        for (; ++i < e.length;)
                                            if (n.call(e, i)) return r.value = e[i], r.done = !1, r;
                                        return r.value = t, r.done = !0, r
                                    };
                                return o.next = o
                            }
                        }
                        throw new TypeError(typeof e + " is not iterable")
                    }
                    return v.prototype = m, i(T, "constructor", {
                        value: m,
                        configurable: !0
                    }), i(m, "constructor", {
                        value: v,
                        configurable: !0
                    }), v.displayName = u(m, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, u(e, c, "GeneratorFunction")), e.prototype = Object.create(T), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, S(E.prototype), u(E.prototype, s, (function() {
                        return this
                    })), e.AsyncIterator = E, e.async = function(t, r, n, i, o) {
                        void 0 === o && (o = Promise);
                        var a = new E(l(t, r, n, i), o);
                        return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                            return e.done ? e.value : a.next()
                        }))
                    }, S(T), u(T, c, "Generator"), u(T, a, (function() {
                        return this
                    })), u(T, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = Object(e),
                            r = [];
                        for (var n in t) r.push(n);
                        return r.reverse(),
                            function e() {
                                for (; r.length;) {
                                    var n = r.pop();
                                    if (n in t) return e.value = n, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, e.values = P, B.prototype = {
                        constructor: B,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(C), !e)
                                for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var r = this;

                            function i(n, i) {
                                return s.type = "throw", s.arg = e, r.next = n, i && (r.method = "next", r.arg = t), !!i
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o],
                                    s = a.completion;
                                if ("root" === a.tryLoc) return i("end");
                                if (a.tryLoc <= this.prev) {
                                    var c = n.call(a, "catchLoc"),
                                        u = n.call(a, "finallyLoc");
                                    if (c && u) {
                                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var i = this.tryEntries[r];
                                if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var a = o ? o.completion : {};
                            return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, w) : this.complete(a)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), w
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), w
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var i = n.arg;
                                        C(r)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, r, n) {
                            return this.delegate = {
                                iterator: P(e),
                                resultName: r,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = t), w
                        }
                    }, e
                }(e.exports);
                try {
                    regeneratorRuntime = t
                } catch (e) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
                }
            },
            47: (e, t, r) => {
                var n;
                ! function(i, o) {
                    "use strict";
                    var a = "function",
                        s = "undefined",
                        c = "object",
                        u = "string",
                        l = "model",
                        d = "name",
                        f = "type",
                        p = "vendor",
                        h = "version",
                        g = "architecture",
                        w = "console",
                        b = "mobile",
                        v = "tablet",
                        m = "smarttv",
                        y = "wearable",
                        x = "embedded",
                        _ = {
                            extend: function(e, t) {
                                var r = {};
                                for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                                return r
                            },
                            has: function(e, t) {
                                return typeof e === u && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                            },
                            lowerize: function(e) {
                                return e.toLowerCase()
                            },
                            major: function(e) {
                                return typeof e === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o
                            },
                            trim: function(e, t) {
                                return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof t === s ? e : e.substring(0, 255)
                            }
                        },
                        T = {
                            rgx: function(e, t) {
                                for (var r, n, i, s, u, l, d = 0; d < t.length && !u;) {
                                    var f = t[d],
                                        p = t[d + 1];
                                    for (r = n = 0; r < f.length && !u;)
                                        if (u = f[r++].exec(e))
                                            for (i = 0; i < p.length; i++) l = u[++n], typeof(s = p[i]) === c && s.length > 0 ? 2 == s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 == s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
                                    d += 2
                                }
                            },
                            str: function(e, t) {
                                for (var r in t)
                                    if (typeof t[r] === c && t[r].length > 0) {
                                        for (var n = 0; n < t[r].length; n++)
                                            if (_.has(t[r][n], e)) return "?" === r ? o : r
                                    } else if (_.has(t[r], e)) return "?" === r ? o : r;
                                return e
                            }
                        },
                        S = {
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
                        E = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [h, [d, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [h, [d, "Edge"]],
                                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                                [d, h],
                                [/opios[\/\s]+([\w\.]+)/i],
                                [h, [d, "Opera Mini"]],
                                [/\sopr\/([\w\.]+)/i],
                                [h, [d, "Opera"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [d, h],
                                [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                                [h, [d, "UCBrowser"]],
                                [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                                [h, [d, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [h, [d, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [h, [d, "Konqueror"]],
                                [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                                [h, [d, "IE"]],
                                [/yabrowser\/([\w\.]+)/i],
                                [h, [d, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [d, /(.+)/, "$1 Secure Browser"], h
                                ],
                                [/focus\/([\w\.]+)/i],
                                [h, [d, "Firefox Focus"]],
                                [/opt\/([\w\.]+)/i],
                                [h, [d, "Opera Touch"]],
                                [/coc_coc_browser\/([\w\.]+)/i],
                                [h, [d, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [h, [d, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [h, [d, "Opera Coast"]],
                                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                                [h, [d, "MIUI Browser"]],
                                [/fxios\/([\w\.-]+)/i],
                                [h, [d, "Firefox"]],
                                [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                                [
                                    [d, "360 Browser"]
                                ],
                                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                                [
                                    [d, /(.+)/, "$1 Browser"], h
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [d, /_/g, " "], h
                                ],
                                [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                                [d, h],
                                [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                                [d],
                                [/;fbav\/([\w\.]+);/i],
                                [h, [d, "Facebook"]],
                                [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                                [
                                    [d, "Facebook"]
                                ],
                                [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                                [d, h],
                                [/\bgsa\/([\w\.]+)\s.*safari\//i],
                                [h, [d, "GSA"]],
                                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                                [h, [d, "Chrome Headless"]],
                                [/\swv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [d, "Chrome WebView"], h
                                ],
                                [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                                [h, [d, "Android Browser"]],
                                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                                [d, h],
                                [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                                [h, [d, "Mobile Safari"]],
                                [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                                [h, d],
                                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [d, [h, T.str, S.browser.oldSafari.version]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [d, h],
                                [/(navigator|netscape)\/([\w\.-]+)/i],
                                [
                                    [d, "Netscape"], h
                                ],
                                [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                                [h, [d, "Firefox Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                                [d, h]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                                [
                                    [g, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [g, _.lowerize]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [g, "ia32"]
                                ],
                                [/\b(aarch64|armv?8e?l?)\b/i],
                                [
                                    [g, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [g, "armhf"]
                                ],
                                [/windows\s(ce|mobile);\sppc;/i],
                                [
                                    [g, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                                [
                                    [g, /ower/, "", _.lowerize]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [g, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [g, _.lowerize]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                                [l, [p, "Samsung"],
                                    [f, v]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                                [l, [p, "Samsung"],
                                    [f, b]
                                ],
                                [/\((ip(?:hone|od)[\s\w]*);/i],
                                [l, [p, "Apple"],
                                    [f, b]
                                ],
                                [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [l, [p, "Apple"],
                                    [f, v]
                                ],
                                [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                                [l, [p, "Huawei"],
                                    [f, v]
                                ],
                                [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                                [l, [p, "Huawei"],
                                    [f, b]
                                ],
                                [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                                [
                                    [l, /_/g, " "],
                                    [p, "Xiaomi"],
                                    [f, b]
                                ],
                                [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                                [
                                    [l, /_/g, " "],
                                    [p, "Xiaomi"],
                                    [f, v]
                                ],
                                [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                                [l, [p, "OPPO"],
                                    [f, b]
                                ],
                                [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                                [l, [p, "Vivo"],
                                    [f, b]
                                ],
                                [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                                [l, [p, "Realme"],
                                    [f, b]
                                ],
                                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                                [l, [p, "Motorola"],
                                    [f, b]
                                ],
                                [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                [l, [p, "Motorola"],
                                    [f, v]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                                [l, [p, "LG"],
                                    [f, v]
                                ],
                                [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                                [l, [p, "LG"],
                                    [f, b]
                                ],
                                [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                                [l, [p, "Lenovo"],
                                    [f, v]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                                [
                                    [l, /_/g, " "],
                                    [p, "Nokia"],
                                    [f, b]
                                ],
                                [/droid.+;\s(pixel\sc)[\s)]/i],
                                [l, [p, "Google"],
                                    [f, v]
                                ],
                                [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                                [l, [p, "Google"],
                                    [f, b]
                                ],
                                [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [l, [p, "Sony"],
                                    [f, b]
                                ],
                                [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                                [
                                    [l, "Xperia Tablet"],
                                    [p, "Sony"],
                                    [f, v]
                                ],
                                [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                                [l, [p, "OnePlus"],
                                    [f, b]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                                [l, [p, "Amazon"],
                                    [f, v]
                                ],
                                [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                                [
                                    [l, "Fire Phone"],
                                    [p, "Amazon"],
                                    [f, b]
                                ],
                                [/\((playbook);[\w\s\),;-]+(rim)/i],
                                [l, p, [f, v]],
                                [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                                [l, [p, "BlackBerry"],
                                    [f, b]
                                ],
                                [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                                [l, [p, "ASUS"],
                                    [f, v]
                                ],
                                [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                                [l, [p, "ASUS"],
                                    [f, b]
                                ],
                                [/(nexus\s9)/i],
                                [l, [p, "HTC"],
                                    [f, v]
                                ],
                                [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                                [p, [l, /_/g, " "],
                                    [f, b]
                                ],
                                [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                                [l, [p, "Acer"],
                                    [f, v]
                                ],
                                [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                                [l, [p, "Meizu"],
                                    [f, b]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                                [p, l, [f, b]],
                                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
                                [p, l, [f, v]],
                                [/\s(surface\sduo)\s/i],
                                [l, [p, "Microsoft"],
                                    [f, v]
                                ],
                                [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                                [l, [p, "Fairphone"],
                                    [f, b]
                                ],
                                [/\s(u304aa)\sbuild/i],
                                [l, [p, "AT&T"],
                                    [f, b]
                                ],
                                [/sie-(\w*)/i],
                                [l, [p, "Siemens"],
                                    [f, b]
                                ],
                                [/[;\/]\s?(rct\w+)\sbuild/i],
                                [l, [p, "RCA"],
                                    [f, v]
                                ],
                                [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                                [l, [p, "Dell"],
                                    [f, v]
                                ],
                                [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                                [l, [p, "Verizon"],
                                    [f, v]
                                ],
                                [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                                [l, [p, "Barnes & Noble"],
                                    [f, v]
                                ],
                                [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                                [l, [p, "NuVision"],
                                    [f, v]
                                ],
                                [/;\s(k88)\sbuild/i],
                                [l, [p, "ZTE"],
                                    [f, v]
                                ],
                                [/;\s(nx\d{3}j)\sbuild/i],
                                [l, [p, "ZTE"],
                                    [f, b]
                                ],
                                [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                                [l, [p, "Swiss"],
                                    [f, b]
                                ],
                                [/[;\/]\s?(zur\d{3})\sbuild/i],
                                [l, [p, "Swiss"],
                                    [f, v]
                                ],
                                [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                                [l, [p, "Zeki"],
                                    [f, v]
                                ],
                                [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                                [
                                    [p, "Dragon Touch"], l, [f, v]
                                ],
                                [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                                [l, [p, "Insignia"],
                                    [f, v]
                                ],
                                [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                                [l, [p, "NextBook"],
                                    [f, v]
                                ],
                                [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                                [
                                    [p, "Voice"], l, [f, b]
                                ],
                                [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                                [
                                    [p, "LvTel"], l, [f, b]
                                ],
                                [/;\s(ph-1)\s/i],
                                [l, [p, "Essential"],
                                    [f, b]
                                ],
                                [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                                [l, [p, "Envizen"],
                                    [f, v]
                                ],
                                [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                                [l, [p, "MachSpeed"],
                                    [f, v]
                                ],
                                [/[;\/]\s?tu_(1491)\sbuild/i],
                                [l, [p, "Rotor"],
                                    [f, v]
                                ],
                                [/(shield[\w\s]+)\sbuild/i],
                                [l, [p, "Nvidia"],
                                    [f, v]
                                ],
                                [/(sprint)\s(\w+)/i],
                                [p, l, [f, b]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [l, /\./g, " "],
                                    [p, "Microsoft"],
                                    [f, b]
                                ],
                                [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [l, [p, "Zebra"],
                                    [f, v]
                                ],
                                [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [l, [p, "Zebra"],
                                    [f, b]
                                ],
                                [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                                [p, l, [f, w]],
                                [/droid.+;\s(shield)\sbuild/i],
                                [l, [p, "Nvidia"],
                                    [f, w]
                                ],
                                [/(playstation\s[345portablevi]+)/i],
                                [l, [p, "Sony"],
                                    [f, w]
                                ],
                                [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                                [l, [p, "Microsoft"],
                                    [f, w]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [p, [f, m]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [l, /^/, "SmartTV"],
                                    [p, "Samsung"],
                                    [f, m]
                                ],
                                [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                                [
                                    [p, "LG"],
                                    [f, m]
                                ],
                                [/(apple)\s?tv/i],
                                [p, [l, "Apple TV"],
                                    [f, m]
                                ],
                                [/crkey/i],
                                [
                                    [l, "Chromecast"],
                                    [p, "Google"],
                                    [f, m]
                                ],
                                [/droid.+aft([\w])(\sbuild\/|\))/i],
                                [l, [p, "Amazon"],
                                    [f, m]
                                ],
                                [/\(dtv[\);].+(aquos)/i],
                                [l, [p, "Sharp"],
                                    [f, m]
                                ],
                                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                                [
                                    [p, _.trim],
                                    [l, _.trim],
                                    [f, m]
                                ],
                                [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                                [
                                    [f, m]
                                ],
                                [/((pebble))app\/[\d\.]+\s/i],
                                [p, l, [f, y]],
                                [/droid.+;\s(glass)\s\d/i],
                                [l, [p, "Google"],
                                    [f, y]
                                ],
                                [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                                [l, [p, "Zebra"],
                                    [f, y]
                                ],
                                [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                                [p, [f, x]],
                                [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                                [l, [f, b]],
                                [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                                [l, [f, v]],
                                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                                [
                                    [f, _.lowerize]
                                ],
                                [/(android[\w\.\s\-]{0,9});.+build/i],
                                [l, [p, "Generic"]],
                                [/(phone)/i],
                                [
                                    [f, b]
                                ]
                            ],
                            engine: [
                                [/windows.+\sedge\/([\w\.]+)/i],
                                [h, [d, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [h, [d, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                                [d, h],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [h, d]
                            ],
                            os: [
                                [/microsoft\s(windows)\s(vista|xp)/i],
                                [d, h],
                                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                                [d, [h, T.str, S.os.windows.version]],
                                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                [
                                    [d, "Windows"],
                                    [h, T.str, S.os.windows.version]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [h, /_/g, "."],
                                    [d, "iOS"]
                                ],
                                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                                [
                                    [d, "Mac OS"],
                                    [h, /_/g, "."]
                                ],
                                [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                                [d, h],
                                [/\(bb(10);/i],
                                [h, [d, "BlackBerry"]],
                                [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                                [h, [d, "Symbian"]],
                                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                [
                                    [d, "Firefox OS"]
                                ],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [h, [d, "webOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [h, [d, "Chromecast"]],
                                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                [
                                    [d, "Chromium OS"], h
                                ],
                                [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
                                [d, h],
                                [/(sunos)\s?([\w\.\d]*)/i],
                                [
                                    [d, "Solaris"], h
                                ],
                                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                                [d, h]
                            ]
                        },
                        O = function(e, t) {
                            if ("object" == typeof e && (t = e, e = o), !(this instanceof O)) return new O(e, t).getResult();
                            var r = e || (void 0 !== i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                                n = t ? _.extend(E, t) : E;
                            return this.getBrowser = function() {
                                var e = {
                                    name: o,
                                    version: o
                                };
                                return T.rgx.call(e, r, n.browser), e.major = _.major(e.version), e
                            }, this.getCPU = function() {
                                var e = {
                                    architecture: o
                                };
                                return T.rgx.call(e, r, n.cpu), e
                            }, this.getDevice = function() {
                                var e = {
                                    vendor: o,
                                    model: o,
                                    type: o
                                };
                                return T.rgx.call(e, r, n.device), e
                            }, this.getEngine = function() {
                                var e = {
                                    name: o,
                                    version: o
                                };
                                return T.rgx.call(e, r, n.engine), e
                            }, this.getOS = function() {
                                var e = {
                                    name: o,
                                    version: o
                                };
                                return T.rgx.call(e, r, n.os), e
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
                                return r
                            }, this.setUA = function(e) {
                                return r = typeof e === u && e.length > 255 ? _.trim(e, 255) : e, this
                            }, this.setUA(r), this
                        };
                    O.VERSION = "0.7.28", O.BROWSER = {
                        NAME: d,
                        MAJOR: "major",
                        VERSION: h
                    }, O.CPU = {
                        ARCHITECTURE: g
                    }, O.DEVICE = {
                        MODEL: l,
                        VENDOR: p,
                        TYPE: f,
                        CONSOLE: w,
                        MOBILE: b,
                        SMARTTV: m,
                        TABLET: v,
                        WEARABLE: y,
                        EMBEDDED: x
                    }, O.ENGINE = {
                        NAME: d,
                        VERSION: h
                    }, O.OS = {
                        NAME: d,
                        VERSION: h
                    }, typeof t !== s ? (e.exports && (t = e.exports = O), t.UAParser = O) : (n = function() {
                        return O
                    }.call(t, r, t, e)) === o || (e.exports = n);
                    var k = void 0 !== i && (i.jQuery || i.Zepto);
                    if (k && !k.ua) {
                        var A = new O;
                        k.ua = A.getResult(), k.ua.get = function() {
                            return A.getUA()
                        }, k.ua.set = function(e) {
                            A.setUA(e);
                            var t = A.getResult();
                            for (var r in t) k.ua[r] = t[r]
                        }
                    }
                }(window)
            }
        },
        t = {};

    function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.exports
    }
    r.amdO = {}, r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var n = {};
    return (() => {
        "use strict";
        r.r(n), r.d(n, {
            compliance: () => o,
            cookies: () => t,
            device: () => e,
            http: () => s,
            language: () => d,
            theme: () => p,
            utils: () => l,
            utm: () => f
        });
        var e = {};
        r.r(e), r.d(e, {
            getDevice: () => Ee
        });
        var t = {};
        r.r(t), r.d(t, {
            parse: () => Ce,
            read: () => Be,
            write: () => Pe
        });
        var i = {};
        r.r(i), r.d(i, {
            v4: () => Re
        });
        var o = {};
        r.r(o), r.d(o, {
            getComplianceInfo: () => Ne
        });
        var a = {};
        r.r(a), r.d(a, {
            fetch: () => xt,
            setTitle: () => yt
        });
        var s = {};
        r.r(s), r.d(s, {
            _config: () => $t,
            addRequestInterceptor: () => Yt,
            addResponseInterceptor: () => Qt,
            addResultInterceptor: () => er,
            del: () => Sr,
            fetch: () => wr,
            fetchOrigin: () => $e,
            get: () => xr,
            getDeviceInfo: () => Ve,
            initConfig: () => rr,
            post: () => _r,
            postForm: () => Er,
            prefetch: () => Or,
            put: () => Tr,
            upload: () => Wr,
            uploadHandler: () => zr
        });
        var c = {};
        r.r(c), r.d(c, {
            config: () => on,
            del: () => Yr,
            enableHTTPNextMode: () => qr,
            enableLog: () => cn,
            fetch: () => Kr,
            fetchOrigin: () => en,
            get: () => Zr,
            getDeviceInfo: () => Xr,
            getTracePageInSsr: () => sn,
            initConfig: () => rn,
            logAPI: () => un,
            post: () => Jr,
            postForm: () => Qr,
            prefetch: () => Or,
            put: () => $r,
            setTracePageInSsr: () => an,
            updateSSRHeader: () => nn,
            upload: () => ln,
            uploadHandler: () => dn
        });
        var u = {};
        r.r(u), r.d(u, {
            atob: () => yn,
            atobu: () => xn,
            btoa: () => wn,
            btoau: () => bn
        });
        var l = {};
        r.r(l), r.d(l, {
            b2a: () => u,
            getLevelDomain: () => Tn,
            md5: () => Q(),
            uuid: () => i
        });
        var d = {};
        r.r(d), r.d(d, {
            dir: () => Cn,
            getIsRegionMode: () => Bn,
            getLanguage: () => Ie,
            getPathPrefix: () => En,
            setLanguage: () => kn
        });
        var f = {};
        r.r(f), r.d(f, {
            getUTM: () => Nn,
            writeUTMtoCookie: () => Mn
        });
        var p = {};
        r.r(p), r.d(p, {
            getTheme: () => Hn,
            setTheme: () => zn
        });
        var h = r(989),
            g = r.n(h);

        function w(e, t, r, n, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function b(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(n, i) {
                    var o = e.apply(t, r);

                    function a(e) {
                        w(o, n, i, a, s, "next", e)
                    }

                    function s(e) {
                        w(o, n, i, a, s, "throw", e)
                    }
                    a(void 0)
                }))
            }
        }
        var v = r(829),
            m = r.n(v),
            y = r(812),
            x = "__BNC_USER_DEVICE_ID__",
            _ = "unknown",
            T = function(e) {
                if (!e) return e;
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            },
            S = {},
            E = function() {
                return "undefined" != typeof sessionStorage
            },
            O = function() {
                return "undefined" != typeof localStorage
            },
            k = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (O()) return r.ttl ? localStorage.setItem(e, JSON.stringify({
                    value: t,
                    expire: (new Date).getTime() + r.ttl
                })) : localStorage.setItem(e, t)
            },
            A = function(e) {
                if (O()) {
                    var t = localStorage.getItem(e),
                        r = T(t) || {};
                    return r.expire ? r.expire && r.expire > (new Date).getTime() ? r.value : null : t
                }
            },
            C = function(e) {
                var t = x,
                    r = JSON.stringify(e);
                ! function(e) {
                    ! function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                            n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        if ("undefined" != typeof document) {
                            var i, o = new Date;
                            r ? (o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3), i = "; expires=".concat(o.toGMTString())) : i = "";
                            var a, s = n ? "; domain=".concat(((a = window.location.hostname.split("."))[0] = "", a.join("."))) : "";
                            document.cookie = "".concat(e, "=").concat(t).concat(i).concat(s, "; path=/; secure=true;")
                        }
                    }(e, "", -1, !1)
                }(t), O() && k(t, r), E() && sessionStorage.setItem(t, r), S[x] = r
            },
            B = function() {
                return function() {
                    var e = x,
                        t = null;
                    t || (t = S[x]), !t && O() && (t = A(e) || null), !t && E() && (t = sessionStorage.getItem(e) || null);
                    var r, n = T(t) || {};
                    if (r = n, "[object String]" === Object.prototype.toString.call(r)) {
                        console.log("device need decodeURIComponent");
                        try {
                            n = T(decodeURIComponent(n))
                        } catch (e) {
                            console.log("device need decodeURIComponent error", e)
                        }
                    }
                    return t && C(n), n
                }()
            },
            P = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = Object.assign({}, t);
                r.device_id = function(e) {
                    if (!e) return "";
                    var t = B()[m()(e)];
                    return t && t.value || ""
                }(e);
                var n = m()(e || ""),
                    i = B(),
                    o = Object.keys(i).filter((function(e) {
                        return e !== n
                    }));
                return r.related_device_ids = o.map((function(e) {
                    return i[e].value
                })).join(","), y.Base64.encode(JSON.stringify(r))
            };

        function R(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                })))), n.forEach((function(t) {
                    R(e, t, r[t])
                }))
            }
            return e
        }
        var N, M = r(47),
            D = r(427),
            L = r.n(D),
            j = {
                colorDepth: !0,
                deviceMemory: !0,
                pixelRatio: !0,
                hardwareConcurrency: !0,
                sessionStorage: !0,
                localStorage: !0,
                indexedDb: !0,
                addBehavior: !0,
                openDatabase: !0,
                cpuClass: !0,
                doNotTrack: !0,
                adBlock: !0,
                hasLiedLanguages: !0,
                hasLiedResolution: !0,
                hasLiedOs: !0,
                hasLiedBrowser: !0,
                touchSupport: !0,
                fonts: !0,
                fontsFlash: !0,
                enumerateDevices: !0
            },
            U = _;

        function F() {
            return N = N || (new M.UAParser).getResult()
        }
        var G, V = function() {
                var e = F(),
                    t = e.browser,
                    r = e.os || {};
                return t && t.name ? "".concat(t.name, " V").concat(t.version, " (").concat(r.name || "", ")") : U
            },
            H = function(e) {
                var t = e[1].replace("canvas fp:data:image/png;base64,", "");
                try {
                    return function(e) {
                        var t, r, n, i = "";
                        for (t = 0, r = (e += "").length; t < r; t++) i += (n = e.charCodeAt(t).toString(16)).length < 2 ? "0".concat(n) : n;
                        return i
                    }(atob(t).slice(-16, -12))
                } catch (e) {
                    return console.warn("Failed to get canvas code: ", e), _
                }
            },
            z = function(e) {
                var t = {
                    vendor: _,
                    renderer: _
                };
                if (!e || !e.length) return t;
                for (var r = e.length, n = 0, i = 0; i < r; i++) {
                    var o = e[i] || "";
                    if (o.indexOf("webgl unmasked vendor:") > -1 ? (t.vendor = o.split("webgl unmasked vendor:")[1] || _, n += 1) : o.indexOf("webgl unmasked renderer:") > -1 && (t.renderer = o.split("webgl unmasked renderer:")[1] || _, n += 1), 2 === n) break
                }
                return t
            },
            W = function(e) {
                var t = e.plugins || e.regular_plugins || e.ie_plugins;
                if (!Array.isArray(t)) return _;
                var r = [];
                return t.forEach((function(e) {
                    r.push(e[0])
                })), r.length > 500 ? r.slice(0, 500).join(",") : r.join(",")
            },
            q = function(e) {
                var t = {
                    screenResolution: _,
                    avaScreenResolution: _
                };
                return e.screenResolution && Array.isArray(e.availableScreenResolution) && (t.screenResolution = e.screenResolution.join(",")), e.availableScreenResolution && Array.isArray(e.availableScreenResolution) && (t.avaScreenResolution = e.availableScreenResolution.join(",")), t
            },
            X = (G = b(g().mark((function e() {
                var t, r, n, i;
                return g().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            e.next = 2;
                            break;
                        case 2:
                            if (t = "__BNC_FP_INFO__", r = I({}, j), !(n = T(A(t)))) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return", n);
                        case 7:
                            return i = function() {
                                var e = b(g().mark((function e() {
                                    var n, i, o, a, s, c;
                                    return g().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, L().getPromise({
                                                    excludes: r
                                                });
                                            case 2:
                                                return n = e.sent, i = n.reduce((function(e, t) {
                                                    return e[t.key] = t.value, e
                                                }), {}), o = z(i.webgl), a = q(i), s = {
                                                    screen_resolution: a.screenResolution,
                                                    available_screen_resolution: a.avaScreenResolution,
                                                    system_version: (void 0, h = F().os, h && h.name ? "".concat(h.name, " ").concat(h.version) : U),
                                                    brand_model: (p = void 0, p = F().device, p && p.model ? [p.type, p.vendor, p.model, ""].join(" ") : U),
                                                    system_lang: i.language,
                                                    timezone: (u = i.timezoneOffset, l = void 0, d = void 0, f = void 0, d = Math.floor(Math.abs(u) / 60), f = Math.abs(u % 60), l = 0 === f ? "".concat(d.toString().padStart(2, "0"), ":00") : "".concat(d.toString().padStart(2, "0"), ":").concat(f.toString().padStart(2, "0")), l = u > 0 ? "-".concat(l) : "+".concat(l), "GMT".concat(l)),
                                                    timezoneOffset: i.timezoneOffset,
                                                    user_agent: i.userAgent,
                                                    list_plugin: W(i),
                                                    canvas_code: H(i.canvas),
                                                    webgl_vendor: o.vendor,
                                                    webgl_renderer: o.renderer,
                                                    audio: i.audio,
                                                    platform: i.platform,
                                                    web_timezone: i.timezone,
                                                    device_name: V()
                                                }, c = Object.keys(s).sort().map((function(e) {
                                                    return s[e]
                                                })), s.fingerprint = L().x64hash128(c.join(""), 32), localStorage.removeItem("__BNC_FP_INFO__0093cf"), k(t, JSON.stringify(s), {
                                                    ttl: 864e5
                                                }), e.abrupt("return", s);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                        var u, l, d, f, p, h
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(), e.prev = 8, e.next = 11, i();
                        case 11:
                            return e.abrupt("return", e.sent);
                        case 14:
                            e.prev = 14, e.t0 = e.catch(8), console.error("Fingerprint error: ", e.t0);
                        case 17:
                            return e.abrupt("return", Promise.resolve({}));
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [8, 14]
                ])
            }))), function() {
                return G.apply(this, arguments)
            });
        const K = X;
        var Z, J = {},
            $ = (Z = b(g().mark((function e(t) {
                return g().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (Object.keys(J).length) {
                                e.next = 5;
                                break
                            }
                            return e.next = 4, K();
                        case 4:
                            J = e.sent;
                        case 5:
                            return e.abrupt("return", P(t, J));
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), function(e) {
                return Z.apply(this, arguments)
            });
        "requestIdleCallback" in window && window.requestIdleCallback((function() {
            $()
        }));
        var Y = r(150),
            Q = r.n(Y),
            ee = 2654435769;

        function te(e, t) {
            var r = e.length,
                n = r << 2;
            if (t) {
                var i = e[r - 1];
                if (i < (n -= 4) - 3 || i > n) return null;
                n = i
            }
            for (var o = 0; o < r; o++) e[o] = String.fromCharCode(255 & e[o], e[o] >>> 8 & 255, e[o] >>> 16 & 255, e[o] >>> 24 & 255);
            var a = e.join("");
            return t ? a.substring(0, n) : a
        }

        function re(e, t) {
            var r, n = e.length,
                i = n >> 2;
            3 & n && ++i, t ? (r = new Array(i + 1))[i] = n : r = new Array(i);
            for (var o = 0; o < n; ++o) r[o >> 2] |= e.charCodeAt(o) << ((3 & o) << 3);
            return r
        }

        function ne(e) {
            return 4294967295 & e
        }

        function ie(e, t, r, n, i, o) {
            return (r >>> 5 ^ t << 2) + (t >>> 3 ^ r << 4) ^ (e ^ t) + (o[3 & n ^ i] ^ r)
        }

        function oe(e) {
            return e.length < 4 && (e.length = 4), e
        }

        function ae(e) {
            if (/^[\x00-\x7f]*$/.test(e)) return e;
            for (var t = [], r = e.length, n = 0, i = 0; n < r; ++n, ++i) {
                var o = e.charCodeAt(n);
                if (o < 128) t[i] = e.charAt(n);
                else if (o < 2048) t[i] = String.fromCharCode(192 | o >> 6, 128 | 63 & o);
                else {
                    if (!(o < 55296 || o > 57343)) {
                        if (n + 1 < r) {
                            var a = e.charCodeAt(n + 1);
                            if (o < 56320 && 56320 <= a && a <= 57343) {
                                var s = 65536 + ((1023 & o) << 10 | 1023 & a);
                                t[i] = String.fromCharCode(240 | s >> 18 & 63, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s), ++n;
                                continue
                            }
                        }
                        throw new Error("Malformed string")
                    }
                    t[i] = String.fromCharCode(224 | o >> 12, 128 | o >> 6 & 63, 128 | 63 & o)
                }
            }
            return t.join("")
        }

        function se(e, t) {
            return null == e || 0 === e.length ? e : (e = ae(e), t = ae(t), te(function(e, t) {
                var r, n, i, o, a, s, c = e.length,
                    u = c - 1;
                for (n = e[u], i = 0, s = 0 | Math.floor(6 + 52 / c); s > 0; --s) {
                    for (o = (i = ne(i + ee)) >>> 2 & 3, a = 0; a < u; ++a) r = e[a + 1], n = e[a] = ne(e[a] + ie(i, r, n, a, o, t));
                    r = e[0], n = e[u] = ne(e[u] + ie(i, r, n, u, o, t))
                }
                return e
            }(re(e, !0), oe(re(t, !1))), !1))
        }
        const ce = function(e, t) {
            return (r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), function(e) {
                var t, n, i, o, a, s, c;
                for (n = i = 0, o = e.length, s = (o -= a = o % 3) / 3 << 2, a > 0 && (s += 4), t = new Array(s); n < o;) c = e.charCodeAt(n++) << 16 | e.charCodeAt(n++) << 8 | e.charCodeAt(n++), t[i++] = r[c >> 18] + r[c >> 12 & 63] + r[c >> 6 & 63] + r[63 & c];
                return 1 == a ? (c = e.charCodeAt(n++), t[i++] = r[c >> 2] + r[(3 & c) << 4] + "==") : 2 == a && (c = e.charCodeAt(n++) << 8 | e.charCodeAt(n++), t[i++] = r[c >> 10] + r[c >> 4 & 63] + r[(15 & c) << 2] + "="), t.join("")
            })(se(e, t));
            var r
        };
        "".concat("BNC_FV_KEY", "_T");
        var ue = function(e) {
                return function(e) {
                    var t = function(e) {
                            for (var t = ""; t.length < 6;) t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" [Math.floor(62 * Math.random())];
                            return t
                        }(),
                        r = Date.now(),
                        n = "".concat(e, "|").concat(r),
                        i = ce(n, t),
                        o = function(e) {
                            var t = 0,
                                r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) t ^= o.value.charCodeAt(0)
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    r || null == a.return || a.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                            var s = t.toString(16);
                            return 2 === s.length ? s : "0".concat(s)
                        }("".concat(t).concat(i));
                    return "".concat(t).concat(i).concat(o)
                }(e)
            },
            le = r(232);
        const de = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
            fe = (e, t, r) => Object.defineProperty(e, t, {
                value: r
            }),
            pe = e => {
                if ("string" != typeof e) throw new TypeError("agent must be a string");
                const t = e.match(de),
                    r = Object.create({
                        isHybrid: !1
                    });
                if (t) {
                    const e = t[1];
                    fe(r, "bridgeVersion", e), fe(r, "clientType", t[2]), fe(r, "clientVersion", t[3]), fe(r, "isHybrid", !!e)
                }
                return window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction && (r.isHybrid = !0), r
            };
        let he;
        const ge = () => "undefined" != typeof navigator ? navigator.userAgent : "";

        function we(e) {
            return 0 === arguments.length ? he || (he = pe(ge())) : pe(e)
        }

        function be(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function ve(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function me(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ve(Object(r), !0).forEach((function(t) {
                    ye(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ve(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function ye(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var xe, _e = new(function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.cache = new Map, this.maxSize = t
                }
                var t, r;
                return t = e, (r = [{
                    key: "get",
                    value: function(e) {
                        if (this.cache.has(e)) {
                            var t = this.cache.get(e);
                            return this.cache.delete(e), this.cache.set(e, t), t
                        }
                        return null
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        if (this.cache.has(e)) this.cache.delete(e);
                        else if (this.cache.size >= this.maxSize) {
                            var r = this.cache.keys().next().value;
                            this.cache.delete(r)
                        }
                        this.cache.set(e, t)
                    }
                }]) && be(t.prototype, r), e
            }())(50),
            Te = {
                "Mac OS": "macOS",
                iOS: "iOS",
                Windows: "Windows",
                Android: "Android",
                "Windows Phone": "Windows Phone",
                WebOS: "WebOS",
                BlackBerry: "BlackBerry",
                Bada: "Bada",
                Tizen: "Tizen",
                Linux: "Linux",
                "Chromium OS": "Chrome OS",
                PlayStation: "PlayStation 4"
            },
            Se = function(e) {
                return me(me({}, e), {}, {
                    name: Te[e.name] || e.name
                })
            };

        function Ee(e) {
            var t = e;
            if (t || (t = "undefined" != typeof navigator ? navigator.userAgent : ""), !t) return {
                platform: {
                    isMobile: !1,
                    isPc: !1,
                    isTablet: !1
                },
                hybrid: {
                    isHybrid: !1
                }
            };
            var r = _e.get(t);
            if (r) return r;
            var n = we(t),
                i = n.bridgeVersion,
                o = n.clientType,
                a = n.clientVersion,
                s = n.isHybrid,
                c = new le.UAParser(t),
                u = c.getResult(),
                l = function(e) {
                    return e.getDevice().type || "desktop"
                }(c),
                d = "mobile" === l,
                f = "desktop" === l,
                p = "tablet" === l,
                h = me(me({}, null == u ? void 0 : u.device), {}, {
                    type: l
                }),
                g = {
                    platform: {
                        isMobile: d,
                        isPc: f,
                        isTablet: p
                    },
                    ua: {
                        raw: t,
                        parsed: me(me({}, u), {}, {
                            platform: h,
                            device: h,
                            os: Se(u.os)
                        })
                    },
                    hybrid: {
                        bridgeVersion: i,
                        clientType: o,
                        clientVersion: a,
                        isHybrid: s
                    }
                };
            return _e.set(t, g), g
        }
        var Oe = !(null === (xe = window) || void 0 === xe || !xe.__RUN_BY_ELECTRON__),
            ke = function(e) {
                return -1 === [void 0, null, ""].indexOf(e)
            };

        function Ae(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var Ce = function(e) {
                return (document.cookie || "").split(";").reduce((function(e, t) {
                    var r = (t || "").trim(),
                        n = r.indexOf("=");
                    if (n > 0) {
                        var i = r.slice(0, n).trim(),
                            o = r.slice(++n).trim();
                        e[i] = Ae('"' === o[0] ? o.slice(1, -1) : o)
                    }
                    return e
                }), {})
            },
            Be = function(e, t) {
                if (ke(e)) {
                    if (Oe) {
                        if ("BNC-Location" === e) return window.__store.getState().temp.bncLocation;
                        var r = window.localStorage.getItem("APP_COOKIES_".concat(e));
                        return r ? Ae(r) : null
                    }
                    for (var n = "".concat(e, "=").trim(), i = (document.cookie || "").split(";"), o = 0; o < i.length; o++) {
                        var a = (i[o] || "").trim();
                        if (0 === a.indexOf(n)) {
                            var s = a.slice(n.length).trim();
                            return Ae('"' === s[0] ? s.slice(1, -1) : s)
                        }
                    }
                }
                return null
            };

        function Pe(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                i = arguments.length > 4 ? arguments[4] : void 0;
            if (ke(e)) {
                Oe && (t ? window.localStorage.setItem("APP_COOKIES_".concat(e), encodeURIComponent(t)) : window.localStorage.removeItem("APP_COOKIES_".concat(e)));
                var o, a, s = ["path=/"];
                n && s.unshift("Domain=".concat((a = (o = window.location.hostname).split(".")).length > 2 ? a.slice(-2).join(".") : o)), Number.isNaN(+r) || s.unshift("Max-Age=".concat(Math.floor(86400 * r))), i && s.unshift("Priority=".concat(i)), s.unshift("".concat(e, "=").concat(encodeURIComponent(t))), document.cookie = s.join("; ")
            }
        }
        var Re = function() {
            var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }));
            return "".concat(e.slice(0, -1), "b")
        };

        function Ie(e) {
            var t, r, n, i, o, a, s;
            if (null !== (t = window.chrome) && void 0 !== t && t.runtime) return localStorage.getItem("pika_i18n_lang") || navigator.language || "en";
            if (!globalThis.pika || ! function(e, t) {
                    if (!e) return !1;
                    for (var r = e.split("-")[0].split(".").map(Number), n = t.split("-")[0].split(".").map(Number), i = 0; i < 3; i++) {
                        if (r[i] > n[i]) return !0;
                        if (r[i] < n[i]) return !1
                    }
                    return !0
                }(globalThis.pika.version, "0.2.0")) {
                var c = window.location.pathname.split("/")[1];
                if (c) return c
            }
            var u = null === (r = document) || void 0 === r || null === (n = r.documentElement) || void 0 === n || null === (i = n.getAttribute) || void 0 === i ? void 0 : i.call(n, "bn-lang");
            if (u) return u;
            var l = null === (o = document) || void 0 === o || null === (a = o.documentElement) || void 0 === a || null === (s = a.getAttribute) || void 0 === s ? void 0 : s.call(a, "lang");
            return l || (new URLSearchParams(location.search).get("hl") || "en")
        }

        function Ne(e) {
            var t, r = null === (t = document.querySelector('script[id="bnc-cpl-headers"]')) || void 0 === t ? void 0 : t.textContent;
            try {
                return JSON.parse(null != r ? r : "{}")
            } catch (e) {
                return {}
            }
        }

        function Me(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function De(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Me(Object(r), !0).forEach((function(t) {
                    Le(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Me(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function Le(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function je(e, t, r, n, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function Ue(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(n, i) {
                    var o = e.apply(t, r);

                    function a(e) {
                        je(o, n, i, a, s, "next", e)
                    }

                    function s(e) {
                        je(o, n, i, a, s, "throw", e)
                    }
                    a(void 0)
                }))
            }
        }
        var Fe, Ge = Ee().hybrid.isHybrid,
            Ve = function() {
                var e = Ue(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!Ge) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", {});
                            case 2:
                                return e.next = 4, $("".trim().toLowerCase());
                            case 4:
                                return e.t0 = e.sent, e.abrupt("return", {
                                    "device-info": e.t0
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            He = function() {
                try {
                    return Intl.DateTimeFormat().resolvedOptions().timeZone
                } catch (e) {
                    return ""
                }
            },
            ze = ((Fe = Be("bnc-uuid")) || Pe("bnc-uuid", Fe = Re(), 1825, !0), Fe),
            We = function() {
                var e = Ue(regeneratorRuntime.mark((function e(t, r) {
                    var n, i, o, a, s, c, u, l, d, f, p;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r.omitHeader, i = r.lang, o = r.headers, r.req, a = r.credentials, e.next = 3, Ve();
                            case 3:
                                return s = e.sent, c = n ? {} : De({
                                    lang: i || Ie(),
                                    "X-UI-REQUEST-TRACE": t,
                                    "X-TRACE-ID": t,
                                    "BNC-UUID": ze,
                                    "Content-Type": "application/json"
                                }, s), n || Ge || (c = Object.assign(c, {
                                    clienttype: "web"
                                })), Ge || (u = Be("BNC_FV_KEY_T") || "", c = Object.assign(c, {
                                    "FVIDEO-ID": Be("BNC_FV_KEY") || "",
                                    "FVIDEO-TOKEN": u ? ue(u) : "",
                                    "X-PASSTHROUGH-TOKEN": localStorage.getItem("X-PASSTHROUGH-TOKEN") || Be("bnc-challenge-token") || "",
                                    "BNC-Location": Be("BNC-Location") || ""
                                }), null !== (l = window.localStorage.getItem("BNC-Level") || null) && (c["BNC-Level"] = l)), d = {}, f = Ne(), p = {
                                    method: "GET",
                                    mode: "cors",
                                    headers: De(De(De(De(De({}, c), d), o), f), {}, {
                                        "BNC-Time-Zone": He()
                                    }),
                                    credentials: a
                                }, e.abrupt("return", {
                                    opts: p
                                });
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            qe = function(e) {
                var t = Be("cr00");
                return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = Q()(t || "")), e
            };

        function Xe(e) {
            return e && e.Math == Math ? e : void 0
        }
        const Ke = "object" == typeof globalThis && Xe(globalThis) || Xe(window) || "object" == typeof self && Xe(self) || "object" == typeof r.g && Xe(r.g) || function() {
            return this
        }() || {};
        var Ze = function(e) {
                try {
                    var t, r, n, i, o, a, s, c = function(e) {
                        try {
                            return e.startsWith("http") ? new URL(e) : new URL(e, window.location.origin)
                        } catch (e) {
                            return console.warn("[http] getURLObject failed", e), {}
                        }
                    }(e.url);
                    ! function(e, ...t) {
                        Ke.pika = (null == Ke ? void 0 : Ke.pika) || {}, Ke.pika.__REPORT_MONITOR_EVENTS__ = Ke.pika.__REPORT_MONITOR_EVENTS__ || [], Ke.pika.__REPORT_MONITOR_EVENTS__.push([e, ...t])
                    }({
                        data: {
                            event: {
                                reqm: null === (t = e.opts) || void 0 === t ? void 0 : t.method,
                                host: null == c ? void 0 : c.host,
                                path: null == c ? void 0 : c.pathname,
                                s: null === (r = e.res) || void 0 === r ? void 0 : r.status,
                                res_header: Je(null === (n = e.res) || void 0 === n ? void 0 : n.headers),
                                ct: e.duration,
                                bc: null === (i = e.result) || void 0 === i ? void 0 : i.message,
                                busc: null === (o = e.result) || void 0 === o ? void 0 : o.code,
                                tid: null === (a = e.opts) || void 0 === a || null === (s = a.headers) || void 0 === s ? void 0 : s["X-TRACE-ID"],
                                phost: location.host,
                                ppath: location.pathname
                            }
                        }
                    })
                } catch (e) {
                    console.log("libs/http/logger2", e)
                }
            },
            Je = function(e) {
                var t = {};
                return e ? (["x-cache"].forEach((function(r) {
                    t[r] = e.get ? e.get(r) : e[r]
                })), t) : t
            },
            $e = function() {
                return {
                    fetch: window.fetch
                }
            };
        if (window.fetch && !window.__ESSENTIAL_FETCH_TAG__) {
            var Ye = window.fetch;
            window.fetch = function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n, i, o = t[0],
                    a = t[1],
                    s = t[2],
                    c = Date.now();
                return Ye.apply(window, t).then((function(e) {
                    var t = Date.now();
                    return i = t - c, n = e, e
                })).catch((function(e) {
                    throw e
                })).finally((function() {
                    s || Ze({
                        opts: a,
                        url: o,
                        res: n,
                        duration: i,
                        result: void 0,
                        net_err_exist: !n
                    })
                }))
            }, window.__ESSENTIAL_FETCH_TAG__ = !0
        }
        var Qe = $e().fetch,
            et = Ee().hybrid.isHybrid,
            tt = "/bapi/composite/v2/public/common/config/stub/score",
            rt = "_acc_org",
            nt = 432e5,
            it = 0,
            ot = [],
            at = !1;

        function st() {
            if (!at) {
                at = !0;
                var e = window.location.origin;
                ft(e), pt(e)
            }
        }

        function ct() {
            if (++it, window._accelerate_http_failed && 2 === it) {
                var e = ht(),
                    t = e.r,
                    r = e.o,
                    n = e.t;
                t || (window.localStorage.setItem(rt, JSON.stringify({
                    r: !0,
                    o: r,
                    t: n
                })), window.location.reload())
            }
        }

        function ut(e, t) {
            return ft(e), gt(e).then((function() {
                lt(t) || dt()
            })).catch((function() {
                window._accelerate_http_failed = !0, ct(), dt()
            }))
        }

        function lt(e) {
            return e && +new Date - e < nt
        }

        function dt() {
            var e = (ot.push(window.location.origin), ot);
            (function(e) {
                var t = 0;
                return new Promise((function(r, n) {
                    e.forEach((function(i) {
                        gt(i).then((function(e) {
                            r(e), ++t
                        })).catch((function() {
                            ++t === e.length && n()
                        }))
                    }))
                }))
            })(e).then((function(t) {
                var r = e.find((function(e) {
                    return ~t.url.indexOf(e)
                }));
                ft(r), pt(r), ct()
            })).catch((function() {
                pt(void 0)
            }))
        }

        function ft(e) {
            e = wt(e), window._ACCELERATE_ORIGIN = e
        }

        function pt(e) {
            var t = {
                t: +new Date
            };
            e && (e = wt(e), t.o = e);
            var r = ht(),
                n = r.r;
            lt(r.t) && n && (t.r = n), window.localStorage.setItem(rt, JSON.stringify(t))
        }

        function ht() {
            return JSON.parse(window.localStorage.getItem(rt) || "{}")
        }

        function gt(e) {
            return Qe("".concat(wt(e)).concat(tt, "?timestamp=").concat(+new Date)).then((function(e) {
                return 200 <= (t = e.status) && t < 300 ? e : Promise.reject();
                var t
            }))
        }

        function wt(e) {
            return e ? /^https?:/.test(e) ? e : "https://".concat(e) : e
        }
        var bt = function() {
            return {
                fetch: window.fetch
            }
        };
        window.fetchPonyfill = bt;
        const vt = bt,
            {
                fetch: mt
            } = vt(),
            yt = ({
                title: e
            }, t) => {
                document.title = e, t()
            },
            xt = ({
                url: e,
                method: t,
                body: r,
                headers: n,
                credentials: i = "same-origin"
            }, o) => {
                const a = {
                    method: t = t.toUpperCase(),
                    headers: n,
                    credentials: i
                };
                "GET" !== t && "HEAD" !== t && (a.body = r), mt(e, a).then((e => {
                    o({
                        response: e
                    })
                })).catch((e => {
                    o({
                        error: e
                    })
                }))
            },
            _t = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
            Tt = (e, t, r) => Object.defineProperty(e, t, {
                value: r
            }),
            St = e => {
                if ("string" != typeof e) throw new TypeError("agent must be a string");
                const t = e.match(_t),
                    r = Object.create({
                        isHybrid: !1
                    });
                if (t) {
                    const e = t[1];
                    Tt(r, "bridgeVersion", e), Tt(r, "clientType", t[2]), Tt(r, "clientVersion", t[3]), Tt(r, "isHybrid", !!e)
                }
                return r
            };
        let Et;
        const Ot = e => {
                if (e) return JSON.parse(e)
            },
            kt = (e, t) => void 0 === t ? e() : e(t);
        class At {
            constructor() {
                this._callbacks = Object.create(null), this._handlers = Object.create(null), this._nonce = function(e, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
                    let r = "";
                    for (let n = 0; n < e; n++) r += t.charAt(Math.floor(Math.random() * t.length));
                    return r
                }(10), this._uuid = 0, this._setup()
            }
            _getCallbackId(e) {
                const t = `${this._nonce}_${this._uuid++}`;
                return this._callbacks[t] = e, t
            }
            _receiveCallback(e, t) {
                const r = this._callbacks[e];
                r && (delete this._callbacks[e], kt(r, t))
            }
            _receiveEvent(e, t) {
                const r = this._handlers[e];
                r && kt(r, t)
            }
            invoke(e, t = {}) {
                return new Promise((r => {
                    const n = this._getCallbackId(r);
                    this._send(e, t, n)
                }))
            }
            handler(e, t) {
                this._handlers[e] = t
            }
            ready() {
                this._ready()
            }
        }
        const Ct = e => () => {
            throw new Error(`[bridge-core] ${e} must be implemented`)
        };
        Object.assign(At.prototype, {
            _setup: Ct("_setup"),
            _send: Ct("_send"),
            _ready: Ct("_ready")
        });
        class Bt {
            constructor() {
                this._adapters = [], this._default = null
            }
            register({
                test: e,
                adapter: t
            }) {
                return this._adapters.push({
                    test: e,
                    adapter: t
                }), this
            }
            default (e) {
                return this._default = e, this
            }
            create(e, t) {
                const r = function(e) {
                    return 0 === arguments.length ? Et || (Et = St("undefined" != typeof navigator ? navigator.userAgent : "")) : St(e)
                }(t);
                let n = this._default;
                return this._adapters.some((({
                    test: e,
                    adapter: t
                }) => !!e(r) && (n = t, !0))), e(new(n(At)), r)
            }
        }

        function Pt(e) {
            const t = [],
                r = {
                    $push(e) {
                        t.push(e)
                    }
                };
            return Object.keys(e).forEach((n => {
                const i = e[n];
                r[n] = "function" == typeof i ? (...e) => {
                    for (let r = 0; r < t.length; r++) i.apply(t[r], e)
                } : i
            })), r
        }
        const Rt = e => class extends e {
                _setup() {
                    window.BardApp || (window.BardApp = Pt({
                        callbackFromNative(e, t, r) {
                            window._BNC_BRIDGE_DEBUG_ && console.log(`[callbackFromNative] ${r} (callbackId: ${e})`), this._receiveCallback(e, Ot(r))
                        },
                        eventFromNative(e, t) {
                            window._BNC_BRIDGE_DEBUG_ && console.log(`[eventFromNative] eventType:${e} (data: ${t})`), this._receiveEvent(e, Ot(t))
                        }
                    })), window.BardApp.$push(this)
                }
                _send(e, t, r) {
                    window.BardMagicalJourney.messageSend(e, r, JSON.stringify(t))
                }
                _ready() {
                    window.BardMagicalJourney.bridgeReady()
                }
            },
            It = e => class extends e {
                _setup() {
                    if (!window.__BNC_BRIDGE_TEMP_VAR__) {
                        window.__BNC_BRIDGE_TEMP_VAR__ = Pt({
                            onMessage(e) {
                                window._BNC_BRIDGE_DEBUG_ && console.log(`[node-bridge-core][onMessage] ${e}`);
                                const t = (e = Ot(e)).payload.data;
                                "web-view-post-message" === e.action && "node-bridge" === t.type && this._receiveCallback(t.callbackId, t.data)
                            }
                        }), window.__NEZHA_WEB_BRIDGE__ || (console.log("[node-bridge-core] window.__NEZHA_WEB_BRIDGE__:", window.__NEZHA_WEB_BRIDGE__), window.__NEZHA_WEB_BRIDGE__ = {});
                        const e = window.__NEZHA_WEB_BRIDGE__.onMessage;
                        window.__NEZHA_WEB_BRIDGE__.onMessage = function(...t) {
                            e && e(...t), window.__BNC_BRIDGE_TEMP_VAR__.onMessage(...t)
                        }
                    }
                    window.__BNC_BRIDGE_TEMP_VAR__.$push(this)
                }
                _send(e, t, r) {
                    window.__NEZHA_BRIDGE__.postMessage(JSON.stringify({
                        action: "web-view-post-message",
                        payload: {
                            data: {
                                type: "node-bridge",
                                payload: {
                                    action: e,
                                    data: t,
                                    callbackId: r
                                }
                            }
                        },
                        callbackId: r
                    }))
                }
                _ready() {
                    window.__NEZHA_BRIDGE__.postMessage(JSON.stringify({
                        action: "web-view-post-message",
                        payload: {
                            data: {
                                type: "node-bridge",
                                payload: {
                                    event: "bridge-ready"
                                }
                            }
                        },
                        callbackId: 0
                    }))
                }
            },
            Nt = window.webkit && window.webkit.messageHandlers || {},
            Mt = (e, t = {}) => {
                Nt[e] && Nt[e].postMessage(t)
            },
            Dt = e => class extends e {
                _setup() {
                    window.BNCBridge || (window.BNCBridge = Pt({
                        receive(e) {
                            window._BNC_BRIDGE_DEBUG_ && console.log(`[callbackFromNative] ${e}`);
                            const {
                                callbackId: t,
                                eventType: r,
                                data: n
                            } = Ot(e);
                            t ? this._receiveCallback(t, n) : r && this._receiveEvent(r, n)
                        }
                    })), window.BNCBridge.$push(this)
                }
                _send(e, t, r) {
                    Mt(e, {
                        data: JSON.stringify(t),
                        callbackId: r
                    })
                }
                _ready() {
                    Mt("bridgeReady")
                }
            },
            Lt = e => class extends e {
                _setup() {}
                _send() {}
                _ready() {}
            },
            jt = class {
                constructor() {
                    this._methods = Object.create(null)
                }
                add(e, t) {
                    return this._methods[e] = t, this
                }
                _send(e, t, r) {
                    const n = this._methods[e];
                    if (!n) return console.error(`[bridge-core] bridge.${e} is not defined`);
                    n(t, (e => {
                        this._receiveCallback(r, e)
                    }))
                }
                create(e) {
                    const t = this;
                    return r => ({
                        [e]: class extends r {
                            _setup() {
                                t._bridge || (t._bridge = Pt({
                                    receiveCallback(...e) {
                                        this._receiveCallback(...e)
                                    },
                                    receiveEvent(...e) {
                                        this._receiveEvent(...e)
                                    }
                                })), t._receiveCallback = t._bridge.receiveCallback, window.BridgeReceiveEvent = t._bridge.receiveEvent, t._bridge.$push(this)
                            }
                            _send(e, r, n) {
                                t._send(e, r, n)
                            }
                            _ready() {}
                        }
                    }[e])
                }
            };

        function Ut(e, t) {
            return e === t ? "EQ" : e > t ? "GT" : "LT"
        }

        function Ft(e) {
            return e.replace(/-alpha/g, "").split(".").map(Number)
        }
        const {
            isHybrid: Gt,
            clientType: Vt,
            bridgeVersion: Ht
        } = we(), zt = e => {
            const t = Object.create(null);
            t.back = (t = 1) => e.invoke("back", {
                amount: t
            }), t.setTitle = t => e.invoke("setTitle", {
                title: t
            }), t.broadcast = t => e.invoke("broadcast", {
                data: t
            }), t.toast = t => e.invoke("toast", {
                text: t
            }), t.open = t => {
                void 0 === t.withNavigationBar && (t.withNavigationBar = !0), e.invoke("open", t)
            }, ["notExistBridge", "stopLoading", "isLogged", "getUserInfo", "getDiagnosticInfo", "getAppConfig", "isApplePayAvailable", "isAppleWatchPaired", "getSystemInfoSync", "mpHideControlButton", "mpShowControlButton"].forEach((r => {
                t[r] = () => e.invoke(r)
            })), ["alert", "addDebitCard", "verifyDebitCard", "face", "getImage", "jumio", "captchaResult", "kycVender", "openChatVideo", "setNavBar", "ensureLogged", "setKYCVendorUkrainDiiaPlugin", "refreshKycStatus", "getAutoCaptureImages", "appUpdate", "setStore", "getMicroblinkImages", "isMicroBlinkReady", "payService", "getProvisionedCards", "addCard", "notifyChatVideo", "haodeskFileUpload", "chatCaseToken", "haodeskUploadUerLog", "canShare", "updateEntityTag", "mpPreviewImage", "mpSetControlButton"].forEach((r => {
                t[r] = t => e.invoke(r, t)
            }));
            const r = Object.create(null),
                n = e => {
                    r[e] = Object.create({
                        listened: !1,
                        events: []
                    })
                };
            n("back"), n("broadcast"), n("theme-change"), n("session-change"), n("service-chat-change"), n("sendResultCheckoutForCryptoBox");
            const i = (e, t) => {
                    const r = e.indexOf(t);
                    ~r && ((e, t) => {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    })(e, r)
                },
                o = (t, n, o) => {
                    const a = r[t];
                    if (!a) return;
                    const {
                        events: s
                    } = a;
                    a.listened || (a.listened = !0, e.handler(t, (e => {
                        ((e, t) => {
                            const r = new Array(t);
                            for (let n = 0; n < t; ++n) r[n] = e[n];
                            return r
                        })(s, s.length).forEach((t => t(e)))
                    }))), s.push(o ? ((e, t) => {
                        const r = (...n) => {
                            i(e, r), t(...n)
                        };
                        return r
                    })(s, n) : n)
                };
            return t.on = (e, t) => o(e, t), t.once = (e, t) => o(e, t, !0), t.off = function(e, t) {
                const n = r[e];
                if (!n) return;
                const {
                    events: o
                } = n;
                1 !== arguments.length ? i(o, t) : o.length = 0
            }, t.fetch = (t, {
                method: r = "GET",
                body: n = "",
                headers: i = {},
                credentials: o
            } = {}) => e.invoke("fetch", {
                url: t,
                method: r,
                body: n,
                headers: i,
                credentials: o
            }).then((({
                error: e,
                response: r
            }) => {
                if (!Gt) return e ? Promise.reject(e) : Promise.resolve(r);
                if (e) {
                    const t = new TypeError("Failed to fetch");
                    switch (typeof e) {
                        case "object":
                            Object.assign(t, e);
                            break;
                        case "string":
                            t.message = e
                    }
                    throw t
                }
                const {
                    status: n,
                    headers: i,
                    body: o,
                    statusText: a = ""
                } = r, s = {};
                Object.keys(i).forEach((e => {
                    const t = i[e];
                    s[e] = "string" == typeof t ? [t] : t
                }));
                const c = (e => e >= 200 && e < 300)(n);
                return {
                    url: t,
                    ok: c,
                    status: n,
                    statusText: a,
                    json: () => new Promise(((e, t) => {
                        try {
                            e(JSON.parse(o || "{}"))
                        } catch (e) {
                            t(e)
                        }
                    })),
                    text: () => Promise.resolve(o),
                    headers: s,
                    clone: () => ({
                        url: t,
                        ok: c,
                        status: n,
                        statusText: a,
                        json: () => new Promise(((e, t) => {
                            try {
                                e(JSON.parse(o || "{}"))
                            } catch (e) {
                                t(e)
                            }
                        })),
                        text: () => Promise.resolve(o),
                        headers: s
                    })
                }
            })), t.share = t => {
                const {
                    type: r,
                    image: n
                } = t;
                return "iOS" === Vt && "IMAGE" === r && "string" == typeof n && 0 === n.indexOf("data:image") && (t.image = n.split(",")[1] || ""), e.invoke("share", t).then((({
                    result: e = "UNKNOWN"
                }) => {
                    if ("SUCCESS" === e) return Promise.resolve(); {
                        const t = new Error(e);
                        return t.code = e, Promise.reject(t)
                    }
                }))
            }, t.setButtons = (t, i, a) => (i = i.map((e => {
                const t = `button.${e.type}`;
                return r[t] || n(t), e.onClick && o(t, e.onClick), t
            })), e.invoke("setButtons", { ...a || {},
                buttons: i,
                position: t
            })), t.openURWebview = ({
                url: t,
                closePath: r = "/app/bnc/urwebv/close",
                closeButtonVisible: n,
                viewExternal: i
            }) => e.invoke("openURWebview", {
                url: t,
                closePath: r,
                closeButtonVisible: n,
                viewExternal: i
            }).then((({
                result: e,
                callbackUrl: t
            }) => "SUCCESS" === e ? Promise.resolve({
                callbackUrl: t
            }) : Promise.reject({
                code: e
            }))), t.isSupportDeeplink = t => Gt && "LT" !== function(e, t) {
                return function(e, t) {
                    if (e.join(".") === t.join(".")) return "EQ";
                    for (let r = 0; r < e.length; r++) switch (Ut(e[r], t[r])) {
                        case "EQ":
                            continue;
                        case "GT":
                            return "GT";
                        case "LT":
                            return "LT"
                    }
                }(Ft(e), Ft(t))
            }(Ht, "1.8.0") ? e.invoke("isSupportDeeplink", {
                deeplink: t
            }).then((({
                supported: e
            }) => e)) : Promise.resolve(!1), t.sendEventToNative = ({
                name: t,
                data: r = {}
            }) => e.invoke("sendEventToNative", {
                name: t,
                data: r
            }), t.saveFile = ({
                source: t,
                filename: r,
                fileType: n
            }) => e.invoke("saveFile", {
                source: t,
                filename: r,
                fileType: n
            }).then((e => {
                if (e && e.error) throw error
            })), e.ready(), t
        };

        function Wt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function qt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Wt(Object(r), !0).forEach((function(t) {
                    Xt(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wt(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function Xt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var Kt = ((e = Lt) => (new Bt).register({
            test: ({
                clientType: e
            }) => "iOS" === e || "MacOS" === e,
            adapter: Dt
        }).register({
            test: ({
                clientType: e
            }) => "Android" === e,
            adapter: Rt
        }).register({
            test: () => window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction,
            adapter: It
        }).default(e).create(zt, function() {
            const e = void 0 !== window.document,
                t = "undefined" != typeof process && null != process.versions && null != process.versions.node;
            let r = "";
            return e && (r = window.navigator.userAgent), t && (r = `node ${process.versions.node}`), r
        }()))((e => {
            const t = new jt;
            return Object.keys(e).forEach((r => {
                t.add(r, e[r])
            })), t.create("BrowserFakeBridge")
        })(qt(qt({}, a), {})));
        const Zt = Kt;
        var Jt = 30,
            $t = {
                requestInterceptors: [],
                responseInterceptors: [],
                resultInterceptors: [],
                baseUrl: "",
                accelerate: {
                    defaultOrigin: "",
                    origins: [],
                    enbleSites: null,
                    checkAccelerable: null
                }
            };

        function Yt(e) {
            $t.requestInterceptors.length >= Jt || $t.requestInterceptors.push(e)
        }

        function Qt(e) {
            $t.responseInterceptors.length >= Jt || $t.responseInterceptors.push(e)
        }

        function er(e) {
            $t.resultInterceptors.length >= Jt || $t.resultInterceptors.push(e)
        }
        var tr = !1,
            rr = function(e) {
                tr && console.error("[http] initConfig should only be called once.");
                try {
                    var t = e.accelerate;
                    t && function(e) {
                        var t, r = e.defaultOrigin,
                            n = e.enbleSites,
                            i = void 0 === n ? [] : n,
                            o = e.checkAccelerable;
                        return !et && (r = wt(r), i && (t = i, "[object Array]" === Object.prototype.toString.call(t)) && ~i.indexOf(window.location.hostname) && r && "string" == typeof r && /^(https?:)?\/\//.test(r) && "function" == typeof o)
                    }(t) && function(e) {
                        var t = e.defaultOrigin,
                            r = void 0 === t ? "" : t,
                            n = e.origins,
                            i = void 0 === n ? [] : n;
                        if (!et && "03N03N03N01G02T02K03202S03202U02W01G02U033031" !== function(e) {
                                for (var t, r, n, i = "0123ABCDEFGNXYZ456789OPQRSTUVWHIJKLM", o = i.split(""), a = "", s = 0; s < e.length; s++) a += o[(t = ((t = ((t = e.charCodeAt(s)) - (r = t % 36)) / 36) - (n = t % 36)) / 36) % 36] + o[n] + o[r];
                                return a
                            }(window.location.hostname) && !window.__accelerate_compoleted) {
                            window.__accelerate_compoleted = !0, ot = i;
                            var o = ht(),
                                a = o.o,
                                s = o.t;
                            a ? lt(s) ? (ft(a), gt(a).then((function() {})).catch((function() {
                                window._accelerate_http_failed = !0, ct(), dt()
                            }))) : ut(r, s) : lt(s) || ut(r, s)
                        }
                    }(t)
                } catch (e) {}
                Object.assign($t, e), tr = !0
            },
            nr = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return r ? "".concat(e, "_").concat(t, "_").concat(r) : "".concat(e, "_").concat(t)
            };

        function ir(e) {
            if ("[object Object]" !== Object.prototype.toString.call(e)) return e;
            var t = Object.keys(e).sort(),
                r = {};
            return t.forEach((function(t) {
                r[t] = ir(e[t])
            })), r
        }

        function or(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function ar(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? or(Object(r), !0).forEach((function(t) {
                    sr(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : or(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function sr(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function cr(e, t) {
            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = ur(e)) || t && e && "number" == typeof e.length) {
                    r && (e = r);
                    var n = 0,
                        i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0,
                s = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return a = e.done, e
                },
                e: function(e) {
                    s = !0, o = e
                },
                f: function() {
                    try {
                        a || null == r.return || r.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function ur(e, t) {
            if (e) {
                if ("string" == typeof e) return lr(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? lr(e, t) : void 0
            }
        }

        function lr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n
        }

        function dr(e, t, r, n, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function fr(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(n, i) {
                    var o = e.apply(t, r);

                    function a(e) {
                        dr(o, n, i, a, s, "next", e)
                    }

                    function s(e) {
                        dr(o, n, i, a, s, "throw", e)
                    }
                    a(void 0)
                }))
            }
        }
        var pr = Ee().hybrid.isHybrid,
            hr = function() {
                var e = fr(regeneratorRuntime.mark((function e(t, r) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Zt.fetch(t, r));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }();
        hr = hr.bind(window);
        var gr, wr = pr ? hr : window.fetch,
            br = function() {
                var e = fr(regeneratorRuntime.mark((function e(t) {
                    var r, n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!t._skipCheckStatus) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 2:
                                if (!((i = t.status) >= 200 && i < 300 || 401 === i)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 4:
                                return e.prev = 4, e.next = 7, t.json();
                            case 7:
                                throw r = e.sent, (n = new Error(t.statusText || t.status)).errorMsg = r, n;
                            case 13:
                                throw e.prev = 13, e.t0 = e.catch(4), e.t0.code = t.status, e.t0.name = t.status, e.t0;
                            case 18:
                            case "end":
                                return e.stop()
                        }
                        var i
                    }), e, null, [
                        [4, 13]
                    ])
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            vr = function(e) {
                var t, r, n = $t.baseUrl,
                    i = $t.accelerate,
                    o = i.checkAccelerable,
                    a = i.enbleSites;
                return "string" == typeof(t = window._ACCELERATE_ORIGIN || i.defaultOrigin) && (t = (r = t) ? /^https?:/.test(r) ? r : "https://".concat(r) : r), a && Array.isArray(a) && !~a.indexOf(window.location.hostname) && (t = ""), /^(https?:)?\/\//.test(e) ? e : !pr && t && "string" == typeof t && /^(https?:)?\/\//.test(t) && o && o(e) ? "".concat(t).concat(e) : n ? "".concat(n).concat(e) : pr ? "".concat(window.location.origin).concat(e) : "".concat(e)
            },
            mr = {},
            yr = function() {
                var e = fr(regeneratorRuntime.mark((function e(t, r, n) {
                    var i, o, a, s, c, u, l, d, f, p, h, g, w, b, v, m, y, x, _, T, S, E, O, k, A, C, B, P;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                o = $t.requestInterceptors, a = $t.responseInterceptors, s = $t.resultInterceptors, c = Date.now(), u = (r || {}).body, l = nr((null === (i = r) || void 0 === i ? void 0 : i.method) || "GET", t, u), e.prev = 4, t = vr(t), h = cr(o), e.prev = 7, h.s();
                            case 9:
                                if ((g = h.n()).done) {
                                    e.next = 20;
                                    break
                                }
                                return w = g.value, e.next = 14, w(t, r, n);
                            case 14:
                                b = e.sent, I = 2, v = function(e) {
                                    if (Array.isArray(e)) return e
                                }(R = b) || function(e, t) {
                                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != r) {
                                        var n, i, o = [],
                                            a = !0,
                                            s = !1;
                                        try {
                                            for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
                                        } catch (e) {
                                            s = !0, i = e
                                        } finally {
                                            try {
                                                a || null == r.return || r.return()
                                            } finally {
                                                if (s) throw i
                                            }
                                        }
                                        return o
                                    }
                                }(R, I) || ur(R, I) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(), t = v[0], r = v[1];
                            case 18:
                                e.next = 9;
                                break;
                            case 20:
                                e.next = 25;
                                break;
                            case 22:
                                e.prev = 22, e.t0 = e.catch(7), h.e(e.t0);
                            case 25:
                                return e.prev = 25, h.f(), e.finish(25);
                            case 28:
                                return m = pr ? hr : window.fetch, e.next = 31, m(t, r, !0);
                            case 31:
                                d = e.sent, y = cr(a), e.prev = 33, y.s();
                            case 35:
                                if ((x = y.n()).done) {
                                    e.next = 42;
                                    break
                                }
                                return _ = x.value, e.next = 39, _(d, n, r);
                            case 39:
                                d = e.sent;
                            case 40:
                                e.next = 35;
                                break;
                            case 42:
                                e.next = 47;
                                break;
                            case 44:
                                e.prev = 44, e.t1 = e.catch(33), y.e(e.t1);
                            case 47:
                                return e.prev = 47, y.f(), e.finish(47);
                            case 50:
                                return T = Date.now(), f = T - c, e.next = 54, br(d);
                            case 54:
                                (E = d._bodyBlob) && (S = E.type);
                                try {
                                    (A = null === (O = d) || void 0 === O || null === (k = O.headers) || void 0 === k ? void 0 : k.get("content-type")) && (S = A)
                                } catch (e) {}
                                if (!S || !["application/vnd.ms-excel", "application/vnd.ms-pdf", "application/pdf", "application/octet-stream"].some((function(e) {
                                        return "".concat(S).includes(e)
                                    }))) {
                                    e.next = 59;
                                    break
                                }
                                return e.abrupt("return", d.blob());
                            case 59:
                                return e.next = 61, d.json();
                            case 61:
                                p = e.sent, pr || Ze({
                                    opts: r,
                                    url: t,
                                    res: d,
                                    duration: f,
                                    result: p
                                }), C = cr(s), e.prev = 64, C.s();
                            case 66:
                                if ((B = C.n()).done) {
                                    e.next = 73;
                                    break
                                }
                                return P = B.value, e.next = 70, P(p, {
                                    url: t
                                });
                            case 70:
                                p = e.sent;
                            case 71:
                                e.next = 66;
                                break;
                            case 73:
                                e.next = 78;
                                break;
                            case 75:
                                e.prev = 75, e.t2 = e.catch(64), C.e(e.t2);
                            case 78:
                                return e.prev = 78, C.f(), e.finish(78);
                            case 81:
                                return e.abrupt("return", p);
                            case 84:
                                throw e.prev = 84, e.t3 = e.catch(4), mr[l] && (delete mr[l], console.warn("prefetch ".concat(l, " error"))), !pr && e.t3 && "TypeError" === e.t3.name && st(), pr || Ze({
                                    opts: r,
                                    url: t,
                                    res: d,
                                    duration: f,
                                    result: p,
                                    net_err_exist: !0
                                }), console.warn(e.t3), e.t3;
                            case 91:
                            case "end":
                                return e.stop()
                        }
                        var R, I
                    }), e, null, [
                        [4, 84],
                        [7, 22, 25, 28],
                        [33, 44, 47, 50],
                        [64, 75, 78, 81]
                    ])
                })));
                return function(t, r, n) {
                    return e.apply(this, arguments)
                }
            }(),
            xr = function() {
                var e = fr(regeneratorRuntime.mark((function e(t, r) {
                    var n, i, o, a, s;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = nr("GET", t), !mr[n]) {
                                    e.next = 5;
                                    break
                                }
                                return i = mr[n], delete mr[n], e.abrupt("return", i);
                            case 5:
                                return r = r || {}, o = Re(), e.next = 9, We(o, qe(r));
                            case 9:
                                return a = e.sent, s = a.opts, e.abrupt("return", yr(t, s, r));
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            _r = function() {
                var e = fr(regeneratorRuntime.mark((function e(t, r) {
                    var n, i, o, a, s, c, u = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = u.length > 2 && void 0 !== u[2] ? u[2] : {}, i = nr("POST", t, JSON.stringify(ir(r))), !mr[i]) {
                                    e.next = 6;
                                    break
                                }
                                return o = mr[i], delete mr[i], e.abrupt("return", o);
                            case 6:
                                return a = Re(), e.next = 9, We(a, qe(n));
                            case 9:
                                return s = e.sent, c = s.opts, c = Object.assign(c, {
                                    method: "POST",
                                    body: JSON.stringify(r)
                                }), e.abrupt("return", yr(t, c, n));
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            Tr = function() {
                var e = fr(regeneratorRuntime.mark((function e(t, r) {
                    var n, i, o, a, s = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = s.length > 2 && void 0 !== s[2] ? s[2] : {}, i = Re(), e.next = 4, We(i, qe(n));
                            case 4:
                                return o = e.sent, a = o.opts, a = Object.assign(a, {
                                    method: "PUT",
                                    body: JSON.stringify(r)
                                }), e.abrupt("return", yr(t, a, n));
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            Sr = function() {
                var e = fr(regeneratorRuntime.mark((function e(t, r) {
                    var n, i, o, a, s = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = s.length > 2 && void 0 !== s[2] ? s[2] : {}, i = Re(), e.next = 4, We(i, qe(n));
                            case 4:
                                return o = e.sent, a = o.opts, a = Object.assign(a, {
                                    method: "DELETE",
                                    body: JSON.stringify(r)
                                }), e.abrupt("return", yr(t, a, n));
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            Er = function() {
                var e = fr(regeneratorRuntime.mark((function e(t, r) {
                    var n, i, o, a, s, c = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = c.length > 2 && void 0 !== c[2] ? c[2] : {}, o = Re(), e.next = 4, We(o, qe(i));
                            case 4:
                                return a = e.sent, s = a.opts, null != i && null !== (n = i.headers) && void 0 !== n && n["Content-Type"] || delete s.headers["Content-Type"], s = Object.assign(s, {
                                    method: "POST",
                                    body: r
                                }), e.abrupt("return", yr(t, s, i));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            Or = function() {
                var e = fr(regeneratorRuntime.mark((function e(t, r) {
                    var n, i, o, a, s;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                e.next = 2;
                                break;
                            case 2:
                                if (!mr[t]) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                if (i = (n = r || {}).method, o = void 0 === i ? "GET" : i, a = n.body, "GET" === o || "POST" === o) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return");
                            case 7:
                                return s = nr(o, t, "GET" === o ? "" : JSON.stringify(ir(a))), mr[s] = "GET" === o ? xr(t, r) : _r(t, a, r), e.abrupt("return", mr[s]);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            kr = function(e) {
                var t = e.accelerateConfig,
                    r = e.baseUrl,
                    n = function(e) {
                        var t, r, n = {};
                        return e.__ACCELERATE_ENABLED__ && (n = {
                            defaultOrigin: e.__ACCELERATE_DEFAULT_DOMAIN__,
                            origins: null === (t = e.__ACCELERATE_AVAILABLE_DOMAIN__) || void 0 === t ? void 0 : t.split(",").map((function(e) {
                                return e.trim()
                            })),
                            enbleSites: null === (r = e.__ACCELERATE_ENBLED_SITES__) || void 0 === r ? void 0 : r.split(",").map((function(e) {
                                return e.trim()
                            })),
                            checkAccelerable: function(e) {
                                var t = e.split("?")[0];
                                return !t.includes("/private/") && !t.includes("/protected/")
                            }
                        }), n
                    }(t);
                rr(ar({
                    baseUrl: r
                }, n || {}));
                for (var i = window._bn_http_prefetch || [], o = 0; o < i.length; o++) try {
                    var a = i[o],
                        s = a.url,
                        c = a.options;
                    Or(s, ar({}, c))
                } catch (e) {
                    console.error("prefetch error", e)
                }
                window._bn_http_prefetch = [], window._bn_http_prefetch.push = function(e) {
                    var t = e.url,
                        r = e.options;
                    return Or(t, r)
                }
            };

        function Ar(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function Cr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ar(Object(r), !0).forEach((function(t) {
                    Br(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ar(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function Br(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function Pr(e, t, r, n, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function Rr(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(n, i) {
                    var o = e.apply(t, r);

                    function a(e) {
                        Pr(o, n, i, a, s, "next", e)
                    }

                    function s(e) {
                        Pr(o, n, i, a, s, "throw", e)
                    }
                    a(void 0)
                }))
            }
        }(gr = window._bn_http_init) && gr[0] ? kr(gr[0]) : (window._bn_http_init = window._bn_http_init || [], window._bn_http_init.push = function(e) {
            return kr(e)
        });
        var Ir = function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "POST").toUpperCase();
                return "POST" === e || "PUT" === e ? e : "POST"
            },
            Nr = $e().fetch,
            Mr = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = document.createElement("input");
                return r.type = "file", r.hidden = !0, r.accept = t, document.body.appendChild(r), r.addEventListener("change", (function(t) {
                    e(t), document.body.removeChild(r)
                })), r
            },
            Dr = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return "undefined" == typeof Headers ? {} : (e = new Headers, Object.entries(e).forEach((function(t) {
                    return e.append(t[0], t[1])
                })), e)
            },
            Lr = function() {
                var e = Rr(regeneratorRuntime.mark((function e(t, r, n) {
                    var i, o, a, s, c, u, l, d, f, p, h, g, w;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = n.options || {}, a = Dr(o.headers), n.onlyFile ? i = t : ((i = new FormData).append(n.name, t), r && Object.entries(r).map((function(e) {
                                    return i.append(e[0], e[1])
                                }))), e.next = 5, Nr(n.action, Cr(Cr({}, o), {}, {
                                    method: Ir(n.method),
                                    headers: a,
                                    body: i
                                }));
                            case 5:
                                if (!((s = e.sent) && s.body && s.headers && ReadableStream && n.onProgress)) {
                                    e.next = 19;
                                    break
                                }
                                return c = s.body.getReader(), u = +(s.headers.get("Content-Length") || 0), l = 0, d = [], f = function() {
                                    var e = Rr(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, c.read();
                                                case 2:
                                                    if ((t = e.sent).done) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return d.push(t.value), l += t.value.length, n.onProgress(l / u * 100), e.next = 9, f();
                                                case 9:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(), e.next = 14, f();
                            case 14:
                                return p = new Uint8Array(l), h = 0, d.forEach((function(e) {
                                    p.set(e, h), h += e.length
                                })), g = new TextDecoder("utf-8").decode(p), e.abrupt("return", JSON.parse(g));
                            case 19:
                                if (!s.ok) {
                                    e.next = 30;
                                    break
                                }
                                return w = {
                                    message: "upload success"
                                }, e.prev = 21, e.next = 24, s.json();
                            case 24:
                                w = e.sent, e.next = 29;
                                break;
                            case 27:
                                e.prev = 27, e.t0 = e.catch(21);
                            case 29:
                                return e.abrupt("return", w);
                            case 30:
                                throw new Error(s.statusText);
                            case 31:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [21, 27]
                    ])
                })));
                return function(t, r, n) {
                    return e.apply(this, arguments)
                }
            }();

        function jr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function Ur(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? jr(Object(r), !0).forEach((function(t) {
                    Fr(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function Fr(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function Gr(e, t, r, n, i, o, a) {
            try {
                var s = e[o](a),
                    c = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }

        function Vr(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(n, i) {
                    var o = e.apply(t, r);

                    function a(e) {
                        Gr(o, n, i, a, s, "next", e)
                    }

                    function s(e) {
                        Gr(o, n, i, a, s, "throw", e)
                    }
                    a(void 0)
                }))
            }
        }
        var Hr = {
                disabled: !1,
                name: "file",
                autoUpload: !0,
                method: "POST"
            },
            zr = function() {
                var e = Vr(regeneratorRuntime.mark((function e(t, r) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = Ur(Ur({}, Hr), r), e.prev = 1, r.fileSelected && r.fileSelected(t), n = function() {
                                        var e = Vr(regeneratorRuntime.mark((function e() {
                                            var n, i, o;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (e.prev = 0, n = Ur({}, r), !r.beforeUpload) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return e.next = 5, r.beforeUpload(t);
                                                    case 5:
                                                        i = e.sent, Object.assign(n, i);
                                                    case 7:
                                                        return e.next = 9, Lr(n.file || t, n.data, n);
                                                    case 9:
                                                        o = e.sent, n.onSuccess && n.onSuccess(o), e.next = 16;
                                                        break;
                                                    case 13:
                                                        e.prev = 13, e.t0 = e.catch(0), r.onError && r.onError(e.t0);
                                                    case 16:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 13]
                                            ])
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), r.onSend && r.onSend(n), !1 === r.autoUpload) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 8, n();
                            case 8:
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1), r.onError && r.onError(e.t0);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }();

        function Wr(e) {
            Mr((function(t) {
                return zr(t.target.files[0], e)
            }), e.accept).click()
        }

        function qr() {
            return !0
        }
        var Xr = Ve,
            Kr = function() {
                return wr.apply(s, arguments)
            },
            Zr = function() {
                return xr.apply(s, arguments)
            },
            Jr = function() {
                return _r.apply(s, arguments)
            },
            $r = function() {
                return Tr.apply(s, arguments)
            },
            Yr = function() {
                return Sr.apply(s, arguments)
            },
            Qr = function() {
                return Er.apply(s, arguments)
            },
            en = function() {
                return $e.apply(s, arguments)
            },
            tn = !1,
            rn = function() {
                tn && console.error("[http] initConfig should only be called once."), tn = !0;
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n = (null == t ? void 0 : t[0]) || {},
                    i = n.requestInterceptor,
                    o = n.responseInterceptor,
                    a = n.resultInterceptor;
                return i && Yt(i), o && Qt(o), a && er(a), {}
            },
            nn = function() {},
            on = void 0,
            an = function() {},
            sn = function() {
                return ""
            },
            cn = !1,
            un = function() {},
            ln = function() {
                return Wr.apply(s, arguments)
            },
            dn = function() {
                return zr.apply(s, arguments)
            },
            fn = function(e) {
                function t() {
                    this.message = e
                }
                return t.prototype = new Error, t.prototype.name = "InvalidCharacterError", t.prototype.code = 5, t
            },
            pn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            hn = fn("The string to be encoded contains characters out of range"),
            gn = "undefined" != typeof btoa ? function(e) {
                return btoa(e)
            } : function(e) {
                for (var t, r, n = String(e), i = "", o = 0, a = pn; n.charAt(0 | o) || (a = "=", o % 1); i += a.charAt(63 & t >> 8 - o % 1 * 8)) {
                    if ((r = n.charCodeAt(o += 3 / 4)) > 255) throw new hn;
                    t = t << 8 | r
                }
                return i
            };
        const wn = function(e) {
                return gn(function(e) {
                    return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
                        return String.fromCharCode("0x" + t)
                    }))
                }(e))
            },
            bn = function(e) {
                return wn(e).replace(/\+/g, "-").replace(/\//g, "_")
            };
        var vn = fn("The string to be decoded is not correctly encoded"),
            mn = "undefined" != typeof atob ? function(e) {
                return atob(e)
            } : function(e) {
                var t = String(e).replace(/[=]+$/, "");
                if (t.length % 4 == 1) throw new vn;
                for (var r, n, i = "", o = 0, a = 0; n = t.charAt(a++); ~n && (r = o % 4 ? 64 * r + n : n, o++ % 4) ? i += String.fromCharCode(255 & r >> (-2 * o & 6)) : 0) n = pn.indexOf(n);
                return i
            };
        const yn = function(e) {
                return function(e) {
                    return decodeURIComponent(e.split("").map((function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    })).join(""))
                }(mn(e))
            },
            xn = function(e) {
                return yn(e.replace(/-/g, "+").replace(/_/g, "/"))
            };
        var _n = ".";

        function Tn() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                r = (e = window.location.hostname).split(".");
            return r.length > 2 ? r.slice(-t).join(_n) : e
        }
        window.uuid = i, window.b2aSDK = u, window.MD5 = Q();
        var Sn = /^\/([^/]*)/;

        function En(e) {
            try {
                var t, r, n, i, o = null === (t = document) || void 0 === t || null === (r = t.documentElement) || void 0 === r || null === (n = r.getAttribute) || void 0 === n ? void 0 : n.call(r, "path-prefix");
                if (o) return o;
                var a = null === (i = document.getElementById("__APP_DATA")) || void 0 === i ? void 0 : i.textContent;
                if (a) {
                    var s = JSON.parse(a);
                    if (s && "string" == typeof s.basename) return s.basename || "/"
                }
            } catch (e) {
                console.warn("[@binance/essential] getPathPrefix", e)
            }
            throw new Error("[@binance/essential] path-prefix is undefined on client side.")
        }
        var On = "language";

        function kn(e) {
            var t;
            Pe("lang", e, 365, !0, "High"), Pe(On, e, 180, !1);
            var r = new URL(window.location.href);
            (null === (t = r.pathname.match(Sn)) || void 0 === t ? void 0 : t[1]) === En().replace(/\//g, "") && (r.pathname = r.pathname.replace(Sn, "")), r.searchParams.delete("hl"), window.location.href = r.href
        }
        var An = {
                a: {
                    a: {
                        o: {
                            "-": !0
                        }
                    },
                    b: {
                        h: {
                            "-": !0
                        },
                        v: {
                            "-": !0
                        }
                    },
                    c: {
                        m: {
                            "-": !0
                        },
                        q: {
                            "-": !0
                        },
                        w: {
                            "-": !0
                        },
                        x: {
                            "-": !0
                        },
                        y: {
                            "-": !0
                        }
                    },
                    d: {
                        f: {
                            "-": !0
                        },
                        s: {
                            "-": !0
                        }
                    },
                    e: {
                        b: {
                            "-": !0
                        },
                        c: {
                            "-": !0
                        }
                    },
                    f: {
                        b: {
                            "-": !0
                        }
                    },
                    j: {
                        p: {
                            "-": !0
                        }
                    },
                    p: {
                        c: {
                            "-": !0
                        },
                        d: {
                            "-": !0
                        }
                    },
                    r: {
                        "-": !0,
                        b: {
                            "-": !0
                        },
                        q: {
                            "-": !0
                        },
                        s: {
                            "-": !0
                        },
                        y: {
                            "-": !0
                        },
                        z: {
                            "-": !0
                        }
                    },
                    u: {
                        z: {
                            "-": !0
                        }
                    },
                    v: {
                        l: {
                            "-": !0
                        }
                    },
                    y: {
                        h: {
                            "-": !0
                        },
                        l: {
                            "-": !0
                        },
                        n: {
                            "-": !0
                        },
                        p: {
                            "-": !0
                        }
                    }
                },
                b: {
                    b: {
                        z: {
                            "-": !0
                        }
                    }
                },
                d: {
                    v: {
                        "-": !0
                    }
                },
                f: {
                    a: {
                        "-": !0
                    }
                },
                h: {
                    b: {
                        o: {
                            "-": !0
                        }
                    },
                    e: {
                        "-": !0
                    }
                },
                i: {
                    w: {
                        "-": !0
                    }
                },
                j: {
                    i: {
                        "-": !0
                    },
                    p: {
                        r: {
                            "-": !0
                        }
                    }
                },
                m: {
                    e: {
                        n: {
                            "-": !0
                        }
                    }
                },
                p: {
                    b: {
                        t: {
                            "-": !0
                        },
                        u: {
                            "-": !0
                        }
                    },
                    e: {
                        o: {
                            "-": !0
                        },
                        s: {
                            "-": !0
                        }
                    },
                    g: {
                        a: {
                            "-": !0
                        }
                    },
                    r: {
                        d: {
                            "-": !0
                        },
                        p: {
                            "-": !0
                        },
                        s: {
                            "-": !0
                        }
                    },
                    s: {
                        "-": !0,
                        t: {
                            "-": !0
                        }
                    }
                },
                s: {
                    a: {
                        m: {
                            "-": !0
                        }
                    },
                    h: {
                        u: {
                            "-": !0
                        }
                    },
                    q: {
                        r: {
                            "-": !0
                        }
                    },
                    s: {
                        h: {
                            "-": !0
                        }
                    }
                },
                u: {
                    g: {
                        "-": !0
                    },
                    r: {
                        "-": !0
                    }
                },
                x: {
                    a: {
                        a: {
                            "-": !0
                        }
                    },
                    m: {
                        n: {
                            "-": !0
                        }
                    }
                },
                y: {
                    d: {
                        d: {
                            "-": !0
                        },
                        s: {
                            "-": !0
                        }
                    },
                    h: {
                        d: {
                            "-": !0
                        }
                    },
                    i: {
                        "-": !0,
                        h: {
                            "-": !0
                        }
                    },
                    u: {
                        d: {
                            "-": !0
                        }
                    }
                }
            },
            Cn = function(e) {
                if ("string" != typeof e) return "ltr";
                e += "-";
                for (var t = An, r = 0; r < e.length && (!0 !== (t = t[e.charAt(r)]) && void 0 !== t); r++);
                return !0 === t ? "rtl" : "ltr"
            };

        function Bn(e) {
            throw new Error("[@binance/essential] getIsRegionMode is not supported in browser")
        }
        var Pn = ["utm_content", "utm_medium", "utm_source", "utm_campaign"],
            Rn = {
                utm_content: "bu_c",
                utm_medium: "bu_m",
                utm_source: "bu_s",
                utm_campaign: "bu_a"
            },
            In = {
                write: function(e, t) {
                    try {
                        Pe(Rn[e], t, NaN, !0)
                    } catch (e) {
                        console.error("[@binance/essential] _utmCookieHelper.write error", e)
                    }
                },
                erase: function(e) {
                    try {
                        Pe(Rn[e], "", -1, !0)
                    } catch (e) {
                        console.error("[@binance/essential] _utmCookieHelper.erase error", e)
                    }
                },
                read: function(e) {
                    var t = null;
                    try {
                        t = Be(Rn[e])
                    } catch (e) {
                        console.error("[@binance/essential] _utmCookieHelper.read error", e)
                    }
                    return t
                }
            };

        function Nn() {
            var e = {};
            try {
                if (e = Dn(), Object.keys(e).length > 0) return Mn(), e;
                Pn.forEach((function(t) {
                    var r = In.read(t);
                    r && (e[t] = r)
                }))
            } catch (t) {
                return console.error("[@binance/essential] getUTM error", t), e
            }
            return e
        }

        function Mn() {
            try {
                var e = Dn();
                Object.keys(e).length > 0 && Pn.forEach((function(t) {
                    var r = e[t];
                    r ? In.write(t, r) : In.erase(t)
                }))
            } catch (e) {
                console.error("[@binance/essential] writeUTMtoCookie error", e)
            }
        }

        function Dn() {
            var e = {},
                t = window.location.search,
                r = new URLSearchParams(t);
            return Pn.forEach((function(t) {
                var n = r.get(t);
                n && (e[t] = n)
            })), e
        }
        var Ln = ["light", "dark"],
            jn = ["light", "dark"],
            Un = "theme",
            Fn = "neo-theme";

        function Gn(e, t) {
            var r, n, i = ("string" == typeof e ? e : "").trim().toLocaleLowerCase(),
                o = (n = i.match(/^[^_\- ]+/)) ? n[0] : "",
                a = Ln.find((function(e) {
                    return e === o
                }));
            if (a) {
                var s = (t || (null === (r = globalThis._buu) || void 0 === r ? void 0 : r.subTheme) || []).map((function(e) {
                        return e.toLocaleLowerCase()
                    })),
                    c = jn.concat(s).find((function(e) {
                        return e === i
                    }));
                return c ? {
                    legacyTheme: a,
                    neoTheme: c
                } : {
                    legacyTheme: a,
                    neoTheme: a
                }
            }
        }

        function Vn(e) {
            var t;
            return !!(Array.isArray(e) || null !== (t = globalThis._buu) && void 0 !== t && t.subTheme)
        }

        function Hn(e) {
            var t, r, n, i = null == e ? void 0 : e.subTheme;
            return Vn(i) ? (null === (r = Gn((null === (n = globalThis._buu) || void 0 === n ? void 0 : n["neo-theme"]) || Be(Fn) || Be(Un), i)) || void 0 === r ? void 0 : r.neoTheme) || "dark" : (null === (t = Gn(Be(Un), i)) || void 0 === t ? void 0 : t.legacyTheme) || "dark"
        }

        function zn(e, t) {
            var r = Gn(e, t);
            if (r) {
                var n = r.legacyTheme,
                    i = r.neoTheme;
                return Pe(Un, n, 365, !0, "High"), Pe(Fn, i, 365, !0, "High"), Vn(t) ? i : n
            }
            console.warn("[@binance/essential] setTheme: ".concat(e, " is not a valid theme"))
        }
        window.httpSDK || (window.httpSDK = c), window.regeneratorRuntime = h
    })(), n
})()));