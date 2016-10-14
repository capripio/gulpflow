var env = "development"; //production or development
var gulp =      require('gulp'),
    ts  =       require('gulp-typescript'),
    contact =   require('gulp-concat'),
    sass =      require('gulp-sass'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minify =    require('gulp-minify'),
    cssmin =    require('gulp-cssmin'),
    gif =    require('gulp-if');

var tsSources = ['./components/typescript/**/*.ts'];
var jsSoruces = ['./components/scripts/**/*.js'];
var sassSources = ['./components/scss/**/*.scss'];
var cssSources = ['./components/styles/**/*.css'];
var htmlSoruces = ['./builds/'+env+'/**/*.html']

gulp.task('typescript',function(){
    gulp.src(tsSources)
    .pipe(sourcemaps.init())
    .pipe(ts())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./components/scripts/'))
});

var is_production = function(){
    return env === 'production'?true:false;
}

var is_development = function(){
    return !is_production();
}
gulp.task('js',function(){
    gulp.src(jsSoruces)
    .pipe(sourcemaps.init())
    .pipe(contact('scripts.js'))
    .pipe(gif(is_production,minify({
        noSource:true,
        ext:{
            min:'.js'
        }
    })))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./builds/'+env+'/js/'))
    .pipe(livereload());
});

gulp.task('sass',function(){
    gulp.src(sassSources)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./components/styles/'));
});

gulp.task('style',function(){
    gulp.src(cssSources)
    .pipe(gif(is_development,sourcemaps.init()))
    .pipe(contact('styles.css'))
    .pipe(autoprefixer())
    .pipe(gif(is_production,cssmin()))
    .pipe(gif(is_development,sourcemaps.write()))
    .pipe(gulp.dest('./builds/'+env+'/css/'))
    .pipe(livereload());
});

gulp.task('html',function(){
    gulp.src(htmlSoruces)
    .pipe(livereload());
});

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch(tsSources,['typescript']);
    gulp.watch(jsSoruces,['js']);
    gulp.watch(sassSources,['sass']);
    gulp.watch(cssSources,['style']);
    gulp.watch(htmlSoruces,['html']);

});

gulp.task('default',['html','typescript','js','sass','style','watch']);
