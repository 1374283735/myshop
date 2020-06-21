<!--店铺组件-->
<template>
  <div class="detail-shop">
    <div class="shop-info">
      <img :src="shop.shopLogo" alt />
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="msg">
      <div class="left">
        <div class="xl">
          <div class="sells">{{shop.cSells}}</div>
          <div class="xl-txt">总销量</div>
        </div>
        <div class="every">
          <div class="sells">{{shop.cGoods}}</div>
          <div class="xl-txt">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <table cellpadding="5">
          <tr v-for="(item,i) in shop.score" :key="i">
            <td>{{item.name}}</td>
            <td>
              <span class="score" :class="{'txt-color':item.isBetter}">{{item.score}}</span>
            </td>
            <td class="pj" :class="{'pj-color' : item.isBetter}">
              <span class="better">{{item.isBetter ? '高':' 低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="btn">进店逛逛</div>
  </div>
</template>

<script>
export default {
  naem: 'DetailShop',
  props: {
    shop: {
      type: Object
    }
  }
}
</script>
<style lang="scss">
.detail-shop {
  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #eee;
  padding: 0 0 10px 0;
  .shop-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    margin-left: 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .msg {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
    .left {
      width: 45%;
      display: flex;
      flex-direction: row;
      border-right: 1px solid #ddd;
      .xl {
        width: 50%;
      }
      .sells {
        font-size: 20px;
        margin-bottom: 10px;
      }

      .xl-txt {
        font-size: 14px;
      }
    }
    .right {
      margin-left: 20px;
      td {
        font-size: 14px;
        margin-right: 10px;
        .score {
          color: #5ea732;
        }
        .txt-color {
          color: red;
        }
      }
      .pj {
        background-color: #5ea732;
        .better {
          font-size: 16px;
          color: #fff;
        }
      }
      .pj-color {
        background-color: red;
      }
    }
  }
  .btn {
    width: 150px;
    height: 30px;
    margin: 10px auto;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    background-color: #f2f5f8;
  }
}
</style>