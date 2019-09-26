<template>
  <div class="home">
      <home-header></home-header> 
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icon :iconList="iconList"></home-icon>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import axios from 'axios'
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon

  },
  data(){
    return{
      swiperList:[],
      iconList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('./api/index.json').then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      this.swiperList=res.data.data.swiperList
      this.iconList = res.data.data.iconList
    }
  },
  mounted(){
    this.getHomeInfo()
  }
};
</script>
