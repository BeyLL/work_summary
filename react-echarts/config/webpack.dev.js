/**
 * Copyright 2014-2019, FengMap, Ltd.
 * All rights reserved.
 * -
 * @authors ZWH (zhangweiheng@fengmap.com)
 * @date 2019/12/26 15:58
 * @describe
 */
'use strict';
const common=require('./webpack.common.js');//引用通用配置
const merge=require('webpack-merge');//引用webpack-merge插件

module.exports=merge(common,{
    mode:'development', //开发的模式
});