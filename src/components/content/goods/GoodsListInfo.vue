<template>
  <div class="goods-list-info" @click="toDetail">
    <div class="pics">
      <img class="pic" v-lazy="data.img" alt="">
      <!-- <img class="pic" :src="data.img" alt /> -->
      <span>已售{{data.sale}}件</span>
    </div>
    <div class="title">{{data.title}}</div>
    <div class="msg">
      <span class="price">&yen;{{data.price}}</span>
      <div class="sc">
        <img src="../../../assets/img/xx.png" alt />
        <span>{{data.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListInfo',
  props: ['data'],
  methods: {
    toDetail(){
      this.$router.push({
        path:'/detail',
        query:{
          id:this.data.iid
        }
      })
    }
  }
}
</script>
<style lang="scss">
.goods-list-info {
  width: 50%;
  margin-bottom: 10px;
  .pics {
    width: 180px;
    position: relative;
    margin-bottom: 10px;
    img {
      width: 180px;
      height: 270px;
    }
    span {
      font-size: 14px;
      position: absolute;
      left: 0;
      bottom: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
  .title {
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
    color: #666666;
  }
  .msg {
    display: flex;
    flex-direction: row;
    align-items: center;
    .price {
      font-size: 14px;
      color: #a0c9aa;
    }
    .sc {
      margin-left: 80px;
      img {
        width: 15px;
        height: 15px;
      }
      span {
        font-size: 14px;
      }
    }
  }
}
</style>