/* Author: Lucas Vincent Johanningmeier */

const path = require("path");

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
