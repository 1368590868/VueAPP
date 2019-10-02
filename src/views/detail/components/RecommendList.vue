<template>
<div class="recommend-wrap">
    <div class="r-header">
        <img src="../../../assets/images/recommend.png" class="h-img" alt="">
        <div class="title">去哪儿推荐</div>
    </div>
    <div class="list">
        <div class="list-item" v-for="(item,index) of list" :key="index">
            <div class="left">
                <div class="name">{{item.name}}</div>
                <div class="book-time">可定10月2日</div>
                <div class="tag-list">
                    <span v-for="(item1,index1) of item.tagList" :key="index1" class="tag-item">{{item1}}</span>
                </div>
            </div>
            <div class="right">
                <div class="price"><span>¥</span>{{item.price}}</div>
                <div class="book">{{item.isAvailable?"预定":"查看"}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        list: Array
    },

    created() {
        console.log(this.list);
    }
}
</script>

<style scoped>
.recommend-wrap {
    margin-top: 10px;
    padding: 0px 5px;
    background: #fff;
}

.r-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    padding: 10px 10px;
}

.h-img {
    height: 28px;
    margin-right: 10px;
}

.list {
}

.list-item {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding:5px 5px;
    border-top: 1px solid rgba(26, 26, 15, 0.1);
}
.left{
    flex:1;
    line-height: 1.5;
}
.name{
    font-weight: 100;
    color:rgba(0,0,0,0.8);
    font-size: 14px;
    line-height: 1.5;
}
.right{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    width: 100px;
}
.book-time{
    font-size: 12px;
      color:rgba(0,0,0,0.6);
}
.tag-list{
    padding-top: 5px;
}
.tag-item{
    display: inline-block;
    padding:2px 2px;
    border:1px solid #00bcd4;
    color:#00bcd4;
    font-size: 12px;
}
.tag-item + .tag-item{
    margin-left: 5px;
}
.price{
    font-size: 20px;
    color:#ff9800;
    font-weight: bold;
}
.price span{
    font-size: 12px;
}
.book{
    width: 60px;
    color: #fff;
    font-size: 14px;
    background-image: linear-gradient(120deg,rgba(255,150,22,1),rgba(246,173,83,1));
    border-radius: 5px;
    text-align: center;
    padding:5px 10px;
}
</style>
