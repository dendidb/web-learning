//  module utama help
var gulp = require("gulp");

// module compile sass/scss files ke css
var sass = require("gulp-sass");

// untuk notifikasi error
var notify = require("gulp-notify");

// untuk handle error 
var errorHandle = require ("gulp-error-handle");

function style() {
  return (
    gulp
    .src("src/scss/*.scss") //lokasi sumber development
    .pipe(errorHandle()) // aktifkan handle error
    .pipe(sass().on("error", notify.onError( // compile file scss menjadi css
      function (err) {
        return'\nProblem file : ' + err.message + err.path;
      }
      )))
    .pipe(gulp.dest("dist/assets/css/")) // lokasi hasil compile scss menjadi css
    );
}

function watch() {
  //  untuk watching (melihat, mantau perubahan file scss
  gulp.watch("src/scss/*.scss", style);
}

exports.style = style;
exports.watch = watch;
exports.default = style;
exports.default = gulp.series(style, watch);


Install SCSS and SASS Plugins in Sublime Text


semua file scss akan tetap di compile semuanya ke .css
