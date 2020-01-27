/*
    轮播图
*/ 

function Banner(){
    this.oB = document.querySelector('.banner-cont');
    this.oImgBox = document.querySelector(".banner-cont-img");
    this.oBanner = document.querySelector('.banner-cont');
    this.aBtn = this.oBanner.querySelectorAll('span');
    this.aImg = document.querySelectorAll(".banner-cont-img img");
    this.distance = this.aImg[0].offsetWidth;
    this.timer = null;
    this.count = 0;
    this.init();
    
}
Banner.prototype = {
    init : function(){
        this.clone();
        this.eventBind();
    },
    //克隆第一张
    clone : function(){
        this.firstImg = this.aImg[0].cloneNode();
        this.oImgBox.appendChild(this.firstImg);
        //动态获取oImgBox 的宽
        this.oImgBox.style.width = this.distance * this.aImg.length + 'px';
    },
    //图片移动
    toImg : function(){
        move(this.oImgBox,{'left':-this.distance * this.count});
    },
    //next
    next : function(){
        if(this.count >= this.aImg.length - 1){
            this.oImgBox.style.left = 0;
            this.count = 1;
        }else{
            this.count++;
        }
        this.toImg();
    },
    //pre
    pre : function() {
        if(this.count <= 0 ){
            this.oImgBox.style.left = (-this.distance) * (this.aImg.length - 1) + 'px';
            this.count = this.aImg.length - 2;
        }else{
            this.count--;
        }
        this.toImg();
    },
    //定时器
    autoPlay : function(){
        this.timer = setInterval( ()=>{
            this.next();
        },3000)
    },
    //清除定时器
    clearTime : function(){
        clearInterval(this.timer);
    },
    //事件绑定
    eventBind : function(){
        addEventListener(this.aBtn[1], 'click', this.next.bind(this));
        addEventListener(this.aBtn[0], 'click', this.pre.bind(this));

        addEventListener(this.oB, 'mouseover', this.clearTime.bind(this));
        addEventListener(this.oB, 'mouseout', this.autoPlay.bind(this));
    }

}
new Banner();