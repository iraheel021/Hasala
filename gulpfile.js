'use strict';

var gulp = require('gulp');
gulp.paths = {
	src: 'src',
	dist: 'dist'
};

require( 'require-dir' )( './gulp' );

gulp.task( 'build', [ 'clean' ], function()
{
	gulp.start( 'buildapp' ); 
} );
gulp.task( 'default', [ 'clean' ], function()
{
	gulp.start( 'watch' );
} );

gulp.task( 'js', function()
{
	return gulp.src( 'src/core/js/**/*.js' )
		.pipe( gulp.dest( 'dist/js/' ) );
} );
gulp.task( 'css', function()
{
	return gulp.src( 'src/core/css/**/*.css' )
		.pipe( gulp.dest( 'dist/css/' ) );
} );

gulp.task( 'fonts', function()
{
	return gulp.src( 'src/core/fonts/**/*.ttf' )
		.pipe( gulp.dest( 'dist/fonts/' ) );
} );