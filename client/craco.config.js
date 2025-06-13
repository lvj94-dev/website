/* Author: Lucas Vincent Johanningmeier */

// Node
const path = require("path");

/**
 * @file craco.config.js
 *
 * @description
 * Adds alias support '@' for custom Webpack setup.
 */

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.alias = {
        ...(webpackConfig.resolve.alias || {}),
        "@": path.resolve(__dirname, "src"),
      };

      webpackConfig.plugins = webpackConfig.plugins.map((plugin) => {
        if (plugin.constructor.name === "HtmlWebpackPlugin") {
          plugin.options.template = path.resolve(
            __dirname,
            "public/index.html"
          );
        }
        return plugin;
      });

      return webpackConfig;
    },
  },
};
