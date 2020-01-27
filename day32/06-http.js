/*
node 开启服务的流程:
    1.引入http 模块
    2.调用http 模块中的createServer() 方法
        a:设置响应头  //writeHead（）  第一个参数为状态码   第二个参数为一个对象
        b:设置后端向客户端响应得内容 respones.write(返回前端的信息)
        c:响应结束 response.end()
    3.设置端口号 .listen()    1-1023 为系统端口  1024-65535 为用户端口
*/

//引入http模块
const http = require('http'); 

//http 中得 createserver()  方法   参数为一个回调
//回调里面有两个参数   第一个参数 ： request  (请求)   第二个参数 ；respones (响应)；
const server = http.createServer( (request,responese)=>{
    //设置响应头
    //状态码得设置 200
    //数据的类型
        //内容类型：text/plain 会将html标签进行转义，原样输出
        //如果设置为text/html 会解析成html标签
    //writeHead（）  第一个参数为状态码   第二个参数为一个对象
    responese.writeHead(200,{"content-type":'text/plain;charset=utf-8'});

    //设置后端向客户端响应得内容
    responese.write('<h2>后端响应前端的信息</h2>');

    //响应结束
    responese.end();
}) 

//设置端口号 .listen
server.listen(8080);
console.log('server running at http://127.0.0.1:8080');


