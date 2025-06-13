"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [3087], {
        uZNH: (e, t, i) => {
            i.r(t), i.d(t, {
                ChartArea: () => b,
                default: () => g
            });
            var r = i("mXdx"),
                l = i("DTvD"),
                n = i("rdbA"),
                s = i.n(n),
                a = i("c5/b"),
                o = i.n(a),
                d = i("ekJu"),
                c = i("JloV");
            const h = (u = o()) && u.__esModule ? u.default : u;
            var u;
            const b = ({
                    lineList: e,
                    width: t,
                    height: i
                }) => {
                    const n = (0, l.useRef)(null),
                        a = (0, d.DP)(),
                        o = a.colors.buy,
                        u = a.colors.sell,
                        b = {
                            chart: {
                                type: "area",
                                backgroundColor: "transparent",
                                margin: [0, 0, 0, 0]
                            },
                            credits: {
                                enabled: !1
                            },
                            exporting: {
                                enabled: !1
                            },
                            title: void 0,
                            xAxis: {
                                visible: !1
                            },
                            yAxis: {
                                title: void 0,
                                labels: {
                                    enabled: !1
                                },
                                visible: !0,
                                gridLineWidth: 0,
                                plotLines: [{
                                    color: a.colors.line,
                                    width: 2,
                                    value: 0,
                                    dashStyle: "ShortDot"
                                }]
                            },
                            series: [{
                                showInLegend: !1,
                                marker: {
                                    enabled: !1
                                },
                                enableMouseTracking: !1,
                                lineWidth: "2px",
                                color: o,
                                negativeColor: u,
                                fillColor: {
                                    linearGradient: {
                                        x1: 0,
                                        x2: 0,
                                        y1: 0,
                                        y2: 1
                                    },
                                    stops: [
                                        [0, `${o}1a`],
                                        [1, `${o}00`]
                                    ]
                                },
                                negativeFillColor: {
                                    linearGradient: {
                                        x1: 0,
                                        x2: 0,
                                        y1: 0,
                                        y2: 1
                                    },
                                    stops: [
                                        [0, `${u}1a`],
                                        [1, `${u}00`]
                                    ]
                                },
                                data: e,
                                visible: !0
                            }]
                        };
                    return (0, l.useEffect)((() => {
                        if (n.current && (0, c.k)(t) && (0, c.k)(i)) {
                            const {
                                chart: e
                            } = n.current;
                            e.setSize(t, i)
                        }
                    }), [e, t, i]), (0, r.jsx)(h, {
                        containerProps: {
                            style: {
                                height: "100%",
                                width: "100%"
                            }
                        },
                        highcharts: s(),
                        options: b,
                        ref: n
                    })
                },
                g = b
        }
    }
]);