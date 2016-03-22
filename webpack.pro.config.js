/**
 * Created by sunzhilei on 2016/1/9.
 * compile command: webpack --progress --profile --colors --config webpack.config.js
 */
var webpack = require('webpack');

var config = require("./webpack.config.js");

config.output.publicPath = 'http://vcustomer.applinzi.com/frontend/dist/';

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = config;