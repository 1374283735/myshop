<template>
  <div class="detail">
    <!--头部-->
    <detail-bar :data="topControlData" :controlInx="controlInx" @claickList="claickList"></detail-bar>
    <img class="cartImg" src="~assets/img/cart.png" @click="toCart" alt />
    <toast :info="info" v-if="showSuccess"></toast>
    <scroll ref="scroll" class="wrapper" :probeType="3" @scroll="getPos">
      <!--轮播组件-->
      <detail-swiper ref="goods" :images="SwiperImages"></detail-swiper>
      <!--价格组件-->
      <detail-title :msgs="msgs"></detail-title>
      <!--服务组件-->
      <detail-service :services="services"></detail-service>
      <!--店铺组件-->
      <detail-shop :shop="shop"></detail-shop>
      <!--穿着效果组件-->
      <detail-goods :info="goodsInfo" @loadImg="loadImg"></detail-goods>
      <!--参数介绍组件-->
      <detail-parameter ref="parameter" :parameter="parameter"></detail-parameter>
      <!--用户评价组件-->
      <detail-user ref="user" :rateInfo="rateInfo"></detail-user>
    </scroll>
    <!--底部组件-->
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import { getDetail } from '@/netwook/detail'
import DetailBar from './children/DetailBar'
import Scroll from 'components/common/Scroll'
import DetailSwiper from './children/DetailSwiper'
import DetailTitle from './children/DetailTitle'
import DetailService from './children/DetailService'
import DetailShop from './children/DetailShop'
import DetailGoods from './children/DetailGoods'
import DetailParameter from './children/DetailParameter'
import DetailUser from './children/DetailUser'
import DetailBottomBar from './children/DetailBottomBar'
import Toast from 'components/common/Toast'
export default {
  name: 'Detail',
  data() {
    return {
      topControlData: ['商品', '参数', '评论'],
      controlInx: 0,
      SwiperImages: [],
      msgs: {},
      services: [],
      shop: {},
      goodsInfo: {},
      parameter: {},
      rateInfo: [],
      offsettops: [],
      info: '添加成功',
      showSuccess: false
    }
  },
  components: {
    DetailBar,
    Scroll,
    DetailSwiper,
    DetailBottomBar,
    DetailService,
    DetailTitle,
    DetailShop,
    DetailGoods,
    DetailParameter,
    DetailUser,
    Toast
  },
  created() {
    let id = this.$route.query.id
    getDetail(id).then(res => {
      console.log(res)
      this.SwiperImages = res.data.result.topImages
      this.msgs = res.data.result.itemInfo
      this.services = res.data.result.itemServices.services
      this.shop = res.data.result.shopInfo
      this.goodsInfo = res.data.result.detailInfo
      this.parameter = res.data.result.itemParams
      this.rateInfo = res.data.result.rateInfo.list
    })
  },
  methods: {
    loadImg() {
      this.offsettops.push(this.$refs.goods.$el.offsetTop)
      this.offsettops.push(this.$refs.parameter.$el.offsetTop)
      this.offsettops.push(this.$refs.user.$el.offsetTop)
    },
    claickList(i) {
      this.controlInx = i
      //点击的时候跳转到对应的主题
      this.$refs.scroll.scroll.scrollTo(0, -this.offsettops[i], 1000)
    },
    getPos(pos) {
      this._lithenScroll(-pos.y)
    },
    _lithenScroll(y) {
      let len = this.offsettops.length
      for (let i = 0; i < len; i++) {
        let w1 =
          i !== len - 1 && y >= this.offsettops[i] && y < this.offsettops[i + 1]
        let w2 = i === len - 1
        if (w1 || w2) {
          this.controlInx = i
          break
        }
      }
    },
    addToCart() {
      //添加到购物车
      let e = {
        id: this.msgs.itemId,
        img: this.SwiperImages[0],
        title: this.msgs.title,
        desc: this.msgs.desc,
        price: this.msgs.lowNowPrice
      }
      this.$store.commit('addCart', e)
      //弹出提示框
      this.showSuccess = true
      setTimeout(() => {
        this.showSuccess = false
      }, 1000)
    },
    toCart() {
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss">
.detail {
  position: relative;
  .cartImg {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 50px;
    z-index: 200;
  }
  .wrapper {
    position: relative;
    height: calc(100vh - 95px);
    overflow: hidden;
  }
}
</style>