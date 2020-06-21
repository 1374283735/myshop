<!-- 轮播组件-->
<template>
  <swiper :options="swiperOption" class="detail-swiper">
    <swiper-slide v-for="(item,i) in images" :key="i">
      <img :src="item" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
export default {
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  name: 'DetailSwiper',
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        slidesPerView: 1.5,
        spaceBetween: 16,
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
<style lang="scss" >
.detail-swiper {
    height: 340px;
  img {
    width: 100%;
    height: 340px;
    border-radius: 5px;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.4;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 0.9;
  }
  .swiper-pagination {
    text-align: left;
  }
}
</style>
