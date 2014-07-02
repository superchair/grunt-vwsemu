/*
* vws-emu
* 
*
* Copyright (c) 2014 Alex Brown
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        vwsemu: {
            default_options: {
                uhe: {
                    cmdc: {
                        host: '10.90.18.219',
                        port: 5600
                    },
                    upm: {
                        host: '10.90.18.225',
                        port: 6040
                    },
                    hep: {
                        host: '10.90.18.225',
                        port: 6030
                    },
                    pps: {
                        host: '10.90.18.225',
                        port: 6060
                    }
                }
            },
            custom_options: {
                options: {
                    proxyport:8000
                },
                uhe: {
                    cmdc: {
                        host: '10.90.18.219',
                        port: 5600
                    },
                    upm: {
                        host: '10.90.18.225',
                        port: 6040
                    },
                    hep: {
                        host: '10.90.18.225',
                        port: 6030
                    },
                    pps: {
                        host: '10.90.18.225',
                        port: 6060
                    }
                }
            }
        },

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'vwsemu']);

};
