<template>
  <div class="home">
    <nav-bar class="top">
      <div slot="center">时尚街</div>
    </nav-bar>
    <top-control ref="topControl2" :data="topControlData" @claickList="claickList" v-show="topShow"></top-control>
    <scroll
      ref="scroll"
      class="wrapper"
      :click="true"
      :pullUpLoad="true"
      :probeType="3"
      @pullup="loadPage"
      @scroll="getPos"
    >
    <!-- 轮播 -->
      <home-swiper :data="swiperData"></home-swiper>
      <recommend :data="recommendData"></recommend>
      <popular :data="popularData"></popular>
      <top-control
        ref="topControl"
        :data="topControlData"
        @claickList="claickList"
        v-show="!topShow"
      ></top-control>
      <goods-list :data=" this.goodsMsg[this.ListType].list"></goods-list>
      <div class="msg" v-show="showMsg">到底了~~</div>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
import Scroll from 'components/common/Scroll'
import HomeSwiper from './swiper/HomeSwiper'
import Recommend from './recommend/Recommend'
import Popular from './popular/Popular'
import TopControl from 'components/content/TopControl'
import GoodsList from 'components/content/goods/GoodsList'
import {
  getSwiper,
  getRecommend,
  getPopular,
  getGoodsList
} from '@/netwook/home.js'
export default {
  name: 'Home',
  data() {
    return {
      swiperData: [],
      recommendData: [],
      popularData: [],
      topControlData: ['流行', '新款', '经典'],
      topControlDataEn: ['pop', 'new', 'classic'],
      ListType: 'pop',
      goodsMsg: {
        pop: { list: [], sPage: 0, page: 0 },
        new: { list: [], sPage: 0, page: 0 },
        classic: { list: [], sPage: 0, page: 0 }
      },
      showMsg: false,
      topShow: false,
      h: 0
    }
  },
  created() {
    this.swiper()
    this.recommend()
    this.popular()
    this.goods('pop')
    this.goods('new')
    this.goods('classic')
  },
  mounted() {
    this.h = this.$refs.topControl.$el.offsetTop
    console.log(this.h)
  },
  methods: {
    // 轮播数据获取
    swiper() {
      getSwiper().then(res => {
        // console.log(res)
        if (res.returnCode === 'SUCCESS') {
          this.swiperData = res.data[140378].list
        }
      })
    },
    //推荐数据获取
    recommend() {
      getRecommend().then(res => {
        // console.log(res)
        if (res.ret === 'SUCCESS') {
          this.recommendData = res.data[122995].list
        }
      })
    },
    //流行数据获取
    popular() {
      getPopular().then(res => {
        // console.log(res)
        if (res.ret === 'SUCCESS') {
          this.popularData = res.data[132826].list
        }
      })
    },
    //接受Goodsist发送过来的数据
    claickList(i) {
      // console.log(i)
      this.ListType = this.topControlDataEn[i]
      this.$refs.topControl.controlInx = i
      this.$refs.topControl2.controlInx = i
    },
    //商品列表数据获取
    goods(type) {
      let page = ++this.goodsMsg[type].page
      getGoodsList(type, page).then(res => {
        // console.log(res)
        if (res.ret === 'SUCCESS') {
          this.goodsMsg[type].list.push(...res.data.wall.docs)
          this.goodsMsg[type].sPage = res.data.param.totalPages
          this.$refs.scroll.scroll.finishPullUp() //标识此次下拉动作的结束
        }
      })
    },
    loadPage() {
      if (
        this.goodsMsg[this.ListType].page < this.goodsMsg[this.ListType].sPage
      ) {
        this.goods(this.ListType)
      } else {
        this.showMsg = true
      }
    },
    getPos(pos) {
      this.topShow = -pos.y >= this.h
    }
  },
  watch: {
    topShow(newVal) {
      let H = this.$refs.scroll.$el.offsetHeight  //原始高度
      if (newVal) {
        this.$refs.scroll.$el.style.height = H - 49+ 'px'
      } else {
        this.$refs.scroll.$el.style.height = H + 49 + 'px'
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Popular,
    TopControl,
    GoodsList,
    Scroll
  }
}
</script>
<style lang="scss">
.home {
  padding-top: 44px;
  margin-bottom: 51px;
  .top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #9cc3a9;
    color: #fff;
    z-index: 99;
  }
  .wrapper {
    position: relative;
    height: calc(100vh - 95px);
    overflow: hidden;
  }
  .msg {
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #ddd;
  }
}
</style>
