const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "[name].js",
    publicPath: "/", // the name of the bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // styles files
        use: ["style-loader", "css-loader"],
        // exclude: /node_modules/
      },
      {
		test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/i,
        loader: "file-loader",
        options: { limit: false },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
