
/*
遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。为了统一集合类型，

ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。

具有iterable类型的集合可以通过新的for ... of循环来遍历。

for ... of循环是ES6引入的新的语法，请测试你的浏览器是否支持：
*/
'use strict';
var a = [1, 2, 3];
for (var x of a) {
}
console.log('你的浏览器支持for ... of');

//用for ... of循环遍历集合，用法如下：
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}

//然而，更好的方式是直接使用iterable内置的forEach方法，
//它接收一个函数，每次迭代就自动回调该函数。以Array为例：
'use strict';
var a = ['A', 'B', 'C'];

a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});

var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});