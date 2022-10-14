// @ts-check

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    chunkFilename: '[name].chunk.js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@screens': path.resolve(__dirname, 'src', 'screens'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
    },
  },
  devServer: {
    compress: true,
    port: 8090,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:5001',
        // target: 'http://localhost:5001',
        secure: false,
        changeOrigin: true,
      },
      // '/socket.io/?EIO=4&transport=polling': {
      //   target: 'http://127.0.0.1:5001',
      //   // target: 'http://localhost:5001',
      //   secure: false,
      //   changeOrigin: true,
      //   ws: true,
      // },
      '/socket.io': {
        target: 'ws://127.0.0.1:5001',
        ws: true, // important
        changeOrigin: true,
      },
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  devtool: mode === 'development' && 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public', 'index.html'),
    }),
  ],
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
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(js)$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
