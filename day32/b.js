//引用接口

const a_module = require('./a');
const num = 10000;
console.log(a_module);//返回的是一个对象{ number: 100, fn: [Function: fn] }
console.log(a_module.number);//打印对象中的属性值
a_module.fn();//运行fn 方法
//nodemon 实时监测终端打印


