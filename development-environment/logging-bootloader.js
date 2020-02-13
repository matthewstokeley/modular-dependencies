#! /usr/bin/node

var exec = require( 'exec' )
var fs = require( 'fs' )

if ( ! fs.open( 'winston.config.js' ) )
	exec( 'touch winston.config.js' )

// && bootload config 
exec( 'npm install winston --save-dev && curl RESOURCE >> winston.config.js' )

