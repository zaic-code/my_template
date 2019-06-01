const gulp = require('gulp');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');



function styl(){
    return gulp.src('./src/stylus/*.styl')
            .pipe(stylus())
            .pipe(autoprefixer({
                browsers: ['<0.001%'],
                cascade: true
            }))
            .pipe(cleanCSS({level: 2}))            
            .pipe(gulp.dest('./dist/css'))
            .pipe(browserSync.stream());  
            
}

function js(){
    return gulp.src('./src/js/*.js')                
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(uglify({
                    toplevel:true                  
                }))
                // .pipe(concat('all.js'))
             .pipe(gulp.dest('./dist/js'))
             .pipe(browserSync.stream());  
}

function serv (){
    browserSync.init({
        server: './dist'
    });        
    gulp.watch('./src/js/*.js', js);
    gulp.watch('./src/stylus/*.styl', styl);
    gulp.watch("./dist/*.html").on('change', browserSync.reload);
}


gulp.task('styl', styl);
gulp.task('js', js);
gulp.task('serv', serv);