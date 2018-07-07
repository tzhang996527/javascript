"use strict";

//在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：data事件表示流的数据已经可以读取了，
//end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。
var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');

//要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。
rs.on('data',function(chunk){
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end',function(chunk){
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});