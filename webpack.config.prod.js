/*用于生产环境*/
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;


var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
                loader: 'style!css',//先css-loader后style-loader
                include: path.resolve(__dirname,'src')
            },
            {
                test: /\.less$/,
                loader:'style!css!less',
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
        //压缩文件
        new uglifyPlugin({
            compress: false
        }),
        //生成banner
        new webpack.BannerPlugin('作者：vicky\n日期：'+new Date().toDateString()+'\n版本号：1.1.0')

    ]
}

module.exports = config;