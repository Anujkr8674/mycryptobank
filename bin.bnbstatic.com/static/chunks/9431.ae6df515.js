"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e9b01b1f-041f-5db5-b2b5-60cc71341612")
    } catch (e) {}
}();
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [9431], {
        GBQx: (e, t, r) => {
            r.d(t, {
                FH: () => L,
                Op: () => S,
                as: () => M,
                lN: () => U,
                mN: () => De,
                xW: () => w
            });
            var s = r("DTvD"),
                a = e => "checkbox" === e.type,
                i = e => e instanceof Date,
                n = e => null == e;
            const o = e => "object" === typeof e;
            var l = e => !n(e) && !Array.isArray(e) && o(e) && !i(e),
                u = e => l(e) && e.target ? a(e.target) ? e.target.checked : e.target.value : e,
                c = (e, t) => e.has((e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
                d = e => Array.isArray(e) ? e.filter(Boolean) : [],
                f = e => void 0 === e,
                m = (e, t, r) => {
                    if (!t || !l(e)) return r;
                    const s = d(t.split(/[,[\].]+?/)).reduce(((e, t) => n(e) ? e : e[t]), e);
                    return f(s) || s === e ? f(e[t]) ? r : e[t] : s
                };
            const y = {
                    BLUR: "blur",
                    FOCUS_OUT: "focusout",
                    CHANGE: "change"
                },
                h = {
                    onBlur: "onBlur",
                    onChange: "onChange",
                    onSubmit: "onSubmit",
                    onTouched: "onTouched",
                    all: "all"
                },
                g = "max",
                v = "min",
                b = "maxLength",
                p = "minLength",
                _ = "pattern",
                V = "required",
                A = "validate",
                F = s.createContext(null),
                w = () => s.useContext(F),
                S = e => {
                    const {
                        children: t,
                        ...r
                    } = e;
                    return s.createElement(F.Provider, {
                        value: r
                    }, e.children)
                };
            var k = (e, t, r, s = !0) => {
                    const a = {};
                    for (const i in e) Object.defineProperty(a, i, {
                        get: () => {
                            const a = i;
                            return t[a] !== h.all && (t[a] = !s || h.all), r && (r[a] = !0), e[a]
                        }
                    });
                    return a
                },
                x = e => l(e) && !Object.keys(e).length,
                D = (e, t, r) => {
                    const {
                        name: s,
                        ...a
                    } = e;
                    return x(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((e => t[e] === (!r || h.all)))
                },
                C = e => Array.isArray(e) ? e : [e],
                O = (e, t, r) => r && t ? e === t : !e || !t || e === t || C(e).some((e => e && (e.startsWith(t) || t.startsWith(e))));

            function E(e) {
                const t = s.useRef(e);
                t.current = e, s.useEffect((() => {
                    const r = !e.disabled && t.current.subject.subscribe({
                        next: t.current.callback
                    });
                    return () => (e => {
                        e && e.unsubscribe()
                    })(r)
                }), [e.disabled])
            }

            function U(e) {
                const t = w(),
                    {
                        control: r = t.control,
                        disabled: a,
                        name: i,
                        exact: n
                    } = e || {},
                    [o, l] = s.useState(r._formState),
                    u = s.useRef({
                        isDirty: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    }),
                    c = s.useRef(i),
                    d = s.useRef(!0);
                c.current = i;
                return E({
                    disabled: a,
                    callback: s.useCallback((e => d.current && O(c.current, e.name, n) && D(e, u.current) && l({ ...r._formState,
                        ...e
                    })), [r, n]),
                    subject: r._subjects.state
                }), s.useEffect((() => (d.current = !0, () => {
                    d.current = !1
                })), []), k(o, r._proxyFormState, u.current, !1)
            }
            var T = e => "string" === typeof e,
                j = (e, t, r, s) => {
                    const a = Array.isArray(e);
                    return T(e) ? (s && t.watch.add(e), m(r, e)) : a ? e.map((e => (s && t.watch.add(e), m(r, e)))) : (s && (t.watchAll = !0), r)
                },
                B = e => "function" === typeof e,
                N = e => {
                    for (const t in e)
                        if (B(e[t])) return !0;
                    return !1
                };

            function L(e) {
                const t = w(),
                    {
                        control: r = t.control,
                        name: a,
                        defaultValue: i,
                        disabled: n,
                        exact: o
                    } = e || {},
                    u = s.useRef(a);
                u.current = a;
                const c = s.useCallback((e => {
                    if (O(u.current, e.name, o)) {
                        const t = j(u.current, r._names, e.values || r._formValues);
                        m(f(u.current) || l(t) && !N(t) ? { ...t
                        } : Array.isArray(t) ? [...t] : f(t) ? i : t)
                    }
                }), [r, o, i]);
                E({
                    disabled: n,
                    subject: r._subjects.watch,
                    callback: c
                });
                const [d, m] = s.useState(f(i) ? r._getWatch(a) : i);
                return s.useEffect((() => {
                    r._removeUnmounted()
                })), d
            }

            function M(e) {
                const t = w(),
                    {
                        name: r,
                        control: a = t.control,
                        shouldUnregister: i
                    } = e,
                    n = c(a._names.array, r),
                    o = L({
                        control: a,
                        name: r,
                        defaultValue: m(a._formValues, r, m(a._defaultValues, r, e.defaultValue)),
                        exact: !0
                    }),
                    l = U({
                        control: a,
                        name: r
                    }),
                    d = s.useRef(a.register(r, { ...e.rules,
                        value: o
                    }));
                return s.useEffect((() => {
                    const e = (e, t) => {
                        const r = m(a._fields, e);
                        r && (r._f.mount = t)
                    };
                    return e(r, !0), () => {
                        const t = a._options.shouldUnregister || i;
                        (n ? t && !a._stateFlags.action : t) ? a.unregister(r): e(r, !1)
                    }
                }), [r, a, n, i]), {
                    field: {
                        name: r,
                        value: o,
                        onChange: s.useCallback((e => {
                            d.current.onChange({
                                target: {
                                    value: u(e),
                                    name: r
                                },
                                type: y.CHANGE
                            })
                        }), [r]),
                        onBlur: s.useCallback((() => {
                            d.current.onBlur({
                                target: {
                                    value: m(a._formValues, r),
                                    name: r
                                },
                                type: y.BLUR
                            })
                        }), [r, a]),
                        ref: s.useCallback((e => {
                            const t = m(a._fields, r);
                            e && t && e.focus && (t._f.ref = {
                                focus: () => e.focus(),
                                setCustomValidity: t => e.setCustomValidity(t),
                                reportValidity: () => e.reportValidity()
                            })
                        }), [r, a._fields])
                    },
                    formState: l,
                    fieldState: Object.defineProperties({}, {
                        invalid: {
                            get: () => !!m(l.errors, r)
                        },
                        isDirty: {
                            get: () => !!m(l.dirtyFields, r)
                        },
                        isTouched: {
                            get: () => !!m(l.touchedFields, r)
                        },
                        error: {
                            get: () => m(l.errors, r)
                        }
                    })
                }
            }
            var R = (e, t, r, s, a) => t ? { ...r[e],
                    types: { ...r[e] && r[e].types ? r[e].types : {},
                        [s]: a || !0
                    }
                } : {},
                q = e => /^\w*$/.test(e),
                W = e => d(e.replace(/["|']|\]/g, "").split(/\.|\[/));

            function H(e, t, r) {
                let s = -1;
                const a = q(t) ? [t] : W(t),
                    i = a.length,
                    n = i - 1;
                for (; ++s < i;) {
                    const t = a[s];
                    let i = r;
                    if (s !== n) {
                        const r = e[t];
                        i = l(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : []
                    }
                    e[t] = i, e = e[t]
                }
                return e
            }
            const P = (e, t, r) => {
                for (const s of r || Object.keys(e)) {
                    const r = m(e, s);
                    if (r) {
                        const {
                            _f: e,
                            ...s
                        } = r;
                        if (e && t(e.name)) {
                            if (e.ref.focus && f(e.ref.focus())) break;
                            if (e.refs) {
                                e.refs[0].focus();
                                break
                            }
                        } else l(s) && P(s, t)
                    }
                }
            };
            var $ = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))));
            var G = "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document;

            function I(e) {
                let t;
                const r = Array.isArray(e);
                if (e instanceof Date) t = new Date(e);
                else if (e instanceof Set) t = new Set(e);
                else {
                    if (G && (e instanceof Blob || e instanceof FileList) || !r && !l(e)) return e;
                    t = r ? [] : {};
                    for (const r in e) t[r] = B(e[r]) ? e[r] : I(e[r])
                }
                return t
            }

            function Q(e, t) {
                const r = q(t) ? [t] : W(t),
                    s = 1 == r.length ? e : function(e, t) {
                        const r = t.slice(0, -1).length;
                        let s = 0;
                        for (; s < r;) e = f(e) ? s++ : e[t[s++]];
                        return e
                    }(e, r),
                    a = r[r.length - 1];
                let i;
                s && delete s[a];
                for (let n = 0; n < r.slice(0, -1).length; n++) {
                    let t, s = -1;
                    const a = r.slice(0, -(n + 1)),
                        o = a.length - 1;
                    for (n > 0 && (i = e); ++s < a.length;) {
                        const r = a[s];
                        t = t ? t[r] : e[r], o === s && (l(t) && x(t) || Array.isArray(t) && !t.filter((e => !f(e))).length) && (i ? delete i[r] : delete e[r]), i = t
                    }
                }
                return e
            }

            function z() {
                let e = [];
                return {
                    get observers() {
                        return e
                    },
                    next: t => {
                        for (const r of e) r.next(t)
                    },
                    subscribe: t => (e.push(t), {
                        unsubscribe: () => {
                            e = e.filter((e => e !== t))
                        }
                    }),
                    unsubscribe: () => {
                        e = []
                    }
                }
            }
            var J = e => n(e) || !o(e);

            function K(e, t) {
                if (J(e) || J(t)) return e === t;
                if (i(e) && i(t)) return e.getTime() === t.getTime();
                const r = Object.keys(e),
                    s = Object.keys(t);
                if (r.length !== s.length) return !1;
                for (const a of r) {
                    const r = e[a];
                    if (!s.includes(a)) return !1;
                    if ("ref" !== a) {
                        const e = t[a];
                        if (i(r) && i(e) || l(r) && l(e) || Array.isArray(r) && Array.isArray(e) ? !K(r, e) : r !== e) return !1
                    }
                }
                return !0
            }
            var X = e => ({
                    isOnSubmit: !e || e === h.onSubmit,
                    isOnBlur: e === h.onBlur,
                    isOnChange: e === h.onChange,
                    isOnAll: e === h.all,
                    isOnTouch: e === h.onTouched
                }),
                Y = e => "boolean" === typeof e,
                Z = e => "file" === e.type,
                ee = e => e instanceof HTMLElement,
                te = e => "select-multiple" === e.type,
                re = e => "radio" === e.type,
                se = e => re(e) || a(e),
                ae = e => ee(e) && e.isConnected;

            function ie(e, t = {}) {
                const r = Array.isArray(e);
                if (l(e) || r)
                    for (const s in e) Array.isArray(e[s]) || l(e[s]) && !N(e[s]) ? (t[s] = Array.isArray(e[s]) ? [] : {}, ie(e[s], t[s])) : n(e[s]) || (t[s] = !0);
                return t
            }

            function ne(e, t, r) {
                const s = Array.isArray(e);
                if (l(e) || s)
                    for (const a in e) Array.isArray(e[a]) || l(e[a]) && !N(e[a]) ? f(t) || J(r[a]) ? r[a] = Array.isArray(e[a]) ? ie(e[a], []) : { ...ie(e[a])
                    } : ne(e[a], n(t) ? {} : t[a], r[a]) : r[a] = !K(e[a], t[a]);
                return r
            }
            var oe = (e, t) => ne(e, t, ie(t));
            const le = {
                    value: !1,
                    isValid: !1
                },
                ue = {
                    value: !0,
                    isValid: !0
                };
            var ce = e => {
                    if (Array.isArray(e)) {
                        if (e.length > 1) {
                            const t = e.filter((e => e && e.checked && !e.disabled)).map((e => e.value));
                            return {
                                value: t,
                                isValid: !!t.length
                            }
                        }
                        return e[0].checked && !e[0].disabled ? e[0].attributes && !f(e[0].attributes.value) ? f(e[0].value) || "" === e[0].value ? ue : {
                            value: e[0].value,
                            isValid: !0
                        } : ue : le
                    }
                    return le
                },
                de = (e, {
                    valueAsNumber: t,
                    valueAsDate: r,
                    setValueAs: s
                }) => f(e) ? e : t ? "" === e ? NaN : +e : r && T(e) ? new Date(e) : s ? s(e) : e;
            const fe = {
                isValid: !1,
                value: null
            };
            var me = e => Array.isArray(e) ? e.reduce(((e, t) => t && t.checked && !t.disabled ? {
                isValid: !0,
                value: t.value
            } : e), fe) : fe;

            function ye(e) {
                const t = e.ref;
                if (!(e.refs ? e.refs.every((e => e.disabled)) : t.disabled)) return Z(t) ? t.files : re(t) ? me(e.refs).value : te(t) ? [...t.selectedOptions].map((({
                    value: e
                }) => e)) : a(t) ? ce(e.refs).value : de(f(t.value) ? e.ref.value : t.value, e)
            }
            var he = (e, t, r, s) => {
                    const a = {};
                    for (const i of e) {
                        const e = m(t, i);
                        e && H(a, i, e._f)
                    }
                    return {
                        criteriaMode: r,
                        names: [...e],
                        fields: a,
                        shouldUseNativeValidation: s
                    }
                },
                ge = e => e instanceof RegExp,
                ve = e => f(e) ? void 0 : ge(e) ? e.source : l(e) ? ge(e.value) ? e.value.source : e.value : e,
                be = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

            function pe(e, t, r) {
                const s = m(e, r);
                if (s || q(r)) return {
                    error: s,
                    name: r
                };
                const a = r.split(".");
                for (; a.length;) {
                    const s = a.join("."),
                        i = m(t, s),
                        n = m(e, s);
                    if (i && !Array.isArray(i) && r !== s) return {
                        name: r
                    };
                    if (n && n.type) return {
                        name: s,
                        error: n
                    };
                    a.pop()
                }
                return {
                    name: r
                }
            }
            var _e = (e, t, r, s, a) => !a.isOnAll && (!r && a.isOnTouch ? !(t || e) : (r ? s.isOnBlur : a.isOnBlur) ? !e : !(r ? s.isOnChange : a.isOnChange) || e),
                Ve = (e, t) => !d(m(e, t)).length && Q(e, t),
                Ae = e => T(e) || s.isValidElement(e);

            function Fe(e, t, r = "validate") {
                if (Ae(e) || Array.isArray(e) && e.every(Ae) || Y(e) && !e) return {
                    type: r,
                    message: Ae(e) ? e : "",
                    ref: t
                }
            }
            var we = e => l(e) && !ge(e) ? e : {
                    value: e,
                    message: ""
                },
                Se = async (e, t, r, s) => {
                    const {
                        ref: i,
                        refs: o,
                        required: u,
                        maxLength: c,
                        minLength: d,
                        min: f,
                        max: m,
                        pattern: y,
                        validate: h,
                        name: F,
                        valueAsNumber: w,
                        mount: S,
                        disabled: k
                    } = e._f;
                    if (!S || k) return {};
                    const D = o ? o[0] : i,
                        C = e => {
                            s && D.reportValidity && (D.setCustomValidity(Y(e) ? "" : e || " "), D.reportValidity())
                        },
                        O = {},
                        E = re(i),
                        U = a(i),
                        j = E || U,
                        N = (w || Z(i)) && !i.value || "" === t || Array.isArray(t) && !t.length,
                        L = R.bind(null, F, r, O),
                        M = (e, t, r, s = b, a = p) => {
                            const n = e ? t : r;
                            O[F] = {
                                type: e ? s : a,
                                message: n,
                                ref: i,
                                ...L(e ? s : a, n)
                            }
                        };
                    if (u && (!j && (N || n(t)) || Y(t) && !t || U && !ce(o).isValid || E && !me(o).isValid)) {
                        const {
                            value: e,
                            message: t
                        } = Ae(u) ? {
                            value: !!u,
                            message: u
                        } : we(u);
                        if (e && (O[F] = {
                                type: V,
                                message: t,
                                ref: D,
                                ...L(V, t)
                            }, !r)) return C(t), O
                    }
                    if (!N && (!n(f) || !n(m))) {
                        let e, s;
                        const a = we(m),
                            o = we(f);
                        if (isNaN(t)) {
                            const r = i.valueAsDate || new Date(t);
                            T(a.value) && (e = r > new Date(a.value)), T(o.value) && (s = r < new Date(o.value))
                        } else {
                            const r = i.valueAsNumber || +t;
                            n(a.value) || (e = r > a.value), n(o.value) || (s = r < o.value)
                        }
                        if ((e || s) && (M(!!e, a.message, o.message, g, v), !r)) return C(O[F].message), O
                    }
                    if ((c || d) && !N && T(t)) {
                        const e = we(c),
                            s = we(d),
                            a = !n(e.value) && t.length > e.value,
                            i = !n(s.value) && t.length < s.value;
                        if ((a || i) && (M(a, e.message, s.message), !r)) return C(O[F].message), O
                    }
                    if (y && !N && T(t)) {
                        const {
                            value: e,
                            message: s
                        } = we(y);
                        if (ge(e) && !t.match(e) && (O[F] = {
                                type: _,
                                message: s,
                                ref: i,
                                ...L(_, s)
                            }, !r)) return C(s), O
                    }
                    if (h)
                        if (B(h)) {
                            const e = Fe(await h(t), D);
                            if (e && (O[F] = { ...e,
                                    ...L(A, e.message)
                                }, !r)) return C(e.message), O
                        } else if (l(h)) {
                        let e = {};
                        for (const s in h) {
                            if (!x(e) && !r) break;
                            const a = Fe(await h[s](t), D, s);
                            a && (e = { ...a,
                                ...L(s, a.message)
                            }, C(a.message), r && (O[F] = e))
                        }
                        if (!x(e) && (O[F] = {
                                ref: D,
                                ...e
                            }, !r)) return O
                    }
                    return C(!0), O
                };
            const ke = {
                mode: h.onSubmit,
                reValidateMode: h.onChange,
                shouldFocusError: !0
            };

            function xe(e = {}) {
                let t, r = { ...ke,
                        ...e
                    },
                    s = {
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        errors: {}
                    },
                    o = {},
                    l = I(r.defaultValues) || {},
                    g = r.shouldUnregister ? {} : I(l),
                    v = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    b = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set
                    },
                    p = 0,
                    _ = {};
                const V = {
                        isDirty: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    },
                    A = {
                        watch: z(),
                        array: z(),
                        state: z()
                    },
                    F = X(r.mode),
                    w = X(r.reValidateMode),
                    S = r.criteriaMode === h.all,
                    k = async e => {
                        let t = !1;
                        return V.isValid && (t = r.resolver ? x((await N()).errors) : await L(o, !0), e || t === s.isValid || (s.isValid = t, A.state.next({
                            isValid: t
                        }))), t
                    },
                    D = (e, t) => (H(s.errors, e, t), A.state.next({
                        errors: s.errors
                    })),
                    O = (e, t, r, s) => {
                        const a = m(o, e);
                        if (a) {
                            const i = m(g, e, f(r) ? m(l, e) : r);
                            f(i) || s && s.defaultChecked || t ? H(g, e, t ? i : ye(a._f)) : q(e, i), v.mount && k()
                        }
                    },
                    E = (e, t, r, a, i) => {
                        let n = !1;
                        const o = {
                                name: e
                            },
                            u = m(s.touchedFields, e);
                        if (V.isDirty) {
                            const e = s.isDirty;
                            s.isDirty = o.isDirty = M(), n = e !== o.isDirty
                        }
                        if (V.dirtyFields && (!r || a)) {
                            const r = m(s.dirtyFields, e);
                            K(m(l, e), t) ? Q(s.dirtyFields, e) : H(s.dirtyFields, e, !0), o.dirtyFields = s.dirtyFields, n = n || r !== m(s.dirtyFields, e)
                        }
                        return r && !u && (H(s.touchedFields, e, r), o.touchedFields = s.touchedFields, n = n || V.touchedFields && u !== r), n && i && A.state.next(o), n ? o : {}
                    },
                    U = async (r, a, i, n, o) => {
                        const l = m(s.errors, a),
                            u = V.isValid && s.isValid !== i;
                        var c, d;
                        if (e.delayError && n ? (t = t || (c = D, d = e.delayError, (...e) => {
                                clearTimeout(p), p = window.setTimeout((() => c(...e)), d)
                            }), t(a, n)) : (clearTimeout(p), n ? H(s.errors, a, n) : Q(s.errors, a)), ((n ? !K(l, n) : l) || !x(o) || u) && !r) {
                            const e = { ...o,
                                ...u ? {
                                    isValid: i
                                } : {},
                                errors: s.errors,
                                name: a
                            };
                            s = { ...s,
                                ...e
                            }, A.state.next(e)
                        }
                        _[a]--, V.isValidating && !Object.values(_).some((e => e)) && (A.state.next({
                            isValidating: !1
                        }), _ = {})
                    },
                    N = async e => r.resolver ? await r.resolver({ ...g
                    }, r.context, he(e || b.mount, o, r.criteriaMode, r.shouldUseNativeValidation)) : {},
                    L = async (e, t, a = {
                        valid: !0
                    }) => {
                        for (const i in e) {
                            const n = e[i];
                            if (n) {
                                const {
                                    _f: e,
                                    ...i
                                } = n;
                                if (e) {
                                    const i = await Se(n, m(g, e.name), S, r.shouldUseNativeValidation);
                                    if (i[e.name] && (a.valid = !1, t)) break;
                                    t || (i[e.name] ? H(s.errors, e.name, i[e.name]) : Q(s.errors, e.name))
                                }
                                i && await L(i, t, a)
                            }
                        }
                        return a.valid
                    },
                    M = (e, t) => (e && t && H(g, e, t), !K(le(), l)),
                    R = (e, t, r) => {
                        const s = { ...v.mount ? g : f(t) ? l : T(e) ? {
                                [e]: t
                            } : t
                        };
                        return j(e, b, s, r)
                    },
                    q = (e, t, r = {}) => {
                        const s = m(o, e);
                        let i = t;
                        if (s) {
                            const r = s._f;
                            r && (!r.disabled && H(g, e, de(t, r)), i = G && ee(r.ref) && n(t) ? "" : t, te(r.ref) ? [...r.ref.options].forEach((e => e.selected = i.includes(e.value))) : r.refs ? a(r.ref) ? r.refs.length > 1 ? r.refs.forEach((e => !e.disabled && (e.checked = Array.isArray(i) ? !!i.find((t => t === e.value)) : i === e.value))) : r.refs[0] && (r.refs[0].checked = !!i) : r.refs.forEach((e => e.checked = e.value === i)) : Z(r.ref) ? r.ref.value = "" : (r.ref.value = i, r.ref.type || A.watch.next({
                                name: e
                            })))
                        }(r.shouldDirty || r.shouldTouch) && E(e, i, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && ne(e)
                    },
                    W = (e, t, r) => {
                        for (const s in t) {
                            const a = t[s],
                                n = `${e}.${s}`,
                                l = m(o, n);
                            !b.array.has(e) && J(a) && (!l || l._f) || i(a) ? q(n, a, r) : W(n, a, r)
                        }
                    },
                    re = (e, t, r = {}) => {
                        const a = m(o, e),
                            i = b.array.has(e),
                            u = I(t);
                        H(g, e, u), i ? (A.array.next({
                            name: e,
                            values: g
                        }), (V.isDirty || V.dirtyFields) && r.shouldDirty && (s.dirtyFields = oe(l, g), A.state.next({
                            name: e,
                            dirtyFields: s.dirtyFields,
                            isDirty: M(e, u)
                        }))) : !a || a._f || n(u) ? q(e, u, r) : W(e, u, r), $(e, b) && A.state.next({}), A.watch.next({
                            name: e
                        })
                    },
                    ie = async e => {
                        const t = e.target;
                        let a = t.name;
                        const i = m(o, a);
                        if (i) {
                            let n, l;
                            const c = t.type ? ye(i._f) : u(e),
                                d = e.type === y.BLUR || e.type === y.FOCUS_OUT,
                                f = !be(i._f) && !r.resolver && !m(s.errors, a) && !i._f.deps || _e(d, m(s.touchedFields, a), s.isSubmitted, w, F),
                                h = $(a, b, d);
                            H(g, a, c), d ? i._f.onBlur && i._f.onBlur(e) : i._f.onChange && i._f.onChange(e);
                            const v = E(a, c, d, !1),
                                p = !x(v) || h;
                            if (!d && A.watch.next({
                                    name: a,
                                    type: e.type
                                }), f) return p && A.state.next({
                                name: a,
                                ...h ? {} : v
                            });
                            if (!d && h && A.state.next({}), _[a] = (_[a], 1), A.state.next({
                                    isValidating: !0
                                }), r.resolver) {
                                const {
                                    errors: e
                                } = await N([a]), t = pe(s.errors, o, a), r = pe(e, o, t.name || a);
                                n = r.error, a = r.name, l = x(e)
                            } else n = (await Se(i, m(g, a), S, r.shouldUseNativeValidation))[a], l = await k(!0);
                            i._f.deps && ne(i._f.deps), U(!1, a, l, n, v)
                        }
                    },
                    ne = async (e, t = {}) => {
                        let a, i;
                        const n = C(e);
                        if (A.state.next({
                                isValidating: !0
                            }), r.resolver) {
                            const t = await (async e => {
                                const {
                                    errors: t
                                } = await N();
                                if (e)
                                    for (const r of e) {
                                        const e = m(t, r);
                                        e ? H(s.errors, r, e) : Q(s.errors, r)
                                    } else s.errors = t;
                                return t
                            })(f(e) ? e : n);
                            a = x(t), i = e ? !n.some((e => m(t, e))) : a
                        } else e ? (i = (await Promise.all(n.map((async e => {
                            const t = m(o, e);
                            return await L(t && t._f ? {
                                [e]: t
                            } : t)
                        })))).every(Boolean), (i || s.isValid) && k()) : i = a = await L(o);
                        return A.state.next({ ...!T(e) || V.isValid && a !== s.isValid ? {} : {
                                name: e
                            },
                            ...r.resolver ? {
                                isValid: a
                            } : {},
                            errors: s.errors,
                            isValidating: !1
                        }), t.shouldFocus && !i && P(o, (e => m(s.errors, e)), e ? n : b.mount), i
                    },
                    le = e => {
                        const t = { ...l,
                            ...v.mount ? g : {}
                        };
                        return f(e) ? t : T(e) ? m(t, e) : e.map((e => m(t, e)))
                    },
                    ue = (e, t) => ({
                        invalid: !!m((t || s).errors, e),
                        isDirty: !!m((t || s).dirtyFields, e),
                        isTouched: !!m((t || s).touchedFields, e),
                        error: m((t || s).errors, e)
                    }),
                    ce = (e, t = {}) => {
                        for (const a of e ? C(e) : b.mount) b.mount.delete(a), b.array.delete(a), m(o, a) && (t.keepValue || (Q(o, a), Q(g, a)), !t.keepError && Q(s.errors, a), !t.keepDirty && Q(s.dirtyFields, a), !t.keepTouched && Q(s.touchedFields, a), !r.shouldUnregister && !t.keepDefaultValue && Q(l, a));
                        A.watch.next({}), A.state.next({ ...s,
                            ...t.keepDirty ? {
                                isDirty: M()
                            } : {}
                        }), !t.keepIsValid && k()
                    },
                    fe = (e, t = {}) => {
                        let s = m(o, e);
                        const a = Y(t.disabled);
                        return H(o, e, {
                            _f: { ...s && s._f ? s._f : {
                                    ref: {
                                        name: e
                                    }
                                },
                                name: e,
                                mount: !0,
                                ...t
                            }
                        }), b.mount.add(e), s ? a && H(g, e, t.disabled ? void 0 : m(g, e, ye(s._f))) : O(e, !0, t.value), { ...a ? {
                                disabled: t.disabled
                            } : {},
                            ...r.shouldUseNativeValidation ? {
                                required: !!t.required,
                                min: ve(t.min),
                                max: ve(t.max),
                                minLength: ve(t.minLength),
                                maxLength: ve(t.maxLength),
                                pattern: ve(t.pattern)
                            } : {},
                            name: e,
                            onChange: ie,
                            onBlur: ie,
                            ref: a => {
                                if (a) {
                                    fe(e, t), s = m(o, e);
                                    const r = f(a.value) && a.querySelectorAll && a.querySelectorAll("input,select,textarea")[0] || a,
                                        i = se(r),
                                        n = s._f.refs || [];
                                    if (i ? n.find((e => e === r)) : r === s._f.ref) return;
                                    H(o, e, {
                                        _f: { ...s._f,
                                            ...i ? {
                                                refs: [...n.filter(ae), r, ...Array.isArray(m(l, e)) ? [{}] : []],
                                                ref: {
                                                    type: r.type,
                                                    name: e
                                                }
                                            } : {
                                                ref: r
                                            }
                                        }
                                    }), O(e, !1, void 0, r)
                                } else s = m(o, e, {}), s._f && (s._f.mount = !1), (r.shouldUnregister || t.shouldUnregister) && (!c(b.array, e) || !v.action) && b.unMount.add(e)
                            }
                        }
                    };
                return {
                    control: {
                        register: fe,
                        unregister: ce,
                        getFieldState: ue,
                        _executeSchema: N,
                        _getWatch: R,
                        _getDirty: M,
                        _updateValid: k,
                        _removeUnmounted: () => {
                            for (const e of b.unMount) {
                                const t = m(o, e);
                                t && (t._f.refs ? t._f.refs.every((e => !ae(e))) : !ae(t._f.ref)) && ce(e)
                            }
                            b.unMount = new Set
                        },
                        _updateFieldArray: (e, t = [], r, a, i = !0, n = !0) => {
                            if (a && r) {
                                if (v.action = !0, n && Array.isArray(m(o, e))) {
                                    const t = r(m(o, e), a.argA, a.argB);
                                    i && H(o, e, t)
                                }
                                if (V.errors && n && Array.isArray(m(s.errors, e))) {
                                    const t = r(m(s.errors, e), a.argA, a.argB);
                                    i && H(s.errors, e, t), Ve(s.errors, e)
                                }
                                if (V.touchedFields && n && Array.isArray(m(s.touchedFields, e))) {
                                    const t = r(m(s.touchedFields, e), a.argA, a.argB);
                                    i && H(s.touchedFields, e, t)
                                }
                                V.dirtyFields && (s.dirtyFields = oe(l, g)), A.state.next({
                                    isDirty: M(e, t),
                                    dirtyFields: s.dirtyFields,
                                    errors: s.errors,
                                    isValid: s.isValid
                                })
                            } else H(g, e, t)
                        },
                        _getFieldArray: t => d(m(v.mount ? g : l, t, e.shouldUnregister ? m(l, t, []) : [])),
                        _subjects: A,
                        _proxyFormState: V,
                        get _fields() {
                            return o
                        },
                        get _formValues() {
                            return g
                        },
                        get _stateFlags() {
                            return v
                        },
                        set _stateFlags(e) {
                            v = e
                        },
                        get _defaultValues() {
                            return l
                        },
                        get _names() {
                            return b
                        },
                        set _names(e) {
                            b = e
                        },
                        get _formState() {
                            return s
                        },
                        set _formState(e) {
                            s = e
                        },
                        get _options() {
                            return r
                        },
                        set _options(e) {
                            r = { ...r,
                                ...e
                            }
                        }
                    },
                    trigger: ne,
                    register: fe,
                    handleSubmit: (e, t) => async a => {
                        a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
                        let i = !0,
                            n = I(g);
                        A.state.next({
                            isSubmitting: !0
                        });
                        try {
                            if (r.resolver) {
                                const {
                                    errors: e,
                                    values: t
                                } = await N();
                                s.errors = e, n = t
                            } else await L(o);
                            x(s.errors) ? (A.state.next({
                                errors: {},
                                isSubmitting: !0
                            }), await e(n, a)) : (t && await t({ ...s.errors
                            }, a), r.shouldFocusError && P(o, (e => m(s.errors, e)), b.mount))
                        } catch (l) {
                            throw i = !1, l
                        } finally {
                            s.isSubmitted = !0, A.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: x(s.errors) && i,
                                submitCount: s.submitCount + 1,
                                errors: s.errors
                            })
                        }
                    },
                    watch: (e, t) => B(e) ? A.watch.subscribe({
                        next: r => e(R(void 0, t), r)
                    }) : R(e, t, !0),
                    setValue: re,
                    getValues: le,
                    reset: (t, r = {}) => {
                        const a = t || l,
                            i = I(a),
                            n = t && !x(t) ? i : l;
                        if (r.keepDefaultValues || (l = a), !r.keepValues) {
                            if (r.keepDirtyValues)
                                for (const e of b.mount) m(s.dirtyFields, e) ? H(n, e, m(g, e)) : re(e, m(n, e));
                            else {
                                if (G && f(t))
                                    for (const e of b.mount) {
                                        const t = m(o, e);
                                        if (t && t._f) {
                                            const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                            try {
                                                ee(e) && e.closest("form").reset();
                                                break
                                            } catch (u) {}
                                        }
                                    }
                                o = {}
                            }
                            g = e.shouldUnregister ? r.keepDefaultValues ? I(l) : {} : i, A.array.next({
                                values: n
                            }), A.watch.next({
                                values: n
                            })
                        }
                        b = {
                            mount: new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, v.mount = !V.isValid || !!r.keepIsValid, v.watch = !!e.shouldUnregister, A.state.next({
                            submitCount: r.keepSubmitCount ? s.submitCount : 0,
                            isDirty: r.keepDirty || r.keepDirtyValues ? s.isDirty : !(!r.keepDefaultValues || K(t, l)),
                            isSubmitted: !!r.keepIsSubmitted && s.isSubmitted,
                            dirtyFields: r.keepDirty || r.keepDirtyValues ? s.dirtyFields : r.keepDefaultValues && t ? oe(l, t) : {},
                            touchedFields: r.keepTouched ? s.touchedFields : {},
                            errors: r.keepErrors ? s.errors : {},
                            isSubmitting: !1,
                            isSubmitSuccessful: !1
                        })
                    },
                    resetField: (e, t = {}) => {
                        m(o, e) && (f(t.defaultValue) ? re(e, m(l, e)) : (re(e, t.defaultValue), H(l, e, t.defaultValue)), t.keepTouched || Q(s.touchedFields, e), t.keepDirty || (Q(s.dirtyFields, e), s.isDirty = t.defaultValue ? M(e, m(l, e)) : M()), t.keepError || (Q(s.errors, e), V.isValid && k()), A.state.next({ ...s
                        }))
                    },
                    clearErrors: e => {
                        e ? C(e).forEach((e => Q(s.errors, e))) : s.errors = {}, A.state.next({
                            errors: s.errors
                        })
                    },
                    unregister: ce,
                    setError: (e, t, r) => {
                        const a = (m(o, e, {
                            _f: {}
                        })._f || {}).ref;
                        H(s.errors, e, { ...t,
                            ref: a
                        }), A.state.next({
                            name: e,
                            errors: s.errors,
                            isValid: !1
                        }), r && r.shouldFocus && a && a.focus && a.focus()
                    },
                    setFocus: (e, t = {}) => {
                        const r = m(o, e)._f,
                            s = r.refs ? r.refs[0] : r.ref;
                        t.shouldSelect ? s.select() : s.focus()
                    },
                    getFieldState: ue
                }
            }

            function De(e = {}) {
                const t = s.useRef(),
                    [r, a] = s.useState({
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        errors: {}
                    });
                t.current ? t.current.control._options = e : t.current = { ...xe(e),
                    formState: r
                };
                const i = t.current.control,
                    n = s.useCallback((e => {
                        D(e, i._proxyFormState, !0) && (i._formState = { ...i._formState,
                            ...e
                        }, a({ ...i._formState
                        }))
                    }), [i]);
                return E({
                    subject: i._subjects.state,
                    callback: n
                }), s.useEffect((() => {
                    i._stateFlags.mount || (i._proxyFormState.isValid && i._updateValid(), i._stateFlags.mount = !0), i._stateFlags.watch && (i._stateFlags.watch = !1, i._subjects.state.next({})), i._removeUnmounted()
                })), t.current.formState = k(r, i._proxyFormState), t.current
            }
        }
    }
]);
//# debugId=e9b01b1f-041f-5db5-b2b5-60cc71341612