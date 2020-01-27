function GoTop(){
    this.backTop = document.querySelector('.backTop');
    this.init();
    console.log(this.scrollTop)
} 
GoTop.prototype = {
    init : function(){
        
        this.eventBind();
      
      
    },
    back : function(){
        let _this = this;
        let speed = 10;
        timer = setInterval(() => {
            console.log(_this);
            //设置滚动条高度不断减小
            document.documentElement.scrollTop = document.body.scrollTop = (_this.scrollTop - speed);
            speed += 20;

            //清除定时器
            if(_this.scrollTop <= 0){
                clearInterval(timer);
            }
        }, 30);
    },
    block : function(){
        new Promise((resolve)=>{
            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            resolve();
        })
        .then(()=>{
            console.log(this.scrollTop)
            if(this.scrollTop >= 123){
                this.backTop.style.display = 'block';
            }else{
                this.backTop.style.display = 'none';
            }
        })
         
    },
    eventBind : function(){
        addEventListener(this.backTop,'click',this.back.bind(this));
        addEventListener(document,'scroll',this.block.bind(this));
        
    }
}
new GoTop();