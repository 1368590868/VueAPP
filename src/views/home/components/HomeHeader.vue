<template>
   <div class="header">
       <div class="left">
           <div class="iconfont header-back">&#xe624;</div>
       </div>
       <div class="title">
           <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
       </div>
       <div class="right">
           {{city}}
           <span class="iconfont">&#xe64a;</span>
       </div>
   </div>
</template>

<script>

export default {
    data() {
        return {
        city : '呼和浩特'}
    }
}
</script>

<style lang='scss' scoped>
    .header{
        height: 0.88rem;
        background :#00bcd4;
        display: flex;
        .left{
            width:0.8rem;
            .header-back{
                width:0.8rem;
                height: 0.88rem;
                line-height: 0.88rem;
                text-align: center;
                color:#fff;
                font-weight: bold;
                font-size: 0.32rem;
            }
        }
        .right{
            min-width:1.32rem;
            line-height: 0.88rem;
            color:#fff;
            padding:0 0.1rem;
        }
        .title{
            flex:1;
            background:#fff;
            border-radius:0.1rem;
            height:0.6rem;
            line-height:0.6rem;
            margin-top:0.14rem;
            color:#666;
        }
    }
</style>