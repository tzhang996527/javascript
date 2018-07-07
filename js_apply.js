

'use strict';

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

var s = xiaoming.age(); // 25
console.log(s);

//要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，
//第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空

/*
另一个与apply()类似的方法是call()，唯一区别是：

    apply()把参数打包成Array再传入；

    call()把参数按顺序传入。

比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：
*/

Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
