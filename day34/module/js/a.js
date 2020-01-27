//引用b模块
import b from './b.js';
b();

//暴露模块
export default function fn(){
    console.log('第一个模块aJS ')
}