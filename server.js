const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();

if(process.env.NODE_ENV.trim()==='development'){
  const config = require('./webpack.dev.js');
  const webpackConfig = require('./webpack.dev');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
  
  app.use(require('webpack-hot-middleware')(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));

} else{
  app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
  });
}

app.use('/', express.static('./build'));

// Serve the files on port 3000.
app.listen(3000, () => {
  //eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!\n');
});

