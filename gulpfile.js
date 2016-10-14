var env = "development";
var gulp =      require('gulp'),
    ts  =       require('gulp-typescript'),
    contact =   require('gulp-concat'),
    sass =      require('gulp-sass'),
    livereload = require('gulp-livereload');

var tsSources = ['./components/typescript/**/*.ts'];
var jsSoruces = ['./components/scripts/**/*.js'];
var sassSources = ['./components/scss/**/*.scss'];
var cssSources = ['./components/styles/**/*.css'];
var htmlSoruces = ['./builds/'+env+'/**/*.html']

gulp.task('typescript',function(){
    gulp.src(tsSources)
    .pipe(ts())
    .pipe(gulp.dest('./components/scripts/'))
});


gulp.task('js',function(){
    gulp.src(jsSoruces)
    .pipe(contact('scripts.js'))
    .pipe(gulp.dest('./builds/'+env+'/js/'))
    .pipe(livereload());
});

gulp.task('sass',function(){
    gulp.src(sassSources)
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./components/styles/'));
});

gulp.task('style',function(){
    gulp.src(cssSources)
    .pipe(contact('styles.css'))
    .pipe(gulp.dest('./builds/'+env+'/css/'))
    .pipe(livereload());
});

gulp.task('html',function(){
    gulp.src(htmlSoruces)
    .pipe(gulp.dest('./builds/'+env+'/css/'))
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
