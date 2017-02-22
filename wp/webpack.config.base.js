let path = require("path");

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules)/,
      loader: 'babel',
    }],
  },
  // entry: path.join(__dirname, '../', 'src/app.js'),
  output: {
    libraryTarget: 'umd',
    library: 'app',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};