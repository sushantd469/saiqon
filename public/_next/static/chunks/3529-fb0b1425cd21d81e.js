(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3529], {
  5235: e=> {
    e.exports = {
      style: {
        fontFamily: "'DM Sans', 'DM Sans Fallback'", fontStyle: "normal"
      }, className: "__className_ef116d", variable: "__variable_ef116d"
    }}, 12316: (e, t, a)=> {
    "use strict"; a.d(t, {
      A: ()=>v
    }); var r, n, i = a(713), s = a(21553); function o(e, t) {
      return Number.isInteger(e) && Number.isInteger(t)?Math.floor(Math.random()*(t-e+1)+e): Math.random()*(t-e)+e
    }function c(e) {
      return e? {
        height: e.offsetHeight, width: e.offsetWidth
      }: {
        height: 0, width: 0
      }}let f = 2*Math.PI, l = {
      color: "#dee4fd", radius: [.5, 3], speed: [1, 3], wind: [-.5, 2], changeFrequency: 200, rotationSpeed: [-1, 1], opacity: [1, 1]}; class u {
      static createSnowflakes(e, t, a) {
        if (!e)return[]; let r = []; for (let n = 0; n < t; n++)r.push(new u(e, a)); return r
      }constructor(e, t = {}) {
        this.updateConfig(t); let {
          radius: a,
          wind: r,
          speed: n,
          rotationSpeed: i,
          opacity: s
        } = this.config; this.params = {
          x: o(0, e.offsetWidth),
          y: o(-e.offsetHeight, 0),
          rotation: o(0, 360),
          radius: o(...a),
          speed: o(...n),
          wind: o(...r),
          rotationSpeed: o(...i),
          nextSpeed: o(...n),
          nextWind: o(...r),
          nextRotationSpeed: o(...i),
          opacity: o(...s),
          hasNextOpacity: !1
        },
        this.framesSinceLastUpdate = 0
      }selectImage() {
        this.config.images && this.config.images.length > 0?this.image = function(e) {
          let t = Math.floor(Math.random()*e.length); return e[t]}(this.config.images): this.image = void 0
      }updateConfig(e) {
        let t = this.config; this.config = {
          ...l,
          ...e
        },
        this.config.changeFrequency = o(this.config.changeFrequency, 1.5*this.config.changeFrequency),
        this.params&&!s(this.config.radius, null == t?void 0: t.radius) && (this.params.radius = o(...this.config.radius)),
        s(this.config.images, null == t?void 0: t.images) || this.selectImage(),
        (null == t?void 0: t.opacity)&&!s(this.config.opacity, null == t?void 0: t.opacity) && (this.params.hasNextOpacity=!0)}updateTargetParams() {
        this.params.nextSpeed = o(...this.config.speed),
        this.params.nextWind = o(...this.config.wind),
        this.image && (this.params.nextRotationSpeed = o(...this.config.rotationSpeed))}update(e, t, a = 1) {
        let {
          x: r,
          y: n,
          rotation: i,
          rotationSpeed: s,
          nextRotationSpeed: c,
          wind: f,
          speed: l,
          nextWind: u,
          nextSpeed: h,
          radius: d
        } = this.params; this.params.x = (r+f*a)%(e+2*d),
        this.params.x > e+d && (this.params.x=-d),
        this.params.y = (n+l*a)%(t+2*d),
        this.params.y > t+d && (this.params.hasNextOpacity && (this.params.opacity = o(...this.config.opacity), this.params.hasNextOpacity=!1), this.params.y=-d),
        this.image && (this.params.rotation = (i+s)%360),
        this.params.speed = .99*l+.01*h,
        this.params.wind = .99*f+.01*u,
        this.params.rotationSpeed = .99*s+.01*c,
        this.framesSinceLastUpdate++>this.config.changeFrequency && (this.updateTargetParams(), this.framesSinceLastUpdate = 0)}getImageOffscreenCanvas(e, t) {
        var a,
        r; if (e instanceof HTMLImageElement && e.loading)return e; let n = u.offscreenCanvases.get(e); if (n || (n = {}, u.offscreenCanvases.set(e, n)), !(t in n)) {
          let r = document.createElement("canvas"); r.width = t,
          r.height = t,
          null == (a = r.getContext("2d")) || a.drawImage(e, 0, 0, t, t),
          n[t] = r
        }return null != (r = n[t])?r: e
      }drawCircle(e) {
        e.moveTo(this.params.x, this.params.y),
        e.arc(this.params.x, this.params.y, this.params.radius, 0, f)}drawImage(e) {
        let {
          x: t,
          y: a,
          rotation: r,
          radius: n
        } = this.params,
        i = r*Math.PI/180,
        s = Math.cos(i),
        o = Math.sin(i); 1 !== this.params.opacity && (e.save(), e.globalAlpha = this.params.opacity),
        e.setTransform(s, o, -o, s, t, a); let c = this.getImageOffscreenCanvas(this.image, n); e.drawImage(c, -(n/2), -(n/2), n, n),
        1 !== this.params.opacity && e.restore()}}u.offscreenCanvases = new WeakMap; let h = {
      pointerEvents: "none",
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    d = 1e3/60; var p = function(e, t, a, r) {
      if ("a" === a&&!r)throw TypeError("Private accessor was defined without a getter"); if ("function" == typeof t?e !== t||!r: !t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it"); return"m" === a?r: "a" === a?r.call(e): r?r.value: t.get(e)},
    m = function(e, t, a, r, n) {
      if ("m" === r)throw TypeError("Private method is not writable"); if ("a" === r&&!n)throw TypeError("Private accessor was defined without a setter"); if ("function" == typeof t?e !== t||!n: !t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it"); return"a" === r?n.call(e, a): n?n.value = a: t.set(e, a),
      a
    }; class g {
      get ctx() {
        return p(this, r, "f")}get canvas() {
        return p(this, n, "f")}set canvas(e) {
        m(this, n, e, "f"),
        m(this, r, e.getContext("2d"), "f")}constructor(e, t) {
        this.lastUpdate = Date.now(),
        this.snowflakes = [],
        r.set(this, void 0),
        n.set(this, void 0),
        m(this, n, e, "f"),
        m(this, r, e.getContext("2d"), "f"),
        this.config = {
          snowflakeCount: 150,
          ...l,
          ...t
        },
        this.snowflakes = [],
        this.snowflakes = u.createSnowflakes(e, t.snowflakeCount || 150, t),
        this.play()}updateConfig(e) {
        this.config = {
          ...this.config,
          ...e
        }; let t = this.config.snowflakeCount-this.snowflakes.length; for (let a of(t > 0 && (this.snowflakes = [...this.snowflakes, ...u.createSnowflakes(this.canvas, t, e)]), t < 0 && (this.snowflakes = this.snowflakes.slice(0, this.config.snowflakeCount)), this.snowflakes))a.updateConfig(this.config)}render(e = 1) {
        let {
          ctx: t,
          canvas: a,
          snowflakes: r
        } = this; if (!t||!a)return; let {
          offsetWidth: n,
          offsetHeight: i
        } = a; for (let t of r)t.update(n, i, e); if (t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, n, i), this.config.images && this.config.images.length > 0) {
          for (let e of r)e.drawImage(t); return
        }for (let e of(t.beginPath(), r))e.drawCircle(t); t.fillStyle = this.config.color,
        t.fill()}loop() {
        let e = Date.now(),
        t = Date.now()-this.lastUpdate; this.lastUpdate = e,
        this.render(t/d),
        this.animationFrame = requestAnimationFrame(()=>this.loop())}play() {
        this.loop()}pause() {
        this.animationFrame && (cancelAnimationFrame(this.animationFrame), this.animationFrame = void 0)}}r = new WeakMap,
    n = new WeakMap; let y = e=> {
      let[t,
        a] = (0, i.useState)(c(e.current)),
      r = (0, i.useCallback)(()=> {
        e.current && a(c(e.current))}, [e]); return(0, i.useEffect)(()=> {
        let {
          ResizeObserver: t
        } = window; if (e.current) {
          if (r(), "function" != typeof t)return window.addEventListener("resize", r),
          ()=>window.removeEventListener("resize", r); {
            let a = new t(r); return a.observe(e.current),
            ()=>a.disconnect()}}},
        [e,
          r]), t
    }, w = e=>(0,
      i.useMemo)(()=>({
        ...h, ...e || {}}),
      [e]), v = ({
        color: e = l.color,
        changeFrequency: t = l.changeFrequency,
        radius: a = l.radius,
        speed: r = l.speed,
        wind: n = l.wind,
        rotationSpeed: o = l.rotationSpeed,
        opacity: c = l.opacity,
        snowflakeCount: f = 150,
        images: u,
        style: h
      } = {})=> {
      let d = w(h), p = (0,
        i.useRef)(null), m = y(p), v = function(e) {
        let[t, a] = (0,
          i.useState)(e); return!function(e,
          t) {
          let a = (0,
            i.useRef)(t); s(t,
            a.current) || (a.current = t), (0,
            i.useEffect)(e,
            a.current)}(()=>a(e),
          [e]), t
      }({
          color: e,
          changeFrequency: t,
          radius: a,
          speed: r,
          wind: n,
          rotationSpeed: o,
          images: u,
          snowflakeCount: f,
          opacity: c
        }), b = (0,
        i.useRef)(v), k = (0,
        i.useRef)(); return(0,
        i.useEffect)(()=>(!k.current && p.current && (k.current = new g(p.current, b.current)), ()=> {
          var e; null == (e = k.current) || e.pause(), k.current = void 0
        }),
        []), (0,
        i.useEffect)(()=> {
          k.current && k.current.updateConfig(v)},
        [v]), i.createElement("canvas",
        {
          ref: p,
          height: m.height,
          width: m.width,
          style: d,
          "data-testid": "SnowfallCanvas"
        })}}, 21553: e=> {
    var t = "undefined" != typeof Element, a = "function" == typeof Map, r = "function" == typeof Set, n = "function" == typeof ArrayBuffer&&!!ArrayBuffer.isView; e.exports = function(e,
      i) {
      try {
        return function e(i,
          s) {
          if (i === s)return!0; if (i && s && "object" == typeof i && "object" == typeof s) {
            var o,
            c,
            f,
            l; if (i.constructor !== s.constructor)return!1; if (Array.isArray(i)) {
              if ((o = i.length) != s.length)return!1; for (c = o; 0 != c--;)if (!e(i[c], s[c]))return!1; return!0
            }if (a && i instanceof Map && s instanceof Map) {
              if (i.size !== s.size)return!1; for (l = i.entries(); !(c = l.next()).done;)if (!s.has(c.value[0]))return!1; for (l = i.entries(); !(c = l.next()).done;)if (!e(c.value[1], s.get(c.value[0])))return!1; return!0
            }if (r && i instanceof Set && s instanceof Set) {
              if (i.size !== s.size)return!1; for (l = i.entries(); !(c = l.next()).done;)if (!s.has(c.value[0]))return!1; return!0
            }if (n && ArrayBuffer.isView(i) && ArrayBuffer.isView(s)) {
              if ((o = i.length) != s.length)return!1; for (c = o; 0 != c--;)if (i[c] !== s[c])return!1; return!0
            }if (i.constructor === RegExp)return i.source === s.source && i.flags === s.flags; if (i.valueOf !== Object.prototype.valueOf && "function" == typeof i.valueOf && "function" == typeof s.valueOf)return i.valueOf() === s.valueOf(); if (i.toString !== Object.prototype.toString && "function" == typeof i.toString && "function" == typeof s.toString)return i.toString() === s.toString(); if ((o = (f = Object.keys(i)).length) !== Object.keys(s).length)return!1; for (c = o; 0 != c--;)if (!Object.prototype.hasOwnProperty.call(s, f[c]))return!1; if (t && i instanceof Element)return!1; for (c = o; 0 != c--;)if (("_owner" !== f[c] && "__v" !== f[c] && "__o" !== f[c]||!i.$$typeof)&&!e(i[f[c]], s[f[c]]))return!1; return!0
          }return i != i && s != s
        }(e, i)}catch(e) {
        if ((e.message || "").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),
        !1; throw e
      }}},
  31362: (e, t, a)=> {
    "use strict"; a.d(t, {
      A: ()=>r
    }); let r = (0, a(53876).A)("palette", [["path", {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z", key: "e79jfc"
      }], ["circle", {
        cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w"
      }], ["circle", {
        cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f"
      }], ["circle", {
        cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx"
      }], ["circle", {
        cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn"
      }]])},
  43799: e=> {
    e.exports = {
      style: {
        fontFamily: "'Orbitron', 'Orbitron Fallback'",
        fontStyle: "normal"
      },
      className: "__className_0a891c",
      variable: "__variable_0a891c"
    }},
  57410: (e, t, a)=> {
    "use strict"; a.d(t, {
      A: ()=>r
    }); let r = (0, a(53876).A)("settings", [["path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f"
      }], ["circle", {
        cx: "12", cy: "12", r: "3", key: "1v7zrd"
      }]])},
  77504: (e, t, a)=> {
    "use strict"; a.d(t, {
      Analytics: ()=>p
    }); var r = a(713),
    n = a(48355),
    i = a(30153),
    s = ()=> {
      window.va || (window.va = function() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)t[a] = arguments[a]; (window.vaq = window.vaq || []).push(t)})}; function o() {
      return"undefined" != typeof window
    }function c() {
      return"production"
    }function f() {
      return"development" === ((o()?window.vam: c()) || "production")}function l(e) {
      return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "(?=[/?#]|$)"))}function u(e) {
      return(0,
        r.useEffect)(()=> {
          var t; e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend))},
        [e.beforeSend]), (0,
        r.useEffect)(()=> {
          var t; !function() {
            var e; let t = arguments.length > 0 && void 0 !== arguments[0]?arguments[0]: {
              debug: !0
            }; if (!o())return; !function() {
              let e = arguments.length > 0 && void 0 !== arguments[0]?arguments[0]: "auto"; if ("auto" === e) {
                window.vam = c(); return
              }window.vam = e
            }(t.mode),
            s(),
            t.beforeSend && (null == (e = window.va) || e.call(window, "beforeSend", t.beforeSend)); let a = t.scriptSrc?t.scriptSrc: f()?"https://va.vercel-scripts.com/v1/script.debug.js": t.basePath?"".concat(t.basePath, "/insights/script.js"): "/_vercel/insights/script.js"; if (document.head.querySelector('script[src*="'.concat(a, '"]')))return; let r = document.createElement("script"); r.src = a,
            r.defer=!0,
            r.dataset.sdkn = "@vercel/analytics"+(t.framework?"/".concat(t.framework): ""),
            r.dataset.sdkv = "1.5.0",
            t.disableAutoTrack && (r.dataset.disableAutoTrack = "1"),
            t.endpoint?r.dataset.endpoint = t.endpoint: t.basePath && (r.dataset.endpoint = "".concat(t.basePath, "/insights")),
            t.dsn && (r.dataset.dsn = t.dsn),
            r.onerror = ()=> {
              let e = f()?"Please check if any ad blockers are enabled and try again.": "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information."; console.log("[Vercel Web Analytics] Failed to load script from ".concat(a, ". ").concat(e))},
            f()&&!1 === t.debug && (r.dataset.debug = "false"),
            document.head.appendChild(r)}({
              framework: e.framework || "react", basePath: null != (t = e.basePath)?t: function() {
                if (void 0 !== i && void 0 !== i.env)return i.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
              }(),
              ...void 0 !== e.route && {
                disableAutoTrack: !0
              },
              ...e
            })}, []), (0, r.useEffect)(()=> {
          e.route && e.path && function(e) {
            var t; let {
              route: a, path: r
            } = e; null == (t = window.va) || t.call(window,
              "pageview",
              {
                route: a,
                path: r
              })}({
              route: e.route,
              path: e.path
            })}, [e.route, e.path]), null
    }var h = ()=> {
      let e = (0, n.useParams)(), t = (0, n.useSearchParams)(), a = (0, n.usePathname)(); return e? {
        route: function(e, t) {
          if (!e||!t)return e; let a = e; try {
            let e = Object.entries(t); for (let[t, r]of e)if (!Array.isArray(r)) {
              let e = l(r); e.test(a) && (a = a.replace(e, "/[".concat(t, "]")))}for (let[t, r]of e)if (Array.isArray(r)) {
              let e = l(r.join("/")); e.test(a) && (a = a.replace(e, "/[...".concat(t, "]")))}return a
          }catch(t) {
            return e
          }}(a, Object.keys(e).length?e: Object.fromEntries(t.entries())),
        path: a
      }: {
        route: null,
        path: a
      }}; function d(e) {
      let {
        route: t,
        path: a
      } = h(); return r.createElement(u, {
          path: a, route: t, ...e, basePath: function() {
            if (void 0 !== i && void 0 !== i.env)return i.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
          }(),
          framework: "next"
        })}function p(e) {
      return r.createElement(r.Suspense,
        {
          fallback: null
        },
        r.createElement(d, {
          ...e
        }))}}, 91529: (e,
    t,
    a)=> {
    "use strict"; a.d(t,
      {
        A: ()=>r
      }); let r = (0,
      a(53876).A)("cookie",
      [["path",
        {
          d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
          key: "laymnq"
        }],
        ["path",
          {
            d: "M8.5 8.5v.01",
            key: "ue8clq"
          }],
        ["path",
          {
            d: "M16 15.5v.01",
            key: "14dtrp"
          }],
        ["path",
          {
            d: "M12 12v.01",
            key: "u5ubse"
          }],
        ["path",
          {
            d: "M11 17v.01",
            key: "1hyl5a"
          }],
        ["path",
          {
            d: "M7 14v.01",
            key: "uct60s"
          }]])}}]);