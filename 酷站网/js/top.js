/*
吸顶效果

*/ 




 //吸顶效果
 var oTitleCont = document.querySelector('.title-cont');
 onscroll = function () {
     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     if (scrollTop >= 603) {
         oTitleCont.style.position = "fixed";
         oTitleCont.style.top = 0;
     } else {
         oTitleCont.style.position = "static";
     }
 }
// function Top(){
//     this.oTitleCont = document.querySelector('.title-cont');
//     this.init();
// }
// Top.prototype = {
//     init : function(){
//         this.onscroll();
//     },
//     onscroll : function(){
//         let _this = this;
//         console.log(_this);
//         onscroll = function () {
//             let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//             if (scrollTop >= 603) {
//                 _this.oTitleCont.style.position = "fixed";
//                 oTitleCont.style.top = 0;
//             } else {
//                 console.log
//                 _this.oTitleCont.style.position = "static";
//             }
//         }

//     }
// }
// new Top();