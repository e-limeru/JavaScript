const gulp = require('gulp');
	  gulpif = require('gulp-if'), // Минификация JS
	  useref = require('gulp-useref'), 
	  uglify = require('gulp-uglify'), // Минификация JS
      concat = require('gulp-concat'), // Склейка файлов
      csso = require('gulp-csso'), // Минификация CSS
      sass = require('gulp-sass'); // Конверстация SASS (SCSS) в CSS

// Задача "sass". Запускается командой "gulp sass"
gulp.task('sass', function () { 
 gulp.src('./dev/scss/style.scss') // файл, который обрабатываем
 .pipe(sass().on('error', sass.logError)) // конвертируем sass в css
 .pipe(csso()) // минифицируем css, полученный на предыдущем шаге
 .pipe(gulp.dest('./build/css/')); // результат пишем по указанному адресу
});
 
// Задача "js". Запускается командой "gulp js"
gulp.task('js', function() {
    gulp.src([
                './dev/js/plagin.js',
                './dev/js/script.js'
        ]) // файлы, которые обрабатываем
        .pipe(concat('main.js')) // склеиваем все JS
        .pipe(uglify()) // получившуюся "портянку" минифицируем 
        .pipe(gulp.dest('./build/js/')) // результат пишем по указанному адресу
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