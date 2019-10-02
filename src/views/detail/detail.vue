<template>
  <div class="detail-wrap">
    <div class="picture-area">
      <site-picture
        :name="site.name"
        :level="site.level"
        :url="site.mainPicture"
        :count="site.pictureCount"
      ></site-picture>
    </div>
    <div class="description">
      <site-description></site-description>
    </div>
    <div class="notice">
      <site-notice :notice="site.notice"></site-notice>
    </div>
    <div class="recommend">
      <recommend-list :list="site.recommendList"></recommend-list>
    </div>
    <div class="back" @click="navBack">
      <span>&lt;</span>
    </div>
    <div class="ticket">门票</div>
    <div class="product-list">产品列表</div>
  </div>
</template>

<script>
import SitePicture from './components/SitePicture'
import SiteDescription from './components/SiteDescription'
import SiteNotice from './components/SiteNotice'
import RecommendList from './components/RecommendList'
export default {
  components: {
    SitePicture,
    SiteDescription,
    SiteNotice,
    RecommendList
  },
  data() {
    return {
      //整个页面需要的动态数据,先初始化
      site: {
        name: '故宫',
        level: 'AAAAA',
        mainPicture:
          'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg',
        pictureCount: 11,
        address: '北京市东城区景山前街4号',
        notice: '2020年9月24日至10月1日,将暂停售票。',
        //该景点票价
        price: [
          {
            type: '故宫预售成人票',
            am: 60,
            pm: 60
          },
          {
            type: '故宫预售老人票',
            am: 30,
            pm: 30
          },
          {
            type: '故宫预售学生票',
            am: 20,
            pm: 20
          }
        ],
        //这个景点所有产品套票
        productList: [
          {
            type: '故宫深度讲解',
            list: [
              {
                description: '3小时深度游讲解（不含故宫大门票）',
                price: 65
              },
              {
                description: '3小时深度游讲解(含故宫门票)（9:00场）',
                price: 65
              }
            ]
          },
          {
            type: '门票+导游讲解',
            list: [
              {
                description: '故宫成人票+人工讲解+无线耳麦',
                price: 85
              },
              {
                description: '故宫学生票+人工讲解+无线耳麦',
                price: 49
              }
            ]
          },
          {
            type: '门票+我是故宫小主人研学课讲解',
            list: [
              {
                description: '成人票（09:00入园）',
                price: 138
              },
              {
                description: '学生票（09:00入园）',
                price: 98
              }
            ]
          },
          {
            type: '秀才说·网红导游讲解',
            list: [
              {
                description: '秀才说网红导游讲解（不含门票）',
                price: 68
              },
              {
                description:
                  '故宫成人票+珍宝馆+秀才说网红导游+定制礼物+无线耳麦',
                price: 128
              }
            ]
          }
        ],
        //推荐列表
        recommendList: [
          {
            name: '北京故宫大门票+珍宝馆+资深导游讲解（配无线耳麦）*成人票',
            tagList: ['自营', '无条件退'],
            price: 109,
            isAvailable: true
          },
          {
            name: '【上午场】故宫成人票+深度讲解+无线耳麦',
            tagList: ['无需换票', '无条件退'],
            price: 188,
            isAvailable: true
          },
          {
            name: '北京故宫大门票+珍宝馆+资深导游讲解（配无线耳麦）*成人票',
            tagList: ['自营', '无条件退'],
            price: 109,
            isAvailable: false
          }
        ]
      }
    }
  },
  methods: {
    navBack() {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="scss">
.detail-wrap {
  width: 100%;
  background: #f5f5f5;
}

.back {
  position: fixed;
  top: 20px;
  left: 5px;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 18px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>
