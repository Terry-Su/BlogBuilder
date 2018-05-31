import * as FS from "fs-extra"

export default function( path: string ) {
	let res: boolean = false

	try {
		res = FS.lstatSync( path ).isFile()
	} catch ( e ) {}

	return res
}
