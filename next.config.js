const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    importScripts: ["/swenv.js", "/worker.js"],
    runtimeCaching,
  },
  images: {
    domains: ["img.cpcdn.com"],
  },
});
