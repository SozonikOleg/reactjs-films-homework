const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports =  merge.smart(common, {
    mode: 'production',
    context:path.join(__dirname, './'),
    entry:[
      './index.js'
    ],
    watch:false,
    devtool: 'none',
    module: {
      rules: [
        // {
        //   test: /\.scss$/,
          // use: ExtractTextPlugin.extract({
          //   //resolve-url-loader may be chained before sass-loader if necessary
          //   use: ['css-loader', 'sass-loader','style-loader'],
          // })
        // },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        // {
        //   test: /\.scss$/,
        //   use: [
        //       // fallback to style-loader in development
        //       process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
        //       "css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]",
        //       "sass-loader"
        //   ],
        // },
      ]
    },
    plugins: [
      new ExtractTextPlugin("styles.css"),
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: './src/components/Component1/index.html'
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
    ],
    optimization: {
      minimizer: [new TerserPlugin({
        cache: true,
      })],
    },
  });
  