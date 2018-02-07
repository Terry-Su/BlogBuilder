const PATH = require( "path" )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )

module.exports = {
  module: {
    rules: [
      {
        test   : /\.ts.*?$/,
        use    : "ts-loader",
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
			'.tsx',
			'.ts',
			'.js'
		],
  },
}