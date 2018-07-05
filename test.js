
//想要在下一次事件响应中执行代码，可以调用process.nextTick()：
process.nextTick(function(){
    console.log('nextTick callback!');
});

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

console.log('nextTick was set!');