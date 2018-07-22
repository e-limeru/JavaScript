const gulp = require('gulp');
	  gulpif = require('gulp-if'),
	  useref = require('gulp-useref'), 
	  uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      csso = require('gulp-csso'),
      sass = require('gulp-sass'); 

gulp.task('sass', function () { 
 gulp.src([
 	'./dev/scss/style.scss',
 	'./dev/scss/style2.scss',
 	])
 .pipe(concat('main.scss'))
 .pipe(sass().on('error', sass.logError)) 
 .pipe(csso())
 .pipe(gulp.dest('./build/css/'));
});
 
gulp.task('js', function() {
    gulp.src([
                './dev/js/plagin.js',
                './dev/js/script.js'
        ])
        .pipe(concat('main.js'))
        .pipe(uglify()) 
        .pipe(gulp.dest('./build/js/')) 
});

gulp.task('build', function() {
    gulp.src('./dev/*.html'
        )
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', sass()))
        .pipe(gulpif('*.css', csso()))
        .pipe(gulp.dest('build'));
});


gulp.task('watch', function () {
 gulp.watch('./dev/scss/*.scss', ['sass']); 
 gulp.watch('./dev/js/*.js', ['js']);
});