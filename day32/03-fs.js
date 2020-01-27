/*
fs模块:
    使用模块之前：
        先引入

        得到文件与目录的信息：stat
            参数1 ： 路径     参数2 ： 回调函数   （err,stats） {stats.isFile（） 检查是不是文件}

        创建一个目录：mkdir
            参数1 ： 文件名称  参数2 ： 回调   （err）{当没有创建 成功的时候返回的值}

        创建文件并写入内容：writeFile
            参数1 ： 文件名称   参数2 ： 更改的信息     参数3：回调  （err） {修改失败所做的事件}

        读取文件的内容：readFile
            参数1 ： 文件的 名称   参数2 ： 编码格式    参数3 ：回调 (err,data){ if(err){ console.log(err) }else{ console.log(data) 返回buffer类型 } }    

        列出目录的东西：readdir
            参数1 ： 路径     参数2 ： 编码格式   参数3：  （err,list）{ consle.log（list） }
            
        重命名目录与文件：rename
            参数1 ： 旧文件   参数2 ：新文件    参数3  （err）{ console.log(err) };
*/
//引入模块
const fs = require('fs');

//得到文件与目录的信息：stat
//参数1 ： 路径     参数2 ： 回调函数   回调的参数（err,stats） {stats.isFile（） 检查是不是文件}
//err 报错是返回的错误信息  stats 检查文件(stats.isFile（） 检查是不是文件 如果是文件返回true)
fs.stat('./a.js',(err,stats) =>{
    if(err){
        console.log(err);
    }else{
        console.log(stats.isFile());//返回true
    }
})


//创建一个目录：mkdir
//参数1 ： 文件名称  参数2 ： 回调   （err）{当没有创建成功的时候返回的值}
fs.mkdir('./new/child',(err) =>{
    if(err){
        console.log(err);
    }
})

//创建文件并写入内容：writeFile
//参数1 ： 文件名称   参数2 ： 更改的信息     参数3：回调  （err） {修改失败所做的事件}
fs.writeFile('./new/demo.js','console.log(11111)',(err)=>{
    console.log(err);
})


// 读取文件的内容：readFile
//参数1 ： 文件的 名称   参数2 ： 编码格式    参数3 ：回调 (err,data){ if(err){ console.log(err) }else{ console.log(data) 返回buffer类型 } } 

fs.readFile('./new/demo.js','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
})
//打印json文件
fs.readFile('./new/product.json','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(JSON.parse(data)[0].images);
    }
})

//列出目录的东西：readdir
//参数1 ： 路径     参数2 ： 编码格式   参数3：  （err,list）{ consle.log（list） }

fs.readdir('./new',(err,list) =>{
    if(err){
        console.log(err);
    }else{
        console.log(list);
    }
})

//重命名目录与文件：rename
//参数1 ： 旧文件   参数2 ：新文件    参数3  （err）{ console.log(err) };
fs.rename('./new/goods.json','./new/product.json',(err)=>{
        if(err){
            console.log(err);
        }
})