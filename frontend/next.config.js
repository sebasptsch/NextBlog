// next.config.js

/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");
module.exports = withPlaiceholder({
  esmExternals: false,
  images: {
    domains: ["pbs.twimg.com", "cms.sebasptsch.dev"],
  },
});
