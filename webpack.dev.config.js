/**
 * Created by sunzhilei on 2016/1/9.
 * compile command: webpack --config webpack.config.js
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        //c_index: ["./frontend/customer/src/index.js"],
        //c_customerList: ["./frontend/customer/src/customerList.js"],

        a_index: ["./frontend/agent/src/index.js"]
    },
    output: {
        path: __dirname + '/frontend/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css")
        }]
    },
    plugins: [
        commonsPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        //new HtmlWebpackPlugin({
        //    filename: './frontend/dist/agent/index.html',
        //    template: './frontend/agent/index.html',
        //    inject: 'body',
        //    hash: true,
        //    minify: {
        //        removeComments: true,
        //        collapseWhitespace: false
        //    }
        //}),
        new ExtractTextPlugin("[name].bundle.css")
    ]
};