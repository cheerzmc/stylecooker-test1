var gulp = require('gulp');
var jshint = require('gulp-jshint');
gulp.task('lint', function(){
  return gulp.src('public/javascripts/*.js')
    .pipe(jshint())
    .pipe(shiny.reporter('default'));
});

gulp.task('default', ['lint']);
