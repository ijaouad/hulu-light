const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
