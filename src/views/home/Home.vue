<template>
  <div class="home">
      <home-header></home-header> 
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icon :iconList="iconList"></home-icon>
      <Content :recommendList='recommendList'></Content>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import Content from './components/Content'
import axios from 'axios'

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    Content

  },
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[]      //主题内容
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('./api/index.json').then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      this.swiperList=res.data.data.swiperList
      this.iconList = res.data.data.iconList
      this.recommendList = res.data.data.recommendList  //获取indexjson数据
    }
  },
  mounted(){
    this.getHomeInfo()
  }
};
</script>
