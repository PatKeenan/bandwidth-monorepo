/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {SourceMapDevToolPlugin, DefinePlugin} = require('webpack');

const config = (env) => ({
  mode: env.prod ? 'production' : 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].js.map',
    publicPath: '/',
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  /*    devtool: 'inline-source-map', */
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: ['@babel/transform-runtime'],
        },
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, '../../node_modules/antd/dist'),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: {index: '/', disableDotRule: true},
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: env.DEV_SERVER_PORT,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'global.css',
    }),
    new HtmlWebpackPlugin({
      template: './dist/starter-template.html',
    }),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        env.API_URL ?? 'http//localhost:5000/',
      ),
    }),
  ],
});

module.exports = config;
