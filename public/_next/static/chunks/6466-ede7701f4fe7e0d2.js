"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6466], {
        4076: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(64163),
                o = r(67778);

            function i(e) {
                if (!(0, n.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, n.getLocationOrigin)(),
                        r = new URL(e, t);
                    return r.origin === t && (0, o.hasBasePath)(r.pathname)
                } catch (e) {
                    return !1
                }
            }
        },
        5065: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("gamepad-2", [
                ["line", {
                    x1: "6",
                    x2: "10",
                    y1: "11",
                    y2: "11",
                    key: "1gktln"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "9",
                    y2: "13",
                    key: "qnk9ow"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "12",
                    y2: "12",
                    key: "krot7o"
                }],
                ["line", {
                    x1: "18",
                    x2: "18.01",
                    y1: "10",
                    y2: "10",
                    key: "1lcuu1"
                }],
                ["path", {
                    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
                    key: "mfqc10"
                }]
            ])
        },
        5492: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("cloud", [
                ["path", {
                    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
                    key: "p7xjir"
                }]
            ])
        },
        5619: (e, t, r) => {
            r.d(t, {
                UC: () => nh,
                In: () => nf,
                q7: () => ng,
                VF: () => ny,
                p4: () => nv,
                ZL: () => np,
                bL: () => nu,
                wn: () => nw,
                PP: () => nb,
                l9: () => nd,
                LM: () => nm
            });
            var n, o, i, a, l = r(713),
                s = r.t(l, 2),
                c = r(27004);

            function u(e, [t, r]) {
                return Math.min(r, Math.max(t, e))
            }
            var d = !!("undefined" != typeof window && window.document && window.document.createElement);

            function f(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
                }
            }

            function p(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }

            function h(e, t) {
                var r = p(e, t, "get");
                return r.get ? r.get.call(e) : r.value
            }

            function m(e, t, r) {
                var n = p(e, t, "set");
                if (n.set) n.set.call(e, r);
                else {
                    if (!n.writable) throw TypeError("attempted to set read only private field");
                    n.value = r
                }
                return r
            }
            var g = r(34941);

            function v(e, t = []) {
                let r = [],
                    n = () => {
                        let t = r.map(e => l.createContext(e));
                        return function(r) {
                            let n = r?.[e] || t;
                            return l.useMemo(() => ({
                                [`__scope${e}`]: {
                                    ...r,
                                    [e]: n
                                }
                            }), [r, n])
                        }
                    };
                return n.scopeName = e, [function(t, n) {
                    let o = l.createContext(n),
                        i = r.length;
                    r = [...r, n];
                    let a = t => {
                        let {
                            scope: r,
                            children: n,
                            ...a
                        } = t, s = r?.[e]?.[i] || o, c = l.useMemo(() => a, Object.values(a));
                        return (0, g.jsx)(s.Provider, {
                            value: c,
                            children: n
                        })
                    };
                    return a.displayName = t + "Provider", [a, function(r, a) {
                        let s = a?.[e]?.[i] || o,
                            c = l.useContext(s);
                        if (c) return c;
                        if (void 0 !== n) return n;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let n = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let o = r(e)[`__scope${n}`];
                                return {
                                    ...t,
                                    ...o
                                }
                            }, {});
                            return l.useMemo(() => ({
                                [`__scope${t.scopeName}`]: n
                            }), [n])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(n, ...t)]
            }
            var y = r(82634),
                b = r(49918),
                w = new WeakMap;

            function x(e, t) {
                if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
                let r = function(e, t) {
                    let r = e.length,
                        n = k(t),
                        o = n >= 0 ? n : r + n;
                    return o < 0 || o >= r ? -1 : o
                }(e, t);
                return -1 === r ? void 0 : e[r]
            }

            function k(e) {
                return e != e || 0 === e ? 0 : Math.trunc(e)
            }
            o = new WeakMap;
            var E = l.createContext(void 0),
                S = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    let r = (0, b.TL)(`Primitive.${t}`),
                        n = l.forwardRef((e, n) => {
                            let {
                                asChild: o,
                                ...i
                            } = e;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, g.jsx)(o ? r : t, {
                                ...i,
                                ref: n
                            })
                        });
                    return n.displayName = `Primitive.${t}`, {
                        ...e,
                        [t]: n
                    }
                }, {});

            function C(e) {
                let t = l.useRef(e);
                return l.useEffect(() => {
                    t.current = e
                }), l.useMemo(() => (...e) => t.current?.(...e), [])
            }
            var P = "dismissableLayer.update",
                M = l.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                O = l.forwardRef((e, t) => {
                    var r, n;
                    let {
                        disableOutsidePointerEvents: o = !1,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: c,
                        onInteractOutside: u,
                        onDismiss: d,
                        ...p
                    } = e, h = l.useContext(M), [m, v] = l.useState(null), b = null != (n = null == m ? void 0 : m.ownerDocument) ? n : null == (r = globalThis) ? void 0 : r.document, [, w] = l.useState({}), x = (0, y.s)(t, e => v(e)), k = Array.from(h.layers), [E] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), O = k.indexOf(E), A = m ? k.indexOf(m) : -1, T = h.layersWithOutsidePointerEventsDisabled.size > 0, _ = A >= O, I = function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            n = C(e),
                            o = l.useRef(!1),
                            i = l.useRef(() => {});
                        return l.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                R("dismissableLayer.pointerDownOutside", n, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (r.removeEventListener("click", i.current), i.current = t, r.addEventListener("click", i.current, {
                                            once: !0
                                        })) : t()
                                    } else r.removeEventListener("click", i.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    r.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), r.removeEventListener("pointerdown", e), r.removeEventListener("click", i.current)
                            }
                        }, [r, n]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            r = [...h.branches].some(e => e.contains(t));
                        _ && !r && (null == s || s(e), null == u || u(e), e.defaultPrevented || null == d || d())
                    }, b), N = function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            n = C(e),
                            o = l.useRef(!1);
                        return l.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && R("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return r.addEventListener("focusin", e), () => r.removeEventListener("focusin", e)
                        }, [r, n]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        ![...h.branches].some(e => e.contains(t)) && (null == c || c(e), null == u || u(e), e.defaultPrevented || null == d || d())
                    }, b);
                    return ! function(e, t = globalThis?.document) {
                        let r = C(e);
                        l.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && r(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [r, t])
                    }(e => {
                        A === h.layers.size - 1 && (null == a || a(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
                    }, b), l.useEffect(() => {
                        if (m) return o && (0 === h.layersWithOutsidePointerEventsDisabled.size && (i = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(m)), h.layers.add(m), j(), () => {
                            o && 1 === h.layersWithOutsidePointerEventsDisabled.size && (b.body.style.pointerEvents = i)
                        }
                    }, [m, b, o, h]), l.useEffect(() => () => {
                        m && (h.layers.delete(m), h.layersWithOutsidePointerEventsDisabled.delete(m), j())
                    }, [m, h]), l.useEffect(() => {
                        let e = () => w({});
                        return document.addEventListener(P, e), () => document.removeEventListener(P, e)
                    }, []), (0, g.jsx)(S.div, {
                        ...p,
                        ref: x,
                        style: {
                            pointerEvents: T ? _ ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: f(e.onFocusCapture, N.onFocusCapture),
                        onBlurCapture: f(e.onBlurCapture, N.onBlurCapture),
                        onPointerDownCapture: f(e.onPointerDownCapture, I.onPointerDownCapture)
                    })
                });

            function j() {
                let e = new CustomEvent(P);
                document.dispatchEvent(e)
            }

            function R(e, t, r, n) {
                let {
                    discrete: o
                } = n, i = r.originalEvent.target, a = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: r
                });
                if (t && i.addEventListener(e, t, {
                        once: !0
                    }), o) i && c.flushSync(() => i.dispatchEvent(a));
                else i.dispatchEvent(a)
            }
            O.displayName = "DismissableLayer", l.forwardRef((e, t) => {
                let r = l.useContext(M),
                    n = l.useRef(null),
                    o = (0, y.s)(t, n);
                return l.useEffect(() => {
                    let e = n.current;
                    if (e) return r.branches.add(e), () => {
                        r.branches.delete(e)
                    }
                }, [r.branches]), (0, g.jsx)(S.div, {
                    ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var A = 0;

            function T() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var _ = "focusScope.autoFocusOnMount",
                I = "focusScope.autoFocusOnUnmount",
                N = {
                    bubbles: !1,
                    cancelable: !0
                },
                L = l.forwardRef((e, t) => {
                    let {
                        loop: r = !1,
                        trapped: n = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        ...a
                    } = e, [s, c] = l.useState(null), u = C(o), d = C(i), f = l.useRef(null), p = (0, y.s)(t, e => c(e)), h = l.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    l.useEffect(() => {
                        if (n) {
                            let e = function(e) {
                                    if (h.paused || !s) return;
                                    let t = e.target;
                                    s.contains(t) ? f.current = t : F(f.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (h.paused || !s) return;
                                    let t = e.relatedTarget;
                                    null !== t && (s.contains(t) || F(f.current, {
                                        select: !0
                                    }))
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let r = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && F(s)
                            });
                            return s && r.observe(s, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                            }
                        }
                    }, [n, s, h.paused]), l.useEffect(() => {
                        if (s) {
                            W.add(h);
                            let e = document.activeElement;
                            if (!s.contains(e)) {
                                let t = new CustomEvent(_, N);
                                s.addEventListener(_, u), s.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = document.activeElement;
                                    for (let n of e)
                                        if (F(n, {
                                                select: t
                                            }), document.activeElement !== r) return
                                }(z(s).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && F(s))
                            }
                            return () => {
                                s.removeEventListener(_, u), setTimeout(() => {
                                    let t = new CustomEvent(I, N);
                                    s.addEventListener(I, d), s.dispatchEvent(t), t.defaultPrevented || F(null != e ? e : document.body, {
                                        select: !0
                                    }), s.removeEventListener(I, d), W.remove(h)
                                }, 0)
                            }
                        }
                    }, [s, u, d, h]);
                    let m = l.useCallback(e => {
                        if (!r && !n || h.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [n, i] = function(e) {
                                    let t = z(e);
                                    return [D(t, e), D(t.reverse(), e)]
                                }(t);
                            n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && F(i, {
                                select: !0
                            })) : (e.preventDefault(), r && F(n, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [r, n, h.paused]);
                    return (0, g.jsx)(S.div, {
                        tabIndex: -1,
                        ...a,
                        ref: p,
                        onKeyDown: m
                    })
                });

            function z(e) {
                let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; r.nextNode();) t.push(r.currentNode);
                return t
            }

            function D(e, t) {
                for (let r of e)
                    if (! function(e, t) {
                            let {
                                upTo: r
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === r || e !== r);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(r, {
                            upTo: t
                        })) return r
            }

            function F(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var r;
                    let n = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select()
                }
            }
            L.displayName = "FocusScope";
            var W = function() {
                let e = [];
                return {
                    add(t) {
                        let r = e[0];
                        t !== r && (null == r || r.pause()), (e = B(e, t)).unshift(t)
                    },
                    remove(t) {
                        var r;
                        null == (r = (e = B(e, t))[0]) || r.resume()
                    }
                }
            }();

            function B(e, t) {
                let r = [...e],
                    n = r.indexOf(t);
                return -1 !== n && r.splice(n, 1), r
            }
            var H = globalThis?.document ? l.useLayoutEffect : () => {},
                V = s[" useId ".trim().toString()] || (() => void 0),
                q = 0;

            function U(e) {
                let [t, r] = l.useState(V());
                return H(() => {
                    e || r(e => e ?? String(q++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            let K = ["top", "right", "bottom", "left"],
                $ = Math.min,
                G = Math.max,
                Y = Math.round,
                X = Math.floor,
                Q = e => ({
                    x: e,
                    y: e
                }),
                Z = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                J = {
                    start: "end",
                    end: "start"
                };

            function ee(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function et(e) {
                return e.split("-")[0]
            }

            function er(e) {
                return e.split("-")[1]
            }

            function en(e) {
                return "x" === e ? "y" : "x"
            }

            function eo(e) {
                return "y" === e ? "height" : "width"
            }
            let ei = new Set(["top", "bottom"]);

            function ea(e) {
                return ei.has(et(e)) ? "y" : "x"
            }

            function el(e) {
                return e.replace(/start|end/g, e => J[e])
            }
            let es = ["left", "right"],
                ec = ["right", "left"],
                eu = ["top", "bottom"],
                ed = ["bottom", "top"];

            function ef(e) {
                return e.replace(/left|right|bottom|top/g, e => Z[e])
            }

            function ep(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function eh(e) {
                let {
                    x: t,
                    y: r,
                    width: n,
                    height: o
                } = e;
                return {
                    width: n,
                    height: o,
                    top: r,
                    left: t,
                    right: t + n,
                    bottom: r + o,
                    x: t,
                    y: r
                }
            }

            function em(e, t, r) {
                let n, {
                        reference: o,
                        floating: i
                    } = e,
                    a = ea(t),
                    l = en(ea(t)),
                    s = eo(l),
                    c = et(t),
                    u = "y" === a,
                    d = o.x + o.width / 2 - i.width / 2,
                    f = o.y + o.height / 2 - i.height / 2,
                    p = o[s] / 2 - i[s] / 2;
                switch (c) {
                    case "top":
                        n = {
                            x: d,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        n = {
                            x: d,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        n = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        n = {
                            x: o.x - i.width,
                            y: f
                        };
                        break;
                    default:
                        n = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (er(t)) {
                    case "start":
                        n[l] -= p * (r && u ? -1 : 1);
                        break;
                    case "end":
                        n[l] += p * (r && u ? -1 : 1)
                }
                return n
            }
            let eg = async (e, t, r) => {
                let {
                    placement: n = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: a
                } = r, l = i.filter(Boolean), s = await (null == a.isRTL ? void 0 : a.isRTL(t)), c = await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: u,
                    y: d
                } = em(c, n, s), f = n, p = {}, h = 0;
                for (let r = 0; r < l.length; r++) {
                    let {
                        name: i,
                        fn: m
                    } = l[r], {
                        x: g,
                        y: v,
                        data: y,
                        reset: b
                    } = await m({
                        x: u,
                        y: d,
                        initialPlacement: n,
                        placement: f,
                        strategy: o,
                        middlewareData: p,
                        rects: c,
                        platform: a,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    u = null != g ? g : u, d = null != v ? v : d, p = {
                        ...p,
                        [i]: {
                            ...p[i],
                            ...y
                        }
                    }, b && h <= 50 && (h++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (c = !0 === b.rects ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects), {
                        x: u,
                        y: d
                    } = em(c, f, s)), r = -1)
                }
                return {
                    x: u,
                    y: d,
                    placement: f,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function ev(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: n,
                    y: o,
                    platform: i,
                    rects: a,
                    elements: l,
                    strategy: s
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: d = "floating",
                    altBoundary: f = !1,
                    padding: p = 0
                } = ee(t, e), h = ep(p), m = l[f ? "floating" === d ? "reference" : "floating" : d], g = eh(await i.getClippingRect({
                    element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
                    boundary: c,
                    rootBoundary: u,
                    strategy: s
                })), v = "floating" === d ? {
                    x: n,
                    y: o,
                    width: a.floating.width,
                    height: a.floating.height
                } : a.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                    x: 1,
                    y: 1
                }, w = eh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: l,
                    rect: v,
                    offsetParent: y,
                    strategy: s
                }) : v);
                return {
                    top: (g.top - w.top + h.top) / b.y,
                    bottom: (w.bottom - g.bottom + h.bottom) / b.y,
                    left: (g.left - w.left + h.left) / b.x,
                    right: (w.right - g.right + h.right) / b.x
                }
            }

            function ey(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function eb(e) {
                return K.some(t => e[t] >= 0)
            }
            let ew = new Set(["left", "top"]);
            async function ex(e, t) {
                let {
                    placement: r,
                    platform: n,
                    elements: o
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), a = et(r), l = er(r), s = "y" === ea(r), c = ew.has(a) ? -1 : 1, u = i && s ? -1 : 1, d = ee(t, e), {
                    mainAxis: f,
                    crossAxis: p,
                    alignmentAxis: h
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis
                };
                return l && "number" == typeof h && (p = "end" === l ? -1 * h : h), s ? {
                    x: p * u,
                    y: f * c
                } : {
                    x: f * c,
                    y: p * u
                }
            }

            function ek() {
                return "undefined" != typeof window
            }

            function eE(e) {
                return eP(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function eS(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function eC(e) {
                var t;
                return null == (t = (eP(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function eP(e) {
                return !!ek() && (e instanceof Node || e instanceof eS(e).Node)
            }

            function eM(e) {
                return !!ek() && (e instanceof Element || e instanceof eS(e).Element)
            }

            function eO(e) {
                return !!ek() && (e instanceof HTMLElement || e instanceof eS(e).HTMLElement)
            }

            function ej(e) {
                return !!ek() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof eS(e).ShadowRoot)
            }
            let eR = new Set(["inline", "contents"]);

            function eA(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: n,
                    display: o
                } = eH(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !eR.has(o)
            }
            let eT = new Set(["table", "td", "th"]),
                e_ = [":popover-open", ":modal"];

            function eI(e) {
                return e_.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }
            let eN = ["transform", "translate", "scale", "rotate", "perspective"],
                eL = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
                ez = ["paint", "layout", "strict", "content"];

            function eD(e) {
                let t = eF(),
                    r = eM(e) ? eH(e) : e;
                return eN.some(e => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || eL.some(e => (r.willChange || "").includes(e)) || ez.some(e => (r.contain || "").includes(e))
            }

            function eF() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }
            let eW = new Set(["html", "body", "#document"]);

            function eB(e) {
                return eW.has(eE(e))
            }

            function eH(e) {
                return eS(e).getComputedStyle(e)
            }

            function eV(e) {
                return eM(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function eq(e) {
                if ("html" === eE(e)) return e;
                let t = e.assignedSlot || e.parentNode || ej(e) && e.host || eC(e);
                return ej(t) ? t.host : t
            }

            function eU(e, t, r) {
                var n;
                void 0 === t && (t = []), void 0 === r && (r = !0);
                let o = function e(t) {
                        let r = eq(t);
                        return eB(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : eO(r) && eA(r) ? r : e(r)
                    }(e),
                    i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = eS(o);
                if (i) {
                    let e = eK(a);
                    return t.concat(a, a.visualViewport || [], eA(o) ? o : [], e && r ? eU(e) : [])
                }
                return t.concat(o, eU(o, [], r))
            }

            function eK(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function e$(e) {
                let t = eH(e),
                    r = parseFloat(t.width) || 0,
                    n = parseFloat(t.height) || 0,
                    o = eO(e),
                    i = o ? e.offsetWidth : r,
                    a = o ? e.offsetHeight : n,
                    l = Y(r) !== i || Y(n) !== a;
                return l && (r = i, n = a), {
                    width: r,
                    height: n,
                    $: l
                }
            }

            function eG(e) {
                return eM(e) ? e : e.contextElement
            }

            function eY(e) {
                let t = eG(e);
                if (!eO(t)) return Q(1);
                let r = t.getBoundingClientRect(),
                    {
                        width: n,
                        height: o,
                        $: i
                    } = e$(t),
                    a = (i ? Y(r.width) : r.width) / n,
                    l = (i ? Y(r.height) : r.height) / o;
                return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), {
                    x: a,
                    y: l
                }
            }
            let eX = Q(0);

            function eQ(e) {
                let t = eS(e);
                return eF() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : eX
            }

            function eZ(e, t, r, n) {
                var o;
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let i = e.getBoundingClientRect(),
                    a = eG(e),
                    l = Q(1);
                t && (n ? eM(n) && (l = eY(n)) : l = eY(e));
                let s = (void 0 === (o = r) && (o = !1), n && (!o || n === eS(a)) && o) ? eQ(a) : Q(0),
                    c = (i.left + s.x) / l.x,
                    u = (i.top + s.y) / l.y,
                    d = i.width / l.x,
                    f = i.height / l.y;
                if (a) {
                    let e = eS(a),
                        t = n && eM(n) ? eS(n) : n,
                        r = e,
                        o = eK(r);
                    for (; o && n && t !== r;) {
                        let e = eY(o),
                            t = o.getBoundingClientRect(),
                            n = eH(o),
                            i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            a = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                        c *= e.x, u *= e.y, d *= e.x, f *= e.y, c += i, u += a, o = eK(r = eS(o))
                    }
                }
                return eh({
                    width: d,
                    height: f,
                    x: c,
                    y: u
                })
            }

            function eJ(e, t) {
                let r = eV(e).scrollLeft;
                return t ? t.left + r : eZ(eC(e)).left + r
            }

            function e0(e, t) {
                let r = e.getBoundingClientRect();
                return {
                    x: r.left + t.scrollLeft - eJ(e, r),
                    y: r.top + t.scrollTop
                }
            }
            let e1 = new Set(["absolute", "fixed"]);

            function e2(e, t, r) {
                let n;
                if ("viewport" === t) n = function(e, t) {
                    let r = eS(e),
                        n = eC(e),
                        o = r.visualViewport,
                        i = n.clientWidth,
                        a = n.clientHeight,
                        l = 0,
                        s = 0;
                    if (o) {
                        i = o.width, a = o.height;
                        let e = eF();
                        (!e || e && "fixed" === t) && (l = o.offsetLeft, s = o.offsetTop)
                    }
                    let c = eJ(n);
                    if (c <= 0) {
                        let e = n.ownerDocument,
                            t = e.body,
                            r = getComputedStyle(t),
                            o = "CSS1Compat" === e.compatMode && parseFloat(r.marginLeft) + parseFloat(r.marginRight) || 0,
                            a = Math.abs(n.clientWidth - t.clientWidth - o);
                        a <= 25 && (i -= a)
                    } else c <= 25 && (i += c);
                    return {
                        width: i,
                        height: a,
                        x: l,
                        y: s
                    }
                }(e, r);
                else if ("document" === t) n = function(e) {
                    let t = eC(e),
                        r = eV(e),
                        n = e.ownerDocument.body,
                        o = G(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        i = G(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
                        a = -r.scrollLeft + eJ(e),
                        l = -r.scrollTop;
                    return "rtl" === eH(n).direction && (a += G(t.clientWidth, n.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: a,
                        y: l
                    }
                }(eC(e));
                else if (eM(t)) n = function(e, t) {
                    let r = eZ(e, !0, "fixed" === t),
                        n = r.top + e.clientTop,
                        o = r.left + e.clientLeft,
                        i = eO(e) ? eY(e) : Q(1),
                        a = e.clientWidth * i.x,
                        l = e.clientHeight * i.y;
                    return {
                        width: a,
                        height: l,
                        x: o * i.x,
                        y: n * i.y
                    }
                }(t, r);
                else {
                    let r = eQ(e);
                    n = {
                        x: t.x - r.x,
                        y: t.y - r.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return eh(n)
            }

            function e5(e) {
                return "static" === eH(e).position
            }

            function e6(e, t) {
                if (!eO(e) || "fixed" === eH(e).position) return null;
                if (t) return t(e);
                let r = e.offsetParent;
                return eC(e) === r && (r = r.ownerDocument.body), r
            }

            function e3(e, t) {
                var r;
                let n = eS(e);
                if (eI(e)) return n;
                if (!eO(e)) {
                    let t = eq(e);
                    for (; t && !eB(t);) {
                        if (eM(t) && !e5(t)) return t;
                        t = eq(t)
                    }
                    return n
                }
                let o = e6(e, t);
                for (; o && (r = o, eT.has(eE(r))) && e5(o);) o = e6(o, t);
                return o && eB(o) && e5(o) && !eD(o) ? n : o || function(e) {
                    let t = eq(e);
                    for (; eO(t) && !eB(t);) {
                        if (eD(t)) return t;
                        if (eI(t)) break;
                        t = eq(t)
                    }
                    return null
                }(e) || n
            }
            let e4 = async function(e) {
                let t = this.getOffsetParent || e3,
                    r = this.getDimensions,
                    n = await r(e.floating);
                return {
                    reference: function(e, t, r) {
                        let n = eO(t),
                            o = eC(t),
                            i = "fixed" === r,
                            a = eZ(e, !0, i, t),
                            l = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            s = Q(0);
                        if (n || !n && !i)
                            if (("body" !== eE(t) || eA(o)) && (l = eV(t)), n) {
                                let e = eZ(t, !0, i, t);
                                s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                            } else o && (s.x = eJ(o));
                        i && !n && o && (s.x = eJ(o));
                        let c = !o || n || i ? Q(0) : e0(o, l);
                        return {
                            x: a.left + l.scrollLeft - s.x - c.x,
                            y: a.top + l.scrollTop - s.y - c.y,
                            width: a.width,
                            height: a.height
                        }
                    }(e.reference, await t(e.floating), e.strategy),
                    floating: {
                        x: 0,
                        y: 0,
                        width: n.width,
                        height: n.height
                    }
                }
            }, e7 = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        elements: t,
                        rect: r,
                        offsetParent: n,
                        strategy: o
                    } = e, i = "fixed" === o, a = eC(n), l = !!t && eI(t.floating);
                    if (n === a || l && i) return r;
                    let s = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = Q(1),
                        u = Q(0),
                        d = eO(n);
                    if ((d || !d && !i) && (("body" !== eE(n) || eA(a)) && (s = eV(n)), eO(n))) {
                        let e = eZ(n);
                        c = eY(n), u.x = e.x + n.clientLeft, u.y = e.y + n.clientTop
                    }
                    let f = !a || d || i ? Q(0) : e0(a, s);
                    return {
                        width: r.width * c.x,
                        height: r.height * c.y,
                        x: r.x * c.x - s.scrollLeft * c.x + u.x + f.x,
                        y: r.y * c.y - s.scrollTop * c.y + u.y + f.y
                    }
                },
                getDocumentElement: eC,
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: r,
                        rootBoundary: n,
                        strategy: o
                    } = e, i = [..."clippingAncestors" === r ? eI(t) ? [] : function(e, t) {
                        let r = t.get(e);
                        if (r) return r;
                        let n = eU(e, [], !1).filter(e => eM(e) && "body" !== eE(e)),
                            o = null,
                            i = "fixed" === eH(e).position,
                            a = i ? eq(e) : e;
                        for (; eM(a) && !eB(a);) {
                            let t = eH(a),
                                r = eD(a);
                            r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && !!o && e1.has(o.position) || eA(a) && !r && function e(t, r) {
                                let n = eq(t);
                                return !(n === r || !eM(n) || eB(n)) && ("fixed" === eH(n).position || e(n, r))
                            }(e, a)) ? n = n.filter(e => e !== a) : o = t, a = eq(a)
                        }
                        return t.set(e, n), n
                    }(t, this._c) : [].concat(r), n], a = i[0], l = i.reduce((e, r) => {
                        let n = e2(t, r, o);
                        return e.top = G(n.top, e.top), e.right = $(n.right, e.right), e.bottom = $(n.bottom, e.bottom), e.left = G(n.left, e.left), e
                    }, e2(t, a, o));
                    return {
                        width: l.right - l.left,
                        height: l.bottom - l.top,
                        x: l.left,
                        y: l.top
                    }
                },
                getOffsetParent: e3,
                getElementRects: e4,
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    let {
                        width: t,
                        height: r
                    } = e$(e);
                    return {
                        width: t,
                        height: r
                    }
                },
                getScale: eY,
                isElement: eM,
                isRTL: function(e) {
                    return "rtl" === eH(e).direction
                }
            };

            function e9(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let e8 = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: r,
                            y: n,
                            placement: o,
                            rects: i,
                            platform: a,
                            elements: l,
                            middlewareData: s
                        } = t, {
                            element: c,
                            padding: u = 0
                        } = ee(e, t) || {};
                        if (null == c) return {};
                        let d = ep(u),
                            f = {
                                x: r,
                                y: n
                            },
                            p = en(ea(o)),
                            h = eo(p),
                            m = await a.getDimensions(c),
                            g = "y" === p,
                            v = g ? "clientHeight" : "clientWidth",
                            y = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
                            b = f[p] - i.reference[p],
                            w = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c)),
                            x = w ? w[v] : 0;
                        x && await (null == a.isElement ? void 0 : a.isElement(w)) || (x = l.floating[v] || i.floating[h]);
                        let k = x / 2 - m[h] / 2 - 1,
                            E = $(d[g ? "top" : "left"], k),
                            S = $(d[g ? "bottom" : "right"], k),
                            C = x - m[h] - S,
                            P = x / 2 - m[h] / 2 + (y / 2 - b / 2),
                            M = G(E, $(P, C)),
                            O = !s.arrow && null != er(o) && P !== M && i.reference[h] / 2 - (P < E ? E : S) - m[h] / 2 < 0,
                            j = O ? P < E ? P - E : P - C : 0;
                        return {
                            [p]: f[p] + j,
                            data: {
                                [p]: M,
                                centerOffset: P - M - j,
                                ...O && {
                                    alignmentOffset: j
                                }
                            },
                            reset: O
                        }
                    }
                }),
                te = (e, t, r) => {
                    let n = new Map,
                        o = {
                            platform: e7,
                            ...r
                        },
                        i = {
                            ...o.platform,
                            _c: n
                        };
                    return eg(e, t, {
                        ...o,
                        platform: i
                    })
                };
            var tt = "undefined" != typeof document ? l.useLayoutEffect : function() {};

            function tr(e, t) {
                let r, n, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((r = e.length) !== t.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!tr(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, o[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = o[n];
                        if (("_owner" !== r || !e.$$typeof) && !tr(e[r], t[r])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function tn(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function to(e, t) {
                let r = tn(e);
                return Math.round(t * r) / r
            }

            function ti(e) {
                let t = l.useRef(e);
                return tt(() => {
                    t.current = e
                }), t
            }
            let ta = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: r,
                            padding: n
                        } = "function" == typeof e ? e(t) : e;
                        return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? e8({
                            element: r.current,
                            padding: n
                        }).fn(t) : {} : r ? e8({
                            element: r,
                            padding: n
                        }).fn(t) : {}
                    }
                }),
                tl = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = 0), {
                            name: "offset",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let {
                                    x: o,
                                    y: i,
                                    placement: a,
                                    middlewareData: l
                                } = t, s = await ex(t, e);
                                return a === (null == (r = l.offset) ? void 0 : r.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                                    x: o + s.x,
                                    y: i + s.y,
                                    data: {
                                        ...s,
                                        placement: a
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                ts = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "shift",
                            options: e,
                            async fn(t) {
                                let {
                                    x: r,
                                    y: n,
                                    placement: o
                                } = t, {
                                    mainAxis: i = !0,
                                    crossAxis: a = !1,
                                    limiter: l = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: r
                                            } = e;
                                            return {
                                                x: t,
                                                y: r
                                            }
                                        }
                                    },
                                    ...s
                                } = ee(e, t), c = {
                                    x: r,
                                    y: n
                                }, u = await ev(t, s), d = ea(et(o)), f = en(d), p = c[f], h = c[d];
                                if (i) {
                                    let e = "y" === f ? "top" : "left",
                                        t = "y" === f ? "bottom" : "right",
                                        r = p + u[e],
                                        n = p - u[t];
                                    p = G(r, $(p, n))
                                }
                                if (a) {
                                    let e = "y" === d ? "top" : "left",
                                        t = "y" === d ? "bottom" : "right",
                                        r = h + u[e],
                                        n = h - u[t];
                                    h = G(r, $(h, n))
                                }
                                let m = l.fn({
                                    ...t,
                                    [f]: p,
                                    [d]: h
                                });
                                return {
                                    ...m,
                                    data: {
                                        x: m.x - r,
                                        y: m.y - n,
                                        enabled: {
                                            [f]: i,
                                            [d]: a
                                        }
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                tc = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            options: e,
                            fn(t) {
                                let {
                                    x: r,
                                    y: n,
                                    placement: o,
                                    rects: i,
                                    middlewareData: a
                                } = t, {
                                    offset: l = 0,
                                    mainAxis: s = !0,
                                    crossAxis: c = !0
                                } = ee(e, t), u = {
                                    x: r,
                                    y: n
                                }, d = ea(o), f = en(d), p = u[f], h = u[d], m = ee(l, t), g = "number" == typeof m ? {
                                    mainAxis: m,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...m
                                };
                                if (s) {
                                    let e = "y" === f ? "height" : "width",
                                        t = i.reference[f] - i.floating[e] + g.mainAxis,
                                        r = i.reference[f] + i.reference[e] - g.mainAxis;
                                    p < t ? p = t : p > r && (p = r)
                                }
                                if (c) {
                                    var v, y;
                                    let e = "y" === f ? "width" : "height",
                                        t = ew.has(et(o)),
                                        r = i.reference[d] - i.floating[e] + (t && (null == (v = a.offset) ? void 0 : v[d]) || 0) + (t ? 0 : g.crossAxis),
                                        n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (y = a.offset) ? void 0 : y[d]) || 0) - (t ? g.crossAxis : 0);
                                    h < r ? h = r : h > n && (h = n)
                                }
                                return {
                                    [f]: p,
                                    [d]: h
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                tu = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "flip",
                            options: e,
                            async fn(t) {
                                var r, n, o, i, a;
                                let {
                                    placement: l,
                                    middlewareData: s,
                                    rects: c,
                                    initialPlacement: u,
                                    platform: d,
                                    elements: f
                                } = t, {
                                    mainAxis: p = !0,
                                    crossAxis: h = !0,
                                    fallbackPlacements: m,
                                    fallbackStrategy: g = "bestFit",
                                    fallbackAxisSideDirection: v = "none",
                                    flipAlignment: y = !0,
                                    ...b
                                } = ee(e, t);
                                if (null != (r = s.arrow) && r.alignmentOffset) return {};
                                let w = et(l),
                                    x = ea(u),
                                    k = et(u) === u,
                                    E = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                                    S = m || (k || !y ? [ef(u)] : function(e) {
                                        let t = ef(e);
                                        return [el(e), t, el(t)]
                                    }(u)),
                                    C = "none" !== v;
                                !m && C && S.push(... function(e, t, r, n) {
                                    let o = er(e),
                                        i = function(e, t, r) {
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (r) return t ? ec : es;
                                                    return t ? es : ec;
                                                case "left":
                                                case "right":
                                                    return t ? eu : ed;
                                                default:
                                                    return []
                                            }
                                        }(et(e), "start" === r, n);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(el)))), i
                                }(u, y, v, E));
                                let P = [u, ...S],
                                    M = await ev(t, b),
                                    O = [],
                                    j = (null == (n = s.flip) ? void 0 : n.overflows) || [];
                                if (p && O.push(M[w]), h) {
                                    let e = function(e, t, r) {
                                        void 0 === r && (r = !1);
                                        let n = er(e),
                                            o = en(ea(e)),
                                            i = eo(o),
                                            a = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (a = ef(a)), [a, ef(a)]
                                    }(l, c, E);
                                    O.push(M[e[0]], M[e[1]])
                                }
                                if (j = [...j, {
                                        placement: l,
                                        overflows: O
                                    }], !O.every(e => e <= 0)) {
                                    let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                                        t = P[e];
                                    if (t && ("alignment" !== h || x === ea(t) || j.every(e => ea(e.placement) !== x || e.overflows[0] > 0))) return {
                                        data: {
                                            index: e,
                                            overflows: j
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let r = null == (i = j.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!r) switch (g) {
                                        case "bestFit": {
                                            let e = null == (a = j.filter(e => {
                                                if (C) {
                                                    let t = ea(e.placement);
                                                    return t === x || "y" === t
                                                }
                                                return !0
                                            }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : a[0];
                                            e && (r = e);
                                            break
                                        }
                                        case "initialPlacement":
                                            r = u
                                    }
                                    if (l !== r) return {
                                        reset: {
                                            placement: r
                                        }
                                    }
                                }
                                return {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                td = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "size",
                            options: e,
                            async fn(t) {
                                var r, n;
                                let o, i, {
                                        placement: a,
                                        rects: l,
                                        platform: s,
                                        elements: c
                                    } = t,
                                    {
                                        apply: u = () => {},
                                        ...d
                                    } = ee(e, t),
                                    f = await ev(t, d),
                                    p = et(a),
                                    h = er(a),
                                    m = "y" === ea(a),
                                    {
                                        width: g,
                                        height: v
                                    } = l.floating;
                                "top" === p || "bottom" === p ? (o = p, i = h === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (i = p, o = "end" === h ? "top" : "bottom");
                                let y = v - f.top - f.bottom,
                                    b = g - f.left - f.right,
                                    w = $(v - f[o], y),
                                    x = $(g - f[i], b),
                                    k = !t.middlewareData.shift,
                                    E = w,
                                    S = x;
                                if (null != (r = t.middlewareData.shift) && r.enabled.x && (S = b), null != (n = t.middlewareData.shift) && n.enabled.y && (E = y), k && !h) {
                                    let e = G(f.left, 0),
                                        t = G(f.right, 0),
                                        r = G(f.top, 0),
                                        n = G(f.bottom, 0);
                                    m ? S = g - 2 * (0 !== e || 0 !== t ? e + t : G(f.left, f.right)) : E = v - 2 * (0 !== r || 0 !== n ? r + n : G(f.top, f.bottom))
                                }
                                await u({
                                    ...t,
                                    availableWidth: S,
                                    availableHeight: E
                                });
                                let C = await s.getDimensions(c.floating);
                                return g !== C.width || v !== C.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                tf = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "hide",
                            options: e,
                            async fn(t) {
                                let {
                                    rects: r
                                } = t, {
                                    strategy: n = "referenceHidden",
                                    ...o
                                } = ee(e, t);
                                switch (n) {
                                    case "referenceHidden": {
                                        let e = ey(await ev(t, {
                                            ...o,
                                            elementContext: "reference"
                                        }), r.reference);
                                        return {
                                            data: {
                                                referenceHiddenOffsets: e,
                                                referenceHidden: eb(e)
                                            }
                                        }
                                    }
                                    case "escaped": {
                                        let e = ey(await ev(t, {
                                            ...o,
                                            altBoundary: !0
                                        }), r.floating);
                                        return {
                                            data: {
                                                escapedOffsets: e,
                                                escaped: eb(e)
                                            }
                                        }
                                    }
                                    default:
                                        return {}
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                tp = (e, t) => ({
                    ...ta(e),
                    options: [e, t]
                });
            var th = l.forwardRef((e, t) => {
                let {
                    children: r,
                    width: n = 10,
                    height: o = 5,
                    ...i
                } = e;
                return (0, g.jsx)(S.svg, {
                    ...i,
                    ref: t,
                    width: n,
                    height: o,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none",
                    children: e.asChild ? r : (0, g.jsx)("polygon", {
                        points: "0,0 30,0 15,10"
                    })
                })
            });
            th.displayName = "Arrow";
            var tm = "Popper",
                [tg, tv] = v(tm),
                [ty, tb] = tg(tm),
                tw = e => {
                    let {
                        __scopePopper: t,
                        children: r
                    } = e, [n, o] = l.useState(null);
                    return (0, g.jsx)(ty, {
                        scope: t,
                        anchor: n,
                        onAnchorChange: o,
                        children: r
                    })
                };
            tw.displayName = tm;
            var tx = "PopperAnchor",
                tk = l.forwardRef((e, t) => {
                    let {
                        __scopePopper: r,
                        virtualRef: n,
                        ...o
                    } = e, i = tb(tx, r), a = l.useRef(null), s = (0, y.s)(t, a), c = l.useRef(null);
                    return l.useEffect(() => {
                        let e = c.current;
                        c.current = (null == n ? void 0 : n.current) || a.current, e !== c.current && i.onAnchorChange(c.current)
                    }), n ? null : (0, g.jsx)(S.div, {
                        ...o,
                        ref: s
                    })
                });
            tk.displayName = tx;
            var tE = "PopperContent",
                [tS, tC] = tg(tE),
                tP = l.forwardRef((e, t) => {
                    var r, n, o, i, a, s, u, d;
                    let {
                        __scopePopper: f,
                        side: p = "bottom",
                        sideOffset: h = 0,
                        align: m = "center",
                        alignOffset: v = 0,
                        arrowPadding: b = 0,
                        avoidCollisions: w = !0,
                        collisionBoundary: x = [],
                        collisionPadding: k = 0,
                        sticky: E = "partial",
                        hideWhenDetached: P = !1,
                        updatePositionStrategy: M = "optimized",
                        onPlaced: O,
                        ...j
                    } = e, R = tb(tE, f), [A, T] = l.useState(null), _ = (0, y.s)(t, e => T(e)), [I, N] = l.useState(null), L = function(e) {
                        let [t, r] = l.useState(void 0);
                        return H(() => {
                            if (e) {
                                r({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let n, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        n = t.inlineSize, o = t.blockSize
                                    } else n = e.offsetWidth, o = e.offsetHeight;
                                    r({
                                        width: n,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            r(void 0)
                        }, [e]), t
                    }(I), z = null != (u = null == L ? void 0 : L.width) ? u : 0, D = null != (d = null == L ? void 0 : L.height) ? d : 0, F = "number" == typeof k ? k : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...k
                    }, W = Array.isArray(x) ? x : [x], B = W.length > 0, V = {
                        padding: F,
                        boundary: W.filter(tR),
                        altBoundary: B
                    }, {
                        refs: q,
                        floatingStyles: U,
                        placement: K,
                        isPositioned: Y,
                        middlewareData: Q
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: r = "absolute",
                            middleware: n = [],
                            platform: o,
                            elements: {
                                reference: i,
                                floating: a
                            } = {},
                            transform: s = !0,
                            whileElementsMounted: u,
                            open: d
                        } = e, [f, p] = l.useState({
                            x: 0,
                            y: 0,
                            strategy: r,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [h, m] = l.useState(n);
                        tr(h, n) || m(n);
                        let [g, v] = l.useState(null), [y, b] = l.useState(null), w = l.useCallback(e => {
                            e !== S.current && (S.current = e, v(e))
                        }, []), x = l.useCallback(e => {
                            e !== C.current && (C.current = e, b(e))
                        }, []), k = i || g, E = a || y, S = l.useRef(null), C = l.useRef(null), P = l.useRef(f), M = null != u, O = ti(u), j = ti(o), R = ti(d), A = l.useCallback(() => {
                            if (!S.current || !C.current) return;
                            let e = {
                                placement: t,
                                strategy: r,
                                middleware: h
                            };
                            j.current && (e.platform = j.current), te(S.current, C.current, e).then(e => {
                                let t = {
                                    ...e,
                                    isPositioned: !1 !== R.current
                                };
                                T.current && !tr(P.current, t) && (P.current = t, c.flushSync(() => {
                                    p(t)
                                }))
                            })
                        }, [h, t, r, j, R]);
                        tt(() => {
                            !1 === d && P.current.isPositioned && (P.current.isPositioned = !1, p(e => ({
                                ...e,
                                isPositioned: !1
                            })))
                        }, [d]);
                        let T = l.useRef(!1);
                        tt(() => (T.current = !0, () => {
                            T.current = !1
                        }), []), tt(() => {
                            if (k && (S.current = k), E && (C.current = E), k && E) {
                                if (O.current) return O.current(k, E, A);
                                A()
                            }
                        }, [k, E, A, O, M]);
                        let _ = l.useMemo(() => ({
                                reference: S,
                                floating: C,
                                setReference: w,
                                setFloating: x
                            }), [w, x]),
                            I = l.useMemo(() => ({
                                reference: k,
                                floating: E
                            }), [k, E]),
                            N = l.useMemo(() => {
                                let e = {
                                    position: r,
                                    left: 0,
                                    top: 0
                                };
                                if (!I.floating) return e;
                                let t = to(I.floating, f.x),
                                    n = to(I.floating, f.y);
                                return s ? {
                                    ...e,
                                    transform: "translate(" + t + "px, " + n + "px)",
                                    ...tn(I.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: r,
                                    left: t,
                                    top: n
                                }
                            }, [r, s, I.floating, f.x, f.y]);
                        return l.useMemo(() => ({
                            ...f,
                            update: A,
                            refs: _,
                            elements: I,
                            floatingStyles: N
                        }), [f, A, _, I, N])
                    }({
                        strategy: "fixed",
                        placement: p + ("center" !== m ? "-" + m : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return function(e, t, r, n) {
                                let o;
                                void 0 === n && (n = {});
                                let {
                                    ancestorScroll: i = !0,
                                    ancestorResize: a = !0,
                                    elementResize: l = "function" == typeof ResizeObserver,
                                    layoutShift: s = "function" == typeof IntersectionObserver,
                                    animationFrame: c = !1
                                } = n, u = eG(e), d = i || a ? [...u ? eU(u) : [], ...eU(t)] : [];
                                d.forEach(e => {
                                    i && e.addEventListener("scroll", r, {
                                        passive: !0
                                    }), a && e.addEventListener("resize", r)
                                });
                                let f = u && s ? function(e, t) {
                                        let r, n = null,
                                            o = eC(e);

                                        function i() {
                                            var e;
                                            clearTimeout(r), null == (e = n) || e.disconnect(), n = null
                                        }
                                        return ! function a(l, s) {
                                            void 0 === l && (l = !1), void 0 === s && (s = 1), i();
                                            let c = e.getBoundingClientRect(),
                                                {
                                                    left: u,
                                                    top: d,
                                                    width: f,
                                                    height: p
                                                } = c;
                                            if (l || t(), !f || !p) return;
                                            let h = X(d),
                                                m = X(o.clientWidth - (u + f)),
                                                g = {
                                                    rootMargin: -h + "px " + -m + "px " + -X(o.clientHeight - (d + p)) + "px " + -X(u) + "px",
                                                    threshold: G(0, $(1, s)) || 1
                                                },
                                                v = !0;

                                            function y(t) {
                                                let n = t[0].intersectionRatio;
                                                if (n !== s) {
                                                    if (!v) return a();
                                                    n ? a(!1, n) : r = setTimeout(() => {
                                                        a(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                1 !== n || e9(c, e.getBoundingClientRect()) || a(), v = !1
                                            }
                                            try {
                                                n = new IntersectionObserver(y, {
                                                    ...g,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                n = new IntersectionObserver(y, g)
                                            }
                                            n.observe(e)
                                        }(!0), i
                                    }(u, r) : null,
                                    p = -1,
                                    h = null;
                                l && (h = new ResizeObserver(e => {
                                    let [n] = e;
                                    n && n.target === u && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = h) || e.observe(t)
                                    })), r()
                                }), u && !c && h.observe(u), h.observe(t));
                                let m = c ? eZ(e) : null;
                                return c && function t() {
                                    let n = eZ(e);
                                    m && !e9(m, n) && r(), m = n, o = requestAnimationFrame(t)
                                }(), r(), () => {
                                    var e;
                                    d.forEach(e => {
                                        i && e.removeEventListener("scroll", r), a && e.removeEventListener("resize", r)
                                    }), null == f || f(), null == (e = h) || e.disconnect(), h = null, c && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === M
                            })
                        },
                        elements: {
                            reference: R.anchor
                        },
                        middleware: [tl({
                            mainAxis: h + D,
                            alignmentAxis: v
                        }), w && ts({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === E ? tc() : void 0,
                            ...V
                        }), w && tu({
                            ...V
                        }), td({
                            ...V,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: r,
                                    availableWidth: n,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: a
                                } = r.reference, l = t.floating.style;
                                l.setProperty("--radix-popper-available-width", "".concat(n, "px")), l.setProperty("--radix-popper-available-height", "".concat(o, "px")), l.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), l.setProperty("--radix-popper-anchor-height", "".concat(a, "px"))
                            }
                        }), I && tp({
                            element: I,
                            padding: b
                        }), tA({
                            arrowWidth: z,
                            arrowHeight: D
                        }), P && tf({
                            strategy: "referenceHidden",
                            ...V
                        })]
                    }), [Z, J] = tT(K), ee = C(O);
                    H(() => {
                        Y && (null == ee || ee())
                    }, [Y, ee]);
                    let et = null == (r = Q.arrow) ? void 0 : r.x,
                        er = null == (n = Q.arrow) ? void 0 : n.y,
                        en = (null == (o = Q.arrow) ? void 0 : o.centerOffset) !== 0,
                        [eo, ei] = l.useState();
                    return H(() => {
                        A && ei(window.getComputedStyle(A).zIndex)
                    }, [A]), (0, g.jsx)("div", {
                        ref: q.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: {
                            ...U,
                            transform: Y ? U.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: eo,
                            "--radix-popper-transform-origin": [null == (i = Q.transformOrigin) ? void 0 : i.x, null == (a = Q.transformOrigin) ? void 0 : a.y].join(" "),
                            ...(null == (s = Q.hide) ? void 0 : s.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, g.jsx)(tS, {
                            scope: f,
                            placedSide: Z,
                            onArrowChange: N,
                            arrowX: et,
                            arrowY: er,
                            shouldHideArrow: en,
                            children: (0, g.jsx)(S.div, {
                                "data-side": Z,
                                "data-align": J,
                                ...j,
                                ref: _,
                                style: {
                                    ...j.style,
                                    animation: Y ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            tP.displayName = tE;
            var tM = "PopperArrow",
                tO = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                tj = l.forwardRef(function(e, t) {
                    let {
                        __scopePopper: r,
                        ...n
                    } = e, o = tC(tM, r), i = tO[o.placedSide];
                    return (0, g.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            } [o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            } [o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, g.jsx)(th, {
                            ...n,
                            ref: t,
                            style: {
                                ...n.style,
                                display: "block"
                            }
                        })
                    })
                });

            function tR(e) {
                return null !== e
            }
            tj.displayName = tM;
            var tA = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var r, n, o, i, a;
                    let {
                        placement: l,
                        rects: s,
                        middlewareData: c
                    } = t, u = (null == (r = c.arrow) ? void 0 : r.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, f = u ? 0 : e.arrowHeight, [p, h] = tT(l), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    } [h], g = (null != (i = null == (n = c.arrow) ? void 0 : n.x) ? i : 0) + d / 2, v = (null != (a = null == (o = c.arrow) ? void 0 : o.y) ? a : 0) + f / 2, y = "", b = "";
                    return "bottom" === p ? (y = u ? m : "".concat(g, "px"), b = "".concat(-f, "px")) : "top" === p ? (y = u ? m : "".concat(g, "px"), b = "".concat(s.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"), b = u ? m : "".concat(v, "px")) : "left" === p && (y = "".concat(s.floating.width + f, "px"), b = u ? m : "".concat(v, "px")), {
                        data: {
                            x: y,
                            y: b
                        }
                    }
                }
            });

            function tT(e) {
                let [t, r = "center"] = e.split("-");
                return [t, r]
            }
            var t_ = l.forwardRef((e, t) => {
                var r, n;
                let {
                    container: o,
                    ...i
                } = e, [a, s] = l.useState(!1);
                H(() => s(!0), []);
                let u = o || a && (null == (n = globalThis) || null == (r = n.document) ? void 0 : r.body);
                return u ? c.createPortal((0, g.jsx)(S.div, {
                    ...i,
                    ref: t
                }), u) : null
            });
            t_.displayName = "Portal";
            var tI = s[" useInsertionEffect ".trim().toString()] || H;

            function tN({
                prop: e,
                defaultProp: t,
                onChange: r = () => {},
                caller: n
            }) {
                let [o, i, a] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let [r, n] = l.useState(e), o = l.useRef(r), i = l.useRef(t);
                    return tI(() => {
                        i.current = t
                    }, [t]), l.useEffect(() => {
                        o.current !== r && (i.current?.(r), o.current = r)
                    }, [r, o]), [r, n, i]
                }({
                    defaultProp: t,
                    onChange: r
                }), s = void 0 !== e, c = s ? e : o;
                {
                    let t = l.useRef(void 0 !== e);
                    l.useEffect(() => {
                        let e = t.current;
                        if (e !== s) {
                            let t = s ? "controlled" : "uncontrolled";
                            console.warn(`${n} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                        }
                        t.current = s
                    }, [s, n])
                }
                return [c, l.useCallback(t => {
                    if (s) {
                        let r = "function" == typeof t ? t(e) : t;
                        r !== e && a.current?.(r)
                    } else i(t)
                }, [s, e, i, a])]
            }
            Symbol("RADIX:SYNC_STATE");
            var tL = Object.freeze({
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal"
            });
            l.forwardRef((e, t) => (0, g.jsx)(S.span, {
                ...e,
                ref: t,
                style: {
                    ...tL,
                    ...e.style
                }
            })).displayName = "VisuallyHidden";
            var tz = function(e) {
                    return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
                },
                tD = new WeakMap,
                tF = new WeakMap,
                tW = {},
                tB = 0,
                tH = function(e) {
                    return e && (e.host || tH(e.parentNode))
                },
                tV = function(e, t, r, n) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var r = tH(e);
                        return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    tW[r] || (tW[r] = new WeakMap);
                    var i = tW[r],
                        a = [],
                        l = new Set,
                        s = new Set(o),
                        c = function(e) {
                            !e || l.has(e) || (l.add(e), c(e.parentNode))
                        };
                    o.forEach(c);
                    var u = function(e) {
                        !e || s.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (l.has(e)) u(e);
                            else try {
                                var t = e.getAttribute(n),
                                    o = null !== t && "false" !== t,
                                    s = (tD.get(e) || 0) + 1,
                                    c = (i.get(e) || 0) + 1;
                                tD.set(e, s), i.set(e, c), a.push(e), 1 === s && o && tF.set(e, !0), 1 === c && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return u(t), l.clear(), tB++,
                        function() {
                            a.forEach(function(e) {
                                var t = tD.get(e) - 1,
                                    o = i.get(e) - 1;
                                tD.set(e, t), i.set(e, o), t || (tF.has(e) || e.removeAttribute(n), tF.delete(e)), o || e.removeAttribute(r)
                            }), --tB || (tD = new WeakMap, tD = new WeakMap, tF = new WeakMap, tW = {})
                        }
                },
                tq = function(e, t, r) {
                    void 0 === r && (r = "data-aria-hidden");
                    var n = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || tz(e);
                    return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), tV(n, o, r, "aria-hidden")) : function() {
                        return null
                    }
                },
                tU = function() {
                    return (tU = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function tK(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                return r
            }
            Object.create;
            Object.create;
            var t$ = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
                tG = "width-before-scroll-bar";

            function tY(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var tX = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
                tQ = new WeakMap;

            function tZ(e) {
                return e
            }
            var tJ = function(e) {
                    void 0 === e && (e = {});
                    var t, r, n, o, i = (t = null, void 0 === r && (r = tZ), n = [], o = !1, {
                        read: function() {
                            if (o) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return n.length ? n[n.length - 1] : null
                        },
                        useMedium: function(e) {
                            var t = r(e, o);
                            return n.push(t),
                                function() {
                                    n = n.filter(function(e) {
                                        return e !== t
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (o = !0; n.length;) {
                                var t = n;
                                n = [], t.forEach(e)
                            }
                            n = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return n
                                }
                            }
                        },
                        assignMedium: function(e) {
                            o = !0;
                            var t = [];
                            if (n.length) {
                                var r = n;
                                n = [], r.forEach(e), t = n
                            }
                            var i = function() {
                                    var r = t;
                                    t = [], r.forEach(e)
                                },
                                a = function() {
                                    return Promise.resolve().then(i)
                                };
                            a(), n = {
                                push: function(e) {
                                    t.push(e), a()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), n
                                }
                            }
                        }
                    });
                    return i.options = tU({
                        async: !0,
                        ssr: !1
                    }, e), i
                }(),
                t0 = function() {},
                t1 = l.forwardRef(function(e, t) {
                    var r, n, o, i, a = l.useRef(null),
                        s = l.useState({
                            onScrollCapture: t0,
                            onWheelCapture: t0,
                            onTouchMoveCapture: t0
                        }),
                        c = s[0],
                        u = s[1],
                        d = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        h = e.removeScrollBar,
                        m = e.enabled,
                        g = e.shards,
                        v = e.sideCar,
                        y = e.noRelative,
                        b = e.noIsolation,
                        w = e.inert,
                        x = e.allowPinchZoom,
                        k = e.as,
                        E = e.gapMode,
                        S = tK(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        C = (r = [a, t], n = function(e) {
                            return r.forEach(function(t) {
                                return tY(t, e)
                            })
                        }, (o = (0, l.useState)(function() {
                            return {
                                value: null,
                                callback: n,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = n, i = o.facade, tX(function() {
                            var e = tQ.get(i);
                            if (e) {
                                var t = new Set(e),
                                    n = new Set(r),
                                    o = i.current;
                                t.forEach(function(e) {
                                    n.has(e) || tY(e, null)
                                }), n.forEach(function(e) {
                                    t.has(e) || tY(e, o)
                                })
                            }
                            tQ.set(i, r)
                        }, [r]), i),
                        P = tU(tU({}, S), c);
                    return l.createElement(l.Fragment, null, m && l.createElement(v, {
                        sideCar: tJ,
                        removeScrollBar: h,
                        shards: g,
                        noRelative: y,
                        noIsolation: b,
                        inert: w,
                        setCallbacks: u,
                        allowPinchZoom: !!x,
                        lockRef: a,
                        gapMode: E
                    }), d ? l.cloneElement(l.Children.only(f), tU(tU({}, P), {
                        ref: C
                    })) : l.createElement(void 0 === k ? "div" : k, tU({}, P, {
                        className: p,
                        ref: C
                    }), f))
                });
            t1.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, t1.classNames = {
                fullWidth: tG,
                zeroRight: t$
            };
            var t2 = function(e) {
                var t = e.sideCar,
                    r = tK(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var n = t.read();
                if (!n) throw Error("Sidecar medium not found");
                return l.createElement(n, tU({}, r))
            };
            t2.isSideCarExport = !0;
            var t5 = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(n) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = a || r.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, i;
                                (o = t).styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                t6 = function() {
                    var e = t5();
                    return function(t, r) {
                        l.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && r])
                    }
                },
                t3 = function() {
                    var e = t6();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                t4 = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                t7 = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                t9 = function(e) {
                    var t = window.getComputedStyle(document.body),
                        r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        n = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [t7(r), t7(n), t7(o)]
                },
                t8 = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return t4;
                    var t = t9(e),
                        r = document.documentElement.clientWidth,
                        n = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, n - r + t[2] - t[0])
                    }
                },
                re = t3(),
                rt = "data-scroll-locked",
                rr = function(e, t, r, n) {
                    var o = e.left,
                        i = e.top,
                        a = e.right,
                        l = e.gap;
                    return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(l, "px ").concat(n, ";\n  }\n  body[").concat(rt, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(l, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(t$, " {\n    right: ").concat(l, "px ").concat(n, ";\n  }\n  \n  .").concat(tG, " {\n    margin-right: ").concat(l, "px ").concat(n, ";\n  }\n  \n  .").concat(t$, " .").concat(t$, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(tG, " .").concat(tG, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(rt, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
                },
                rn = function() {
                    var e = parseInt(document.body.getAttribute(rt) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                ro = function() {
                    l.useEffect(function() {
                        return document.body.setAttribute(rt, (rn() + 1).toString()),
                            function() {
                                var e = rn() - 1;
                                e <= 0 ? document.body.removeAttribute(rt) : document.body.setAttribute(rt, e.toString())
                            }
                    }, [])
                },
                ri = function(e) {
                    var t = e.noRelative,
                        r = e.noImportant,
                        n = e.gapMode,
                        o = void 0 === n ? "margin" : n;
                    ro();
                    var i = l.useMemo(function() {
                        return t8(o)
                    }, [o]);
                    return l.createElement(re, {
                        styles: rr(i, !t, o, r ? "" : "!important")
                    })
                },
                ra = !1;
            if ("undefined" != typeof window) try {
                var rl = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ra = !0, !0
                    }
                });
                window.addEventListener("test", rl, rl), window.removeEventListener("test", rl, rl)
            } catch (e) {
                ra = !1
            }
            var rs = !!ra && {
                    passive: !1
                },
                rc = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var r = window.getComputedStyle(e);
                    return "hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t])
                },
                ru = function(e, t) {
                    var r = t.ownerDocument,
                        n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), rd(e, n)) {
                            var o = rf(e, n);
                            if (o[1] > o[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== r.body);
                    return !1
                },
                rd = function(e, t) {
                    return "v" === e ? rc(t, "overflowY") : rc(t, "overflowX")
                },
                rf = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                rp = function(e, t, r, n, o) {
                    var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        l = a * n,
                        s = r.target,
                        c = t.contains(s),
                        u = !1,
                        d = l > 0,
                        f = 0,
                        p = 0;
                    do {
                        if (!s) break;
                        var h = rf(e, s),
                            m = h[0],
                            g = h[1] - h[2] - a * m;
                        (m || g) && rd(e, s) && (f += g, p += m);
                        var v = s.parentNode;
                        s = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v
                    } while (!c && s !== document.body || c && (t.contains(s) || t === s));
                    return d && (o && 1 > Math.abs(f) || !o && l > f) ? u = !0 : !d && (o && 1 > Math.abs(p) || !o && -l > p) && (u = !0), u
                },
                rh = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                rm = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                rg = function(e) {
                    return e && "current" in e ? e.current : e
                },
                rv = 0,
                ry = [];
            let rb = (n = function(e) {
                var t = l.useRef([]),
                    r = l.useRef([0, 0]),
                    n = l.useRef(),
                    o = l.useState(rv++)[0],
                    i = l.useState(t3)[0],
                    a = l.useRef(e);
                l.useEffect(function() {
                    a.current = e
                }, [e]), l.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (function(e, t, r) {
                            if (r || 2 == arguments.length)
                                for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                            return e.concat(n || Array.prototype.slice.call(t))
                        })([e.lockRef.current], (e.shards || []).map(rg), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var s = l.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
                        var o, i = rh(e),
                            l = r.current,
                            s = "deltaX" in e ? e.deltaX : l[0] - i[0],
                            c = "deltaY" in e ? e.deltaY : l[1] - i[1],
                            u = e.target,
                            d = Math.abs(s) > Math.abs(c) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === u.type) return !1;
                        var f = ru(d, u);
                        if (!f) return !0;
                        if (f ? o = d : (o = "v" === d ? "h" : "v", f = ru(d, u)), !f) return !1;
                        if (!n.current && "changedTouches" in e && (s || c) && (n.current = o), !o) return !0;
                        var p = n.current || o;
                        return rp(p, t, e, "h" === p ? s : c, !0)
                    }, []),
                    c = l.useCallback(function(e) {
                        if (ry.length && ry[ry.length - 1] === i) {
                            var r = "deltaY" in e ? rm(e) : rh(e),
                                n = t.current.filter(function(t) {
                                    var n;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta, n[0] === r[0] && n[1] === r[1])
                                })[0];
                            if (n && n.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!n) {
                                var o = (a.current.shards || []).map(rg).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    u = l.useCallback(function(e, r, n, o) {
                        var i = {
                            name: e,
                            delta: r,
                            target: n,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(n)
                        };
                        t.current.push(i), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== i
                            })
                        }, 1)
                    }, []),
                    d = l.useCallback(function(e) {
                        r.current = rh(e), n.current = void 0
                    }, []),
                    f = l.useCallback(function(t) {
                        u(t.type, rm(t), t.target, s(t, e.lockRef.current))
                    }, []),
                    p = l.useCallback(function(t) {
                        u(t.type, rh(t), t.target, s(t, e.lockRef.current))
                    }, []);
                l.useEffect(function() {
                    return ry.push(i), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", c, rs), document.addEventListener("touchmove", c, rs), document.addEventListener("touchstart", d, rs),
                        function() {
                            ry = ry.filter(function(e) {
                                return e !== i
                            }), document.removeEventListener("wheel", c, rs), document.removeEventListener("touchmove", c, rs), document.removeEventListener("touchstart", d, rs)
                        }
                }, []);
                var h = e.removeScrollBar,
                    m = e.inert;
                return l.createElement(l.Fragment, null, m ? l.createElement(i, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, h ? l.createElement(ri, {
                    noRelative: e.noRelative,
                    gapMode: e.gapMode
                }) : null)
            }, tJ.useMedium(n), t2);
            var rw = l.forwardRef(function(e, t) {
                return l.createElement(t1, tU({}, e, {
                    ref: t,
                    sideCar: rb
                }))
            });
            rw.classNames = t1.classNames;
            var rx = [" ", "Enter", "ArrowUp", "ArrowDown"],
                rk = [" ", "Enter"],
                rE = "Select",
                [rS, rC, rP] = function(e) {
                    let t = e + "CollectionProvider",
                        [r, n] = v(t),
                        [o, i] = r(t, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        a = e => {
                            let {
                                scope: t,
                                children: r
                            } = e, n = l.useRef(null), i = l.useRef(new Map).current;
                            return (0, g.jsx)(o, {
                                scope: t,
                                itemMap: i,
                                collectionRef: n,
                                children: r
                            })
                        };
                    a.displayName = t;
                    let s = e + "CollectionSlot",
                        c = (0, b.TL)(s),
                        u = l.forwardRef((e, t) => {
                            let {
                                scope: r,
                                children: n
                            } = e, o = i(s, r), a = (0, y.s)(t, o.collectionRef);
                            return (0, g.jsx)(c, {
                                ref: a,
                                children: n
                            })
                        });
                    u.displayName = s;
                    let d = e + "CollectionItemSlot",
                        f = "data-radix-collection-item",
                        p = (0, b.TL)(d),
                        h = l.forwardRef((e, t) => {
                            let {
                                scope: r,
                                children: n,
                                ...o
                            } = e, a = l.useRef(null), s = (0, y.s)(t, a), c = i(d, r);
                            return l.useEffect(() => (c.itemMap.set(a, {
                                ref: a,
                                ...o
                            }), () => void c.itemMap.delete(a))), (0, g.jsx)(p, {
                                ...{
                                    [f]: ""
                                },
                                ref: s,
                                children: n
                            })
                        });
                    return h.displayName = d, [{
                        Provider: a,
                        Slot: u,
                        ItemSlot: h
                    }, function(t) {
                        let r = i(e + "CollectionConsumer", t);
                        return l.useCallback(() => {
                            let e = r.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll("[".concat(f, "]")));
                            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                        }, [r.collectionRef, r.itemMap])
                    }, n]
                }(rE),
                [rM, rO] = v(rE, [rP, tv]),
                rj = tv(),
                [rR, rA] = rM(rE),
                [rT, r_] = rM(rE),
                rI = e => {
                    let {
                        __scopeSelect: t,
                        children: r,
                        open: n,
                        defaultOpen: o,
                        onOpenChange: i,
                        value: a,
                        defaultValue: s,
                        onValueChange: c,
                        dir: u,
                        name: d,
                        autoComplete: f,
                        disabled: p,
                        required: h,
                        form: m
                    } = e, v = rj(t), [y, b] = l.useState(null), [w, x] = l.useState(null), [k, S] = l.useState(!1), C = function(e) {
                        let t = l.useContext(E);
                        return e || t || "ltr"
                    }(u), [P, M] = tN({
                        prop: n,
                        defaultProp: null != o && o,
                        onChange: i,
                        caller: rE
                    }), [O, j] = tN({
                        prop: a,
                        defaultProp: s,
                        onChange: c,
                        caller: rE
                    }), R = l.useRef(null), A = !y || m || !!y.closest("form"), [T, _] = l.useState(new Set), I = Array.from(T).map(e => e.props.value).join(";");
                    return (0, g.jsx)(tw, {
                        ...v,
                        children: (0, g.jsxs)(rR, {
                            required: h,
                            scope: t,
                            trigger: y,
                            onTriggerChange: b,
                            valueNode: w,
                            onValueNodeChange: x,
                            valueNodeHasChildren: k,
                            onValueNodeHasChildrenChange: S,
                            contentId: U(),
                            value: O,
                            onValueChange: j,
                            open: P,
                            onOpenChange: M,
                            dir: C,
                            triggerPointerDownPosRef: R,
                            disabled: p,
                            children: [(0, g.jsx)(rS.Provider, {
                                scope: t,
                                children: (0, g.jsx)(rT, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: l.useCallback(e => {
                                        _(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: l.useCallback(e => {
                                        _(t => {
                                            let r = new Set(t);
                                            return r.delete(e), r
                                        })
                                    }, []),
                                    children: r
                                })
                            }), A ? (0, g.jsxs)(na, {
                                "aria-hidden": !0,
                                required: h,
                                tabIndex: -1,
                                name: d,
                                autoComplete: f,
                                value: O,
                                onChange: e => j(e.target.value),
                                disabled: p,
                                form: m,
                                children: [void 0 === O ? (0, g.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(T)]
                            }, I) : null]
                        })
                    })
                };
            rI.displayName = rE;
            var rN = "SelectTrigger",
                rL = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        disabled: n = !1,
                        ...o
                    } = e, i = rj(r), a = rA(rN, r), s = a.disabled || n, c = (0, y.s)(t, a.onTriggerChange), u = rC(r), d = l.useRef("touch"), [p, h, m] = ns(e => {
                        let t = u().filter(e => !e.disabled),
                            r = t.find(e => e.value === a.value),
                            n = nc(t, e, r);
                        void 0 !== n && a.onValueChange(n.value)
                    }), v = e => {
                        s || (a.onOpenChange(!0), m()), e && (a.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, g.jsx)(tk, {
                        asChild: !0,
                        ...i,
                        children: (0, g.jsx)(S.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": a.contentId,
                            "aria-expanded": a.open,
                            "aria-required": a.required,
                            "aria-autocomplete": "none",
                            dir: a.dir,
                            "data-state": a.open ? "open" : "closed",
                            disabled: s,
                            "data-disabled": s ? "" : void 0,
                            "data-placeholder": nl(a.value) ? "" : void 0,
                            ...o,
                            ref: c,
                            onClick: f(o.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== d.current && v(e)
                            }),
                            onPointerDown: f(o.onPointerDown, e => {
                                d.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
                            }),
                            onKeyDown: f(o.onKeyDown, e => {
                                let t = "" !== p.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || h(e.key), (!t || " " !== e.key) && rx.includes(e.key) && (v(), e.preventDefault())
                            })
                        })
                    })
                });
            rL.displayName = rN;
            var rz = "SelectValue";
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    className: n,
                    style: o,
                    children: i,
                    placeholder: a = "",
                    ...l
                } = e, s = rA(rz, r), {
                    onValueNodeHasChildrenChange: c
                } = s, u = void 0 !== i, d = (0, y.s)(t, s.onValueNodeChange);
                return H(() => {
                    c(u)
                }, [c, u]), (0, g.jsx)(S.span, {
                    ...l,
                    ref: d,
                    style: {
                        pointerEvents: "none"
                    },
                    children: nl(s.value) ? (0, g.jsx)(g.Fragment, {
                        children: a
                    }) : i
                })
            }).displayName = rz;
            var rD = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    children: n,
                    ...o
                } = e;
                return (0, g.jsx)(S.span, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    children: n || "▼"
                })
            });
            rD.displayName = "SelectIcon";
            var rF = e => (0, g.jsx)(t_, {
                asChild: !0,
                ...e
            });
            rF.displayName = "SelectPortal";
            var rW = "SelectContent",
                rB = l.forwardRef((e, t) => {
                    let r = rA(rW, e.__scopeSelect),
                        [n, o] = l.useState();
                    return (H(() => {
                        o(new DocumentFragment)
                    }, []), r.open) ? (0, g.jsx)(rU, {
                        ...e,
                        ref: t
                    }) : n ? c.createPortal((0, g.jsx)(rH, {
                        scope: e.__scopeSelect,
                        children: (0, g.jsx)(rS.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, g.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), n) : null
                });
            rB.displayName = rW;
            var [rH, rV] = rM(rW), rq = (0, b.TL)("SelectContent.RemoveScroll"), rU = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    position: n = "item-aligned",
                    onCloseAutoFocus: o,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    side: s,
                    sideOffset: c,
                    align: u,
                    alignOffset: d,
                    arrowPadding: p,
                    collisionBoundary: h,
                    collisionPadding: m,
                    sticky: v,
                    hideWhenDetached: b,
                    avoidCollisions: w,
                    ...x
                } = e, k = rA(rW, r), [E, S] = l.useState(null), [C, P] = l.useState(null), M = (0, y.s)(t, e => S(e)), [j, R] = l.useState(null), [_, I] = l.useState(null), N = rC(r), [z, D] = l.useState(!1), F = l.useRef(!1);
                l.useEffect(() => {
                    if (E) return tq(E)
                }, [E]), l.useEffect(() => {
                    var e, t;
                    let r = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null != (e = r[0]) ? e : T()), document.body.insertAdjacentElement("beforeend", null != (t = r[1]) ? t : T()), A++, () => {
                        1 === A && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), A--
                    }
                }, []);
                let W = l.useCallback(e => {
                        let [t, ...r] = N().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
                        for (let r of e)
                            if (r === o || (null == r || r.scrollIntoView({
                                    block: "nearest"
                                }), r === t && C && (C.scrollTop = 0), r === n && C && (C.scrollTop = C.scrollHeight), null == r || r.focus(), document.activeElement !== o)) return
                    }, [N, C]),
                    B = l.useCallback(() => W([j, E]), [W, j, E]);
                l.useEffect(() => {
                    z && B()
                }, [z, B]);
                let {
                    onOpenChange: H,
                    triggerPointerDownPosRef: V
                } = k;
                l.useEffect(() => {
                    if (E) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                var r, n, o, i;
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (null != (o = null == (r = V.current) ? void 0 : r.x) ? o : 0)),
                                    y: Math.abs(Math.round(t.pageY) - (null != (i = null == (n = V.current) ? void 0 : n.y) ? i : 0))
                                }
                            },
                            r = r => {
                                e.x <= 10 && e.y <= 10 ? r.preventDefault() : E.contains(r.target) || H(!1), document.removeEventListener("pointermove", t), V.current = null
                            };
                        return null !== V.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                                capture: !0
                            })
                        }
                    }
                }, [E, H, V]), l.useEffect(() => {
                    let e = () => H(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [H]);
                let [q, U] = ns(e => {
                    let t = N().filter(e => !e.disabled),
                        r = t.find(e => e.ref.current === document.activeElement),
                        n = nc(t, e, r);
                    n && setTimeout(() => n.ref.current.focus())
                }), K = l.useCallback((e, t, r) => {
                    let n = !F.current && !r;
                    (void 0 !== k.value && k.value === t || n) && (R(e), n && (F.current = !0))
                }, [k.value]), $ = l.useCallback(() => null == E ? void 0 : E.focus(), [E]), G = l.useCallback((e, t, r) => {
                    let n = !F.current && !r;
                    (void 0 !== k.value && k.value === t || n) && I(e)
                }, [k.value]), Y = "popper" === n ? r$ : rK, X = Y === r$ ? {
                    side: s,
                    sideOffset: c,
                    align: u,
                    alignOffset: d,
                    arrowPadding: p,
                    collisionBoundary: h,
                    collisionPadding: m,
                    sticky: v,
                    hideWhenDetached: b,
                    avoidCollisions: w
                } : {};
                return (0, g.jsx)(rH, {
                    scope: r,
                    content: E,
                    viewport: C,
                    onViewportChange: P,
                    itemRefCallback: K,
                    selectedItem: j,
                    onItemLeave: $,
                    itemTextRefCallback: G,
                    focusSelectedItem: B,
                    selectedItemText: _,
                    position: n,
                    isPositioned: z,
                    searchRef: q,
                    children: (0, g.jsx)(rw, {
                        as: rq,
                        allowPinchZoom: !0,
                        children: (0, g.jsx)(L, {
                            asChild: !0,
                            trapped: k.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: f(o, e => {
                                var t;
                                null == (t = k.trigger) || t.focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, g.jsx)(O, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: i,
                                onPointerDownOutside: a,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => k.onOpenChange(!1),
                                children: (0, g.jsx)(Y, {
                                    role: "listbox",
                                    id: k.contentId,
                                    "data-state": k.open ? "open" : "closed",
                                    dir: k.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...x,
                                    ...X,
                                    onPlaced: () => D(!0),
                                    ref: M,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...x.style
                                    },
                                    onKeyDown: f(x.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || U(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = N().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let r = e.target,
                                                    n = t.indexOf(r);
                                                t = t.slice(n + 1)
                                            }
                                            setTimeout(() => W(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            rU.displayName = "SelectContentImpl";
            var rK = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onPlaced: n,
                    ...o
                } = e, i = rA(rW, r), a = rV(rW, r), [s, c] = l.useState(null), [d, f] = l.useState(null), p = (0, y.s)(t, e => f(e)), h = rC(r), m = l.useRef(!1), v = l.useRef(!0), {
                    viewport: b,
                    selectedItem: w,
                    selectedItemText: x,
                    focusSelectedItem: k
                } = a, E = l.useCallback(() => {
                    if (i.trigger && i.valueNode && s && d && b && w && x) {
                        let e = i.trigger.getBoundingClientRect(),
                            t = d.getBoundingClientRect(),
                            r = i.valueNode.getBoundingClientRect(),
                            o = x.getBoundingClientRect();
                        if ("rtl" !== i.dir) {
                            let n = o.left - t.left,
                                i = r.left - n,
                                a = e.left - i,
                                l = e.width + a,
                                c = Math.max(l, t.width),
                                d = u(i, [10, Math.max(10, window.innerWidth - 10 - c)]);
                            s.style.minWidth = l + "px", s.style.left = d + "px"
                        } else {
                            let n = t.right - o.right,
                                i = window.innerWidth - r.right - n,
                                a = window.innerWidth - e.right - i,
                                l = e.width + a,
                                c = Math.max(l, t.width),
                                d = u(i, [10, Math.max(10, window.innerWidth - 10 - c)]);
                            s.style.minWidth = l + "px", s.style.right = d + "px"
                        }
                        let a = h(),
                            l = window.innerHeight - 20,
                            c = b.scrollHeight,
                            f = window.getComputedStyle(d),
                            p = parseInt(f.borderTopWidth, 10),
                            g = parseInt(f.paddingTop, 10),
                            v = parseInt(f.borderBottomWidth, 10),
                            y = p + g + c + parseInt(f.paddingBottom, 10) + v,
                            k = Math.min(5 * w.offsetHeight, y),
                            E = window.getComputedStyle(b),
                            S = parseInt(E.paddingTop, 10),
                            C = parseInt(E.paddingBottom, 10),
                            P = e.top + e.height / 2 - 10,
                            M = w.offsetHeight / 2,
                            O = p + g + (w.offsetTop + M);
                        if (O <= P) {
                            let e = a.length > 0 && w === a[a.length - 1].ref.current;
                            s.style.bottom = "0px";
                            let t = Math.max(l - P, M + (e ? C : 0) + (d.clientHeight - b.offsetTop - b.offsetHeight) + v);
                            s.style.height = O + t + "px"
                        } else {
                            let e = a.length > 0 && w === a[0].ref.current;
                            s.style.top = "0px";
                            let t = Math.max(P, p + b.offsetTop + (e ? S : 0) + M);
                            s.style.height = t + (y - O) + "px", b.scrollTop = O - P + b.offsetTop
                        }
                        s.style.margin = "".concat(10, "px 0"), s.style.minHeight = k + "px", s.style.maxHeight = l + "px", null == n || n(), requestAnimationFrame(() => m.current = !0)
                    }
                }, [h, i.trigger, i.valueNode, s, d, b, w, x, i.dir, n]);
                H(() => E(), [E]);
                let [C, P] = l.useState();
                H(() => {
                    d && P(window.getComputedStyle(d).zIndex)
                }, [d]);
                let M = l.useCallback(e => {
                    e && !0 === v.current && (E(), null == k || k(), v.current = !1)
                }, [E, k]);
                return (0, g.jsx)(rG, {
                    scope: r,
                    contentWrapper: s,
                    shouldExpandOnScrollRef: m,
                    onScrollButtonChange: M,
                    children: (0, g.jsx)("div", {
                        ref: c,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: C
                        },
                        children: (0, g.jsx)(S.div, {
                            ...o,
                            ref: p,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...o.style
                            }
                        })
                    })
                })
            });
            rK.displayName = "SelectItemAlignedPosition";
            var r$ = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    align: n = "start",
                    collisionPadding: o = 10,
                    ...i
                } = e, a = rj(r);
                return (0, g.jsx)(tP, {
                    ...a,
                    ...i,
                    ref: t,
                    align: n,
                    collisionPadding: o,
                    style: {
                        boxSizing: "border-box",
                        ...i.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            r$.displayName = "SelectPopperPosition";
            var [rG, rY] = rM(rW, {}), rX = "SelectViewport", rQ = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    nonce: n,
                    ...o
                } = e, i = rV(rX, r), a = rY(rX, r), s = (0, y.s)(t, i.onViewportChange), c = l.useRef(0);
                return (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: n
                    }), (0, g.jsx)(rS.Slot, {
                        scope: r,
                        children: (0, g.jsx)(S.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...o,
                            ref: s,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...o.style
                            },
                            onScroll: f(o.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: r,
                                        shouldExpandOnScrollRef: n
                                    } = a;
                                if ((null == n ? void 0 : n.current) && r) {
                                    let e = Math.abs(c.current - t.scrollTop);
                                    if (e > 0) {
                                        let n = window.innerHeight - 20,
                                            o = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                        if (o < n) {
                                            let i = o + e,
                                                a = Math.min(n, i),
                                                l = i - a;
                                            r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = l > 0 ? l : 0, r.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                c.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            rQ.displayName = rX;
            var rZ = "SelectGroup",
                [rJ, r0] = rM(rZ);
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = U();
                return (0, g.jsx)(rJ, {
                    scope: r,
                    id: o,
                    children: (0, g.jsx)(S.div, {
                        role: "group",
                        "aria-labelledby": o,
                        ...n,
                        ref: t
                    })
                })
            }).displayName = rZ;
            var r1 = "SelectLabel";
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = r0(r1, r);
                return (0, g.jsx)(S.div, {
                    id: o.id,
                    ...n,
                    ref: t
                })
            }).displayName = r1;
            var r2 = "SelectItem",
                [r5, r6] = rM(r2),
                r3 = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        value: n,
                        disabled: o = !1,
                        textValue: i,
                        ...a
                    } = e, s = rA(r2, r), c = rV(r2, r), u = s.value === n, [d, p] = l.useState(null != i ? i : ""), [h, m] = l.useState(!1), v = (0, y.s)(t, e => {
                        var t;
                        return null == (t = c.itemRefCallback) ? void 0 : t.call(c, e, n, o)
                    }), b = U(), w = l.useRef("touch"), x = () => {
                        o || (s.onValueChange(n), s.onOpenChange(!1))
                    };
                    if ("" === n) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, g.jsx)(r5, {
                        scope: r,
                        value: n,
                        disabled: o,
                        textId: b,
                        isSelected: u,
                        onItemTextChange: l.useCallback(e => {
                            p(t => {
                                var r;
                                return t || (null != (r = null == e ? void 0 : e.textContent) ? r : "").trim()
                            })
                        }, []),
                        children: (0, g.jsx)(rS.ItemSlot, {
                            scope: r,
                            value: n,
                            disabled: o,
                            textValue: d,
                            children: (0, g.jsx)(S.div, {
                                role: "option",
                                "aria-labelledby": b,
                                "data-highlighted": h ? "" : void 0,
                                "aria-selected": u && h,
                                "data-state": u ? "checked" : "unchecked",
                                "aria-disabled": o || void 0,
                                "data-disabled": o ? "" : void 0,
                                tabIndex: o ? void 0 : -1,
                                ...a,
                                ref: v,
                                onFocus: f(a.onFocus, () => m(!0)),
                                onBlur: f(a.onBlur, () => m(!1)),
                                onClick: f(a.onClick, () => {
                                    "mouse" !== w.current && x()
                                }),
                                onPointerUp: f(a.onPointerUp, () => {
                                    "mouse" === w.current && x()
                                }),
                                onPointerDown: f(a.onPointerDown, e => {
                                    w.current = e.pointerType
                                }),
                                onPointerMove: f(a.onPointerMove, e => {
                                    if (w.current = e.pointerType, o) {
                                        var t;
                                        null == (t = c.onItemLeave) || t.call(c)
                                    } else "mouse" === w.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: f(a.onPointerLeave, e => {
                                    if (e.currentTarget === document.activeElement) {
                                        var t;
                                        null == (t = c.onItemLeave) || t.call(c)
                                    }
                                }),
                                onKeyDown: f(a.onKeyDown, e => {
                                    var t;
                                    ((null == (t = c.searchRef) ? void 0 : t.current) === "" || " " !== e.key) && (rk.includes(e.key) && x(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            r3.displayName = r2;
            var r4 = "SelectItemText",
                r7 = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: o,
                        ...i
                    } = e, a = rA(r4, r), s = rV(r4, r), u = r6(r4, r), d = r_(r4, r), [f, p] = l.useState(null), h = (0, y.s)(t, e => p(e), u.onItemTextChange, e => {
                        var t;
                        return null == (t = s.itemTextRefCallback) ? void 0 : t.call(s, e, u.value, u.disabled)
                    }), m = null == f ? void 0 : f.textContent, v = l.useMemo(() => (0, g.jsx)("option", {
                        value: u.value,
                        disabled: u.disabled,
                        children: m
                    }, u.value), [u.disabled, u.value, m]), {
                        onNativeOptionAdd: b,
                        onNativeOptionRemove: w
                    } = d;
                    return H(() => (b(v), () => w(v)), [b, w, v]), (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(S.span, {
                            id: u.textId,
                            ...i,
                            ref: h
                        }), u.isSelected && a.valueNode && !a.valueNodeHasChildren ? c.createPortal(i.children, a.valueNode) : null]
                    })
                });
            r7.displayName = r4;
            var r9 = "SelectItemIndicator",
                r8 = l.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e;
                    return r6(r9, r).isSelected ? (0, g.jsx)(S.span, {
                        "aria-hidden": !0,
                        ...n,
                        ref: t
                    }) : null
                });
            r8.displayName = r9;
            var ne = "SelectScrollUpButton",
                nt = l.forwardRef((e, t) => {
                    let r = rV(ne, e.__scopeSelect),
                        n = rY(ne, e.__scopeSelect),
                        [o, i] = l.useState(!1),
                        a = (0, y.s)(t, n.onScrollButtonChange);
                    return H(() => {
                        if (r.viewport && r.isPositioned) {
                            let e = function() {
                                    i(t.scrollTop > 0)
                                },
                                t = r.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [r.viewport, r.isPositioned]), o ? (0, g.jsx)(no, {
                        ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = r;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    }) : null
                });
            nt.displayName = ne;
            var nr = "SelectScrollDownButton",
                nn = l.forwardRef((e, t) => {
                    let r = rV(nr, e.__scopeSelect),
                        n = rY(nr, e.__scopeSelect),
                        [o, i] = l.useState(!1),
                        a = (0, y.s)(t, n.onScrollButtonChange);
                    return H(() => {
                        if (r.viewport && r.isPositioned) {
                            let e = function() {
                                    let e = t.scrollHeight - t.clientHeight;
                                    i(Math.ceil(t.scrollTop) < e)
                                },
                                t = r.viewport;
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [r.viewport, r.isPositioned]), o ? (0, g.jsx)(no, {
                        ...e,
                        ref: a,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = r;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    }) : null
                });
            nn.displayName = nr;
            var no = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onAutoScroll: n,
                    ...o
                } = e, i = rV("SelectScrollButton", r), a = l.useRef(null), s = rC(r), c = l.useCallback(() => {
                    null !== a.current && (window.clearInterval(a.current), a.current = null)
                }, []);
                return l.useEffect(() => () => c(), [c]), H(() => {
                    var e;
                    let t = s().find(e => e.ref.current === document.activeElement);
                    null == t || null == (e = t.ref.current) || e.scrollIntoView({
                        block: "nearest"
                    })
                }, [s]), (0, g.jsx)(S.div, {
                    "aria-hidden": !0,
                    ...o,
                    ref: t,
                    style: {
                        flexShrink: 0,
                        ...o.style
                    },
                    onPointerDown: f(o.onPointerDown, () => {
                        null === a.current && (a.current = window.setInterval(n, 50))
                    }),
                    onPointerMove: f(o.onPointerMove, () => {
                        var e;
                        null == (e = i.onItemLeave) || e.call(i), null === a.current && (a.current = window.setInterval(n, 50))
                    }),
                    onPointerLeave: f(o.onPointerLeave, () => {
                        c()
                    })
                })
            });
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e;
                return (0, g.jsx)(S.div, {
                    "aria-hidden": !0,
                    ...n,
                    ref: t
                })
            }).displayName = "SelectSeparator";
            var ni = "SelectArrow";
            l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, o = rj(r), i = rA(ni, r), a = rV(ni, r);
                return i.open && "popper" === a.position ? (0, g.jsx)(tj, {
                    ...o,
                    ...n,
                    ref: t
                }) : null
            }).displayName = ni;
            var na = l.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    value: n,
                    ...o
                } = e, i = l.useRef(null), a = (0, y.s)(t, i), s = function(e) {
                    let t = l.useRef({
                        value: e,
                        previous: e
                    });
                    return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
                }(n);
                return l.useEffect(() => {
                    let e = i.current;
                    if (!e) return;
                    let t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (s !== n && t) {
                        let r = new Event("change", {
                            bubbles: !0
                        });
                        t.call(e, n), e.dispatchEvent(r)
                    }
                }, [s, n]), (0, g.jsx)(S.select, {
                    ...o,
                    style: {
                        ...tL,
                        ...o.style
                    },
                    ref: a,
                    defaultValue: n
                })
            });

            function nl(e) {
                return "" === e || void 0 === e
            }

            function ns(e) {
                let t = C(e),
                    r = l.useRef(""),
                    n = l.useRef(0),
                    o = l.useCallback(e => {
                        let o = r.current + e;
                        t(o),
                            function e(t) {
                                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
                            }(o)
                    }, [t]),
                    i = l.useCallback(() => {
                        r.current = "", window.clearTimeout(n.current)
                    }, []);
                return l.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i]
            }

            function nc(e, t, r) {
                var n, o;
                let i = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    a = r ? e.indexOf(r) : -1,
                    l = (n = e, o = Math.max(a, 0), n.map((e, t) => n[(o + t) % n.length]));
                1 === i.length && (l = l.filter(e => e !== r));
                let s = l.find(e => e.textValue.toLowerCase().startsWith(i.toLowerCase()));
                return s !== r ? s : void 0
            }
            na.displayName = "SelectBubbleInput";
            var nu = rI,
                nd = rL,
                nf = rD,
                np = rF,
                nh = rB,
                nm = rQ,
                ng = r3,
                nv = r7,
                ny = r8,
                nb = nt,
                nw = nn
        },
        5874: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("moon", [
                ["path", {
                    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
                    key: "a7tn18"
                }]
            ])
        },
        6802: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("signal-high", [
                ["path", {
                    d: "M2 20h.01",
                    key: "4haj6o"
                }],
                ["path", {
                    d: "M7 20v-4",
                    key: "j294jx"
                }],
                ["path", {
                    d: "M12 20v-8",
                    key: "i3yub9"
                }],
                ["path", {
                    d: "M17 20V8",
                    key: "1tkaf5"
                }]
            ])
        },
        9730: (e, t, r) => {
            r.d(t, {
                A: () => v
            });
            var n, o, i = r(34941),
                a = r(713),
                l = r(52973);

            function s(e, t) {
                return e + Math.random() * (t - e)
            }! function(e) {
                e[e.Circle = 0] = "Circle", e[e.Square = 1] = "Square", e[e.Strip = 2] = "Strip"
            }(n || (n = {})),
            function(e) {
                e[e.Positive = 1] = "Positive", e[e.Negative = -1] = "Negative"
            }(o || (o = {}));
            let c = 1e3 / 60;
            class u {
                constructor(e, t, r, n) {
                    var i;
                    this.getOptions = t;
                    let {
                        colors: a,
                        initialVelocityX: l,
                        initialVelocityY: c
                    } = this.getOptions();
                    this.context = e, this.x = r, this.y = n, this.w = s(5, 20), this.h = s(5, 20), this.radius = s(5, 10), this.vx = "number" == typeof l ? s(-l, l) : s(l.min, l.max), this.vy = "number" == typeof c ? s(-c, 0) : s(c.min, c.max), this.shape = (i = 0, Math.floor(0 + 3 * Math.random())), this.angle = s(0, 360) * Math.PI / 180, this.angularSpin = s(-.2, .2), this.color = a[Math.floor(Math.random() * a.length)], this.rotateY = s(0, 1), this.rotationDirection = s(0, 1) ? o.Positive : o.Negative
                }
                update(e) {
                    let {
                        gravity: t,
                        wind: r,
                        friction: i,
                        opacity: a,
                        drawShape: l
                    } = this.getOptions(), s = e / c;
                    this.x += this.vx * s, this.y += this.vy * s, this.vy += t * s, this.vx += r * s, this.vx *= i ** s, this.vy *= i ** s, this.rotateY >= 1 && this.rotationDirection === o.Positive ? this.rotationDirection = o.Negative : this.rotateY <= -1 && this.rotationDirection === o.Negative && (this.rotationDirection = o.Positive);
                    let u = .1 * this.rotationDirection * s;
                    if (this.rotateY += u, this.angle += this.angularSpin, this.context.save(), this.context.translate(this.x, this.y), this.context.rotate(this.angle), this.context.scale(1, this.rotateY), this.context.rotate(this.angle), this.context.beginPath(), this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.globalAlpha = a, this.context.lineCap = "round", this.context.lineWidth = 2, l && "function" == typeof l) l.call(this, this.context);
                    else switch (this.shape) {
                        case n.Circle:
                            this.context.beginPath(), this.context.arc(0, 0, this.radius, 0, 2 * Math.PI), this.context.fill();
                            break;
                        case n.Square:
                            this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                            break;
                        case n.Strip:
                            this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h)
                    }
                    this.context.closePath(), this.context.restore()
                }
            }
            class d {
                constructor(e, t) {
                    this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.lastNumberOfPieces = 0, this.tweenProgress = 0, this.tweenFrom = 0, this.particles = [], this.particlesGenerated = 0, this.removeParticleAt = e => {
                        this.particles.splice(e, 1)
                    }, this.getParticle = () => {
                        let e = s(this.x, this.w + this.x),
                            t = s(this.y, this.h + this.y);
                        return new u(this.context, this.getOptions, e, t)
                    }, this.animate = e => {
                        let {
                            canvas: t,
                            context: r,
                            particlesGenerated: n,
                            lastNumberOfPieces: o
                        } = this, {
                            run: i,
                            recycle: a,
                            numberOfPieces: l,
                            debug: s,
                            tweenFunction: c,
                            tweenDuration: u
                        } = this.getOptions();
                        if (!i) return !1;
                        let d = this.particles.length,
                            f = a ? d : n;
                        if (f < l) {
                            o !== l && (this.tweenProgress = 0, this.tweenFrom = f, this.lastNumberOfPieces = l), this.tweenProgress = Math.min(u, Math.max(0, this.tweenProgress + e));
                            let t = Math.round(c(this.tweenProgress, this.tweenFrom, l, u) - f);
                            for (let e = 0; e < t; e++) this.particles.push(this.getParticle());
                            this.particlesGenerated += t
                        }
                        s && (r.font = "12px sans-serif", r.fillStyle = "#333", r.textAlign = "right", r.fillText(`Particles: ${d}`, t.width - 10, t.height - 20));
                        for (let r = this.particles.length - 1; r >= 0; r--) {
                            let n = this.particles[r];
                            n.update(e), (n.y > t.height || n.y < -100 || n.x > t.width + 100 || n.x < -100) && (a && f <= l ? this.particles[r] = this.getParticle() : this.removeParticleAt(r))
                        }
                        return d > 0 || f < l
                    }, this.canvas = e;
                    let r = this.canvas.getContext("2d");
                    if (!r) throw Error("Could not get canvas context");
                    this.context = r, this.getOptions = t
                }
            }
            let f = {
                width: "undefined" != typeof window ? window.innerWidth : 300,
                height: "undefined" != typeof window ? window.innerHeight : 200,
                numberOfPieces: 200,
                friction: .99,
                wind: 0,
                gravity: .1,
                initialVelocityX: 4,
                initialVelocityY: 10,
                colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548"],
                opacity: 1,
                debug: !1,
                tweenFunction: l.easeInOutQuad,
                tweenDuration: 5e3,
                recycle: !0,
                run: !0
            };
            class p {
                constructor(e, t) {
                    this.lastFrameTime = 0, this.setOptionsWithDefaults = e => {
                        let t = {
                            confettiSource: {
                                x: 0,
                                y: 0,
                                w: this.canvas.width,
                                h: 0
                            }
                        };
                        this._options = {
                            ...t,
                            ...f,
                            ...e
                        }, Object.assign(this, e.confettiSource)
                    }, this.update = (e = 0) => {
                        let {
                            options: {
                                run: t,
                                onConfettiComplete: r,
                                frameRate: n
                            },
                            canvas: o,
                            context: i
                        } = this, a = Math.min(e - this.lastFrameTime, 50);
                        if (n && a < 1e3 / n) {
                            this.rafId = requestAnimationFrame(this.update);
                            return
                        }
                        this.lastFrameTime = e - (n ? a % n : 0), t && (i.fillStyle = "white", i.clearRect(0, 0, o.width, o.height)), this.generator.animate(a) ? this.rafId = requestAnimationFrame(this.update) : (r && "function" == typeof r && this.generator.particlesGenerated > 0 && r.call(this, this), this._options.run = !1)
                    }, this.reset = () => {
                        this.generator && this.generator.particlesGenerated > 0 && (this.generator.particlesGenerated = 0, this.generator.particles = [], this.generator.lastNumberOfPieces = 0)
                    }, this.stop = () => {
                        this.options = {
                            run: !1
                        }, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = void 0)
                    }, this.canvas = e;
                    let r = this.canvas.getContext("2d");
                    if (!r) throw Error("Could not get canvas context");
                    this.context = r, this.generator = new d(this.canvas, () => this.options), this.options = t, this.update()
                }
                get options() {
                    return this._options
                }
                set options(e) {
                    let t = this._options?.run,
                        r = this._options?.recycle;
                    this.setOptionsWithDefaults(e), this.generator && (Object.assign(this.generator, this.options.confettiSource), "boolean" == typeof e.recycle && e.recycle && !1 === r && (this.generator.lastNumberOfPieces = this.generator.particles.length)), "boolean" == typeof e.run && e.run && !1 === t && this.update()
                }
            }
            let h = a.createRef();
            class m extends a.Component {
                constructor(e) {
                    super(e), this.canvas = a.createRef(), this.canvas = e.canvasRef || h
                }
                componentDidMount() {
                    if (this.canvas.current) {
                        let e = g(this.props)[0];
                        this.confetti = new p(this.canvas.current, e)
                    }
                }
                componentDidUpdate() {
                    let e = g(this.props)[0];
                    this.confetti && (this.confetti.options = e)
                }
                componentWillUnmount() {
                    this.confetti && this.confetti.stop(), this.confetti = void 0
                }
                render() {
                    let [e, t] = g(this.props), r = {
                        zIndex: 2,
                        position: "absolute",
                        pointerEvents: "none",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        ...t.style
                    };
                    return (0, i.jsx)("canvas", {
                        width: e.width,
                        height: e.height,
                        ref: this.canvas,
                        ...t,
                        style: r
                    })
                }
            }

            function g(e) {
                let t = {},
                    r = {},
                    n = [...Object.keys(f), "confettiSource", "drawShape", "onConfettiComplete", "frameRate"],
                    o = ["canvasRef"];
                for (let i in e) {
                    let a = e[i];
                    n.includes(i) ? t[i] = a : o.includes(i) ? o[i] = a : r[i] = a
                }
                return [t, r, {}]
            }
            m.defaultProps = {
                ...f
            }, m.displayName = "ReactConfetti";
            let v = a.forwardRef((e, t) => (0, i.jsx)(m, {
                canvasRef: t,
                ...e
            }))
        },
        13716: (e, t) => {
            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1
                } = void 0 === e ? {} : e;
                return t || r && n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        16124: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(52959)._(r(713)).default.createContext({})
        },
        19873: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(52959)._(r(713)).default.createContext(null)
        },
        24059: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("network", [
                ["rect", {
                    x: "16",
                    y: "16",
                    width: "6",
                    height: "6",
                    rx: "1",
                    key: "4q2zg0"
                }],
                ["rect", {
                    x: "2",
                    y: "16",
                    width: "6",
                    height: "6",
                    rx: "1",
                    key: "8cvhb9"
                }],
                ["rect", {
                    x: "9",
                    y: "2",
                    width: "6",
                    height: "6",
                    rx: "1",
                    key: "1egb70"
                }],
                ["path", {
                    d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
                    key: "1jsf9p"
                }],
                ["path", {
                    d: "M12 12V8",
                    key: "2874zd"
                }]
            ])
        },
        25335: (e, t) => {
            function r(e) {
                let t = {};
                for (let [r, n] of e.entries()) {
                    let e = t[r];
                    void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
                }
                return t
            }

            function n(e) {
                return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
            }

            function o(e) {
                let t = new URLSearchParams;
                for (let [r, o] of Object.entries(e))
                    if (Array.isArray(o))
                        for (let e of o) t.append(r, n(e));
                    else t.set(r, n(o));
                return t
            }

            function i(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                for (let t of r) {
                    for (let r of t.keys()) e.delete(r);
                    for (let [r, n] of t.entries()) e.append(r, n)
                }
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                assign: function() {
                    return i
                },
                searchParamsToUrlQuery: function() {
                    return r
                },
                urlQueryToSearchParams: function() {
                    return o
                }
            })
        },
        31296: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("menu", [
                ["path", {
                    d: "M4 12h16",
                    key: "1lakjw"
                }],
                ["path", {
                    d: "M4 18h16",
                    key: "19g7jn"
                }],
                ["path", {
                    d: "M4 6h16",
                    key: "1o0s65"
                }]
            ])
        },
        31411: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            let n = r(52959),
                o = r(24796),
                i = r(34941),
                a = o._(r(713)),
                l = n._(r(27004)),
                s = n._(r(76392)),
                c = r(81559),
                u = r(97196),
                d = r(57500);
            r(26034);
            let f = r(19873),
                p = n._(r(97941)),
                h = r(64386),
                m = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !0,
                    unoptimized: !1
                };

            function g(e, t, r, n, o, i, a) {
                let l = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && o(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                o = !1;
                            r.current({
                                ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, t.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(e)
                    }
                }))
            }

            function v(e) {
                return a.use ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let y = (0, a.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: o,
                    height: l,
                    width: s,
                    decoding: c,
                    className: u,
                    style: d,
                    fetchPriority: f,
                    placeholder: p,
                    loading: m,
                    unoptimized: y,
                    fill: b,
                    onLoadRef: w,
                    onLoadingCompleteRef: x,
                    setBlurComplete: k,
                    setShowAltText: E,
                    sizesInput: S,
                    onLoad: C,
                    onError: P,
                    ...M
                } = e, O = (0, a.useCallback)(e => {
                    e && (P && (e.src = e.src), e.complete && g(e, p, w, x, k, y, S))
                }, [r, p, w, x, k, P, y, S]), j = (0, h.useMergedRef)(t, O);
                return (0, i.jsx)("img", {
                    ...M,
                    ...v(f),
                    loading: m,
                    width: s,
                    height: l,
                    decoding: c,
                    "data-nimg": b ? "fill" : "1",
                    className: u,
                    style: d,
                    sizes: o,
                    srcSet: n,
                    src: r,
                    ref: j,
                    onLoad: e => {
                        g(e.currentTarget, p, w, x, k, y, S)
                    },
                    onError: e => {
                        E(!0), "empty" !== p && k(!0), P && P(e)
                    }
                })
            });

            function b(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: r
                } = e, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...v(r.fetchPriority)
                };
                return t && l.default.preload ? (l.default.preload(r.src, n), null) : (0, i.jsx)(s.default, {
                    children: (0, i.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...n
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let w = (0, a.forwardRef)((e, t) => {
                let r = (0, a.useContext)(f.RouterContext),
                    n = (0, a.useContext)(d.ImageConfigContext),
                    o = (0, a.useMemo)(() => {
                        var e;
                        let t = m || n || u.imageConfigDefault,
                            r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                            o = t.deviceSizes.sort((e, t) => e - t),
                            i = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
                        return {
                            ...t,
                            allSizes: r,
                            deviceSizes: o,
                            qualities: i
                        }
                    }, [n]),
                    {
                        onLoad: l,
                        onLoadingComplete: s
                    } = e,
                    h = (0, a.useRef)(l);
                (0, a.useEffect)(() => {
                    h.current = l
                }, [l]);
                let g = (0, a.useRef)(s);
                (0, a.useEffect)(() => {
                    g.current = s
                }, [s]);
                let [v, w] = (0, a.useState)(!1), [x, k] = (0, a.useState)(!1), {
                    props: E,
                    meta: S
                } = (0, c.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: o,
                    blurComplete: v,
                    showAltText: x
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(y, {
                        ...E,
                        unoptimized: S.unoptimized,
                        placeholder: S.placeholder,
                        fill: S.fill,
                        onLoadRef: h,
                        onLoadingCompleteRef: g,
                        setBlurComplete: w,
                        setShowAltText: k,
                        sizesInput: e.sizes,
                        ref: t
                    }), S.priority ? (0, i.jsx)(b, {
                        isAppRouter: !r,
                        imgAttributes: E
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        32639: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("file-text", [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
                    key: "1rqfz7"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4",
                    key: "tnqrlb"
                }],
                ["path", {
                    d: "M10 9H8",
                    key: "b1mrlr"
                }],
                ["path", {
                    d: "M16 13H8",
                    key: "t4e002"
                }],
                ["path", {
                    d: "M16 17H8",
                    key: "z1uh3a"
                }]
            ])
        },
        39383: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("link", [
                ["path", {
                    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                    key: "1cjeqo"
                }],
                ["path", {
                    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                    key: "19qd67"
                }]
            ])
        },
        39908: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("bot", [
                ["path", {
                    d: "M12 8V4H8",
                    key: "hb8ula"
                }],
                ["rect", {
                    width: "16",
                    height: "12",
                    x: "4",
                    y: "8",
                    rx: "2",
                    key: "enze0r"
                }],
                ["path", {
                    d: "M2 14h2",
                    key: "vft8re"
                }],
                ["path", {
                    d: "M20 14h2",
                    key: "4cs60a"
                }],
                ["path", {
                    d: "M15 13v2",
                    key: "1xurst"
                }],
                ["path", {
                    d: "M9 13v2",
                    key: "rq6x2g"
                }]
            ])
        },
        43891: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("info", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 16v-4",
                    key: "1dtifu"
                }],
                ["path", {
                    d: "M12 8h.01",
                    key: "e9boi3"
                }]
            ])
        },
        49145: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                formatUrl: function() {
                    return i
                },
                formatWithValidation: function() {
                    return l
                },
                urlObjectKeys: function() {
                    return a
                }
            });
            let n = r(24796)._(r(25335)),
                o = /https?|ftp|gopher|file/;

            function i(e) {
                let {
                    auth: t,
                    hostname: r
                } = e, i = e.protocol || "", a = e.pathname || "", l = e.hash || "", s = e.query || "", c = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? "[" + r + "]" : r), e.port && (c += ":" + e.port)), s && "object" == typeof s && (s = String(n.urlQueryToSearchParams(s)));
                let u = e.search || s && "?" + s || "";
                return i && !i.endsWith(":") && (i += ":"), e.slashes || (!i || o.test(i)) && !1 !== c ? (c = "//" + (c || ""), a && "/" !== a[0] && (a = "/" + a)) : c || (c = ""), l && "#" !== l[0] && (l = "#" + l), u && "?" !== u[0] && (u = "?" + u), "" + i + c + (a = a.replace(/[?#]/g, encodeURIComponent)) + (u = u.replace("#", "%23")) + l
            }
            let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function l(e) {
                return i(e)
            }
        },
        49548: (e, t, r) => {
            r.d(t, {
                F: () => a
            });
            var n = r(52858);
            let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                i = n.$,
                a = (e, t) => r => {
                    var n;
                    if ((null == t ? void 0 : t.variants) == null) return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: a,
                        defaultVariants: l
                    } = t, s = Object.keys(a).map(e => {
                        let t = null == r ? void 0 : r[e],
                            n = null == l ? void 0 : l[e];
                        if (null === t) return null;
                        let i = o(t) || o(n);
                        return a[e][i]
                    }), c = r && Object.entries(r).reduce((e, t) => {
                        let [r, n] = t;
                        return void 0 === n || (e[r] = n), e
                    }, {});
                    return i(e, s, null == t || null == (n = t.compoundVariants) ? void 0 : n.reduce((e, t) => {
                        let {
                            class: r,
                            className: n,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, r] = e;
                            return Array.isArray(r) ? r.includes({
                                ...l,
                                ...c
                            } [t]) : ({
                                ...l,
                                ...c
                            })[t] === r
                        }) ? [...e, r, n] : e
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        49918: (e, t, r) => {
            r.d(t, {
                DX: () => l,
                TL: () => a
            });
            var n = r(713),
                o = r(82634),
                i = r(34941);

            function a(e) {
                let t = function(e) {
                        let t = n.forwardRef((e, t) => {
                            let {
                                children: r,
                                ...i
                            } = e;
                            if (n.isValidElement(r)) {
                                var a;
                                let e, l, s = (a = r, (l = (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.ref : (l = (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.props.ref : a.props.ref || a.ref),
                                    c = function(e, t) {
                                        let r = {
                                            ...t
                                        };
                                        for (let n in t) {
                                            let o = e[n],
                                                i = t[n];
                                            /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                                let t = i(...e);
                                                return o(...e), t
                                            } : o && (r[n] = o) : "style" === n ? r[n] = {
                                                ...o,
                                                ...i
                                            } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                                        }
                                        return {
                                            ...e,
                                            ...r
                                        }
                                    }(i, r.props);
                                return r.type !== n.Fragment && (c.ref = t ? (0, o.t)(t, s) : s), n.cloneElement(r, c)
                            }
                            return n.Children.count(r) > 1 ? n.Children.only(null) : null
                        });
                        return t.displayName = `${e}.SlotClone`, t
                    }(e),
                    r = n.forwardRef((e, r) => {
                        let {
                            children: o,
                            ...a
                        } = e, l = n.Children.toArray(o), s = l.find(c);
                        if (s) {
                            let e = s.props.children,
                                o = l.map(t => t !== s ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                            return (0, i.jsx)(t, {
                                ...a,
                                ref: r,
                                children: n.isValidElement(e) ? n.cloneElement(e, void 0, o) : null
                            })
                        }
                        return (0, i.jsx)(t, {
                            ...a,
                            ref: r,
                            children: o
                        })
                    });
                return r.displayName = `${e}.Slot`, r
            }
            var l = a("Slot"),
                s = Symbol("radix.slottable");

            function c(e) {
                return n.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
            }
        },
        51790: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return g
                },
                useLinkStatus: function() {
                    return y
                }
            });
            let n = r(24796),
                o = r(34941),
                i = n._(r(713)),
                a = r(49145),
                l = r(90527),
                s = r(92022),
                c = r(64386),
                u = r(64163),
                d = r(19421);
            r(26034);
            let f = r(3102),
                p = r(4076),
                h = r(60150);

            function m(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }

            function g(e) {
                let t, r, n, [a, g] = (0, i.useOptimistic)(f.IDLE_LINK_STATUS),
                    y = (0, i.useRef)(null),
                    {
                        href: b,
                        as: w,
                        children: x,
                        prefetch: k = null,
                        passHref: E,
                        replace: S,
                        shallow: C,
                        scroll: P,
                        onClick: M,
                        onMouseEnter: O,
                        onTouchStart: j,
                        legacyBehavior: R = !1,
                        onNavigate: A,
                        ref: T,
                        unstable_dynamicOnHover: _,
                        ...I
                    } = e;
                t = x, R && ("string" == typeof t || "number" == typeof t) && (t = (0, o.jsx)("a", {
                    children: t
                }));
                let N = i.default.useContext(l.AppRouterContext),
                    L = !1 !== k,
                    z = null === k ? s.PrefetchKind.AUTO : s.PrefetchKind.FULL,
                    {
                        href: D,
                        as: F
                    } = i.default.useMemo(() => {
                        let e = m(b);
                        return {
                            href: e,
                            as: w ? m(w) : e
                        }
                    }, [b, w]);
                R && (r = i.default.Children.only(t));
                let W = R ? r && "object" == typeof r && r.ref : T,
                    B = i.default.useCallback(e => (null !== N && (y.current = (0, f.mountLinkInstance)(e, D, N, z, L, g)), () => {
                        y.current && ((0, f.unmountLinkForCurrentNavigation)(y.current), y.current = null), (0, f.unmountPrefetchableInstance)(e)
                    }), [L, D, N, z, g]),
                    H = {
                        ref: (0, c.useMergedRef)(B, W),
                        onClick(e) {
                            R || "function" != typeof M || M(e), R && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), N && (e.defaultPrevented || function(e, t, r, n, o, a, l) {
                                let {
                                    nodeName: s
                                } = e.currentTarget;
                                if (!("A" === s.toUpperCase() && function(e) {
                                        let t = e.currentTarget.getAttribute("target");
                                        return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                    }(e) || e.currentTarget.hasAttribute("download"))) {
                                    if (!(0, p.isLocalURL)(t)) {
                                        o && (e.preventDefault(), location.replace(t));
                                        return
                                    }
                                    e.preventDefault(), i.default.startTransition(() => {
                                        if (l) {
                                            let e = !1;
                                            if (l({
                                                    preventDefault: () => {
                                                        e = !0
                                                    }
                                                }), e) return
                                        }(0, h.dispatchNavigateAction)(r || t, o ? "replace" : "push", null == a || a, n.current)
                                    })
                                }
                            }(e, D, F, y, S, P, A))
                        },
                        onMouseEnter(e) {
                            R || "function" != typeof O || O(e), R && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), N && L && (0, f.onNavigationIntent)(e.currentTarget, !0 === _)
                        },
                        onTouchStart: function(e) {
                            R || "function" != typeof j || j(e), R && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), N && L && (0, f.onNavigationIntent)(e.currentTarget, !0 === _)
                        }
                    };
                return (0, u.isAbsoluteUrl)(F) ? H.href = F : R && !E && ("a" !== r.type || "href" in r.props) || (H.href = (0, d.addBasePath)(F)), n = R ? i.default.cloneElement(r, H) : (0, o.jsx)("a", {
                    ...I,
                    ...H,
                    children: t
                }), (0, o.jsx)(v.Provider, {
                    value: a,
                    children: n
                })
            }
            r(84360);
            let v = (0, i.createContext)(f.IDLE_LINK_STATUS),
                y = () => (0, i.useContext)(v);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        51874: (e, t, r) => {
            r.d(t, {
                default: () => o.a
            });
            var n = r(96065),
                o = r.n(n)
        },
        52858: (e, t, r) => {
            r.d(t, {
                $: () => n
            });

            function n() {
                for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t)
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (r = 0; r < i; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n)
                        } else
                            for (n in t) t[n] && (o && (o += " "), o += n);
                    return o
                }(e)) && (n && (n += " "), n += t);
                return n
            }
        },
        52926: (e, t, r) => {
            r.d(t, {
                QP: () => ec
            });
            let n = e => {
                    let t = l(e),
                        {
                            conflictingClassGroups: r,
                            conflictingClassGroupModifiers: n
                        } = e;
                    return {
                        getClassGroupId: e => {
                            let r = e.split("-");
                            return "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || a(e)
                        },
                        getConflictingClassGroupIds: (e, t) => {
                            let o = r[e] || [];
                            return t && n[e] ? [...o, ...n[e]] : o
                        }
                    }
                },
                o = (e, t) => {
                    if (0 === e.length) return t.classGroupId;
                    let r = e[0],
                        n = t.nextPart.get(r),
                        i = n ? o(e.slice(1), n) : void 0;
                    if (i) return i;
                    if (0 === t.validators.length) return;
                    let a = e.join("-");
                    return t.validators.find(({
                        validator: e
                    }) => e(a))?.classGroupId
                },
                i = /^\[(.+)\]$/,
                a = e => {
                    if (i.test(e)) {
                        let t = i.exec(e)[1],
                            r = t?.substring(0, t.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                l = e => {
                    let {
                        theme: t,
                        classGroups: r
                    } = e, n = {
                        nextPart: new Map,
                        validators: []
                    };
                    for (let e in r) s(r[e], n, e, t);
                    return n
                },
                s = (e, t, r, n) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? t : c(t, e)).classGroupId = r;
                            return
                        }
                        if ("function" == typeof e) return u(e) ? void s(e(n), t, r, n) : void t.validators.push({
                            validator: e,
                            classGroupId: r
                        });
                        Object.entries(e).forEach(([e, o]) => {
                            s(o, c(t, e), r, n)
                        })
                    })
                },
                c = (e, t) => {
                    let r = e;
                    return t.split("-").forEach(e => {
                        r.nextPart.has(e) || r.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(e)
                    }), r
                },
                u = e => e.isThemeGetter,
                d = e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let t = 0,
                        r = new Map,
                        n = new Map,
                        o = (o, i) => {
                            r.set(o, i), ++t > e && (t = 0, n = r, r = new Map)
                        };
                    return {
                        get(e) {
                            let t = r.get(e);
                            return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                        },
                        set(e, t) {
                            r.has(e) ? r.set(e, t) : o(e, t)
                        }
                    }
                },
                f = e => {
                    let {
                        prefix: t,
                        experimentalParseClassName: r
                    } = e, n = e => {
                        let t, r = [],
                            n = 0,
                            o = 0,
                            i = 0;
                        for (let a = 0; a < e.length; a++) {
                            let l = e[a];
                            if (0 === n && 0 === o) {
                                if (":" === l) {
                                    r.push(e.slice(i, a)), i = a + 1;
                                    continue
                                }
                                if ("/" === l) {
                                    t = a;
                                    continue
                                }
                            }
                            "[" === l ? n++ : "]" === l ? n-- : "(" === l ? o++ : ")" === l && o--
                        }
                        let a = 0 === r.length ? e : e.substring(i),
                            l = p(a);
                        return {
                            modifiers: r,
                            hasImportantModifier: l !== a,
                            baseClassName: l,
                            maybePostfixModifierPosition: t && t > i ? t - i : void 0
                        }
                    };
                    if (t) {
                        let e = t + ":",
                            r = n;
                        n = t => t.startsWith(e) ? r(t.substring(e.length)) : {
                            isExternal: !0,
                            modifiers: [],
                            hasImportantModifier: !1,
                            baseClassName: t,
                            maybePostfixModifierPosition: void 0
                        }
                    }
                    if (r) {
                        let e = n;
                        n = t => r({
                            className: t,
                            parseClassName: e
                        })
                    }
                    return n
                },
                p = e => e.endsWith("!") ? e.substring(0, e.length - 1) : e.startsWith("!") ? e.substring(1) : e,
                h = e => {
                    let t = Object.fromEntries(e.orderSensitiveModifiers.map(e => [e, !0]));
                    return e => {
                        if (e.length <= 1) return e;
                        let r = [],
                            n = [];
                        return e.forEach(e => {
                            "[" === e[0] || t[e] ? (r.push(...n.sort(), e), n = []) : n.push(e)
                        }), r.push(...n.sort()), r
                    }
                },
                m = e => ({
                    cache: d(e.cacheSize),
                    parseClassName: f(e),
                    sortModifiers: h(e),
                    ...n(e)
                }),
                g = /\s+/,
                v = (e, t) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: n,
                        getConflictingClassGroupIds: o,
                        sortModifiers: i
                    } = t, a = [], l = e.trim().split(g), s = "";
                    for (let e = l.length - 1; e >= 0; e -= 1) {
                        let t = l[e],
                            {
                                isExternal: c,
                                modifiers: u,
                                hasImportantModifier: d,
                                baseClassName: f,
                                maybePostfixModifierPosition: p
                            } = r(t);
                        if (c) {
                            s = t + (s.length > 0 ? " " + s : s);
                            continue
                        }
                        let h = !!p,
                            m = n(h ? f.substring(0, p) : f);
                        if (!m) {
                            if (!h || !(m = n(f))) {
                                s = t + (s.length > 0 ? " " + s : s);
                                continue
                            }
                            h = !1
                        }
                        let g = i(u).join(":"),
                            v = d ? g + "!" : g,
                            y = v + m;
                        if (a.includes(y)) continue;
                        a.push(y);
                        let b = o(m, h);
                        for (let e = 0; e < b.length; ++e) {
                            let t = b[e];
                            a.push(v + t)
                        }
                        s = t + (s.length > 0 ? " " + s : s)
                    }
                    return s
                };

            function y() {
                let e, t, r = 0,
                    n = "";
                for (; r < arguments.length;)(e = arguments[r++]) && (t = b(e)) && (n && (n += " "), n += t);
                return n
            }
            let b = e => {
                    let t;
                    if ("string" == typeof e) return e;
                    let r = "";
                    for (let n = 0; n < e.length; n++) e[n] && (t = b(e[n])) && (r && (r += " "), r += t);
                    return r
                },
                w = e => {
                    let t = t => t[e] || [];
                    return t.isThemeGetter = !0, t
                },
                x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
                k = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
                E = /^\d+\/\d+$/,
                S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                C = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                P = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
                M = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                O = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                j = e => E.test(e),
                R = e => !!e && !Number.isNaN(Number(e)),
                A = e => !!e && Number.isInteger(Number(e)),
                T = e => e.endsWith("%") && R(e.slice(0, -1)),
                _ = e => S.test(e),
                I = () => !0,
                N = e => C.test(e) && !P.test(e),
                L = () => !1,
                z = e => M.test(e),
                D = e => O.test(e),
                F = e => !B(e) && !$(e),
                W = e => ee(e, eo, L),
                B = e => x.test(e),
                H = e => ee(e, ei, N),
                V = e => ee(e, ea, R),
                q = e => ee(e, er, L),
                U = e => ee(e, en, D),
                K = e => ee(e, es, z),
                $ = e => k.test(e),
                G = e => et(e, ei),
                Y = e => et(e, el),
                X = e => et(e, er),
                Q = e => et(e, eo),
                Z = e => et(e, en),
                J = e => et(e, es, !0),
                ee = (e, t, r) => {
                    let n = x.exec(e);
                    return !!n && (n[1] ? t(n[1]) : r(n[2]))
                },
                et = (e, t, r = !1) => {
                    let n = k.exec(e);
                    return !!n && (n[1] ? t(n[1]) : r)
                },
                er = e => "position" === e || "percentage" === e,
                en = e => "image" === e || "url" === e,
                eo = e => "length" === e || "size" === e || "bg-size" === e,
                ei = e => "length" === e,
                ea = e => "number" === e,
                el = e => "family-name" === e,
                es = e => "shadow" === e;
            Symbol.toStringTag;
            let ec = function(e, ...t) {
                let r, n, o, i = function(l) {
                    return n = (r = m(t.reduce((e, t) => t(e), e()))).cache.get, o = r.cache.set, i = a, a(l)
                };

                function a(e) {
                    let t = n(e);
                    if (t) return t;
                    let i = v(e, r);
                    return o(e, i), i
                }
                return function() {
                    return i(y.apply(null, arguments))
                }
            }(() => {
                let e = w("color"),
                    t = w("font"),
                    r = w("text"),
                    n = w("font-weight"),
                    o = w("tracking"),
                    i = w("leading"),
                    a = w("breakpoint"),
                    l = w("container"),
                    s = w("spacing"),
                    c = w("radius"),
                    u = w("shadow"),
                    d = w("inset-shadow"),
                    f = w("text-shadow"),
                    p = w("drop-shadow"),
                    h = w("blur"),
                    m = w("perspective"),
                    g = w("aspect"),
                    v = w("ease"),
                    y = w("animate"),
                    b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    x = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
                    k = () => [...x(), $, B],
                    E = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    S = () => ["auto", "contain", "none"],
                    C = () => [$, B, s],
                    P = () => [j, "full", "auto", ...C()],
                    M = () => [A, "none", "subgrid", $, B],
                    O = () => ["auto", {
                        span: ["full", A, $, B]
                    }, A, $, B],
                    N = () => [A, "auto", $, B],
                    L = () => ["auto", "min", "max", "fr", $, B],
                    z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
                    D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
                    ee = () => ["auto", ...C()],
                    et = () => [j, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()],
                    er = () => [e, $, B],
                    en = () => [...x(), X, q, {
                        position: [$, B]
                    }],
                    eo = () => ["no-repeat", {
                        repeat: ["", "x", "y", "space", "round"]
                    }],
                    ei = () => ["auto", "cover", "contain", Q, W, {
                        size: [$, B]
                    }],
                    ea = () => [T, G, H],
                    el = () => ["", "none", "full", c, $, B],
                    es = () => ["", R, G, H],
                    ec = () => ["solid", "dashed", "dotted", "double"],
                    eu = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    ed = () => [R, T, X, q],
                    ef = () => ["", "none", h, $, B],
                    ep = () => ["none", R, $, B],
                    eh = () => ["none", R, $, B],
                    em = () => [R, $, B],
                    eg = () => [j, "full", ...C()];
                return {
                    cacheSize: 500,
                    theme: {
                        animate: ["spin", "ping", "pulse", "bounce"],
                        aspect: ["video"],
                        blur: [_],
                        breakpoint: [_],
                        color: [I],
                        container: [_],
                        "drop-shadow": [_],
                        ease: ["in", "out", "in-out"],
                        font: [F],
                        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                        "inset-shadow": [_],
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                        radius: [_],
                        shadow: [_],
                        spacing: ["px", R],
                        text: [_],
                        "text-shadow": [_],
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", j, B, $, g]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [R, B, $, l]
                        }],
                        "break-after": [{
                            "break-after": b()
                        }],
                        "break-before": [{
                            "break-before": b()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        sr: ["sr-only", "not-sr-only"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: k()
                        }],
                        overflow: [{
                            overflow: E()
                        }],
                        "overflow-x": [{
                            "overflow-x": E()
                        }],
                        "overflow-y": [{
                            "overflow-y": E()
                        }],
                        overscroll: [{
                            overscroll: S()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": S()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": S()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: P()
                        }],
                        "inset-x": [{
                            "inset-x": P()
                        }],
                        "inset-y": [{
                            "inset-y": P()
                        }],
                        start: [{
                            start: P()
                        }],
                        end: [{
                            end: P()
                        }],
                        top: [{
                            top: P()
                        }],
                        right: [{
                            right: P()
                        }],
                        bottom: [{
                            bottom: P()
                        }],
                        left: [{
                            left: P()
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: [A, "auto", $, B]
                        }],
                        basis: [{
                            basis: [j, "full", "auto", l, ...C()]
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["nowrap", "wrap", "wrap-reverse"]
                        }],
                        flex: [{
                            flex: [R, j, "auto", "initial", "none", B]
                        }],
                        grow: [{
                            grow: ["", R, $, B]
                        }],
                        shrink: [{
                            shrink: ["", R, $, B]
                        }],
                        order: [{
                            order: [A, "first", "last", "none", $, B]
                        }],
                        "grid-cols": [{
                            "grid-cols": M()
                        }],
                        "col-start-end": [{
                            col: O()
                        }],
                        "col-start": [{
                            "col-start": N()
                        }],
                        "col-end": [{
                            "col-end": N()
                        }],
                        "grid-rows": [{
                            "grid-rows": M()
                        }],
                        "row-start-end": [{
                            row: O()
                        }],
                        "row-start": [{
                            "row-start": N()
                        }],
                        "row-end": [{
                            "row-end": N()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": L()
                        }],
                        "auto-rows": [{
                            "auto-rows": L()
                        }],
                        gap: [{
                            gap: C()
                        }],
                        "gap-x": [{
                            "gap-x": C()
                        }],
                        "gap-y": [{
                            "gap-y": C()
                        }],
                        "justify-content": [{
                            justify: [...z(), "normal"]
                        }],
                        "justify-items": [{
                            "justify-items": [...D(), "normal"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", ...D()]
                        }],
                        "align-content": [{
                            content: ["normal", ...z()]
                        }],
                        "align-items": [{
                            items: [...D(), {
                                baseline: ["", "last"]
                            }]
                        }],
                        "align-self": [{
                            self: ["auto", ...D(), {
                                baseline: ["", "last"]
                            }]
                        }],
                        "place-content": [{
                            "place-content": z()
                        }],
                        "place-items": [{
                            "place-items": [...D(), "baseline"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", ...D()]
                        }],
                        p: [{
                            p: C()
                        }],
                        px: [{
                            px: C()
                        }],
                        py: [{
                            py: C()
                        }],
                        ps: [{
                            ps: C()
                        }],
                        pe: [{
                            pe: C()
                        }],
                        pt: [{
                            pt: C()
                        }],
                        pr: [{
                            pr: C()
                        }],
                        pb: [{
                            pb: C()
                        }],
                        pl: [{
                            pl: C()
                        }],
                        m: [{
                            m: ee()
                        }],
                        mx: [{
                            mx: ee()
                        }],
                        my: [{
                            my: ee()
                        }],
                        ms: [{
                            ms: ee()
                        }],
                        me: [{
                            me: ee()
                        }],
                        mt: [{
                            mt: ee()
                        }],
                        mr: [{
                            mr: ee()
                        }],
                        mb: [{
                            mb: ee()
                        }],
                        ml: [{
                            ml: ee()
                        }],
                        "space-x": [{
                            "space-x": C()
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": C()
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        size: [{
                            size: et()
                        }],
                        w: [{
                            w: [l, "screen", ...et()]
                        }],
                        "min-w": [{
                            "min-w": [l, "screen", "none", ...et()]
                        }],
                        "max-w": [{
                            "max-w": [l, "screen", "none", "prose", {
                                screen: [a]
                            }, ...et()]
                        }],
                        h: [{
                            h: ["screen", "lh", ...et()]
                        }],
                        "min-h": [{
                            "min-h": ["screen", "lh", "none", ...et()]
                        }],
                        "max-h": [{
                            "max-h": ["screen", "lh", ...et()]
                        }],
                        "font-size": [{
                            text: ["base", r, G, H]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: [n, $, V]
                        }],
                        "font-stretch": [{
                            "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", T, B]
                        }],
                        "font-family": [{
                            font: [Y, B, t]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                            tracking: [o, $, B]
                        }],
                        "line-clamp": [{
                            "line-clamp": [R, "none", $, V]
                        }],
                        leading: [{
                            leading: [i, ...C()]
                        }],
                        "list-image": [{
                            "list-image": ["none", $, B]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "list-style-type": [{
                            list: ["disc", "decimal", "none", $, B]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "placeholder-color": [{
                            placeholder: er()
                        }],
                        "text-color": [{
                            text: er()
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...ec(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: [R, "from-font", "auto", $, H]
                        }],
                        "text-decoration-color": [{
                            decoration: er()
                        }],
                        "underline-offset": [{
                            "underline-offset": [R, "auto", $, B]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: C()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $, B]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        wrap: [{
                            wrap: ["break-word", "anywhere", "normal"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", $, B]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: en()
                        }],
                        "bg-repeat": [{
                            bg: eo()
                        }],
                        "bg-size": [{
                            bg: ei()
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                linear: [{
                                    to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, A, $, B],
                                radial: ["", $, B],
                                conic: [A, $, B]
                            }, Z, U]
                        }],
                        "bg-color": [{
                            bg: er()
                        }],
                        "gradient-from-pos": [{
                            from: ea()
                        }],
                        "gradient-via-pos": [{
                            via: ea()
                        }],
                        "gradient-to-pos": [{
                            to: ea()
                        }],
                        "gradient-from": [{
                            from: er()
                        }],
                        "gradient-via": [{
                            via: er()
                        }],
                        "gradient-to": [{
                            to: er()
                        }],
                        rounded: [{
                            rounded: el()
                        }],
                        "rounded-s": [{
                            "rounded-s": el()
                        }],
                        "rounded-e": [{
                            "rounded-e": el()
                        }],
                        "rounded-t": [{
                            "rounded-t": el()
                        }],
                        "rounded-r": [{
                            "rounded-r": el()
                        }],
                        "rounded-b": [{
                            "rounded-b": el()
                        }],
                        "rounded-l": [{
                            "rounded-l": el()
                        }],
                        "rounded-ss": [{
                            "rounded-ss": el()
                        }],
                        "rounded-se": [{
                            "rounded-se": el()
                        }],
                        "rounded-ee": [{
                            "rounded-ee": el()
                        }],
                        "rounded-es": [{
                            "rounded-es": el()
                        }],
                        "rounded-tl": [{
                            "rounded-tl": el()
                        }],
                        "rounded-tr": [{
                            "rounded-tr": el()
                        }],
                        "rounded-br": [{
                            "rounded-br": el()
                        }],
                        "rounded-bl": [{
                            "rounded-bl": el()
                        }],
                        "border-w": [{
                            border: es()
                        }],
                        "border-w-x": [{
                            "border-x": es()
                        }],
                        "border-w-y": [{
                            "border-y": es()
                        }],
                        "border-w-s": [{
                            "border-s": es()
                        }],
                        "border-w-e": [{
                            "border-e": es()
                        }],
                        "border-w-t": [{
                            "border-t": es()
                        }],
                        "border-w-r": [{
                            "border-r": es()
                        }],
                        "border-w-b": [{
                            "border-b": es()
                        }],
                        "border-w-l": [{
                            "border-l": es()
                        }],
                        "divide-x": [{
                            "divide-x": es()
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": es()
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "border-style": [{
                            border: [...ec(), "hidden", "none"]
                        }],
                        "divide-style": [{
                            divide: [...ec(), "hidden", "none"]
                        }],
                        "border-color": [{
                            border: er()
                        }],
                        "border-color-x": [{
                            "border-x": er()
                        }],
                        "border-color-y": [{
                            "border-y": er()
                        }],
                        "border-color-s": [{
                            "border-s": er()
                        }],
                        "border-color-e": [{
                            "border-e": er()
                        }],
                        "border-color-t": [{
                            "border-t": er()
                        }],
                        "border-color-r": [{
                            "border-r": er()
                        }],
                        "border-color-b": [{
                            "border-b": er()
                        }],
                        "border-color-l": [{
                            "border-l": er()
                        }],
                        "divide-color": [{
                            divide: er()
                        }],
                        "outline-style": [{
                            outline: [...ec(), "none", "hidden"]
                        }],
                        "outline-offset": [{
                            "outline-offset": [R, $, B]
                        }],
                        "outline-w": [{
                            outline: ["", R, G, H]
                        }],
                        "outline-color": [{
                            outline: er()
                        }],
                        shadow: [{
                            shadow: ["", "none", u, J, K]
                        }],
                        "shadow-color": [{
                            shadow: er()
                        }],
                        "inset-shadow": [{
                            "inset-shadow": ["none", d, J, K]
                        }],
                        "inset-shadow-color": [{
                            "inset-shadow": er()
                        }],
                        "ring-w": [{
                            ring: es()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: er()
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [R, H]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": er()
                        }],
                        "inset-ring-w": [{
                            "inset-ring": es()
                        }],
                        "inset-ring-color": [{
                            "inset-ring": er()
                        }],
                        "text-shadow": [{
                            "text-shadow": ["none", f, J, K]
                        }],
                        "text-shadow-color": [{
                            "text-shadow": er()
                        }],
                        opacity: [{
                            opacity: [R, $, B]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...eu(), "plus-darker", "plus-lighter"]
                        }],
                        "bg-blend": [{
                            "bg-blend": eu()
                        }],
                        "mask-clip": [{
                            "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                        }, "mask-no-clip"],
                        "mask-composite": [{
                            mask: ["add", "subtract", "intersect", "exclude"]
                        }],
                        "mask-image-linear-pos": [{
                            "mask-linear": [R]
                        }],
                        "mask-image-linear-from-pos": [{
                            "mask-linear-from": ed()
                        }],
                        "mask-image-linear-to-pos": [{
                            "mask-linear-to": ed()
                        }],
                        "mask-image-linear-from-color": [{
                            "mask-linear-from": er()
                        }],
                        "mask-image-linear-to-color": [{
                            "mask-linear-to": er()
                        }],
                        "mask-image-t-from-pos": [{
                            "mask-t-from": ed()
                        }],
                        "mask-image-t-to-pos": [{
                            "mask-t-to": ed()
                        }],
                        "mask-image-t-from-color": [{
                            "mask-t-from": er()
                        }],
                        "mask-image-t-to-color": [{
                            "mask-t-to": er()
                        }],
                        "mask-image-r-from-pos": [{
                            "mask-r-from": ed()
                        }],
                        "mask-image-r-to-pos": [{
                            "mask-r-to": ed()
                        }],
                        "mask-image-r-from-color": [{
                            "mask-r-from": er()
                        }],
                        "mask-image-r-to-color": [{
                            "mask-r-to": er()
                        }],
                        "mask-image-b-from-pos": [{
                            "mask-b-from": ed()
                        }],
                        "mask-image-b-to-pos": [{
                            "mask-b-to": ed()
                        }],
                        "mask-image-b-from-color": [{
                            "mask-b-from": er()
                        }],
                        "mask-image-b-to-color": [{
                            "mask-b-to": er()
                        }],
                        "mask-image-l-from-pos": [{
                            "mask-l-from": ed()
                        }],
                        "mask-image-l-to-pos": [{
                            "mask-l-to": ed()
                        }],
                        "mask-image-l-from-color": [{
                            "mask-l-from": er()
                        }],
                        "mask-image-l-to-color": [{
                            "mask-l-to": er()
                        }],
                        "mask-image-x-from-pos": [{
                            "mask-x-from": ed()
                        }],
                        "mask-image-x-to-pos": [{
                            "mask-x-to": ed()
                        }],
                        "mask-image-x-from-color": [{
                            "mask-x-from": er()
                        }],
                        "mask-image-x-to-color": [{
                            "mask-x-to": er()
                        }],
                        "mask-image-y-from-pos": [{
                            "mask-y-from": ed()
                        }],
                        "mask-image-y-to-pos": [{
                            "mask-y-to": ed()
                        }],
                        "mask-image-y-from-color": [{
                            "mask-y-from": er()
                        }],
                        "mask-image-y-to-color": [{
                            "mask-y-to": er()
                        }],
                        "mask-image-radial": [{
                            "mask-radial": [$, B]
                        }],
                        "mask-image-radial-from-pos": [{
                            "mask-radial-from": ed()
                        }],
                        "mask-image-radial-to-pos": [{
                            "mask-radial-to": ed()
                        }],
                        "mask-image-radial-from-color": [{
                            "mask-radial-from": er()
                        }],
                        "mask-image-radial-to-color": [{
                            "mask-radial-to": er()
                        }],
                        "mask-image-radial-shape": [{
                            "mask-radial": ["circle", "ellipse"]
                        }],
                        "mask-image-radial-size": [{
                            "mask-radial": [{
                                closest: ["side", "corner"],
                                farthest: ["side", "corner"]
                            }]
                        }],
                        "mask-image-radial-pos": [{
                            "mask-radial-at": x()
                        }],
                        "mask-image-conic-pos": [{
                            "mask-conic": [R]
                        }],
                        "mask-image-conic-from-pos": [{
                            "mask-conic-from": ed()
                        }],
                        "mask-image-conic-to-pos": [{
                            "mask-conic-to": ed()
                        }],
                        "mask-image-conic-from-color": [{
                            "mask-conic-from": er()
                        }],
                        "mask-image-conic-to-color": [{
                            "mask-conic-to": er()
                        }],
                        "mask-mode": [{
                            mask: ["alpha", "luminance", "match"]
                        }],
                        "mask-origin": [{
                            "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                        }],
                        "mask-position": [{
                            mask: en()
                        }],
                        "mask-repeat": [{
                            mask: eo()
                        }],
                        "mask-size": [{
                            mask: ei()
                        }],
                        "mask-type": [{
                            "mask-type": ["alpha", "luminance"]
                        }],
                        "mask-image": [{
                            mask: ["none", $, B]
                        }],
                        filter: [{
                            filter: ["", "none", $, B]
                        }],
                        blur: [{
                            blur: ef()
                        }],
                        brightness: [{
                            brightness: [R, $, B]
                        }],
                        contrast: [{
                            contrast: [R, $, B]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", p, J, K]
                        }],
                        "drop-shadow-color": [{
                            "drop-shadow": er()
                        }],
                        grayscale: [{
                            grayscale: ["", R, $, B]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [R, $, B]
                        }],
                        invert: [{
                            invert: ["", R, $, B]
                        }],
                        saturate: [{
                            saturate: [R, $, B]
                        }],
                        sepia: [{
                            sepia: ["", R, $, B]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none", $, B]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": ef()
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [R, $, B]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [R, $, B]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": ["", R, $, B]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [R, $, B]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": ["", R, $, B]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [R, $, B]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [R, $, B]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": ["", R, $, B]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": C()
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": C()
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": C()
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", $, B]
                        }],
                        "transition-behavior": [{
                            transition: ["normal", "discrete"]
                        }],
                        duration: [{
                            duration: [R, "initial", $, B]
                        }],
                        ease: [{
                            ease: ["linear", "initial", v, $, B]
                        }],
                        delay: [{
                            delay: [R, $, B]
                        }],
                        animate: [{
                            animate: ["none", y, $, B]
                        }],
                        backface: [{
                            backface: ["hidden", "visible"]
                        }],
                        perspective: [{
                            perspective: [m, $, B]
                        }],
                        "perspective-origin": [{
                            "perspective-origin": k()
                        }],
                        rotate: [{
                            rotate: ep()
                        }],
                        "rotate-x": [{
                            "rotate-x": ep()
                        }],
                        "rotate-y": [{
                            "rotate-y": ep()
                        }],
                        "rotate-z": [{
                            "rotate-z": ep()
                        }],
                        scale: [{
                            scale: eh()
                        }],
                        "scale-x": [{
                            "scale-x": eh()
                        }],
                        "scale-y": [{
                            "scale-y": eh()
                        }],
                        "scale-z": [{
                            "scale-z": eh()
                        }],
                        "scale-3d": ["scale-3d"],
                        skew: [{
                            skew: em()
                        }],
                        "skew-x": [{
                            "skew-x": em()
                        }],
                        "skew-y": [{
                            "skew-y": em()
                        }],
                        transform: [{
                            transform: [$, B, "", "none", "gpu", "cpu"]
                        }],
                        "transform-origin": [{
                            origin: k()
                        }],
                        "transform-style": [{
                            transform: ["3d", "flat"]
                        }],
                        translate: [{
                            translate: eg()
                        }],
                        "translate-x": [{
                            "translate-x": eg()
                        }],
                        "translate-y": [{
                            "translate-y": eg()
                        }],
                        "translate-z": [{
                            "translate-z": eg()
                        }],
                        "translate-none": ["translate-none"],
                        accent: [{
                            accent: er()
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        "caret-color": [{
                            caret: er()
                        }],
                        "color-scheme": [{
                            scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $, B]
                        }],
                        "field-sizing": [{
                            "field-sizing": ["fixed", "content"]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["auto", "none"]
                        }],
                        resize: [{
                            resize: ["none", "", "y", "x"]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": C()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": C()
                        }],
                        "scroll-my": [{
                            "scroll-my": C()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": C()
                        }],
                        "scroll-me": [{
                            "scroll-me": C()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": C()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": C()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": C()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": C()
                        }],
                        "scroll-p": [{
                            "scroll-p": C()
                        }],
                        "scroll-px": [{
                            "scroll-px": C()
                        }],
                        "scroll-py": [{
                            "scroll-py": C()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": C()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": C()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": C()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": C()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": C()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": C()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", $, B]
                        }],
                        fill: [{
                            fill: ["none", ...er()]
                        }],
                        "stroke-w": [{
                            stroke: [R, G, H, V]
                        }],
                        stroke: [{
                            stroke: ["none", ...er()]
                        }],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        translate: ["translate-x", "translate-y", "translate-none"],
                        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    },
                    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
                }
            })
        },
        52973: e => {
            var t = {
                linear: function(e, t, r, n) {
                    return (r - t) * e / n + t
                },
                easeInQuad: function(e, t, r, n) {
                    return (r - t) * (e /= n) * e + t
                },
                easeOutQuad: function(e, t, r, n) {
                    return -(r - t) * (e /= n) * (e - 2) + t
                },
                easeInOutQuad: function(e, t, r, n) {
                    var o = r - t;
                    return (e /= n / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t
                },
                easeInCubic: function(e, t, r, n) {
                    return (r - t) * (e /= n) * e * e + t
                },
                easeOutCubic: function(e, t, r, n) {
                    return (r - t) * ((e = e / n - 1) * e * e + 1) + t
                },
                easeInOutCubic: function(e, t, r, n) {
                    var o = r - t;
                    return (e /= n / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t
                },
                easeInQuart: function(e, t, r, n) {
                    return (r - t) * (e /= n) * e * e * e + t
                },
                easeOutQuart: function(e, t, r, n) {
                    return -(r - t) * ((e = e / n - 1) * e * e * e - 1) + t
                },
                easeInOutQuart: function(e, t, r, n) {
                    var o = r - t;
                    return (e /= n / 2) < 1 ? o / 2 * e * e * e * e + t : -o / 2 * ((e -= 2) * e * e * e - 2) + t
                },
                easeInQuint: function(e, t, r, n) {
                    return (r - t) * (e /= n) * e * e * e * e + t
                },
                easeOutQuint: function(e, t, r, n) {
                    return (r - t) * ((e = e / n - 1) * e * e * e * e + 1) + t
                },
                easeInOutQuint: function(e, t, r, n) {
                    var o = r - t;
                    return (e /= n / 2) < 1 ? o / 2 * e * e * e * e * e + t : o / 2 * ((e -= 2) * e * e * e * e + 2) + t
                },
                easeInSine: function(e, t, r, n) {
                    var o = r - t;
                    return -o * Math.cos(e / n * (Math.PI / 2)) + o + t
                },
                easeOutSine: function(e, t, r, n) {
                    return (r - t) * Math.sin(e / n * (Math.PI / 2)) + t
                },
                easeInOutSine: function(e, t, r, n) {
                    return -(r - t) / 2 * (Math.cos(Math.PI * e / n) - 1) + t
                },
                easeInExpo: function(e, t, r, n) {
                    return 0 == e ? t : (r - t) * Math.pow(2, 10 * (e / n - 1)) + t
                },
                easeOutExpo: function(e, t, r, n) {
                    var o = r - t;
                    return e == n ? t + o : o * (-Math.pow(2, -10 * e / n) + 1) + t
                },
                easeInOutExpo: function(e, t, r, n) {
                    var o = r - t;
                    return 0 === e ? t : e === n ? t + o : (e /= n / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : o / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                },
                easeInCirc: function(e, t, r, n) {
                    return -(r - t) * (Math.sqrt(1 - (e /= n) * e) - 1) + t
                },
                easeOutCirc: function(e, t, r, n) {
                    return (r - t) * Math.sqrt(1 - (e = e / n - 1) * e) + t
                },
                easeInOutCirc: function(e, t, r, n) {
                    var o = r - t;
                    return (e /= n / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + t : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                },
                easeInElastic: function(e, t, r, n) {
                    var o, i, a, l = r - t;
                    return (a = 1.70158, i = 0, o = l, 0 === e) ? t : 1 == (e /= n) ? t + l : (i || (i = .3 * n), o < Math.abs(l) ? (o = l, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(l / o), -(o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e * n - a) / i)) + t)
                },
                easeOutElastic: function(e, t, r, n) {
                    var o, i, a, l = r - t;
                    return (a = 1.70158, i = 0, o = l, 0 === e) ? t : 1 == (e /= n) ? t + l : (i || (i = .3 * n), o < Math.abs(l) ? (o = l, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(l / o), o * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e * n - a) / i) + l + t)
                },
                easeInOutElastic: function(e, t, r, n) {
                    var o, i, a, l = r - t;
                    return (a = 1.70158, i = 0, o = l, 0 === e) ? t : 2 == (e /= n / 2) ? t + l : (i || (i = .3 * 1.5 * n), o < Math.abs(l) ? (o = l, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(l / o), e < 1) ? -.5 * (o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e * n - a) / i)) + t : o * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e * n - a) / i) * .5 + l + t
                },
                easeInBack: function(e, t, r, n, o) {
                    return void 0 === o && (o = 1.70158), (r - t) * (e /= n) * e * ((o + 1) * e - o) + t
                },
                easeOutBack: function(e, t, r, n, o) {
                    return void 0 === o && (o = 1.70158), (r - t) * ((e = e / n - 1) * e * ((o + 1) * e + o) + 1) + t
                },
                easeInOutBack: function(e, t, r, n, o) {
                    var i = r - t;
                    return (void 0 === o && (o = 1.70158), (e /= n / 2) < 1) ? i / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + t : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + t
                },
                easeInBounce: function(e, r, n, o) {
                    var i, a = n - r;
                    return i = t.easeOutBounce(o - e, 0, a, o), a - i + r
                },
                easeOutBounce: function(e, t, r, n) {
                    var o = r - t;
                    return (e /= n) < 1 / 2.75 ? 7.5625 * e * e * o + t : e < 2 / 2.75 ? o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
                },
                easeInOutBounce: function(e, r, n, o) {
                    var i, a = n - r;
                    return e < o / 2 ? .5 * t.easeInBounce(2 * e, 0, a, o) + r : .5 * t.easeOutBounce(2 * e - o, 0, a, o) + .5 * a + r
                }
            };
            e.exports = t
        },
        57500: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(52959)._(r(713)),
                o = r(97196),
                i = n.default.createContext(o.imageConfigDefault)
        },
        59607: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("sun", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4",
                    key: "4exip2"
                }],
                ["path", {
                    d: "M12 2v2",
                    key: "tus03m"
                }],
                ["path", {
                    d: "M12 20v2",
                    key: "1lh1kg"
                }],
                ["path", {
                    d: "m4.93 4.93 1.41 1.41",
                    key: "149t6j"
                }],
                ["path", {
                    d: "m17.66 17.66 1.41 1.41",
                    key: "ptbguv"
                }],
                ["path", {
                    d: "M2 12h2",
                    key: "1t8f8n"
                }],
                ["path", {
                    d: "M20 12h2",
                    key: "1q8mjw"
                }],
                ["path", {
                    d: "m6.34 17.66-1.41 1.41",
                    key: "1m8zz5"
                }],
                ["path", {
                    d: "m19.07 4.93-1.41 1.41",
                    key: "1shlcs"
                }]
            ])
        },
        59943: (e, t, r) => {
            r.d(t, {
                k5: () => u
            });
            var n = r(713),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                i = n.createContext && n.createContext(o),
                a = ["attr", "size", "title"];

            function l() {
                return (l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                        var n, o, i;
                        n = e, o = t, i = r[t], (o = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(o)) in n ? Object.defineProperty(n, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function u(e) {
                return t => n.createElement(d, l({
                    attr: c({}, e.attr)
                }, t), function e(t) {
                    return t && t.map((t, r) => n.createElement(t.tag, c({
                        key: r
                    }, t.attr), e(t.child)))
                }(e.child))
            }

            function d(e) {
                var t = t => {
                    var r, {
                            attr: o,
                            size: i,
                            title: s
                        } = e,
                        u = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n]
                                    } return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, a),
                        d = i || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", l({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, u, {
                        className: r,
                        style: c(c({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), s && n.createElement("title", null, s), e.children)
                };
                return void 0 !== i ? n.createElement(i.Consumer, null, e => t(e)) : t(o)
            }
        },
        61952: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("globe", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                    key: "13o1zl"
                }],
                ["path", {
                    d: "M2 12h20",
                    key: "9i4pu4"
                }]
            ])
        },
        64163: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                DecodeError: function() {
                    return h
                },
                MiddlewareNotFoundError: function() {
                    return y
                },
                MissingStaticPage: function() {
                    return v
                },
                NormalizeError: function() {
                    return m
                },
                PageNotFoundError: function() {
                    return g
                },
                SP: function() {
                    return f
                },
                ST: function() {
                    return p
                },
                WEB_VITALS: function() {
                    return r
                },
                execOnce: function() {
                    return n
                },
                getDisplayName: function() {
                    return s
                },
                getLocationOrigin: function() {
                    return a
                },
                getURL: function() {
                    return l
                },
                isAbsoluteUrl: function() {
                    return i
                },
                isResSent: function() {
                    return c
                },
                loadGetInitialProps: function() {
                    return d
                },
                normalizeRepeatedSlashes: function() {
                    return u
                },
                stringifyError: function() {
                    return b
                }
            });
            let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function n(e) {
                let t, r = !1;
                return function() {
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return r || (r = !0, t = e(...o)), t
                }
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                i = e => o.test(e);

            function a() {
                let {
                    protocol: e,
                    hostname: t,
                    port: r
                } = window.location;
                return e + "//" + t + (r ? ":" + r : "")
            }

            function l() {
                let {
                    href: e
                } = window.location, t = a();
                return e.substring(t.length)
            }

            function s(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function c(e) {
                return e.finished || e.headersSent
            }

            function u(e) {
                let t = e.split("?");
                return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
            }
            async function d(e, t) {
                let r = t.res || t.ctx && t.ctx.res;
                if (!e.getInitialProps) return t.ctx && t.Component ? {
                    pageProps: await d(t.Component, t.ctx)
                } : {};
                let n = await e.getInitialProps(t);
                if (r && c(r)) return n;
                if (!n) throw Object.defineProperty(Error('"' + s(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
                return n
            }
            let f = "undefined" != typeof performance,
                p = f && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
            class h extends Error {}
            class m extends Error {}
            class g extends Error {
                constructor(e) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e
                }
            }
            class v extends Error {
                constructor(e, t) {
                    super(), this.message = "Failed to load static file for page: " + e + " " + t
                }
            }
            class y extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function b(e) {
                return JSON.stringify({
                    message: e.message,
                    stack: e.stack
                })
            }
        },
        64386: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(713);

            function o(e, t) {
                let r = (0, n.useRef)(null),
                    o = (0, n.useRef)(null);
                return (0, n.useCallback)(n => {
                    if (null === n) {
                        let e = r.current;
                        e && (r.current = null, e());
                        let t = o.current;
                        t && (o.current = null, t())
                    } else e && (r.current = i(e, n)), t && (o.current = i(t, n))
                }, [e, t])
            }

            function i(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                };
                {
                    let r = e(t);
                    return "function" == typeof r ? r : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        65369: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(713),
                o = n.useLayoutEffect,
                i = n.useEffect;

            function a(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: r
                } = e;

                function a() {
                    if (t && t.mountedInstances) {
                        let o = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(r(o, e))
                    }
                }
                return o(() => {
                    var r;
                    return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                        var r;
                        null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                    }
                }), o(() => (t && (t._pendingUpdate = a), () => {
                    t && (t._pendingUpdate = a)
                })), i(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        72840: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("chevron-up", [
                ["path", {
                    d: "m18 15-6-6-6 6",
                    key: "153udz"
                }]
            ])
        },
        74038: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("wrench", [
                ["path", {
                    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
                    key: "cbrjhi"
                }]
            ])
        },
        76392: (e, t, r) => {
            var n = r(30153);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return g
                },
                defaultHead: function() {
                    return f
                }
            });
            let o = r(52959),
                i = r(24796),
                a = r(34941),
                l = i._(r(713)),
                s = o._(r(65369)),
                c = r(16124),
                u = r(70466),
                d = r(13716);

            function f(e) {
                void 0 === e && (e = !1);
                let t = [(0, a.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset")];
                return e || t.push((0, a.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")), t
            }

            function p(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            r(26034);
            let h = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(e, t) {
                let {
                    inAmpMode: r
                } = t;
                return e.reduce(p, []).reverse().concat(f(r).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        r = new Set,
                        n = {};
                    return o => {
                        let i = !0,
                            a = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            a = !0;
                            let t = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(t) ? i = !1 : e.add(t)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? i = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (let e = 0, t = h.length; e < t; e++) {
                                    let t = h[e];
                                    if (o.props.hasOwnProperty(t))
                                        if ("charSet" === t) r.has(t) ? i = !1 : r.add(t);
                                        else {
                                            let e = o.props[t],
                                                r = n[t] || new Set;
                                            ("name" !== t || !a) && r.has(e) ? i = !1 : (r.add(e), n[t] = r)
                                        }
                                }
                        }
                        return i
                    }
                }()).reverse().map((e, t) => {
                    let o = e.key || t;
                    if (n.env.__NEXT_OPTIMIZE_FONTS && !r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = {
                            ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, l.default.cloneElement(e, t)
                    }
                    return l.default.cloneElement(e, {
                        key: o
                    })
                })
            }
            let g = function(e) {
                let {
                    children: t
                } = e, r = (0, l.useContext)(c.AmpStateContext), n = (0, l.useContext)(u.HeadManagerContext);
                return (0, a.jsx)(s.default, {
                    reduceComponentsToState: m,
                    headManager: n,
                    inAmpMode: (0, d.isInAmpMode)(r),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        76906: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("shield", [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                    key: "oel41y"
                }]
            ])
        },
        81559: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), r(26034);
            let n = r(96752),
                o = r(97196),
                i = ["-moz-initial", "fill", "none", "scale-down", void 0];

            function a(e) {
                return void 0 !== e.default
            }

            function l(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function s(e, t) {
                var r, s;
                let c, u, d, {
                        src: f,
                        sizes: p,
                        unoptimized: h = !1,
                        priority: m = !1,
                        loading: g,
                        className: v,
                        quality: y,
                        width: b,
                        height: w,
                        fill: x = !1,
                        style: k,
                        overrideSrc: E,
                        onLoad: S,
                        onLoadingComplete: C,
                        placeholder: P = "empty",
                        blurDataURL: M,
                        fetchPriority: O,
                        decoding: j = "async",
                        layout: R,
                        objectFit: A,
                        objectPosition: T,
                        lazyBoundary: _,
                        lazyRoot: I,
                        ...N
                    } = e,
                    {
                        imgConf: L,
                        showAltText: z,
                        blurComplete: D,
                        defaultLoader: F
                    } = t,
                    W = L || o.imageConfigDefault;
                if ("allSizes" in W) c = W;
                else {
                    let e = [...W.deviceSizes, ...W.imageSizes].sort((e, t) => e - t),
                        t = W.deviceSizes.sort((e, t) => e - t),
                        n = null == (r = W.qualities) ? void 0 : r.sort((e, t) => e - t);
                    c = {
                        ...W,
                        allSizes: e,
                        deviceSizes: t,
                        qualities: n
                    }
                }
                if (void 0 === F) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
                let B = N.loader || F;
                delete N.loader, delete N.srcSet;
                let H = "__next_img_default" in B;
                if (H) {
                    if ("custom" === c.loader) throw Object.defineProperty(Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
                } else {
                    let e = B;
                    B = t => {
                        let {
                            config: r,
                            ...n
                        } = t;
                        return e(n)
                    }
                }
                if (R) {
                    "fill" === R && (x = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    } [R];
                    e && (k = {
                        ...k,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    } [R];
                    t && !p && (p = t)
                }
                let V = "",
                    q = l(b),
                    U = l(w);
                if ((s = f) && "object" == typeof s && (a(s) || void 0 !== s.src)) {
                    let e = a(f) ? f.default : f;
                    if (!e.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (!e.height || !e.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (u = e.blurWidth, d = e.blurHeight, M = M || e.blurDataURL, V = e.src, !x)
                        if (q || U) {
                            if (q && !U) {
                                let t = q / e.width;
                                U = Math.round(e.height * t)
                            } else if (!q && U) {
                                let t = U / e.height;
                                q = Math.round(e.width * t)
                            }
                        } else q = e.width, U = e.height
                }
                let K = !m && ("lazy" === g || void 0 === g);
                (!(f = "string" == typeof f ? f : V) || f.startsWith("data:") || f.startsWith("blob:")) && (h = !0, K = !1), c.unoptimized && (h = !0), H && !c.dangerouslyAllowSVG && f.split("?", 1)[0].endsWith(".svg") && (h = !0);
                let $ = l(y),
                    G = Object.assign(x ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: A,
                        objectPosition: T
                    } : {}, z ? {} : {
                        color: "transparent"
                    }, k),
                    Y = D || "empty" === P ? null : "blur" === P ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: q,
                        heightInt: U,
                        blurWidth: u,
                        blurHeight: d,
                        blurDataURL: M || "",
                        objectFit: G.objectFit
                    }) + '")' : 'url("' + P + '")',
                    X = i.includes(G.objectFit) ? "fill" === G.objectFit ? "100% 100%" : "cover" : G.objectFit,
                    Q = Y ? {
                        backgroundSize: X,
                        backgroundPosition: G.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: Y
                    } : {},
                    Z = function(e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: n,
                            width: o,
                            quality: i,
                            sizes: a,
                            loader: l
                        } = e;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: s,
                            kind: c
                        } = function(e, t, r) {
                            let {
                                deviceSizes: n,
                                allSizes: o
                            } = e;
                            if (r) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let n; n = e.exec(r);) t.push(parseInt(n[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter(t => t >= n[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                                kind: "x"
                            }
                        }(t, o, a), u = s.length - 1;
                        return {
                            sizes: a || "w" !== c ? a : "100vw",
                            srcSet: s.map((e, n) => l({
                                config: t,
                                src: r,
                                quality: i,
                                width: e
                            }) + " " + ("w" === c ? e : n + 1) + c).join(", "),
                            src: l({
                                config: t,
                                src: r,
                                quality: i,
                                width: s[u]
                            })
                        }
                    }({
                        config: c,
                        src: f,
                        unoptimized: h,
                        width: q,
                        quality: $,
                        sizes: p,
                        loader: B
                    });
                return {
                    props: {
                        ...N,
                        loading: K ? "lazy" : g,
                        fetchPriority: O,
                        width: q,
                        height: U,
                        decoding: j,
                        className: v,
                        style: {
                            ...G,
                            ...Q
                        },
                        sizes: Z.sizes,
                        srcSet: Z.srcSet,
                        src: E || Z.src
                    },
                    meta: {
                        unoptimized: h,
                        priority: m,
                        placeholder: P,
                        fill: x
                    }
                }
            }
        },
        82634: (e, t, r) => {
            r.d(t, {
                s: () => a,
                t: () => i
            });
            var n = r(713);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function i(...e) {
                return t => {
                    let r = !1,
                        n = e.map(e => {
                            let n = o(e, t);
                            return r || "function" != typeof n || (r = !0), n
                        });
                    if (r) return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : o(e[t], null)
                        }
                    }
                }
            }

            function a(...e) {
                return n.useCallback(i(...e), e)
            }
        },
        83694: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("activity", [
                ["path", {
                    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
                    key: "169zse"
                }]
            ])
        },
        84360: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "errorOnce", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = e => {}
        },
        86661: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("chevron-down", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        90333: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("chevron-right", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ])
        },
        91535: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("external-link", [
                ["path", {
                    d: "M15 3h6v6",
                    key: "1q9fwt"
                }],
                ["path", {
                    d: "M10 14 21 3",
                    key: "gplh6r"
                }],
                ["path", {
                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                    key: "a6xqqp"
                }]
            ])
        },
        92536: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("user", [
                ["path", {
                    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                    key: "975kel"
                }],
                ["circle", {
                    cx: "12",
                    cy: "7",
                    r: "4",
                    key: "17ys0d"
                }]
            ])
        },
        96065: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return s
                },
                getImageProps: function() {
                    return l
                }
            });
            let n = r(52959),
                o = r(81559),
                i = r(31411),
                a = n._(r(97941));

            function l(e) {
                let {
                    props: t
                } = (0, o.getImgProps)(e, {
                    defaultLoader: a.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !0,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let s = i.Image
        },
        96752: (e, t) => {
            function r(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: o,
                    blurDataURL: i,
                    objectFit: a
                } = e, l = n ? 40 * n : t, s = o ? 40 * o : r, c = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        97196: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                VALID_LOADERS: function() {
                    return r
                },
                imageConfigDefault: function() {
                    return n
                }
            });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "attachment",
                    localPatterns: void 0,
                    remotePatterns: [],
                    qualities: void 0,
                    unoptimized: !1
                }
        },
        97941: (e, t) => {
            function r(e) {
                var t;
                let {
                    config: r,
                    src: n,
                    width: o,
                    quality: i
                } = e, a = i || (null == (t = r.qualities) ? void 0 : t.reduce((e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
                return r.path + "?url=" + encodeURIComponent(n) + "&w=" + o + "&q=" + a + (n.startsWith("/_next/static/media/"), "")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        98704: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(53876).A)("server", [
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "2",
                    rx: "2",
                    ry: "2",
                    key: "ngkwjq"
                }],
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2",
                    ry: "2",
                    key: "iecqi9"
                }],
                ["line", {
                    x1: "6",
                    x2: "6.01",
                    y1: "6",
                    y2: "6",
                    key: "16zg32"
                }],
                ["line", {
                    x1: "6",
                    x2: "6.01",
                    y1: "18",
                    y2: "18",
                    key: "nzw8ys"
                }]
            ])
        }
    }
]);