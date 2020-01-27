/*  随机数 */
function randomNumber(m, n) {
    return parseInt(Math.random() * (n - m + 1) + m);
}

// 冒泡排序
var arr = [10, 7, 8, 9, 30, 20, 1];

function bubbleSort(arr) {
    // 确定循环的次数
    for (i = 0; i < arr.length - 1; i++) {
        //确定比较的次数
        for (k = 0; k < arr.length - i - 1; k++) {
            //比较相邻两个数,谁大谁往后放
            if (arr[k] > arr[k + 1]) {
                var tmp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = tmp;
            }

        }
    }
    return arr;
}

//选择排序
var arr = [10, 7, 8, 9, 30, 20, 1];
function chooseSort(arr) {
    //确定外层循环次数(几轮)
    for (var i = 0; i < arr.length - 1; i++) {
        // 确定交换次数
        for (var k = i + 1; k < arr.length; k++) {
            //第一个数依次与后面数进行比较
            if (arr[i] > arr[k]) {
                var tmp = arr[k];
                arr[k] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr;
}

//快速排序
var arr = [10, 20, 77, 30, 50, 88, 190, 40];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    //取中间值以及中间值的下角标,并定义左右的数组
    var
        midIndex = parseInt(arr.length / 2),
        midValue = arr[midIndex],
        rightArr = [],
        leftArr = [];
    //遍历数组,都和中间值作比较,大的放在右边数组,小的放在左边数组
    for (var i = 0; i < arr.length; i++) {
        //中间值不和自身做比较,当arr[i]等于中间值时,跳出本次循环;
        if (midIndex == i) {
            continue;
        }
        if (arr[i] <= midValue) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    //利用递归处理左右两边的数组;
    var res = quickSort(leftArr).concat(midValue).concat(quickSort(rightArr));
    return res;
}

//数组去重
function norepeat() {
    for (var i = 0; i < arr.length - 1; i++)
        for (var k = i + 1; k < arr.length; k++) {
            if (arr[i] == arr[k]) {
                arr.splice(k, 1);
                k--;
            }
        }
    return arr;
}


//随机颜色封装方法
/*
    逻辑:先随机rgb值,在将rgb值转换成十六进制
*/
function randomColor(r, g, b) {
    var
        r = randomNumber(0, 255),
        g = randomNumber(0, 255),
        b = randomNumber(0, 255);
    return systemChange(r, g, b);
}
function systemChange(r, g, b) {
    r = r.toString(16) < 2 ? "0" + r.toString(16) : r.toString(16);
    g = g.toString(16) < 2 ? "0" + g.toString(16) : g.toString(16);
    b = b.toString(16) < 2 ? "0" + b.toString(16) : b.toString(16);
    return '#' + r + g + b;
}
//将时间转成字符串
function printDate(d,sign){
    //判断是否传入sign值(即是否传入符号)
    sign = !sign ? '/' : sign;
    return ''+d.getFullYear() + sign + mendZero(d.getMonth()+1) + sign + mendZero(d.getDate()) + ' ' + mendZero(d.getHours()) + ':' +mendZero(d.getMinutes()) + ':' +mendZero(d.getSeconds());
} 
//封装补零的方法
function mendZero(num){
   return num = num < 10 ? '0'+ num : num;
}

//封装一个获取非行间样式的方法(解决兼容性)
function getStyle(ele,attr){
    //判断浏览器是否支持
    if(ele.currentStyle){
        return ele.currentStyle[attr];

    }else{
        return getComputedStyle(ele,null)[attr];
    }
}

//DOM获取的方法
function $(selector) {
    //对selector 进行判断  #box .txt 标签
    //获取对一个字符(# .)(否则代表是标签)
    var firstLetter = selector.charAt(0);
    //对第一个字符进行判断
    switch (firstLetter) {
        case "#": return idSelector(selector.slice(1));//如果第一个字符为#,调用id方法
            break;
        case ".": return classSelector(selector.slice(1));//如果第一个字符为,调用class方法
            break;
        default: return tagSelector(selector);//如果为标签,则调用tag方法
    }
    //函数方法(注意此时传递的参数idS是和selector有区别的  例:"box" 和 ".box")
    function idSelector(idS) {
        return document.getElementById(idS);
    }
    function tagSelector(tagS) {
        return document.getElementsByTagName(tagS);
    }
    function classSelector(classS) {
        // 判断浏览器是否支持getElementsByClassName,支持则执行,否则选择其他地方
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(classS);//存在兼容问题(IE8以下不支持)
        }else{
             var domArr = [];//声明一个空数组,用来放置找到的DOM节点
             var all = document.getElementsByTagName('*');//*表示获取所有节点
             var reg = new RegExp('(^|\\s)'+classS+'($|\\s)');//正则验证类名(注:此处不要加全局变量)
             for(var i = 0 , k = all.length; i < k ; i++){
                 var classStr = all[i].getAttribute('class');//每一次循环都获取当前元素的class类名
                //  var classStr = all[i].className;
                 if(reg.test(classStr)){
                     //如果存在classStr,则将其push到新数组中
                     domArr.push(all[i]);

                 }
             }
             return domArr;
        }
    }
}


//阻止浏览器的默认行为
function preventDefault(e){
    return e.preventDefault ? e.preventDefault(e) : returnValue = false;
} 

//封装事件监听
function addEventListener(ele,eventType,fn){
    return ele.addEventListener ? ele.addEventListener(eventType,fn) : ele.attachEvent('on' + eventType,fn);
}

//封装阻止事件冒泡
function stopPropagation(e){
    return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = ture;
}

//动态添加类名  如果存在 则不添加
function addClass(ele, classN) {
    //先获取元素现有的类名 
    var _className = ele.getAttribute('class');
    //创建正则,用来匹配_className
    //正则分析 类名左侧  可能是^ 可能\s  类名右侧可能是\s 也可能是$
    var reg = new RegExp('(^|\\s)' + classN + '($|\\s)', 'g');
    console.log(reg);
    if (!reg.test(_className)) {
        ele.className += ' ' + classN;
    }
}