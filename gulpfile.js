/* global require */
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src('tx-tinymce.js')
    .pipe(concat('tx-tinymce.min.js'))
    .pipe(uglify({outSourceMap: true}))
    .pipe(gulp.dest('.'));
});