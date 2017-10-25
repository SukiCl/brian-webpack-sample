var webpack =require('webpack');
var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
  config.set({
    basePath: '.',

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'app/spec/AppSpec/**/*.spec.js'
    ],

    autoWatch: true,

    preprocessors: {
      'app/src/*.js': ['webpack', 'sourcemap'],
      'app/spec/AppSpec/**/*.spec.js': ['webpack', 'sourcemap']
    },

    reporters: ['coverage', 'mocha'],
    // junitReporter: {
    //   outputDir: ".",
    //   outputFile: "test-results.xml",
    //   suite: "junit_coverage"
    // },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity,

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },
    //babel-plugin-istanbul test configuration
    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage',
      subdir: 'react'
    }
  });
};
