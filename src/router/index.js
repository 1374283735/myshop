import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ 'views/home/Home.vue')
const Fenlei = () =>
  import(/* webpackChunkName: "home" */ 'views/fenlei/Fenlei.vue')
const Cart = () => import(/* webpackChunkName: "home" */ 'views/cart/Cart.vue')
const Me = () => import(/* webpackChunkName: "home" */ 'views/me/Me.vue')
const Detail = () => import(/* webpackChunkName: "home" */ 'views/detail/Detail.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/fenlei',
    name: 'Fenlei',
    component: Fenlei
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
