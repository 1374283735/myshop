<!--购物车主页-->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <img slot="left" src="~assets/img/back.png" @click="back" alt />
      <span slot="center">购物车({{cartCount}})</span>
    </nav-bar>
    <!--购物车商品列表-->
    <cart-list :cartList="cartList"></cart-list>
    <!--购物车结算栏-->
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
import CartList from './children/CartList'
import CartBottom from './children/CartBottom'
export default {
  name: 'Cart',
  data() {
    return {//传给CartList
      cartList: this.$store.state.cartList
    }
  },
  methods: {
    back() {//回到Home页
      this.$router.push('/home')
    }
  },
  computed: {
    cartCount() {//获取cartList长度
      return this.$store.state.cartList.length
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottom
  }
}
</script>
<style lang="scss" scoped>
.cart{
  position: relative;
.nav-bar {
  background-color: #9cc3a9;
  img {
    margin-top: 15px;
    width: 26px;
    height: 26px;
  }
  span {
    color: #fff;
    font-size: 18px;
  }
}
}

</style>