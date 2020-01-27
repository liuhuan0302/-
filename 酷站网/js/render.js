/*
数据渲染
*/ 
function Render(){
    this.mainBox = document.getElementById("main-cont-box");
    this.btnList = document.querySelector('.btnList');
    this.first = document.querySelector('.first');
    this.last = document.querySelector('.last');
    
    this.count = 1;
    this.init();
}
Render.prototype = {
    init : function(){
        this.ajax();
        
    },
    //获取后端数据
    ajax : function(){
        axios({
            method: 'post',
            url : './product.json',
            data : {}
        })
        //对返回的数据进行处理
        .then( (data)=>{
            this.run(data);
        })
    
    },
    run : function(data){
        //将后端数据转成对象
        data = JSON.parse(data);
        //根据数据确定页数
        this.pageNum = Math.ceil(data.length / 40);
        //根据页数确定按钮
        for(let i =  0; i < this.pageNum; i++ ){
            //动态创建按钮标签
            let createTag = document.createElement('a');
            //添加数值
            createTag.innerHTML = i + 1;
            //添加到父元素中
            this.btnList.insertBefore(createTag,this.last);
        }
        this.renderData(1,data);
    },
    //数据渲染 (n 指第几页)
    renderDate : function(n,data){
        this.mainBox.innerHTML = '';
        //点击循环的次数
        //Math.min 可以解决最后一页由于数据不足引起的报错
        for(let i = (n-1)*6;i < Math.min(data.length, 6 * n);i++){
            this.mainBox.innerHTML += `
            <div>
            <a href="#">
                <img src="${data[i].bigImgSrc}" alt="">
            </a>
            <div class="cont-center">
                <a href="#">
                    ${data[i].title}
                </a>
                <h4>${data[i].h4}</h4>
                <span>
                    <i class="iconfont icon-yan1"></i>
                    <em>${data[i].num1}</em>
                    <i class="iconfont icon-pinglun"></i>
                    <em>${data[i].num2}</em>
                    <i class="iconfont icon-zan11"></i>
                    <em>${data[i].num3}</em>
                </span>
            </div>
            <aside>
                <a href="#">
                    <img src="${data[i].smallImgSrc}" alt="">
                </a>
                <h5>${data[i].h5}</h5>
                <p>${data[i].p}</p>
            </aside>
        </div>
            
            `;
        }
        renderData(n,data);
        // this.aBtn
    },
}
new Render();