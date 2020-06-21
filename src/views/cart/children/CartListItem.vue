<!--购物车商品列表-->
<template>
  <div class="cart-list-item">
    <cart-check v-model="msgs.checked" @check="check"></cart-check>
    <div class="pic">
      <img :src="msgs.img" alt />
    </div>
    <div class="msg">
      <span class="title">{{msgs.title}}</span>
      <span class="desc">商品描述:{{msgs.desc}}</span>
      <span class="price">￥{{msgs.price}}</span>
      <span class="count">x{{msgs.count}}</span>
    </div>
  </div>
</template>

<script>
import CartCheck from './CartCheck'
export default {
  name: 'CartListItem',
  props: {
    msgs: {
      type: Object,
      defult() {
        return {}
      }
    }
  },
  methods:{
      check(){
          this.msgs.checked = !this.msgs.checked
      }
  },
  components: {
    CartCheck
  }
}
</script>
<style lang="scss" scoped>
.cart-list-item {
  display: flex;
  flex-direction: row;
  padding: 10px 5px;
  border-bottom: 1px solid #ddd;
  .pic {
    margin-left: 10px;
    margin-right: 10px;
    img {
      width: 80px;
      height: 115px;
      border-radius: 6px;
    }
  }
  .msg {
    span {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .title{
        font-size: 16px;
        margin-bottom: 20px;
    }
    .desc{
        font-size: 14px;
        margin-bottom: 20px;
    }
    .price{
        color: #A0C9AA;
    }
    .count{
        color: #999;
        margin-left: 3px;
    }
  }
}
</style>