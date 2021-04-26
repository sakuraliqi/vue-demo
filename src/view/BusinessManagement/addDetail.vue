<!--
 * @Descripttion: 新增商机
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-23 11:06:31
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-23 14:08:46
-->
<template>
  <div class="addBusiness">
    <div class="title">新增商机信息</div>
    <businessForm></businessForm>
  </div>
</template>

<script>
import businessForm from '@/view/BusinessManagement/common/businessForm';

export default {
  components: {
    businessForm
  },
  props: {},
  data() {
    return {
      addForm: {

      },
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.addBusiness{
  .title{
    font-size:16px;
    font-weight: bolder;
    padding-left: 20px;
  }

}
</style>
