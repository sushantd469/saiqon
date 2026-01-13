(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    8123: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => n });
      var r = t(34941),
        l = t(12316),
        s = t(37149);
      function n() {
        return s.christmasTheme.enabled
          ? (0, r.jsx)(l.A, {
              color: "#fff",
              snowflakeCount: 30,
              style: {
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                pointerEvents: "none",
              },
            })
          : null;
      }
    },
    8464: (e, a, t) => {
      "use strict";
      t.d(a, { ThemeProvider: () => n });
      var r = t(34941),
        l = t(20406),
        s = t(713);
      function n(e) {
        let { children: a, ...t } = e,
          [n, o] = (0, s.useState)(!1);
        return ((0, s.useEffect)(() => {
          o(!0);
          let e = localStorage.setItem,
            a = localStorage.getItem,
            t = localStorage.removeItem,
            r = () => {
              let e = localStorage.getItem("cookie-consent"),
                a = localStorage.getItem("cookie-preferences");
              if (!e || !a) return !1;
              try {
                let e = JSON.parse(a);
                return !0 === e.preferences;
              } catch (e) {
                return !1;
              }
            };
          return (
            (localStorage.setItem = function (a, t) {
              if ("theme" === a) {
                r() && e.call(this, a, t);
                return;
              }
              e.call(this, a, t);
            }),
            (localStorage.getItem = function (e) {
              return "theme" === e
                ? r()
                  ? a.call(this, e)
                  : null
                : a.call(this, e);
            }),
            (localStorage.removeItem = function (e) {
              if ("theme" === e) {
                r() && t.call(this, e);
                return;
              }
              t.call(this, e);
            }),
            () => {
              (localStorage.setItem = e),
                (localStorage.getItem = a),
                (localStorage.removeItem = t);
            }
          );
        }, []),
        n)
          ? (0, r.jsx)(l.N, { ...t, children: a })
          : (0, r.jsx)(r.Fragment, { children: a });
      }
    },
    19291: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => d });
      var r = t(34941),
        l = t(713),
        s = t(67618),
        n = t(63850),
        o = t(31362),
        i = t(48017);
      let c = t(37149).themeSwitcher;
      function d() {
        var e;
        let [a, t] = (0, l.useState)(!1),
          [d, u] = (0, l.useState)(c.defaultColor);
        (0, l.useEffect)(() => {
          let e = localStorage.getItem("theme-color");
          e && c.availableColors.find((a) => a.name === e)
            ? (u(e), m(e))
            : m(c.defaultColor);
        }, []);
        let m = (e) => {
            let a = c.availableColors.find((a) => a.name === e);
            if (!a) return;
            let t = document.documentElement;
            t.style.setProperty("--icon-primary", a.value),
              t.style.setProperty("--button-primary", a.value),
              t.style.setProperty("--text-secondary", a.value),
              t.style.setProperty("--icon-text-primary", a.value);
            let r = a.value.match(/\d+/g);
            if (r && r.length >= 3) {
              let e = parseInt(r[0]),
                a = parseInt(r[1]),
                l = parseInt(r[2]);
              t.style.setProperty(
                "--hover-gradient",
                "radial-gradient(50% 50% at 50% 100%, rgba("
                  .concat(e, ", ")
                  .concat(a, ", ")
                  .concat(l, ", 0.25) 0%, transparent 100%)")
              ),
                t.style.setProperty(
                  "--border-secondary",
                  "rgba(".concat(e, ", ").concat(a, ", ").concat(l, ", 0.3)")
                ),
                t.style.setProperty(
                  "--card-primary",
                  "rgba(".concat(e, ", ").concat(a, ", ").concat(l, ", 0.301)")
                );
            }
            localStorage.setItem("theme-color", e);
          },
          g = (e) => {
            u(e), m(e), t(!1);
          };
        if (!c.show) return null;
        let h = () => {
          switch (c.position) {
            case "bottom-left":
              return "bottom-4 left-4";
            case "bottom-right":
            default:
              return "bottom-4 right-4";
            case "top-left":
              return "top-4 left-4";
            case "top-right":
              return "top-4 right-4";
          }
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.P.button, {
              onClick: () => t(!a),
              className: "fixed ".concat(
                h(),
                " z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              ),
              style: {
                backgroundColor:
                  null == (e = c.availableColors.find((e) => e.name === d))
                    ? void 0
                    : e.value,
              },
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              "aria-label": "Change theme color",
              children: (0, r.jsx)(o.A, {
                className: "w-6 h-6 text-white mx-auto",
              }),
            }),
            (0, r.jsx)(n.N, {
              children:
                a &&
                (0, r.jsx)(s.P.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm",
                  onClick: () => t(!1),
                }),
            }),
            (0, r.jsx)(n.N, {
              children:
                a &&
                (0, r.jsxs)(s.P.div, {
                  initial: { opacity: 0, scale: 0.8, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 20 },
                  transition: { type: "spring", damping: 25, stiffness: 300 },
                  className: "fixed ".concat(
                    h(),
                    " z-50 bg-white dark:bg-black  rounded-2xl shadow-2xl border border-primary p-4 min-w-[280px]"
                  ),
                  style: { transform: "translateY(-100px)" },
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "text-lg font-semibold text-gray-900 dark:text-white",
                          children: "Choose Theme",
                        }),
                        (0, r.jsx)("button", {
                          onClick: () => t(!1),
                          className:
                            "p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                          children: (0, r.jsx)(i.A, {
                            className:
                              "w-5 h-5 text-gray-500 dark:text-gray-400",
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "grid grid-cols-3 gap-3",
                      children: c.availableColors.map((e) =>
                        (0, r.jsxs)(
                          s.P.button,
                          {
                            onClick: () => g(e.name),
                            className:
                              "relative p-3 rounded-xl transition-all duration-300 hover:scale-105 ".concat(
                                d === e.name
                                  ? "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600"
                                  : "hover:shadow-md"
                              ),
                            style: { backgroundColor: e.value },
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "w-full h-8 rounded-lg bg-white/20 flex items-center justify-center",
                                children: (0, r.jsx)("span", {
                                  className:
                                    "text-xs font-medium text-white drop-shadow-sm",
                                  children: e.label,
                                }),
                              }),
                              d === e.name &&
                                (0, r.jsx)(s.P.div, {
                                  initial: { scale: 0 },
                                  animate: { scale: 1 },
                                  className:
                                    "absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center",
                                  children: (0, r.jsx)("svg", {
                                    className: "w-2.5 h-2.5 text-white",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: (0, r.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                }),
                            ],
                          },
                          e.name
                        )
                      ),
                    }),
                  ],
                }),
            }),
          ],
        });
      }
    },
    21610: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 8123)),
        Promise.resolve().then(t.bind(t, 91125)),
        Promise.resolve().then(t.bind(t, 99219)),
        Promise.resolve().then(t.bind(t, 8464)),
        Promise.resolve().then(t.bind(t, 19291)),
        Promise.resolve().then(t.bind(t, 52490)),
        Promise.resolve().then(t.bind(t, 77504)),
        Promise.resolve().then(t.t.bind(t, 43799, 23)),
        Promise.resolve().then(t.t.bind(t, 5235, 23)),
        Promise.resolve().then(t.t.bind(t, 65186, 23));
    },
    31009: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"settings":{"autoDetection":{"enabled":true,"fallbackLanguage":"en"},"defaultLanguage":"en"},"availableLanguages":[{"code":"en","name":"English","nativeName":"English","flag":"/flags/usa.png","enabled":true,"rtl":false},{"code":"hi","name":"Hindi","nativeName":"हिन्दी","flag":"/flags/india.png","enabled":true,"rtl":false},{"code":"de","name":"German","nativeName":"Deutsch","flag":"/flags/germany.png","enabled":true,"rtl":false},{"code":"ar","name":"Arabic","nativeName":"العربية","flag":"/flags/lebanon.png","enabled":true,"rtl":true},{"code":"tr","name":"Turkish","nativeName":"T\xfcrk\xe7e","flag":"/flags/turkey.png","enabled":true,"rtl":false},{"code":"ru","name":"Russian","nativeName":"Русский","flag":"/flags/russian.png","enabled":true,"rtl":false},{"code":"zh","name":"Chinese","nativeName":"中文","flag":"/flags/chinese.png","enabled":true,"rtl":false},{"code":"ja","name":"Japanese","nativeName":"日本語","flag":"/flags/japanese.png","enabled":true,"rtl":false},{"code":"fr","name":"French","nativeName":"Fran\xe7ais","flag":"/flags/france.png","enabled":true,"rtl":false},{"code":"es","name":"Spanish","nativeName":"Espa\xf1ol","flag":"/flags/spain.png","enabled":true,"rtl":false},{"code":"pt","name":"Portuguese","nativeName":"Portugu\xeas","flag":"/flags/portugal.png","enabled":true,"rtl":false}],"localeMapping":{"en":["en","en-us","en-gb","en-au","en-ca","en-nz","en-za","en-ie"],"fr":["fr","fr-fr","fr-ca","fr-be","fr-ch","fr-lu","fr-mc"],"de":["de","de-de","de-at","de-ch","de-li","de-lu"],"ar":["ar","ar-sa","ar-ae","ar-eg","ar-ma","ar-dz","ar-tn","ar-ly","ar-sd","ar-sy","ar-iq","ar-jo","ar-lb","ar-kw","ar-om","ar-qa","ar-bh","ar-ye"],"tr":["tr","tr-tr","tr-cy"],"ru":["ru","ru-ru","ru-by","ru-kz","ru-kg","ru-tj","ru-uz","ru-md","ru-am","ru-ge","ru-ua","ru-mn"],"zh":["zh","zh-cn","zh-tw","zh-hk","zh-mo","zh-sg"],"ja":["ja","ja-jp"],"hi":["hi","hi-in","hi-np"],"es":["es","es-es","es-mx","es-ar","es-co","es-pe","es-ve","es-cl","es-ec","es-gt","es-cu","es-bo","es-do","es-hn","es-py","es-sv","es-ni","es-cr","es-pa","es-uy","es-pr","es-us"],"pt":["pt","pt-pt","pt-br","pt-ao","pt-mz","pt-gw","pt-cv","pt-st","pt-tl","pt-mo"]}}'
      );
    },
    37149: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"loading":{"enableLoadingScreen":true,"loadingDuration":100},"currency":{"apiKey":"dd3f01c6377b4a8d506f152a","baseCurrency":"INR","defaultCurrency":"INR","supportedCurrencies":[{"code":"INR","symbol":"₹","name":"Indian Rupee"},{"code":"USD","symbol":"$","name":"US Dollar"},{"code":"EUR","symbol":"€","name":"Euro"},{"code":"GBP","symbol":"\xa3","name":"British Pound"},{"code":"CAD","symbol":"C$","name":"Canadian Dollar"},{"code":"AUD","symbol":"A$","name":"Australian Dollar"},{"code":"JPY","symbol":"\xa5","name":"Japanese Yen"}]},"themeSwitcher":{"show":false,"position":"bottom-left","defaultColor":"blue","availableColors":[{"name":"orange","value":"rgba(150, 93, 29, 1)","label":"Orange"},{"name":"blue","value":"rgba(37, 99, 235, 1)","label":"Blue"},{"name":"purple","value":"rgba(147, 51, 234, 1)","label":"Purple"},{"name":"red","value":"rgba(239, 68, 68, 1)","label":"Red"},{"name":"green","value":"rgba(34, 197, 94, 1)","label":"Green"},{"name":"yellow","value":"rgba(234, 179, 8, 1)","label":"Yellow"},{"name":"pink","value":"rgba(236, 72, 153, 1)","label":"Pink"},{"name":"teal","value":"rgba(20, 184, 166, 1)","label":"Teal"}]},"christmasTheme":{"enabled":false},"hytale":{"showCountdown":true,"preorder":true}}'
      );
    },
    52490: (e, a, t) => {
      "use strict";
      t.d(a, { LanguageProvider: () => i, o: () => c });
      var r = t(34941),
        l = t(713),
        s = t(31009);
      let n = (0, l.createContext)(void 0),
        o = () => {
          var e;
          let a = (
            navigator.language ||
            (null == (e = navigator.languages) ? void 0 : e[0]) ||
            "en"
          ).toLowerCase();
          for (let [e, t] of Object.entries(s.localeMapping))
            if (
              t.some(
                (e) =>
                  a === e.toLowerCase() || a.startsWith(e.toLowerCase() + "-")
              )
            ) {
              let a = s.availableLanguages.find((a) => a.code === e);
              if (a && a.enabled) return e;
            }
          return s.settings.defaultLanguage;
        },
        i = (e) => {
          let { children: a } = e,
            [t, i] = (0, l.useState)("en"),
            [c, d] = (0, l.useState)({}),
            [u, m] = (0, l.useState)(!0),
            g = async (e) => {
              m(!0);
              try {
                let a = await fetch("/lang/".concat(e, ".json"));
                if (!a.ok)
                  throw Error("Failed to load ".concat(e, " translations"));
                let t = await a.json();
                d(t);
              } catch (a) {
                if (
                  (console.error(
                    "Failed to load translations for ".concat(e, ":"),
                    a
                  ),
                  "en" !== e)
                )
                  try {
                    let a = await fetch("/lang/en.json");
                    if (a.ok) {
                      let t = await a.json();
                      d(t),
                        console.warn(
                          "Loaded English translations as fallback for ".concat(
                            e
                          )
                        );
                    }
                  } catch (e) {
                    console.error("Failed to load fallback translations:", e),
                      d({});
                  }
                else d({});
              } finally {
                m(!1);
              }
            };
          (0, l.useEffect)(() => {
            (async () => {
              let e = s.settings.defaultLanguage;
              {
                let a = localStorage.getItem("cookie-consent"),
                  t = localStorage.getItem("cookie-preferences"),
                  r = !1;
                if (a && t)
                  try {
                    let e = JSON.parse(t);
                    r = !0 === e.preferences;
                  } catch (e) {
                    r = !1;
                  }
                let l = s.availableLanguages
                  .filter((e) => e.enabled)
                  .map((e) => e.code);
                if (r) {
                  let a = localStorage.getItem("language");
                  a && l.includes(a) && (e = a);
                }
                e === s.settings.defaultLanguage &&
                  s.settings.autoDetection.enabled &&
                  (e = o());
              }
              i(e), await g(e);
            })();
          }, []);
          let h = async (e) => {
            i(e);
            {
              let a = localStorage.getItem("cookie-consent"),
                t = localStorage.getItem("cookie-preferences"),
                r = !1;
              if (a && t)
                try {
                  let e = JSON.parse(t);
                  r = !0 === e.preferences;
                } catch (e) {
                  r = !1;
                }
              r && localStorage.setItem("language", e),
                (document.documentElement.lang = e);
              let l = s.availableLanguages.find((a) => a.code === e);
              document.documentElement.dir = (null == l ? void 0 : l.rtl)
                ? "rtl"
                : "ltr";
            }
            await g(e);
          };
          return (0, r.jsx)(n.Provider, {
            value: {
              language: t,
              setLanguage: h,
              translations: c,
              t: (e) => {
                if (u || 0 === Object.keys(c).length) return "";
                let a = e.split("."),
                  t = c;
                for (let r of a)
                  if (!t || "object" != typeof t || !(r in t)) return e;
                  else t = t[r];
                return "string" == typeof t ? t : e;
              },
              isLoading: u,
            },
            children:
              !u && Object.keys(c).length > 0
                ? a
                : (0, r.jsx)("div", {
                    className: "flex items-center justify-center min-h-screen",
                    children: (0, r.jsx)("div", {
                      className:
                        "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
                    }),
                  }),
          });
        },
        c = () => {
          let e = (0, l.useContext)(n);
          if (void 0 === e)
            throw Error("useLanguage must be used within a LanguageProvider");
          return e;
        };
    },
    65186: () => {},
    91125: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => g });
      var r = t(34941),
        l = t(713),
        s = t(63850),
        n = t(67618),
        o = t(91529),
        i = t(48017),
        c = t(93753),
        d = t(57410),
        u = t(52490),
        m = t(20406);
      function g() {
        let { t: e } = (0, u.o)(),
          { theme: a } = (0, m.D)(),
          [t, g] = (0, l.useState)(!1),
          [h, f] = (0, l.useState)(!1),
          [b, p] = (0, l.useState)(!1),
          [x, y] = (0, l.useState)({ necessary: !0, preferences: !1 });
        (0, l.useEffect)(() => {
          localStorage.getItem("cookie-consent") || g(!0);
          let e = localStorage.getItem("cookie-preferences");
          e && y(JSON.parse(e));
        }, []);
        let v = (e) => {
          "necessary" !== e && y((a) => ({ ...a, [e]: !a[e] }));
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.N, {
              children:
                t &&
                (0, r.jsx)(n.P.div, {
                  initial: { scale: 0, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0, opacity: 0 },
                  transition: { type: "spring", damping: 20, stiffness: 300 },
                  className: "fixed bottom-6 right-6 z-50",
                  children: (0, r.jsx)(n.P.button, {
                    onClick: () => f(!0),
                    whileHover: { scale: 1.1 },
                    whileTap: { scale: 0.95 },
                    className:
                      "w-16 h-16 button-primary text-button-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group",
                    "aria-label": e("cookies.openSettings"),
                    children: (0, r.jsx)(o.A, {
                      className:
                        "w-8 h-8 group-hover:rotate-12 transition-transform duration-300",
                    }),
                  }),
                }),
            }),
            (0, r.jsx)(s.N, {
              children:
                h &&
                (0, r.jsx)(n.P.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "fixed inset-0 bg-black/20 backdrop-blur-xl z-50 flex items-center justify-center p-4",
                  onClick: () => f(!1),
                  children: (0, r.jsxs)(n.P.div, {
                    initial: { scale: 0.8, opacity: 0, y: 50 },
                    animate: { scale: 1, opacity: 1, y: 0 },
                    exit: { scale: 0.8, opacity: 0, y: 50 },
                    transition: { type: "spring", damping: 25, stiffness: 300 },
                    className:
                      "bg-white/95 dark:bg-[#0a0b0f]/95 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "p-6 border-b border-gray-200/50 dark:border-white/10",
                        children: (0, r.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "w-12 h-12 card-primary border border-secondary rounded-full flex items-center justify-center",
                                  children: (0, r.jsx)(o.A, {
                                    className: "w-6 h-6 icon-text-primary",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className:
                                        "text-xl font-bold text-gray-900 dark:text-white orbitron-font",
                                      children: e("cookies.title"),
                                    }),
                                    (0, r.jsx)("p", {
                                      className:
                                        "text-sm text-gray-600 dark:text-gray-400",
                                      children: e("cookies.subtitle"),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)("button", {
                              onClick: () => f(!1),
                              className:
                                "p-2 hover:hover-gradient hover:border-secondary rounded-lg transition-all duration-300",
                              children: (0, r.jsx)(i.A, {
                                className:
                                  "w-5 h-5 text-gray-500 dark:text-gray-400",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "p-6",
                        children: [
                          (0, r.jsx)("p", {
                            className:
                              "text-gray-700 dark:text-gray-300 mb-6 leading-relaxed",
                            children: e("cookies.description"),
                          }),
                          b
                            ? (0, r.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-lg p-4 hover:hover-gradient hover:border-secondary transition-all duration-300",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between mb-2",
                                        children: [
                                          (0, r.jsx)("h3", {
                                            className:
                                              "font-semibold text-gray-900 dark:text-white orbitron-font",
                                            children: e(
                                              "cookies.necessary.title"
                                            ),
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "w-12 h-6 button-primary rounded-full flex items-center justify-end px-1 shadow-lg",
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "w-4 h-4 bg-white rounded-full shadow-sm",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "text-sm text-gray-600 dark:text-gray-400",
                                        children: e(
                                          "cookies.necessary.description"
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-lg p-4 hover:hover-gradient hover:border-secondary transition-all duration-300",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between mb-2",
                                        children: [
                                          (0, r.jsx)("h3", {
                                            className:
                                              "font-semibold text-gray-900 dark:text-white orbitron-font",
                                            children: e(
                                              "cookies.preferences.title"
                                            ),
                                          }),
                                          (0, r.jsx)("button", {
                                            onClick: () => v("preferences"),
                                            className:
                                              "w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 shadow-lg ".concat(
                                                x.preferences
                                                  ? "button-primary justify-end shadow-icon-text-primary/25"
                                                  : "bg-gray-300 dark:bg-gray-600 justify-start"
                                              ),
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "w-4 h-4 bg-white rounded-full shadow-sm",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "text-sm text-gray-600 dark:text-gray-400",
                                        children: e(
                                          "cookies.preferences.description"
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col sm:flex-row gap-3 pt-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-lg p-4 hover:hover-gradient hover:border-secondary transition-all duration-300",
                                    children: [
                                      (0, r.jsx)("button", {
                                        onClick: () => {
                                          localStorage.setItem(
                                            "cookie-consent",
                                            "customized"
                                          ),
                                            localStorage.setItem(
                                              "cookie-preferences",
                                              JSON.stringify(x)
                                            ),
                                            p(!1),
                                            f(!1),
                                            g(!1);
                                        },
                                        className:
                                          "flex-1 button-primary text-button-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:hover-gradient hover:shadow-icon-text-primary/25",
                                        children: e("cookies.savePreferences"),
                                      }),
                                      (0, r.jsx)("button", {
                                        onClick: () => p(!1),
                                        className:
                                          "flex-1 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:hover-gradient hover:border-secondary text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300",
                                        children: e("cookies.back"),
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, r.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col sm:flex-row gap-3",
                                    children: [
                                      (0, r.jsxs)("button", {
                                        onClick: () => {
                                          let e = {
                                            necessary: !0,
                                            preferences: !0,
                                          };
                                          y(e),
                                            localStorage.setItem(
                                              "cookie-consent",
                                              "accepted"
                                            ),
                                            localStorage.setItem(
                                              "cookie-preferences",
                                              JSON.stringify(e)
                                            ),
                                            f(!1),
                                            g(!1);
                                        },
                                        className:
                                          "flex-1 button-primary text-button-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2",
                                        children: [
                                          (0, r.jsx)(c.A, {
                                            className: "w-5 h-5",
                                          }),
                                          e("cookies.acceptAll"),
                                        ],
                                      }),
                                      (0, r.jsx)("button", {
                                        onClick: () => {
                                          let e = {
                                            necessary: !0,
                                            preferences: !1,
                                          };
                                          y(e),
                                            localStorage.setItem(
                                              "cookie-consent",
                                              "rejected"
                                            ),
                                            localStorage.setItem(
                                              "cookie-preferences",
                                              JSON.stringify(e)
                                            ),
                                            f(!1),
                                            g(!1);
                                        },
                                        className:
                                          "flex-1 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:hover-gradient hover:border-secondary text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300",
                                        children: e("cookies.rejectAll"),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("button", {
                                    onClick: () => p(!0),
                                    className:
                                      "w-full icon-text-primary hover:text-icon-text-primary/80 px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2",
                                    children: [
                                      (0, r.jsx)(d.A, { className: "w-4 h-4" }),
                                      e("cookies.customize"),
                                    ],
                                  }),
                                ],
                              }),
                        ],
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
    },
    99219: (e, a, t) => {
      "use strict";
      t.d(a, { LayoutWrapper: () => o });
      var r = t(34941),
        l = t(713),
        s = t(37149);
      function n() {
        return (0, r.jsx)("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300",
          children: (0, r.jsxs)("div", {
            className: "flex flex-col items-center gap-4",
            children: [
              (0, r.jsxs)("div", {
                className: "relative",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "w-12 h-12 border-2 border-blue-200 dark:border-blue-900 rounded-full animate-spin border-t-blue-600 dark:border-t-blue-400",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-2 w-8 h-8 border-2 border-blue-100 dark:border-blue-800 rounded-full animate-spin border-t-blue-500 dark:border-t-blue-300 animate-reverse",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "flex items-center gap-2",
                children: (0, r.jsx)("span", {
                  className:
                    "text-lg text-gray-900 dark:text-white orbitron-font",
                  children: "AstroNodes",
                }),
              }),
            ],
          }),
        });
      }
      function o(e) {
        let { children: a } = e,
          [t, o] = (0, l.useState)(s.loading.enableLoadingScreen);
        return (
          (0, l.useEffect)(() => {
            if (s.loading.enableLoadingScreen) {
              let e = setTimeout(() => {
                o(!1);
              }, s.loading.loadingDuration);
              return () => clearTimeout(e);
            }
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              t && s.loading.enableLoadingScreen && (0, r.jsx)(n, {}),
              (0, r.jsx)("div", {
                className: "transition-opacity duration-500 ".concat(
                  t ? "opacity-0" : "opacity-100"
                ),
                children: a,
              }),
            ],
          })
        );
      }
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [4789, 2455, 8234, 3529, 7552, 2182, 7358], () => a(21610)),
      (_N_E = e.O());
  },
]);
