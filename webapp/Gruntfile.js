module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheet/style.css' : 'sass/style.scss'
        }
      }
    }
  });
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
