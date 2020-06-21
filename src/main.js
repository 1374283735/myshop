import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  preLoad: 1,
  // error: require('./assets/img/error.jpg'),
  // loading: require('./assets/img/homePage_top.jpg'),
  attempt: 2
})
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
