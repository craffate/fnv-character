module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        clearContext: false
      },
      jasmineHtmlReporter: {
        suppressAll: true
      },
      coverageReporter: {
        dir: 'coverage',
        reporters: [
          { type: 'html' }
        ]
      }
    },
    logLevel: config.LOG_INFO,
    colors: true,
    restartOnFileChange: true,
    browsers: ['Firefox'],
    reporters: ['progress', 'kjhtml']
  })
}
