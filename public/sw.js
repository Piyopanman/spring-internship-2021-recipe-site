if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,i,n)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return t;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Z8M2BDEIC-vi0tvGuX9Ee/_buildManifest.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/Z8M2BDEIC-vi0tvGuX9Ee/_ssgManifest.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/14.865f1eff32782968ac71.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/15.12f9d1209f96d43b912d.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/4.d03fdd154f695dd918b8.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/44143c7e0f8473e43464c3632e471a3beb517e02.163cd61da37e9e1970ba.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/5.d0d3e5025d103f834b5c.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/52fa6230e3b47b3ce467f6fb1a62f4a95d6ba9da.7c1384023b3ebb208832.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/framework.4b1beca48388539e3889.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/main-52dcdd919b759e9368ad.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/pages/_app-3913bb480da624f4a66c.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/pages/_error-2783540244d291c2fa10.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/pages/home-858ba34bbfeab17c74ad.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/pages/index-74aec96d15db2fe03a04.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/pages/recipe/%5Bid%5D-5f1005e2ae07a155b8db.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/pages/search-69defb62fc494772f3a7.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/polyfills-feb8a7604fa7fce626b2.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/chunks/webpack-ccee332fd2df2aaef94d.js",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/css/41b4158c4161870005c0.css",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/_next/static/css/afd7172b7cfc566ac23d.css",revision:"Z8M2BDEIC-vi0tvGuX9Ee"},{url:"/favicon.ico",revision:"41ee662adeba80ca55763531519468a0"},{url:"/favicon.png",revision:"212a8354b9189acfe8e227328ec815c1"},{url:"/manifest.json",revision:"273c3871fa3ec38e6233e2d296886e91"},{url:"/no_image.jpeg",revision:"add5b89e9e25bc004a074c28cf066b3d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
