// next.config.js

/** @type {import('next').NextConfig} */

const { withKeystone } = require("@keystone-next/keystone/next");
const { withPlaiceholder } = require("@plaiceholder/next");
module.exports = withKeystone(
  withPlaiceholder({ images: { domains: ["pbs.twimg.com"] } })
);
