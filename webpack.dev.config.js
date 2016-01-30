/**
 * Created by sunzhilei on 2016/1/9.
 * compile command: webpack --config webpack.config.js
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        c_index: ["./frontend/customer/src/index.js"],
        //c_customerList: ["./frontend/customer/src/customerList.js"],

        a_reg: ["./frontend/agent/src/reg.js"],
        a_login: ["./frontend/agent/src/login.js"],
        a_index: ["./frontend/agent/src/index.js"],
        a_admin: ["./frontend/agent/src/admin.js"]
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
            loader: 'style-loader!css-loader'
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
        //})
    ]
};