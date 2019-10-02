<template>
    <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in pages" :key="index">
        <div class="icon" v-for="icon in item" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-inner" :src="icon.imgUrl" />
          </div>
          <p class="icon-desc">{{ icon.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    props:{
        iconList:Array
    },
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            }
        }
    },
    computed:{
        pages(){
            const pages = []
            this.iconList.forEach((item,index)=>{
                const page = Math.floor(index / 8)
                if(!pages[page])
                {pages[page] = []}
                pages[page].push(item)
            })
    return pages
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper /deep/ .swiper-container{
    width:100%;
    height:0;
    padding-bottom: 50%;
}
.wrapper{
    width:100%;
    padding-bottom:50%;
    margin-top:0.1rem;
}
.icon{
    float:left;
    width:25%;
    height:0;
    padding-bottom:25%;
    position:relative;
    .icon-img{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0.5rem;
        .icon-img-inner{
            height:100%;
        }
    }
    .icon-desc{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        height:0.5rem;
        line-height: 0.5rem;
        text-align:center;
    }
}
</style>