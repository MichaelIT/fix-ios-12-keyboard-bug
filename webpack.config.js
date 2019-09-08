var path           = require('path')
var webpack = require('webpack')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var config = require('./package.json');

console.log(path.resolve(__dirname, 'src/index.js'))

module.exports = {
    mode: "production",
    entry  : path.resolve(__dirname, 'src/index.js'),
    output : {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'patch-ios12-webview-keyboard.min.js'
    },
    plugins: [
        new UglifyJSPlugin(),
        new webpack.BannerPlugin('patch-ios12-webview-keyboard version: ' + config.version)
    ]
}