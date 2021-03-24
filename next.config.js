const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  images: {
    domains: ["img.cpcdn.com"],
  },
});
