//在一个方法内部，this是一个特殊变量，它始终指向当前对象，
//也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性。

//在strict模式下让函数的this指向undefined

'use strict';
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
 
var s = xiaoming.age();
console.log(xiaoming.age); // function xiaoming.age()
console.log(s); // 今年调用是25,明年调用就变成26了


//////////////////////////////////////////////////////////

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25, 正常结果
//getAge(); // NaN

//如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，
//也就是xiaoming，这是符合我们预期的。

//如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window




var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 25

