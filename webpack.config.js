// ChatGPT
const path = require("path");

module.exports = {
  entry: "./src/pages/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          }
    ],
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  }
};
