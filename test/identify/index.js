/**
 * Copyright 2014-2019, FengMap, Ltd.
 * All rights reserved.
 * -
 * @authors ZWH (zhangweiheng@fengmap.com)
 * @date 2019/12/24 17:02
 * @describe
 */
'use strict';


let funArr = [1, 2, 3, 4, 5, 'zhang', '张'];


//forEach  无返回值
funArr.forEach(item => {
    console.log(item, 'forEach');
});


//map   有返回值

funArr.map(item => {
    console.log(item, 'map');
});


//filter 过滤元素
const newFunArr = funArr.filter(item => {
    return item % 1 === 0
});

console.log(newFunArr, 'filter');


//some  只要有一个满足条件就返回true;


const newArr = funArr.some(item => {
    return item % 3 === 'zhang'
});

console.log(newArr, 'some');


//every  全部满足条件才能返回true
const everyArr = funArr.every(item => {
    return item === 1;
});

console.log(everyArr, 'every');


//findIndex

const cellArr = funArr.findIndex(item => {
    return item === 'zhang'
});


console.log(cellArr, 'findIndex');


//reduce


let arr = [1, 4, 5, 6, 7, 3];


const count = arr.reduce((pre, next) => {
    return pre + next;
});

console.log(count);


let arr1 = [[1, 2, 4], [3, 5, 2], [6, 10, 32]];


const newArr1 = arr1.reduce((pre, next) => {
    return pre.concat(next)
});

console.log(newArr1);

const arr2 = [
    {price: 123, count: 1},
    {price: 5, count: 20},
    {price: 76, count: 3},
];


const newArr2 = arr2.reduce((pre, next) => {
    return pre + next.price * next.count
}, 0);

console.log(newArr2);


const arr3 = [1, 2, 4, 3, 5, 2, 6, 10, 32, 2, 2, 2, 4, 4, 5, 6, 4, 5];


const countArr = arr3.reduce((pre, next) => {
    if (pre.findIndex(item => item.type === next) > -1) {
        //存在
        pre[pre.findIndex(item => item.type === next)].count++;

    } else {
        pre.push({type: next, count: 1})
    }
    return pre
}, []);


console.log(countArr);

