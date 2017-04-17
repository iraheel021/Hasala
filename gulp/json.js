'use strict';

var gulp = require( 'gulp' );

gulp.task( 'json', function()
{
    return gulp.src( [
        'src/core/json/*.json'
    ] )
        .pipe( gulp.dest( 'dist/json/' ) );
} );