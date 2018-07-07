'use strict';

//由于JavaScript的变量作用域实际上是函数内部，
//我们在for循环等语句块中是无法定义具有局部作用域的变量的
function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
    console.log(i);
}

foo();

//为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError:
    i += 1;
}

//ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域：
const PI = 3.14;
PI = 3; // 某些浏览器不报错，但是无效果！
PI; // 3.14

//从ES6开始，JavaScript引入了解构赋值，可以同时对一组变量进行赋值
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
