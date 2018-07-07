//for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来：
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}


//由于Array也是对象，而它的每个元素的索引被视为对象的属性，
//因此，for ... in循环可以直接循环出Array的索引：
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}

//比如我们要计算100以内所有奇数之和，可以用while循环实现
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500

//最后一种循环是do { ... } while()循环，它和while循环的唯一区别在于，
//不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件：
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100
