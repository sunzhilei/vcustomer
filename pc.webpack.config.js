/**
 * Created by sunzhilei on 2016/1/9.
 * compile command: webpack --config webpack.config.js
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        "customer/index": ['./frontend/customer/src/index.js'],

        "agent/reg": ['./frontend/agent/src/reg.js'],
        "agent/login": ['./frontend/agent/src/login.js'],
        "agent/index": ['./frontend/agent/src/index.js'],
        "agent/admin": ['./frontend/agent/src/admin.js']
    },
    output: {
        publicPath: 'http://127.0.0.1/frontend/dist/',
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
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
};