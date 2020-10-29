// require modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');

// target source scss
var input = {
    'sass': 'src/stylesheets/**/*.scss'
};

// output css
var output = {
    'css': 'dist/fe/css'
};

// gulp.task('default', ['styles', 'watch', 'clean']);
// run the watch task when gulp is called without arguments
// gulp.task('default', ['watch']);

// compile SCSS to CSS files
var prefixerOptions = {
    cascade: false
};
gulp.task('build-css', function () {
    return gulp.src(input.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(prefixerOptions))
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.css))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// styles SCSS to CSS files
gulp.task('styles', () => {
    return gulp.src(input.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(output.css));
});


// watch SCSS to CSS files
gulp.task('watch', () => {
    gulp.watch(input.sass, (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

// clean CSS files
gulp.task('clean', () => {
    return del([
        'dist/fe/css/main.css',
    ]);
});