/**
 * Created by sunzhilei on 2016/1/9.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require("./webpack.dev.config.js");

var entry = config.entry;
for (x in entry){
    entry[x].unshift("webpack-dev-server/client?http://127.0.0.1:3000", "webpack/hot/dev-server");
}

//config.output["publicPath"] = "http://127.0.0.1:3000/frontend/dist/build";

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    noInfo: true,
    historyApiFallback: true,
    stats: { colors: true },
}).listen(3000, '127.0.0.1', function (err, result) {
    if (err) console.log(err);
    console.log('Listening at 127.0.0.1:3000');
});