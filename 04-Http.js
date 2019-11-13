var http = require("http");

//创建服务器实例
var server = http.createServer();
//注册事件，当客户端请求时，执行回调函数
//回调函数有两个参数：
//request 请求对象 可以用于获取客户端的信息
//response 响应对象 可以用于给客户端发送响应消息
//告诉浏览器，内容是文本/普通文本，编码方式是utf8
// res.setHeader('Content-Type','text/plain; charset=utf8');
//text/html   网页类型
//image/jpeg  图片类型（）

server.on("request",function(req,res){
    console.log("收到客户端请求:" + req.url);
    //给客户端发送响应数据
   var url = req.url;
    if(url ==='/'){
        res.end( "index page");
    }else if(url === '/login'){
        res.end("login page");
    }else{
        res.end("404 not found");
    }
   
});
//绑定端口号，启动服务器
server.listen(3000,function(){
    console.log("服务器启动");
});