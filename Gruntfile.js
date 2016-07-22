module.exports = function (grunt) {
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssc: {
            build: {
                options: {
                    debugInfo: false,
                    sortSelectors: true,
                    lineBreaks: true,
                    sortDeclarations:true,
                    consolidateViaDeclarations:true,
                    consolidateViaSelectors:false,
                    consolidateMediaQueries:true
                },
                files: {
                    'resources/css/un-minimized-core.css': 'resources/css/un-minimized-core.css'

                }
            }
        },
        cssmin: {
            build: {
                src: 'resources/css/un-minimized-core.css',
                dest: 'resources/compiled/<%= pkg.name %>.min.css'

            }
        },
        sass: {
            build: {
                files: {
                    'resources/css/un-minimized-core.css': 'resources/sass/framework.scss',
                    'resources/css/custom.css': 'resources/sass/custom.scss',
                    'resources/css/components.css': 'resources/sass/components.scss',
                    /* remove for production - components are loaded into components.css*/
                    'resources/css/components/header.css': 'resources/sass/components/header.scss',
                    'resources/css/components/mobile-nav.css': 'resources/sass/components/mobile-nav.scss',
                    'resources/css/components/site-forms.css': 'resources/sass/components/site-forms.scss',
                    'resources/css/components/slideshow.css': 'resources/sass/components/slideshow.scss',
                    'resources/css/components/accordion.css': 'resources/sass/components/accordion.scss',
                    'resources/css/components/loader.css': 'resources/sass/components/loader.scss'

                }
            }
        },
        watch: {
            js: {
                files: ['resources/js/<%= pkg.name %>.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['resources/sass/**/*.scss'],
                tasks: ['buildcss']
            },
            livereload: {
                files: ['*.jsp', 'resources/css/*.css', 'resources/js/*.js'],
                options: {
                    livereload: true
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'resources/compiled/<%= pkg.name %>.min.js': [
                        'resources/js/site.js'

                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-cssc');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'uglify', 'cssc', 'cssmin']);
    grunt.registerTask('buildcss', ['sass', 'cssc', 'cssmin']);

};