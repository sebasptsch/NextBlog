const withMDX = require("@next/mdx")();

module.exports = withMDX({
  images: {
    domains: ["blog.sebasptsch.dev"],
  },
  basePath: "https://sebasptsch.dev",
});
