/*
一个最简单的高阶函数：

function add(x, y, f) {
    return f(x) + f(y);
}

当我们调用add(-5, 6, Math.abs)时，参数x，y和f分别接收-5，6和函数Math.abs
*/

function add(x, y, f) {
    return f(x) + f(y);
}

var x = add(-5, 6, Math.abs); // 11
console.log(x);