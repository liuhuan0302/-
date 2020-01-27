const fs = require('fs');

fs.stat('../../a.js',(err,stats) =>{
    if(err){
        console.log(err);
    }else{
        console.log(stats.isFile());
    }

})



/*
node 开启服务的流程
    1.引入http 模块
    2.调用http 模块中的createServer() 方法
        a. 设置响应头 //writeHead()
            第一个参数为状态码,第二个参数为一个对象
        b. 设置后端响应客户端响应的内容respones.write(返回前端的信息)
        c.设置端口号 .listen() 1-1023 为系统端口 1024-65535 为用户端口
        

*/ 
const http = require('http');

//http 中 createserver() 方法 参数为一个回调  // 回调里面有两个参数 第一个参数 request(请求)  第二额 参数respones(响应)
const server = http.createServer( (request,responese)=>{

    //设置响应头
    responese.writeHead(200,{"content-type":'text/plain;charset=utf-8'});

    //设置后端向客户端响应的内容
    responese.writeHead('<h2>后端响应前端的信息</h2>')
    responese.end();

})

//设置端口号 .listen

server.listen(8000);
console.log('server running at http://127.0.0.1:8080');


/*
    前端路由: 适合做单页面开发
    后端路由: 根据客户端请求地址的不同,响应到客户端的数据也不一样

   

*/

//引入http 模块

const http = require('http');
const url = require('url');

//开启服务
const server = http.createServer( (require,responese)=>{
    //设置响应头
    responese.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    //获取客户端 
    
    let myUrl = url.parse(req.url).pathname;

    if(myUrl != '/favicon.ico'){
        
    }

})