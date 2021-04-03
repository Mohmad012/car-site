var gulp 				= require("gulp"),
	concat 				= require('gulp-concat'),
	autoprefixer 		= require('gulp-autoprefixer'),
	sass 				= require('gulp-sass'),
	pug 				= require('gulp-pug'),
	watch 				= require('gulp-watch'),
	livereload 			= require('gulp-livereload'),
	sourcemaps 			= require('gulp-sourcemaps'),
	uglify 				= require('gulp-uglify'),
	notify 				= require("gulp-notify"),
	zip 				= require('gulp-zip'),
	gutil 				= require( 'gulp-util' ),
	ftp 				= require( 'vinyl-ftp' ),
	minify 				= require('gulp-minify');

// HTML Task
gulp.task('html_kiv' , function(){
	return gulp.src('stage/html/kiv/kiv*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/kiv'))
				.pipe(livereload())
});

gulp.task('html_bejo' , function(){
	return gulp.src('stage/html/bejo/bejo*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/bejo'))
				.pipe(livereload())
});

gulp.task('html_tesla' , function(){
	return gulp.src('stage/html/tesla/tesla*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/tesla'))
				.pipe(livereload())
});

gulp.task('html_ferrari' , function(){
	return gulp.src('stage/html/ferrari/ferrari*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/ferrari'))
				.pipe(livereload())
});

gulp.task('html_home' , function(){
	return gulp.src('stage/html/home/homepage.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/home'))
				.pipe(livereload())
});

gulp.task('html_cards_bejo' , function(){
	return gulp.src('stage/html/cards/bejo/card*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/cards'))
				.pipe(livereload())
});

gulp.task('html_cards_tesla' , function(){
	return gulp.src('stage/html/cards/tesla/card*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/cards'))
				.pipe(livereload())
});

gulp.task('html_cards_kiv' , function(){
	return gulp.src('stage/html/cards/kiv/card*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/cards'))
				.pipe(livereload())
});

gulp.task('html_cards_ferrari' , function(){
	return gulp.src('stage/html/cards/ferrari/card*.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/cards'))
				.pipe(livereload())
});

gulp.task('html_contact' , function(){
	return gulp.src('stage/html/contact/contact.pug')
				.pipe(pug({
					pretty:true
				}))
				.pipe(gulp.dest('dist/contact'))
				.pipe(livereload())
});

// CSS Task
gulp.task('css' , function(){

	return gulp.src(['stage/css/**/*.css' , 'stage/css/**/*.scss'])
				.pipe(sourcemaps.init())
				.pipe(sass({outputStyle: 'compressed'}).on('error' , sass.logError))
				.pipe(autoprefixer("last 2 version")) // Add THis In Package.json [ "browserlist" :["last 2 version","> 2%"] ] After ==> "dependencies"
				.pipe(concat('main.css'))
				.pipe(sourcemaps.write('.'))
				.pipe(gulp.dest('dist/css'))
				.pipe(livereload())
});

// JS Task
gulp.task('js' , function(){
	return gulp.src('stage/js/*.js')
				.pipe(concat('main.js'))
				.pipe(minify())
				.pipe(gulp.dest('dist/js'))
				.pipe(livereload())
});

// Watch Task
gulp.task('watch' , function(){
	livereload.listen();
	require('./server.js')
	gulp.watch('stage/html/kiv/kiv*.pug' , ['html_kiv'])
	gulp.watch('stage/html/bejo/bejo*.pug' , ['html_bejo'])
	gulp.watch('stage/html/tesla/tesla*.pug' , ['html_tesla'])
	gulp.watch('stage/html/ferrari/ferrari*.pug' , ['html_ferrari'])
	gulp.watch('stage/html/home/homepage.pug' , ['html_home'])
	gulp.watch('stage/html/cards/bejo/card*.pug' , ['html_cards_bejo'])
	gulp.watch('stage/html/cards/tesla/card*.pug' , ['html_cards_tesla'])
	gulp.watch('stage/html/cards/kiv/card*.pug' , ['html_cards_kiv'])
	gulp.watch('stage/html/cards/ferrari/card*.pug' , ['html_cards_ferrari'])
	gulp.watch('stage/html/contact/contact.pug' , ['html_contact'])
	gulp.watch(['stage/css/**/*.css' , 'stage/css/**/*.scss'] , ['css'])
	gulp.watch('stage/js/*.js'  , ['js'])
});

// Default Watch
gulp.task('default' , ['watch'])