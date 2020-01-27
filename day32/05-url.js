/*
url 模块
    url.parse()
        protocol:协议
        host:域名
        search:参数
        query:？后面的参数
        pathname:路径 
        href:url链接

    url.format()
        const result = url.parse(参数1):返回值是一个urlobject
        const newUrl = url.format(result):根据urlObject生成一个url


    url.resolve
        var url = require('url');


        var a = url.resolve('/one/two/three', 'four') ,
        b = url.resolve('http://example.com/', '/one'),
        c = url.resolve('http://example.com/one', '/two');


        //输出结果：7 ///one/two/four8 //http://example.com/one9 //http://example.com/two
    替换 域名后面第一个“/”后的内容；
*/

//引入模块
const url = require('url');

/* url.parse()
        protocol:协议
        host:域名
        search:参数
        query:？后面的参数
        pathname:路径 
        href:url链接

    注:前端需要向后端做数据请求,后端根据前端的请求网址不同,返回不同的数据
*/

// let res = url.parse('http://www.baidu.com:80/images/index.php?a=100');
// console.log(res);//返回的数据是一个对象,可以取出其中的数据

/*
url.format()  将返回的对象,转成一个网址
        const result = url.parse(参数1):返回值是一个urlobject
        const newUrl = url.format(result):根据urlObject生成一个url
*/

// let str = url.format(res);
// console.log(str);//返回的是一个网址

/*
url.resolve
        var url = require('url');


        var a = url.resolve('/one/two/three', 'four') ,
        b = url.resolve('http://example.com/', '/one'),
        c = url.resolve('http://example.com/one', '/two');


        //输出结果：7 ///one/two/four8 //http://example.com/one9 //http://example.com/two
    替换 域名后面第一个“/”后的内容；

*/
//区别以下两种情况:
// let str = url.resolve('http://www.baidu.com/a/b/c','222222')
// console.log(str);//"2222"没有/ 时,替换的是最后一个c

let str = url.resolve('http://www.baidu.com/a/b/c','/222222')
console.log(str);//"2222"有/ 时,替换的是域名后面的第一个/
