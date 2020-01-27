/*
    前端路由： 适合做单页面开发。

    后端路由： 根据客户端请求地址得不同，相应到客户端得数据也是不一样得。

    node 服务在运行时:node 加文件名称 如node 07-rutor.js
*/ 

//引入http 模块(开启服务,向后端响应数据)
const http = require('http');
//引入url模块 获取前端请求的地址
const url = require('url');

//开启服务
const server = http.createServer( (req,res) => {
    //设置响应头
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    //获取客户端请求的地址(url.parse()获取前端的请求地址,.pathname 获取地址名
    //前端请求的地址:req.url(返回的是一个对象.pathname  取出域名后面的地址)
    //url.parse() url 的parse方法,解析地址(解析出来是一个对象),取出pathname() 
    //req.url 前端请求的地址
    let myUrl = url.parse(req.url).pathname;
    //服务端根据客户端请求地址的不同。响应不同的数据
    console.log(myUrl);// /login
    console.log(req.url);// /login
    console.log(url.parse(req.url));
    /*
    Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
        query: null,
        pathname: '/favicon.ico',
        path: '/favicon.ico',
        href: '/favicon.ico'
}
    
    */
        if(myUrl != '/favicon.ico'){
        //地址判断
        switch(myUrl){
            case '/login':
                //响应登陆信息
                res.write('<h2>您好请登录</h2>');
                break;
            case '/register':
                res.write('<h2>您好请注册</h2>');
                break;
            case '/wangshuai':
                res.write('<h2>您好王帅</h2>');
                break;
        }
    }

    //响应结束
    res.end();
})
//设置端口号
server.listen(8888);

console.log('server running at http://127.0.0.1:8888');