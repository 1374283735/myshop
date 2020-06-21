<template>
  <div class="tab-bar">
    <router-link to="home" class="item">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="fenlei" class="item">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </router-link>
    <router-link to="cart" class="item">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="me" class="item">
      <i class="iconfont icon-me"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>
<style lang="scss">
@import url('~assets/css/iconfont.css');
.tab-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  border-top: 1px solid #eee;
  position: fixed;
  bottom: 0;
  align-items: center;
  z-index: 99;
  background-color: #fff;
  .item {
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    i {
      margin-bottom: 5px;
    }
  }
  .router-link-active {
    color: #9cc3a9;
  }
}
</style>
