'use strict';

var fs = require('fs');

//读取一个图片文件
//当读取二进制文件时，不传入文件编码时,回调函数的data参数将返回一个Buffer对象
fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // Buffer -> String
        var text = data.toString('utf-8');
        console.log(text);

        // String -> Buffer
        var buf = Buffer.from(text, 'utf-8');
        console.log(buf);
        console.log(data);
        console.log(data.length + ' bytes');
    }
});

//Buffer对象可以和String作转换，例如，把一个Buffer对象转换成String：

//异步读文件
fs.readFile('sample.txt','utf-8',function(err,data){
    if(err){
        conosle.log(err);
    }else{
        console.log(data);
    }
});

//同步读文件
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
}

//写文件
var data = 'Hello, Node.js';
//如果传入的参数是Buffer，则写入的是二进制文件。
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);

//如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息
fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

//stat()也有一个对应的同步函数statSync()
