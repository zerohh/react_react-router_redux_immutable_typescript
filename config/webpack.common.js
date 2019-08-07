const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, "../src/entry/index.tsx")],
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
        filename: "js/[name].js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        unknownContextCritical : false,
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                use: ["eslint-loader", "source-map-loader", "babel-loader"]
            },
            {
                test: /\.ts(x)?$/,
                include: path.resolve(__dirname, '../src'),
                use: ["babel-loader"]
            },
            {
                test: /\.scss/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader:'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }, 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg|bmp|eot|wof|woff2|ttf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: 'imgs/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../dist'),
                ignore: /\.html/
            }
        ]),
        extractSass,
    ],
    optimization:{
        splitChunks:{
            chunks: 'all',
            minSize: 300,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '-',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'all'
                },
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true,
                }
            }
        }
    },
};