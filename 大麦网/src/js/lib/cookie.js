/*
    设置cookie
        参数1 ： cookie的名称
        参数2 ： cookie的值
        参数3 ： 时间
*/

function setCookie(cookieName,cookieVal,expires){
    //设置时间
    let d = new Date();
    d.setDate(d.getDate() + parseInt(expires));
    document.cookie = cookieName+'='+cookieVal+';path=/;expires=' + d.toGMTString(); 
}



/*
    读取cookie
*/
function getCookie(cookieName){
    //获取所有的cookie
    let allCookie = document.cookie;   //"age=30; age1=30; age3222=30; age2=30"
    //尝试把字符串转成数组   ; 
    let arr = allCookie.split('; ');   // ["age=30", "age1=30", "age3222=30", "age2=30"]
    //循环遍历
    for(let i = 0 , k = arr.length ; i < k ; i++){
        let arrTemp = arr[i].split('=');//["age1", "30"]
        //判断  cookieName  和 临时数组里面 第一项做比对
        if(cookieName == arrTemp[0]){
            return arrTemp[1];
        }
    }
}

/*
    删除cookie    只能让时间过期
*/
function removeCookie(cookieName){
    setCookie(cookieName,null,-1);
}
