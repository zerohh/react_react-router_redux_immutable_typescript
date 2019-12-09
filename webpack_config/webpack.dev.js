const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode:'development',
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                enforce:'pre',
                test:/\.js/,
                include:path.resolve(__dirname, '../src'),
                use:['eslint-loader']
            },
        ]
    },
    output: {
        filename: 'js/[name].[hash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port:9001,
        historyApiFallback:true,
        hot:true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
