/* @version 0.1.1-ci-3fc017f6b09356a495308094ec94dfb668df0924 */ ! function(e, o) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = o();
    else if ("function" == typeof define && define.amd) define([], o);
    else {
        var f = o();
        for (var t in f)("object" == typeof exports ? exports : e)[t] = f[t]
    }
}(self, (() => (window._pika_remote_config = {
    sensorsVersion: "1.26.12"
}, {})));