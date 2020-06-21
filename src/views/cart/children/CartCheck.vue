<!--购物车复选框-->
<template>
  <div class="cart-check" :class="{active : value}" @click="choose">
    <div class="checkbox"></div>
  </div>
</template>

<script>
export default {
  name: 'CartCheck',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    choose() {
        this.$emit('check')
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-check {
  display: flex;
  align-items: center;
  &.active .checkbox {
    background-image: url(~assets/img/check-on.png);
  }
  .checkbox {
    width: 30px;
    height: 30px;
    background-image: url(~assets/img/check.png);
    background-size: 30px 30px;
  }
}
</style>