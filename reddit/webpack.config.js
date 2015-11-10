/**
 * Created by youngmoon on 11/7/15.
 */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const config = {
    entry: [
        './client.js'
    ],
    output: {
        filename: './static/bundle.js'
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }, {
                test: /(index).scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    postcss: [autoprefixer]
}

if (process.env.NODE_ENV === 'production') {
    config.output.filename = './static/dist.js';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;