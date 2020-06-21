<template>
  <swiper :options="swiperOption" class="home-swiper">
    <swiper-slide v-for="(item,i) in data" :key="i">
      <img :src="item.image_800" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
// 轮播组件
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
export default {
  props: ['data'],
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        autoplay: 4000,
        pagination: '.swiper-pagination'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
.home-swiper {
  margin-bottom: 5px;
  height: 130px;
  img {
    width: 100%;
    height: 130px;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.4;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 0.9;
  }
}
</style>
