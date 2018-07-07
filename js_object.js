//JavaScript把null、undefined、0、NaN和空字符串''视为false

var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};

//xiaohong的属性名middle-school不是一个有效的变量，就需要用''括起来。
//访问这个属性也无法使用.操作符，必须用['xxx']来访问

xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红'

//由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错

//要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false