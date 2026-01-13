(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6654],
  {
    2318: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => y });
      var r = a(34941),
        s = a(713),
        i = a(67618),
        l = a(63850),
        n = a(48355),
        o = a(51874),
        c = a(89409),
        d = a(48949),
        m = a(46007),
        x = a(31871),
        p = a(76906),
        h = a(26428),
        g = a(83306),
        u = a(52490);
      function b() {
        var e;
        let t = (0, n.useRouter)(),
          a = (0, n.usePathname)(),
          b = (0, n.useSearchParams)(),
          {
            selectedCurrency: f,
            setSelectedCurrency: y,
            convertPrice: v,
          } = (0, g.H)(),
          { t: w } = (0, u.o)(),
          j = a.split("/").filter(Boolean).pop() || "india",
          [N, k] = (0, s.useState)(
            (null == (e = h.a[0]) ? void 0 : e.id) || "minecraft"
          ),
          [P, T] = (0, s.useState)(j),
          [S, A] = (0, s.useState)(b.get("cycle") || "monthly"),
          [C, E] = (0, s.useState)(b.get("weeklyType") || "weekly"),
          [_, M] = (0, s.useState)(4);
        (0, s.useEffect)(() => {
          let e = new URLSearchParams();
          e.set("cycle", S), "weekly" === S && e.set("weeklyType", C);
          let a = "/minecraft/".concat(P, "?").concat(e.toString());
          a !== window.location.pathname + window.location.search &&
            t.push(a, { scroll: !1 });
        }, [P, S, C, t]),
          (0, s.useEffect)(() => {
            h.j.some((e) => e.id === j) && T(j);
          }, [j]);
        let F = (e) => {
            let t = e,
              a = "/mo";
            return (
              "weekly" === S
                ? "weekly" === C
                  ? ((t = e / 4), (a = "/wk"))
                  : "biweekly" === C
                  ? ((t = e / 2), (a = "/2wk"))
                  : "triweekly" === C && ((t = (e / 4) * 3), (a = "/3wk"))
                : "monthly" === S
                ? ((t = e), (a = "/mo"))
                : "quarterly" === S
                ? ((t = 3 * e), (a = "/3mo"))
                : "annually" === S && ((t = 12 * e), (a = "/yr")),
              { price: Math.floor(t).toString().padStart(2, "0"), unit: a }
            );
          },
          I = h.a.find((e) => e.id === N),
          B = h.j.find((e) => e.id === P);
        if (!I || !B) return null;
        let q = (null == I ? void 0 : I.plans) || [],
          z = q.slice(0, _);
        return (0, r.jsxs)("div", {
          className:
            "bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
          children: [
            (0, r.jsxs)("div", {
              className: "absolute inset-0",
              children: [
                (0, r.jsx)("div", {
                  className: "absolute inset-0 bg-cover bg-center",
                  style: {
                    backgroundImage: "url('".concat(
                      null == I ? void 0 : I.banner,
                      "')"
                    ),
                  },
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/40 to-transparent dark:from-[#0a0b0f] dark:via-[#0a0b0f]/60 dark:to-transparent",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-gray-50/40 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/95 dark:to-[#0a0b0f]/60",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "relative z-10 mt-16 max-w-7xl mx-auto",
              children: [
                (0, r.jsx)(i.P.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8 },
                  className: "text-left mb-8",
                  style: {
                    "--game-color":
                      (null == I ? void 0 : I.primaryColor) || "#3b82f6",
                  },
                  children: (0, r.jsxs)("div", {
                    className:
                      "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "inline-flex items-left gap-2 bg-[var(--game-color)]/10 px-4 py-2 rounded-tl-xl rounded-br-xl mb-4",
                            children: (0, r.jsx)("span", {
                              className: "text-[var(--game-color)] text-sm",
                              children: w("gameServerList.badge"),
                            }),
                          }),
                          (0, r.jsxs)("h2", {
                            className:
                              "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font tracking-tight capitalize flex items-center gap-3",
                            children: [
                              (0, r.jsx)(o.default, {
                                src: "/icons/mc.webp",
                                alt: "Minecraft",
                                width: 40,
                                height: 40,
                                className:
                                  "w-[1.1em] h-[1.1em] object-contain mb-1",
                              }),
                              (0, r.jsxs)("span", {
                                children: [
                                  w("gameServerList.headingMain"),
                                  " ",
                                  (0, r.jsx)("span", {
                                    style: {
                                      color:
                                        {
                                          india: "#22c55e",
                                          germany: "#ef4444",
                                          singapore: "#3b82f6",
                                          usa: "#f97316",
                                        }[P] ||
                                        (null == I ? void 0 : I.primaryColor),
                                    },
                                    children: null == B ? void 0 : B.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-md text-gray-600 max-w-3xl dark:text-gray-300",
                            children: w("gameServerList.description"),
                          }),
                        ],
                      }),
                      (0, r.jsx)(g.J, {
                        selectedCurrency: f,
                        onCurrencyChange: y,
                        className: "w-full sm:w-64 mt-4 sm:mt-0",
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(i.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.2 },
                  className: "mb-4",
                  style: {
                    "--game-color":
                      (null == I ? void 0 : I.primaryColor) || "#3b82f6",
                  },
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 items-start",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col items-start lg:col-span-5 pt-8",
                          children: [
                            (0, r.jsx)("h3", {
                              className:
                                "text-sm font-medium text-gray-700 dark:text-gray-300 mb-6",
                              children: w("gameServerList.step2"),
                            }),
                            (0, r.jsx)("div", {
                              className: "flex flex-wrap gap-2",
                              children: h.j.map((e) =>
                                (0, r.jsxs)(
                                  "button",
                                  {
                                    onClick: () => T(e.id),
                                    className:
                                      "h-12 flex items-center gap-3 px-4 rounded-tl-xl rounded-br-xl font-medium transition-all duration-300 backdrop-blur-sm ".concat(
                                        P === e.id
                                          ? "bg-[var(--game-color)]/10 border border-[var(--game-color)]/30 text-[var(--game-color)] shadow-lg"
                                          : "bg-white/5 dark:bg-gray-800/20 border border-transparent dark:border-white/10 text-gray-700 dark:text-gray-400 hover:border-[var(--game-color)]/30"
                                      ),
                                    children: [
                                      (0, r.jsx)(o.default, {
                                        src: e.flag || "/placeholder.svg",
                                        alt: "".concat(e.name, " flag"),
                                        width: 24,
                                        height: 24,
                                        className: "rounded-full object-cover",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "text-sm font-medium",
                                        children: e.name,
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col items-start lg:col-span-7 pt-8",
                          children: [
                            (0, r.jsx)("h3", {
                              className:
                                "text-sm font-medium text-gray-700 dark:text-gray-300 mb-6",
                              children:
                                w("gameServerList.step5") || "3. Billing Cycle",
                            }),
                            (0, r.jsx)("div", {
                              className: "flex flex-wrap gap-3 items-start",
                              children: [
                                "weekly",
                                "monthly",
                                "quarterly",
                                "annually",
                              ].map((e) =>
                                (0, r.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "relative flex flex-col items-center gap-2",
                                    children: [
                                      (0, r.jsxs)("button", {
                                        onClick: () => A(e),
                                        className:
                                          "h-12 flex items-center gap-4 px-6 rounded-tl-xl rounded-br-xl font-medium transition-all duration-300 backdrop-blur-sm ".concat(
                                            S === e
                                              ? "bg-[var(--game-color)]/10 border border-[var(--game-color)]/30 text-[var(--game-color)] shadow-lg"
                                              : "bg-white/5 dark:bg-gray-800/20 border border-transparent dark:border-white/10 text-gray-700 dark:text-gray-400 hover:border-[var(--game-color)]/30"
                                          ),
                                        children: [
                                          (0, r.jsx)(c.A, {
                                            className: "w-5 h-5",
                                          }),
                                          (0, r.jsx)("span", {
                                            className:
                                              "text-sm font-semibold uppercase tracking-wider",
                                            children:
                                              w("billingCycle.".concat(e)) || e,
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(l.N, {
                                        children:
                                          "weekly" === e &&
                                          "weekly" === S &&
                                          (0, r.jsx)(i.P.div, {
                                            initial: { opacity: 0, scale: 0.8 },
                                            animate: { opacity: 1, scale: 1 },
                                            exit: { opacity: 0, scale: 0.8 },
                                            className: "flex gap-1 mt-1",
                                            children: [
                                              { id: "weekly", label: "1" },
                                              { id: "biweekly", label: "2" },
                                              { id: "triweekly", label: "3" },
                                            ].map((e) =>
                                              (0, r.jsx)(
                                                "button",
                                                {
                                                  onClick: () => E(e.id),
                                                  className:
                                                    "w-8 h-8 flex items-center justify-center rounded-md border text-xs font-bold transition-all ".concat(
                                                      C === e.id
                                                        ? "bg-[var(--game-color)] border-[var(--game-color)] text-white shadow-lg"
                                                        : "bg-white/5 border-white/10 text-gray-500 hover:border-[var(--game-color)]/50"
                                                    ),
                                                  children: e.label,
                                                },
                                                e.id
                                              )
                                            ),
                                          }),
                                      }),
                                    ],
                                  },
                                  e
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "mt-14 flex items-center gap-4 ml-1",
                      children: [
                        (0, r.jsx)(o.default, {
                          src:
                            "india" === P
                              ? "/advertisement/amd.svg"
                              : "/cpu/intel.svg",
                          alt: "CPU Brand",
                          width: 42,
                          height: 42,
                          className: "object-contain opacity-90",
                        }),
                        (0, r.jsxs)("p", {
                          className:
                            "text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 orbitron-font",
                          children: [
                            w("gameServerList.cpuPowerPrefix"),
                            " ",
                            (0, r.jsx)("span", {
                              className: "text-[#2563EB] font-bold",
                              children: w("gameServerList.cpu.".concat(P)),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("h3", {
                  className:
                    "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 mt-12",
                  children: w("gameServerList.step4"),
                }),
                (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                  children: z.map((e, t) => {
                    let { price: a, unit: s } = F(e.price);
                    return (0, r.jsx)(
                      i.P.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { duration: 0.5, delay: 0.1 * t },
                        style: {
                          "--game-color": null == I ? void 0 : I.primaryColor,
                        },
                        className:
                          "relative overflow-hidden rounded-xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm border border-[var(--game-color)]/30 hover:border-[var(--game-color)]/30 dark:hover:border-[var(--game-color)]/40 transition-all duration-300",
                        children: (0, r.jsxs)("div", {
                          className: "p-6",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-3 mb-4",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "relative w-8 h-8 rounded-md",
                                  children: (0, r.jsx)(o.default, {
                                    src: e.iconImage || "/placeholder.svg",
                                    alt: "".concat(e.name, " Icon"),
                                    fill: !0,
                                    sizes: "32px",
                                    className: "object-contain rounded-md",
                                  }),
                                }),
                                (0, r.jsx)("h3", {
                                  className:
                                    "text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight",
                                  children: e.name,
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "space-y-4 mb-6",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, r.jsx)(d.A, {
                                      className:
                                        "w-5 h-5 text-[var(--game-color)]",
                                    }),
                                    (0, r.jsxs)("span", {
                                      className:
                                        "text-gray-600 dark:text-gray-300 font-medium",
                                      children: [e.ram, " RAM"],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, r.jsx)(m.A, {
                                      className:
                                        "w-5 h-5 text-[var(--game-color)]",
                                    }),
                                    (0, r.jsxs)("span", {
                                      className:
                                        "text-gray-600 dark:text-gray-300 font-medium",
                                      children: [e.cpu, " CPU"],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, r.jsx)(x.A, {
                                      className:
                                        "w-5 h-5 text-[var(--game-color)]",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-600 dark:text-gray-300 font-medium",
                                      children: e.storage,
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, r.jsx)(p.A, {
                                      className:
                                        "w-5 h-5 text-[var(--game-color)]",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-gray-600 dark:text-gray-300 font-medium",
                                      children: w(
                                        "gameServerList.ddosProtection"
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex items-baseline gap-1 mb-6",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "text-3xl font-bold text-[var(--game-color)]",
                                  children: v("$".concat(a)),
                                }),
                                (0, r.jsx)("span", {
                                  className: "text-gray-500 dark:text-gray-400",
                                  children: s,
                                }),
                              ],
                            }),
                            (0, r.jsxs)("a", {
                              href: e.orderLink,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "orbitron-font w-full bg-[var(--game-color)] hover:opacity-90 dark:bg-[var(--game-color)]/30 text-white dark:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm",
                              children: [
                                w("gameServerList.orderNow"),
                                (0, r.jsx)("svg", {
                                  className: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.id
                    );
                  }),
                }),
                q.length > _ &&
                  (0, r.jsx)("div", {
                    className: "mt-12 flex justify-center",
                    children: (0, r.jsx)("button", {
                      onClick: () => M(q.length),
                      style: {
                        "--game-color": null == I ? void 0 : I.primaryColor,
                      },
                      className:
                        "flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--game-color)]/10 border border-[var(--game-color)]/30 text-[var(--game-color)] font-bold hover:bg-[var(--game-color)]/20 hover:scale-105 cursor-pointer transition-all duration-300 orbitron-font",
                      children:
                        w("gameServerList.viewMore") || "View More Plans",
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function f() {
        return (0, r.jsx)("div", {
          className:
            "min-h-screen bg-gray-50 dark:bg-[#0a0b0f] flex items-center justify-center",
          children: (0, r.jsx)("div", {
            className:
              "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500",
          }),
        });
      }
      function y() {
        return (0, r.jsx)(s.Suspense, {
          fallback: (0, r.jsx)(f, {}),
          children: (0, r.jsx)(b, {}),
        });
      }
    },
    6654: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 59245)),
        Promise.resolve().then(a.bind(a, 41182)),
        Promise.resolve().then(a.bind(a, 21521)),
        Promise.resolve().then(a.bind(a, 2318)),
        Promise.resolve().then(a.bind(a, 62038)),
        Promise.resolve().then(a.bind(a, 11560)),
        Promise.resolve().then(a.bind(a, 86501)),
        Promise.resolve().then(a.bind(a, 53424)),
        Promise.resolve().then(a.bind(a, 55561)),
        Promise.resolve().then(a.bind(a, 53110)),
        Promise.resolve().then(a.bind(a, 34558));
    },
    11560: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => b });
      var r = a(34941),
        s = a(713),
        i = a(51874),
        l = a(33985),
        n = a(90333),
        o = a(36216),
        c = a(57886),
        d = a(31969),
        m = a(5279),
        x = a(63850),
        p = a(67618),
        h = a(48355),
        g = a(26428);
      let u = (e) => {
          let { text: t } = e,
            [a, i] = (0, s.useState)(!1);
          return (0, r.jsxs)("div", {
            className: "relative flex items-center",
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1),
            children: [
              (0, r.jsx)(l.A, {
                size: 14,
                className:
                  "text-gray-600 hover:text-[#2563EB] transition-colors cursor-help",
              }),
              (0, r.jsx)(x.N, {
                children:
                  a &&
                  (0, r.jsxs)(p.P.div, {
                    initial: { opacity: 0, y: 5, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: { opacity: 0, y: 5, scale: 0.95 },
                    className:
                      "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 bg-white dark:bg-[#111318] border border-secondary rounded-lg shadow-2xl z-[60] pointer-events-none",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "text-xs text-gray-700 dark:text-gray-300 leading-tight text-center font-sans font-medium",
                        children: t,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-[#111318]",
                      }),
                    ],
                  }),
              }),
            ],
          });
        },
        b = () => {
          let e = g.a.find((e) => "minecraft" === e.id),
            t = (0, h.useSearchParams)(),
            [a, l] = (0, s.useState)("1.21"),
            [x, p] = (0, s.useState)("Vanilla"),
            [b, f] = (0, s.useState)(2),
            [y, v] = (0, s.useState)(0),
            [w, j] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            let e = () => {
              if ("#ram" === window.location.hash) {
                let e = document.getElementById("ram");
                e &&
                  setTimeout(() => {
                    e.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
              }
            };
            return (
              e(),
              window.addEventListener("hashchange", e),
              () => window.removeEventListener("hashchange", e)
            );
          }, [t]),
            (0, s.useEffect)(() => {
              ("Vanilla" === x || "Bedrock" === x) && (v(0), j(!1));
            }, [x]);
          let N = (0, s.useMemo)(() => {
            if (!e || !e.plans) return null;
            let t = 2;
            "1.21" === a || "snapshots" === a
              ? (t += 2)
              : "1.16" === a && (t += 1),
              "Modded" === x && (t += 3.5),
              "Bedrock" === x && (t *= 0.7),
              "Optimized" === x && (t -= 0.5),
              (t += 0.12 * b + 0.08 * y),
              w && (t *= 0.8);
            let r = [...e.plans].sort(
              (e, t) => parseInt(e.ram) - parseInt(t.ram)
            );
            return r.find((e) => parseInt(e.ram) >= t) || r[r.length - 1];
          }, [a, x, b, y, w, e]);
          return e
            ? (0, r.jsxs)("section", {
                id: "ram",
                className: "max-w-7xl mx-auto px-4 md:px-6 py-12 scroll-mt-32",
                children: [
                  (0, r.jsxs)("div", {
                    className: "text-center mb-10",
                    children: [
                      (0, r.jsxs)("h2", {
                        className:
                          "text-3xl md:text-4xl font-bold orbitron-font text-gray-900 dark:text-white mb-3 tracking-wider",
                        children: [
                          "Not sure which one to ",
                          (0, r.jsx)("span", {
                            className: "text-[#2563EB]",
                            children: "pick?",
                          }),
                        ],
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base",
                        children:
                          "Use our RAM calculator to find the perfect server package for your needs.",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "bg-white/90 dark:bg-[#0A0B0F]/90 border border-secondary rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-sm relative overflow-hidden [container-type:inline-size]",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "absolute -top-32 -right-32 w-64 h-64 bg-[#2563EB]/10 blur-[100px] rounded-full pointer-events-none",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col md:flex-row gap-8 md:gap-12 relative z-10",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex-1 space-y-6",
                            children: [
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsx)("h3", {
                                    className:
                                      "text-3xl font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2 orbitron-font",
                                    children: "RAM Calculator",
                                  }),
                                  (0, r.jsxs)("p", {
                                    className:
                                      "text-gray-600 dark:text-gray-400 text-sm max-w-lg leading-relaxed",
                                    children: [
                                      "Configure your server requirements to find the ",
                                      (0, r.jsx)("span", {
                                        className:
                                          "text-[#2563EB] dark:text-[#3A8BFF] font-bold",
                                        children: "Iron-Clad",
                                      }),
                                      " recommendation.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, r.jsx)("label", {
                                    className:
                                      "text-xs font-bold uppercase tracking-[0.2em] text-gray-500 ml-1 orbitron-font",
                                    children: "Minecraft Version",
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      (0, r.jsxs)("select", {
                                        value: a,
                                        onChange: (e) => l(e.target.value),
                                        className:
                                          "w-full bg-gray-50 dark:bg-[#111318] border border-white/10 p-3 rounded-xl text-sm text-gray-900 dark:text-white appearance-none focus:ring-1 focus:ring-[#2563EB] outline-none transition-all cursor-pointer",
                                        children: [
                                          (0, r.jsx)("option", {
                                            value: "1.21",
                                            children: "Minecraft 1.21+",
                                          }),
                                          (0, r.jsx)("option", {
                                            value: "1.16",
                                            children: "1.16 - 1.20",
                                          }),
                                          (0, r.jsx)("option", {
                                            value: "1.13",
                                            children: "1.13 - 1.15",
                                          }),
                                          (0, r.jsx)("option", {
                                            value: "1.12",
                                            children: "1.12 or older",
                                          }),
                                          (0, r.jsx)("option", {
                                            value: "snapshots",
                                            children: "Snapshots",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(n.A, {
                                        className:
                                          "absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-500 w-4 h-4 pointer-events-none",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  (0, r.jsx)("label", {
                                    className:
                                      "text-xs font-bold uppercase tracking-[0.2em] text-gray-500 ml-1 orbitron-font",
                                    children: "Server Type",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "grid grid-cols-2 md:grid-cols-4 gap-3",
                                    children: [
                                      {
                                        id: "Vanilla",
                                        icon: o.A,
                                        sub: "Java Edition",
                                      },
                                      {
                                        id: "Optimized",
                                        icon: c.A,
                                        sub: "Paper, Purpur",
                                      },
                                      {
                                        id: "Modded",
                                        icon: d.A,
                                        sub: "Forge, Fabric",
                                      },
                                      {
                                        id: "Bedrock",
                                        icon: m.A,
                                        sub: "Bedrock Edition",
                                      },
                                    ].map((e) =>
                                      (0, r.jsxs)(
                                        "button",
                                        {
                                          onClick: () => p(e.id),
                                          className:
                                            "p-5 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 cursor-pointer ".concat(
                                              x === e.id
                                                ? "border-[#2563EB] bg-[#2563EB]/10 shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                                                : "border-white/5 bg-white/[0.02] hover:border-secondary"
                                            ),
                                          children: [
                                            (0, r.jsx)(e.icon, {
                                              className: "w-6 h-6 ".concat(
                                                x === e.id
                                                  ? "text-[#2563EB]"
                                                  : "text-gray-500"
                                              ),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "text-center",
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "text-sm font-bold ".concat(
                                                      x === e.id
                                                        ? "text-gray-900 dark:text-white"
                                                        : "text-gray-400",
                                                      " orbitron-font tracking-wide"
                                                    ),
                                                  children: e.id,
                                                }),
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "text-[11px] text-gray-500 font-semibold uppercase tracking-tight mt-0.5",
                                                  children: e.sub,
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "flex justify-between items-end",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 ml-1",
                                        children: [
                                          (0, r.jsx)("label", {
                                            className:
                                              "text-xs font-bold uppercase tracking-[0.2em] text-gray-500 orbitron-font",
                                            children: "Expected Active Players",
                                          }),
                                          (0, r.jsx)(u, {
                                            text: "The average number of players online at the same time. More players require more RAM to handle entity tracking and chunk loading.",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("span", {
                                        className:
                                          "text-xl font-bold text-[#2563EB] orbitron-font",
                                        children: [
                                          b,
                                          (0, r.jsx)("span", {
                                            className: "text-gray-400 ml-0.5",
                                            children: "+",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("input", {
                                    type: "range",
                                    min: "2",
                                    max: "100",
                                    step: "1",
                                    value: b,
                                    onChange: (e) =>
                                      f(parseInt(e.target.value)),
                                    className:
                                      "w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-[#2563EB]",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "space-y-2 transition-all duration-300 ".concat(
                                        "Vanilla" === x || "Bedrock" === x
                                          ? "opacity-40 grayscale pointer-events-none"
                                          : ""
                                      ),
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 ml-1",
                                        children: [
                                          (0, r.jsx)("span", {
                                            className:
                                              "text-xs font-bold uppercase tracking-[0.2em] text-gray-500 orbitron-font",
                                            children:
                                              "Modded" === x
                                                ? "Mods"
                                                : "Plugins",
                                          }),
                                          (0, r.jsx)(u, {
                                            text: "Number of extras to install. Vanilla/Bedrock do not use plugins here.",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center bg-gray-50 dark:bg-white/[0.03] border border-white/10 rounded-xl p-1 h-12 shadow-inner",
                                        children: [
                                          (0, r.jsx)("button", {
                                            onClick: () =>
                                              v(Math.max(0, y - 1)),
                                            className:
                                              "w-10 h-full hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-lg text-gray-400 cursor-pointer",
                                            children: "-",
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "flex-1 text-center font-bold text-sm orbitron-font",
                                            children: y,
                                          }),
                                          (0, r.jsx)("button", {
                                            onClick: () => v(y + 1),
                                            className:
                                              "w-10 h-full hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-lg text-gray-400 cursor-pointer",
                                            children: "+",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "space-y-2 transition-all duration-300 ".concat(
                                        "Vanilla" === x || "Bedrock" === x
                                          ? "opacity-40 grayscale pointer-events-none"
                                          : ""
                                      ),
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 ml-1",
                                        children: [
                                          (0, r.jsx)("span", {
                                            className:
                                              "text-xs font-bold uppercase tracking-[0.2em] orbitron-font text-gray-500",
                                            children: "Performance",
                                          }),
                                          (0, r.jsx)(u, {
                                            text: "Optimization engines reduce memory usage.",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        onClick: () => j(!w),
                                        className:
                                          "flex items-center justify-between border px-4 h-12 rounded-xl transition-all duration-500 cursor-pointer ".concat(
                                            w
                                              ? "bg-white/[0.03] border-secondary"
                                              : "bg-black/40 border-white/5"
                                          ),
                                        children: [
                                          (0, r.jsx)("span", {
                                            className:
                                              "text-[10px] text-gray-500 font-bold tracking-widest orbitron-font uppercase",
                                            children: "Optimization",
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "w-8 h-4 rounded-full p-0.5 transition-all duration-500 ".concat(
                                                w
                                                  ? "bg-[#2563EB]"
                                                  : "bg-gray-400 dark:bg-white/10"
                                              ),
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "w-3 h-3 bg-white rounded-full transition-transform duration-500 ".concat(
                                                  w
                                                    ? "translate-x-4"
                                                    : "translate-x-0"
                                                ),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "md:w-[320px] flex items-start",
                            children: (0, r.jsxs)("div", {
                              className:
                                "w-full bg-white dark:bg-[#111318] border border-secondary rounded-3xl overflow-hidden shadow-2xl relative",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "h-1.5 w-full bg-[#2563EB]",
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "p-7 flex flex-col items-center text-center",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold tracking-[0.3em] text-[#2563EB] mb-6 orbitron-font uppercase",
                                      children: "We Recommend",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "relative w-24 h-24 mb-6",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute inset-0 bg-blue-500/10 blur-[40px] rounded-full",
                                        }),
                                        (null == N ? void 0 : N.iconImage) &&
                                          (0, r.jsx)(i.default, {
                                            src: N.iconImage,
                                            alt: "Plan Icon",
                                            fill: !0,
                                            className:
                                              "object-contain relative z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]",
                                          }),
                                      ],
                                    }),
                                    (0, r.jsx)("h3", {
                                      className:
                                        "text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1 orbitron-font",
                                      children: null == N ? void 0 : N.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "text-[#2563EB] font-bold text-lg mb-6 orbitron-font bg-blue-500/5 px-5 py-1.5 rounded-lg border border-secondary inline-block",
                                      children: [
                                        null == N ? void 0 : N.ram,
                                        " RAM",
                                      ],
                                    }),
                                    (0, r.jsxs)("p", {
                                      className:
                                        "text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-8 px-2 font-medium",
                                      children: [
                                        "The ideal choice for a smooth, lag-free ",
                                        x.toLowerCase(),
                                        " world.",
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "w-full space-y-4",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex flex-col",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className:
                                                "text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5 orbitron-font",
                                              children: "Starting at",
                                            }),
                                            (0, r.jsxs)("div", {
                                              className:
                                                "text-4xl font-bold text-gray-900 dark:text-white tracking-tighter orbitron-font",
                                              children: [
                                                "₹",
                                                null == N ? void 0 : N.price,
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-sm text-gray-400 ml-1 font-sans",
                                                  children: "/mo",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("a", {
                                          href:
                                            null == N ? void 0 : N.orderLink,
                                          target: "_blank",
                                          className:
                                            "group w-full py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 uppercase tracking-widest text-[11px] orbitron-font cursor-pointer",
                                          children: [
                                            "Deploy Now",
                                            (0, r.jsx)(n.A, {
                                              className:
                                                "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : null;
        };
    },
    41182: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var r = a(34941),
        s = a(67618),
        i = a(84946),
        l = a(713),
        n = a(51874),
        o = a(52490);
      function c() {
        let { t: e } = (0, o.o)(),
          [t, a] = (0, l.useState)(null),
          c = [
            { question: e("faq-mc.question1"), answer: e("faq-mc.answer1") },
            { question: e("faq-mc.question2"), answer: e("faq-mc.answer2") },
            { question: e("faq-mc.question3"), answer: e("faq-mc.answer3") },
            { question: e("faq-mc.question4"), answer: e("faq-mc.answer4") },
            { question: e("faq-mc.question5"), answer: e("faq-mc.answer5") },
          ];
        return (0, r.jsxs)("div", {
          className:
            "bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8",
          children: [
            (0, r.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/90 to-gray-50 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/90 dark:to-[#0a0b0f]",
            }),
            (0, r.jsx)("div", {
              className:
                "absolute top-20 -left-32 w-64 h-64 blob-primary rounded-full blur-3xl",
            }),
            (0, r.jsx)("div", {
              className: "relative z-10 max-w-7xl mx-auto",
              children: (0, r.jsxs)("div", {
                className: "grid md:grid-cols-2 gap-8 md:gap-12 items-start",
                children: [
                  (0, r.jsx)("div", {
                    className: "hidden md:block",
                    children: (0, r.jsx)("div", {
                      className: "sticky top-24",
                      children: (0, r.jsx)(s.P.div, {
                        initial: { opacity: 0, x: -50 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: !0, margin: "-100px" },
                        transition: { duration: 0.8 },
                        children: (0, r.jsx)("div", {
                          className: "relative h-[300px] md:h-[500px] w-full",
                          children: (0, r.jsx)(n.default, {
                            src: "/features-6.png",
                            alt: "Server Features",
                            fill: !0,
                            style: { objectFit: "contain" },
                            className: "rounded-lg",
                          }),
                        }),
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsxs)(s.P.div, {
                        initial: { opacity: 0, y: 50 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, margin: "-100px" },
                        transition: { duration: 0.8 },
                        className: "mb-8",
                        children: [
                          (0, r.jsxs)("h2", {
                            className:
                              "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 orbitron-font",
                            children: [
                              e("faq-mc.title")
                                .split(" ")
                                .slice(0, -1)
                                .join(" "),
                              " ",
                              (0, r.jsxs)("span", {
                                className: "icon-text-primary relative",
                                children: [
                                  e("faq-mc.title").split(" ").slice(-1)[0],
                                  (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1729 149",
                                    className:
                                      "absolute left-0 w-full text-icon-text-primary",
                                    children: (0, r.jsx)("path", {
                                      d: "M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z",
                                      fill: "currentColor",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-lg sm:text-xl text-gray-600 dark:text-gray-300",
                            children: e("faq-mc.subtitle"),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "space-y-4",
                        children: c.map((e, l) =>
                          (0, r.jsxs)(
                            s.P.div,
                            {
                              initial: { opacity: 0, y: 50 },
                              whileInView: { opacity: 1, y: 0 },
                              viewport: { once: !0, margin: "-100px" },
                              transition: { duration: 0.6, delay: 0.2 * l },
                              className:
                                "bg-white dark:bg-gray-900/5 backdrop-blur-sm border border-secondary rounded-md overflow-hidden hover:bg-gray-50 dark:hover:bg-transparent hover:border-secondary dark:hover:border-secondary hover:hover-gradient dark:hover:hover-gradient hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-all duration-300",
                              children: [
                                (0, r.jsxs)("button", {
                                  onClick: () => a(t === l ? null : l),
                                  className:
                                    "w-full px-4 sm:px-3 py-3 sm:py-3 flex items-center text-left gap-2 sm:gap-4",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "orbitron-font flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-md card-primary dark:card-primary flex items-center justify-center icon-text-primary text-sm sm:text-base",
                                      children: (l + 1)
                                        .toString()
                                        .padStart(2, "0"),
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-icon-text-primary dark:group-hover:text-icon-text-primary",
                                      children: e.question,
                                    }),
                                    t === l
                                      ? (0, r.jsx)(i.gn8, {
                                          className:
                                            "w-5 h-5 icon-text-primary dark:icon-text-primary ml-auto",
                                        })
                                      : (0, r.jsx)(i.$qG, {
                                          className:
                                            "w-5 h-5 icon-text-primary dark:icon-text-primary ml-auto",
                                        }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "px-4 sm:px-6 transition-all duration-300 overflow-hidden ".concat(
                                      t === l
                                        ? "pb-3 sm:pb-4 pl-[52px] sm:pl-[72px]"
                                        : "h-0"
                                    ),
                                  children: (0, r.jsx)("p", {
                                    className:
                                      "text-gray-600 dark:text-gray-300 text-sm sm:text-base",
                                    children: e.answer,
                                  }),
                                }),
                              ],
                            },
                            l
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    53424: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var r = a(34941),
        s = a(713),
        i = a(67618),
        l = a(51874),
        n = a(26765),
        o = a(52490);
      function c() {
        let { t: e } = (0, o.o)(),
          [t, a] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          let e = () => a(window.innerWidth < 768);
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let c = [
            { name: e("mcTypes.feat1") || "Java + Bedrock" },
            { name: e("mcTypes.feat2") || "Plugins & Mods" },
            { name: e("mcTypes.feat3") || "Modpacks" },
            { name: e("mcTypes.feat4") || "Cross-Platform" },
            { name: e("mcTypes.feat5") || "Easy Software Switching" },
            { name: e("mcTypes.feat6") || "GeyserMC Cross-Play" },
          ],
          d = [
            { name: "Vanilla", src: "/icons/vanilla.png" },
            { name: "PaperMC", src: "/icons/papermc.png" },
            { name: "Fabric", src: "/icons/fabric.png" },
            { name: "Forge", src: "/icons/forge.png" },
            { name: "Bedrock", src: "/icons/bedrock.png" },
            { name: "Pufferfish", src: "/icons/pufferfish.png" },
            { name: "CurseForge", src: "/icons/curseforge.webp" },
            { name: "neoforge", src: "/icons/neoforge.png" },
            { name: "purpur", src: "/icons/purpur.png" },
            { name: "leaf", src: "/icons/leaf.png" },
            { name: "velocity", src: "/icons/velocity.png" },
            { name: "bungeecord", src: "/icons/bungeecord.png" },
          ];
        return (0, r.jsx)("section", {
          className:
            "bg-gray-50 dark:bg-[#0a0b0f] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
          children: (0, r.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [
              (0, r.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center mb-6",
                children: [
                  (0, r.jsxs)(i.P.div, {
                    initial: { opacity: 0, x: -50 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.8 },
                    children: [
                      (0, r.jsx)("h2", {
                        className:
                          "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 orbitron-font leading-tight",
                        children: e("mcTypes.title"),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "space-y-5 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8",
                        children: [
                          (0, r.jsxs)("p", {
                            children: [
                              e("mcTypes.p1_text1"),
                              (0, r.jsx)("span", {
                                className:
                                  "font-bold text-gray-900 dark:text-white",
                                children: e("mcTypes.p1_bold1"),
                              }),
                              e("mcTypes.p1_text2"),
                              (0, r.jsx)("span", {
                                className:
                                  "font-bold text-gray-900 dark:text-white",
                                children: e("mcTypes.p1_bold2"),
                              }),
                              e("mcTypes.p1_text3"),
                            ],
                          }),
                          (0, r.jsxs)("p", {
                            children: [
                              e("mcTypes.p2_text1"),
                              (0, r.jsx)("span", {
                                className:
                                  "font-bold text-gray-900 dark:text-white",
                                children: e("mcTypes.p2_bold1"),
                              }),
                              e("mcTypes.p2_text2"),
                              (0, r.jsx)("span", {
                                className:
                                  "font-bold text-gray-900 dark:text-white",
                                children: e("mcTypes.p2_bold2"),
                              }),
                              e("mcTypes.p2_text3"),
                              (0, r.jsx)("span", {
                                className:
                                  "font-bold text-gray-900 dark:text-white",
                                children: e("mcTypes.p2_bold3"),
                              }),
                              e("mcTypes.p2_text4"),
                            ],
                          }),
                          (0, r.jsxs)("p", {
                            children: [
                              e("mcTypes.p3_text1"),
                              (0, r.jsx)("span", {
                                className:
                                  "font-bold text-gray-900 dark:text-white",
                                children: e("mcTypes.p3_bold1"),
                              }),
                              e("mcTypes.p3_text2"),
                              (0, r.jsx)("span", {
                                className:
                                  "font-bold text-gray-900 dark:text-white",
                                children: e("mcTypes.p3_bold2"),
                              }),
                              e("mcTypes.p3_text3"),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "italic text-gray-500",
                            children: e("mcTypes.p4_text1"),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2",
                        children: c.map((e, t) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)(n.A, {
                                  className:
                                    "w-4 h-4 icon-text-primary flex-shrink-0",
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "text-gray-900 dark:text-gray-100 font-medium text-xs sm:text-sm",
                                  children: e.name,
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsx)(i.P.div, {
                    initial: { opacity: 0, x: 50 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.8 },
                    className: "relative hidden lg:block",
                    children: (0, r.jsx)("div", {
                      className: "relative rounded-xl overflow-hidden",
                      children: (0, r.jsx)(l.default, {
                        src: "/minecraftfeatures.png",
                        alt: "Minecraft Server Types",
                        width: 800,
                        height: 500,
                        className: "w-full h-auto object-cover",
                      }),
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "mt-0 overflow-hidden relative py-6",
                children: (0, r.jsx)(i.P.div, {
                  className:
                    "flex gap-2 sm:gap-4 whitespace-nowrap items-center w-max",
                  animate: { x: ["0%", "-50%"] },
                  transition: {
                    x: {
                      repeat: 1 / 0,
                      repeatType: "loop",
                      duration: t ? 15 : 30,
                      ease: "linear",
                    },
                  },
                  children: [...d, ...d].map((e, t) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className:
                          "flex-shrink-0 relative group w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center mx-1",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "absolute inset-0 bg-white/5 dark:bg-white/5 border-secondary border backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10",
                            style: {
                              clipPath:
                                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            },
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "relative w-10 h-10 sm:w-12 sm:h-12 z-10",
                            children: (0, r.jsx)(l.default, {
                              src: e.src,
                              alt: e.name,
                              fill: !0,
                              className:
                                "object-contain transition-transform duration-300 group-hover:scale-110",
                            }),
                          }),
                        ],
                      },
                      "".concat(e.name, "-").concat(t)
                    )
                  ),
                }),
              }),
            ],
          }),
        });
      }
    },
    55561: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => n });
      var r = a(34941),
        s = a(67618),
        i = a(51874),
        l = a(52490);
      function n() {
        let { t: e } = (0, l.o)(),
          t = [
            {
              src: "/icons/betterminecraft.webp",
              alt: "Better Minecraft",
              size: "small",
            },
            {
              src: "/icons/allthemods10.webp",
              alt: "All The Mods 10",
              size: "large",
            },
            {
              src: "/icons/rlcraft_portrait.webp",
              alt: "RLCraft",
              size: "medium",
            },
            { src: "/icons/pixelmon.webp", alt: "SkyFactory", size: "small" },
          ];
        return (0, r.jsx)("section", {
          className:
            "bg-gray-50 dark:bg-[#0a0b0f] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
          children: (0, r.jsx)("div", {
            className: "max-w-7xl mx-auto",
            children: (0, r.jsxs)("div", {
              className: "grid lg:grid-cols-2 gap-12 items-center",
              children: [
                (0, r.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4 h-full",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, r.jsx)(s.P.div, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          className:
                            "relative rounded-2xl overflow-hidden aspect-video border border-secondary",
                          children: (0, r.jsx)(i.default, {
                            src: t[0].src,
                            alt: t[0].alt,
                            fill: !0,
                            className:
                              "object-cover hover:scale-110 transition-transform duration-500",
                          }),
                        }),
                        (0, r.jsx)(s.P.div, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.1 },
                          className:
                            "relative rounded-2xl overflow-hidden aspect-square border border-secondary",
                          children: (0, r.jsx)(i.default, {
                            src: t[3].src,
                            alt: t[3].alt,
                            fill: !0,
                            className:
                              "object-cover hover:scale-110 transition-transform duration-500",
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "space-y-4 pt-8",
                      children: [
                        (0, r.jsx)(s.P.div, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.2 },
                          className:
                            "relative rounded-2xl overflow-hidden aspect-square border border-secondary",
                          children: (0, r.jsx)(i.default, {
                            src: t[1].src,
                            alt: t[1].alt,
                            fill: !0,
                            className:
                              "object-cover hover:scale-110 transition-transform duration-500",
                          }),
                        }),
                        (0, r.jsx)(s.P.div, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.3 },
                          className:
                            "relative rounded-2xl overflow-hidden aspect-video border border-secondary",
                          children: (0, r.jsx)(i.default, {
                            src: t[2].src,
                            alt: t[2].alt,
                            fill: !0,
                            className:
                              "object-cover hover:scale-110 transition-transform duration-500",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(s.P.div, {
                  initial: { opacity: 0, x: 50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8 },
                  children: [
                    (0, r.jsxs)("h2", {
                      className:
                        "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 orbitron-font leading-tight uppercase",
                      children: [
                        "PLAY ",
                        (0, r.jsx)("span", {
                          style: { color: "var(--icon-text-primary)" },
                          children: "MODDED MINECRAFT",
                        }),
                        " WITH YOUR FRIENDS",
                      ],
                    }),
                    (0, r.jsx)("h3", {
                      className:
                        "text-lg sm:text-xl font-bold mb-6 tracking-wide uppercase",
                      style: { color: "var(--icon-text-primary)" },
                      children:
                        e("modpacks.subtitle") ||
                        "CHOOSE FROM OVER 2,300 MODPACKS",
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "space-y-5 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed",
                      children: (0, r.jsx)("p", {
                        children:
                          e("modpacks.description") ||
                          "With Endercloud, enjoy easy access to over 2,300 of the best Minecraft mods and modpacks and install them with just a single click! This ensures you can build your gameplay experience to the tastes and needs of your community, however big or small.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    59245: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => d });
      var r = a(34941);
      a(713);
      var s = a(67618),
        i = a(83694),
        l = a(13263),
        n = a(98704),
        o = a(57886),
        c = a(52490);
      function d() {
        let { t: e } = (0, c.o)(),
          t = [
            {
              title: e("ddos.feature1_title") || "Continuous Monitoring",
              desc:
                e("ddos.feature1_desc") ||
                "Our system scans your traffic 24/7 to identify and neutralize threats before they reach your server.",
              icon: (0, r.jsx)(i.A, {
                style: { color: "var(--icon-text-primary)" },
                size: 28,
              }),
            },
            {
              title: e("ddos.feature2_title") || "Elite Infrastructure",
              desc:
                e("ddos.feature2_desc") ||
                "Leveraging premium hardware and global partnerships to ensure a resilient hosting environment.",
              icon: (0, r.jsx)(l.A, {
                style: { color: "var(--icon-text-primary)" },
                size: 28,
              }),
            },
            {
              title: e("ddos.feature3_title") || "Massive Network Capacity",
              desc:
                e("ddos.feature3_desc") ||
                "Equipped to absorb and filter out high-volume traffic spikes without affecting your performance.",
              icon: (0, r.jsx)(n.A, {
                style: { color: "var(--icon-text-primary)" },
                size: 28,
              }),
            },
            {
              title: e("ddos.feature4_title") || "Instant Response",
              desc:
                e("ddos.feature4_desc") ||
                "Protection kicks in within milliseconds of detection, maintaining your server's stability.",
              icon: (0, r.jsx)(o.A, {
                style: { color: "var(--icon-text-primary)" },
                size: 28,
              }),
            },
          ],
          a = [
            { label: e("ddos.stat1_label") || "Uptime", value: "99.9%+" },
            {
              label: e("ddos.stat2_label") || "Servers Protected",
              value: "1,000+",
            },
            {
              label: e("ddos.stat3_label") || "Mitigated Attacks",
              value: "1 M+",
            },
          ];
        return (0, r.jsx)("section", {
          className:
            "bg-white dark:bg-[#0a0b0f] relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300",
          children: (0, r.jsx)("div", {
            className: "max-w-7xl mx-auto relative z-10",
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 items-center",
              children: [
                (0, r.jsxs)("div", {
                  className: "space-y-12 w-full",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "inline-flex items-center px-3 py-1.5 rounded-tl-xl rounded-br-xl mb-2",
                          style: { backgroundColor: "var(--card-primary)" },
                          children: (0, r.jsx)("span", {
                            className:
                              "icon-text-primary text-[10px] font-bold tracking-[0.2em] uppercase",
                            children: e("ddos.badge") || "Network Shield",
                          }),
                        }),
                        (0, r.jsxs)("h2", {
                          className:
                            "text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white orbitron-font leading-tight uppercase tracking-widest",
                          children: [
                            e("ddos.title_start") || "ENTERPRISE-GRADE",
                            " ",
                            (0, r.jsx)("br", {}),
                            (0, r.jsx)("span", {
                              className: "icon-text-primary",
                              children:
                                e("ddos.title_highlight") || "DDOS PROTECTION",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "grid gap-10",
                      children: t.map((e, t) =>
                        (0, r.jsxs)(
                          s.P.div,
                          {
                            initial: { opacity: 0, x: -20 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0 },
                            transition: { delay: 0.1 * t },
                            className: "flex gap-6 group items-start",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "flex-shrink-0 w-14 h-14 bg-gray-50 dark:bg-white/5 border rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm dark:shadow-lg mt-1",
                                style: {
                                  borderColor: "var(--border-secondary)",
                                },
                                children: e.icon,
                              }),
                              (0, r.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, r.jsx)("h4", {
                                    className:
                                      "font-bold text-gray-900 dark:text-white orbitron-font tracking-wider text-sm uppercase",
                                    children: e.title,
                                  }),
                                  (0, r.jsx)("p", {
                                    className:
                                      "text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed max-w-md",
                                    children: e.desc,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "hidden lg:flex justify-end w-full",
                  children: (0, r.jsx)(s.P.div, {
                    initial: { opacity: 0, scale: 0.98 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: !0 },
                    className:
                      "relative p-px rounded-[1.5rem] shadow-2xl transition-all duration-300 w-full max-w-lg",
                    style: {
                      backgroundImage:
                        "linear-gradient(to bottom, var(--border-secondary), transparent)",
                    },
                    children: (0, r.jsxs)("div", {
                      className:
                        "bg-white dark:bg-[#0a0b0f] rounded-[1.4rem] p-8 sm:p-12 space-y-10 overflow-hidden relative border border-gray-100 dark:border-white/5 transition-colors duration-300",
                      children: [
                        (0, r.jsx)(l.A, {
                          className:
                            "absolute -right-6 -bottom-6 w-64 h-64 -rotate-12 opacity-[0.03] dark:opacity-5",
                          style: { color: "var(--icon-text-primary)" },
                        }),
                        a.map((e, t) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className:
                                "relative z-10 border-b border-gray-100 dark:border-white/10 last:border-0 pb-8 last:pb-0",
                              children: [
                                (0, r.jsx)("p", {
                                  className:
                                    "text-gray-400 dark:text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2",
                                  children: e.label,
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-4xl sm:text-6xl font-black text-gray-900 dark:text-white orbitron-font tracking-tighter",
                                  children: (0, r.jsx)("span", {
                                    className: "icon-text-primary",
                                    children: e.value,
                                  }),
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    86501: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => y });
      var r = a(34941),
        s = a(35810),
        i = a(67618),
        l = a(713),
        n = a(90435),
        o = a(66782),
        c = a(2262),
        d = a(83694),
        m = a(64938),
        x = a(87557),
        p = a(91333),
        h = a(45189),
        g = a(31314),
        u = a(31871),
        b = a(54937),
        f = a(52490);
      function y() {
        let { t: e } = (0, f.o)(),
          t = (0, l.useRef)(null),
          a = (0, s.W)(t, { once: !0, margin: "-100px" }),
          y = [
            {
              icon: n.A,
              titleKey: "mcFeatures.hardware",
              fallbackText: "Fastest Hardware",
            },
            {
              icon: o.A,
              titleKey: "mcFeatures.prices",
              fallbackText: "Lowest Prices",
            },
            {
              icon: c.A,
              titleKey: "mcFeatures.refund",
              fallbackText: "2 Day Refund Guarantee",
            },
            {
              icon: d.A,
              titleKey: "mcFeatures.uptime",
              fallbackText: "99.95%+ Uptime",
            },
            {
              icon: m.A,
              titleKey: "mcFeatures.lagFree",
              fallbackText: "Lag Free",
            },
            {
              icon: x.A,
              titleKey: "mcFeatures.updates",
              fallbackText: "Automatic Updates",
            },
            {
              icon: d.A,
              titleKey: "mcFeatures.ddos",
              fallbackText: "DDoS Protected",
            },
            {
              icon: p.A,
              titleKey: "mcFeatures.articles",
              fallbackText: "100+ Help Articles",
            },
            {
              icon: h.A,
              titleKey: "mcFeatures.slots",
              fallbackText: "Unlimited Player Slots",
            },
            {
              icon: g.A,
              titleKey: "mcFeatures.mysql",
              fallbackText: "Free MySQL Databases",
            },
            {
              icon: u.A,
              titleKey: "mcFeatures.nvme",
              fallbackText: "NVMe Storage",
            },
            {
              icon: b.A,
              titleKey: "mcFeatures.ftp",
              fallbackText: "FTP/SFTP Access",
            },
          ];
        return (0, r.jsxs)("section", {
          className:
            "bg-gray-50 dark:bg-[#0a0b0f] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
          children: [
            (0, r.jsxs)("div", {
              className:
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute top-0 left-0 w-64 h-64 blob-primary rounded-full blur-3xl",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute bottom-0 right-0 w-64 h-64 blob-secondary rounded-full blur-3xl",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "relative z-10 max-w-7xl mx-auto",
              ref: t,
              children: [
                (0, r.jsxs)(i.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: a ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8 },
                  className: "text-center mb-12",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "icon-text-primary text-sm font-bold tracking-widest uppercase mb-2 block",
                      children:
                        e("mcFeatures.badge") || "Exclusive Minecraft Features",
                    }),
                    (0, r.jsx)("h2", {
                      className:
                        "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white orbitron-font",
                      children:
                        e("mcFeatures.title") ||
                        "Get everything you need to start a Minecraft server.",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: y.map((t, s) => {
                    let l = t.icon;
                    return (0, r.jsxs)(
                      i.P.div,
                      {
                        initial: { opacity: 0, scale: 0.95 },
                        animate: a ? { opacity: 1, scale: 1 } : {},
                        transition: { duration: 0.4, delay: 0.05 * s },
                        className:
                          "flex items-center gap-4 p-4 rounded-md bg-white/40 dark:bg-white/5 border border-secondary backdrop-blur-sm hover:hover-gradient hover:border-secondary transition-all duration-300 group",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg card-primary dark:card-primary transition-colors",
                            children: (0, r.jsx)(l, {
                              className: "w-5 h-5 icon-text-primary",
                            }),
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "text-gray-900 dark:text-gray-100 font-semibold text-base group-hover:text-icon-text-primary transition-colors",
                            children: e(t.titleKey) || t.fallbackText,
                          }),
                        ],
                      },
                      s
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
