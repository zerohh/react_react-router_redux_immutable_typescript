const merge = require('webpack-merge');
const common = require('./webpack.common');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "../test/*")]
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
        }),
        new HardSourceWebpackPlugin(),
    ],
    optimization: {
        mergeDuplicateChunks: true,
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
                cache: true
            }),
        ],
        splitChunks: {
            minSize: 0,
            chunks: "all",
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minChunks: 1,
                    reuseExistingChunk : true,
                    priority: -10,
                },
                commons: {
                    test: /[\\/]src[\\/]/,
                    name: 'commons',
                    minChunks: 2,
                    reuseExistingChunk : true,
                    priority: -20
                },
                default: {
                    minChunks: 2,
                    name: 'default',
                    reuseExistingChunk: true,
                    priority: -30
                }
            }
        }
    }
});

