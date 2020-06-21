<!--参数介绍组件-->
<template>
  <div class="detail-parameter" v-if="Object.keys(parameter).length !== 0">
    <table v-for="(tables,i) in parameter.rule.tables" :key="i" cellpadding="25">
      <tr v-for="(msg,i) in tables" :key="i">
        <td v-for="(par,i) in msg" :key="i">{{par}}</td>
      </tr>
    </table>
    <table cellpadding="25">
      <tr v-for="(set,key) in  parameter.info.set" :key="key" >
        <td class="key">{{key}}</td>
        <td class="set">{{set}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParameter',
  props: {
    parameter: {
      type: Object
    }
  }
}
</script>
<style lang="scss">
.detail-parameter{
    padding: 10px;
    border-bottom: 5px solid #eee;
  table tr td {
    border-bottom: 1px solid #ddd;
  }
  .set{
      color: #A9CEB2;
  }
}
</style>