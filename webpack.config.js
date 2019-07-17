const path = require('path');
// const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, './web/static/index.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './priv'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './web/static'),
    },
    extensions: ['.js', '.jsx', '.sass', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: './css/app.css' }),
  ],
});