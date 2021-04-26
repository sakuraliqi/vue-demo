<!--
 * @Descripttion: 
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-19 19:18:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-23 09:15:28
-->
<template>
  <div class="j-pagination" :class="placement">
    <Page
      :page-size="pageSize"
      :page-size-opts="pageSizeArr"
      v-bind="$attrs"
      v-on="$listeners"
    ></Page>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // 位置
    placement:{
      type: String,
      default: 'right',
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10,
    },
    // 每页条数数组
    pageSizeArr: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50];
      },
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
.j-pagination {
  display: flex;
  padding-right: 19px;
  margin-top: 30px;
  &.right{
    justify-content: flex-end;
  }
  &.center{
    justify-content: center;
  }
  &.left{
    justify-content: flex-start;
  }
}
</style>