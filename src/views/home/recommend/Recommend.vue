<template>
  <div class="max">
    <div class="list" v-for="(item,i) in data" :key="i">
      <img :src="item.backgroundImage" alt />
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
// 推荐组件
export default {
  props: ['data'],
  name: 'Recommend'
}
</script>
<style lang="scss">
.max {
  display: flex;
  flex-direction: row;
  border-bottom: 4px solid #ddd;
  padding: 10px;
  height: 106px;
  .list {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 25%;
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }
    span {
      font-size: 14px;
      color: #adadad;
    }
  }
}
</style>
