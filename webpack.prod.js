const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports =  merge.smart(common, {
    mode: 'production',
    context:path.join(__dirname, './'),
    entry:[
      './index.js'
    ],
    watch:false,
    devtool: 'none',
    plugins: [
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: './src/components/Component1/index.html'
      })
    ],
    module: {
    },
    optimization: {
      minimizer: [new TerserPlugin({
        cache: true,
      })],
    },
  });
  