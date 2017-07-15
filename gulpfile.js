
var gulp = require('gulp');

gulp.task('hello', function(){
  console.log('Hello Mamas and Papas');
});

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('mamaspapas/sass/**/*.sass')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('mamaspapas/css'))
});

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function(){
gulp.watch('mamaspapas/sass/**/*.sass', ['sass']);
//Reloads the browser whenever HTML or JS files change
gulp.watch('mamaspapas/*.html', browserSync.reload);
gulp.watch('mamaspapas/js/**/*.js', browserSync.reload);
});

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function(){
  browserSync.init({
    server:{
      baseDir: 'mamaspapas'
    },
});
});

//
var useref = require('gulp-useref');

gulp.task('useref', function(){
  return gulp.src('mamaspapas/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});
