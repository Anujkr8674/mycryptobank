"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ffd12c0f-5421-56f3-b5ca-8abdd9693cc2")
    } catch (e) {}
}();
(self.webpackChunkfaq_anns_ui = self.webpackChunkfaq_anns_ui || []).push([
    [573], {
        serT: (t, e, n) => {
            n.d(e, {
                default: () => $
            });
            var i = n("TrCV"),
                a = n("DTvD"),
                o = n.n(a),
                r = n("AXwM"),
                s = n("oVQP"),
                c = n("MEAY"),
                l = n("wIZF"),
                d = n("WbGo");
            const h = (0, a.createContext)({
                colors: {},
                mode: "light"
            });
            var u = n("qrIQ"),
                p = n("hyZw"),
                f = n("OKx2"),
                m = n("O94r"),
                g = n.n(m),
                C = n("eeEA"),
                v = n("fvKX"),
                b = {
                    fresh: "",
                    traditional: "traditional"
                };
            const y = function(t) {
                var e = t.scope,
                    n = t.isCVD,
                    i = t.isReverse,
                    r = t.themeColors,
                    s = t.colorMode,
                    c = void 0 === s ? "fresh" : s,
                    m = t.mode,
                    y = void 0 === m ? "light" : m,
                    x = t.themeExtraColors,
                    w = void 0 === x ? {} : x,
                    _ = (0, v.r)().isMobile,
                    k = (0, a.useMemo)((function() {
                        var t = [n ? "cvd" : b[c] || "", i ? "reverse" : ""].filter(Boolean),
                            e = (0, l.__assign)({}, r),
                            a = w[t.join("-")] || {};
                        _ && ((null === r || void 0 === r ? void 0 : r.mobile) && (e = (0, l.__assign)((0, l.__assign)({}, e), e.mobile)), (null === a || void 0 === a ? void 0 : a.mobile) && (a = (0, l.__assign)((0, l.__assign)({}, a), a.mobile)));
                        var o = (0, l.__assign)((0, l.__assign)({}, e), a);
                        delete o.mobile;
                        var s;
                        return s = Object.keys(o).reduce((function(t, e) {
                            var n;
                            return (0, l.__assign)((0, l.__assign)({}, t), ((n = {})["--color-".concat(e)] = o[e], n))
                        }), {}), {
                            colors: o,
                            styles: s
                        }
                    }), [n, i, r, w, _, c]),
                    E = k.colors,
                    S = k.styles,
                    H = g()("theme-root", y, t.className);
                return (0, d.op)((function() {
                    var t;
                    return u.lq || e || !document.body ? p.es : ((0, f.Dq)(document.body, S, !0), (t = document.body.classList).add.apply(t, H.split(" ")), function() {
                        var t;
                        (null === document || void 0 === document ? void 0 : document.body) && ((0, f.Dq)(document.body, S, !1), (t = document.body.classList).remove.apply(t, H.split(" ")))
                    })
                }), [H, e, S]), o().createElement(h.Provider, {
                    value: {
                        isCVD: n,
                        isReverse: i,
                        mode: y,
                        colors: E
                    }
                }, u.lq || e ? o().createElement(C.Ay, {
                    className: H,
                    style: S,
                    children: t.children
                }) : t.children)
            };
            var x = n("jSBn");
            const w = function(t) {
                var e = t.pathPrefix,
                    n = t.isRegionMode,
                    i = t.level2Domain,
                    a = t.lang,
                    r = t.prefixCls,
                    s = t.isRTL,
                    c = t.iconConfig,
                    d = t.children,
                    h = t.isElectron,
                    u = t.isMobile,
                    p = (0, l.__rest)(t, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    f = {
                        prefixCls: r,
                        isRTL: s,
                        iconConfig: c,
                        isElectron: h,
                        isMobile: u
                    },
                    m = {
                        pathPrefix: e,
                        isRegionMode: n,
                        level2Domain: i,
                        lang: a
                    },
                    g = Object.values(m).some((function(t) {
                        return "undefined" !== typeof t
                    })),
                    C = o().createElement(v.A, (0, l.__assign)({}, f), o().createElement(y, (0, l.__assign)({}, p), d));
                return g ? o().createElement(x.A, (0, l.__assign)({}, m), C) : C
            };
            var _ = n("OaXm"),
                k = n("oCr4"),
                E = n("tKUM"),
                S = n("sViW"),
                H = n("888e"),
                V = n("nG1z"),
                L = n("BK7R"),
                I = n("tEf9"),
                M = n("Pz56"),
                P = n.n(M),
                T = n("C8Ti"),
                U = n("VA12");
            const j = function() {
                var t = localStorage.getItem("deviceId");
                if (t) return t;
                var e = function() {
                    for (var t = [], e = "0123456789abcdef", n = 0; n < 36; n++) t[n] = e.substr(Math.floor(16 * Math.random()), 1);
                    return t[14] = "4", t[19] = e.substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-", t.join("")
                }();
                return localStorage.setItem("deviceId", e), e
            };
            var A = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        (0, T.Ay)("webClick", (0, L.A)({}, t), (0, L.A)({}, e))
                    } catch (n) {}
                },
                D = function() {
                    function t(e) {
                        var n = e.cdnHost,
                            i = void 0 === n ? "" : n,
                            a = e.isChatEnable,
                            o = void 0 === a || a,
                            r = e.isChatVisible,
                            s = void 0 === r || r,
                            c = e.isChatPopUp,
                            l = void 0 !== c && c,
                            d = e.onChatLoadedCallbackFunction,
                            h = void 0 === d ? function() {} : d,
                            u = e.apiHost,
                            p = void 0 === u ? "" : u,
                            f = e.entryChatData,
                            m = void 0 === f ? {} : f,
                            g = e.onClick,
                            C = e.sourceEntry,
                            v = e.isSenseiMode,
                            b = void 0 !== v && v,
                            y = e.isSearchPlugin,
                            x = void 0 !== y && y,
                            w = e.searchPluginContainer,
                            _ = void 0 === w ? null : w;
                        (0, H.A)(this, t), this._cdnHost = i, this._isChatEnable = o, this._isChatVisible = s, this._isChatPopUp = l, this.entryChatData = m, this._scriptNode = null, this.onChatLoadedCallbackFunction = h, this._events = {}, this._hasVipGroup = !1, this._isVip = !1, this.apiHost = p, this.onClick = g, this._sourceEntry = C, this._isSenseiMode = b, this._chatScriptUrl = "", this._preChatContainerElement = null, this.isSearchPlugin = x, this.searchPluginContainer = _
                    }
                    var e = t.prototype;
                    return e.on = function(t, e) {
                        this._events[t] || (this._events[t] = []), this._events[t].push(e)
                    }, e.once = function(t, e) {
                        var n = this,
                            i = function() {
                                e(), n.off(t, i)
                            };
                        this.on(t, i)
                    }, e.off = function(t, e) {
                        this._events[t] = e ? this._events[t].filter((function(t) {
                            return t !== e
                        })) : []
                    }, e.emit = function(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                        if (this._events[t]) {
                            var a, o = this;
                            this._events[t].forEach((function(t) {
                                return (a = t).call.apply(a, [o].concat((0, I.A)(n)))
                            }))
                        }
                    }, e.changeChatVisibilityStatus = function(t) {
                        this._isChatVisible = t, this.emit("onChatVisibilityStatusChanged", this._isChatVisible), this.scriptNode || (t ? this.initChatEntry() : this.hideChatEntry())
                    }, e.changeChatPopUpStatus = function(t) {
                        this._isChatPopUp = t, this.emit("onChatPopUpStatusChanged", this._isChatPopUp), t && (localStorage.setItem("chatButtonVisible", "false"), this.scriptNode || this.addScript())
                    }, e.entryChat = function(t) {
                        var e = t.step,
                            n = void 0 === e ? 2 : e,
                            i = t.question,
                            a = void 0 === i ? "" : i,
                            o = t.extraInfo;
                        if (this.entryChatData = {
                                step: n,
                                question: a,
                                extraInfo: o
                            }, 1 === n) {
                            var r = document.getElementById("pre-chat-container");
                            this.drawToolTip(r, this.langData.api_tooltip), A({
                                pageName: "binance_support_chat",
                                elementId: "chat_bubble_entry_tooltip_shown_times",
                                extraInfo: {
                                    url: window.location.href
                                }
                            })
                        }
                        2 === n && (this.changeChatPopUpStatus(!0), this.emit("onEntryChat", this.entryChatData))
                    }, e.checkScriptByUrl = function(t) {
                        return Array.prototype.some.call(document.querySelectorAll("script"), (function(e) {
                            return e.src === t
                        }))
                    }, e.preloadingJsUrl = function() {
                        var t = this;
                        return (0, S.A)(P().mark((function e() {
                            var n;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, t._chatScriptUrl) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 4, t.getChatScriptUrl();
                                    case 4:
                                        "string" === typeof(n = e.sent) && (t._chatScriptUrl = n);
                                    case 6:
                                        e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })))()
                    }, e.getChatScriptUrl = function() {
                        var t = this;
                        return (0, S.A)(P().mark((function e() {
                            var n, i, a, o, r, s, c, l;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = "", t._chatScriptUrl) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.next = 5, (0, U.get)("/bapi/haodesk/v3/friendly/haodesk/std/base-info");
                                    case 5:
                                        return a = e.sent, o = a && a.success && (null === (i = a.data) || void 0 === i ? void 0 : i.login) ? "".concat(t.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/common/config/js?pathName=").concat(encodeURIComponent(window.location.pathname), "&h=").concat(encodeURIComponent(window.location.hostname)) : "".concat(t.apiHost, "/bapi/haodesk/v3/public/haodesk/std/common/config/js?pathName=").concat(encodeURIComponent(window.location.pathname), "&h=").concat(encodeURIComponent(window.location.hostname)), e.next = 10, (0, U.get)(o);
                                    case 10:
                                        if (r = e.sent, s = r.success, c = r.data, s) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 15:
                                        l = /.*binancezh.*$/.test(window.location.hostname), n = l ? "".concat(t.cdnHost).concat(c.cn) : "".concat(t.cdnHost).concat(c.com), e.next = 20;
                                        break;
                                    case 19:
                                        n = t._chatScriptUrl;
                                    case 20:
                                        return e.abrupt("return", n);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }, e.displayLoadingIcon = function() {
                        if (this._preChatContainerElement) {
                            var t = this._preChatContainerElement.querySelector(".widget-chat-loading-icon-wrap"),
                                e = this._preChatContainerElement.querySelector(".chat-icon");
                            t && e && (t.style.display = "block", e.style.display = "none")
                        }
                    }, e.hideLoadingIcon = function() {
                        if (this._preChatContainerElement) {
                            var t = this._preChatContainerElement.querySelector(".widget-chat-loading-icon-wrap"),
                                e = this._preChatContainerElement.querySelector(".chat-icon");
                            t && e && (t.style.display = "none", e.style.display = "block")
                        }
                    }, e.addScript = function() {
                        var t = this;
                        return (0, S.A)(P().mark((function e() {
                            var n, i, a;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, n = "", t._chatScriptUrl) {
                                            e.next = 13;
                                            break
                                        }
                                        return t.displayLoadingIcon(), e.next = 6, t.getChatScriptUrl();
                                    case 6:
                                        if (i = e.sent, t.hideLoadingIcon(), i) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 10:
                                        n = i, e.next = 14;
                                        break;
                                    case 13:
                                        n = t._chatScriptUrl;
                                    case 14:
                                        if (!t.checkScriptByUrl(n)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 16:
                                        return (a = document.createElement("script")).setAttribute("async", "true"), a.src = n, a.onload = function() {
                                            t.removeChatEntry(), t.onChatLoadedCallbackFunction && t.onChatLoadedCallbackFunction(), t.emit("onChatLoaded"), "function" === typeof window.onload && window.onload(new Event("load"))
                                        }, t.scriptNode = a, document.body.appendChild(a), e.abrupt("return");
                                    case 25:
                                        e.prev = 25, e.t0 = e.catch(0), console.log(e.t0), t.hideLoadingIcon();
                                    case 29:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 25]
                            ])
                        })))()
                    }, e.removeCustomizedOnClick = function() {
                        this.onClick = null
                    }, e.removeChatEntry = function() {
                        var t, e = document.getElementById("pre-chat-container");
                        null === e || void 0 === e || null === (t = e.parentNode) || void 0 === t || t.removeChild(e), this._preChatContainerElement = null
                    }, e.hideChatEntry = function() {
                        var t = document.getElementById("pre-chat-container");
                        t && t.classList.remove("visible")
                    }, e.showChatEntry = function() {
                        var t = document.getElementById("pre-chat-container");
                        t && t.classList.add("visible")
                    }, e.drawChatEntry = function(t) {
                        var e = t.chatEntryTitle,
                            n = void 0 === e ? "Support" : e,
                            i = t.isVip,
                            a = void 0 !== i && i,
                            o = this,
                            r = document.getElementById("pre-chat-container");
                        if (r) return r;
                        var s = document.createElement("style");
                        s.innerHTML = "@keyframes widget-show-grow {0% {opacity: 0;}1% {opacity: 0;transform: scale(0.5);}100% {opacity: 1;transform: scale(1);}}.chat-container {position: fixed; right: 24px; bottom: 24px; cursor: pointer; opacity: 1; z-index: 998; border-radius: 16px; background: #FCD535; display: none; justify-content: center; align-items: center; padding:0px; min-width: 48px; height: 48px;} @media screen and (max-width: 767px) {.chat-container{right: 16px;bottom: 16px;border-radius: 14px; min-width: 40px; height: 40px}}.chat-container.visible {display: flex; animation: 0.5s ease 0s 1 normal backwards running widget-show-grow;}.chat-container.visible:hover {padding: 0 12px 0 8px;}.chat-container.visible:hover .chat-text {display: block;}.chat-container .chat-text {display: none; font-weight: 500; font-size: 16px; line-height: 24px; margin-left: 4px;color: #1E2329;}.chat-container .unread-message-alert { position: absolute;top: 5px;right: -8px; transform: translate(0px, -8px); color: #ffffff; background: #f6465d; border-radius: 16px; text-align: center; line-height: 16px; width: fit-content; min-width:8px; padding: 0px 4px; font-size: 16px; font-weight: 500;}.chat-container .tool-tip { position: absolute; width: 300px; right: 0; bottom: calc(100% + 9px); background: #fff; font-weight: 500; font-size: 16px; line-height: 24px; color: #474D57; border-radius: 4px; padding: 16px }.chat-container .tool-tip:after { content: ''; position: absolute; border: 8px solid transparent; border-top-color: #fff; bottom: -14px; right: 16px;}@keyframes widget-chat-loading-spin {\n        0%{-webkit-transform:rotate(0deg);}\n        25%{-webkit-transform:rotate(90deg);}\n        50%{-webkit-transform:rotate(180deg);}\n        75%{-webkit-transform:rotate(270deg);}\n        100%{-webkit-transform:rotate(360deg);}\n      }\n      .widget-chat-loading-icon {\n        display: inline-block; /* \u786e\u4fdd\u5143\u7d20\u662f\u884c\u5185\u5757\u5143\u7d20\uff0c\u8fd9\u6837 transform \u5c5e\u6027\u4f1a\u751f\u6548 */\n        animation: widget-chat-loading-spin 2s linear infinite; /* 2s\u662f\u65cb\u8f6c\u4e00\u5708\u7684\u65f6\u95f4\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8c03\u6574 */\n      }\n      ";
                        var c = document.createElement("div"),
                            l = this;
                        c.addEventListener("click", (0, S.A)(P().mark((function t() {
                            var e;
                            return P().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!l.onClick) {
                                            t.next = 4;
                                            break
                                        }
                                        l.onClick(), t.next = 9;
                                        break;
                                    case 4:
                                        return localStorage.setItem("chatButtonVisible", "false"), t.next = 8, l.addScript();
                                    case 8:
                                        null === (e = window.CHATWIDGET) || void 0 === e || e.changeChatPopUpStatus(!0);
                                    case 9:
                                        A({
                                            pageName: "binance_support_chat",
                                            elementId: "chat_bubble_in_web",
                                            extraInfo: {
                                                deviceId: j()
                                            }
                                        });
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))), c.id = "pre-chat-container", c.classList.add("chat-container"), c.classList.add("visible");
                        var d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        a ? (d.style.cssText = "width: 32px; height: 35px", d.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23868 12.7502H11.3363V19.8335H4.25298V15.618C4.25294 15.6065 4.25293 15.595 4.25293 15.5835C4.25293 8.54187 9.9613 2.8335 17.0029 2.8335C24.0446 2.8335 29.7529 8.54187 29.7529 15.5835L29.753 15.5835V19.8335H22.6696V12.7502H25.7671C24.5721 9.05089 21.0999 6.37518 17.0029 6.37518C12.9058 6.37518 9.43372 9.05089 8.23868 12.7502Z" fill="#181A20"/><path d="M21.9162 25.4389V26.5755H23.0528C23.3126 26.5755 23.4912 26.4375 23.4912 26.1615V25.8449C23.4912 25.577 23.3126 25.4389 23.0528 25.4389H21.9162Z" fill="#181A20"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.9163 22.6665H7.08301V31.1665H26.9163V22.6665ZM10.4958 29.7498H12.2088L14.0111 24.0832H12.5011L11.7136 26.7217L11.4132 28.2885H11.397L11.056 26.7217L10.2685 24.0832H8.70166L10.4958 29.7498ZM15.4779 29.7498H18.4249V28.5158H17.7349V25.3172H18.4249V24.0832H15.4779V25.3172H16.168V28.5158H15.4779V29.7498ZM21.9162 29.7498H20.3494V24.0832H23.2882C24.368 24.0832 25.0905 24.8869 25.0905 26.0072C25.0905 27.1195 24.368 27.9313 23.2882 27.9313H21.9162V29.7498Z" fill="#181A20"/>') : (d.style.cssText = "width: 28px; @media screen and (max-width: 767px) {width: 24px;}", d.setAttribute("viewBox", "0 0 28 29"), d.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5023 20.4105V14.5771C24.5023 14.2147 24.4839 13.8566 24.4481 13.5036C24.4449 13.4725 24.4416 13.4415 24.4382 13.4105C23.8579 8.16054 19.4069 4.07715 14.0023 4.07715C8.2033 4.07715 3.50229 8.77816 3.50229 14.5771V20.4105H9.33562V13.4105H6.50814C7.06932 9.77621 10.2109 6.99381 14.0023 6.99381C17.7937 6.99381 20.9353 9.77621 21.4964 13.4105H18.669V20.4105H19.7178C18.6728 21.4345 17.3539 22.1799 15.8812 22.5266C15.4563 21.9507 14.7729 21.5771 14.0023 21.5771C12.7136 21.5771 11.669 22.6218 11.669 23.9105C11.669 25.1991 12.7136 26.2438 14.0023 26.2438C14.9526 26.2438 15.7702 25.6757 16.134 24.8606C18.8766 24.295 21.2285 22.6599 22.7342 20.4105H24.5023Z" fill="#202630"/>'), d.classList.add("chat-icon"), c.appendChild(d);
                        var h = document.createElement("div");
                        h.style.cssText = "width: 32px; height: 32px;display:none;", h.innerHTML = '\n      <svg class="widget-chat-loading-icon"  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <g id="ic/loading-1c">\n      <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M14 29.1281V25.2891C12.8595 25.0447 11.7948 24.5956 10.8465 23.982L8.13198 26.6966C9.82568 27.9445 11.8265 28.7998 14 29.1281ZM5.30352 23.8682L8.01807 21.1536C7.40449 20.2053 6.95532 19.1406 6.71092 18H2.87183C3.2002 20.1736 4.05554 22.1744 5.30352 23.8682ZM2.87183 14H6.71092C6.95532 12.8593 7.40449 11.7947 8.01806 10.8463L5.30352 8.13177C4.05554 9.82551 3.2002 11.8263 2.87183 14ZM8.13197 5.30337L10.8465 8.01791C11.7948 7.40436 12.8595 6.95522 14 6.71082V2.87183C11.8265 3.20018 9.82568 4.05546 8.13197 5.30337ZM18 29.1281C20.1736 28.7997 22.1744 27.9444 23.8682 26.6964L21.1537 23.982C20.2054 24.5956 19.1407 25.0448 18 25.2892V29.1281ZM23.9821 21.1535L26.6966 23.868C27.9445 22.1743 28.7997 20.1735 29.1281 18H25.2892C25.0449 19.1406 24.5957 20.2052 23.9821 21.1535ZM25.2893 14H29.1281C28.7997 11.8264 27.9445 9.82568 26.6966 8.13199L23.9822 10.8464C24.5957 11.7947 25.0449 12.8594 25.2893 14ZM21.1537 8.01795L23.8682 5.30353C22.1744 4.05556 20.1736 3.20023 18 2.87184V6.71079C19.1407 6.95519 20.2054 7.40436 21.1537 8.01795Z" fill="#202630"/>\n      </g>\n      </svg>\n      ', h.classList.add("widget-chat-loading-icon-wrap"), c.appendChild(h);
                        var u = document.createElement("div");
                        return u.classList.add("chat-text"), u.innerHTML = n, c.appendChild(u), document.getElementsByTagName("head")[0].appendChild(s), document.body.appendChild(c), this._preChatContainerElement = c,
                            function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                try {
                                    (0, T.Ay)("elementShow", (0, L.A)({}, t), (0, L.A)({}, e))
                                } catch (n) {}
                            }({
                                pageName: "binance_support_chat",
                                elementId: "chat_bubble_in_web",
                                extraInfo: {
                                    deviceId: j()
                                }
                            }), (0, U.post)("".concat(this.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/has-unread"), {
                                token: localStorage.getItem("chatToken")
                            }).then((function(t) {
                                var e, n, i;
                                if (t.success && (!(null === (e = t.data) || void 0 === e ? void 0 : e.expire) && (null === (n = t.data) || void 0 === n ? void 0 : n.hasUnread) || (null === (i = t.data) || void 0 === i ? void 0 : i.hasGroupUnread))) {
                                    var a, r, s = ((null === (a = t.data) || void 0 === a ? void 0 : a.chatUnreadCount) || 0) + ((null === (r = t.data) || void 0 === r ? void 0 : r.groupUnreadCount) || 0);
                                    s > 0 && o.drawUnreadMessageAlert(c, s)
                                }
                            })).catch((function() {})), c
                    }, e.drawUnreadMessageAlert = function(t, e) {
                        var n = document.createElement("div");
                        n.classList.add("unread-message-alert");
                        var i = document.createTextNode("".concat(e > 999 ? "999+" : e));
                        n.appendChild(i), t.appendChild(n)
                    }, e.drawToolTip = function(t, e) {
                        var n = document.createElement("div");
                        n.classList.add("tool-tip");
                        var i = document.createTextNode(e);
                        n.appendChild(i), t.appendChild(n)
                    }, e.getLocaleFromUrl = function() {
                        return (0, E.getLanguage)() || "en"
                    }, e.getI18n = function() {
                        var t = this.getLocaleFromUrl();
                        return fetch("".concat(this.cdnHost, "/api/i18n/-/web/cms/").concat(t, "/binance-chat")).then((function(t) {
                            return t.json()
                        })).catch((function() {}))
                    }, e.initChatEntry = function() {
                        var t = this;
                        return (0, S.A)(P().mark((function e() {
                            var n, i, a, o, r, s, c, l, d, h, u, p, f, m, g, C;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!["academy.binance.com", "academy.binance.info", "academy.mokexweb.cloud", "academy.binance.me", "academy.binancezh.jp", "academy.binancezh.top"].includes(null === window || void 0 === window ? void 0 : window.location.hostname) && !t.isSenseiMode) {
                                            e.next = 4;
                                            break
                                        }
                                        return t.addScript(), e.abrupt("return");
                                    case 4:
                                        if (!document.getElementById("pre-chat-container")) {
                                            e.next = 8;
                                            break
                                        }
                                        return t.showChatEntry(), e.abrupt("return");
                                    case 8:
                                        return n = localStorage.getItem("chatToken"), i = !1, e.prev = 10, e.next = 13, (0, U.get)("".concat(t.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/visible2?deviceId=").concat(j()));
                                    case 13:
                                        if (!(a = e.sent).data || !a.success) {
                                            e.next = 21;
                                            break
                                        }
                                        if (o = a.data, r = o.visible, s = o.vip, c = o.hasGroup, i = !!s, t._isVip = i, t._hasVipGroup = !!c, r) {
                                            e.next = 21;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 21:
                                        e.next = 25;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e.catch(10);
                                    case 25:
                                        if (!(l = window.location.search)) {
                                            e.next = 35;
                                            break
                                        }
                                        if (d = new URLSearchParams(l), !d.get("service-group")) {
                                            e.next = 35;
                                            break
                                        }
                                        return null === (h = window.CHATWIDGET) || void 0 === h || h.changeChatPopUpStatus(!0), e.next = 34, t.addScript();
                                    case 34:
                                        return e.abrupt("return");
                                    case 35:
                                        if (!n) {
                                            e.next = 61;
                                            break
                                        }
                                        return e.next = 38, (0, U.post)("".concat(t.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/user-open-session"), {
                                            token: n
                                        });
                                    case 38:
                                        if (u = e.sent, p = u.success, f = u.data, !p || !f.sessionId || "false" !== localStorage.getItem("chatButtonVisible")) {
                                            e.next = 48;
                                            break
                                        }
                                        return null === (m = window.CHATWIDGET) || void 0 === m || m.changeChatPopUpStatus(!0), e.next = 46, t.addScript();
                                    case 46:
                                        e.next = 59;
                                        break;
                                    case 48:
                                        return e.prev = 48, e.next = 51, t.getI18n();
                                    case 51:
                                        g = e.sent, t.langData = g, t.drawChatEntry({
                                            chatEntryTitle: g["chat-chatButtonText"],
                                            isVip: i
                                        }), e.next = 59;
                                        break;
                                    case 56:
                                        e.prev = 56, e.t1 = e.catch(48), t.drawChatEntry({
                                            chatEntryTitle: "Support",
                                            isVip: i
                                        });
                                    case 59:
                                        e.next = 72;
                                        break;
                                    case 61:
                                        return e.prev = 61, e.next = 64, t.getI18n();
                                    case 64:
                                        C = e.sent, t.langData = C, t.drawChatEntry({
                                            chatEntryTitle: C["chat-chatButtonText"],
                                            isVip: i
                                        }), e.next = 72;
                                        break;
                                    case 69:
                                        e.prev = 69, e.t2 = e.catch(61), t.drawChatEntry({
                                            chatEntryTitle: "Support",
                                            isVip: i
                                        });
                                    case 72:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [10, 23],
                                [48, 56],
                                [61, 69]
                            ])
                        })))()
                    }, e.initSearchPlugin = function(t) {
                        var e = t.isSearchPlugin,
                            n = t.container;
                        this.isSearchPlugin = e, this.searchPluginContainer = n, this.emit("onChatSearchModuleInjected", {
                            isSearchPlugin: e,
                            container: n
                        }), e && !this.scriptNode && this.addScript()
                    }, (0, V.A)(t, [{
                        key: "isChatEnable",
                        get: function() {
                            return this._isChatEnable
                        }
                    }, {
                        key: "isChatVisible",
                        get: function() {
                            return this._isChatVisible
                        }
                    }, {
                        key: "isChatPopUp",
                        get: function() {
                            return this._isChatPopUp
                        }
                    }, {
                        key: "scriptNode",
                        get: function() {
                            return this._scriptNode
                        },
                        set: function(t) {
                            this._scriptNode = t
                        }
                    }, {
                        key: "cdnHost",
                        get: function() {
                            return this._cdnHost
                        },
                        set: function(t) {
                            this._cdnHost = t
                        }
                    }, {
                        key: "hasVipGroup",
                        get: function() {
                            return this._hasVipGroup
                        }
                    }, {
                        key: "isVip",
                        get: function() {
                            return this._isVip
                        }
                    }, {
                        key: "sourceEntry",
                        get: function() {
                            return this._sourceEntry
                        }
                    }, {
                        key: "isSenseiMode",
                        get: function() {
                            return this._isSenseiMode
                        }
                    }]), t
                }(),
                B = n("rEBH"),
                N = function() {
                    return function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                isChatEnable: !0,
                                isChatVisible: !0,
                                isChatPopUp: !1,
                                onChatLoadedCallbackFunction: function() {},
                                onClick: null,
                                isSenseiMode: !1,
                                isSearchPlugin: !1,
                                searchPluginContainer: null
                            },
                            n = e.isChatEnable,
                            i = e.isChatVisible,
                            o = e.isChatPopUp,
                            r = e.onChatLoadedCallbackFunction,
                            s = e.apiHost,
                            c = e.onClick,
                            l = e.sourceEntry,
                            d = e.isSenseiMode,
                            h = e.isSearchPlugin,
                            u = e.searchPluginContainer,
                            p = (0, a.useRef)(new D({
                                cdnHost: t,
                                isChatEnable: n,
                                isChatPopUp: o,
                                isChatVisible: i,
                                onChatLoadedCallbackFunction: r,
                                apiHost: s,
                                onClick: c,
                                sourceEntry: l,
                                isSenseiMode: d,
                                isSearchPlugin: h,
                                searchPluginContainer: u
                            }));
                        (0, a.useEffect)((function() {
                            if (n) {
                                var e = p.current;
                                e.cdnHost = t, window.CHATWIDGET = e, A({
                                    pageName: "binance_support_chat",
                                    elementId: "chat_bubble_entry_amount_of_calls",
                                    extraInfo: {
                                        url: window.location.href
                                    }
                                }), h && "string" === typeof u && e.initSearchPlugin({
                                    isSearchPlugin: h,
                                    container: document.getElementById(u)
                                }), i && (o ? e.changeChatPopUpStatus(!0) : e.changeChatVisibilityStatus(!0))
                            }
                        }), [t]), (0, a.useEffect)((function() {
                            p.current.changeChatVisibilityStatus(i)
                        }), [i]), (0, a.useEffect)((function() {
                            p.current.changeChatPopUpStatus(o)
                        }), [o]), (0, a.useEffect)((function() {
                            setTimeout((function() {
                                p.current.preloadingJsUrl()
                            }), 4e3)
                        }), []), p.current
                    }(B.K5, {
                        isChatEnable: !0,
                        isChatPopUp: !1,
                        isChatVisible: !0,
                        searchPluginContainer: "help-center-search-bar",
                        isSearchPlugin: !1,
                        onChatLoadedCallbackFunction: function() {},
                        sourceEntry: "33"
                    }), (0, i.jsx)(a.Fragment, {})
                },
                Z = n("ZXqo"),
                R = n("uHCZ"),
                q = n("/OND"),
                G = function(t) {
                    return t.global || {}
                },
                F = function() {
                    return (0, q.d4)(G)
                };
            const z = function() {
                var t = (0, Z.Bd)(),
                    e = t.t,
                    n = t.language,
                    a = void 0 === n ? "en" : n,
                    o = (0, r.K7)(),
                    s = o.pathname,
                    c = o.query,
                    l = o.hash,
                    d = (o.params || {}).catalogSlug,
                    h = void 0 === d ? "" : d,
                    u = c.c,
                    p = F(),
                    f = p.origin,
                    m = p.metaData,
                    g = m.metaTitle,
                    C = m.metaDescription,
                    v = m.metaKeyword,
                    b = m.suffix,
                    y = m.brand,
                    x = m.ogImage,
                    w = m.robots,
                    _ = p.url,
                    k = "".concat(e(g, g)).concat(b ? " | ".concat(b) : ""),
                    E = e(C, C),
                    S = u ? "?c=".concat(u) : "",
                    H = s;
                if (h && l) {
                    var V = s.split("/");
                    V[V.length - 1] = (0, B.X1)(h.split("-").concat(l.substring(1).split("-"))).join("-"), H = V.join("/")
                }
                var L = "".concat(f, "/").concat(a).concat(H).concat(S);
                return (0, i.jsxs)(R.A, {
                    children: [(0, i.jsx)("title", {
                        children: k
                    }), (0, i.jsx)("meta", {
                        name: "keywords",
                        content: v
                    }), (0, i.jsx)("meta", {
                        name: "description",
                        content: E
                    }), (0, i.jsx)("meta", {
                        property: "og:url",
                        content: _
                    }), (0, i.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, i.jsx)("meta", {
                        property: "og:title",
                        content: k
                    }), (0, i.jsx)("meta", {
                        property: "og:site_name",
                        content: y
                    }), x && (0, i.jsx)("meta", {
                        property: "og:image",
                        content: x
                    }), E && (0, i.jsx)("meta", {
                        name: "og:description",
                        content: E
                    }), (0, i.jsx)("meta", {
                        property: "twitter:title",
                        content: k
                    }), (0, i.jsx)("meta", {
                        property: "twitter:site",
                        content: y
                    }), x && (0, i.jsx)("meta", {
                        property: "twitter:image",
                        content: x
                    }), x && (0, i.jsx)("meta", {
                        property: "twitter:image:src",
                        content: x
                    }), (0, i.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), E && (0, i.jsx)("meta", {
                        name: "twitter:description",
                        content: E
                    }), (0, i.jsx)("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "black"
                    }), (0, i.jsx)("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }), (0, i.jsx)("meta", {
                        name: "format-detection",
                        content: "telephone=no"
                    }), (0, i.jsx)("meta", {
                        name: "format-detection",
                        content: "email=no"
                    }), w && (0, i.jsx)("meta", {
                        name: "robots",
                        content: w
                    }), (0, i.jsx)("link", {
                        rel: "canonical",
                        href: L
                    })]
                })
            };
            var O = n("HS2I");
            const K = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/,
                W = (t, e, n) => Object.defineProperty(t, e, {
                    value: n
                }),
                X = t => {
                    if ("string" !== typeof t) throw new TypeError("agent must be a string");
                    const e = t.match(K),
                        n = Object.create({
                            isHybrid: !1
                        });
                    if (e) {
                        const t = e[1];
                        W(n, "bridgeVersion", t), W(n, "clientType", e[2]), W(n, "clientVersion", e[3]), W(n, "isHybrid", !!t)
                    }
                    return window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction && (n.isHybrid = !0), n
                };
            let J, Q;
            const Y = () => Q || ("undefined" !== typeof navigator ? navigator.userAgent : "");
            (function(t) {
                return 0 === arguments.length ? J || (J = X(Y())) : X(t)
            })().isHybrid;

            function $() {
                var t = (0, O.useLanguage)().language,
                    e = void 0 === t ? "en" : t,
                    n = (0, Z.DP)(),
                    o = n.theme,
                    l = n.isLight,
                    d = (0, a.useMemo)((function() {
                        return [l ? s.BB : s.XT, l ? c.bK : c.zd]
                    }), [l]),
                    h = d[0],
                    u = d[1],
                    p = "rtl" === (0, E.dir)(e);
                F().withChat;
                return console.log("layout theme====", o), console.log("layout isLight====", l), (0, i.jsxs)(w, {
                    mode: o,
                    themeColors: h,
                    themeExtraColors: u,
                    isRTL: p,
                    className: (0, B.cn)("bg-bg1", {
                        rtl: p,
                        ltr: !p
                    }),
                    scope: !0,
                    children: [(0, i.jsx)(z, {}), (0, i.jsx)(_.A, {
                        children: (0, i.jsxs)(k.A, {
                            children: [(0, i.jsx)(N, {}), (0, i.jsx)(r.Tp, {})]
                        })
                    })]
                })
            }
        }
    }
]);
//# debugId=ffd12c0f-5421-56f3-b5ca-8abdd9693cc2