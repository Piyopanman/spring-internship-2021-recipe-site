if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,i)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JSLVOz9Qu9Fq04tS85hx_/_buildManifest.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/JSLVOz9Qu9Fq04tS85hx_/_ssgManifest.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/15.4a5c868ce01553269352.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/16.f7b22860d2db04f9a205.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/29107295.c3f4e27255de18263d5a.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/372e5d4fd00b5dc4f3a1693df8eefae2c7b2d06b.7c84127f34dd8ec7797f.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/52fa6230e3b47b3ce467f6fb1a62f4a95d6ba9da.c4253474afd0e7883e1a.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/7.e6200ae24b43fd2abf8b.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/9524abf12f721232c1f8a265b390b355db3206e3.7281bad0e6d810f845e8.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/commons.03cbe3d5759dea0cdc85.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/main-f7838367c27aff31e690.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/pages/_app-40b34f9af0f99ed60436.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/pages/_error-8f2131636a597d72a6a1.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/pages/index-6e6938efbffe68e8a17e.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/pages/recipe/%5Bid%5D-a85113892fb14397d2f0.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/pages/search-9b220d1fa68f61f09e72.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/polyfills-4f4acd756cef4fe6da1b.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/chunks/webpack-9372a3bf92dd37db714d.js",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/css/afd7172b7cfc566ac23d.css",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/_next/static/css/ba1b0bd2523e0b4d4c23.css",revision:"JSLVOz9Qu9Fq04tS85hx_"},{url:"/favicon.ico",revision:"ed4c50fa288b3b905237c27db92dfe19"},{url:"/favicon.png",revision:"b44e066b55232a1d81620a12c929c905"},{url:"/manifest.json",revision:"3090924dd2a6afeeea8115925bf664aa"},{url:"/no_image.jpeg",revision:"add5b89e9e25bc004a074c28cf066b3d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
