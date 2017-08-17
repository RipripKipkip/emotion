var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');




gulp.task('sass', function(done) {
	gulp.src('scss/styles.sass')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(gulp.dest('css/'))
		.on('end', done);
});

// Tâche "watch" = je surveille *less ---> Accessible via "gulp" (tout court)
gulp.task('default', ['sass', 'browser-sync'], function() {
	gulp.watch('/css/*.css', ['sass']);
});

gulp.task('browser-sync', function() {
	browserSync.init(["css/*.css", "js/*.js"], {
		server: {
			baseDir: "./"
		}
	});
});
