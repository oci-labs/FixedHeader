module.exports = function (config) {
    "use strict";

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '.',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'dist/fixed-header.js',
            'test/fixed-header-spec.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        singleRun: true,

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots'],


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        //browsers: ['Chrome', 'PhantomJS', 'Firefox'],
        browsers: ['PhantomJS'],

        plugins: [
            //'karma-chrome-launcher',
            //'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            //'karma-junit-reporter'
        ],

        // junitReporter: {
        //     outputFile: 'test-results.xml'
        //     // suite: 'unit'
        // },
    });
};
