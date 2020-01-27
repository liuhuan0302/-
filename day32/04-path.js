/*

path模块

    path.join()Unix系统是”/“，Windows系统是”\“。

    path.basename('foo/bar/baz/asdf/quux.html','.html');    返回文件的名称  如果添加第二个参数‘.html’ 则返回quux;

    path.dirname(path)  返回的是文件的目录名称

    path.extname(path)  返回文件的扩展名

    注:后端路由:通过客户端访问地址的不同,返回的数据也不同

*/
//引入path 模块
const path = require('path');

//path.join()Unix系统是”/“，Windows系统是”\“。 
let str = path.join('/a','/b','/c');
console.log(str);//返回值:\a\b\c


// path.basename('foo/bar/baz/asdf/quux.html','.html');    返回文件的名称  如果添加第二个参数‘.html’ 则返回quux;

let res = path.basename('http://www.baidu.com/foo/bar/baz/asdf/index.html','.html');
console.log(res);//返回值:index 返回的是地址名

// path.dirname(path)  返回的是文件的目录名称

let res = path.dirname('http://www.baidu.com/foo/bar/baz/asdf/index.html','.html');
console.log(res);//返回值:http://www.baidu.com/foo/bar/baz/asdf 返回的是目录名称

//path.extname(path)  返回文件的扩展名
let res = path.extname('http://www.baidu.com/foo/bar/baz/asdf/index.html','.html');
console.log(res);//返回值:.html 返回的是扩展名