"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [9253], {
        slOZ: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => p
            });
            var a = n("mguP"),
                l = n("mXdx"),
                r = n("DTvD"),
                s = n.n(r),
                c = n("1lvF"),
                i = n("wIZF"),
                o = n("TQvm");
            const u = function(e) {
                return s().createElement(o.A, (0, i.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.5 3H19v18H6.5v-2.5H4V16h2.5v-2.75H4v-2.5h2.5V8H4V5.5h2.5V3zm6.25 4.75c-.69 0-1.25.56-1.25 1.25v.5H9V9a3.75 3.75 0 116.402 2.652L14 13.053V14.5h-2.5v-2.482l2.134-2.134a1.25 1.25 0 00-.884-2.134zM11.5 19v-2.5H14V19h-2.5z",
                    fill: "currentColor"
                }))
            };
            var d = n("WLZf"),
                f = n("YZbU"),
                m = n("gYIm"),
                x = n("WjPW"),
                h = n("O1JD");
            const p = function(e) {
                var t = e.onClick,
                    n = (0, d.XY)().t,
                    s = (0, r.useRef)({
                        openModal: function() {}
                    }),
                    i = (0, a._)((0, x.z)(f.p.academyPopUpTab, m.hf), 2)[1];
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(c.Ay, {
                        className: "flex cursor-pointer items-center",
                        onClick: function() {
                            i(m.hf), "function" === typeof t && t(), s.current.openModal()
                        },
                        children: [(0, l.jsx)(c.Ay, {
                            className: "w-[20px] h-[20px] mr-[4px]",
                            children: (0, l.jsx)(u, {
                                className: "text-PrimaryText text-[20px]"
                            })
                        }), (0, l.jsx)(c.Ay, {
                            className: "t-subtitle2 text-PrimaryText",
                            children: n("strategy-academy", {
                                defaultValue: "Bots Academy"
                            })
                        })]
                    }), (0, l.jsx)(h.h, {
                        ref: s
                    })]
                })
            }
        }
    }
]);