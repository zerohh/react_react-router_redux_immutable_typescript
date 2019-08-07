const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const webpack = require("webpack");
module.exports = merge(common, {
    mode:"development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        port: 9000,
        historyApiFallback: true,
        hot: true,
        proxy:{
            '/api/*': {
                target: '',
                changeOrigin: true,
                pathRewrite: {'^/api' : ''}
            },
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});
