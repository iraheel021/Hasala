'use strict';

var path = require( 'path' );
var gulp = require( 'gulp' );

var paths = gulp.paths;

var $ = require( 'gulp-load-plugins' )( {
	pattern: [ 'gulp-*', 'main-bower-files', 'uglify-save-license', 'del' ]
} );

gulp.task( 'bower', function()
{
	// var wiredepOptions = {
	// 	directory: 'bower_components',
	// 	exclude: [/bootstrap\.css/, /foundation\.css/, /material-design-iconic-font\.css/, /default\.css/]
	// };

	gulp.src( './bower.json' )
	//.pipe( concat( 'vendor.min.js' ) )
		.pipe( $.mainBowerFiles('**/*.js') ) 
		.pipe( $.ngAnnotate() )
		.pipe( $.uglify( { mangle: false, output: { ascii_only: true } } ) )
		.pipe( $.concat( 'vendor.js' ) )
		.pipe( gulp.dest( paths.dist + '/scripts/' ) )
		.pipe( $.size( { title: paths.dist + '/', showFiles: true } ) );

	gulp.src( './bower.json')
		.pipe( $.mainBowerFiles( '**/*.css' ) )
		.pipe( $.concat( 'vendor.css' ) )
		.pipe( $.csso() )
		.pipe( gulp.dest( paths.dist + '/styles/' ) )
		.pipe( $.size( { title: paths.dist + '/', showFiles: true } ) );

	return true;
} );

gulp.task( 'bootstrap', function()
{
	return gulp.src( 'bower_components/bootstrap/**/*' )
		.pipe( gulp.dest( 'dist/bootstrap/' ) );
} );

gulp.task( 'font-awesome', function()
{
	return gulp.src( 'bower_components/font-awesome/**/*' )
		.pipe( gulp.dest( 'dist/font-awesome/' ) );
} );

gulp.task( 'scripts', function()
{
	gulp.src( path.join( paths.src, '/app/**/*.js' ) )
		// .pipe( $.eslint() )
		// .pipe( $.eslint.format() )
		.pipe( $.angularFilesort() )
		.pipe( $.ngAnnotate() )
		//.pipe( minifyjs() )
		.pipe( $.concat( 'app.js' ) )
		.pipe( gulp.dest( paths.dist + '/scripts' ) )
		.pipe( $.uglify( { mangle: true, output: { ascii_only: true } } ) )
		.pipe( $.concat( 'app.min.js' ) )
		.pipe( gulp.dest( paths.dist + '/scripts' ) )
		.pipe( $.size( { title: paths.dist + '/', showFiles: true } ) );
} );

gulp.task( 'html', function()
{
	gulp.src( paths.src + '/app/**/*.html' )
		.pipe( $.minifyHtml( {
			empty: true,
			spare: true,
			quotes: true
		} ) )
		.pipe( $.angularTemplatecache( 'html.js', {
			module: 'app',
			root: 'app'
		} ) )
		.pipe( gulp.dest( paths.dist + '/scripts/' ) )
		.pipe( $.size( { title: paths.dist + '/', showFiles: true } ) );
} );

gulp.task( 'assets', function()
{
	return gulp.src( paths.src + '/assets/**/*' )
		.pipe( gulp.dest( 'dist/assets/' ) );
} );