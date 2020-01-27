// require方法解决文件运行依赖问题 例如 index.js 文件运行需要依赖jquery文件
//require(['依赖的模块(可以自定义)'],function(依赖模块的名称jquery = $){需要执行的功能(依赖模块需要做什么)})
//需要先引用 config.js 配置文件
require(['config'],function(){

    require(['jquery','fn'],function($,fn){
        console.l
    })
}) 