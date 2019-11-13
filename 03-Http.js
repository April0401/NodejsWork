var http = require("http");

//创建服务器实例
var server = http.createServer();
//注册事件，当客户端请求时，执行回调函数
//回调函数有两个参数：
//request 请求对象 可以用于获取客户端的信息
//response 响应对象 可以用于给客户端发送响应消息
server.on("request",function(req,res){
    console.log("收到客户端请求:" + req.url);
    //给客户端发送响应数据
    res.write("hello ");
    res.write("nodejs ");
    res.end();
});
//绑定端口号，启动服务器
server.listen(3000,function(){
    console.log("服务器启动");
});