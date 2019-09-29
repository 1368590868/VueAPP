<template>
  <div class="content">
    <div class="title">
      <span>热门推荐</span>
    </div>
    <ul class="PicturesOur">
      <li v-for="item in recommendList" :key="item.id">
        <img class="contentImg" :src="item.imgUrl" @click="navToDetail" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    recommendList: Array
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
.PicturesOur {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.title {
  width: 100%;
  background-color: #666;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  span {
    display: block;
    position: absolute;
    left: 0.5rem;
  }
  .contentImg {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5rem;
  }
}
</style>
