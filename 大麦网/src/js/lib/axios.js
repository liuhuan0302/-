/*
            axios({
                method: "",
                url:
                data :{
                    
                }
            })
            .then( (data)=>{

            } )
            .catch( (data) => {

            } )
        */

function axios(options) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");

        //对数据拼接   name=222&age=222$aa=111

        let packData = '';

        for (let key in options.data) {
            packData += '&' + key + '=' + options.data[key];   //&name=222&age=222$aa=111
        }

        //判断是get  post

        if (options.method == 'get') {
            xhr.open('get', options.url + "?" + packData.slice(1) + '&now=' + new Date().getTime());
            xhr.send()
        } else {
            xhr.open('post', options.url);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(packData.slice(1));
        }

        //监测状态：
        xhr.onreadystatechange = function () {

            if (xhr.status == 200 && xhr.readyState == 4) {

                let d = xhr.responseText;
                //如果数据请求成功  调用resolve
                resolve(d);

            }

            //数据请求失败 调用reject

            setTimeout(() => {
                if (xhr.status != 200 || xhr.readyState != 4) {

                    let dataObj = {
                        status: xhr.status,
                        readyState: xhr.readyState
                    }

                    reject(dataObj);

                }
            }, 4000)

        }
    })
}    