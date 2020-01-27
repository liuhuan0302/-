/*
     参数传递：
                {
                    method : 'post/get',
                    url : '接口',
                    data : {
                        
                    },
                    success : function(data){
                        对获取的数据 做业务处理
                    }
                }
*/
function ajax(options){
    //实例化对象  
    const xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");
     
    //对数据做包装      
    let packDate = '';      //name=wa&age=22&sex=222222
    for(let key in options.data){
        packDate += "&" + key + '=' + options.data[key];
    }

    //判断请求方法：post/get
    if(options.method == 'get'){
        xhr.open('get',options.url + '?' + packDate.slice(1) + '&now=' + new Date().getTime());
        xhr.send();
    }else{
        xhr.open('post',options.url);
        //设置请求头的
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(packDate.slice(1));
    }

    //监测
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            let getData = JSON.parse(xhr.responseText);
            //调用success方法
            if(options.success){
                options.success(getData);
            }
        }
    }

}