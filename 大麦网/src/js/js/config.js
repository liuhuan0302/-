//配置文件(AMD模块规范  模块前置)
//require 的config 方法
require.config({
    paths:{
        //配置的模块
        //属性模块的名称(自定义)
        //属性值:模块的地址
        'jquery':'jquery-1.11.3.min',
        'swiper' : "./swiper",
        'fn' : './demo'//不用添加js
    }
})