<!--价格组件-->
<template>
  <div class="detail-title">
    <div class="title">{{msgs.title}}</div>
    <div class="price">
      <span class="now">￥{{msgs.lowNowPrice}}</span>
      <span class="old">{{msgs.lowPrice}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    msgs: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
.detail-title {
  margin-top: 15px;
  padding: 0 8px;
  border-bottom: 5px solid #eee;
  .title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .price {
    margin-bottom: 10px;
    .now {
      font-size: 26px;
      color: #a0c9aa;
      margin-right: 8px;
    }
    .old {
      color: #888;
      text-decoration: line-through;
    }
  }
}
</style>