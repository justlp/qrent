var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var watch = require('gulp-watch');
var oldie = require('oldie');
var rename = require("gulp-rename");
var clearfix = require('postcss-clearfix');
var focus = require('postcss-focus');
var position = require('postcss-position');

var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var optipng = require('imagemin-optipng');

var sprites = require('postcss-sprites');
var spritesmith = require('gulp.spritesmith');


gulp.task('sprite', function () {
   return gulp.src('./src/img/sprite.css')
       .pipe( postcss( [sprites(
           {
               stylesheetPath: './public',
               spritePath    : './public/img/sprite.png',
               retina        : true,
               outputDimensions: true
           }
       )] ))
       .pipe(gulp.dest('./public'));
});

// img
gulp.task('img-min', function () {
    return gulp.src('./src/img/**/*')
        .pipe(
            jpegtran({progressive: true})(),
            optipng({optimizationLevel: 7})()
        )
        .pipe(gulp.dest('dist/images'));
});


// css
gulp.task('css-to-public', function () {
    return gulp.src('./src/css/**/main.css')
        .pipe(postcss([
            require('postcss-partial-import')({}),
            require('postcss-nested'),
            require('postcss-all-link-colors'),
            require('postcss-center'),
            require('postcss-property-lookup'),
            clearfix(),
            position(),
            autoprefixer({browsers: ['> 1%', 'IE 8']}),
            cssnano()
        ]))
        .pipe(gulp.dest('./public'));
});
// todo: remove
gulp.task('oldie', function () {
    return gulp.src('./public/main.css')
        .pipe(postcss([oldie()]))
        .pipe(rename({
            suffix: '-old-ie'
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('css:watch', function () {
    gulp.watch('./src/css/**/*.css', ['css-to-public']);
});

gulp.task('default', function () {
    // place code for your default task here
});

