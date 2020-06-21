<!-- 底部列表-->
<template>
  <div class="detail--bottom-bar">
    <div class="pic">
      <div class="icon">
        <i class="iconfont icon-xinxi"></i>
        <span>客服</span>
      </div>
      <div class="icon">
        <i class="iconfont icon-dianpu"></i>
        <span>店铺</span>
      </div>
      <div class="icon">
        <i class="iconfont icon-xingxing"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="btn">
      <div class="get-car" @click="addCart">加入购物车</div>
      <div class="gm">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>
<style lang="scss">
.detail--bottom-bar {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  z-index: 100;
  border-top: 1px solid #eee;
  background-color: #fff;
  .pic {
    display: flex;
    flex-direction: row;
    width: 50%;
    align-items: center;
    text-align: center;
    .icon {
      display: flex;
      flex-direction: column;
      flex: 1;
      i {
        color: #919191;
      }
      span {
        color: #919191;
        font-size: 14px;
      }
    }
  }
  .btn {
    display: flex;
    flex-direction: row;
    flex: 1;
    .get-car {
      width: 50%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #e2efe5;
      color: #a9ceb1;
      font-size: 16px;
    }
    .gm {
      width: 50%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #a0c9aa;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
