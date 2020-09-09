const path = require("path");
const app_folder = "src";
const app_path = path.join(__dirname, app_folder);

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": app_path,
        "@api": path.join(app_path, "api"),
        "@components": path.join(app_path, "components"),
        "@assets": path.join(app_path, "assets"),
      },
    },
    entry: {
      app: path.join(__dirname, app_folder, "main.js"),
    },
    devServer: {
      clientLogLevel: "info",
      watchOptions: {
        poll: true,
      },
    },
  },
  devServer: {
    progress: false,
    proxy: {
      "^/api": {
        target: "http://localhost:4000/",
        secure: false,
      },
    },
  },
};
