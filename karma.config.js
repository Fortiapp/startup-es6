let path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      'tests.webpack.js',
    ],
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['progress', 'coverage', 'html'],

    htmlReporter: {
      outputFile: './coverage/units.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'This is the unit test report details.',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.test\.js$/,
            include: /tests/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          },
        ],
        loaders: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, '../src'),
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
        ],
      },
    },
  });
};
