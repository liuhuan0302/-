/*
+ 先引入gulp模块

+ gulp里面的指令：
    - gulp.task()  //创建gulp任务
        - 参数1 ： 任务的名称
        - 参数2 ： 当前任务所依赖的其他任务 ['任务1'，'任务2']
        - 参数3 ： 回调函数 当前任务所执行的代码。

    - gulp.src()   //找到文件的路径

    - gulp.pipe()   //管道函数

    - gulp.dest()   //文件的转存
    
    - gulp.watch()  //监听
*/

//先引入gulp模块
const gulp = require('gulp');

//文件转存: 将src/html 里面的index.html 转存到 dist/html 里面
//创建一个gulp任务 参数1:任务名称  -参数2 当前任务所依赖的其他任务 ['任务1'，'任务2'] 参数3:回调函数:当前所有执行的任务 
gulp.task('copyfile', ()=>{
    //文件的转存
    //找到文件的路径(连缀的写法)(文件的路径开始时是当前路径)
    gulp
        .src('./src/html/index.html')
        //转存(文件进入管道进行转存)
        .pipe(gulp.dest('./dist/html'))
})

//注:任务的运行:gulp 任务名称(gulp copyfile)(注:一定要在当前路径下执行这一任务)

// 将多个文件转存到一个文件上
gulp.task('marge', ()=>{
    gulp
        .src(['./src/css/demo1.css','./src/html/index.html'])
        .pipe(gulp.dest('./dist/marge'))
})

gulp.task('marge', ()=>{
    gulp
        //将所有的css文件存到一个文件里面
        .src('./src/css/*.css')
        .pipe(gulp.dest('./dist/marge'))
})