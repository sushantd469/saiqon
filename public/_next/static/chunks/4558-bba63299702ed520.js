"use strict"; (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4558], {
  34558: (e, t, a)=> {
    a.r(t), a.d(t, {
      default: ()=>f
      }); var i = a(34941), s = a(67618), r = a(63850), l = a(713), n = a(51874), d = a(57886), o = a(76906), c = a(46007), h = a(75395), m = a(7951), x = a(41645); let p = JSON.parse('{"G":{"kR":[{"id":1,"icon":"Zap","title":"Main Dashboard","description":"Easily view your server status, player count, resource usage, and quick controls—all in one place for efficient management.","imageDark":"/showcase/dark/d-dash.png","imageLight":"/showcase/light/l-dash.png"},{"id":2,"icon":"Shield","title":"Server Dashboard","description":"Access detailed settings for your Minecraft server including world selection, server type, RAM allocation, and live console access.","imageDark":"/showcase/dark/d-server.png","imageLight":"/showcase/light/l-server.png"},{"id":3,"icon":"Cpu","title":"One-Click Plugin Installer","description":"Install Minecraft plugins like EssentialsX, LuckPerms, or WorldEdit instantly—no uploads or config needed.","imageDark":"/showcase/dark/d-plugins.png","imageLight":"/showcase/light/l-plugins.png"},{"id":4,"icon":"HeartPulse","title":"Version Changer","description":"Easily switch between different Minecraft server versions or software types like Paper, Forge, Fabric, and more with just a few clicks.","imageDark":"/showcase/dark/d-feat.png","imageLight":"/showcase/light/l-feat.png"}]}}'); var g = a(52490), u = a(37149); let b = {
      Zap: d.A, Shield: o.A, Cpu: c.A, Archive: h.A, Plug: m.A, HeartPulse: x.A
    }; function f() {
      let {
        t: e
      } = (0, g.o)(), [t, a] = (0, l.useState)(0), [d, o] = (0, l.useState)(0), c = p.G.kR.map(e=>({
          id: e.id, icon: b[e.icon], title: e.title, description: e.description, imageDark: e.imageDark, imageLight: e.imageLight
        })); (0, l.useEffect)(()=> {
          let e = setInterval(()=> {
            o(e=> {
              let t = e+2; return t >= 100?100: t
            })}, 100); return()=>clearInterval(e)}, []), (0, l.useEffect)(()=> {
          d >= 100 && (a(e=>(e+1)%c.length), o(0))}, [d, c.length]); let h = e=> {
        a(e), o(0)}; return(0, i.jsxs)("div", {
          className: "bg-gray-50 dark:bg-[#0a0b0f] relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [(0, i.jsx)("div", {
            className: "absolute top-20 -left-32 w-64 h-64 icon-text-primary rounded-full blur-3xl"
          }), (0, i.jsx)("div", {
            className: "absolute bottom-20 -right-32 w-72 h-72 icon-text-primary  rounded-full blur-3xl"
          }), (0, i.jsxs)("div", {
            className: "relative z-10 max-w-7xl mx-auto", children: [(0, i.jsxs)(s.P.div, {
              initial: {
                opacity: 0, y: -20
              }, animate: {
                opacity: 1, y: 0
              }, transition: {
                duration: .8
              }, className: "text-left mb-8", children: [(0, i.jsx)("div", {
                  className: "inline-flex items-center gap-2 card-primary px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-4 border border-secondary", children: (0, i.jsx)("span", {
                    className: "icon-text-primary orbitron-font text-sm", children: e("panelShowcase.badge")})}), (0, i.jsxs)("h2", {
                  className: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 orbitron-font sm:mb-4", children: [e("panelShowcase.title").split(" ").slice(0, -1).join(" "), " ", (0, i.jsx)("span", {
                    className: "icon-text-primary", children: e("panelShowcase.title").split(" ").slice(-1)[0]})]}), (0, i.jsx)("p", {
                  className: "text-sm  text-gray-600 dark:text-gray-300", children: e("panelShowcase.subtitle")})]}), (0, i.jsxs)("div", {
              className: "grid lg:grid-cols-2 gap-4 lg:gap-4 lg:items-stretch", children: [(0, i.jsx)(s.P.div, {
                initial: {
                  opacity: 0, x: -50
                }, animate: {
                  opacity: 1, x: 0
                }, transition: {
                  duration: .8
                }, className: "flex flex-col h-full", children: (0, i.jsx)("div", {
                    className: "flex flex-col flex-1 gap-4", children: c.map((e, a)=> {
                      let r = e.icon, l = a === t; return(0, i.jsxs)(s.P.div, {
                        initial: {
                          opacity: 0, y: 20
                        }, animate: {
                          opacity: 1, y: 0
                        }, transition: {
                          duration: .6, delay: .1*a
                        }, onClick: ()=>h(a), className: "relative cursor-pointer transition-all duration-300 backdrop-blur-sm border ".concat(l?"hover-gradient dark:hover-gradient border-secondary dark:border-secondary": " hover:border-secondary dark:hover:border-secondary border-primary bg-transparent ", " rounded-md flex-1"), children: [(0, i.jsxs)("div", {
                            className: "flex justify-between items-start", children: [(0, i.jsxs)("div", {
                              className: "flex-1 p-4 sm:p-6", children: [(0, i.jsx)("h3", {
                                className: "text-base sm:text-lg font-semibold mb-1 sm:mb-2 ".concat("text-gray-900 dark:text-white"), children: e.title
                              }), (0, i.jsx)("p", {
                                className: "text-xs sm:text-sm ".concat("text-gray-600 dark:text-gray-400"), children: e.description
                              })]}), (0, i.jsx)("div", {
                              className: "bg-white dark:bg-white/3 w-10 h-10 sm:w-12 sm:h-12 border-l border-b border-gray-200 dark:border-white/3 rounded-tr-md flex items-center justify-center flex-shrink-0", children: (0, i.jsx)(r, {
                                className: "w-5 h-5 sm:w-6 sm:h-6 icon-text-primary"
                              })})]}), l && (0, i.jsx)("div", {
                            className: "absolute bottom-0 left-0 right-0 h-1 ", children: (0, i.jsx)(s.P.div, {
                              className: "h-full rounded-full button-primary", initial: {
                                width: "0%"
                              }, animate: {
                                width: "".concat(d, "%")}, transition: {
                                duration: .1, ease: "linear"
                              }})}), u.christmasTheme.enabled && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(n.default, {
                              src: "/christmas/button-deco-up.png", alt: "Christmas decoration", width: 28, height: 28, className: "absolute -top-2 -right-2 pointer-events-none"
                            }), (0, i.jsx)(n.default, {
                              src: "/christmas/button-deco-down.png", alt: "Christmas decoration", width: 28, height: 28, className: "absolute -bottom-2 -left-2 pointer-events-none"
                            })]})]}, e.id)})})}), (0, i.jsx)(s.P.div, {
                initial: {
                  opacity: 0, x: 50
                }, animate: {
                  opacity: 1, x: 0
                }, transition: {
                  duration: .8, delay: .4
                }, className: "relative flex h-full", children: (0, i.jsxs)("div", {
                    className: "relative w-full bg-white dark:bg-white/2 backdrop-blur-sm border border-gray-200 dark:border-white/5 rounded-md overflow-hidden flex flex-col h-full", children: [(0, i.jsx)("div", {
                      className: "flex-1   pb-0", children: (0, i.jsx)("div", {
                        className: "relative w-full h-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden", children: (0, i.jsx)(r.N, {
                          mode: "wait", children: (0, i.jsxs)(s.P.div, {
                            initial: {
                              opacity: 0, scale: 1.1
                            }, animate: {
                              opacity: 1, scale: 1
                            }, exit: {
                              opacity: 0, scale: .9
                            }, transition: {
                              duration: .5
                            }, className: "absolute inset-0", children: [(0, i.jsx)("div", {
                                className: "hidden dark:block w-full h-full", children: (0, i.jsx)(n.default, {
                                  src: c[t].imageDark, alt: c[t].title, fill: !0, className: "object-cover object-top", quality: 85, priority: 0 === t
                                })}), (0, i.jsx)("div", {
                                className: "block dark:hidden w-full h-full", children: (0, i.jsx)(n.default, {
                                  src: c[t].imageLight, alt: c[t].title, fill: !0, sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw", className: "object-cover object-top", quality: 85, priority: 0 === t
                                })})]}, t)})})}), (0, i.jsx)("div", {
                      className: "p-3 sm:p-6", children: (0, i.jsxs)(s.P.div, {
                        initial: {
                          opacity: 0, y: 20
                        }, animate: {
                          opacity: 1, y: 0
                        }, transition: {
                          duration: .5, delay: .2
                        }, children: [(0, i.jsx)("h3", {
                            className: "text-gray-900 dark:text-white text-lg sm:text-xl font-semibold mb-2", children: c[t].title
                          }), (0, i.jsx)("p", {
                            className: "text-gray-600 dark:text-gray-400 text-xs sm:text-sm", children: c[t].description
                          })]}, t)})]})})]})]})]})}}}]);