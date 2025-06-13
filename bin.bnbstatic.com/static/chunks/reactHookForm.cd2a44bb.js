"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [3179], {
        PaVQ: (e, r, t) => {
            t.d(r, {
                FH: () => ke,
                Op: () => R,
                as: () => B,
                lN: () => E,
                mN: () => Ve,
                xW: () => A
            });
            var n = t("DTvD"),
                s = e => "checkbox" === e.type,
                u = e => null == e;
            const c = e => "object" === typeof e;
            var a = e => !u(e) && !Array.isArray(e) && c(e) && !(e instanceof Date),
                i = e => a(e) && e.target ? s(e.target) ? e.target.checked : e.target.value : e,
                l = e => e.substring(0, e.search(/.\d/)) || e,
                o = (e, r) => [...e].some((e => l(r) === e)),
                f = e => e.filter(Boolean),
                d = e => void 0 === e,
                b = (e, r, t) => {
                    if (a(e) && r) {
                        const n = f(r.split(/[,[\].]+?/)).reduce(((e, r) => u(e) ? e : e[r]), e);
                        return d(n) || n === e ? d(e[r]) ? t : e[r] : n
                    }
                };
            const m = {
                    BLUR: "blur",
                    CHANGE: "change"
                },
                g = {
                    onBlur: "onBlur",
                    onChange: "onChange",
                    onSubmit: "onSubmit",
                    onTouched: "onTouched",
                    all: "all"
                },
                y = "max",
                h = "min",
                v = "maxLength",
                O = "minLength",
                j = "pattern",
                p = "required",
                V = "validate";
            var k = (e, r) => {
                const t = Object.assign({}, e);
                return delete t[r], t
            };
            const _ = n.createContext(null);
            _.displayName = "RHFContext";
            const A = () => n.useContext(_),
                R = e => n.createElement(_.Provider, {
                    value: k(e, "children")
                }, e.children);
            var w = (e, r, t, n, s = !0) => e ? new Proxy(r, {
                    get: (e, r) => {
                        if (r in e) return t.current[r] !== g.all && (t.current[r] = !s || g.all), n && (n.current[r] = !0), e[r]
                    }
                }) : r,
                S = e => a(e) && !Object.keys(e).length,
                x = (e, r, t) => {
                    const n = k(e, "name");
                    return S(n) || Object.keys(n).length >= Object.keys(r).length || Object.keys(n).find((e => r[e] === (!t || g.all)))
                },
                C = e => Array.isArray(e) ? e : [e],
                F = "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document;
            const D = F ? "Proxy" in window : "undefined" !== typeof Proxy;

            function E(e) {
                const {
                    control: r,
                    name: t
                } = e || {}, s = A(), {
                    formStateRef: u,
                    formStateSubjectRef: c,
                    readFormStateRef: a
                } = r || s.control, i = n.useRef(t);
                i.current = t;
                const [l, o] = n.useState(u.current), f = n.useRef({
                    isDirty: !1,
                    dirtyFields: !1,
                    touchedFields: !1,
                    isValidating: !1,
                    isValid: !1,
                    errors: !1
                });
                return n.useEffect((() => {
                    const e = c.current.subscribe({
                        next: e => (!i.current || !e.name || C(i.current).includes(e.name)) && x(e, f.current) && o(Object.assign(Object.assign({}, u.current), e))
                    });
                    return () => e.unsubscribe()
                }), []), w(D, l, a, f, !1)
            }

            function B({
                name: e,
                rules: r,
                defaultValue: t,
                control: s,
                shouldUnregister: u
            }) {
                const c = A(),
                    {
                        defaultValuesRef: a,
                        register: l,
                        fieldsRef: f,
                        unregister: g,
                        fieldArrayNamesRef: y,
                        controllerSubjectRef: h,
                        shouldUnmount: v,
                        inFieldArrayActionRef: O
                    } = s || c.control,
                    {
                        onChange: j,
                        onBlur: p,
                        ref: V
                    } = l(e, r),
                    k = o(y.current, e),
                    [_, R] = n.useState(d(b(f.current, e)._f.value) || k ? d(t) ? b(a.current, e) : t : b(f.current, e)._f.value),
                    w = E({
                        control: s || c.control,
                        name: e
                    });
                return b(f.current, e)._f.value = _, n.useEffect((() => {
                    const r = h.current.subscribe({
                        next: r => (!r.name || e === r.name) && R(b(r.values, e))
                    });
                    return () => {
                        r.unsubscribe();
                        const t = v || u;
                        (k ? t && !O.current : t) ? g(e): b(f.current, e) && (b(f.current, e)._f.mount = !1)
                    }
                }), [e]), {
                    field: {
                        onChange: r => {
                            const t = i(r);
                            R(t), j({
                                target: {
                                    value: t,
                                    name: e
                                },
                                type: m.CHANGE
                            })
                        },
                        onBlur: () => {
                            p({
                                target: {
                                    name: e
                                },
                                type: m.BLUR
                            })
                        },
                        name: e,
                        value: _,
                        ref: e => e && V(e)
                    },
                    formState: w,
                    fieldState: {
                        invalid: !!b(w.errors, e),
                        isDirty: !!b(w.dirtyFields, e),
                        isTouched: !!b(w.touchedFields, e),
                        error: b(w.errors, e)
                    }
                }
            }
            var N = (e, r, t, n, s) => r ? Object.assign(Object.assign({}, t[e]), {
                    types: Object.assign(Object.assign({}, t[e] && t[e].types ? t[e].types : {}), {
                        [n]: s || !0
                    })
                }) : {},
                T = e => /^\w*$/.test(e),
                L = e => f(e.replace(/["|']|\]/g, "").split(/\.|\[/));

            function M(e, r, t) {
                let n = -1;
                const s = T(r) ? [r] : L(r),
                    u = s.length,
                    c = u - 1;
                for (; ++n < u;) {
                    const r = s[n];
                    let u = t;
                    if (n !== c) {
                        const t = e[r];
                        u = a(t) || Array.isArray(t) ? t : isNaN(+s[n + 1]) ? {} : []
                    }
                    e[r] = u, e = e[r]
                }
                return e
            }
            const U = (e, r, t) => {
                    for (const n of t || Object.keys(e)) {
                        const t = b(e, n);
                        if (t) {
                            const e = t._f,
                                n = k(t, "_f");
                            if (e && r(e.name)) {
                                if (e.ref.focus && d(e.ref.focus())) break;
                                if (e.refs) {
                                    e.refs[0].focus();
                                    break
                                }
                            } else a(n) && U(n, r)
                        }
                    }
                },
                I = (e, r = {}) => {
                    for (const t in e.current) {
                        const n = e.current[t];
                        if (n && !u(r)) {
                            const e = n._f,
                                s = k(n, "_f");
                            M(r, t, e && e.ref ? e.ref.disabled || e.refs && e.refs.every((e => e.disabled)) ? void 0 : e.value : Array.isArray(n) ? [] : {}), s && I({
                                current: s
                            }, r[t])
                        }
                    }
                    return r
                };
            var H = e => u(e) || !c(e);

            function P(e, r, t) {
                if (H(e) || H(r) || e instanceof Date || r instanceof Date) return e === r;
                if (!n.isValidElement(e)) {
                    const n = Object.keys(e),
                        s = Object.keys(r);
                    if (n.length !== s.length) return !1;
                    for (const u of n) {
                        const n = e[u];
                        if (!t || "ref" !== u) {
                            const e = r[u];
                            if ((a(n) || Array.isArray(n)) && (a(e) || Array.isArray(e)) ? !P(n, e, t) : n !== e) return !1
                        }
                    }
                }
                return !0
            }

            function W(e, r) {
                if (H(e) || H(r)) return r;
                for (const n in r) {
                    const s = e[n],
                        u = r[n];
                    try {
                        e[n] = a(s) && a(u) || Array.isArray(s) && Array.isArray(u) ? W(s, u) : u
                    } catch (t) {}
                }
                return e
            }

            function q(e, r, t, n, s) {
                let u = -1;
                for (; ++u < e.length;) {
                    for (const n in e[u]) Array.isArray(e[u][n]) ? (!t[u] && (t[u] = {}), t[u][n] = [], q(e[u][n], b(r[u] || {}, n, []), t[u][n], t[u], n)) : P(b(r[u] || {}, n), e[u][n]) ? M(t[u] || {}, n) : t[u] = Object.assign(Object.assign({}, t[u]), {
                        [n]: !0
                    });
                    n && !t.length && delete n[s]
                }
                return t
            }
            var $ = (e, r, t) => W(q(e, r, t.slice(0, e.length)), q(r, e, t.slice(0, e.length)));
            var G = e => "string" === typeof e;
            var Q = e => "boolean" === typeof e;

            function z(e, r) {
                const t = T(r) ? [r] : L(r),
                    n = 1 == t.length ? e : function(e, r) {
                        const t = r.slice(0, -1).length;
                        let n = 0;
                        for (; n < t;) e = d(e) ? n++ : e[r[n++]];
                        return e
                    }(e, t),
                    s = t[t.length - 1];
                let u;
                n && delete n[s];
                for (let c = 0; c < t.slice(0, -1).length; c++) {
                    let r, n = -1;
                    const s = t.slice(0, -(c + 1)),
                        i = s.length - 1;
                    for (c > 0 && (u = e); ++n < s.length;) {
                        const t = s[n];
                        r = r ? r[t] : e[t], i === n && (a(r) && S(r) || Array.isArray(r) && !r.filter((e => a(e) && !S(e) || Q(e))).length) && (u ? delete u[t] : delete e[t]), u = r
                    }
                }
                return e
            }

            function J(e, r) {
                const t = {};
                for (const n of e) {
                    const e = b(r, n);
                    e && (T(n) ? t[n] = e._f : M(t, n, e._f))
                }
                return t
            }
            var K = e => "file" === e.type,
                X = e => "select-multiple" === e.type,
                Y = e => "radio" === e.type;
            const Z = {
                    value: !1,
                    isValid: !1
                },
                ee = {
                    value: !0,
                    isValid: !0
                };
            var re = e => {
                    if (Array.isArray(e)) {
                        if (e.length > 1) {
                            const r = e.filter((e => e && e.checked && !e.disabled)).map((e => e.value));
                            return {
                                value: r,
                                isValid: !!r.length
                            }
                        }
                        return e[0].checked && !e[0].disabled ? e[0].attributes && !d(e[0].attributes.value) ? d(e[0].value) || "" === e[0].value ? ee : {
                            value: e[0].value,
                            isValid: !0
                        } : ee : Z
                    }
                    return Z
                },
                te = (e, {
                    valueAsNumber: r,
                    valueAsDate: t,
                    setValueAs: n
                }) => d(e) ? e : r ? "" === e ? NaN : +e : t ? new Date(e) : n ? n(e) : e,
                ne = e => [...e].filter((({
                    selected: e
                }) => e)).map((({
                    value: e
                }) => e));
            const se = {
                isValid: !1,
                value: null
            };
            var ue = e => Array.isArray(e) ? e.reduce(((e, r) => r && r.checked && !r.disabled ? {
                isValid: !0,
                value: r.value
            } : e), se) : se;

            function ce(e) {
                if (e && e._f) {
                    const r = e._f.ref;
                    if (r.disabled) return;
                    return K(r) ? r.files : Y(r) ? ue(e._f.refs).value : X(r) ? ne(r.options) : s(r) ? re(e._f.refs).value : te(d(r.value) ? e._f.ref.value : r.value, e._f)
                }
            }
            var ae = (e, r) => r && e && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate),
                ie = ({
                    isOnBlur: e,
                    isOnChange: r,
                    isOnTouch: t,
                    isTouched: n,
                    isReValidateOnBlur: s,
                    isReValidateOnChange: u,
                    isBlurEvent: c,
                    isSubmitted: a,
                    isOnAll: i
                }) => !i && (!a && t ? !(n || c) : (a ? s : e) ? !c : !(a ? u : r) || c),
                le = e => "function" === typeof e,
                oe = e => G(e) || n.isValidElement(e),
                fe = e => e instanceof RegExp;

            function de(e, r, t = "validate") {
                if (oe(e) || Array.isArray(e) && e.every(oe) || Q(e) && !e) return {
                    type: t,
                    message: oe(e) ? e : "",
                    ref: r
                }
            }
            var be = e => a(e) && !fe(e) ? e : {
                    value: e,
                    message: ""
                },
                me = async ({
                    _f: {
                        ref: e,
                        refs: r,
                        required: t,
                        maxLength: n,
                        minLength: c,
                        min: i,
                        max: l,
                        pattern: o,
                        validate: f,
                        name: d,
                        value: b,
                        valueAsNumber: m,
                        mount: g
                    }
                }, k) => {
                    if (!g) return {};
                    const _ = {},
                        A = Y(e),
                        R = s(e),
                        w = A || R,
                        x = (m || K(e)) && !e.value || "" === b || Array.isArray(b) && !b.length,
                        C = N.bind(null, d, k, _),
                        F = (r, t, n, s = v, u = O) => {
                            const c = r ? t : n;
                            _[d] = Object.assign({
                                type: r ? s : u,
                                message: c,
                                ref: e
                            }, C(r ? s : u, c))
                        };
                    if (t && (!A && !R && (x || u(b)) || Q(b) && !b || R && !re(r).isValid || A && !ue(r).isValid)) {
                        const {
                            value: n,
                            message: s
                        } = oe(t) ? {
                            value: !!t,
                            message: t
                        } : be(t);
                        if (n && (_[d] = Object.assign({
                                type: p,
                                message: s,
                                ref: w ? (r || [])[0] || {} : e
                            }, C(p, s)), !k)) return _
                    }
                    if ((!u(i) || !u(l)) && "" !== b) {
                        let r, t;
                        const n = be(l),
                            s = be(i);
                        if (isNaN(b)) {
                            const u = e.valueAsDate || new Date(b);
                            G(n.value) && (r = u > new Date(n.value)), G(s.value) && (t = u < new Date(s.value))
                        } else {
                            const c = e.valueAsNumber || parseFloat(b);
                            u(n.value) || (r = c > n.value), u(s.value) || (t = c < s.value)
                        }
                        if ((r || t) && (F(!!r, n.message, s.message, y, h), !k)) return _
                    }
                    if (G(b) && !x && (n || c)) {
                        const e = be(n),
                            r = be(c),
                            t = !u(e.value) && b.length > e.value,
                            s = !u(r.value) && b.length < r.value;
                        if ((t || s) && (F(t, e.message, r.message), !k)) return _
                    }
                    if (G(b) && o && !x) {
                        const {
                            value: r,
                            message: t
                        } = be(o);
                        if (fe(r) && !b.match(r) && (_[d] = Object.assign({
                                type: j,
                                message: t,
                                ref: e
                            }, C(j, t)), !k)) return _
                    }
                    if (f) {
                        const t = w && r ? r[0] : e;
                        if (le(f)) {
                            const e = de(await f(b), t);
                            if (e && (_[d] = Object.assign(Object.assign({}, e), C(V, e.message)), !k)) return _
                        } else if (a(f)) {
                            let e = {};
                            for (const [r, n] of Object.entries(f)) {
                                if (!S(e) && !k) break;
                                const s = de(await n(b), t, r);
                                s && (e = Object.assign(Object.assign({}, s), C(r, s.message)), k && (_[d] = e))
                            }
                            if (!S(e) && (_[d] = Object.assign({
                                    ref: t
                                }, e), !k)) return _
                        }
                    }
                    return _
                },
                ge = e => ({
                    isOnSubmit: !e || e === g.onSubmit,
                    isOnBlur: e === g.onBlur,
                    isOnChange: e === g.onChange,
                    isOnAll: e === g.all,
                    isOnTouch: e === g.onTouched
                }),
                ye = e => e instanceof HTMLElement,
                he = e => Y(e) || s(e);
            class ve {
                constructor() {
                    this.tearDowns = []
                }
                add(e) {
                    this.tearDowns.push(e)
                }
                unsubscribe() {
                    for (const e of this.tearDowns) e();
                    this.tearDowns = []
                }
            }
            class Oe {
                constructor(e, r) {
                    this.observer = e, this.closed = !1, r.add((() => this.closed = !0))
                }
                next(e) {
                    this.closed || this.observer.next(e)
                }
            }
            class je {
                constructor() {
                    this.observers = []
                }
                next(e) {
                    for (const r of this.observers) r.next(e)
                }
                subscribe(e) {
                    const r = new ve,
                        t = new Oe(e, r);
                    return this.observers.push(t), r
                }
                unsubscribe() {
                    this.observers = []
                }
            }
            const pe = "undefined" === typeof window;

            function Ve({
                mode: e = g.onSubmit,
                reValidateMode: r = g.onChange,
                resolver: t,
                context: c,
                defaultValues: i = {},
                shouldFocusError: y = !0,
                shouldUnregister: h,
                criteriaMode: v
            } = {}) {
                const O = n.useRef({}),
                    j = n.useRef(new Set),
                    p = n.useRef(new je),
                    V = n.useRef(new Set),
                    _ = n.useRef(new je),
                    A = n.useRef(new je),
                    R = n.useRef(new je),
                    E = n.useRef({}),
                    B = n.useRef(!1),
                    N = n.useRef(new Set),
                    T = n.useRef(!1),
                    L = n.useRef({}),
                    W = n.useRef({}),
                    q = n.useRef(i),
                    Q = n.useRef(!1),
                    Z = n.useRef(c),
                    ee = n.useRef(t),
                    re = n.useRef(new Set),
                    ne = ge(e),
                    se = v === g.all,
                    [ue, oe] = n.useState({
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !ne.isOnSubmit,
                        errors: {}
                    }),
                    fe = n.useRef({
                        isDirty: !D,
                        dirtyFields: !D,
                        touchedFields: !D,
                        isValidating: !D,
                        isValid: !D,
                        errors: !D
                    }),
                    de = n.useRef(ue);
                Z.current = c, ee.current = t;
                const be = () => (de.current.isValid = P(W.current, L.current) && S(de.current.errors), de.current.isValid),
                    ve = n.useCallback(((e, r, t = !1, n = {}, s, c) => {
                        const a = b(de.current.errors, e);
                        if (r ? (z(W.current, e), M(de.current.errors, e, r)) : ((b(L.current, e) || ee.current) && M(W.current, e, !0), z(de.current.errors, e)), (t || c || (r ? !P(a, r, !0) : a) || !S(n) || fe.current.isValid && de.current.isValid !== (ee.current ? !!s : be())) && !u(t)) {
                            const r = Object.assign(Object.assign({}, n), {
                                isValid: ee.current ? !!s : be(),
                                errors: de.current.errors,
                                name: e
                            });
                            de.current = Object.assign(Object.assign({}, de.current), r), p.current.next(c ? {
                                name: e
                            } : r)
                        }
                        p.current.next({
                            isValidating: !1
                        })
                    }), []),
                    Oe = n.useCallback(((e, r, t = {}, n, c) => {
                        c && Te(e);
                        const a = b(O.current, e);
                        if (a) {
                            const c = a._f;
                            if (c) {
                                const a = F && ye(c.ref) && u(r) ? "" : r;
                                if (c.value = te(r, c), Y(c.ref) ? (c.refs || []).forEach((e => e.checked = e.value === a)) : K(c.ref) && !G(a) ? c.ref.files = a : X(c.ref) ? [...c.ref.options].forEach((e => e.selected = a.includes(e.value))) : s(c.ref) && c.refs ? c.refs.length > 1 ? c.refs.forEach((e => e.checked = Array.isArray(a) ? !!a.find((r => r === e.value)) : a === e.value)) : c.refs[0].checked = !!a : c.ref.value = a, n) {
                                    const t = I(O);
                                    M(t, e, r), A.current.next({
                                        values: Object.assign(Object.assign({}, q.current), t),
                                        name: e
                                    })
                                }
                                t.shouldDirty && ke(e, a), t.shouldValidate && we(e)
                            } else a._f = {
                                ref: {
                                    name: e,
                                    value: r
                                },
                                value: r
                            }
                        }
                    }), []),
                    Ve = n.useCallback(((e, r) => {
                        const t = I(O);
                        return e && r && M(t, e, r), !P(t, q.current)
                    }), []),
                    ke = n.useCallback(((e, r, t = !0) => {
                        if (fe.current.isDirty || fe.current.dirtyFields) {
                            const n = !P(b(q.current, e), r),
                                s = b(de.current.dirtyFields, e),
                                u = de.current.isDirty;
                            n ? M(de.current.dirtyFields, e, !0) : z(de.current.dirtyFields, e), de.current.isDirty = Ve();
                            const c = {
                                    isDirty: de.current.isDirty,
                                    dirtyFields: de.current.dirtyFields,
                                    name: e
                                },
                                a = fe.current.isDirty && u !== c.isDirty || fe.current.dirtyFields && s !== b(de.current.dirtyFields, e);
                            return a && t && p.current.next(c), a ? c : {}
                        }
                        return {}
                    }), []),
                    _e = n.useCallback((async (e, r) => {
                        const t = (await me(b(O.current, e), se))[e];
                        return ve(e, t, r), d(t)
                    }), [se]),
                    Ae = n.useCallback((async (e, r = []) => {
                        const {
                            errors: t
                        } = await ee.current(I(O), Z.current, {
                            criteriaMode: v,
                            names: r,
                            fields: J(j.current, O.current)
                        });
                        for (const n of e) {
                            const e = b(t, n);
                            e ? M(de.current.errors, n, e) : z(de.current.errors, n)
                        }
                        return t
                    }), [v]),
                    Re = async e => {
                        for (const r in e) {
                            const t = e[r];
                            if (t) {
                                const e = t._f,
                                    r = k(t, "_f");
                                if (e) {
                                    const r = await me(t, se);
                                    r[e.name] ? (M(de.current.errors, e.name, r[e.name]), z(W.current, e.name)) : b(L.current, e.name) && (M(W.current, e.name, !0), z(de.current.errors, e.name))
                                }
                                r && await Re(r)
                            }
                        }
                    },
                    we = n.useCallback((async (e, r = {}) => {
                        const t = d(e) ? Object.keys(O.current) : C(e);
                        let n, s = {};
                        return p.current.next({
                            isValidating: !0
                        }), ee.current ? (s = await Ae(t, d(e) ? void 0 : t), n = t.every((e => !b(s, e)))) : d(e) ? (await Re(O.current), n = S(de.current.errors)) : n = (await Promise.all(t.filter((e => b(O.current, e))).map((async e => await _e(e, null))))).every(Boolean), p.current.next(Object.assign(Object.assign({}, G(e) ? {
                            name: e
                        } : {}), {
                            errors: de.current.errors,
                            isValidating: !1,
                            isValid: ee.current ? S(s) : be()
                        })), !n && r.shouldFocus && U(O.current, (e => b(de.current.errors, e)), t), n
                    }), [Ae, _e]),
                    Se = n.useCallback(((e, r, t) => Object.entries(r).forEach((([r, n]) => {
                        const s = `${e}.${r}`,
                            u = b(O.current, s);
                        re.current.has(e) || !H(n) || u && !u._f ? Se(s, n, t) : Oe(s, n, t, !0, !u)
                    }))), [we]),
                    xe = e => Q.current || N.current.has(e) || N.current.has((e.match(/\w+/) || [])[0]),
                    Ce = (e, r, t, n) => {
                        const s = b(O.current, e),
                            u = d(s._f.value) ? b(q.current, e) : s._f.value;
                        return s && !d(u) ? t && t.defaultChecked ? s._f.value = ce(s) : o(re.current, e) ? s._f.value = u : Oe(e, u) : s._f.value = ce(s), (!d(u) || n) && ae(r, s._f.mount) && !ne.isOnSubmit && s && fe.current.isValid && me(s, se).then((r => {
                            S(r) ? M(W.current, e, !0) : z(W.current, e), de.current.isValid !== be() && oe(Object.assign(Object.assign({}, de.current), {
                                isValid: be()
                            }))
                        })), u
                    },
                    Fe = n.useCallback((async ({
                        type: e,
                        target: t,
                        target: {
                            value: n,
                            type: u
                        }
                    }) => {
                        let c, a, i = t.name;
                        const o = b(O.current, i);
                        if (o) {
                            let f = u ? ce(o) : void 0;
                            f = d(f) ? n : f;
                            const g = e === m.BLUR,
                                {
                                    isOnBlur: y,
                                    isOnChange: h
                                } = ge(r),
                                j = !ae(o._f, o._f.mount) && !ee.current && !b(de.current.errors, i) || ie(Object.assign({
                                    isBlurEvent: g,
                                    isTouched: !!b(de.current.touchedFields, i),
                                    isSubmitted: de.current.isSubmitted,
                                    isReValidateOnBlur: y,
                                    isReValidateOnChange: h
                                }, ne)),
                                V = !g && xe(i);
                            d(f) || (o._f.value = f);
                            const k = ke(i, o._f.value, !1);
                            g && !b(de.current.touchedFields, i) && (M(de.current.touchedFields, i, !0), fe.current.touchedFields && (k.touchedFields = de.current.touchedFields));
                            let A = !S(k) || V;
                            if (j) return !g && _.current.next({
                                name: i,
                                type: e,
                                formValues: De()
                            }), A && p.current.next(V ? {
                                name: i
                            } : Object.assign(Object.assign({}, k), {
                                name: i
                            }));
                            if (p.current.next({
                                    isValidating: !0
                                }), ee.current) {
                                const {
                                    errors: e
                                } = await ee.current(I(O), Z.current, {
                                    criteriaMode: v,
                                    fields: J([i], O.current),
                                    names: [i]
                                }), r = de.current.isValid;
                                if (c = b(e, i), s(t) && !c) {
                                    const r = l(i),
                                        t = b(e, r, {});
                                    t.type && t.message && (c = t), (t || b(de.current.errors, r)) && (i = r)
                                }
                                a = S(e), r !== a && (A = !0)
                            } else c = (await me(o, se))[i];
                            !g && _.current.next({
                                name: i,
                                type: e,
                                formValues: De()
                            }), ve(i, c, A, k, a, V)
                        }
                    }), []),
                    De = e => {
                        const r = Object.assign(Object.assign({}, q.current), I(O));
                        return d(e) ? r : G(e) ? b(r, e) : e.map((e => b(r, e)))
                    },
                    Ee = n.useCallback((async (e = {}) => {
                        const r = de.current.isValid;
                        if (t) {
                            const {
                                errors: r
                            } = await ee.current(Object.assign(Object.assign({}, I(O)), e), Z.current, {
                                criteriaMode: v,
                                fields: J(j.current, O.current)
                            });
                            de.current.isValid = S(r)
                        } else be();
                        r !== de.current.isValid && p.current.next({
                            isValid: de.current.isValid
                        })
                    }), [v]),
                    Be = n.useCallback(((e, r, t, n) => {
                        const s = Array.isArray(e),
                            u = n || T.current ? Object.assign(Object.assign({}, q.current), n || I(O)) : d(r) ? q.current : s ? r : {
                                [e]: r
                            };
                        if (d(e)) return t && (Q.current = !0), u;
                        const c = [];
                        for (const a of C(e)) t && N.current.add(a), c.push(b(u, a));
                        return s ? c : c[0]
                    }), []),
                    Ne = (e, r = {}) => {
                        for (const t of e ? C(e) : Object.keys(j.current)) j.current.delete(t), re.current.delete(t), b(O.current, t) && (r.keepIsValid || (z(L.current, t), z(W.current, t)), !r.keepError && z(de.current.errors, t), !r.keepValue && z(O.current, t), !r.keepDirty && z(de.current.dirtyFields, t), !r.keepTouched && z(de.current.touchedFields, t), !h && !r.keepDefaultValue && z(q.current, t), _.current.next({
                            name: t,
                            formValues: De()
                        }));
                        p.current.next(Object.assign(Object.assign(Object.assign({}, de.current), r.keepDirty ? {
                            isDirty: Ve()
                        } : {}), ee.current ? {} : {
                            isValid: be()
                        })), !r.keepIsValid && Ee()
                    },
                    Te = n.useCallback(((e, r = {}) => {
                        const t = b(O.current, e);
                        return M(O.current, e, {
                            _f: Object.assign(Object.assign(Object.assign({}, t && t._f ? t._f : {
                                ref: {
                                    name: e
                                }
                            }), {
                                name: e,
                                mount: !0
                            }), r)
                        }), ae(r, !0) && M(L.current, e, !0), j.current.add(e), !t && Ce(e, r), pe ? {
                            name: e
                        } : {
                            name: e,
                            onChange: Fe,
                            onBlur: Fe,
                            ref: t => {
                                if (t)((e, r, t) => {
                                    Te(e, t);
                                    let n = b(O.current, e);
                                    const s = he(r);
                                    if (r === n._f.ref || F && ye(n._f.ref) && !ye(r) || s && Array.isArray(n._f.refs) && f(n._f.refs).find((e => e === r))) return;
                                    n = {
                                        _f: s ? Object.assign(Object.assign({}, n._f), {
                                            refs: [...f(n._f.refs || []).filter((e => ye(e) && document.contains(e))), r],
                                            ref: {
                                                type: r.type,
                                                name: e
                                            }
                                        }) : Object.assign(Object.assign({}, n._f), {
                                            ref: r
                                        })
                                    }, M(O.current, e, n);
                                    const u = Ce(e, t, r, !0);
                                    (s && Array.isArray(u) ? !P(b(O.current, e)._f.value, u) : d(b(O.current, e)._f.value)) && (b(O.current, e)._f.value = ce(b(O.current, e)))
                                })(e, t, r);
                                else {
                                    const t = b(O.current, e, {}),
                                        n = h || r.shouldUnregister;
                                    t._f && (t._f.mount = !1, d(t._f.value) && (t._f.value = t._f.ref.value)), (o(re.current, e) ? n && !B.current : n) && V.current.add(e)
                                }
                            }
                        }
                    }), []),
                    Le = n.useCallback(((e, r) => async t => {
                        t && (t.preventDefault && t.preventDefault(), t.persist && t.persist());
                        let n = !0,
                            s = I(O);
                        p.current.next({
                            isSubmitting: !0
                        });
                        try {
                            if (ee.current) {
                                const {
                                    errors: e,
                                    values: r
                                } = await ee.current(s, Z.current, {
                                    criteriaMode: v,
                                    fields: J(j.current, O.current)
                                });
                                de.current.errors = e, s = r
                            } else await Re(O.current);
                            S(de.current.errors) && Object.keys(de.current.errors).every((e => b(s, e))) ? (p.current.next({
                                errors: {},
                                isSubmitting: !0
                            }), await e(s, t)) : (r && await r(de.current.errors, t), y && U(O.current, (e => b(de.current.errors, e)), j.current))
                        } catch (u) {
                            throw n = !1, u
                        } finally {
                            de.current.isSubmitted = !0, p.current.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: S(de.current.errors) && n,
                                submitCount: de.current.submitCount + 1,
                                errors: de.current.errors
                            })
                        }
                    }), [y, se, v]),
                    Me = n.useCallback((({
                        keepErrors: e,
                        keepDirty: r,
                        keepIsSubmitted: t,
                        keepTouched: n,
                        keepDefaultValues: s,
                        keepIsValid: u,
                        keepSubmitCount: c
                    }, a) => {
                        u || (W.current = {}, L.current = {}), N.current = new Set, Q.current = !1, p.current.next({
                            submitCount: c ? de.current.submitCount : 0,
                            isDirty: r ? de.current.isDirty : !!s && P(a, q.current),
                            isSubmitted: !!t && de.current.isSubmitted,
                            isValid: u ? de.current.isValid : !!Ee(a),
                            dirtyFields: r ? de.current.dirtyFields : {},
                            touchedFields: n ? de.current.touchedFields : {},
                            errors: e ? de.current.errors : {},
                            isSubmitting: !1,
                            isSubmitSuccessful: !1
                        })
                    }), []),
                    Ue = (e, r = "") => {
                        const t = b(O.current, r);
                        if ((!t || t && !t._f) && (!t && (H(e) || F && (e instanceof FileList || e instanceof Date)) && M(O.current, r, {
                                _f: {
                                    ref: {
                                        name: r,
                                        value: e
                                    },
                                    value: e,
                                    name: r
                                }
                            }), Array.isArray(e) || a(e))) {
                            r && !b(O.current, r) && M(O.current, r, Array.isArray(e) ? [] : {});
                            for (const t in e) Ue(e[t], r + (r ? "." : "") + t)
                        }
                    };
                return n.useEffect((() => {
                    !h && Ue(q.current);
                    const e = p.current.subscribe({
                            next(e) {
                                x(e, fe.current, !0) && (de.current = Object.assign(Object.assign({}, de.current), e), oe(de.current))
                            }
                        }),
                        r = R.current.subscribe({
                            next(e) {
                                if (e.fields && e.name && fe.current.isValid) {
                                    const r = I(O);
                                    M(r, e.name, e.fields), Ee(r)
                                }
                            }
                        });
                    return ee.current && fe.current.isValid && Ee(), () => {
                        _.current.unsubscribe(), e.unsubscribe(), r.unsubscribe()
                    }
                }), []), n.useEffect((() => {
                    const e = e => !ye(e) || !document.contains(e);
                    T.current = !0;
                    for (const r of V.current) {
                        const t = b(O.current, r);
                        t && (t._f.refs ? t._f.refs.every(e) : e(t._f.ref)) && Ne(r)
                    }
                    V.current = new Set
                })), {
                    control: n.useMemo((() => ({
                        register: Te,
                        isWatchAllRef: Q,
                        inFieldArrayActionRef: B,
                        watchFieldsRef: N,
                        getIsDirty: Ve,
                        formStateSubjectRef: p,
                        fieldArraySubjectRef: R,
                        controllerSubjectRef: A,
                        watchSubjectRef: _,
                        watchInternal: Be,
                        fieldsRef: O,
                        validFieldsRef: W,
                        fieldsWithValidationRef: L,
                        fieldArrayNamesRef: re,
                        readFormStateRef: fe,
                        formStateRef: de,
                        defaultValuesRef: q,
                        fieldArrayDefaultValuesRef: E,
                        unregister: Ne,
                        shouldUnmount: h
                    })), []),
                    formState: w(D, ue, fe),
                    trigger: we,
                    register: Te,
                    handleSubmit: Le,
                    watch: n.useCallback(((e, r) => le(e) ? _.current.subscribe({
                        next: t => e(Be(void 0, r), t)
                    }) : Be(e, r, !0)), []),
                    setValue: n.useCallback(((e, r, t = {}) => {
                        const n = b(O.current, e),
                            s = re.current.has(e);
                        s && (R.current.next({
                            fields: r,
                            name: e,
                            isReset: !0
                        }), (fe.current.isDirty || fe.current.dirtyFields) && t.shouldDirty && (M(de.current.dirtyFields, e, $(r, b(q.current, e, []), b(de.current.dirtyFields, e, []))), p.current.next({
                            name: e,
                            dirtyFields: de.current.dirtyFields,
                            isDirty: Ve(e, r)
                        })), !r.length && M(O.current, e, []) && M(E.current, e, [])), (n && !n._f || s) && !u(r) ? Se(e, r, s ? {} : t) : Oe(e, r, t, !0, !n), xe(e) && p.current.next({}), _.current.next({
                            name: e,
                            formValues: De()
                        })
                    }), [Se]),
                    getValues: n.useCallback(De, []),
                    reset: n.useCallback(((e, r = {}) => {
                        const t = e || q.current;
                        if (F && !r.keepValues)
                            for (const s of j.current) {
                                const e = b(O.current, s);
                                if (e && e._f) {
                                    const r = Array.isArray(e._f.refs) ? e._f.refs[0] : e._f.ref;
                                    try {
                                        ye(r) && r.closest("form").reset();
                                        break
                                    } catch (n) {}
                                }
                            }!r.keepDefaultValues && (q.current = Object.assign({}, t)), r.keepValues || (O.current = {}, A.current.next({
                                values: Object.assign({}, t)
                            }), _.current.next({
                                formValues: Object.assign({}, t)
                            }), R.current.next({
                                fields: Object.assign({}, t),
                                isReset: !0
                            })), !r.keepDefaultValues && !h && Ue(Object.assign({}, t)), Me(r, e)
                    }), []),
                    clearErrors: n.useCallback((e => {
                        e ? C(e).forEach((e => z(de.current.errors, e))) : de.current.errors = {}, p.current.next({
                            errors: de.current.errors
                        })
                    }), []),
                    unregister: n.useCallback(Ne, []),
                    setError: n.useCallback(((e, r, t) => {
                        const n = ((b(O.current, e) || {
                            _f: {}
                        })._f || {}).ref;
                        M(de.current.errors, e, Object.assign(Object.assign({}, r), {
                            ref: n
                        })), p.current.next({
                            name: e,
                            errors: de.current.errors,
                            isValid: !1
                        }), t && t.shouldFocus && n && n.focus && n.focus()
                    }), []),
                    setFocus: n.useCallback((e => b(O.current, e)._f.ref.focus()), [])
                }
            }

            function ke(e) {
                const {
                    control: r,
                    name: t,
                    defaultValue: s
                } = e || {}, u = A(), c = n.useRef(t);
                c.current = t;
                const {
                    watchInternal: a,
                    watchSubjectRef: i
                } = r || u.control, [l, o] = n.useState(d(s) ? a(t) : s);
                return n.useEffect((() => {
                    a(t);
                    const e = i.current.subscribe({
                        next: ({
                            name: e,
                            formValues: r
                        }) => (!c.current || !e || C(c.current).some((r => e && r && (r.startsWith(e) || e.startsWith(r))))) && o(a(c.current, s, !1, r))
                    });
                    return () => e.unsubscribe()
                }), []), l
            }
        }
    }
]);