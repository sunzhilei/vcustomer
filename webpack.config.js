/**
 * Created by sunzhilei on 2016/1/9.
 * compile command: webpack --progress --profile --colors --config webpack.config.js
 */
var webpack = require('webpack');

var config = {
    entry: {
        "customer/index": ['./frontend/customer/src/index.js'],

        "agent/reg": ['./frontend/agent/src/reg.js'],
        "agent/login": ['./frontend/agent/src/login.js'],
        "agent/index": ['./frontend/agent/src/index.js'],
        "agent/admin": ['./frontend/agent/src/admin.js'],

        'client/index': ["./frontend/client/src/index.js"]
    },
    output: {
        publicPath: 'http://localhost/frontend/dist/',
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
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=8192&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=8192&mimetype=application/font-woff2"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=8192&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=8192&mimetype=image/svg+xml"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
}

module.exports = config;