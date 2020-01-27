/**  随机数 （m < n）  */
function randomNum(m,n){
    return parseInt(Math.random() * ( n - m + 1 ) + m);
}


/** 冒泡排序 */
function bubbleSort(arr){
    //确定循环的次数
    for(var i = 0 ; i < arr.length - 1 ; i++){
        //每一轮 数值比较
        for(var k = 0 ; k < arr.length - i - 1; k++){
            //谁大谁往后排
            if(arr[k] > arr[k + 1]){
                var temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    }
    return arr;
}


/** 选择排序 */
function chooseSort(arr){
    //确定几轮
    for(var i = 0 ; i < arr.length - 1 ; i++){
        //每一轮都和第一个比较
        for(var k = i + 1 ; k < arr.length ; k++){
            //谁小放前面
            if(arr[i] > arr[k]){
                var temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
}



/** 快速排序 */

function quickSort(arr){
    //递归结束条件
    if(arr.length <= 1){
        return arr;
    }

    //取中间的值以及中间的下标
    var 
        midIndex = parseInt(arr.length / 2),
        midVaule = arr[midIndex],
        leftArr = [],    //创建左右的数组
        rightArr = [];   

    //遍历arr数组。每一个值和中间的值相比较，大的放右侧数组。小的等的放左侧。    
    for(var i = 0 ; i < arr.length ; i++){
        //如果是中间小标的，跳出本次循环（不用中间值和自身比较）
        if(i == midIndex){
            continue;
        }
        if(arr[i] <= midVaule){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
    //利用递归处理左右的数组
    var res = quickSort(leftArr).concat(midVaule).concat(quickSort(rightArr));
    return res;
}


// 数组去重
function norepeat(arr){
    //运用 选择排序的思想
    for(var i = 0 ; i < arr.length - 1 ; i++){
        //用第一个数和其余的比较
        for(var k = i + 1 ; k < arr.length ; k++){
            //如果两个相等。删除
            if(arr[i] == arr[k]){
                arr.splice(k,1);
                k--;
            }
        }
    }
    return arr;
}

function norepeat2(arr){
    var tempArr = [];
    for( var i = 0, k = arr.length ; i < k ; i++ ){
        if(tempArr.indexOf(arr[i]) == -1){
            tempArr.push(arr[i]);
        };
    }
    return tempArr;
}




//随机颜色封装
function randomColor(){
    var
        r = randomNum(0,255),
        g = randomNum(0,255),
        b = randomNum(0,255);
    return systemChange(r,g,b);
}

function systemChange(r,g,b){
    r = r.toString(16).length < 2 ? '0' + r.toString(16) : r.toString(16);
    g = g.toString(16).length < 2 ? '0' + g.toString(16) : g.toString(16);
    b = b.toString(16).length < 2 ? '0' + b.toString(16) : b.toString(16);
    return '#' + r + g + b;
}



//时间
function printDate(d,sign){
    //如果没有sign的时候 给一个默认的字符
    sign = !sign ? '/' : sign;
    //获取d  里面  年月日 时分秒 
    return '' + d.getFullYear() + sign + mendZero(d.getMonth() + 1) + sign + mendZero(d.getDate()) + ' ' + mendZero(d.getHours()) + ':' + mendZero(d.getMinutes()) + ':' + mendZero(d.getSeconds());
}

//补零
function mendZero(num){
    return num = num < 10 ? '0' + num : num; 
}



//返回顶部
function goTop(){
    //速度
    var speed = 100;
    //开启定时器
    
    var timer = setInterval(function(){
        //获取滚动条的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //设置滚动的高度
        document.documentElement.scrollTop = document.body.scrollTop = (scrollTop - speed);
        //清除定时器
        speed += 30;
        if(scrollTop <= 0){
            clearInterval(timer);
        }
    },30)
}


//获取非行间样式
function getStyle(ele,attr){
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele,null)[attr]
}

//封装dom获取
function $(selector){
    //对 selector 进行判断   #box     .txt   标签
    var firstLetter = selector.charAt(0);   //获取第一个字符  # .
    switch(firstLetter){
        case '#' : return idSelector(selector.slice(1));    //如果第一个字符为 #  调用id的方法
        break;
        case '.' : return classSelector(selector.slice(1));  //如果第一个字符为 .  调用的是class方法
        break;
        default : return tagSelector(selector);     // 如果为标签  条用的为tag方法。
    }

    function idSelector(idS){
        return document.getElementById(idS);
    }
    function classSelector(classS){
        return document.getElementsByClassName(classS);
    }
    function tagSelector(tagS){
        return document.getElementsByTagName(tagS);
    }

}



//阻止浏览器的默认行为
function preventDefault(e){
    return e.preventDefault ? e.preventDefault() : e.returnValue = false;
}


//封装事件监听
function addEventListener(ele,eventType,fn){
    return ele.addEventListener ? ele.addEventListener(eventType,fn) : ele.attachEvent('on' + eventType,fn);
}


//阻止事件冒泡
function stopPropagation(e){
    return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}