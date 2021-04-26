<!--
 * @Descripttion: 查询条件公共组件
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-22 20:41:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-22 23:18:45
-->
<template>
  <div class="j-query">
    <!-- 左侧查询条件 -->
    <div class="left-con">
      <slot name="left" />
    </div>
    <!-- 右侧查询条件 -->
    <div class="right-button">
      <slot name="button" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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
.j-query {
  display: flex;
  margin: 20px 0px 40px 20px;
  .left-con {
    flex: 8;
  }
  .right-button {
    flex: 2;
    position: relative;
    padding-left: 20px;
  }
}
</style>