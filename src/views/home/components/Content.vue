<template>
<div class="c-content">
    <div class="title">
        <span>热门推荐</span>
    </div>
    <div>
        <ul class="list">
            <li class="list-item" v-for="item in recommendList" :key="item.id">
                <img class="content-img" :src="item.imgUrl" @click="navToDetail" />
                <div class="desc">
                  <div class="name">{{item.title}}</div>
                  <div class="desc">{{item.desc}}</div>
                  <div class="price">¥60起</div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: {
        recommendList: Array
    },
    created(){
     
    },
    mounted(){
       console.log(this.recommendList);
    },
    methods: {
        navToDetail() {
            /*  console.log(this.$router)
             console.log(this.$route) */
            this.$router.push('detail')
        }
    }
}
</script>

<style lang="scss" scoped>
.c-content{
  
}
.title{
    margin:10px 5px;
}
.title span{
  font-size: 16px;
}
.list-item{
  display: flex;
  flex-flow:row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin:10px 5px;
}
.content-img{
  width: 120px;
  height: 90px;
  margin-right: 10px;
}
.desc{
  line-height: 1.5;
}
.name{
  font-size: 16px;
  font-weight: 100;
  color:rgba(0,0,0,0.8)
}
.price{
  color:#ff9616;
  font-size: 16px;
  font-weight: bold;
}
</style>
