(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2044, 4410, 8516], {
  2239: (e, t, a)=> {
    "use strict"; a.d(t, {
      default: ()=>y
      }); var r = a(34941), s = a(67618), i = a(89409), l = a(46007), n = a(48949), d = a(31871), o = a(64938), c = a(41645), x = a(57886), m = a(90333), h = a(713), p = a(51874); let u = JSON.parse('{"planTypes":[{"id":"budget","name":"Budget","displayName":"Premium Plans","image":"/icons/discord.svg"}],"plans":{"budget":[{"id":"budget-lite","name":"Lite Plan","badge":"Popular","cpu":"100% CPU","cpuDetail":"Shared CPU","ram":"512 MB","ramDetail":"DDR4 RAM","storage":"2 GB","storageDetail":"NVMe Storage","bandwidth":"Unlimited","bandwidthDetail":"Bandwidth","uptime":"24/7 Uptime","price":"35","period":"/mo","orderLink":"https://billing.endercloud.in/products/bot-hosting/lite-plan/checkout"},{"id":"budget-plus","name":"Plus Plan","cpu":"200% CPU","cpuDetail":"Shared CPU","ram":"1 GB","ramDetail":"DDR4 RAM","storage":"5 GB","storageDetail":"NVMe Storage","bandwidth":"Unlimited","bandwidthDetail":"Bandwidth","uptime":"24/7 Uptime","price":"70","period":"/mo","orderLink":"https://billing.endercloud.in/products/bot-hosting/plus-plan/checkout"},{"id":"budget-pro","name":"Pro Plan","cpu":"250% CPU","cpuDetail":"Shared CPU","ram":"2 GB","ramDetail":"DDR4 RAM","storage":"15 GB","storageDetail":"NVMe Storage","bandwidth":"Unlimited","bandwidthDetail":"Bandwidth","uptime":"24/7 Uptime","price":"140","period":"/mo","orderLink":"https://billing.endercloud.in/products/bot-hosting/pro-plan/checkout"},{"id":"budget-ultra","name":"Ultra Plan","cpu":"300% CPU","cpuDetail":"Shared CPU","ram":"4 GB","ramDetail":"DDR4 RAM","storage":"20 GB","storageDetail":"NVMe Storage","bandwidth":"Unlimited","bandwidthDetail":"Bandwidth","uptime":"24/7 Uptime","price":"280","period":"/mo","orderLink":"https://billing.endercloud.in/products/bot-hosting/ultra-plan/checkout"},{"id":"budget-elite","name":"Elite Plan","cpu":"350% CPU","cpuDetail":"Shared CPU","ram":"6 GB","ramDetail":"DDR4 RAM","storage":"30 GB","storageDetail":"NVMe Storage","bandwidth":"Unlimited","bandwidthDetail":"Bandwidth","uptime":"24/7 Uptime","price":"419","period":"/mo","orderLink":"https://billing.endercloud.in/products/bot-hosting/elite-plan/checkout"},{"id":"budget-lava","name":"LavaLink: V4","cpu":"100% CPU","cpuDetail":"Shared CPU","ram":"2 GB","ramDetail":"DDR4 RAM","storage":"5 GB","storageDetail":"NVMe Storage","bandwidth":"Unlimited","bandwidthDetail":"Bandwidth","uptime":"24/7 Uptime","price":"90","period":"/mo","orderLink":"https://billing.endercloud.in/products/bot-hosting/lavalink-v4/checkout"}]}}'); var g = a(83306), b = a(52490); function y() {
      let {
        t: e
      } = (0, b.o)(), {
        selectedCurrency: t, setSelectedCurrency: a, convertPrice: y
      } = (0, g.H)(), [f, v] = (0, h.useState)("monthly"), j = u.plans.budget || [], w = e=> {
        let t = e, a = "/mo"; return"monthly" === f?(t = e, a = "/mo"): "quarterly" === f?(t = 3*e, a = "/3mo"): "semiannually" === f?(t = 6*e, a = "/6mo"): "annually" === f && (t = 12*e, a = "/yr"), {
          price: Math.floor(t).toString().padStart(2, "0"), unit: a
        }}; return(0, r.jsxs)("div", {
          className: "bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [(0, r.jsxs)("div", {
            className: "absolute inset-0", children: [(0, r.jsx)("div", {
              className: "absolute inset-0 bg-cover bg-center", style: {
                backgroundImage: "url('/banners/discord.png')"
              }}), (0, r.jsx)("div", {
              className: "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/40 to-transparent dark:from-[#0a0b0f] dark:via-[#0a0b0f]/30 dark:to-transparent"
            }), (0, r.jsx)("div", {
              className: "absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-gray-50/40 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/45 dark:to-[#0a0b0f]/60"
            })]}), (0, r.jsxs)("div", {
            className: "relative z-10 mt-16 max-w-7xl mx-auto", children: [(0, r.jsx)(s.P.div, {
              initial: {
                opacity: 0, y: 20
              }, animate: {
                opacity: 1, y: 0
              }, transition: {
                duration: .6
              }, className: "text-left mb-8", children: (0, r.jsxs)("div", {
                  className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4", children: [(0, r.jsxs)("div", {
                    className: "flex-1", children: [(0, r.jsx)("div", {
                      className: "inline-flex items-left gap-2 bg-blue-100 dark:bg-blue-600/20 px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-4 border border-blue-600/20 dark:border-blue-400/20", children: (0, r.jsx)("span", {
                        className: "text-blue-600 dark:text-blue-400 text-sm", children: e("discord.badge")})}), (0, r.jsxs)("h2", {
                      className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font tracking-tight capitalize flex items-center gap-3", children: [(0, r.jsx)(p.default, {
                        src: "/icons/discord.svg", alt: "Discord", width: 40, height: 40, className: "w-[1.1em] h-[1.1em] object-contain mb-1"
                      }), (0, r.jsxs)("span", {
                        children: [e("discord.title").split(" ").slice(0, -1).join(" "), " ", (0, r.jsx)("span", {
                          className: "text-blue-600 dark:text-blue-400 relative", children: e("discord.title").split(" ").slice(-1)[0]})]})]}), (0, r.jsx)("p", {
                      className: "text-md text-gray-600 max-w-3xl dark:text-gray-300", children: e("discord.description")})]}), (0, r.jsx)(g.J, {
                    selectedCurrency: t, onCurrencyChange: a, className: "w-full sm:w-64 mt-4 sm:mt-0"
                  })]})}), (0, r.jsx)(s.P.div, {
              initial: {
                opacity: 0, y: 20
              }, animate: {
                opacity: 1, y: 0
              }, transition: {
                duration: .6, delay: .2
              }, className: "mb-4", children: (0, r.jsxs)("div", {
                  className: "flex flex-col items-left", children: [(0, r.jsx)("h3", {
                    className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3", children: e("billingCycle.title")}), (0, r.jsx)("div", {
                    className: "flex flex-wrap gap-2", children: ["monthly", "quarterly", "semiannually", "annually"].map(t=>(0, r.jsxs)("button", {
                      onClick: ()=>v(t), className: "flex items-center gap-3 px-6 backdrop-blur-sm py-2 h-12 rounded-tl-2xl rounded-br-2xl font-medium transition-all duration-300 ".concat(f === t?"bg-blue-600 dark:bg-blue-500/40 dark:text-blue-400 text-white shadow-lg": "bg-gray-200 dark:bg-gray-800/20 dark:border-blue-600/40 border border-blue-600/20 text-gray-700 dark:text-blue-400 hover:bg-blue-600/10"), children: [(0, r.jsx)(i.A, {
                        className: "w-5 h-5"
                      }), (0, r.jsx)("span", {
                        className: "text-sm font-semibold uppercase tracking-wider", children: e("billingCycle.".concat(t)) || t
                      })]}, t))})]})}), (0, r.jsx)("h3", {
              className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 mt-8", children: e("discord.step2")}), (0, r.jsx)(s.P.div, {
              initial: {
                opacity: 0, y: 20
              }, animate: {
                opacity: 1, y: 0
              }, transition: {
                duration: .6, delay: .4
              }, className: "mt-4", children: (0, r.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [j.map((t, a)=> {
                    let {
                      price: i, unit: x
                    } = w(Number(t.price)); return(0, r.jsxs)(s.P.div, {
                        initial: {
                          opacity: 0, y: 20
                        }, animate: {
                          opacity: 1, y: 0
                        }, transition: {
                          duration: .5, delay: .6+.1*a
                        }, className: "relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-md overflow-hidden border border-blue-600/20 dark:border-blue-400/20 hover:border-blue-400 dark:hover:border-blue-400/50 hover:bg-[radial-gradient(50%_50%_at_50%_100%,_rgba(37,99,235,0.15)_0%,_transparent_100%)] dark:hover:bg-[radial-gradient(50%_50%_at_50%_100%,_rgba(37,99,235,0.25)_0%,_transparent_100%)] transition-all duration-300", children: [t.badge && (0, r.jsx)("div", {
                            className: "absolute top-4 right-4", children: (0, r.jsx)("span", {
                              className: "px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-tl-2xl rounded-br-2xl", children: t.badge
                            })}), (0, r.jsxs)("div", {
                            className: "p-6", children: [(0, r.jsxs)("div", {
                              className: "flex items-center gap-4 mb-6", children: [(0, r.jsx)("div", {
                                className: " flex items-center justify-center", children: (0, r.jsx)(p.default, {
                                  src: "/icons/discord2.webp", alt: "Discord Bot", width: 64, height: 64, className: "object-contain bg-transparent"
                                })}), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                  className: "text-xl font-bold text-gray-900 dark:text-white", children: t.name
                                }), (0, r.jsx)("p", {
                                  className: "text-sm text-gray-500 dark:text-gray-400", children: "Discord Bot"
                                })]})]}), (0, r.jsxs)("div", {
                              className: "grid grid-cols-2 gap-4 mb-6", children: [(0, r.jsxs)("div", {
                                className: "flex flex-col gap-1", children: [(0, r.jsxs)("div", {
                                  className: "flex items-center gap-2", children: [(0, r.jsx)(l.A, {
                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                                  }), (0, r.jsx)("span", {
                                    className: "text-sm text-gray-600 dark:text-gray-400", children: t.cpuDetail
                                  })]}), (0, r.jsx)("span", {
                                  className: "text-lg font-medium text-gray-900 dark:text-white", children: t.cpu
                                })]}), (0, r.jsxs)("div", {
                                className: "flex flex-col gap-1", children: [(0, r.jsxs)("div", {
                                  className: "flex items-center gap-2", children: [(0, r.jsx)(n.A, {
                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                                  }), (0, r.jsx)("span", {
                                    className: "text-sm text-gray-600 dark:text-gray-400", children: t.ramDetail
                                  })]}), (0, r.jsx)("span", {
                                  className: "text-lg font-medium text-gray-900 dark:text-white", children: t.ram
                                })]}), (0, r.jsxs)("div", {
                                className: "flex flex-col gap-1", children: [(0, r.jsxs)("div", {
                                  className: "flex items-center gap-2", children: [(0, r.jsx)(d.A, {
                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                                  }), (0, r.jsx)("span", {
                                    className: "text-sm text-gray-600 dark:text-gray-400", children: t.storageDetail
                                  })]}), (0, r.jsx)("span", {
                                  className: "text-lg font-medium text-gray-900 dark:text-white", children: t.storage
                                })]}), (0, r.jsxs)("div", {
                                className: "flex flex-col gap-1", children: [(0, r.jsxs)("div", {
                                  className: "flex items-center gap-2", children: [(0, r.jsx)(o.A, {
                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                                  }), (0, r.jsx)("span", {
                                    className: "text-sm text-gray-600 dark:text-gray-400", children: t.bandwidthDetail
                                  })]}), (0, r.jsx)("span", {
                                  className: "text-lg font-medium text-gray-900 dark:text-white", children: t.bandwidth
                                })]})]}), (0, r.jsxs)("div", {
                              className: "flex items-center gap-2 mb-6", children: [(0, r.jsx)(c.A, {
                                className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                              }), (0, r.jsx)("span", {
                                className: "text-sm text-gray-600 dark:text-gray-400", children: t.uptime
                              })]}), (0, r.jsxs)("div", {
                              className: "mt-6", children: [(0, r.jsxs)("div", {
                                className: "flex items-baseline justify-center mb-4", children: [(0, r.jsx)("span", {
                                  className: "text-3xl font-bold orbitron-font text-gray-900 dark:text-white", children: y("$".concat(i))}), (0, r.jsx)("span", {
                                  className: "ml-1 text-gray-500 dark:text-gray-400", children: x
                                })]}), (0, r.jsxs)("a", {
                                href: t.orderLink, target: "_blank", rel: "noopener noreferrer", className: "orbitron-font w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600/20 text-white dark:text-blue-400 px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2", children: [e("common.orderNow"), (0, r.jsx)("svg", {
                                  className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, r.jsx)("path", {
                                    strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7"
                                  })})]})]})]})]}, t.id)}), (0, r.jsxs)(s.P.div, {
                    initial: {
                      opacity: 0, y: 20
                    }, animate: {
                      opacity: 1, y: 0
                    }, transition: {
                      duration: .5, delay: .6+.1*j.length
                    }, className: "relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-md overflow-hidden border-2 border-dashed border-blue-600/30 flex flex-col items-center justify-center p-8 text-center group hover:border-blue-600 transition-all duration-300", children: [(0, r.jsx)("div", {
                        className: "mb-6 p-4 bg-blue-600/10 rounded-full group-hover:scale-110 transition-transform duration-300", children: (0, r.jsx)(x.A, {
                          className: "w-10 h-10 text-blue-600"
                        })}), (0, r.jsx)("h3", {
                        className: "text-xl font-bold text-gray-900 dark:text-white mb-2 orbitron-font", children: "Not enough plans for your bot?"
                      }), (0, r.jsx)("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400 mb-8", children: "have a look on our VPS Hosting Plans...."
                      }), (0, r.jsxs)("a", {
                        href: "/vps", className: "orbitron-font w-full bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2", children: ["Explore VPS Plans", (0, r.jsx)(m.A, {
                          className: "w-4 h-4"
                        })]})]})]})})]})]})}}, 7951: (e, t, a)=> {
      "use strict"; a.d(t, {
        A: ()=>r
      }); let r = (0, a(53876).A)("plug", [["path", {
          d: "M12 22v-5", key: "1ega77"
        }], ["path", {
          d: "M9 8V2", key: "14iosj"
        }], ["path", {
          d: "M15 8V2", key: "18g5xt"
        }], ["path", {
          d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l"
        }]])}, 24145: (e, t, a)=> {
      "use strict"; a.d(t, {
        A: ()=>r
      }); let r = (0, a(53876).A)("phone", [["path", {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key: "9njp5v"
        }]])}, 24909: (e, t, a)=> {
      "use strict"; a.d(t, {
        default: ()=>x
        }); var r = a(34941), s = a(67618), i = a(52490); let l = (0, a(53876).A)("ticket", [["path", {
            d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "qn84l0"
          }], ["path", {
            d: "M13 5v2", key: "dyzc3o"
          }], ["path", {
            d: "M13 17v2", key: "1ont0d"
          }], ["path", {
            d: "M13 11v2", key: "1wjjxi"
          }]]); var n = a(45189), d = a(90333), o = a(51874), c = a(713); function x() {
        let {
          t: e
        } = (0, i.o)(), [t, a] = (0, c.useState)(1), [x, m] = (0, c.useState)(!1); return(0, r.jsx)("section", {
            className: "bg-gray-50 dark:bg-[#0a0b0f] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: (0, r.jsx)("div", {
              className: "max-w-7xl mx-auto relative", children: (0, r.jsxs)("div", {
                className: "grid lg:grid-cols-[1fr_auto] gap-12 items-center", children: [(0, r.jsxs)(s.P.div, {
                  initial: {
                    opacity: 0, x: -30
                  }, whileInView: {
                    opacity: 1, x: 0
                  }, viewport: {
                    once: !0
                  }, transition: {
                    duration: .8
                  }, className: "order-1 space-y-8", children: [(0, r.jsxs)("div", {
                      className: "space-y-6", children: [(0, r.jsx)("div", {
                        className: "inline-flex items-center card-primary px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-4", children: (0, r.jsx)("span", {
                          className: "icon-text-primary text-sm font-medium", children: e("discordConvince.badge")})}), (0, r.jsxs)("h2", {
                        className: "text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white orbitron-font leading-tight uppercase tracking-widest", children: [e("discordConvince.title_start"), " ", (0, r.jsx)("span", {
                          className: "icon-text-primary", children: e("discordConvince.title_highlight")})]}), (0, r.jsx)("p", {
                        className: "text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl", children: e("discordConvince.description")})]}), (0, r.jsxs)("div", {
                      className: "grid sm:grid-cols-2 gap-8 pt-4", children: [(0, r.jsxs)("div", {
                        className: "flex gap-4 items-center group", children: [(0, r.jsx)("div", {
                          className: "flex-shrink-0 w-12 h-12 bg-white/5 border border-secondary rounded-2xl flex items-center justify-center group-hover:border-blue-500/40 transition-all", children: (0, r.jsx)(l, {
                            size: 22, className: "text-blue-500"
                          })}), (0, r.jsxs)("div", {
                          className: "space-y-1", children: [(0, r.jsx)("h4", {
                            className: "font-bold text-gray-900 dark:text-white orbitron-font tracking-wider text-xs uppercase", children: e("discordConvince.feature1_title")}), (0, r.jsx)("p", {
                            className: "text-[11px] text-gray-500 leading-tight", children: e("discordConvince.feature1_desc")})]})]}), (0, r.jsxs)("div", {
                        className: "flex gap-4 items-center group", children: [(0, r.jsx)("div", {
                          className: "flex-shrink-0 w-12 h-12 bg-white/5 border border-secondary rounded-2xl flex items-center justify-center group-hover:border-blue-500/40 transition-all", children: (0, r.jsx)(n.A, {
                            size: 22, className: "text-blue-500"
                          })}), (0, r.jsxs)("div", {
                          className: "space-y-1", children: [(0, r.jsx)("h4", {
                            className: "font-bold text-gray-900 dark:text-white orbitron-font tracking-wider text-xs uppercase", children: e("discordConvince.feature2_title")}), (0, r.jsx)("p", {
                            className: "text-[11px] text-gray-500 leading-tight", children: e("discordConvince.feature2_desc")})]})]})]}), (0, r.jsx)("div", {
                      className: "pt-8", children: (0, r.jsxs)("a", {
                        href: "https://discord.com/invite/7Ku7HUsd7Z", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] active:scale-95 orbitron-font tracking-widest uppercase text-xs", children: [e("discordConvince.button"), (0, r.jsx)(d.A, {
                          size: 18
                        })]})})]}), (0, r.jsxs)("div", {
                  className: "flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12 order-2", children: [(0, r.jsx)("div", {
                    className: "relative group", children: (0, r.jsx)(s.P.div, {
                      className: "cursor-pointer select-none active:scale-95 transition-transform relative z-20", onClick: ()=> {
                        x || t >= 6 || (m(!0), a(e=>e+1), setTimeout(()=> {
                          m(!1)}, 600))}, variants: {
                        idle: {
                          y: [0, -8, 0], transition: {
                            duration: 4, repeat: 1/0, ease: "easeInOut"
                          }}, hit: {
                          scale: [1, .9, 1.1, 1], rotate: [0, -10, 10, -10, 0], transition: {
                            duration: .5
                          }}, broken: {
                          rotate: -15, y: 5, transition: {
                            type: "spring", stiffness: 100
                          }}}, animate: 6 === t?"broken": x?"hit": "idle", whileHover: {
                        scale: 1.05
                      }, children: (0, r.jsxs)("div", {
                          className: "flex flex-col items-center", children: [(0, r.jsx)("div", {
                            className: "relative w-32 h-24 sm:w-40 sm:h-32 mb-[-12px] z-20", children: (0, r.jsx)(o.default, {
                              src: "/robot/face".concat(t > 5?5: t, ".png"), alt: "Robot Face ".concat(t), fill: !0, className: "object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]", priority: !0
                            })}), (0, r.jsx)("div", {
                            className: "relative w-24 h-24 sm:w-32 sm:h-32 z-10", children: (0, r.jsx)(o.default, {
                              src: "/robot/body.png", alt: "Robot Body", fill: !0, className: "object-contain", priority: !0
                            })})]})})}), (0, r.jsxs)(s.P.div, {
                    initial: {
                      opacity: 0, x: 30
                    }, whileInView: {
                      opacity: 1, x: 0
                    }, viewport: {
                      once: !0
                    }, transition: {
                      duration: .8
                    }, className: "hidden lg:block relative group p-1.5 rounded-[2.5rem] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent border border-white/5 backdrop-blur-xl shadow-2xl", children: [(0, r.jsx)("iframe", {
                        src: "https://discord.com/widget?id=1132331153920114749&theme=dark", width: "350", height: "500", frameBorder: "0", sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts", className: "rounded-[2.2rem] shadow-2xl relative z-10"
                      }), (0, r.jsx)("div", {
                        className: "absolute -inset-10 bg-blue-600/5 blur-[80px] rounded-full -z-10 group-hover:bg-blue-600/10 transition-colors duration-500"
                      })]})]})]})})})}}, 27897: (e, t, a)=> {
        "use strict"; a.d(t, {
          default: ()=>b
          }); var r = a(34941), s = a(35810), i = a(67618), l = a(713), n = a(51874), d = a(46007), o = a(57886), c = a(76906), x = a(41645), m = a(57410), h = a(29200), p = a(5492), u = a(52490), g = a(37149); function b() {
          let {
            t: e
          } = (0, u.o)(), t = [{
              icon: d.A, title: e("features-discord.highPerformance"), description: e("features-discord.highPerformanceDesc")}, {
              icon: o.A, title: e("features-discord.lowLatency"), description: e("features-discord.lowLatencyDesc")}, {
              icon: c.A, title: e("features-discord.advancedSecurity"), description: e("features-discord.advancedSecurityDesc")}, {
              icon: x.A, title: e("features-discord.autoRecovery"), description: e("features-discord.autoRecoveryDesc")}, {
              icon: m.A, title: e("features-discord.fullControl"), description: e("features-discord.fullControlDesc")}, {
              icon: h.A, title: e("features-discord.resourceScaling"), description: e("features-discord.resourceScalingDesc")}, {
              icon: p.A, title: e("features-discord.globalNetwork"), description: e("features-discord.globalNetworkDesc")}], a = e=> {
            let {
              feature: t, index: a
            } = e, n = (0, l.useRef)(null), d = (0, s.W)(n, {
                once: !0, margin: "-100px"
              }), o = t.icon; return(0, r.jsx)(i.P.div, {
                ref: n, initial: {
                  opacity: 0, y: 50
                }, animate: d? {
                  opacity: 1, y: 0
                }: {
                  opacity: 0, y: 50
                }, transition: {
                  duration: .6, delay: .2*a
                }, className: "bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-primary rounded-md hover:border-secondary hover:hover-gradient group transition-all duration-300 relative", children: (0, r.jsxs)("div", {
                    className: "flex justify-between items-start", children: [(0, r.jsxs)("div", {
                      className: "flex-1 p-4 sm:p-6", children: [(0, r.jsx)("h3", {
                        className: "text-base sm:text-lg font-semibold orbitron-font text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-icon-text-primary transition-colors", children: t.title
                      }), (0, r.jsx)("p", {
                        className: "text-gray-600 dark:text-gray-400 text-xs sm:text-sm", children: t.description
                      })]}), (0, r.jsx)("div", {
                      className: "w-10 h-10 sm:w-12 sm:h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center flex-shrink-0", children: (0, r.jsx)(o, {
                        className: "w-5 h-5 sm:w-6 sm:h-6 icon-primary"
                      })})]})}, t.title)}; return(0, r.jsxs)("div", {
              className: "bg-gray-50 dark:bg-[#0a0b0f] relative py-12 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [(0, r.jsx)("div", {
                className: "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/90 to-gray-50 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/90 dark:to-[#0a0b0f]"
              }), (0, r.jsx)("div", {
                className: "absolute top-20 -left-32 w-64 h-64 blob-primary rounded-full blur-3xl"
              }), (0, r.jsx)("div", {
                className: "absolute top-40 -right-32 w-72 h-72 blob-primary rounded-full blur-3xl"
              }), (0, r.jsx)("div", {
                className: "absolute bottom-32 -right-24 w-56 h-56 blob-secondary rounded-full blur-3xl"
              }), (0, r.jsxs)("div", {
                className: "relative pt-20  z-10 max-w-7xl mx-auto", children: [(0, r.jsxs)(i.P.div, {
                  initial: {
                    opacity: 0, y: 20
                  }, animate: {
                    opacity: 1, y: 0
                  }, transition: {
                    duration: .8
                  }, className: "text-left mb-16", children: [(0, r.jsx)("div", {
                      className: "inline-flex items-center gap-2 card-primary px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-4", children: (0, r.jsx)("span", {
                        className: "icon-text-primary text-sm", children: e("features-discord.badge")})}), (0, r.jsxs)("h2", {
                      className: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 orbitron-font", children: [e("features-discord.title").split(" ").slice(0, -1).join(" "), " ", (0, r.jsx)("span", {
                        className: "icon-text-primary", children: e("features-discord.title").split(" ").slice(-1)[0]})]}), (0, r.jsx)("p", {
                      className: "text-sm text-gray-600 dark:text-gray-300", children: e("features-discord.subtitle")})]}), (0, r.jsxs)("div", {
                  className: "flex flex-col gap-3 sm:gap-4", children: [(0, r.jsxs)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4", children: [(0, r.jsx)(a, {
                      feature: t[0], index: 0
                    }), (0, r.jsx)(a, {
                      feature: t[1], index: 1
                    }), (0, r.jsx)(e=> {
                      let {
                        feature: t, index: a
                      } = e, d = (0, l.useRef)(null), o = (0, s.W)(d, {
                          once: !0, margin: "-100px"
                        }), c = t.icon; return(0, r.jsxs)(i.P.div, {
                          ref: d, initial: {
                            opacity: 0, y: 50
                          }, animate: o? {
                            opacity: 1, y: 0
                          }: {
                            opacity: 0, y: 50
                          }, transition: {
                            duration: .6, delay: .2*a
                          }, className: "hover-gradient backdrop-blur-sm border border-secondary rounded-md hover:border-secondary group transition-all duration-300 relative col-span-1 md:col-span-2", children: [(0, r.jsxs)("div", {
                              className: "flex justify-between items-start", children: [(0, r.jsxs)("div", {
                                className: "flex-1 p-4 sm:p-6", children: [(0, r.jsx)("h3", {
                                  className: "text-base sm:text-lg font-semibold orbitron-font text-icon-primary mb-1 sm:mb-2 group-hover:text-icon-text-primary transition-colors", children: t.title
                                }), (0, r.jsx)("p", {
                                  className: "text-gray-600 dark:text-gray-400 text-xs sm:text-sm", children: t.description
                                })]}), (0, r.jsx)("div", {
                                className: "w-10 h-10 sm:w-12 sm:h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center flex-shrink-0", children: (0, r.jsx)(c, {
                                  className: "w-5 h-5 sm:w-6 sm:h-6 icon-primary"
                                })})]}), g.christmasTheme.enabled && (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)(n.default, {
                                src: "/christmas/leaf-up.png", alt: "Christmas decoration", width: 80, height: 80, className: "absolute -top-6 -left-6 pointer-events-none"
                              }), (0, r.jsx)(n.default, {
                                src: "/christmas/leaf-down.png", alt: "Christmas decoration", width: 80, height: 80, className: "absolute -bottom-6 -right-6 pointer-events-none"
                              })]})]})}, {
                      feature: t[2], index: 2
                    })]}), (0, r.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4", children: t.slice(3, 7).map((e, t)=>(0, r.jsx)(a, {
                      feature: e, index: t
                    }, e.title))})]})]})]})}}, 29200: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("chart-no-axes-column-increasing", [["line", {
              x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb"
            }], ["line", {
              x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5"
            }], ["line", {
              x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6"
            }]])}, 31871: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("hard-drive", [["line", {
              x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io"
            }], ["path", {
              d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", key: "oot6mr"
            }], ["line", {
              x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278"
            }], ["line", {
              x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy"
            }]])}, 35810: (e, t, a)=> {
          "use strict"; a.d(t, {
            W: ()=>l
          }); var r = a(713), s = a(8772); let i = {
            some: 0, all: 1
          }; function l(e) {
            let {
              root: t, margin: a, amount: l, once: n=!1, initial: d=!1
            } = arguments.length > 1 && void 0 !== arguments[1]?arguments[1]: {}, [o, c] = (0, r.useState)(d); return(0, r.useEffect)(()=> {
                if (!e.current || n && o)return; let r = {
                  root: t && t.current || void 0,
                  margin: a,
                  amount: l
                }; return function(e, t, {
                    root: a, margin: r, amount: l = "some"
                  } = {}) {
                  let n = (0, s.K)(e),
                  d = new WeakMap,
                  o = new IntersectionObserver(e=> {
                    e.forEach(e=> {
                      let a = d.get(e.target); if (!!a !== e.isIntersecting)if (e.isIntersecting) {
                        let a = t(e.target, e); "function" == typeof a?d.set(e.target, a): o.unobserve(e.target)} else "function" == typeof a && (a(e), d.delete(e.target))})}, {
                    root: a, rootMargin: r, threshold: "number" == typeof l?l: i[l]}); return n.forEach(e=>o.observe(e)), ()=>o.disconnect()}(e.current, ()=>(c(!0),
                    n?void 0: ()=>c(!1)), r)}, [t, e, a, n, l]), o
          }}, 41645: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("heart-pulse", [["path", {
              d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z", key: "c3ymky"
            }], ["path", {
              d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng"
            }]])}, 43631: (e, t, a)=> {
          Promise.resolve().then(a.bind(a, 2239)), Promise.resolve().then(a.bind(a, 66200)), Promise.resolve().then(a.bind(a, 24909)), Promise.resolve().then(a.bind(a, 73925)), Promise.resolve().then(a.bind(a, 27897)), Promise.resolve().then(a.bind(a, 21521)), Promise.resolve().then(a.bind(a, 53110)), Promise.resolve().then(a.bind(a, 34558))}, 45189: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("users", [["path", {
              d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq"
            }], ["path", {
              d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j"
            }], ["path", {
              d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd"
            }], ["circle", {
              cx: "9", cy: "7", r: "4", key: "nufk8"
            }]])}, 45772: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("mail", [["path", {
              d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q"
            }], ["rect", {
              x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao"
            }]])}, 46007: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("cpu", [["path", {
              d: "M12 20v2", key: "1lh1kg"
            }], ["path", {
              d: "M12 2v2", key: "tus03m"
            }], ["path", {
              d: "M17 20v2", key: "1rnc9c"
            }], ["path", {
              d: "M17 2v2", key: "11trls"
            }], ["path", {
              d: "M2 12h2", key: "1t8f8n"
            }], ["path", {
              d: "M2 17h2", key: "7oei6x"
            }], ["path", {
              d: "M2 7h2", key: "asdhe0"
            }], ["path", {
              d: "M20 12h2", key: "1q8mjw"
            }], ["path", {
              d: "M20 17h2", key: "1fpfkl"
            }], ["path", {
              d: "M20 7h2", key: "1o8tra"
            }], ["path", {
              d: "M7 20v2", key: "4gnj0m"
            }], ["path", {
              d: "M7 2v2", key: "1i4yhu"
            }], ["rect", {
              x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7"
            }], ["rect", {
              x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo"
            }]])}, 48949: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("memory-stick", [["path", {
              d: "M6 19v-3", key: "1nvgqn"
            }], ["path", {
              d: "M10 19v-3", key: "iu8nkm"
            }], ["path", {
              d: "M14 19v-3", key: "kcehxu"
            }], ["path", {
              d: "M18 19v-3", key: "1vh91z"
            }], ["path", {
              d: "M8 11V9", key: "63erz4"
            }], ["path", {
              d: "M16 11V9", key: "fru6f3"
            }], ["path", {
              d: "M12 11V9", key: "ha00sb"
            }], ["path", {
              d: "M2 15h20", key: "16ne18"
            }], ["path", {
              d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z", key: "lhddv3"
            }]])}, 57410: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("settings", [["path", {
              d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f"
            }], ["circle", {
              cx: "12", cy: "12", r: "3", key: "1v7zrd"
            }]])}, 57886: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("zap", [["path", {
              d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db"
            }]])}, 64938: (e, t, a)=> {
          "use strict"; a.d(t, {
            A: ()=>r
          }); let r = (0, a(53876).A)("wifi", [["path", {
              d: "M12 20h.01", key: "zekei9"
            }], ["path", {
              d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z"
            }], ["path", {
              d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c"
            }], ["path", {
              d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff"
            }]])}, 66200: (e, t, a)=> {
          "use strict"; a.d(t, {
            default: ()=>n
            }); var r = a(34941), s = a(67618), i = a(51874), l = a(52490); function n() {
            let {
              t: e
            } = (0, l.o)(); return(0, r.jsx)("section", {
                className: "bg-gray-50 dark:bg-[#0a0b0f] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: (0, r.jsx)("div", {
                  className: "max-w-7xl mx-auto", children: (0,
                    r.jsxs)("div",
                    {
                      className: "grid lg:grid-cols-2 gap-12 items-center",
                      children: [(0, r.jsx)("div", {
                        className: "grid grid-cols-3 sm:grid-cols-4 gap-4 order-2 lg:order-1 justify-items-center", children: [{
                          name: "Node.js", src: "/icons/nodejs.png"
                        }, {
                          name: "Python", src: "/icons/python.png"
                        }, {
                          name: "Java", src: "/icons/java.webp"
                        }, {
                          name: "Discord.js", src: "/icons/djs.png"
                        }, {
                          name: "Lavalink", src: "/icons/ll.png"
                        }, {
                          name: "Go", src: "/icons/go-logo-white.svg"
                        }, {
                          name: "TypeScript", src: "/icons/ts.png"
                        }, {
                          name: "Telegram", src: "/icons/tg.png"
                        }, {
                          name: "Deno", src: "/icons/deno.png"
                        }, {
                          name: "discord.py", src: "/icons/discord.svg"
                        }, {
                          name: "Ruby", src: "/icons/header-ruby-logo.svg"
                        }, {
                          name: "C++", src: "/icons/cpp.png"
                        }].map((e, t)=>(0, r.jsxs)(s.P.div, {
                            initial: {
                              opacity: 0, scale: .8
                            }, whileInView: {
                              opacity: 1, scale: 1
                            }, viewport: {
                              once: !0
                            }, transition: {
                              duration: .5, delay: .05*t
                            }, className: "relative group w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center", children: [(0, r.jsx)("div", {
                                className: "absolute inset-0 bg-white/5 dark:bg-white/5 border-secondary border backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10", style: {
                                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                                }}), (0, r.jsx)("div", {
                                className: "relative w-12 h-12 sm:w-14 sm:h-14 z-10", children: (0, r.jsx)(i.default, {
                                  src: e.src, alt: e.name, fill: !0, className: "object-contain transition-all duration-300 transform group-hover:scale-110"
                                })})]}, e.name))}),
                        (0, r.jsxs)(s.P.div, {
                          initial: {
                            opacity: 0, x: 50
                          }, whileInView: {
                            opacity: 1, x: 0
                          }, viewport: {
                            once: !0
                          }, transition: {
                            duration: .8
                          }, className: "order-1 lg:order-2", children: [(0, r.jsxs)("h2", {
                              className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 orbitron-font leading-tight uppercase tracking-widest", children: [e("discordTech.title_start"), " ", (0, r.jsx)("span", {
                                style: {
                                  color: "var(--icon-text-primary)"
                                }, children: e("discordTech.title_highlight")})]}), (0, r.jsxs)("div", {
                              className: "space-y-5 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed", children: [(0, r.jsxs)("p", {
                                children: [e("discordTech.p1_start"), (0, r.jsxs)("span", {
                                  className: "font-bold", style: {
                                    color: "var(--icon-text-primary)"
                                  }, children: [" ", e("discordTech.p1_highlight")]}), e("discordTech.p1_end")]}), (0, r.jsxs)("p", {
                                children: [e("discordTech.p2_start"), (0, r.jsxs)("span", {
                                  className: "font-bold", style: {
                                    color: "var(--icon-text-primary)"
                                  }, children: [" ", e("discordTech.p2_highlight")]}), e("discordTech.p2_end")]}), (0, r.jsxs)("p", {
                                children: [e("discordTech.p3_start"), (0, r.jsxs)("span", {
                                  className: "font-bold", style: {
                                    color: "var(--icon-text-primary)"
                                  }, children: [" ", e("discordTech.p3_highlight")]}), e("discordTech.p3_end")]})]})]})]})})})}}, 73925: (e, t, a)=> {
            "use strict"; a.d(t, {
              default: ()=>o
              }); var r = a(34941), s = a(67618), i = a(84946), l = a(713), n = a(51874), d = a(52490); function o() {
              let {
                t: e
              } = (0, d.o)(), [t, a] = (0, l.useState)(null), o = [{
                  question: e("faq-bot.question1"), answer: e("faq-bot.answer1")}, {
                  question: e("faq-bot.question2"), answer: e("faq-bot.answer2")}, {
                  question: e("faq-bot.question3"), answer: e("faq-bot.answer3")}, {
                  question: e("faq-bot.question4"), answer: e("faq-bot.answer4")}, {
                  question: e("faq-bot.question5"), answer: e("faq-bot.answer5")}]; return(0, r.jsxs)("div", {
                  className: "bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8", children: [(0, r.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/90 to-gray-50 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/90 dark:to-[#0a0b0f]"
                  }), (0, r.jsx)("div", {
                    className: "absolute top-20 -left-32 w-64 h-64 blob-primary rounded-full blur-3xl"
                  }), (0, r.jsx)("div", {
                    className: "relative z-10 max-w-7xl mx-auto", children: (0,
                      r.jsxs)("div",
                      {
                        className: "grid md:grid-cols-2 gap-8 md:gap-12 items-start",
                        children: [(0, r.jsx)("div", {
                          className: "hidden md:block", children: (0, r.jsx)("div", {
                            className: "sticky top-24", children: (0, r.jsx)(s.P.div, {
                              initial: {
                                opacity: 0, x: -50
                              }, whileInView: {
                                opacity: 1, x: 0
                              }, viewport: {
                                once: !0, margin: "-100px"
                              }, transition: {
                                duration: .8
                              }, children: (0, r.jsx)("div", {
                                  className: "relative h-[300px] md:h-[500px] w-full", children: (0, r.jsx)(n.default, {
                                    src: "/icons/clyde.png", alt: "Server Features", fill: !0, style: {
                                      objectFit: "contain"
                                    }, className: "rounded-lg"
                                  })})})})}),
                          (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)(s.P.div, {
                              initial: {
                                opacity: 0, y: 50
                              }, whileInView: {
                                opacity: 1, y: 0
                              }, viewport: {
                                once: !0, margin: "-100px"
                              }, transition: {
                                duration: .8
                              }, className: "mb-8", children: [(0, r.jsxs)("h2", {
                                  className: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 orbitron-font", children: [e("faq-bot.title").split(" ").slice(0, -1).join(" "), " ", (0, r.jsxs)("span", {
                                    className: "icon-text-primary relative", children: [e("faq-bot.title").split(" ").slice(-1)[0], (0, r.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1729 149", className: "absolute left-0 w-full text-icon-text-primary", children: (0, r.jsx)("path", {
                                        d: "M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z", fill: "currentColor"
                                      })})]})]}), (0, r.jsx)("p", {
                                  className: "text-lg sm:text-xl text-gray-600 dark:text-gray-300", children: e("faq-bot.subtitle")})]}), (0, r.jsx)("div", {
                              className: "space-y-4", children: o.map((e, l)=>(0, r.jsxs)(s.P.div, {
                                initial: {
                                  opacity: 0, y: 50
                                }, whileInView: {
                                  opacity: 1, y: 0
                                }, viewport: {
                                  once: !0, margin: "-100px"
                                }, transition: {
                                  duration: .6, delay: .2*l
                                }, className: "bg-white dark:bg-gray-900/5 backdrop-blur-sm border border-secondary rounded-md overflow-hidden hover:bg-gray-50 dark:hover:bg-transparent hover:border-secondary dark:hover:border-secondary hover:hover-gradient dark:hover:hover-gradient hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-all duration-300", children: [(0, r.jsxs)("button", {
                                    onClick: ()=>a(t === l?null: l), className: "w-full px-4 sm:px-3 py-3 sm:py-3 flex items-center text-left gap-2 sm:gap-4", children: [(0, r.jsx)("span", {
                                      className: "orbitron-font flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-md card-primary dark:card-primary flex items-center justify-center icon-text-primary text-sm sm:text-base", children: (l+1).toString().padStart(2, "0")}), (0, r.jsx)("span", {
                                      className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-icon-text-primary dark:group-hover:text-icon-text-primary", children: e.question
                                    }), t === l?(0, r.jsx)(i.gn8, {
                                      className: "w-5 h-5 icon-text-primary dark:icon-text-primary ml-auto"
                                    }): (0, r.jsx)(i.$qG, {
                                      className: "w-5 h-5 icon-text-primary dark:icon-text-primary ml-auto"
                                    })]}), (0, r.jsx)("div", {
                                    className: "px-4 sm:px-6 transition-all duration-300 overflow-hidden ".concat(t === l?"pb-3 sm:pb-4 pl-[52px] sm:pl-[72px]": "h-0"), children: (0, r.jsx)("p", {
                                      className: "text-gray-600 dark:text-gray-300 text-sm sm:text-base", children: e.answer
                                    })})]}, l))})]})]})})]})}}, 75395: (e, t, a)=> {
              "use strict"; a.d(t, {
                A: ()=>r
              }); let r = (0, a(53876).A)("archive", [["rect", {
                  width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1"
                }], ["path", {
                  d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp"
                }], ["path", {
                  d: "M10 12h4", key: "a56b0p"
                }]])}, 83306: (e, t, a)=> {
              "use strict"; a.d(t, {
                H: ()=>x, J: ()=>c
              }); var r = a(34941), s = a(713), i = a(67618), l = a(63850), n = a(86661), d = a(51874), o = a(37149); function c(e) {
                let {
                  selectedCurrency: t, onCurrencyChange: a, className: c = ""
                } = e, [x, m] = (0, s.useState)(!1), h = (0, s.useRef)(null); return(0, s.useEffect)(()=> {
                    let e = e=> {
                      h.current&&!h.current.contains(e.target) && m(!1)}; return x && document.addEventListener("mousedown", e), ()=> {
                      document.removeEventListener("mousedown", e)}}, [x]), (0, r.jsxs)("div", {
                    ref: h, className: "relative ".concat(c), children: [(0, r.jsxs)(i.P.button, {
                      onClick: ()=>m(!x), variants: {
                        initial: {
                          scale: 1
                        }, hover: {
                          scale: 1.02, transition: {
                            type: "spring", damping: 20, stiffness: 300
                          }}, tap: {
                          scale: .98
                        }}, initial: "initial", whileHover: "hover", whileTap: "tap", className: "flex items-center justify-between w-full bg-white/20 dark:bg-white/5 hover:bg-white/30 dark:hover:bg-white/10 border border-white/20 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-400/40 rounded-lg px-3 sm:px-4 py-2 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm", children: [(0,
                          r.jsxs)("span",
                          {
                            children: [t.symbol,
                              " ",
                              t.code]}), (0,
                          r.jsx)(i.P.div,
                          {
                            animate: {
                              rotate: 180*!!x
                            },
                            transition: {
                              duration: .3,
                              ease: "easeInOut"
                            },
                            children: (0, r.jsx)(n.A, {
                              className: "w-4 h-4"
                            })})]}), o.christmasTheme.enabled && (0, r.jsxs)(r.Fragment, {
                      children: [(0,
                        r.jsx)(d.default,
                        {
                          src: "/christmas/button-deco-up.png",
                          alt: "Christmas decoration",
                          width: 28,
                          height: 28,
                          className: "absolute -top-2 -right-2 pointer-events-none"
                        }), (0,
                        r.jsx)(d.default,
                        {
                          src: "/christmas/button-deco-down.png",
                          alt: "Christmas decoration",
                          width: 28,
                          height: 28,
                          className: "absolute -bottom-2 -left-2 pointer-events-none"
                        })]}), (0, r.jsx)(l.N, {
                      children: x && (0,
                        r.jsx)(i.P.div,
                        {
                          variants: {
                            hidden: {
                              opacity: 0,
                              scale: .95,
                              y: -10
                            },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              y: 0,
                              transition: {
                                type: "spring",
                                damping: 20,
                                stiffness: 300,
                                duration: .2
                              }},
                            exit: {
                              opacity: 0,
                              scale: .95,
                              y: -10,
                              transition: {
                                duration: .15,
                                ease: "easeInOut"
                              }}},
                          initial: "hidden",
                          animate: "visible",
                          exit: "exit",
                          className: "absolute top-full mt-2 right-0 w-full sm:w-64 bg-white/20 dark:bg-[#0a0b0f]/90 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-lg shadow-xl z-[100] overflow-hidden",
                          children: o.currency.supportedCurrencies.map((e, t)=>(0, r.jsxs)(i.P.button, {
                            onClick: ()=> {
                              a(e), m(!1)}, initial: {
                              opacity: 0, x: -10
                            }, animate: {
                              opacity: 1, x: 0, transition: {
                                delay: .05*t
                              }}, whileHover: {
                              backgroundColor: "rgba(255, 255, 255, 0.1)", transition: {
                                duration: .2
                              }}, className: "w-full px-4 py-2 text-left hover:bg-white/10 dark:hover:bg-white/10 text-gray-900 dark:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg", children: [e.symbol, " ", e.code, " - ", e.name]}, e.code))})})]})}function x() {
                let e = o.currency.supportedCurrencies.find(e=>e.code === o.currency.defaultCurrency) || o.currency.supportedCurrencies[0], [t, a] = (0, s.useState)(e), [r, i] = (0, s.useState)({}), [l, n] = (0, s.useState)(!0); return(0, s.useEffect)(()=> {(async()=> {
                  try {
                    n(!0); let e = await fetch("https://v6.exchangerate-api.com/v6/".concat(o.currency.apiKey, "/latest/").concat(o.currency.baseCurrency)), t = await e.json(); "success" === t.result && (i(t.conversion_rates),
                      localStorage.setItem("exchangeRates", JSON.stringify({
                        rates: t.conversion_rates, timestamp: Date.now()})))}catch(t) {
                    console.error("Failed to fetch exchange rates:",
                      t); let e = localStorage.getItem("exchangeRates"); if (e) {
                      let {
                        rates: t,
                        timestamp: a
                      } = JSON.parse(e); Date.now()-a < 864e5 && i(t)}}finally {
                    n(!1)}})()}, []), {
                  selectedCurrency: t, setSelectedCurrency: a, exchangeRates: r, convertPrice: e=> {
                    let a = parseFloat(e.replace(/[£$€¥C\$A\$]/g,
                      "")); if (isNaN(a))return"".concat(t.symbol, "0.00"); if (t.code === o.currency.baseCurrency||!r[t.code])return"JPY" === t.code?"".concat(t.symbol).concat(Math.round(a)): "".concat(t.symbol).concat(a.toFixed(2)); let s = a*r[t.code]; return"JPY" === t.code?"".concat(t.symbol).concat(Math.round(s)): "".concat(t.symbol).concat(s.toFixed(2))},
                  isLoading: l
                }}},
            89409: (e, t, a)=> {
              "use strict"; a.d(t, {
                A: ()=>r
              }); let r = (0, a(53876).A)("calendar", [["path", {
                  d: "M8 2v4", key: "1cmpym"
                }], ["path", {
                  d: "M16 2v4", key: "4m81vk"
                }], ["rect", {
                  width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy"
                }], ["path", {
                  d: "M3 10h18", key: "8toen8"
                }]])}}]);