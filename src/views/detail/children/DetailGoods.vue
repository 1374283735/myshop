<!--穿着效果组件-->
<template>
  <div class="detail-goods" v-if="Object.keys(info).length !== 0">
    <div class="desc">{{info.desc}}</div>
    <div class="key">{{info.detailImage[0].key}}</div>
    <div class="list">
      <img v-for="(item,i) in info.detailImage[0].list" :key="i" v-lazy="item" @load="loadImg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoods',
  props: {
    info: {
      type: Object
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    loadImg() {
      this.count++
      if (this.count === this.info.detailImage[0].list.length) {
        this.$emit('loadImg')
      }
    }
  }
}
</script>
<style lang="scss">
.detail-goods {
  padding: 10px;
  .desc {
    font-size: 16px;
  }
  .key {
    margin-top: 20px;
    font-size: 18px;
  }
  .list {
    font-size: 0;
    img {
      width: 100%;
    }
  }
}
</style>