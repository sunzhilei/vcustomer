/**
 * Created by sunzhilei on 2016/1/9.
 * compile command: webpack --config webpack.config.js
 */
var webpack = require('webpack');
var clientPlugin = new webpack.optimize.CommonsChunkPlugin('client.js');

module.exports = {
    entry: {
        'client/index': ["./frontend/client/src/index.js"]
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
        clientPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
};