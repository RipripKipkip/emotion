var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// gulp.task('sass', function () {
//     gulp.src('scss/styles.sass')
//         .pipe(sass({includePaths: ['scss']}))
//         .pipe(gulp.dest('css'));
// });

gulp.task('sass', function (done) {
	gulp.src('scss/styles.sass')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(gulp.dest('css/'))
		.on('end', done);
});

// gulp.task('sass', function (done) {
// 	gulp.src(['./scss/styles.sass')
// 		.pipe(plumber())
// 		.pipe(sass())
// 		.on('error', sass.logError)
// 		.pipe(gulp.dest('./css/'))
// 		.pipe(minifyCss({
// 			keepSpecialComments: 0
// 		}))
// 		.pipe(rename({
// 			extname: '.min.css'
// 		}))
// 		.pipe(gulp.dest('./css/'))
// 		.on('end', done);
// });

// Tâche "watch" = je surveille *less
gulp.task('watch', ['sass', 'browser-sync'], function () {
  gulp.watch('/css/*.css', ['sass']);
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

// gulp.task('default', ['sass', 'browser-sync'], function () {
//     gulp.watch("scss/*.scss", ['sass']);
// });
