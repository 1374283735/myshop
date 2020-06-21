<template>
  <div class="top-control">
    <div class="item" v-for="(item,i) in data" :key="i" @click="clickTop(i)">
      <span :class="{active:i === controlInx}">{{item}}</span>
    </div>
  </div>
</template>

<script>
// 选择条
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  name: 'TopControl',
  data() {
    return {
      controlInx: 0
    }
  },
  methods: {
    clickTop(i) {
      this.controlInx = i,
      this.$emit('claickList',i)//向父级发送数据
    }
  }
}
</script>
<style lang="scss">
.top-control {
  display: flex;
  flex-direction: row;
  height: 44px;
  line-height: 44px;
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 99;
  margin-bottom: 10px;
  .item {
    flex: 1;
    text-align: center;
    align-items: center;
    span {
      font-size: 14px;
      color: #b3b3b3;
      padding-bottom: 10px;
      &.active {
        border-bottom: 3px solid #9cc3a9;
        color: #9cc3a9;
      }
    }
  }
}
</style>