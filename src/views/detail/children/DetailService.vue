<!--服务组件-->
<template>
  <div class="detail-service">
    <div class="service" v-for="(item,i) in services" :key="i">
      <img :src="item.icon" alt />
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailService',
  props: {
    services: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="scss">
.detail-service {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0 0 10px;
  border-bottom: 5px solid #eee;
  .service {
    width: 33%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    img {
      width: 18px;
      height: 18px;
      margin-right: 3px;
    }
    span {
      font-size: 14px;
    }
  }
}
</style>