module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8080,
          livereload: true
        }
      }
    },
    // Compile Sass with compass into css/ directory
    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          environment: 'production'
        }
      },
    },
    // Copy
    copy: {
      fonts: {
        cwd: 'bower_components/components-font-awesome/fonts',
        src: '**/*',
        dest: 'fonts',
        expand: true
      }
    },
    // Watch
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: 'scss/**/*.scss',
        tasks: ['compass']
      }
    }
  });

  // Start web server
  grunt.registerTask('serve', [
    'connect:server',
    'watch'
  ]);

  // Plugin loads
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'copy']);
};
