"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [5879], {
        "2yzs": (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => a
            });
            var r = t("mXdx"),
                s = t("xqbL"),
                i = t.n(s),
                u = t("DTvD"),
                c = t("OlNZ"),
                o = t.n(c),
                f = t("1lvF");
            const a = function(e) {
                var n = e.initialVisible,
                    t = void 0 !== n && n,
                    s = e.className,
                    c = e.visibleOffset,
                    a = void 0 === c ? 0 : c,
                    l = e.root,
                    v = void 0 === l ? null : l,
                    d = e.children,
                    b = e.stayRendered,
                    p = void 0 === b || b,
                    x = (0, u.useState)(t),
                    g = x[0],
                    y = x[1],
                    h = (0, u.useRef)(null),
                    k = (0, u.useRef)(o()(y, 100)),
                    O = (0, u.useRef)(!1);
                return (0, u.useEffect)((function() {
                    g && (O.current = !0)
                }), [g]), (0, u.useEffect)((function() {
                    var e = h.current;
                    if (e && "undefined" !== typeof IntersectionObserver) {
                        var n = new IntersectionObserver((function(e) {
                            k.current(e[0].isIntersecting)
                        }), {
                            root: v,
                            rootMargin: "".concat(a, "px 0px ").concat(a, "px 0px")
                        });
                        return n.observe(e),
                            function() {
                                e && n.unobserve(e)
                            }
                    }
                    return y(!0),
                        function() {}
                }), [v, a]), g || p && O.current ? d : (0, r.jsx)(f.Ay, {
                    ref: h,
                    className: i()("h-[500px]", s)
                })
            }
        }
    }
]);