/**
 * Created by sunzhilei on 2016/1/9.
 * compile command: webpack --progress --profile --colors --config webpack.config.js
 */
var webpack = require('webpack');

var config = require("./webpack.config.js");

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        test: /(\.jsx|\.js)$/,
        compress: {
            warnings: false
        },
    })
);

module.exports = config;