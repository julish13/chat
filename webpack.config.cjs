// @ts-check

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias:{
      components: path.resolve(__dirname, "src", "components"),
      screens: path.resolve(__dirname, "src", "screens"),
      utils: path.resolve(__dirname, "src", "utils"),
      store: path.resolve(__dirname, "src", "store"),
      src: path.resolve(__dirname, "src"),
    }
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    publicPath: '/assets/',
  },
  devServer: {
    compress: true,
    port: 8090,
    host: '0.0.0.0',
    // publicPath: '/assets/',
    historyApiFallback: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(js)$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  devtool: 'inline-source-map',
};
