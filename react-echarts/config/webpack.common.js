/**
 * Copyright 2014-2019, FengMap, Ltd.
 * All rights reserved.
 * -
 * @authors ZWH (zhangweiheng@fengmap.com)
 * @date 2019/12/26 15:57
 * @describe
 */
'use strict';
const path = require('path'); //路径的api
const HtmlWebpackPlugin = require('html-webpack-plugin');//引用html-webpack-plugin

module.exports = {
//入口的设置
    entry: {
        app: './src/index.js',
    },

//http服务的设置
    devServer: { //利用上面的webpack-dev-server插件
        port: 8088 //端口号，默认是8080，8080这个端口号很容易被占用，前端应该不常出现。反正我喜欢设置1234
    },

//管理资源
    module: {
        rules: [
            {
                //加载js
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // 命中 SCSS 文件
                test: /\.less$/,
                // 使用一组 Loader 去处理 SCSS 文件。
                // 处理顺序为从后到前，即先交给 less-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
                use: ['style-loader', 'css-loader', 'less-loader'],
                // 排除 node_modules 目录下的文件
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                // 对非文本文件采用 file-loader 加载
                test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
                use: ['file-loader'],
            },
        ]
    },

//出口的设置
    output: {
        filename: '[name].bundle.js',//命名文件
        path: path.resolve(__dirname, '../dist')//生成的位置
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',//指定的html模板，这个会自动帮我引用下面output出口设置的文件名。
        })],
};