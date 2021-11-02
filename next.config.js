// next.config.js

/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next");
module.exports = withPlaiceholder({ images: { domains: ["pbs.twimg.com"] } });
