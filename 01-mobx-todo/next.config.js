const path = require("path");

module.exports = {
  webpack: (config) => {
    const { alias } = config.resolve || {};
    alias.react$ = path.resolve("node_modules/react");
    alias["react-dom$"] = path.resolve("node_modules/react-dom");

    config.resolve = {
      ...config.resolve,
      alias,
    };

    return config;
  },
};
