const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'ReactByWebpack',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.(jsx?)$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            cacheCompression: false
        }
      },
      { test: /\.(tsx?)$/, 
        exclude: /node_modules/, 
        use: [
        'babel-loader',
        { loader: 'ts-loader', options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        }}
      ]},
      { test: /\.less$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'less-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
    // fork 一个进程进行检查：
    new ForkTsCheckerWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    port: 7000,
    compress: true
  }
}