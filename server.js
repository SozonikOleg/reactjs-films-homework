const webpack = require('webpack');
const express = require('express');
const webpackConfig = require('./webpack/webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('./webpack/webpack.config');
const compiler = webpack(webpackConfig);



// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, () => {
  //eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!\n');
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: false,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));
