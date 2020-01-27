function Banner() {
    this.oS = document.querySelector('.banner');
    this.oImgBox = document.querySelector('.imgBox');
    this.aImg = this.oS.getElementsByTagName('img');
    this.oCircleBox = document.querySelector('.circleBox');
    this.distance = this.aImg[0].offsetWidth;
    this.aBtn = document.querySelectorAll('.banner span');
    this.count = 0;
    this.time = null;
    this.init();
    
}
Banner.prototype = {
    init: function () {
        this.clone();
        this.oImgBox.style.width = this.aImg.length * this.distance + 'px';
        this.create();
        this.eventBind();
        console.log(this.oImgBox.style.width);
        
    },
    //克隆第一张
    clone: function () {
        this.firstImg = this.aImg[0].cloneNode();
        this.oImgBox.appendChild(this.firstImg);
    },
    //动态添加圆点
    create: function () {
        for (var i = 0, k = this.aImg.length - 1; i < k; i++) {
            this.createLi = document.createElement('li');
            this.oCircleBox.appendChild(this.createLi);
        }
        //获取第一个圆点,并添加背景
        this.oCir =  this.oCircleBox.getElementsByTagName('li');
        this.oCir[0].className = 'circleActive';
        console.log(this.oCir[0]);
    },
    //图片移动
    toImg : function(){
        move(this.oImgBox,{'left' : - this.distance * this.count});
    },
    //下一张
    next : function(){
        if( this.count >= this.aImg.length - 1 ){
            this.oImgBox.style.left = 0;
            this.count = 1;
        }else{
            this.count++;
        }
        this.toImg();
        this.clearActive();
        this.oCir[this.count >= this.aImg.length - 1 ? 0 : this.count].className = 'circleActive';
    },
    pre : function(){
        if(this.count <= 0){
            this.oImgBox.style.left = (this.aImg.length - 1) * (-this.distance) + 'px';
            this.count = this.aImg.length - 2;
        }else{
            this.count--;
        }
        this.toImg();
        this.clearActive();
        this.oCir[this.count].className = 'circleActive';
    },
    //定时器
    autoPlay :function(){
        this.timer = setInterval(()=>{
            //箭头函数的this 指向,谁调用指向谁,所以不用改变
            this.next();
        },3000)
    },
    //清除定时器
    clearTimer :function(){
        clearInterval(this.timer);
    },
    //清除类名
    clearActive : function(){
        for(var i = 0, k = this.aImg.length - 1; i < k ; i++){
            this.oCir[i].className = '';
        }
    },
    circle:function(){
        for(let i = 0; i < this.oCir.length;i++){
            addEventListener(this.oCir[i],'mouseover',()=>{
                this.clearActive();
                this.oCir[i].className = 'circleActive';
                this.count = i;
                this.toImg();
            },30)
        }
    },
    //事件绑定
    eventBind:function(){
        addEventListener(this.aBtn[1],'click',this.next.bind(this));
        addEventListener(this.aBtn[0],'click',this.pre.bind(this));
        addEventListener(this.oS,'mouseover',this.clearTimer.bind(this));
        addEventListener(this.oS,'mouseout',this.autoPlay.bind(this));
        this.circle();
    }

}
new Banner();