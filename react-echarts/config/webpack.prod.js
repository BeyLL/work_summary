/**
 * Copyright 2014-2019, FengMap, Ltd.
 * All rights reserved.
 * -
 * @authors ZWH (zhangweiheng@fengmap.com)
 * @date 2019/12/26 15:58
 * @describe
 */
'use strict';
const merge=require('webpack-merge');
const common=require('./webpack.common.js');

module.exports=merge(common,{
    mode:'production'
});