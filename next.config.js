const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: [
      "assets.vercel.com",
      "img.cpcdn.com",
      "staff-recipes-images-prod.s3.ap-northeast-1.amazonaws.com",
    ],
  },
});
// module.exports = withBundleAnalyzer({});
