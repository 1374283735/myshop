<!--购物车-->
<template>
  <scroll :click="true">
    <div class="cart-lsit">
      <cart-list-item v-for="item in cartList" :key="item.id" :msgs="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/Scroll'
import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  props: {
    cartList: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  components: {
    CartListItem,
    Scroll
  }
}
</script>
<style lang="scss">
</style>