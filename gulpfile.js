const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); //use 'node-sass' or 'sass'
const browserSync = require('browser-sync').create();

//compile scss en css
function style(){
    // 1. scss file(s) location
    return gulp.src(['./sass/estilo.scss'])
    // 2. Run sass compiler
    //.pipe(sass()) // no minified, no errors logs
    //.pipe(sass().on('error', sass.logError)) //No minified, with errors logs
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Minified, with errors logs
    // 3. Compiled css file dest
    .pipe(gulp.dest('./css'))
    //4. Stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch(){
    var archivos = [
        './css/estilo.css',
        './*.php',
        './inc/*.php',
        './template-parts/*.php',
        './js/*.js',
        './*.css',
        './img/*.jpg',
        './img/*.png',
        './img/*.svg'
    ];
    browserSync.init(archivos, {
        proxy: 'http://localhost/poblacion/',
        notify: false
    })
    gulp.watch(['./sass/*.scss'], style);
    //gulp.watch('../inc/*.php').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;
