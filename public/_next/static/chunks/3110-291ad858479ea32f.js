"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3110],
  {
    31009: (e) => {
      e.exports = JSON.parse(
        '{"settings":{"autoDetection":{"enabled":true,"fallbackLanguage":"en"},"defaultLanguage":"en"},"availableLanguages":[{"code":"en","name":"English","nativeName":"English","flag":"/flags/usa.png","enabled":true,"rtl":false},{"code":"hi","name":"Hindi","nativeName":"हिन्दी","flag":"ags","enabled":true,"rtl":false},{"code":"de","name":"German","nativeName":"Deutsch","flag":"/flags/germany.png","enabled":true,"rtl":false},{"code":"ar","name":"Arabic","nativeName":"العربية","flag":"/flags/lebanon.png","enabled":true,"rtl":true},{"code":"tr","name":"Turkish","nativeName":"T\xfcrk\xe7e","flag":"/flags/turkey.png","enabled":true,"rtl":false},{"code":"ru","name":"Russian","nativeName":"Русский","flag":"/flags/russian.png","enabled":true,"rtl":false},{"code":"zh","name":"Chinese","nativeName":"中文","flag":"/flags/chinese.png","enabled":true,"rtl":false},{"code":"ja","name":"Japanese","nativeName":"日本語","flag":"/flags/japanese.png","enabled":true,"rtl":false},{"code":"fr","name":"French","nativeName":"Fran\xe7ais","flag":"/flags/france.png","enabled":true,"rtl":false},{"code":"es","name":"Spanish","nativeName":"Espa\xf1ol","flag":"/flags/spain.png","enabled":true,"rtl":false},{"code":"pt","name":"Portuguese","nativeName":"Portugu\xeas","flag":"/flags/portugal.png","enabled":true,"rtl":false}],"localeMapping":{"en":["en","en-us","en-gb","en-au","en-ca","en-nz","en-za","en-ie"],"fr":["fr","fr-fr","fr-ca","fr-be","fr-ch","fr-lu","fr-mc"],"de":["de","de-de","de-at","de-ch","de-li","de-lu"],"ar":["ar","ar-sa","ar-ae","ar-eg","ar-ma","ar-dz","ar-tn","ar-ly","ar-sd","ar-sy","ar-iq","ar-jo","ar-lb","ar-kw","ar-om","ar-qa","ar-bh","ar-ye"],"tr":["tr","tr-tr","tr-cy"],"ru":["ru","ru-ru","ru-by","ru-kz","ru-kg","ru-tj","ru-uz","ru-md","ru-am","ru-ge","ru-ua","ru-mn"],"zh":["zh","zh-cn","zh-tw","zh-hk","zh-mo","zh-sg"],"ja":["ja","ja-jp"],"hi":["hi","hi-in","hi-np"],"es":["es","es-es","es-mx","es-ar","es-co","es-pe","es-ve","es-cl","es-ec","es-gt","es-cu","es-bo","es-do","es-hn","es-py","es-sv","es-ni","es-cr","es-pa","es-uy","es-pr","es-us"],"pt":["pt","pt-pt","pt-br","pt-ao","pt-mz","pt-gw","pt-cv","pt-st","pt-tl","pt-mo"]}}'
      );
    },
    37149: (e) => {
      e.exports = JSON.parse(
        '{"loading":{"enableLoadingScreen":true,"loadingDuration":100},"currency":{"apiKey":"dd3f01c6377b4a8d506f152a","baseCurrency":"INR","defaultCurrency":"INR","supportedCurrencies":[{"code":"INR","symbol":"₹","name":"Indian Rupee"},{"code":"USD","symbol":"$","name":"US Dollar"},{"code":"EUR","symbol":"€","name":"Euro"},{"code":"GBP","symbol":"\xa3","name":"British Pound"},{"code":"CAD","symbol":"C$","name":"Canadian Dollar"},{"code":"AUD","symbol":"A$","name":"Australian Dollar"},{"code":"JPY","symbol":"\xa5","name":"Japanese Yen"}]},"themeSwitcher":{"show":false,"position":"bottom-left","defaultColor":"blue","availableColors":[{"name":"orange","value":"rgba(150, 93, 29, 1)","label":"Orange"},{"name":"blue","value":"rgba(37, 99, 235, 1)","label":"Blue"},{"name":"purple","value":"rgba(147, 51, 234, 1)","label":"Purple"},{"name":"red","value":"rgba(239, 68, 68, 1)","label":"Red"},{"name":"green","value":"rgba(34, 197, 94, 1)","label":"Green"},{"name":"yellow","value":"rgba(234, 179, 8, 1)","label":"Yellow"},{"name":"pink","value":"rgba(236, 72, 153, 1)","label":"Pink"},{"name":"teal","value":"rgba(20, 184, 166, 1)","label":"Teal"}]},"christmasTheme":{"enabled":false},"hytale":{"showCountdown":true,"preorder":true}}'
      );
    },
    52490: (e, a, t) => {
      t.d(a, { LanguageProvider: () => l, o: () => d });
      var r = t(34941),
        n = t(713),
        s = t(31009);
      let i = (0, n.createContext)(void 0),
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
        l = (e) => {
          let { children: a } = e,
            [t, l] = (0, n.useState)("en"),
            [d, c] = (0, n.useState)({}),
            [m, h] = (0, n.useState)(!0),
            u = async (e) => {
              h(!0);
              try {
                let a = await fetch("/lang/".concat(e, ".json"));
                if (!a.ok)
                  throw Error("Failed to load ".concat(e, " translations"));
                let t = await a.json();
                c(t);
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
                      c(t),
                        console.warn(
                          "Loaded English translations as fallback for ".concat(
                            e
                          )
                        );
                    }
                  } catch (e) {
                    console.error("Failed to load fallback translations:", e),
                      c({});
                  }
                else c({});
              } finally {
                h(!1);
              }
            };
          (0, n.useEffect)(() => {
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
                let n = s.availableLanguages
                  .filter((e) => e.enabled)
                  .map((e) => e.code);
                if (r) {
                  let a = localStorage.getItem("language");
                  a && n.includes(a) && (e = a);
                }
                e === s.settings.defaultLanguage &&
                  s.settings.autoDetection.enabled &&
                  (e = o());
              }
              l(e), await u(e);
            })();
          }, []);
          let p = async (e) => {
            l(e);
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
              let n = s.availableLanguages.find((a) => a.code === e);
              document.documentElement.dir = (null == n ? void 0 : n.rtl)
                ? "rtl"
                : "ltr";
            }
            await u(e);
          };
          return (0, r.jsx)(i.Provider, {
            value: {
              language: t,
              setLanguage: p,
              translations: d,
              t: (e) => {
                if (m || 0 === Object.keys(d).length) return "";
                let a = e.split("."),
                  t = d;
                for (let r of a)
                  if (!t || "object" != typeof t || !(r in t)) return e;
                  else t = t[r];
                return "string" == typeof t ? t : e;
              },
              isLoading: m,
            },
            children:
              !m && Object.keys(d).length > 0
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
        d = () => {
          let e = (0, n.useContext)(i);
          if (void 0 === e)
            throw Error("useLanguage must be used within a LanguageProvider");
          return e;
        };
    },
    53110: (e, a, t) => {
      t.d(a, { default: () => en });
      var r = t(34941),
        n = t(713),
        s = t(51790),
        i = t.n(s),
        o = t(51874),
        l = t(48355),
        d = t(20406),
        c = t(82648),
        m = t(52490),
        h = t(67618),
        u = t(31009),
        p = t(5619),
        g = t(86661),
        x = t(93753),
        b = t(72840),
        f = t(69175);
      function y(e) {
        let { ...a } = e;
        return (0, r.jsx)(p.bL, { "data-slot": "select", ...a });
      }
      function v(e) {
        let { className: a, size: t = "default", children: n, ...s } = e;
        return (0, r.jsxs)(p.l9, {
          "data-slot": "select-trigger",
          "data-size": t,
          className: (0, f.cn)(
            " data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-secondary focus-visible:ring-0 aria-invalid:ring-0 dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            a
          ),
          ...s,
          children: [
            n,
            (0, r.jsx)(p.In, {
              asChild: !0,
              children: (0, r.jsx)(g.A, { className: "size-4 opacity-50" }),
            }),
          ],
        });
      }
      function w(e) {
        let { className: a, children: t, position: n = "popper", ...s } = e;
        return (0, r.jsx)(p.ZL, {
          children: (0, r.jsxs)(p.UC, {
            "data-slot": "select-content",
            className: (0, f.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              "popper" === n &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              a
            ),
            position: n,
            ...s,
            children: [
              (0, r.jsx)(N, {}),
              (0, r.jsx)(p.LM, {
                className: (0, f.cn)(
                  "p-1",
                  "popper" === n &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
                ),
                children: t,
              }),
              (0, r.jsx)(k, {}),
            ],
          }),
        });
      }
      function j(e) {
        let { className: a, children: t, ...n } = e;
        return (0, r.jsxs)(p.q7, {
          "data-slot": "select-item",
          className: (0, f.cn)(
            "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            a
          ),
          ...n,
          children: [
            (0, r.jsx)("span", {
              className:
                "absolute right-2 flex size-3.5 items-center justify-center",
              children: (0, r.jsx)(p.VF, {
                children: (0, r.jsx)(x.A, { className: "size-4" }),
              }),
            }),
            (0, r.jsx)(p.p4, { children: t }),
          ],
        });
      }
      function N(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)(p.PP, {
          "data-slot": "select-scroll-up-button",
          className: (0, f.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...t,
          children: (0, r.jsx)(b.A, { className: "size-4" }),
        });
      }
      function k(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)(p.wn, {
          "data-slot": "select-scroll-down-button",
          className: (0, f.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...t,
          children: (0, r.jsx)(g.A, { className: "size-4" }),
        });
      }
      let C = () => u.availableLanguages.filter((e) => e.enabled),
        S = (e) => {
          let { className: a = "" } = e,
            { language: t, setLanguage: s } = (0, m.o)(),
            [i, l] = (0, n.useState)(!1),
            d = (0, n.useRef)(null),
            c = C(),
            u = c.find((e) => e.code === t) || c[0];
          return (
            (0, n.useEffect)(() => {
              let e = (e) => {
                d.current && !d.current.contains(e.target) && l(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, []),
            (0, r.jsx)("div", {
              className: "relative ".concat(a),
              ref: d,
              children: (0, r.jsxs)(y, {
                value: t,
                onValueChange: (e) => {
                  s(e), l(!1);
                },
                children: [
                  (0, r.jsx)(v, {
                    className:
                      "flex items-center justify-center px-2 py-2 rounded-lg  border border-transparent transition-colors duration-300 text-gray-700 dark:text-gray-200 hover:text-icon-text-primary dark:hover:text-icon-text-primary w-10 h-10 p-0",
                    children: (0, r.jsx)(o.default, {
                      src: u.flag,
                      alt: "".concat(u.nativeName, " flag"),
                      width: 20,
                      height: 20,
                      className: "w-5 h-5 object-cover rounded-sm",
                    }),
                  }),
                  (0, r.jsx)(w, {
                    className:
                      " backdrop-blur-sm border border-secondary rounded-xl shadow-lg overflow-hidden",
                    children: c.map((e) =>
                      (0, r.jsxs)(
                        j,
                        {
                          value: e.code,
                          className:
                            "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 ".concat(
                              t === e.code
                                ? "bg-icon-text-primary/10 dark:bg-icon-text-primary/20 text-icon-text-primary dark:text-icon-text-primary"
                                : "text-gray-700 dark:text-gray-200"
                            ),
                          children: [
                            (0, r.jsx)(o.default, {
                              src: e.flag,
                              alt: "".concat(e.nativeName, " flag"),
                              width: 20,
                              height: 20,
                              className: "w-5 h-5 object-cover rounded-sm",
                            }),
                            (0, r.jsx)("span", {
                              className: "text-sm font-medium",
                              children: e.nativeName,
                            }),
                            t === e.code &&
                              (0, r.jsx)(h.P.div, {
                                initial: { scale: 0 },
                                animate: { scale: 1 },
                                className:
                                  "ml-auto w-2 h-2 icon-text-primary rounded-full",
                              }),
                          ],
                        },
                        e.code
                      )
                    ),
                  }),
                ],
              }),
            })
          );
        };
      var P = t(5492),
        z = t(98704),
        A = t(5065),
        L = t(61952),
        D = t(24059),
        E = t(43891),
        T = t(92536),
        I = t(32639),
        O = t(76906),
        M = t(31296),
        F = t(48017),
        _ = t(90333),
        H = t(5874),
        B = t(59607),
        V = t(91535),
        G = t(39383),
        U = t(39908),
        R = t(74038),
        J = t(83694),
        q = t(6802),
        W = t(84523),
        $ = t(82151),
        Y = t(9730),
        K = t(63850);
      let X = JSON.parse(
        '{"mainNavigation":[{"name":"Minecraft","href":"/minecraft","icon":"Gamepad2","hasDropdown":false},{"name":"Hytale","href":"/hytale","icon":"Gamepad2","hasDropdown":false},{"name":"VPS","href":"/vps","icon":"Cloud","hasDropdown":false},{"name":"Discord Bot","href":"/discord-bot-hosting","icon":"Bot","hasDropdown":false},{"name":"Company","href":"#","icon":"Info","hasDropdown":true,"dropdownType":"legal","dropdownItems":[{"name":"Contact Us","href":"/contact-us","description":"Contact us for quick support."},{"name":"Partners","href":"/partners","description":"View our partners and grow together."},{"name":"Branding","href":"/branding","description":"Discover our unique identity."},{"name":"Knowledgebase","href":"https://know.endercloud.in/","description":"Find answers and guides instantly."},{"name":"Trustpilot","href":"https://www.trustpilot.com/review/endercloud.in/","description":"Discover what our clients say"}]},{"name":"Tools","href":"#","icon":"Wrench","hasDropdown":true,"dropdownType":"legal","dropdownItems":[{"name":"Subdomain Creator","href":"https://subdomain.endercloud.in/","description":"Free custom subdomain for Minecraft"},{"name":"MC Status Checker","href":"mcstatus","description":"Check Minecraft Server Status"},{"name":"MOTD Creator","href":"motd","description":"Free custom Motd creator for Minecraft"}]}],"socialLinks":[{"name":"Discord","href":"https://discord.com/invite/7Ku7HUsd7Z","icon":"discord"},{"name":"Status","href":"https://uptime.endercloud.in/","icon":"signalhigh"}],"clientSpace":{"name":"CLIENT SPACE","href":"https://billing.endercloud.in/","icon":"User","dropdownItems":[{"name":"Billing Panel","href":"https://billing.endercloud.in/","icon":"FileText","description":"Billing, invoices & payments"},{"name":"Game Panel","href":"https://panel.endercloud.in/","icon":"Server","description":"Manage your game servers"},{"name":"VPS Panel","href":"https://manage.endercloud.in/","icon":"Cloud","description":"Manage your VPS services"}]},"banner":{"show":true,"text":"Limited Time Offer: Save 10% on Game Server Hosting","couponCode":"ASTRONODE10","backgroundColor":"bg-blue-500"}}'
      );
      var Z = t(71079),
        Q = t(37149);
      let ee = {
          Cloud: P.A,
          Server: z.A,
          Gamepad2: A.A,
          Globe: L.A,
          Network: D.A,
          Info: E.A,
          User: T.A,
          FileText: I.A,
          Shield: O.A,
          Menu: M.A,
          X: F.A,
          ChevronRight: _.A,
          Moon: H.A,
          Sun: B.A,
          FaDiscord: W.O4U,
          GrServerCluster: $.tN2,
          ExternalLink: V.A,
          Link3: G.A,
          Bot: U.A,
          Wrench: R.A,
          Activity: J.A,
          SignalHigh: q.A,
        },
        ea = (e) => ee[e],
        et = {
          discord: n.memo(() =>
            (0, r.jsx)("svg", {
              className: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
              }),
            })
          ),
          twitter: n.memo(() =>
            (0, r.jsx)("svg", {
              className: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
              }),
            })
          ),
          status: n.memo(() => (0, r.jsx)(J.A, { className: "w-5 h-5" })),
          signalhigh: n.memo(() => (0, r.jsx)(q.A, { className: "w-5 h-5" })),
        },
        er = n.memo(() => {
          let { theme: e, setTheme: a } = (0, d.D)(),
            [t, s] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            s(!0);
          }, []);
          let i = (0, n.useCallback)(() => {
              a("light" === e ? "dark" : "light");
            }, [e, a]),
            o = "light" === e ? "Switch to dark mode" : "Switch to light mode";
          return t
            ? (0, r.jsx)(c.$, {
                variant: "ghost",
                size: "icon",
                onClick: i,
                className: "w-8 h-8 text-muted-foreground hover:text-primary",
                "aria-label": o,
                children:
                  "light" === e
                    ? (0, r.jsx)(H.A, { className: "h-4 w-4" })
                    : (0, r.jsx)(B.A, { className: "h-4 w-4" }),
              })
            : (0, r.jsx)(c.$, {
                variant: "ghost",
                size: "icon",
                className: "w-8 h-8 text-muted-foreground",
                "aria-label": "Toggle theme",
                children: (0, r.jsx)(B.A, { className: "h-4 w-4" }),
              });
        });
      er.displayName = "ThemeToggle";
      let en = () => {
        let [e, a] = (0, n.useState)(!1),
          [t, s] = (0, n.useState)(X.banner.show),
          [c, u] = (0, n.useState)(!1),
          [p, g] = (0, n.useState)(!1),
          [b, f] = (0, n.useState)({
            recycle: !1,
            numberOfPieces: 200,
            gravity: 0.3,
          }),
          [y, v] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          let e = () => {
            v(window.innerWidth < 900);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let [w, j] = (0, n.useState)(!1),
          [N, k] = (0, n.useState)({ width: 0, height: 0 }),
          [C, P] = (0, n.useState)({}),
          z = (0, l.usePathname)(),
          { theme: A } = (0, d.D)(),
          { t: L } = (0, m.o)();
        (0, n.useEffect)(() => {
          let e = () => {
              u(window.scrollY > 0);
            },
            a = () => {
              k({ width: window.innerWidth, height: window.innerHeight });
            };
          return (
            a(),
            window.addEventListener("scroll", e),
            window.addEventListener("resize", a),
            () => {
              window.removeEventListener("scroll", e),
                window.removeEventListener("resize", a);
            }
          );
        }, []);
        let D = (0, n.useCallback)(() => {
            a(!1);
          }, []),
          E = (0, n.useCallback)(() => {
            a((e) => !e);
          }, []),
          T = (0, n.useCallback)((e) => {
            P((a) => ({ ...a, [e]: !a[e] }));
          }, []),
          I = (0, n.useMemo)(
            () => Z.hero.games.filter((e) => e.showInDropdown),
            [Z.hero.games]
          ),
          O = (0, n.useCallback)(() => {
            if (navigator.clipboard)
              navigator.clipboard
                .writeText(X.banner.couponCode)
                .then(() => {
                  f({ recycle: !1, numberOfPieces: 200, gravity: 0.3 }),
                    g(!0),
                    j(!0);
                })
                .catch(() => {
                  alert("Failed to copy code. Please try again.");
                });
            else {
              let e = document.createElement("textarea");
              (e.value = X.banner.couponCode),
                document.body.appendChild(e),
                e.select();
              try {
                document.execCommand("copy"),
                  f({ recycle: !1, numberOfPieces: 200, gravity: 0.3 }),
                  g(!0),
                  j(!0);
              } catch (e) {
                alert("Failed to copy code. Please try again.");
              }
              document.body.removeChild(e);
            }
          }, [X.banner.couponCode]),
          H = (0, n.useCallback)(() => {
            f((e) => ({
              ...e,
              gravity: 0.8,
              numberOfPieces: e.numberOfPieces,
            })),
              j(!1),
              setTimeout(() => {
                g(!1);
              }, 2e3);
          }, []),
          B = (0, n.useCallback)(
            (e) =>
              "games" === e.dropdownType
                ? (0, r.jsx)("div", {
                    className:
                      "absolute top-full left-0 w-[300px] sm:w-[400px] md:w-[500px] rounded-b-xl bg-white dark:bg-black/90 backdrop-blur-sm  border-t-2 border-top-nav mt-0 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 p-3 sm:p-4",
                    children: (0, r.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-3 gap-3  sm:gap-4",
                      children: I.map((e) =>
                        (0, r.jsxs)(
                          i(),
                          {
                            href: "/games?game=".concat(e.id),
                            className:
                              "relative block aspect-[4/3] rounded-lg border border-secondary overflow-hidden  group",
                            "aria-label": "View ".concat(
                              e.displayName,
                              " server options"
                            ),
                            prefetch: !0,
                            children: [
                              (0, r.jsx)(o.default, {
                                src: e.banner,
                                alt: "".concat(e.displayName, " banner"),
                                fill: !0,
                                sizes:
                                  "(max-width: 640px) 300px, (max-width: 768px) 200px, 250px",
                                className: "object-cover",
                                quality: 75,
                                loading: "lazy",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/30",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "absolute top-2 right-2 text-white/70 transition-colors duration-300 group-hover:text-white",
                                children: (0, r.jsx)(_.A, {
                                  className: "w-5 h-5",
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent",
                                children: [
                                  (0, r.jsx)("h3", {
                                    className:
                                      "text-white text-lg font-semibold mb-1",
                                    children: e.displayName,
                                  }),
                                  (0, r.jsxs)("p", {
                                    className:
                                      "text-white/80 text-sm line-clamp-2",
                                    children: [
                                      "Host your own ",
                                      e.name,
                                      " server",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.name
                        )
                      ),
                    }),
                  })
                : "legal" === e.dropdownType && e.dropdownItems
                ? (0, r.jsx)("div", {
                    className:
                      "absolute rounded-b-xl top-full left-0 w-[280px] bg-white dark:bg-black/90  border-t-2 border-top-nav mt-0 shadow-lg opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200  z-50 p-4",
                    children: (0, r.jsx)("div", {
                      className: "space-y-2",
                      children: e.dropdownItems.map((e) => {
                        let a =
                            "Terms of Service" === e.name
                              ? L("navbar.termsOfService")
                              : "Privacy Policy" === e.name
                              ? L("navbar.privacyPolicy")
                              : e.name,
                          t =
                            "Terms of Service" === e.name
                              ? L("navbar.termsDescription")
                              : "Privacy Policy" === e.name
                              ? L("navbar.privacyDescription")
                              : e.description;
                        return (0, r.jsxs)(
                          i(),
                          {
                            href: e.href,
                            className:
                              "block p-3 rounded-lg hover:border-secondary border-primary border hover:hover-gradient transition-colors",
                            prefetch: !0,
                            children: [
                              (0, r.jsx)("h3", {
                                className:
                                  "text-sm font-semibold text-gray-900 dark:text-white mb-1",
                                children: a,
                              }),
                              t &&
                                (0, r.jsx)("p", {
                                  className:
                                    "text-xs text-gray-600 dark:text-gray-300",
                                  children: t,
                                }),
                            ],
                          },
                          e.name
                        );
                      }),
                    }),
                  })
                : null,
            [I]
          ),
          V = (0, n.useCallback)(
            (e) => {
              switch (e.toLowerCase().replace(/\s+/g, "")) {
                case "games":
                  return L("navbar.games");
                case "cloud":
                  return L("navbar.cloud");
                case "dedicated":
                  return L("navbar.dedicated");
                case "discordbot":
                  return L("navbar.discord");
                case "webhosting":
                  return L("navbar.webhosting");
                case "legal":
                  return L("navbar.legal");
                default:
                  return e;
              }
            },
            [L]
          ),
          G = (0, n.useCallback)(
            (e) => {
              let a = e.icon ? ea(e.icon) : null,
                t = e.hasDropdown ? z.startsWith(e.href) : z === e.href,
                n = V(e.name);
              return e.hasDropdown
                ? (0, r.jsxs)(
                    "div",
                    {
                      className: "relative group",
                      children: [
                        (0, r.jsxs)(i(), {
                          href: e.href,
                          className:
                            "px-4 py-6 text-sm font-medium relative text-gray-700 dark:text-slate-200 hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-colors flex items-center space-x-2 \n            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-button-bg dark:after:bg-button-bg after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center\n            hover:hover-gradient\n            ".concat(
                              t
                                ? "text-icon-text-primary dark:text-icon-text-primary after:scale-x-100 hover-gradient"
                                : ""
                            ),
                          prefetch: !0,
                          children: [
                            a && (0, r.jsx)(a, { className: "w-4 h-4" }),
                            (0, r.jsx)("span", { children: n }),
                          ],
                        }),
                        B(e),
                      ],
                    },
                    e.name
                  )
                : (0, r.jsxs)(
                    i(),
                    {
                      href: e.href,
                      className:
                        "px-4 py-6 text-sm font-medium relative text-gray-700 dark:text-slate-200 hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-colors flex items-center space-x-2 \n        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-button-bg dark:after:bg-button-bg after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center\n        hover:hover-gradient\n        ".concat(
                          t
                            ? "text-icon-text-primary dark:text-icon-text-primary after:scale-x-100 hover-gradient"
                            : ""
                        ),
                      prefetch: !0,
                      children: [
                        a && (0, r.jsx)(a, { className: "w-4 h-4" }),
                        (0, r.jsx)("span", { children: n }),
                      ],
                    },
                    e.name
                  );
            },
            [z, B, V]
          ),
          U = (0, n.useCallback)(
            (e) => {
              let a = e.icon ? ea(e.icon) : null,
                t = V(e.name);
              if (e.hasDropdown && "games" === e.dropdownType) {
                let n = z.startsWith("/games"),
                  s = C[e.name] || !1;
                return (0, r.jsxs)(
                  "div",
                  {
                    className: "mb-3",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsxs)(i(), {
                            href: e.href,
                            className:
                              "flex items-center space-x-3 flex-1 px-3 py-3 rounded-l-lg transition-colors ".concat(
                                n
                                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 border-r-0"
                                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 border-r-0"
                              ),
                            onClick: D,
                            prefetch: !0,
                            children: [
                              a && (0, r.jsx)(a, { className: "w-5 h-5" }),
                              (0, r.jsx)("span", {
                                className: "font-medium",
                                children: t,
                              }),
                            ],
                          }),
                          (0, r.jsx)("button", {
                            onClick: () => T(e.name),
                            className:
                              "px-3 py-3 rounded-r-lg transition-all duration-200 ".concat(
                                n
                                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 border-l-0"
                                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 border-l-0"
                              ),
                            "aria-label": "Toggle ".concat(e.name, " dropdown"),
                            children: (0, r.jsx)(h.P.div, {
                              animate: { rotate: 90 * !!s },
                              transition: { duration: 0.2 },
                              children: (0, r.jsx)(_.A, {
                                className: "w-4 h-4",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(K.N, {
                        children:
                          s &&
                          (0, r.jsx)(h.P.div, {
                            initial: { height: 0, opacity: 0 },
                            animate: { height: "auto", opacity: 1 },
                            exit: { height: 0, opacity: 0 },
                            transition: { duration: 0.3, ease: "easeInOut" },
                            className: "mt-2 pl-2 overflow-hidden",
                            children: (0, r.jsx)("div", {
                              className: "max-h-[35vh] overflow-y-auto",
                              children: (0, r.jsx)("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: I.map((e) =>
                                  (0, r.jsxs)(
                                    i(),
                                    {
                                      href: "/games?game=".concat(e.id),
                                      className:
                                        "relative block aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors group",
                                      onClick: D,
                                      "aria-label": "View ".concat(
                                        e.displayName,
                                        " server options"
                                      ),
                                      prefetch: !0,
                                      children: [
                                        (0, r.jsx)(o.default, {
                                          src: e.banner,
                                          alt: "".concat(
                                            e.displayName,
                                            " banner"
                                          ),
                                          fill: !0,
                                          sizes:
                                            "(max-width: 640px) 180px, 180px",
                                          className: "object-cover",
                                          quality: 75,
                                          loading: "lazy",
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors",
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent",
                                          children: (0, r.jsx)("h3", {
                                            className:
                                              "text-white text-xs font-semibold truncate",
                                            children: e.displayName,
                                          }),
                                        }),
                                      ],
                                    },
                                    e.name
                                  )
                                ),
                              }),
                            }),
                          }),
                      }),
                    ],
                  },
                  e.name
                );
              }
              if (
                e.hasDropdown &&
                "legal" === e.dropdownType &&
                e.dropdownItems
              ) {
                let n = z === e.href,
                  s = C[e.name] || !1;
                return (0, r.jsxs)(
                  "div",
                  {
                    className: "mb-3",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, r.jsxs)(i(), {
                            href: e.href,
                            className:
                              "flex items-center space-x-3 flex-1 px-3 py-3 rounded-l-lg transition-colors ".concat(
                                n
                                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 border-r-0"
                                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 border-r-0"
                              ),
                            onClick: D,
                            prefetch: !0,
                            children: [
                              a && (0, r.jsx)(a, { className: "w-5 h-5" }),
                              (0, r.jsx)("span", {
                                className: "font-medium",
                                children: t,
                              }),
                            ],
                          }),
                          (0, r.jsx)("button", {
                            onClick: () => T(e.name),
                            className:
                              "px-3 py-3 rounded-r-lg transition-all duration-200 ".concat(
                                n
                                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 border-l-0"
                                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border border-gray-200 dark:border-gray-700 border-l-0"
                              ),
                            "aria-label": "Toggle ".concat(e.name, " dropdown"),
                            children: (0, r.jsx)(h.P.div, {
                              animate: { rotate: 90 * !!s },
                              transition: { duration: 0.2 },
                              children: (0, r.jsx)(_.A, {
                                className: "w-4 h-4",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(K.N, {
                        children:
                          s &&
                          (0, r.jsx)(h.P.div, {
                            initial: { height: 0, opacity: 0 },
                            animate: { height: "auto", opacity: 1 },
                            exit: { height: 0, opacity: 0 },
                            transition: { duration: 0.3, ease: "easeInOut" },
                            className: "mt-2 ml-6 space-y-1 overflow-hidden",
                            children: e.dropdownItems.map((e) => {
                              let a =
                                "Terms of Service" === e.name
                                  ? L("navbar.termsOfService")
                                  : "Privacy Policy" === e.name
                                  ? L("navbar.privacyPolicy")
                                  : e.name;
                              return (0, r.jsx)(
                                i(),
                                {
                                  href: e.href,
                                  className:
                                    "block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/30 rounded-md transition-colors",
                                  onClick: D,
                                  prefetch: !0,
                                  children: a,
                                },
                                e.name
                              );
                            }),
                          }),
                      }),
                    ],
                  },
                  e.name
                );
              }
              let n = z === e.href;
              return (0, r.jsxs)(
                i(),
                {
                  href: e.href,
                  className:
                    "flex items-center justify-between w-full px-3 py-3 rounded-lg transition-colors mb-2 ".concat(
                      n
                        ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    ),
                  onClick: D,
                  prefetch: !0,
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        a && (0, r.jsx)(a, { className: "w-5 h-5" }),
                        (0, r.jsx)("span", {
                          className: "font-medium",
                          children: t,
                        }),
                      ],
                    }),
                    (0, r.jsx)(_.A, { className: "w-4 h-4" }),
                  ],
                },
                e.name
              );
            },
            [z, D, I, C, T]
          );
        return (0, r.jsxs)("div", {
          style: { overflowX: "hidden", position: "relative" },
          children: [
            p &&
              (0, r.jsx)("div", {
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1e4,
                  pointerEvents: "none",
                  overflow: "hidden",
                },
                children: (0, r.jsx)(Y.A, {
                  width: N.width,
                  height: N.height,
                  recycle: b.recycle,
                  numberOfPieces: b.numberOfPieces,
                  gravity: b.gravity,
                }),
              }),
            (0, r.jsx)(K.N, {
              children:
                w &&
                (0, r.jsxs)(h.P.div, {
                  className:
                    "fixed inset-0 z-[9999] flex items-center justify-center",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 },
                  children: [
                    (0, r.jsx)(h.P.div, {
                      className: "absolute backdrop-blur-sm inset-0",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.3 },
                      onClick: H,
                    }),
                    (0, r.jsxs)(h.P.div, {
                      className:
                        "relative bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-secondary rounded-lg p-8 max-w-sm mx-4 text-center shadow-2xl",
                      initial: { opacity: 0, scale: 0.8, y: 20 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.8, y: 20 },
                      transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                        duration: 0.4,
                      },
                      children: [
                        (0, r.jsx)(h.P.div, {
                          className: "flex justify-center mb-4",
                          initial: { scale: 0, rotate: -180 },
                          animate: { scale: 1, rotate: 0 },
                          transition: {
                            delay: 0.2,
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                          },
                          children: (0, r.jsx)("div", {
                            className:
                              "w-16 h-16 card-primary rounded-full flex items-center justify-center",
                            children: (0, r.jsx)(x.A, {
                              className: "w-8 h-8 icon-text-primary",
                            }),
                          }),
                        }),
                        (0, r.jsx)(h.P.h3, {
                          className:
                            "text-xl font-semibold text-gray-900 dark:text-white mb-2",
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 0.3, duration: 0.3 },
                          children: "Coupon Code Copied!",
                        }),
                        (0, r.jsx)(h.P.p, {
                          className: "text-gray-600 dark:text-gray-300 mb-6",
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 0.4, duration: 0.3 },
                          children:
                            "The coupon code has been copied to your clipboard.",
                        }),
                        (0, r.jsx)(h.P.button, {
                          onClick: H,
                          className:
                            "w-full button-primary text-icon-text-primary px-6 py-3 rounded-lg font-semibold hover:hover-gradient border border-transparent hover:border-secondary transition-all duration-300",
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: 20 },
                          transition: {
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                            duration: 0.4,
                          },
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          children: "Ok, Thank you!",
                        }),
                      ],
                    }),
                  ],
                }),
            }),
            t &&
              X.banner.show &&
              (0, r.jsx)("div", {
                className:
                  "relative text-white text-sm py-3 px-4 transition-colors duration-300 ".concat(
                    X.banner.useThemeColor ? "" : X.banner.backgroundColor
                  ),
                style: {
                  backgroundColor: X.banner.useThemeColor
                    ? "var(--button-primary)"
                    : void 0,
                },
                children: (0, r.jsx)("div", {
                  className: "max-w-7xl mx-auto px-2 sm:px-4",
                  children: (0, r.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex-1 flex items-center justify-center space-x-2 sm:space-x-3",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 icon-text-primary rounded-full flex items-center justify-center flex-shrink-0",
                            children: (0, r.jsx)("span", {
                              className: "icon-text-primary text-xs font-bold",
                              children: "%",
                            }),
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "text-xs sm:text-sm md:text-base text-white font-medium",
                            children: X.banner.text,
                          }),
                          (0, r.jsx)("button", {
                            onClick: O,
                            className:
                              "bg-white/20 hover:bg-white/30 px-1.5 sm:px-2 md:px-3 py-1 rounded text-xs font-bold transition-colors cursor-pointer whitespace-nowrap flex-shrink-0 text-white border border-white/30 hover:border-white/50",
                            children: X.banner.couponCode,
                          }),
                        ],
                      }),
                      (0, r.jsx)("button", {
                        className:
                          "text-white hover:text-white/90 transition-colors flex-shrink-0",
                        onClick: () => s(!1),
                        "aria-label": "Close banner",
                        children: (0, r.jsx)(F.A, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                }),
              }),
            (0, r.jsxs)("nav", {
              className:
                "fixed -mt-1 left-0 right-0 z-50 bg-white/90 dark:bg-[#10121b]/20 backdrop-blur-xs border-b border-gray-200/60 dark:border-[#272a32]/10 transition-all duration-300 ".concat(
                  c ? "top-0" : t ? "top-[52px]" : "top-0"
                ),
              children: [
                (0, r.jsx)("div", {
                  className: "px-4 sm:px-0 max-w-7xl mx-auto",
                  children: (0, r.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "flex-shrink-0 flex items-center mr-6",
                        children: (0, r.jsxs)(i(), {
                          href: "/",
                          className: "flex items-center space-x-3",
                          "aria-label": "Go to homepage",
                          prefetch: !0,
                          children: [
                            (0, r.jsx)(o.default, {
                              src: Z.navbar.logo,
                              alt: Z.navbar.brandName,
                              className: "h-8 sm:h-10 md:h-12 w-auto",
                              width: 48,
                              height: 48,
                              priority: !0,
                              quality: 90,
                              sizes:
                                "(max-width: 640px) 32px, (max-width: 768px) 40px, 48px",
                            }),
                            (0, r.jsxs)("span", {
                              className:
                                "text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white orbitron-font",
                              children: [
                                Z.navbar.brandName,
                                (0, r.jsx)("span", {
                                  className: "icon-text-primary",
                                  children: Z.navbar.brandAccent,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "".concat(
                          y ? "hidden" : "hidden md:flex md:items-center"
                        ),
                        children: X.mainNavigation.map((e) => G(e)),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "hidden md:flex md:items-center md:space-x-4 ml-auto",
                        children: [
                          X.socialLinks.map((e) => {
                            let a = et[e.icon];
                            return (0, r.jsx)(
                              "a",
                              {
                                href: e.href,
                                className:
                                  "text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",
                                "aria-label": "Visit our ".concat(
                                  e.name,
                                  " page"
                                ),
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: (0, r.jsx)(a, {}),
                              },
                              e.name
                            );
                          }),
                          (0, r.jsx)(er, {}),
                          (0, r.jsx)(S, {}),
                          (0, r.jsxs)("div", {
                            className: "relative group",
                            children: [
                              (0, r.jsxs)("button", {
                                className:
                                  " hidden sm:flex items-center space-x-2  button-primary text-button-primary  border border-transparent  px-3 sm:px-4 py-2  rounded-lg orbitron-font  text-xs sm:text-sm font-medium  transition-all duration-300  hover:bg-[var(--hover-gradient)]  hover:text-[var(--icon-text-primary)]  hover:border-[var(--border-secondary)] ",
                                children: [
                                  X.clientSpace.icon &&
                                    n.createElement(ea(X.clientSpace.icon), {
                                      className: "w-4 h-4",
                                    }),
                                  (0, r.jsx)("span", {
                                    children: L("navbar.clientSpace"),
                                  }),
                                  (0, r.jsx)(_.A, {
                                    className:
                                      "w-4 h-4 ml-1 transform rotate-90 opacity-70 group-hover:opacity-100 transition",
                                  }),
                                ],
                              }),
                              X.clientSpace.dropdownItems
                                ? (0, r.jsx)("div", {
                                    className:
                                      " absolute top-full right-0 w-[280px] bg-white dark:bg-black/90  border-t-2 border-top-nav  rounded-b-xl shadow-lg  opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200  z-50 p-4 ",
                                    children: (0, r.jsx)("div", {
                                      className: "space-y-2",
                                      children: X.clientSpace.dropdownItems.map(
                                        (e) =>
                                          (0, r.jsxs)(
                                            i(),
                                            {
                                              href: e.href,
                                              className:
                                                " block p-3 rounded-lg border border-primary  hover:border-secondary hover:hover-gradient  transition-colors ",
                                              prefetch: !0,
                                              children: [
                                                (0, r.jsx)("h3", {
                                                  className:
                                                    "text-sm font-semibold text-gray-900 dark:text-white mb-1",
                                                  children: e.name,
                                                }),
                                                e.description &&
                                                  (0, r.jsx)("p", {
                                                    className:
                                                      "text-xs text-gray-600 dark:text-gray-300",
                                                    children: e.description,
                                                  }),
                                              ],
                                            },
                                            e.name
                                          )
                                      ),
                                    }),
                                  })
                                : null,
                              Q.christmasTheme.enabled &&
                                (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)(o.default, {
                                      src: "/christmas/button-deco-up.png",
                                      alt: "Christmas decoration",
                                      width: 32,
                                      height: 32,
                                      className:
                                        "absolute -top-2 -right-2 pointer-events-none hidden sm:block",
                                    }),
                                    (0, r.jsx)(o.default, {
                                      src: "/christmas/button-deco-down.png",
                                      alt: "Christmas decoration",
                                      width: 32,
                                      height: 32,
                                      className:
                                        "absolute -bottom-2 -left-2 pointer-events-none hidden sm:block",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "".concat(
                          y
                            ? "flex items-center py-2 ml-auto"
                            : "flex items-center py-2 md:hidden ml-auto"
                        ),
                        children: (0, r.jsxs)("button", {
                          type: "button",
                          className:
                            "inline-flex items-center justify-center p-2 rounded-md text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-white transition-colors relative",
                          onClick: E,
                          "aria-expanded": e,
                          "aria-controls": "mobile-menu",
                          "aria-label": "Toggle navigation menu",
                          children: [
                            (0, r.jsx)("span", {
                              className: "sr-only",
                              children: "Open main menu",
                            }),
                            (0, r.jsx)(h.P.div, {
                              animate: { rotate: 90 * !!e },
                              transition: { duration: 0.2 },
                              children: (0, r.jsx)(M.A, {
                                className: "".concat(
                                  e ? "hidden" : "block",
                                  " h-6 w-6"
                                ),
                              }),
                            }),
                            (0, r.jsx)(h.P.div, {
                              animate: { rotate: e ? 0 : -90 },
                              transition: { duration: 0.2 },
                              children: (0, r.jsx)(F.A, {
                                className: "".concat(
                                  e ? "block" : "hidden",
                                  " h-6 w-6"
                                ),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(K.N, {
                  children:
                    e &&
                    (0, r.jsx)(h.P.div, {
                      id: "mobile-menu",
                      className:
                        "md:hidden bg-white dark:bg-[#10121b] border-t border-gray-200 dark:border-gray-700 overflow-y-auto max-h-[85vh]",
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: { duration: 0.3, ease: "easeInOut" },
                      children: (0, r.jsxs)(h.P.div, {
                        className:
                          "divide-y divide-gray-200 dark:divide-gray-700",
                        initial: { y: -20 },
                        animate: { y: 0 },
                        exit: { y: -20 },
                        transition: { duration: 0.2, delay: 0.1 },
                        children: [
                          (0, r.jsx)(h.P.div, {
                            className: "px-4 py-3",
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { delay: 0.15 },
                            children: X.mainNavigation.map((e, a) =>
                              (0, r.jsx)(
                                h.P.div,
                                {
                                  initial: { opacity: 0, x: -20 },
                                  animate: { opacity: 1, x: 0 },
                                  exit: { opacity: 0, x: -20 },
                                  transition: {
                                    delay: 0.1 + 0.05 * a,
                                    duration: 0.2,
                                  },
                                  children: U(e),
                                },
                                e.name
                              )
                            ),
                          }),
                          (0, r.jsxs)(h.P.div, {
                            className:
                              "px-4 py-4 bg-gray-50/50 dark:bg-gray-800/20",
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { delay: 0.2 },
                            children: [
                              (0, r.jsxs)(h.P.div, {
                                className:
                                  "flex items-center justify-between py-2 mb-3",
                                initial: { opacity: 0, y: 10 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 10 },
                                transition: { delay: 0.2 },
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "text-sm font-medium text-gray-700 dark:text-gray-300",
                                    children: "Language",
                                  }),
                                  (0, r.jsx)(S, { className: "w-32" }),
                                ],
                              }),
                              (0, r.jsxs)(h.P.div, {
                                className:
                                  "flex items-center justify-between py-2 mb-3",
                                initial: { opacity: 0, y: 10 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 10 },
                                transition: { delay: 0.25 },
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "text-sm font-medium text-gray-700 dark:text-gray-300",
                                    children: "Theme",
                                  }),
                                  (0, r.jsx)(er, {}),
                                ],
                              }),
                              (0, r.jsx)(h.P.div, {
                                className:
                                  "flex items-center justify-center gap-6 py-2 mb-3",
                                initial: { opacity: 0, y: 10 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 10 },
                                transition: { delay: 0.3 },
                                children: X.socialLinks.map((e, a) => {
                                  let t = et[e.icon];
                                  return (0, r.jsx)(
                                    h.P.a,
                                    {
                                      href: e.href,
                                      className:
                                        "text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50",
                                      "aria-label": "Visit our ".concat(
                                        e.name,
                                        " page"
                                      ),
                                      rel: "noopener noreferrer",
                                      target: "_blank",
                                      initial: { opacity: 0, scale: 0.8 },
                                      animate: { opacity: 1, scale: 1 },
                                      exit: { opacity: 0, scale: 0.8 },
                                      transition: {
                                        delay: 0.35 + 0.05 * a,
                                        duration: 0.2,
                                      },
                                      whileHover: { scale: 1.1 },
                                      whileTap: { scale: 0.95 },
                                      children: (0, r.jsx)(t, {}),
                                    },
                                    e.name
                                  );
                                }),
                              }),
                              (0, r.jsxs)(h.P.div, {
                                initial: { opacity: 0, y: 10 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 10 },
                                transition: { delay: 0.4 },
                                className: "relative",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "mb-3",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          " flex items-center space-x-3 px-4 py-3 rounded-lg  bg-white dark:bg-[#1a1d27] border border-gray-200 dark:border-gray-700 ",
                                        children: [
                                          X.clientSpace.icon &&
                                            n.createElement(
                                              ea(X.clientSpace.icon),
                                              {
                                                className:
                                                  "w-5 h-5 text-gray-700 dark:text-gray-200",
                                              }
                                            ),
                                          (0, r.jsx)("span", {
                                            className:
                                              "font-semibold text-gray-900 dark:text-white",
                                            children: L("navbar.clientSpace"),
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "mt-3 space-y-2 ml-2",
                                        children:
                                          X.clientSpace.dropdownItems.map(
                                            (e) => {
                                              let a = e.icon
                                                ? ea(e.icon)
                                                : null;
                                              return (0, r.jsxs)(
                                                i(),
                                                {
                                                  href: e.href,
                                                  onClick: D,
                                                  className:
                                                    " flex items-center space-x-3  px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1d27] text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ",
                                                  prefetch: !0,
                                                  children: [
                                                    a &&
                                                      (0, r.jsx)(a, {
                                                        className:
                                                          "w-5 h-5 text-gray-500 dark:text-gray-300",
                                                      }),
                                                    (0, r.jsx)("span", {
                                                      className:
                                                        "text-sm font-medium",
                                                      children: e.name,
                                                    }),
                                                  ],
                                                },
                                                e.name
                                              );
                                            }
                                          ),
                                      }),
                                    ],
                                  }),
                                  Q.christmasTheme.enabled &&
                                    (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsx)(o.default, {
                                          src: "/christmas/button-deco-up.png",
                                          alt: "Christmas decoration",
                                          width: 32,
                                          height: 32,
                                          className:
                                            "absolute -top-2 -right-2 pointer-events-none",
                                        }),
                                        (0, r.jsx)(o.default, {
                                          src: "/christmas/button-deco-down.png",
                                          alt: "Christmas decoration",
                                          width: 32,
                                          height: 32,
                                          className:
                                            "absolute -bottom-2 -left-2 pointer-events-none",
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
                }),
              ],
            }),
          ],
        });
      };
    },
    69175: (e, a, t) => {
      t.d(a, { cn: () => s });
      var r = t(52858),
        n = t(52926);
      function s() {
        for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
          a[t] = arguments[t];
        return (0, n.QP)((0, r.$)(a));
      }
    },
    71079: (e) => {
      e.exports = JSON.parse(
        '{"navbar":{"logo":"/banners/logo.png","brandName":"Astro","brandAccent":"Nodes"},"hero":{"title":{"suffixColor":"white","gameNameColor":"blue"},"games":[{"id":"minecraft","name":"Minecraft","displayName":"Minecraft","banner":"/banners/minecraft-banners.webp","color":"#4CAF50","showSuffix":true,"showInDropdown":true},{"id":"discord-nodejs","name":"Discord (Apps)","displayName":"Discord Bot","banner":"/banners/discord.png","color":"#339933","showSuffix":false,"showInDropdown":false},{"id":"database","name":"Database Server Hosting","displayName":"Database","banner":"/banners/database.png","color":"#8B4513","showSuffix":true,"showInDropdown":false},{"id":"vps","name":"VPS","displayName":"VPS","banner":"/banners/webhosting.png","color":"#4A90E2","showSuffix":true,"showInDropdown":false}],"description":"Experience lightning-fast performance, unbeatable reliability, and 24/7 support for all your favorite games.","cycleInterval":10000,"partners":[{"name":"Amd","src":"/advertisement/amd.svg","loading":"lazy"},{"name":"Intel","src":"/advertisement/intel.png","loading":"lazy"},{"name":"Cloudflare","src":"/advertisement/cloudflare.webp","loading":"lazy"},{"name":"Pterodactyl","src":"/advertisement/ptero.png","loading":"lazy"},{"name":"Amd","src":"https://flagcdn.com/w80/in.png","loading":"lazy"},{"name":"Intel","src":"/advertisement/intel.png","loading":"lazy"},{"name":"Cloudflare","src":"/advertisement/cloudflare.webp","loading":"lazy"},{"name":"Pterodactyl","src":"/advertisement/ptero.png","loading":"lazy"}]}}'
      );
    },
    82648: (e, a, t) => {
      t.d(a, { $: () => l });
      var r = t(34941);
      t(713);
      var n = t(49918),
        s = t(49548),
        i = t(69175);
      let o = (0, s.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function l(e) {
        let { className: a, variant: t, size: s, asChild: l = !1, ...d } = e,
          c = l ? n.DX : "button";
        return (0, r.jsx)(c, {
          "data-slot": "button",
          className: (0, i.cn)(o({ variant: t, size: s, className: a })),
          ...d,
        });
      }
    },
  },
]);
