const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: {
    app: './index.js'
},
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    title: 'Production'
    })
],
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
},
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};