//由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，
//传入我们自己的函数，就得到了一个新的Array作为结果

'use strict';

function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

//filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。

//例如，在一个Array中，删掉偶数，只保留奇数，可以这么写：
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]
