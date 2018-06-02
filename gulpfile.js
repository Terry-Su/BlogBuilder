const PATH = require( 'path' )
const gulp = require( "gulp" )
const ts = require( "gulp-typescript" )
const tsProject = ts.createProject( "tsconfig.json" )
const rimraf = require( "rimraf" )
const sourcemaps = require( 'gulp-sourcemaps' )

const buildPathStr = 'build'
const buildPath = PATH.resolve( __dirname, `./server/${ buildPathStr }` )
const srcOtherFilesGlobs = [
	// 'src/**/*.json',
	// 'src/**/\.*/*.json',
	'server/src/**/*',
	'server/src/**/\.*/*',
	'!server/src/**/*.ts'
]
// const watchingSrcGlob = srcOtherFilesGlobs
const watchingSrcGlob = [
	'server/src/**/*',
	'server/src/**/\.*/*',
]

let watcher = undefined

function deleteBuild() {
	return Promise.resolve( new Promise( ( resolve ) => {
		rimraf( buildPath, () => {
			resolve()
		} )
	} ) )
}

function asyncMainTs() {
	return tsProject.src()
		.pipe( sourcemaps.init() )
		.pipe( tsProject() ).js
		.pipe( sourcemaps.write( '.', {
			sourceRoot: function( file ) {
					return PATH.resolve( file.cwd, './server/src' )
			}
		} ) )
		.pipe( gulp.dest( buildPath ) )
}

function asyncMainOther() {
	return gulp.src( srcOtherFilesGlobs )
		.pipe( gulp.dest( buildPath ) )
}

function main() {
	try {
		deleteBuild().then( () => {
			asyncMainOther()
			asyncMainTs()
		} )
	} catch (e) {
		watcher.remove()
		watcher.end()
		watcher = gulp.watch( watchingSrcGlob )
		watcher.on( 'change', main )
	}

}

watcher = gulp.watch( watchingSrcGlob )
watcher.on( 'change', main )

gulp.task( "default", () => {
	main()
} )



