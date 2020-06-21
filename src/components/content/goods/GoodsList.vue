<template>
  <div class="goods-list">
    <goods-list-info v-for="(item,i) in data" :key="i" :data="item"></goods-list-info>
  </div>
</template>

<script>
import GoodsListInfo from './GoodsListInfo'
export default {
  naem: 'GoodsList',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListInfo
  }
}
</script>
<style lang="scss">
.goods-list {
  display: flex;
  flex-direction: row;
  flex: 2;
  padding: 0 5px;
  flex-wrap: wrap;
}
</style>