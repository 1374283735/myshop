import request from './request'
const prefix = '/api'
// 轮播
function getSwiper() {
  return request({
    url: prefix + '/home/swiper',
    method: 'get'
  })
}
//推荐
function getRecommend() {
  return request({
    url: prefix + '/home/recommend',
    method: 'get'
  })
}
//本周流行
function getPopular() {
  return request({
    url: prefix + '/home/popular',
    method: 'get'
  })
}
//商品列表
function getGoodsList(type, page) {
  return request({
    url: prefix + '/home/goods',
    methods: 'get',
    params: {
      type,
      page
    }
  })
}

export { getSwiper, getRecommend, getPopular, getGoodsList }
