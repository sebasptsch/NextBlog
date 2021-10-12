// next.config.js

/** @type {import('next').NextConfig} */

const { withKeystone } = require("@keystone-next/keystone/next");

module.exports = withKeystone({ images: { domains: ["pbs.twimg.com"] } });
