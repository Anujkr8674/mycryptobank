"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "99fc51ba-6a6c-5fbd-9158-b9b7ec7fd9c3")
    } catch (e) {}
}();
(self.webpackChunkmain_exchange_ui = self.webpackChunkmain_exchange_ui || []).push([
    [9680], {
        b8jN: (e, a, n) => {
            n.d(a, {
                default: () => b
            });
            var t = n("jg1C"),
                s = n("DTvD"),
                o = n("Lp65"),
                r = n("qtT+"),
                c = n("k5JY"),
                l = n("vpUY"),
                i = n("ZSsA"),
                d = n("GjVY"),
                m = n("p1Xy"),
                p = n("FAev"),
                u = n("8Zi/"),
                g = [{
                    img: "static/com/megadrop/img-1.png",
                    desc: "mega-web-promopage-intro-desc-1"
                }, {
                    img: "static/com/megadrop/img-2.png",
                    desc: "mega-web-promopage-intro-desc-2"
                }, {
                    img: "static/com/megadrop/img-3.png",
                    desc: "mega-web-promopage-intro-desc-3"
                }],
                f = function() {
                    return (0, t.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, t.jsx)("path", {
                            d: "M6.69672 4.57538L4.5754 6.6967L9.8787 12L4.5754 17.3033L6.69672 19.4246L12 14.1213L17.3033 19.4246L19.4246 17.3033L14.1213 12L19.4246 6.6967L17.3033 4.57538L12 9.87868L6.69672 4.57538Z",
                            fill: "#929AA5"
                        })
                    })
                },
                h = function() {
                    return (0, t.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, t.jsx)("path", {
                            d: "M21.7724 18.7033C21.4062 19.5418 20.9726 20.3136 20.4703 21.0232C19.7857 21.9906 19.225 22.6602 18.793 23.032C18.1233 23.6424 17.4057 23.955 16.6373 23.9728C16.0857 23.9728 15.4204 23.8172 14.646 23.5017C13.8691 23.1876 13.1551 23.032 12.5023 23.032C11.8176 23.032 11.0833 23.1876 10.2978 23.5017C9.51121 23.8172 8.8775 23.9816 8.39299 23.9979C7.65613 24.0291 6.92166 23.7076 6.18854 23.032C5.72063 22.6276 5.13536 21.9343 4.43423 20.9521C3.68197 19.9033 3.06351 18.687 2.579 17.3004C2.06011 15.8026 1.79999 14.3523 1.79999 12.9482C1.79999 11.3398 2.1507 9.95259 2.85318 8.79011C3.40526 7.85636 4.13972 7.11979 5.05896 6.57906C5.97821 6.03834 6.97145 5.76279 8.04108 5.74516C8.62635 5.74516 9.39385 5.92456 10.3476 6.27715C11.2987 6.63091 11.9094 6.81032 12.1771 6.81032C12.3773 6.81032 13.0557 6.60054 14.2058 6.18233C15.2933 5.79449 16.2112 5.63391 16.9632 5.69716C19.0008 5.86012 20.5316 6.6561 21.5497 8.09013C19.7274 9.18432 18.8259 10.7169 18.8438 12.6829C18.8603 14.2142 19.4209 15.4886 20.5227 16.5004C21.022 16.97 21.5796 17.333 22.2 17.5907C22.0654 17.9774 21.9234 18.3477 21.7724 18.7033ZM17.0992 0.480137C17.0992 1.68041 16.6567 2.8011 15.7747 3.8384C14.7103 5.07155 13.4229 5.78412 12.0267 5.67168C12.009 5.52769 11.9986 5.37614 11.9986 5.21688C11.9986 4.06462 12.5048 2.83147 13.4037 1.82321C13.8525 1.3127 14.4233 0.888228 15.1155 0.549615C15.8061 0.216055 16.4594 0.031589 17.0738 0C17.0918 0.160458 17.0992 0.320926 17.0992 0.480121V0.480137Z",
                            fill: "#EAECEF"
                        })
                    })
                },
                x = function() {
                    return (0, t.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, t.jsx)("path", {
                            d: "M21.7724 18.7033C21.4062 19.5418 20.9726 20.3136 20.4703 21.0232C19.7857 21.9906 19.225 22.6602 18.793 23.032C18.1233 23.6424 17.4057 23.955 16.6373 23.9728C16.0857 23.9728 15.4204 23.8172 14.646 23.5017C13.8691 23.1876 13.1551 23.032 12.5023 23.032C11.8176 23.032 11.0833 23.1876 10.2978 23.5017C9.51121 23.8172 8.8775 23.9816 8.39299 23.9979C7.65613 24.0291 6.92166 23.7076 6.18854 23.032C5.72063 22.6276 5.13536 21.9343 4.43423 20.9521C3.68197 19.9033 3.06351 18.687 2.579 17.3004C2.06011 15.8026 1.79999 14.3523 1.79999 12.9482C1.79999 11.3398 2.1507 9.95259 2.85318 8.79011C3.40526 7.85636 4.13972 7.11979 5.05896 6.57906C5.97821 6.03834 6.97145 5.76279 8.04108 5.74516C8.62635 5.74516 9.39385 5.92456 10.3476 6.27715C11.2987 6.63091 11.9094 6.81032 12.1771 6.81032C12.3773 6.81032 13.0557 6.60054 14.2058 6.18233C15.2933 5.79449 16.2112 5.63391 16.9632 5.69716C19.0008 5.86012 20.5316 6.6561 21.5497 8.09013C19.7274 9.18432 18.8259 10.7169 18.8438 12.6829C18.8603 14.2142 19.4209 15.4886 20.5227 16.5004C21.022 16.97 21.5796 17.333 22.2 17.5907C22.0654 17.9774 21.9234 18.3477 21.7724 18.7033ZM17.0992 0.480137C17.0992 1.68041 16.6567 2.8011 15.7747 3.8384C14.7103 5.07155 13.4229 5.78412 12.0267 5.67168C12.009 5.52769 11.9986 5.37614 11.9986 5.21688C11.9986 4.06462 12.5048 2.83147 13.4037 1.82321C13.8525 1.3127 14.4233 0.888228 15.1155 0.549615C15.8061 0.216055 16.4594 0.031589 17.0738 0C17.0918 0.160458 17.0992 0.320926 17.0992 0.480121V0.480137Z",
                            fill: "#202630"
                        })
                    })
                },
                w = function() {
                    return (0, t.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, t.jsx)("path", {
                            d: "M12.0312 11.4375L2.09375 22.0313C2.375 23.1563 3.40625 24 4.71875 24C5.1875 24 5.65625 23.9063 6.125 23.625L17.375 17.1563L12.0312 11.4375Z",
                            fill: "#EA4335"
                        }), (0, t.jsx)("path", {
                            d: "M22.1563 9.65625L17.2812 6.84375L11.8438 11.7188L17.2812 17.1563L22.0625 14.3438C22.9063 13.875 23.4688 13.0313 23.4688 12C23.5625 10.9688 23 10.125 22.1563 9.65625Z",
                            fill: "#FBBC04"
                        }), (0, t.jsx)("path", {
                            d: "M2.09375 1.96875C2 2.15625 2 2.4375 2 2.625V21.375C2 21.6562 2 21.8438 2.09375 22.0313L12.4063 11.7188L2.09375 1.96875Z",
                            fill: "#4285F4"
                        }), (0, t.jsx)("path", {
                            d: "M12.125 12L17.2812 6.84375L6.03125 0.375C5.65625 0.0937496 5.1875 0 4.625 0C3.40625 0 2.28125 0.843749 2 1.96875L12.125 12Z",
                            fill: "#34A853"
                        })]
                    })
                };
            const C = function() {
                var e = (0, i.s9)(),
                    a = e.t,
                    n = (e.i18n, (0, l.S)().isHybrid),
                    C = "light" === (0, m.D)(),
                    b = (0, p.Qs)().isDeskTop,
                    A = (0, s.useState)(!1),
                    j = A[0],
                    v = A[1],
                    N = new Array(10).fill("").map((function(e, a) {
                        return {
                            q: "mega-web-promopage-faq-title-".concat(a + 1),
                            a: "mega-web-promopage-faq-desc-".concat(a + 1)
                        }
                    }));
                return (0, t.jsxs)(o.A, {
                    className: "megadrop relative flex-col items-center justify-center mobile:px-4 tablet:px-6 ",
                    children: [(0, t.jsxs)(o.A, {
                        className: "module flex flex-row gap-6 mobile:flex-col-reverse mobile:gap-10 tablet:flex-col-reverse tablet:gap-10 ",
                        children: [(0, t.jsxs)(o.A, {
                            className: "megadrop-title-warper flex-1 flex-col ",
                            children: [(0, t.jsx)(o.A, {
                                className: "megadrop-module-title",
                                children: a("mega-web-promopage-title")
                            }), (0, t.jsx)(o.A, {
                                className: "megadrop-module-sub-title",
                                children: a("mega-web-promopage-subtitle")
                            }), (0, t.jsx)(o.A, {
                                className: "megadrop-module-desc",
                                children: a("mega-web-promopage-desc")
                            }), (0, t.jsx)(o.A, {
                                className: "megadrop-module-button-wrap",
                                children: (0, t.jsx)(o.A, {
                                    onClick: function() {
                                        if (n) {
                                            window.open("bnc://app.binance.com/mp/app?appId=FuyZddMEsYJRUAQr6qT85K", "_blank")
                                        } else b ? v(!0) : window.open("https://binance.onelink.me/y874/megadrop?af_force_deeplink=true")
                                    },
                                    className: "megadrop-module-button",
                                    children: a("mega-web-promopage-get-started-button")
                                })
                            })]
                        }), (0, t.jsx)(o.A, {
                            className: "flex-1",
                            children: (0, t.jsx)(r.A, {
                                lazyLoad: !1,
                                className: "w-full",
                                src: "".concat(d.K5, "/static/com/megadrop/top-bg.png")
                            })
                        })]
                    }), (0, t.jsxs)(o.A, {
                        className: "module-2",
                        children: [(0, t.jsx)(o.A, {
                            className: "module-2-title",
                            children: a("mega-web-promopage-intro-title")
                        }), (0, t.jsx)(o.A, {
                            className: "module-panel-wrapper flex flex-wrap gap-12 mobile:gap-6 tablet:gap-6 ",
                            children: g.map((function(e, n) {
                                return (0, t.jsxs)(o.A, {
                                    className: "module-panel flex-col",
                                    children: [(0, t.jsx)(r.A, {
                                        className: "module-panel-img",
                                        src: "".concat(d.K5, "/").concat(e.img)
                                    }), (0, t.jsx)(o.A, {
                                        className: "module-panel-desc",
                                        children: a(e.desc)
                                    })]
                                }, n)
                            }))
                        })]
                    }), (0, t.jsx)(o.A, {
                        className: "module-faq",
                        children: N.map((function(e, n) {
                            var s = e.q,
                                r = e.a;
                            return a(s) === s || a(r) === r ? null : (0, t.jsxs)(o.A, {
                                onClick: function(e) {
                                    var a = e.currentTarget.className; - 1 !== a.indexOf("module-faq-item-hidden") ? (e.currentTarget.className = a.replace("module-faq-item-hidden", "module-faq-item-show"), document.querySelectorAll(".module-faq-item-show .module-faq-item-q-icon2").forEach((function(e) {
                                        e.innerHTML = "-"
                                    }))) : (e.currentTarget.className = a.replace("module-faq-item-show", "module-faq-item-hidden"), document.querySelectorAll(".module-faq-item-hidden .module-faq-item-q-icon2").forEach((function(e) {
                                        e.innerHTML = "+"
                                    })))
                                },
                                className: "module-faq-item module-faq-item-hidden",
                                children: [(0, t.jsxs)(o.A, {
                                    className: "module-faq-item-q",
                                    children: [(0, t.jsx)(o.A, {
                                        className: "module-faq-item-q-icon",
                                        children: n + 1
                                    }), (0, t.jsx)(o.A, {
                                        className: "module-faq-item-q-text",
                                        children: a(s)
                                    }), (0, t.jsx)(o.A, {
                                        className: "module-faq-item-q-icon2",
                                        children: "+"
                                    })]
                                }), (0, t.jsx)(o.A, {
                                    className: "module-faq-item-a",
                                    children: a(r)
                                })]
                            }, n)
                        }))
                    }), (0, t.jsx)(c.Ay, {
                        visible: j,
                        children: (0, t.jsx)(c.Ay.Content, {
                            children: (0, t.jsxs)(o.A, {
                                className: "megadrop-modal",
                                children: [(0, t.jsx)(o.A, {
                                    className: "megadrop-modal-close",
                                    onClick: function() {
                                        return v(!1)
                                    },
                                    children: (0, t.jsx)(f, {})
                                }), (0, t.jsx)(o.A, {
                                    className: "megadrop-modal-title",
                                    children: a("mega-web-promopage-intro-title")
                                }), (0, t.jsxs)(o.A, {
                                    className: "megadrop-modal-qr",
                                    children: [(0, t.jsx)(u, {
                                        renderAs: "svg",
                                        value: "https://app.binance.com/uni-qr/131a546068386b3de85405391adddf95",
                                        size: 176
                                    }), (0, t.jsx)(o.A, {
                                        className: "megadrop-modal-button-icon-badge"
                                    })]
                                }), (0, t.jsxs)(o.A, {
                                    onClick: function() {
                                        window.open("https://app.appsflyer.com/id1436799971?pid=MegaDrop&c=MegaDrop_WebLandingPage_Download")
                                    },
                                    className: "megadrop-modal-button",
                                    children: [(0, t.jsx)(o.A, {
                                        className: "megadrop-modal-button-icon",
                                        children: C ? (0, t.jsx)(x, {}) : (0, t.jsx)(h, {})
                                    }), (0, t.jsxs)(o.A, {
                                        className: "megadrop-modal-button-content",
                                        children: [(0, t.jsx)(o.A, {
                                            className: "megadrop-modal-button-content-title",
                                            children: a("mega-web-promopage-get-started-pop-up-download-ios-title")
                                        }), (0, t.jsx)(o.A, {
                                            className: "megadrop-modal-button-content-desc",
                                            children: a("mega-web-promopage-get-started-pop-up-download-ios-desc")
                                        })]
                                    })]
                                }), (0, t.jsxs)(o.A, {
                                    onClick: function() {
                                        window.open("https://app.appsflyer.com/com.binance.dev?pid=MegaDrop&c=MegaDrop_WebLandingPage_Download")
                                    },
                                    className: "megadrop-modal-button",
                                    children: [(0, t.jsx)(o.A, {
                                        className: "megadrop-modal-button-icon",
                                        children: (0, t.jsx)(w, {})
                                    }), (0, t.jsxs)(o.A, {
                                        className: "megadrop-modal-button-content",
                                        children: [(0, t.jsx)(o.A, {
                                            className: "megadrop-modal-button-content-title",
                                            children: a("mega-web-promopage-get-started-pop-up-download-android-title")
                                        }), (0, t.jsx)(o.A, {
                                            className: "megadrop-modal-button-content-desc",
                                            children: a("mega-web-promopage-get-started-pop-up-download-android-desc")
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            };

            function b() {
                return (0, t.jsx)(C, {})
            }
        },
        Lp65: (e, a, n) => {
            n.d(a, {
                A: () => m
            });
            var t = n("wIZF"),
                s = n("DTvD"),
                o = n.n(s),
                r = n("RGyw"),
                c = n("O94r"),
                l = n.n(c),
                i = n("fvKX"),
                d = o().forwardRef((function(e, a) {
                    var n = (0, i.r)().prefixCls,
                        s = l()("".concat(n, "-flex"), e.className);
                    return o().createElement(r.A, (0, t.__assign)({}, e, {
                        ref: a,
                        className: s
                    }))
                }));
            d.displayName = "Flex";
            const m = d
        },
        "qtT+": (e, a, n) => {
            n.d(a, {
                A: () => b
            });
            var t = n("wIZF"),
                s = n("DTvD"),
                o = n.n(s),
                r = n("O94r"),
                c = n.n(r);

            function l(e) {
                var a = e.img;
                return new Promise((function(e, n) {
                    (function(e) {
                        var a = e.img;
                        return new Promise((function(e) {
                            return e(a)
                        }))
                    })({
                        img: a
                    }).then((function(a) {
                        if (/^http/i.test(a)) {
                            var t = new Image;
                            t.addEventListener("load", (function() {
                                return e(a)
                            })), t.addEventListener("error", (function() {
                                return n(new Error("img load error"))
                            })), t.src = a
                        } else n("image path is null")
                    }))
                }))
            }
            var i = n("2OVm"),
                d = n("9xbI");
            const m = function(e) {
                    function a() {
                        var a = null !== e && e.apply(this, arguments) || this;
                        return a.inViewPort = function() {
                            var e = a.$refs.root,
                                n = a.props,
                                t = n.isBackground;
                            l({
                                img: n.src
                            }).then((function(a) {
                                e.style.backgroundColor = "transparent", t ? (e.style.backgroundSize = "100%", e.style.backgroundPosition = "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundImage = "url('".concat(a, "')")) : e.src = a
                            })).catch((function() {
                                return null
                            }))
                        }, a
                    }
                    return (0, t.__extends)(a, e), a.prototype.render = function() {
                        var e = this.props,
                            a = e.src,
                            n = (e.check, e.lazyLoad, e.isBackground),
                            s = (0, t.__rest)(e, ["src", "check", "lazyLoad", "isBackground"]);
                        return o().createElement(d.A, (0, t.__assign)({}, s, {
                            "data-src": a,
                            ref: this.setRefs("root"),
                            as: n ? "div" : "img"
                        }))
                    }, a
                }(i.A),
                p = (0, s.forwardRef)((function(e, a) {
                    var n = e.lazyLoad,
                        s = e.src,
                        r = e.isBackground,
                        c = e.check,
                        l = (0, t.__rest)(e, ["lazyLoad", "src", "isBackground", "check"]);
                    return n || r ? o().createElement(m, (0, t.__assign)({
                        lazyLoad: n,
                        src: s,
                        isBackground: r,
                        check: c
                    }, l)) : o().createElement(d.A, (0, t.__assign)({}, l, {
                        as: "img",
                        ref: a,
                        src: s,
                        "data-src": s
                    }))
                }));
            var u = n("qrIQ"),
                g = n("fvKX"),
                f = n("GmLw").Buffer,
                h = "/bapi/fe/resource/image",
                x = "https://www.binance.com",
                w = n("eeEA"),
                C = function(e) {
                    var a, n = e.isRound,
                        r = e.isMask,
                        l = e.mode,
                        i = e.responsive,
                        d = e.src,
                        m = (0, t.__rest)(e, ["isRound", "isMask", "mode", "responsive", "src"]),
                        C = (0, s.useState)(!1),
                        b = C[0],
                        A = C[1],
                        j = (0, g.r)().prefixCls,
                        v = c()("".concat(j, "-lazy-img"), ((a = {
                            "data-mask": !!r,
                            "data-round": !!n,
                            "data-lazy-load": !!e.lazyLoad || !!e.isBackground
                        })["data-mode-".concat(null === l || void 0 === l ? void 0 : l.replace(/\s+/g, "-"))] = !!l, a), e.className),
                        N = (0, s.useCallback)((function() {
                            return A(!0)
                        }), []),
                        L = (0, s.useMemo)((function() {
                            return !(i && (i.mobile || i.tablet || i.desktop)) || b ? {
                                default: d
                            } : Object.keys(i).reduce((function(e, a) {
                                return e[a] = function(e, a) {
                                    var n = f.from(e).toString("base64");
                                    try {
                                        var t = new URL(h, "https://www.binance.com");
                                        return t.searchParams.set("image", n), Object.entries(a).forEach((function(e) {
                                            var a = e[0],
                                                n = e[1];
                                            void 0 !== n && t.searchParams.set(a, String(n))
                                        })), "".concat(t.pathname).concat(t.search)
                                    } catch (s) {
                                        return "".concat(h, "?image=").concat(n, "&w=").concat(a.w, "&h=").concat(a.h)
                                    }
                                }(d, i[a]), e
                            }), {})
                        }), [d, i, b]),
                        y = {
                            role: "img",
                            "aria-label": "image",
                            alt: "image"
                        };
                    if ("default" in L) return o().createElement(p, (0, t.__assign)({}, y, m, {
                        className: v,
                        mode: l,
                        src: L.default
                    }));
                    var k = L.mobile,
                        q = L.tablet,
                        _ = L.desktop;
                    if (u.lq) {
                        var E = env.API_HOST || x,
                            M = "".concat(E).concat(k || q || _);
                        return o().createElement(p, (0, t.__assign)({}, y, {
                            onError: N
                        }, m, {
                            className: v,
                            mode: l,
                            src: M
                        }))
                    }
                    return o().createElement(w.Ay, {
                        as: "picture"
                    }, o().createElement(w.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 1024px)",
                        srcSet: _
                    }), q && o().createElement(w.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 768px)",
                        srcSet: q
                    }), k && o().createElement(w.Ay, {
                        as: "source",
                        media: "only screen and (max-width: 767px)",
                        srcSet: k
                    }), o().createElement(p, (0, t.__assign)({}, y, {
                        onError: N
                    }, m, {
                        className: v,
                        mode: l,
                        src: _ || d
                    })))
                };
            C.displayName = "Image";
            const b = C
        }
    }
]);
//# debugId=99fc51ba-6a6c-5fbd-9158-b9b7ec7fd9c3