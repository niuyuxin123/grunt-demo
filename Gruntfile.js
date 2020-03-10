
module.exports = function (grunt) {
 grunt.initConfig({
    concat: {
      js: {
        src: ['rectangle.js', 'calc.js'],
        dest: 'dist/bundle.min.js'
      },
      css:{
        src: ['css/*.css'],
        dest: 'dist/bundle.css'
      }    
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat:js','concat:css']); 

};
   

