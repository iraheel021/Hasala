'use strict';

var path = require( 'path' );
var gulp = require( 'gulp' );
var paths = gulp.paths;

gulp.task( 'watch', [ 'buildapp' ], function()
{
	gulp.watch( [
			path.join( paths.src, '/*.html' ),
			'bower.json'
		],
		function( event )
		{
			gulp.start( 'buildapp' );
		} );


	gulp.watch( [
		path.join( paths.src, '/app/**/*.css' ),
		path.join( paths.src, '/app/**/*.scss' )
	], function( event )
	{
		gulp.start( 'styles' );
	} );

	gulp.watch( path.join( paths.src, '/app/**/*.js' ), function( event )
	{
		gulp.start( 'scripts' );

	} );

	gulp.watch( path.join( paths.src, '/app/**/*.html' ), function( event )
	{
		gulp.start( 'html' );
	} );

	gulp.watch( path.join( paths.src, '/app/**/*.json' ), function( event )
	{
		gulp.start( 'json' );

	} );

} );
