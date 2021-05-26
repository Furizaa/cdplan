const withTM = require("next-transpile-modules")(["@cdplan/db"]);

module.exports = withTM({
  future: {
    webpack5: true,
  },
});
