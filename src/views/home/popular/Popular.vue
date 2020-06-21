<template>
  <div class="maxPopular">
    <p>本周流行</p>
    <div class="listPopular">
      <div class="box" v-for="(item,i) in data" :key="i">
        <img :src="item.image" alt />
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 本周流行组件
export default {
  props: ['data'],
  name: 'Popular'
}
</script>
<style lang="scss" scoped>
.maxPopular {
  text-align: center;
  border-bottom: 4px solid #ddd;
  height: 223px;
  p {
    font-size: 22px;
    color: #919191;
  }
  .listPopular {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 4;
    flex-wrap: wrap;
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;
      margin-bottom: 20px;
      img {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
      }
      span {
        color: #b3b3b3;
        font-size: 14px;
      }
    }
  }
}
</style>
