const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 解决style别名
  configureWebpack: {
    resolve: {
      alias: {
        styles: resolve("src/assets/styles")
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // target host
        pathRewrite: {
          "^/api": "/mock" // rewrite path
        }
      }
    }
  }
};
