'use strict';

var gulp = require( 'gulp' );
var path = require( 'path' );

var paths = gulp.paths;

var $ = require( 'gulp-load-plugins' )( {
	pattern: [ 'gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
} );

gulp.task( 'images', function()
{
	return gulp.src( paths.src + '/assets/images/**/*' )
		.pipe( gulp.dest( paths.dist + '/assets/images/' ) );
} );

gulp.task( 'index', function()
{
	return gulp.src( paths.src + '/*.html' )
		.pipe( gulp.dest( paths.dist + '/' ) );
} );

gulp.task( 'htaccess', function()
{
	return gulp.src( paths.src + '/.htaccess' )
		.pipe( gulp.dest( paths.dist + '/' ) );
} );

// gulp.task( 'fonts', function()
// {
// 	return gulp.src( './bower.json')
// 		.pipe( $.mainBowerFiles() )
// 		.pipe( $.filter( '**/*.{eot,otf,svg,ttf,woff,woff2}' ) )
// 		.pipe( $.flatten() )
// 		.pipe( gulp.dest( paths.dist + '/fonts/' ) );
// } );

gulp.task( 'misc', function()
{
	return gulp.src( paths.src + '/favicon.png' )
		.pipe( gulp.dest( paths.dist + '/' ) );
} );
gulp.task( 'clean', function()
{
	return $.del( [ path.join( paths.dist, '/*' ) ] );
} );

gulp.task( 'buildapp', [ 'index','html',  'bower', 'scripts', 'bootstrap', 'font-awesome', 'assets', 'styles', 'htaccess', 'images', 'fonts', 'misc', 'json', 'js', 'css' ] );