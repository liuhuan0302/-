function move(ele,json,fn){
    //关闭定时器
    clearInterval(ele.timer);
    //开启定时器
    ele.timer = setInterval(() => {
        let flag = true;
        //获取运动css属性 的 值
        //遍历对象 : attr属性
        for(let attr in json){
            //每次获取属性的 初始值
            let iCur = getStyle(ele,attr);
            //判断是否为透明  对 iCur做处理
            iCur = attr == 'opacity' ? iCur * 100 : parseInt(iCur);
            //设置速度
            let speed = ( json[attr] - iCur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            //判断终止条件
            // if(iCur == json[attr]){
            //     clearInterval(ele.timer);
            //     if(fn) fn();
            // }else{

            if(iCur != json[attr]){
                flag = false;
            }
            //判断是否为透明
            if(attr == 'opacity'){
                ele.style.opacity = (iCur + speed) / 100;
                ele.style.filter = 'alpha(opacity='+(iCur + speed)+')';
            }else{
                ele.style[attr] = iCur + speed + 'px';
            }
            //}
        }

        if(flag){
            clearInterval(ele.timer);
            if(fn)fn();
        }
    },30)
}
function getStyle(ele,attr){
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele,null)[attr]
}