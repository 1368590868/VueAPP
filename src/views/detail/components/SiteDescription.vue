import axios from 'axios';
<template>
   <div class="decription-wrap">
       <div class="one">
           <div class="mark">
               <div class="left">
                    <div class="point-area"><span class="point">5.0</span>分 <span class="text">超赞</span></div>
                    <div class="conment">536756条评论  97条攻略</div>
               </div>
               <div class="right">
                 <img src="../../../assets/images/right-arrow.png" alt="" class="arrow">
               </div>
           </div>
           <div class="introduce">
                <div class="left">
                    <div class="title">景点简介</div>
                    <div class="content">开放时间、贴士</div>
                </div>
                <div class="right">
                     <img src="../../../assets/images/right-arrow.png" alt="" class="arrow">
                </div>
           </div>
       </div>
       <div class="two">
           <div>
           <img src="../../../assets/images/location.png" alt="" class="location">
           <span>北京市东城区景山前街4号</span>
           </div>
           <img src="../../../assets/images/right-arrow.png" alt="" class="arrow">
       </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.decription-wrap{
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    padding:0px 10px;
    padding-top:5px; 
    top: -5px;
}

.one{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center; 
    width: 100%;
}

.mark,.introduce{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;   
}
.introduce{
    width: 150px;
    border-left: 1px solid rgba(222,222,222,0.6);
    padding-left: 20px;
}
.mark{
    flex:1;
}
.two{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    
    box-sizing: border-box;
    width: 100%;
    align-self: flex-start;
    margin-top: 10px;
    padding: 5px 0px;
    border-top:1px solid rgba(222,222,222,0.6);
}
.location{
    width: 16px;
    height: auto;
    margin-right: 12px;
}
.point-area{
    color:#ff8352;
   
}
.point{
    font-size: 18px;
}
.text{
    margin-left: 12px;
    font-size: 14px;
}

.arrow{
    width: 36px;
    height: auto;
}

.left,.right{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    line-height: 1.5;
}
.right{
    align-self: flex-end;
}
.conment{
    font-size: 12px;
    color:rgba(0,0,0,0.6);
}
.left .content{
    color:rgba(0,0,0,0.6);
    font-size: 12px;

}

</style>