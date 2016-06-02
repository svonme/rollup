var gulp       = require('gulp'),
    rollup     = require('gulp-rollup');
    // sourcemaps = require('gulp-sourcemaps');


gulp.task('bundle', function(){
  gulp.src('src/main.js', {read: false})
    .pipe(rollup({
        sourceMap: true
    }))
    // .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('dist'));
});