/**
 * Created by sunzhilei on 2016/1/9.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require("./webpack.config.js");

var entry = config.entry;
for (x in entry){
    entry[x].unshift("webpack-dev-server/client?http://localhost", "webpack/hot/dev-server");
}

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    noInfo: true,
    historyApiFallback: true,
    stats: { colors: true },
}).listen(80, 'localhost', function (err, result) {
    if (err) console.log(err);
    console.log('Listening at localhost');
});