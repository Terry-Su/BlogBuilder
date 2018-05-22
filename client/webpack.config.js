const PATH = require("path")


module.exports = {
  entry: {
    'script/nav.bundle.js': PATH.resolve(__dirname, './src/nav/app.tsx'),
    'script/detail.bundle.js': PATH.resolve(__dirname, './src/detail/app.tsx'),
  },
  output: {
    path: PATH.resolve(__dirname, './build'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.ts.*?$/,
        use: "ts-loader",
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