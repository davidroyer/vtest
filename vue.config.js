module.exports = {
  chainWebpack: config => {
    config.plugin("provide").use(require("webpack").ProvidePlugin, [
      {
        "window.Quill": "quill/dist/quill.js",
        Quill: "quill/dist/quill.js"
      }
    ]);
  }
};
