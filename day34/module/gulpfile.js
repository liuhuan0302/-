//引入gulp 模块
const gulp = require('gulp');
const connect = require('gulp-connect');

//开启任务
gulp.task('server',()=>{
    connect.server({
        //路径
        root :'./',
        port:8888,
        livereload:true
    })

})