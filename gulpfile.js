(function () {
  var gulp = require('gulp');
  var less = require('gulp-less');
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglify');
  var csso = require('gulp-csso');
  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');

  gulp.task('less', function () {
    gulp.src('./*.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(csso())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('lint', function() {
    return gulp.src('./*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  });

  gulp.task('js', ['lint'], function () {
    gulp.src('./angular-chart.js')
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  });

  gulp.watch('./*.js', ['js']);
  gulp.watch('./*.less', ['less']);
  gulp.task('default', ['less', 'js']);

})();