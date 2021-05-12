/* Gulp Core
--------------------------------------------------- */
import { series, parallel, src, dest, watch } from "gulp";

/* Plugins
--------------------------------------------------- */
// colors
import c from "ansi-colors";

// server
import browserSync from "browser-sync";

// error handling
import notify from "gulp-notify";
import errorHandle from "gulp-error-handle";

// pug
import pug from "gulp-pug";
import htmlBeautify from "gulp-html-beautify";

// style
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import postcssScss from "postcss-scss";
import autoprefixer from "autoprefixer";

// optimize style
import stripCssComments from "gulp-strip-css-comments";
import combineMq from "postcss-combine-media-query";
import cleanCSS from "gulp-clean-css";

// other
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";

/* ------------------------------------------------------------------------------
@name: Config Directory
@description: Config Directory for SRC (development) and BUILD (production)
--------------------------------------------------------------------------------- */
// root
const SRC = "src";
const BUILD = "dist";
const fileName = 'app';

const optionsHTML = {
  indent_size: 2,
  indent_char: ' ',
  eol: '\n',
  end_with_newline: true
};

// dev
const DEV_PATH = {
  view: {
    watch: `${SRC}/pug/**/*.pug`,
    pages: `${SRC}/pug/pages/*.pug`,
  },
  style: `${SRC}/scss/**/*.scss`
};

// build
const BUILD_PATH = {
  view: `${BUILD}`,
  style: {
    dir: `${BUILD}/assets/css`
  }
};

// colors
const COLORS = {
  error: 'red',
  success: 'green',
  build: {
    name: 'magenta',
    size: 'cyan'
  }
};

// renameOptions
const renameOptions = {
  suffix: '.min'
};

/* ------------------------------------------------------------------------------
@name: Server
@description: Config Server, Reload and devServer browserSync
--------------------------------------------------------------------------------- */
const server = browserSync.create();

export const reload = done => {
  server.reload();
  done();
};

export const devServer = done => {
  server.init({
    ghostMode: true,
    notify: false,
    server: {
      baseDir: BUILD_PATH.view,
    },
    open: true
  });
  done();
};

/* ------------------------------------------------------------------------------
@name: CompilePug
@description: Compiles Pug files to HTML
--------------------------------------------------------------------------------- */
export const compilePug = () => {
  return src(DEV_PATH.view.pages)
    .pipe(pug())
    .on("error", notify.onError(
      (err) => {
        return '\nProblem file : ' + c[COLORS.error].bold(err.message, err.path);
      }
    ))
    .pipe(htmlBeautify(optionsHTML))
    .pipe(dest(BUILD_PATH.view))
    .pipe(server.stream())
    .on('end', () => {
      console.log(c[COLORS.success].bold('--------- Pug finished compiling! ---------'));
    });
};

/* ------------------------------------------------------------------------------
@name: compileStyle
@description: Compiles Pug files to HTML
--------------------------------------------------------------------------------- */
export const compileStyle = () => {
  return src(DEV_PATH.style)
    .pipe(errorHandle())
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", notify.onError(
      (err) => {
        return '\nProblem file : ' + c[COLORS.error].bold(err.message, err.path);
      }
    )))
    .pipe(postcss([autoprefixer()], {
      syntax: postcssScss
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(BUILD_PATH.style.dir))
    .pipe(rename(renameOptions))
    .pipe(dest(BUILD_PATH.style.dir))
    .pipe(server.stream())
    .on('end', () => {
      console.log(c[COLORS.success].bold('--------- Style finished compiling! ---------'));
    });
};


/* ------------------------------------------------------------------------------
@name: Task Watch
@description: Watches for changes to files
--------------------------------------------------------------------------------- */
export const devWatch = (done) => {
  // Shows that run "watch" mode
  global.watch = true;

  // PUG
  watch(DEV_PATH.view.watch, compilePug);

  // SCSS
  watch(DEV_PATH.style, compileStyle);

  return done();

};


/* ------------------------------------------------------------------------------
@name: Default Task
@description: Default Task will be run at run gulp
--------------------------------------------------------------------------------- */
exports.default = series(
  compileStyle,
  compilePug,
  devServer,
  devWatch
);