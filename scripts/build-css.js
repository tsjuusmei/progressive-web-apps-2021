const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')

gulp.src([
  "./static/styles/main.css",
  "./static/styles/detail.css"
])
  .pipe(concat("index.css"))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest("./public/css"))