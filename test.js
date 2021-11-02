var { getPlaiceholder } = require("plaiceholder");
try {
  getPlaiceholder(
    "https://cms.sebasptsch.dev/images/7ff5235d-64ac-4f02-8ccc-e3e2a0d1aee0.png"
  ).then(({ svg }) => console.log(svg));
} catch (err) {
  err;
}
