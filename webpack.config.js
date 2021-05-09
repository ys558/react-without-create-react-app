const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'ReactByWebpack',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.(jsx?|tsx?)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.less$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'less-loader']}
    ]
  },
 plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 7000,
    compress: true
  }
}