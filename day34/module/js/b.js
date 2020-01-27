//引用a模块
import a from './a.js';
a();


//暴露模块
export default function fn(){
    console.log('第二个模块bJS');
}