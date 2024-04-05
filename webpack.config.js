// ChatGPT
const path = require("path");

module.exports = {
  entry: "./src/pages/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
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
    hot: true,
    historyApiFallback: true,
    static: {
        directory: path.resolve(__dirname, 'public'),
      },
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false,
      "util": false,
      "assert": false,
      "stream": false,
      "constants": false
    },
    alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
  },
  stats: {
    errorDetails: true
}
};
