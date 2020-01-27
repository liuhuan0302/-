function HeaderBanner(){
    this.topBanner = document.querySelector('.header-banner');
    this.abtn = document.querySelector('.header-btn');
    this.init();
}
HeaderBanner.prototype = {
   init :function(){
       this.eventBind();
   },
   noneImg : function(){
    timer = setInterval(() => {
        this.topBanner.style.display = "none";
    }, 300);
    timer = null;
   },
   
   eventBind : function(){
       this.abtn.addEventListener('click',this.noneImg.bind(this));
       document.addEventListener('load',()=>{
        this.topBanner.style.display = "block";
       })
   }
   
   
}
new HeaderBanner();