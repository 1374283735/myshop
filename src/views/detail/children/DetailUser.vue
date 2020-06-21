<!--用户评价组件-->
<template>
  <div class="detail-user">
    <div class="user">用户评价</div>
    <div class="max" v-for="(item,i) in rateInfo" :key="i">
      <div class="item">
        <img :src="item.user.avatar" alt />
        <span class="name">{{item.user.uname}}</span>
      </div>
      <p class="msg">{{item.content}}</p>
      <div class="date">
        <span class="date-txt">{{item.created}}</span>
        <span class="date-style">{{item.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { formatDate } from '@/netwook/date'
export default {
  name: 'DetailUser',
  props: {
    rateInfo: {
      type: Array,
      default() {
        return []
      }
    }
  }
  //   filters: {
  //     showDate(value) {
  //       let date = new Date(value + 1000)
  //       return formatDate(date, 'yyyy-MM-dd')
  //     }
  //   }
}
</script>
<style lang="scss">
.detail-user {
  padding: 15px;
  .user {
    font-size: 18px;
    font-weight: bold;
    color: #b3b3b3;
    margin-bottom: 15px;
  }
  .max {
      border-top: 1px solid #ddd;
      padding-top: 5px;
      margin-bottom: 20px;
    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
      span {
        color: #b3b3b3;
      }
    }
    p {
      color: #b3b3b3;
      line-height: 22px;
    }
    .date {
      .date-txt {
        color: #b3b3b3;
        margin-right: 10px;
      }
      .date-style{
          color: #b3b3b3;
      }
    }
  }
}
</style>