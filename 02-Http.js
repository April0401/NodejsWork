var http = require("http");

//创建服务器实例
var server = http.createServer();
//注册事件，当客户端请求时，执行回调函数
server.on("request",function(){
    console.log("收到客户端请求");
});
//绑定端口号，启动服务器
server.listen(3000,function(){
    console.log("服务器启动");
});