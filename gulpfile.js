var gulp = require('gulp');

gulp.task('hello', function(){
  console.log('Hello Mamas and Papas');
});

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('mamaspapas/scss/**/*.scss') //Gets all files ending with .scss in mamaspapas/scss and children directory
    .pipe(sass()) // using gulp-sass
    .pipe(gulp.dest('mamaspapas/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function(){
gulp.watch('mamaspapas/scss/**/*.scss', ['sass']);
});

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function(){
  browserSync.init({
    server:{
      baseDir: 'mamaspapas'
    },
});
});
