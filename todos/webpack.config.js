/**
 * Created by youngmoon on 11/7/15.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        filename: './static/bundle.js'
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: [ 'babel' ],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css?$/,
            loaders: [ 'style', 'raw' ],
            include: __dirname
        }]
    }
}