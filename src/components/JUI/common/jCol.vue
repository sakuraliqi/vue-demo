<!--
 * @Descripttion: 列-公共组件
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-22 20:41:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-22 23:27:00
-->
<template>
  <Col v-bind="$attrs" v-on="$listeners">
    <div class="j-col">
      <span class="c-title">{{ title }}：</span>
      <div class="search-condition"><slot></slot></div>
    </div>
  </Col>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.j-col {
  display: flex;
  align-items: center;
  .search-input {
    flex: 1;
  }
  .c-title {
    width: 120px;
    text-align: right;
    margin-right: 15px;
  }
  .search-condition {
    width: calc(100% - 120px);
    display: flex;
    align-items: center;
  }
}
</style>