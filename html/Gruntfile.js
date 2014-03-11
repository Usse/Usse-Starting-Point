/*  Description : Gruntfile for general Web development
 *  Version   : 1.0
 *  Author    : Andrea Usseglio (andrea.usseglio@gmail.com)
 *  License   : GPL
 */

module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options : {
          'style' : 'compressed'
        },
        files: {
          'css/screen.css': 'css/screen.scss'
        }
      },
      dev: {
        options : {
          'style' : 'compressed',
          'trace' : 'true',
          'banner' : '/* Usse */'
        },
        files: {
          'css/screen.css': 'css/screen.scss'
        }
      }
    },

    jshint: {
       options: {
         curly: true,
         eqeqeq: true,
         eqnull: true,
         browser: true,
         globals: {
           jQuery: false,
           '$' : false,
           'Modernizr' : false,
           'console' : false
         }
       },
       uses_defaults: ['js/scripts.js'],
       with_overrides: {
         options: {
           curly: false,
           undef: true
         },
         files: {
           src: ['js/scripts.js']
         }
       }
     },

     /**/
     jade: {
      compile: {
        options: {
          debug: false,
          pretty: true
        },
        files: {
          //"index.html": ["templates/*.jade", "another/path/tmpl.jade"]
          "index.html": "index.jade"
        }
      }
    },

     /**/
    watch : {
      jade : {
        files : ['*.jade'],
        tasks : ['jade'],
        options : {
            pretty : true
        }
      },
      html : {
        files : ['*.html'],
        tasks : [],
        options: {
          livereload: true
        }
      },
      css : {
        files : ['css/*.scss', 'css/*/*.scss'],
        tasks : ['sass'],
        options: {
          livereload: true
        }
      },
      js : {
        files : ['js/scripts.js'],
        tasks : ['jshint'],
        options: {
          livereload: true
        }
      }
    },
    /**/

    open : {
      dev : {
        path: 'http://localhost/',
        app: 'Google Chrome'
      }
    }
  });
  grunt.registerTask('default',[]);
  grunt.registerTask('dev',['open:dev', 'watch']);
}