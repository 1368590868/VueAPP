<template>
    <div class="wrapper">
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      v-if="this.swiperList.length"
    >
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    props:{
        swiperList:Array
    },
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:3000
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active{
    background:#fff;
}
.wrapper{
    width:100%;
    height:auto;
    padding-bottom: 0%;
    .swiper-img{
        width:100%;
    }
}
</style>
