'use strict';

var gulp = require( 'gulp' );

var paths = gulp.paths;

var $ = require( 'gulp-load-plugins' )();

gulp.task( 'styles', [], function()
{
	var sassOptions = {
		style: 'expanded',
		includePaths: [
			'bower_components'
		]
	};

	return gulp.src( [
		paths.src + '/app/app.scss',
		paths.src + '/app/**/*.scss'
	] )
		.pipe( $.concat( 'app.css' ) )
		.pipe( $.sass( sassOptions ) )
		.pipe( $.autoprefixer( { browsers: [ '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1' ] } ) )
		.on( 'error', function handleError( err )
		{
			console.error( err.toString() );
			this.emit( 'end' );
		} )
		.pipe( gulp.dest( paths.dist + '/styles/' ) );

} );