// module utama gulp
var gulp = require("gulp");

// module compile sass/scss files ke css
var sass = require("gulp-sass");

// untuk notifikasi error
var notify = require("gulp-notify");

// untuk handle error
var errorHandle = require("gulp-error-handle");

// module untuk synchronize antara file dev dg browser
var browserSync = require("browser-sync").create();

// pug (html compile)
var pug = require("gulp-pug");

// output HTML beauty
var htmlBeautify = require("gulp-html-beautify");

var optionHTML = {
  indent_size: 2,
  indent_char: ' ',
  eol: '\n',
  end_with_newline: true
};

function serve(done) {
  // initialize file yg akan di buka di browser
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
  done();
}

function style() {
  return (
    gulp
    .src("src/scss/*.scss") //lokasi sumber development
    .pipe(errorHandle()) // aktifkan error handle
    .pipe(sass().on("error", notify.onError( // compile file scss menjadi
      function(err) {
        return '\nProblem file : ' + err.message + err.path;
      }
      )))
    .pipe(gulp.dest("dist/assets/css/")) // lokasi hasil compile scss
    .pipe(browserSync.stream()) // synchronizebrowser terhadap perubahan
    );
}

function compilePug() {
  return (
    gulp
      .src("src/pug/pages/*.pug") // lokasi sumber development
      .pipe(pug())
      .on("error", notify.onError( // compile file pug menjadi html
        (err) => {
          return '\nProblem file : ' + err.message + err.path;
        }
      ))
      .pipe(htmlBeautify(optionHTML))
      .pipe(gulp.dest("dist/")) // lokasi hasil compile file pug
      .pipe(browserSync.stream()) // synchronizebrowser terhadap perubahan
    )
}

function watch(done) {
  // whatching perubahan file pug
  gulp.watch("src/pug/**/*.pug", compilePug);

  // whatching perubahan file scss
  gulp.watch("src/scss/**/*.scss", style);
  return done();
}

exports.style = style;
exports.compilePug = compilePug;
exports.watch = watch;
exports.default = gulp.series(style, compilePug, serve, watch);