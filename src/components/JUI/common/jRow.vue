<!--
 * @Descripttion: 行-公共组件 
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-22 20:41:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-22 23:15:57
-->

<template>
  <Row class="j-row" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Row>
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
.j-row {
   &:not(:last-child){
       margin-bottom: 10px;
   }
}
</style>