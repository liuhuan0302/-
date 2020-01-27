const num = 100;
function fn(){
    console.log('第一个模块的方法');
}

//暴露接口
module.exports = {
    number : num ,
    fn : fn
}