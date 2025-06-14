! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.WebPushOdinPre = t() : e.WebPushOdinPre = t()
}(this, (() => (() => {
    "use strict";
    var e = {
            d: (t, o) => {
                for (var i in o) e.o(o, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: o[i]
                })
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        t = {};
    let o;
    e.r(t), e.d(t, {
        initWebPushOdin: () => d
    });
    let i = !1;
    const n = e => (o || (o = new Promise(((t, o) => {
        setTimeout((() => {
            const i = document.createElement("script");
            i.src = `${e.publicStaticHost}/unpkg/web-push-odin/web-push-odin-sdk@0.0.29.js`, i.id = "_web-push-odin-script", i.defer = !0, document.body.appendChild(i), i.onload = () => {
                console.log("loaded web-push-odin-sdk"), t(!0)
            }, i.onerror = () => {
                o(new Error("Error loading script"))
            }
        }), i ? 0 : 1e4)
    }))), o.then((t => {
        if (t) {
            const t = window.WebPushOdinSDK.initWebPushOdin(e);
            return e.onLoaded && e.onLoaded(), t
        }
    })).catch((t => {
        console.error("Error initializing WebPushOdinSDK:", t), e.onError && e.onError(t, "load")
    })));
    let r = null,
        s = [];
    const d = async e => {
        if ("undefined" != typeof window) return e.immediateLoad && (i = !0), new Promise(((t, o) => {
            if (e.publicStaticHost) {
                for (r = e.publicStaticHost; s.length > 0;) {
                    const t = s.shift();
                    clearTimeout(t.timeoutId), n({
                        getConnectOptions: e.getConnectOptions,
                        ...t.options,
                        publicStaticHost: r
                    }).then(t.resolve).catch(t.reject)
                }
                n(e).then(t).catch(o)
            } else if (r) n({ ...e,
                publicStaticHost: r
            }).then(t).catch(o);
            else {
                const i = setTimeout((() => {
                    s = s.filter((e => e.timeoutId !== i)), e.onError && e.onError("Timeout: No publicStaticHost provided within 30 seconds", "timeout"), o(new Error("Timeout: No publicStaticHost provided within 30 seconds"))
                }), 3e4);
                s.push({
                    options: e,
                    resolve: t,
                    reject: o,
                    timeoutId: i
                })
            }
        }))
    };
    return t
})()));