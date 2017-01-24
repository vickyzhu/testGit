var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js?v=[hash:6]'
    },
    devServer: {
        contentBase: 'dist',
        port: 8088,
        inline: true,//自动刷新
        stats: {
            colors: true
        }
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader:'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // loader: 'style!css',//先css-loader后style-loader
                loader: extractTextPlugin.extract("style","css","less"),
                include: path.resolve(__dirname,'src')
            },
            {
                test: /\.less$/,
                // loader:'style!css!less',
                loader: extractTextPlugin.extract("style","css!less"),
                include: path.resolve(__dirname,'src')
            }
        ]
    },
    plugins: [
        //自动产出html
        new htmlWebpackPlugin({
            title: '搭建前端工作流',
            template: './src/index.html'
        }),
        //自动打开浏览器
        new openBrowserPlugin({url:"http://localhost:8081"}),
        //提取文本插件
        new extractTextPlugin("style.css")


    ]
}

module.exports = config;