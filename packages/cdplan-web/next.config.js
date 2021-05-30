const withTM = require("next-transpile-modules")(["@cdplan/db", "@cdplan/cloud"]);

module.exports = withTM({
  future: {
    webpack5: true,
  },
});
