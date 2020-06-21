<template>
  <div class="toast">
    <span>{{info}}</span>
    <img src="~assets/img/successful.png" alt />
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    info: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>
<style lang="scss">
.toast {
  width: 120px;
  height: 120px;
  border-radius: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 200;
  span {
    color: #fff;
    font-size: 18px;
  }
  img {
      width: 50px;
      height: 50px;
  }
}
</style>