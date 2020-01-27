//引入模块
const gulp = require('gulp');
const imgmin = require('gulp-imagemin');//图片压缩模块
const jsmin = require('gulp-uglify');//js 压缩
const cssmin = require('gulp-clean-css');
const autofixer = require('gulp-autoprefixer');//添加浏览器前缀
const es6 = require('gulp-babel')//es6编译
const concat = require('gulp-concat');//文件的合并
const serverstart = require('gulp-connect');//开启服务

//图片压缩
gulp.task('imgMin',()=>{
    gulp
        //路径的查找
        .src('./src/images/*.jpg')
        .pipe(imgmin()) //执行压缩方法
        .pipe(gulp.dest('./dist/images'))
})

//js压缩
gulp.task('jsMin',() => {
    gulp
        .src('./src/js/js/*.js')
        .pipe(jsmin())//js压缩
        .pipe(gulp.dest('./dist/js'))
})
//css 文件的压缩
gulp.task('cssMin',() => {
    gulp 
        .src('./src/css/*.css')
        .pipe(cssmin())//css压缩
        .pipe(gulp.dest('./dist/css'))
})

//添加css浏览器前缀(overrideBrowserslist)
gulp.task('addFixer',() =>{
    gulp  
        .src('./src/css/demo.css')
        .pipe(autofixer({
            overrideBrowserslist: ['last 2 versions','Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('./dist/css'))
})
//es6 编译
gulp.task('ES6',()=>{
    gulp    
        .src('./src/js/js/demo1.js')
        .pipe(es6({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./dist/js'))
})
//文件的合并
gulp.task('conCat',() =>{
    gulp
        .src('./src/css/{demo1,demo2}.css')
        .pipe(concat('all.css'))//合并文件的名称
        .pipe(cssmin())//对css文件进行压缩
        .pipe(gulp.dest('./dist/css'))//对合并的文件进行转存
})

//监听 (是一个方法,不需要引入模块)
//gult.watch('监测的文件的路径',['执行的任务])
gulp.task('listen',()=>{
    gulp.watch('./src/css/{demo1,demo2}.css',['conCat'])
})  //调用:在终端 gulp listen

//开启服务
// gulp.task('server',()=>{
//     //serverstart 是一个变量 他的server 方法
//     serverstart.server({
//         //路径
//         root:'./',
//         port:8888,//端口
//         livereload : true//界面自动刷新
//     })
// })


//出口任务(用于同时执行多个gulp 方法)(参数 1:default 任务名称 参数2: 需要执行的任务)
// gulp.task('default',['jsMin','cssMin','imgMin'])

//会用到的 服务 监听 编译 实时刷新
//完成服务的实时刷新(监测index.html 的变化))
// 转存index.css文件 并刷新服务
gulp.task('CSS',() =>{
    gulp    
        .src('./src/css/index.css')
        .pipe(cssmin())//css 压缩
        .pipe(gulp.dest('./dist/css'))
        .pipe(serverstart.reload())//服务刷新
})

//监测html 的变化
gulp.task('watch',()=>{
    gulp.watch('./src/css/index.css',['CSS'])  //监测css变化 后面跟的是回调函数(用于实时刷新))
    //监测html 的变化 并实现服务刷新
    gulp.watch('./src/html/index.html',()=>{
        gulp.src('./src/html/index.html').pipe(serverstart.reload());
        
        
    })
})
//开启服务
gulp.task('server',()=>{
    serverstart.server({
        //路径
        root :'./',
        port : 8888,
        livereload:true
    })
})

//出口任务
gulp.task('default',['server','watch'])