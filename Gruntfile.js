/*!
 * mower's Gruntfile
 * http://www.infinitus.com.cn/
 * Copyright (c) 2014 Infinitus, Inc.
 * Licensed under MIT (https://github.com/macula-projects/mower/blob/master/LICENSE-MIT)
 */

module.exports = function(grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        'gh-pages': {
            options: {
                base: 'macula-docs/_book'
            },
            src: '**/*'
        }
    });

    //load grunt plugin task
    grunt.loadNpmTasks('grunt-gh-pages');
};
