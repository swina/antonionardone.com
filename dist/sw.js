if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/block.element.42d05a31.js",revision:"7836e093ad1ed73d527b03ad8b99c0ea"},{url:"assets/index.04ff9758.css",revision:"bfffdb037958b40843c1e708202c32ca"},{url:"assets/index.f4375ba5.js",revision:"99c5d8db44fcae471e66467fc5972519"},{url:"assets/moka.chip.977aaea1.js",revision:"d36025ae17962306289ced9f25e3deea"},{url:"assets/moka.list.2dc0c2d6.js",revision:"760dbc6461d89e46fee7481799a7e830"},{url:"assets/moka.menu.e88675e1.js",revision:"840598a4d54bf3894e1f7a8e533aea20"},{url:"assets/moka.select.0574871f.js",revision:"958ccd91a641e732dcbca7092e969eb3"},{url:"assets/moka.toggle.9f0a0d28.js",revision:"8ed16618d3da8af4b0f68f674957334f"},{url:"assets/store.categories.c8816f20.js",revision:"05b54e5122939e18b48b75d71f979676"},{url:"assets/vendor.8bb14361.js",revision:"2968e03c45d39247432f49191eee1e0f"},{url:"index.html",revision:"c135fb885776c6e7023b495ec0f8ed1c"},{url:"icon-192x192.png",revision:"fecfa555d04baf2e4fbe76529e161826"},{url:"icon-256x256.png",revision:"5f3fee16df39192d8bf480b39dd7182c"},{url:"icon-384x384.png",revision:"efb3b8a100bc03987ce210770b71a7e5"},{url:"icon-512x512.png",revision:"7d22fa30701e93d3ae1a5a11b9b82fd4"},{url:"apple-touch-icon.png",revision:"e97e58074c383e22e0136c205f0fe82a"},{url:"manifest.webmanifest",revision:"1aad2d54b818e95067ff17a41ba1966a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
