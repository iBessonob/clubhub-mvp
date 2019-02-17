var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('./js/**/*');
});

gulp.task('html', function() {
  gulp.src('./*.html');
});

gulp.task('css', function() {
  gulp.src('./css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('./js/**/*', ['js']);
  gulp.watch('./css/*.css', ['css']);
  gulp.watch(['./*.html',
    './views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
