<!--购物车结算栏-->
<template>
  <div class="cart-bottom" v-if="show">
    <cart-check v-model="all" @check="check"></cart-check>
    <span>全选</span>
    <div class="right">
      <span>合计:</span>
      <span class="price">￥{{sPrice}}</span>
    </div>
    <div class="jiesuan">
      <span>去结算</span>
    </div>
  </div>
</template>

<script>
import CartCheck from './CartCheck'
export default {
  name: 'CartBottom',
  data() {
    return {
      show: false
    }
  },
  created() {
    //当cartList的长度不为0的时候让CartCheck显示
    if (this.$store.state.cartList.length !== 0) {
      this.show = true
    }
  },
  methods: {
    check() {
      //判断当前cartList.checked是否有未选中的，如果有，让所有都选中，否则都不选中
      let t = this.$store.state.cartList.find(e => !e.checked)
      if (t) {
        this.$store.state.cartList.forEach(e => {
          e.checked = true
        })
      } else {
        this.$store.state.cartList.forEach(e => {
          e.checked = false
        })
      }
    }
  },
  computed: {
    //全选
    all() {
      return this.$store.state.cartList.every(e => e.checked)
    },
    sPrice() {
      let s = 0
      this.$store.state.cartList
        .filter(e => e.checked)
        .forEach(e => {
          s += e.price * e.count
        })
      return s.toFixed(2)
    }
  },
  components: {
    CartCheck
  }
}
</script>
<style lang="scss" scooped>
.cart-bottom {
  position: fixed;
  bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid #ddd;
  .right {
    width: 120px;
    margin-left: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .price {
      color: #a0c9aa;
      font-size: 18px;
    }
  }
  .jiesuan {
    width: 110px;
    height: 51px;
    background-color: #a0c9aa;
    text-align: center;
    line-height: 51px;
    color: #fff;
  }
}
</style>