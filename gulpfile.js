var gulp       = require('gulp'),
    rollup     = require('gulp-rollup');
    // sourcemaps = require('gulp-sourcemaps');


gulp.task('bundle', function(){
  gulp.src('src/main.js', {read: false})
    .pipe(rollup({
        sourceMap: true,
        // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
        // wiki https://github.com/rollup/rollup/wiki/JavaScript-API
        // 一个例子
        // http://www.open-open.com/lib/view/open1456569458625.html
        format: 'cjs'
    }))
    // .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('dist'));
});

