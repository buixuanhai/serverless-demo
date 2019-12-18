const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  externals: [nodeExternals({ modulesDir: "../node_modules" })],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: __dirname,
        exclude: [/_warmup/]
      }
    ]
  }
};
