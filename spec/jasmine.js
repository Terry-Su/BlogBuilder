module.exports = {
  spec_dir  : "/",
  spec_files: [
		/**
		 * Main
		 */
		// "main/__test__/index/index.spec.js"

    /**
     * Server index
     */
    "server/build/__test__/index/index.spec.js"

    /**
     * Server - getBlogsOriginInfo
     */
		// "server/build/__test__/getBlogsOriginInfo/index.spec.js",
		
		/**
		 * All
		 */
    // "**/*[sS]pec.js",		
  ],
  helpers                     : [],
  stopSpecOnExpectationFailure: false,
  random                      : false
}
