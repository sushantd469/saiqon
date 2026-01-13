"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [774, 2044, 4410],
  {
    2262: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("rotate-ccw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3",
          },
        ],
        ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
      ]);
    },
    7951: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("plug", [
        ["path", { d: "M12 22v-5", key: "1ega77" }],
        ["path", { d: "M9 8V2", key: "14iosj" }],
        ["path", { d: "M15 8V2", key: "18g5xt" }],
        [
          "path",
          { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" },
        ],
      ]);
    },
    22264: (e, a, t) => {
      t.d(a, { default: () => u });
      var r = t(34941),
        l = t(35810),
        s = t(67618),
        i = t(713),
        n = t(90435),
        o = t(66782),
        d = t(2262),
        c = t(83694),
        x = t(64938),
        m = t(87557),
        h = t(76906);
      let y = (0, t(53876).A)("layout-dashboard", [
        [
          "rect",
          { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
        ],
        [
          "rect",
          { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
        ],
        [
          "rect",
          { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
        ],
        [
          "rect",
          { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
        ],
      ]);
      var p = t(45189),
        g = t(52490);
      function u() {
        let { t: e } = (0, g.o)(),
          a = (0, i.useRef)(null),
          t = (0, l.W)(a, { once: !0, margin: "-100px" }),
          u = [
            {
              icon: n.A,
              titleKey: "hytaleFeatures.hardware",
              fallbackText: "Fastest Hardware",
            },
            {
              icon: o.A,
              titleKey: "hytaleFeatures.prices",
              fallbackText: "Lowest Prices",
            },
            {
              icon: d.A,
              titleKey: "hytaleFeatures.refund",
              fallbackText: "2 Day Refund Guarantee",
            },
            {
              icon: c.A,
              titleKey: "hytaleFeatures.uptime",
              fallbackText: "99.95%+ Uptime",
            },
            {
              icon: x.A,
              titleKey: "hytaleFeatures.lagFree",
              fallbackText: "Lag Free",
            },
            {
              icon: m.A,
              titleKey: "hytaleFeatures.modding",
              fallbackText: "One-Click Modding",
            },
            {
              icon: h.A,
              titleKey: "hytaleFeatures.ddos",
              fallbackText: "DDoS Protected",
            },
            {
              icon: y,
              titleKey: "hytaleFeatures.panel",
              fallbackText: "Modern Control Panel",
            },
            {
              icon: p.A,
              titleKey: "hytaleFeatures.slots",
              fallbackText: "Unlimited Player Slots",
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
              ref: a,
              children: [
                (0, r.jsxs)(s.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8 },
                  className: "text-center mb-12",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "icon-text-primary text-sm font-bold tracking-widest uppercase mb-2 block",
                      children: e("hytaleFeatures.badge"),
                    }),
                    (0, r.jsx)("h2", {
                      className:
                        "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white orbitron-font",
                      children: e("hytaleFeatures.title"),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: u.map((a, l) => {
                    let i = a.icon;
                    return (0, r.jsxs)(
                      s.P.div,
                      {
                        initial: { opacity: 0, scale: 0.95 },
                        animate: t ? { opacity: 1, scale: 1 } : {},
                        transition: { duration: 0.4, delay: 0.05 * l },
                        className:
                          "flex items-center gap-4 p-4 rounded-md bg-white/40 dark:bg-white/5 border border-secondary backdrop-blur-sm hover:hover-gradient hover:border-secondary transition-all duration-300 group",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg card-primary dark:card-primary transition-colors",
                            children: (0, r.jsx)(i, {
                              className: "w-5 h-5 icon-text-primary",
                            }),
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "text-gray-900 dark:text-gray-100 font-semibold text-base group-hover:text-icon-text-primary transition-colors",
                            children: e(a.titleKey) || a.fallbackText,
                          }),
                        ],
                      },
                      l
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    24145: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("phone", [
        [
          "path",
          {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v",
          },
        ],
      ]);
    },
    26765: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("circle-check-big", [
        ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
        ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
      ]);
    },
    31871: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("hard-drive", [
        ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
        [
          "path",
          {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr",
          },
        ],
        ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
        ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
      ]);
    },
    35810: (e, a, t) => {
      t.d(a, { W: () => i });
      var r = t(713),
        l = t(8772);
      let s = { some: 0, all: 1 };
      function i(e) {
        let {
            root: a,
            margin: t,
            amount: i,
            once: n = !1,
            initial: o = !1,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          [d, c] = (0, r.useState)(o);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (n && d)) return;
            let r = { root: (a && a.current) || void 0, margin: t, amount: i };
            return (function (
              e,
              a,
              { root: t, margin: r, amount: i = "some" } = {}
            ) {
              let n = (0, l.K)(e),
                o = new WeakMap(),
                d = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let t = o.get(e.target);
                      if (!!t !== e.isIntersecting)
                        if (e.isIntersecting) {
                          let t = a(e.target, e);
                          "function" == typeof t
                            ? o.set(e.target, t)
                            : d.unobserve(e.target);
                        } else
                          "function" == typeof t && (t(e), o.delete(e.target));
                    });
                  },
                  {
                    root: t,
                    rootMargin: r,
                    threshold: "number" == typeof i ? i : s[i],
                  }
                );
              return n.forEach((e) => d.observe(e)), () => d.disconnect();
            })(e.current, () => (c(!0), n ? void 0 : () => c(!1)), r);
          }, [a, e, t, n, i]),
          d
        );
      }
    },
    41645: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("heart-pulse", [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky",
          },
        ],
        [
          "path",
          { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" },
        ],
      ]);
    },
    45189: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("users", [
        [
          "path",
          { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
        ],
        ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ]);
    },
    45772: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("mail", [
        [
          "path",
          { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" },
        ],
        [
          "rect",
          { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
        ],
      ]);
    },
    46007: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("cpu", [
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M17 20v2", key: "1rnc9c" }],
        ["path", { d: "M17 2v2", key: "11trls" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M2 17h2", key: "7oei6x" }],
        ["path", { d: "M2 7h2", key: "asdhe0" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "M20 17h2", key: "1fpfkl" }],
        ["path", { d: "M20 7h2", key: "1o8tra" }],
        ["path", { d: "M7 20v2", key: "4gnj0m" }],
        ["path", { d: "M7 2v2", key: "1i4yhu" }],
        [
          "rect",
          { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
        ],
        [
          "rect",
          { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
        ],
      ]);
    },
    48949: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("memory-stick", [
        ["path", { d: "M6 19v-3", key: "1nvgqn" }],
        ["path", { d: "M10 19v-3", key: "iu8nkm" }],
        ["path", { d: "M14 19v-3", key: "kcehxu" }],
        ["path", { d: "M18 19v-3", key: "1vh91z" }],
        ["path", { d: "M8 11V9", key: "63erz4" }],
        ["path", { d: "M16 11V9", key: "fru6f3" }],
        ["path", { d: "M12 11V9", key: "ha00sb" }],
        ["path", { d: "M2 15h20", key: "16ne18" }],
        [
          "path",
          {
            d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
            key: "lhddv3",
          },
        ],
      ]);
    },
    53015: (e, a, t) => {
      t.d(a, { default: () => n });
      var r = t(34941),
        l = t(67618),
        s = t(51874),
        i = t(52490);
      function n() {
        let { t: e } = (0, i.o)();
        return (0, r.jsx)("section", {
          className:
            "bg-gray-50 dark:bg-[#0a0b0f] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
          children: (0, r.jsx)("div", {
            className: "max-w-7xl mx-auto",
            children: (0, r.jsxs)("div", {
              className: "grid lg:grid-cols-2 gap-12 items-stretch",
              children: [
                (0, r.jsx)(l.P.div, {
                  initial: { opacity: 0, x: -50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8 },
                  className:
                    "relative h-full w-full overflow-hidden hidden lg:block",
                  children: (0, r.jsx)("div", {
                    className: "relative h-[800px] w-full",
                    children: (0, r.jsx)(s.default, {
                      src: "/icons/hytale/hytale-44.png",
                      alt: "Play Hytale with Friends",
                      fill: !0,
                      className: "object-cover",
                      priority: !0,
                    }),
                  }),
                }),
                (0, r.jsxs)(l.P.div, {
                  initial: { opacity: 0, x: 50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8 },
                  className: "flex flex-col justify-center",
                  children: [
                    (0, r.jsxs)("h2", {
                      className:
                        "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font leading-tight uppercase",
                      children: [
                        e("hytalePlay.titlePart1"),
                        " ",
                        (0, r.jsx)("span", {
                          className: "text-blue-500",
                          children: e("hytalePlay.titlePart2"),
                        }),
                        " ",
                        e("hytalePlay.titlePart3"),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "font-secondary",
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "text-lg sm:text-xl font-bold mb-6 tracking-wide uppercase text-blue-500",
                          children: e("hytalePlay.subtitle"),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "space-y-5 text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed",
                          children: (0, r.jsx)("p", {
                            children: e("hytalePlay.description"),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    57886: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]);
    },
    64938: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("wifi", [
        ["path", { d: "M12 20h.01", key: "zekei9" }],
        ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
        ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
        ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
      ]);
    },
    66782: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("circle-dollar-sign", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" },
        ],
        ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ]);
    },
    67883: (e, a, t) => {
      t.d(a, { default: () => d });
      var r = t(34941),
        l = t(67618),
        s = t(84946),
        i = t(713),
        n = t(51874),
        o = t(52490);
      function d() {
        let { t: e } = (0, o.o)(),
          [a, t] = (0, i.useState)(null),
          d = [
            {
              question: e("faq-hytale.question1"),
              answer: e("faq-hytale.answer1"),
            },
            {
              question: e("faq-hytale.question2"),
              answer: e("faq-hytale.answer2"),
            },
            {
              question: e("faq-hytale.question3"),
              answer: e("faq-hytale.answer3"),
            },
            {
              question: e("faq-hytale.question4"),
              answer: e("faq-hytale.answer4"),
            },
            {
              question: e("faq-hytale.question5"),
              answer: e("faq-hytale.answer5"),
            },
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
                      children: (0, r.jsx)(l.P.div, {
                        initial: { opacity: 0, x: -50 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: !0, margin: "-100px" },
                        transition: { duration: 0.8 },
                        children: (0, r.jsx)("div", {
                          className: "relative h-[300px] md:h-[500px] w-full",
                          children: (0, r.jsx)(n.default, {
                            src: "/icons/hytale/hytale22.png",
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
                      (0, r.jsxs)(l.P.div, {
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
                              e("faq-hytale.title")
                                .split(" ")
                                .slice(0, -1)
                                .join(" "),
                              " ",
                              (0, r.jsxs)("span", {
                                className: "icon-text-primary relative",
                                children: [
                                  e("faq-hytale.title").split(" ").slice(-1)[0],
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
                            children: e("faq-hytale.subtitle"),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "space-y-4",
                        children: d.map((e, i) =>
                          (0, r.jsxs)(
                            l.P.div,
                            {
                              initial: { opacity: 0, y: 50 },
                              whileInView: { opacity: 1, y: 0 },
                              viewport: { once: !0, margin: "-100px" },
                              transition: { duration: 0.6, delay: 0.2 * i },
                              className:
                                "bg-white dark:bg-gray-900/5 backdrop-blur-sm border border-secondary rounded-md overflow-hidden hover:bg-gray-50 dark:hover:bg-transparent hover:border-secondary dark:hover:border-secondary hover:hover-gradient dark:hover:hover-gradient hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-all duration-300",
                              children: [
                                (0, r.jsxs)("button", {
                                  onClick: () => t(a === i ? null : i),
                                  className:
                                    "w-full px-4 sm:px-3 py-3 sm:py-3 flex items-center text-left gap-2 sm:gap-4",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "orbitron-font flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-md card-primary dark:card-primary flex items-center justify-center icon-text-primary text-sm sm:text-base",
                                      children: (i + 1)
                                        .toString()
                                        .padStart(2, "0"),
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-icon-text-primary dark:group-hover:text-icon-text-primary",
                                      children: e.question,
                                    }),
                                    a === i
                                      ? (0, r.jsx)(s.gn8, {
                                          className:
                                            "w-5 h-5 icon-text-primary dark:icon-text-primary ml-auto",
                                        })
                                      : (0, r.jsx)(s.$qG, {
                                          className:
                                            "w-5 h-5 icon-text-primary dark:icon-text-primary ml-auto",
                                        }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "px-4 sm:px-6 transition-all duration-300 overflow-hidden ".concat(
                                      a === i
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
                            i
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
    75395: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("archive", [
        [
          "rect",
          { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" },
        ],
        [
          "path",
          { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" },
        ],
        ["path", { d: "M10 12h4", key: "a56b0p" }],
      ]);
    },
    87557: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("folder-sync", [
        [
          "path",
          {
            d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",
            key: "1dkoa9",
          },
        ],
        ["path", { d: "M12 10v4h4", key: "1czhmt" }],
        ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "lvuxfi" }],
        ["path", { d: "M22 22v-4h-4", key: "1ewp4q" }],
        ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "14ync0" }],
      ]);
    },
    89409: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("calendar", [
        ["path", { d: "M8 2v4", key: "1cmpym" }],
        ["path", { d: "M16 2v4", key: "4m81vk" }],
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
        ],
        ["path", { d: "M3 10h18", key: "8toen8" }],
      ]);
    },
    90435: (e, a, t) => {
      t.d(a, { A: () => r });
      let r = (0, t(53876).A)("rocket", [
        [
          "path",
          {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz",
          },
        ],
        [
          "path",
          {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk",
          },
        ],
        [
          "path",
          { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" },
        ],
        [
          "path",
          { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" },
        ],
      ]);
    },
    98461: (e, a, t) => {
      t.d(a, { default: () => k });
      var r = t(34941),
        l = t(713),
        s = t(67618),
        i = t(63850),
        n = t(48355),
        o = t(51874),
        d = t(89409),
        c = t(48949),
        x = t(46007),
        m = t(31871),
        h = t(76906),
        y = t(90333),
        p = t(26428),
        g = t(37149),
        u = t(83306),
        f = t(52490);
      function b() {
        let e = (0, n.useRouter)(),
          a = (0, n.usePathname)(),
          t = (0, n.useSearchParams)(),
          {
            selectedCurrency: b,
            setSelectedCurrency: v,
            convertPrice: k,
          } = (0, u.H)(),
          { t: w } = (0, f.o)(),
          j = a.split("/").filter(Boolean).pop() || "india",
          [N] = (0, l.useState)("hytale"),
          [A, M] = (0, l.useState)(j),
          [S, q] = (0, l.useState)(t.get("cycle") || "monthly"),
          [P, C] = (0, l.useState)(t.get("weeklyType") || "weekly"),
          [z, I] = (0, l.useState)({ days: 0, hrs: 0, min: 0, sec: 0 }),
          [V, F] = (0, l.useState)(4);
        (0, l.useEffect)(() => {
          if (!g.hytale.showCountdown) return;
          let e = new Date("2026-01-13T00:00:00").getTime(),
            a = setInterval(() => {
              let t = e - new Date().getTime();
              if (t < 0) {
                clearInterval(a), I({ days: 0, hrs: 0, min: 0, sec: 0 });
                return;
              }
              I({
                days: Math.floor(t / 864e5),
                hrs: Math.floor((t % 864e5) / 36e5),
                min: Math.floor((t % 36e5) / 6e4),
                sec: Math.floor((t % 6e4) / 1e3),
              });
            }, 1e3);
          return () => clearInterval(a);
        }, []),
          (0, l.useEffect)(() => {
            let a = new URLSearchParams();
            a.set("cycle", S), "weekly" === S && a.set("weeklyType", P);
            let t = "/hytale/".concat(A, "?").concat(a.toString());
            t !== window.location.pathname + window.location.search &&
              e.push(t, { scroll: !1 });
          }, [A, S, P, e]),
          (0, l.useEffect)(() => {
            p.j.some((e) => e.id === j) && M(j);
          }, [j]);
        let T = (e) => {
            let a = e,
              t = "/mo";
            return (
              "weekly" === S
                ? "weekly" === P
                  ? ((a = e / 4), (t = "/wk"))
                  : "biweekly" === P
                  ? ((a = e / 2), (t = "/2wk"))
                  : "triweekly" === P && ((a = (e / 4) * 3), (t = "/3wk"))
                : "monthly" === S
                ? ((a = e), (t = "/mo"))
                : "quarterly" === S
                ? ((a = 3 * e), (t = "/3mo"))
                : "annually" === S && ((a = 12 * e), (t = "/yr")),
              { price: Math.floor(a).toString().padStart(2, "0"), unit: t }
            );
          },
          H = p.a.find((e) => e.id === N),
          L = p.j.find((e) => e.id === A);
        if (!H || !L) return null;
        let E = (null == H ? void 0 : H.plans) || [],
          K = E.slice(0, V);
        return (0, r.jsxs)("div", {
          id: "plans",
          className:
            "bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-32",
          children: [
            (0, r.jsxs)("div", {
              className: "absolute inset-0",
              children: [
                (0, r.jsx)("div", {
                  className: "absolute inset-0 bg-cover bg-center",
                  style: {
                    backgroundImage: "url('".concat(
                      null == H ? void 0 : H.banner,
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
                (0, r.jsx)(s.P.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.8 },
                  className: "text-left mb-8",
                  style: {
                    "--game-color":
                      (null == H ? void 0 : H.primaryColor) || "#3b82f6",
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
                                src: "/icons/hytale/hytale-h1.webp",
                                alt: "Hytale",
                                width: 40,
                                height: 40,
                                className:
                                  "w-[1.1em] h-[1.1em] object-contain mb-1",
                              }),
                              (0, r.jsxs)("span", {
                                children: [
                                  w("hytale.heading"),
                                  " ",
                                  " ",
                                  (0, r.jsx)("span", {
                                    style: {
                                      color:
                                        {
                                          india: "#22c55e",
                                          germany: "#ef4444",
                                          singapore: "#3b82f6",
                                          usa: "#f97316",
                                        }[A] ||
                                        (null == H ? void 0 : H.primaryColor),
                                    },
                                    children: null == L ? void 0 : L.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-md text-gray-600 max-w-3xl dark:text-gray-300 leading-relaxed font-medium",
                            children: w("hytale.description"),
                          }),
                        ],
                      }),
                      (0, r.jsx)(u.J, {
                        selectedCurrency: b,
                        onCurrencyChange: v,
                        className: "w-full sm:w-64 mt-4 sm:mt-0",
                      }),
                    ],
                  }),
                }),
                g.hytale.showCountdown &&
                  (0, r.jsxs)(s.P.div, {
                    initial: { opacity: 0, scale: 0.98 },
                    animate: { opacity: 1, scale: 1 },
                    className:
                      "mb-20 bg-transparent border border-white/5 rounded-2xl p-4 md:py-4 md:px-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative backdrop-blur-sm",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "flex-shrink-0 relative w-64 h-32 z-20 -mt-10 -mb-10 pointer-events-none",
                        children: (0, r.jsx)(o.default, {
                          src: "/icons/hytale/hytale-logo-with-text.webp",
                          alt: "Hytale",
                          fill: !0,
                          className:
                            "object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex-1 text-center md:text-left z-10",
                        children: [
                          (0, r.jsx)("h4", {
                            className:
                              "text-white font-bold orbitron-font text-xs tracking-[0.3em] uppercase mb-1",
                            children: w("hytale.releaseHeading"),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-gray-400 text-sm font-medium",
                            children: w("hytale.releaseSubtext"),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "flex gap-4 md:gap-8 items-center z-10",
                        children: [
                          { label: "DAYS", val: z.days },
                          { label: "HRS", val: z.hrs },
                          { label: "MIN", val: z.min },
                          { label: "SEC", val: z.sec },
                        ].map((e, a) =>
                          (0, r.jsxs)(
                            l.Fragment,
                            {
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center min-w-[60px]",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-3xl font-bold dark:text-white orbitron-font tracking-tighter",
                                      children: e.val
                                        .toString()
                                        .padStart(2, "0"),
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1",
                                      children: e.label,
                                    }),
                                  ],
                                }),
                                a < 3 &&
                                  (0, r.jsx)("span", {
                                    className:
                                      "text-blue-500/30 font-bold text-2xl mb-6",
                                    children: ":",
                                  }),
                              ],
                            },
                            a
                          )
                        ),
                      }),
                    ],
                  }),
                (0, r.jsxs)(s.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.2 },
                  className: "mb-4",
                  style: {
                    "--game-color":
                      (null == H ? void 0 : H.primaryColor) || "#3b82f6",
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
                              children: p.j.map((e) =>
                                (0, r.jsxs)(
                                  "button",
                                  {
                                    onClick: () => M(e.id),
                                    className:
                                      "h-12 flex items-center gap-3 px-4 rounded-tl-xl rounded-br-xl font-medium transition-all duration-300 backdrop-blur-sm ".concat(
                                        A === e.id
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
                              children: w("gameServerList.step5"),
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
                                        onClick: () => q(e),
                                        className:
                                          "h-12 flex items-center gap-4 px-6 rounded-tl-xl rounded-br-xl font-medium transition-all duration-300 backdrop-blur-sm ".concat(
                                            S === e
                                              ? "bg-[var(--game-color)]/10 border border-[var(--game-color)]/30 text-[var(--game-color)] shadow-lg"
                                              : "bg-white/5 dark:bg-gray-800/20 border border-transparent dark:border-white/10 text-gray-700 dark:text-gray-400 hover:border-[var(--game-color)]/30"
                                          ),
                                        children: [
                                          (0, r.jsx)(d.A, {
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
                                      (0, r.jsx)(i.N, {
                                        children:
                                          "weekly" === e &&
                                          "weekly" === S &&
                                          (0, r.jsx)(s.P.div, {
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
                                                  onClick: () => C(e.id),
                                                  className:
                                                    "w-8 h-8 flex items-center justify-center rounded-md border text-xs font-bold transition-all ".concat(
                                                      P === e.id
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
                            "india" === A
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
                              children: w("gameServerList.cpu.".concat(A)),
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
                  children: K.map((e, a) => {
                    let { price: t, unit: l } = T(e.price);
                    return (0, r.jsx)(
                      s.P.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { duration: 0.5, delay: 0.1 * a },
                        style: {
                          "--game-color": null == H ? void 0 : H.primaryColor,
                        },
                        className:
                          "relative overflow-hidden rounded-xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm border border-[var(--game-color)]/30 hover:border-[var(--game-color)]/40 transition-all duration-300 shadow-sm",
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
                              className:
                                "space-y-4 mb-6 text-gray-600 dark:text-gray-300 font-medium text-sm",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, r.jsx)(c.A, {
                                      className:
                                        "w-5 h-5 text-[var(--game-color)]",
                                    }),
                                    (0, r.jsxs)("span", {
                                      children: [e.ram, " RAM"],
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
                                    (0, r.jsxs)("span", {
                                      children: [e.cpu, " CPU"],
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
                                      children: [e.storage, " Storage"],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, r.jsx)(h.A, {
                                      className:
                                        "w-5 h-5 text-[var(--game-color)]",
                                    }),
                                    (0, r.jsx)("span", {
                                      children: "DDoS Protection",
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
                                  children: k("$".concat(t)),
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "text-gray-500 dark:text-gray-400 font-sans",
                                  children: l,
                                }),
                              ],
                            }),
                            (0, r.jsxs)("a", {
                              href: e.orderLink,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "orbitron-font w-full bg-[var(--game-color)] hover:opacity-90 dark:bg-[var(--game-color)]/30 text-white dark:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2",
                              children: [
                                g.hytale.preorder
                                  ? w("hytale.preorder")
                                  : w("gameServerList.orderNow"),
                                (0, r.jsx)(y.A, { className: "w-4 h-4" }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.id
                    );
                  }),
                }),
                E.length > V &&
                  (0, r.jsx)("div", {
                    className: "mt-12 flex justify-center",
                    children: (0, r.jsx)("button", {
                      onClick: () => F(E.length),
                      style: {
                        "--game-color": null == H ? void 0 : H.primaryColor,
                      },
                      className:
                        "flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--game-color)]/10 border border-[var(--game-color)]/30 text-[var(--game-color)] font-bold hover:bg-[var(--game-color)]/20 transition-all duration-300 orbitron-font uppercase tracking-widest text-sm",
                      children: w("gameServerList.viewMore"),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      let v = () =>
        (0, r.jsx)("div", {
          className:
            "min-h-[600px] w-full flex items-center justify-center bg-gray-50 dark:bg-[#0a0b0f]",
          children: (0, r.jsxs)("div", {
            className: "flex flex-col items-center gap-4",
            children: [
              (0, r.jsx)("div", {
                className:
                  "w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin",
              }),
              (0, r.jsx)("p", {
                className:
                  "text-gray-500 dark:text-gray-400 font-medium orbitron-font text-sm animate-pulse",
                children: "LOADING HYTALE SECTORS...",
              }),
            ],
          }),
        });
      function k() {
        return (0, r.jsx)(l.Suspense, {
          fallback: (0, r.jsx)(v, {}),
          children: (0, r.jsx)(b, {}),
        });
      }
    },
    99505: (e, a, t) => {
      t.d(a, { default: () => d });
      var r = t(34941);
      t(713);
      var l = t(67618),
        s = t(51874),
        i = t(91535),
        n = t(26765),
        o = t(52490);
      function d() {
        let { t: e } = (0, o.o)(),
          a = [
            { name: e("hytaleAbout.feat1") || "Adventure RPG Mode" },
            { name: e("hytaleAbout.feat2") || "Creative World Building" },
            { name: e("hytaleAbout.feat3") || "Community Servers" },
            { name: e("hytaleAbout.feat4") || "Scripting & Modding" },
            { name: e("hytaleAbout.feat5") || "Cinematic Tools" },
            { name: e("hytaleAbout.feat6") || "Competitive Minigames" },
          ];
        return (0, r.jsx)("section", {
          className:
            "bg-gray-50 dark:bg-[#0a0b0f] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
          children: (0, r.jsx)("div", {
            className: "max-w-7xl mx-auto",
            children: (0, r.jsxs)("div", {
              className: "grid lg:grid-cols-2 gap-12 items-center",
              children: [
                (0, r.jsxs)(l.P.div, {
                  initial: { opacity: 0, x: -50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8 },
                  children: [
                    (0, r.jsxs)("h2", {
                      className:
                        "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 orbitron-font leading-tight",
                      children: [
                        e("hytaleAbout.titlePart1"),
                        " ",
                        (0, r.jsx)("span", {
                          className: "text-blue-500",
                          children: e("hytaleAbout.titlePart2"),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "space-y-5 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-secondary",
                      children: [
                        (0, r.jsx)("p", { children: e("hytaleAbout.p1_text") }),
                        (0, r.jsxs)("p", {
                          className: "font-medium",
                          children: [
                            e("hytaleAbout.p2_text"),
                            " ",
                            (0, r.jsxs)("a", {
                              href: "https://hytale.com/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-blue-500 hover:text-blue-400 inline-flex items-center gap-1 transition-colors underline underline-offset-4",
                              children: [
                                e("hytaleAbout.learnMore"),
                                " ",
                                (0, r.jsx)(i.A, { className: "w-3 h-3" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 font-secondary",
                      children: a.map((e, a) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            className: "flex items-center gap-2",
                            children: [
                              (0, r.jsx)(n.A, {
                                className:
                                  "w-4 h-4 text-blue-500 flex-shrink-0",
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-gray-900 dark:text-gray-100 font-medium text-xs sm:text-sm",
                                children: e.name,
                              }),
                            ],
                          },
                          a
                        )
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)(l.P.div, {
                  initial: { opacity: 0, x: 50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8 },
                  className: "relative hidden lg:block",
                  children: (0, r.jsx)("div", {
                    className: "relative rounded-xl overflow-hidden",
                    children: (0, r.jsx)(s.default, {
                      src: "/icons/hytale/leafanimal.png",
                      alt: "Hytale World",
                      width: 800,
                      height: 500,
                      className: "w-full h-auto object-cover",
                      priority: !0,
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
