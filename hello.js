'use strict';

var s = 'Hello';

function greet(name){
    console.log(s + ' ,'+ name + '!');
}

function greet2(name){
    console.log(s + ' ,'+ name + '?');
}


module.exports = {
    greet: greet,
    greet2: greet2
};

//module.exports.foo = function () { return 'foo'; };
//module.exports.bar = function () { return 'bar'; };
