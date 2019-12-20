let gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    watch = require('gulp-watch'),
    concat = require("gulp-concat"), 
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    pug = require('gulp-pug'),
    cleanCSS = require('gulp-clean-css'),
    gcmq = require('gulp-group-css-media-queries'),
    svgSprite = require('gulp-svg-sprite'),
    browserify = require('gulp-browserify'),
    changed = require('gulp-changed');
    
    
/* scss */
gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(cleanCSS({
            compatibility: 'ie8',
            format: 'keep-breaks'
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream())
});
/* scss end */

/* watch */
gulp.task('watch', function(){
    browserSync.init({
        server: {
            baseDir : './dist/'
        }
    });
    gulp.watch("./src/scss/**/*scss", gulp.series('sass'));
    gulp.watch("./src/pug/**/*.pug", gulp.series('pug'));
    gulp.watch("./src/js/*.js", gulp.series('js'));
});
/* watch end */

/* pug */
gulp.task('pug', function() {
    return gulp.src('./src/pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('dist/'))						
    .pipe(browserSync.reload({
        stream: true							
    }));
});
/* pug end */

/* js */
gulp.task('js', function () {
    return gulp.src('./src/js/main.js')
        .pipe(browserify())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.reload({
            stream: true							
        }));
});
/* end js */

/* svg-sprite */
gulp.task('svgSprite', function () {
    return gulp.src('./dist/img/**/*.svg') // svg files for sprite
    .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "sprite.svg"  //sprite file name
                }
            },
        }
    ))
    .pipe(gulp.dest('./dist/img/sprite/'));
});
/* svg-sprite end */