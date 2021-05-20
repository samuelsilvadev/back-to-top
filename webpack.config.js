const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/BackToTop.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "back-to-top.js",
    library: {
      name: "backToTop",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader",
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
  },
};
