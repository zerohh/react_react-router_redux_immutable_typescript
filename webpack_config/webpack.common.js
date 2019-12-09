const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ['@babel/polyfill', path.join(__dirname, "../src/entry/index.tsx")],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "js/[name]_[chunkhash:8].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['thread-loader', 'style-loader', 'css-loader']
            },
            {
                test: /\.scss/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                        publicPath: "../"
                    }
                }, 'css-modules-typescript-loader', 'css-loader?modules', 'postcss-loader', 'sass-loader'],
                include: path.join(__dirname, '../src/')
            },
            {
                test: /\.ts(x)?/,
                use: ['thread-loader', 'babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src/')
            },
            {
                test: /\.(png|jpg|gif|svg|bmp|eot|wof|woff2|ttf)/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "imgs/[name].[contenthash:8].[ext]"
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "stylesheets/[name]_[chunkhash:8].css",
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public/index.html"),
            filename: "index.html",
            inject: true,
            // icon: path.join(__dirname, "../public/favicon.ico"),
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyCSS: true,
                minifyJS: true,
                removeComments:true
            }
        }),

    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
};
