/**
 * Created by sunzhilei on 2016/1/9.
 * compile command: webpack --progress --profile --colors --config webpack.config.js
 */
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var config = {
    entry: {
        "customer/index": ['./frontend/customer/src/index.js'],

        "agent/reg": ['./frontend/agent/src/reg.js'],
        "agent/login": ['./frontend/agent/src/login.js'],
        "agent/index": ['./frontend/agent/src/index.js'],
        "agent/admin": ['./frontend/agent/src/admin.js'],

        "client/index": ["./frontend/client/src/index.js"]
    },
    output: {
        publicPath: 'http://localhost:5050/frontend/dist/',
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
        }, {
            test: /.(png|jpg|jpeg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.woff$/,
            loader: "url-loader?limit=8192&mimetype=application/font-woff"
        }, {
            test: /\.woff2$/,
            loader: "url-loader?limit=8192&mimetype=application/font-woff2"
        }, {
            test: /\.ttf$/,
            loader: "url-loader?limit=8192&mimetype=application/octet-stream"
        }, {
            test: /\.eot$/,
            loader: "file-loader"
        }, {
            test: /\.svg$/,
            loader: "url-loader?limit=8192&mimetype=image/svg+xml"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new CommonsChunkPlugin("customer.js", ["customer/index"]),
        new CommonsChunkPlugin("agent.js", ["agent/reg", "agent/login", "agent/index", "agent/admin"]),
        new CommonsChunkPlugin("client.js", ["client/index"]),

        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
}

module.exports = config;