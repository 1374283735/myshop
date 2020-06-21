<!--头部导航栏-->
<template>
  <div class="detail-bar">
    <nav-bar class="nav-bar">
      <img class="back" slot="left" src="../../../assets/img/left.png" @click="back" alt />
      <div class="item" slot="center" v-for="(item,i) in data" :key="i" @click="clickTop(i)">
        <span :class="{active:i === controlInx}">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
export default {
  props: {
    controlInx: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  name: 'TopControl',
  methods: {
    back() {
      this.$router.back()
    },
    clickTop(i) {
      this.$emit('claickList', i) //向父级发送数据
    }
  },
  components: {
    NavBar
  }
}
</script>
<style lang="scss">
.detail-bar {
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  z-index: 99;
  .left {
    .back {
      width: 22px;
      height: 22px;
      margin-top: 15px;
      margin-left: 10px;
    }
  }
  .center {
    display: flex;
    flex-direction: row;

    .item {
      flex: 1;
      text-align: center;
      align-items: center;
      span {
        font-size: 16px;
        color: #b3b3b3;
        padding-bottom: 10px;
        &.active {
          color: #9cc3a9;
        }
      }
    }
  }
}
</style>