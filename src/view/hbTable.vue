<!--
 * @Descripttion: 
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-24 22:57:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-25 00:38:45
-->
<template>
  <div class="hbTable">
    <table border="1" width="100%" cellspacing="0" border-collapse="collapse">
      <tr>
        <td rowspan="2">付款人</td>
        <td>全称</td>
        <td>苏州xx有限公司</td>
        <td rowspan="2">收款人</td>
        <td>全称</td>
        <td>苏州xx有限公司</td>
      </tr>
      <tr>
        <td>账号</td>
        <td>1234544</td>
        <td>账号</td>
        <td>1234544</td>
      </tr>
      <tr>
        <td colspan="2">摘要</td>
        <td colspan="4">xxx备用金退款</td>
      </tr>
    </table>
    <div class="list">
      <Row class="header">
        <Col flex="1">流水金额</Col>
        <Col flex="2.97">1000000元</Col>
        <Col flex="1">待认领</Col>
        <Col flex="3">1000元</Col>
        <Col flex="0.99">认领比例</Col>
        <Col flex="3">30%</Col>
        <Col flex="1">分配详情</Col>
      </Row>

      <Row class="header" v-for="(item,index) in list" :key="index">
        <Col flex="1">{{item.d1}}</Col>
        <Col flex="3">{{item.d2}}</Col>
        <Col flex="1">{{item.d3}}</Col>
        <Col flex="1">{{item.d4}}</Col>
        <Col flex="1">{{item.d5}}</Col>
        <Col flex="1">{{item.d6}}</Col>
        <Col flex="1">{{item.d7}}</Col>
        <Col flex="1">{{item.d8}}</Col>
        <Col flex="1">{{item.d9}}</Col>
        <Col flex="1">{{item.d10}}</Col>
        <Col flex="1">{{item.d11}}</Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          d1: "认领子项目",
          d2: "xxx系统支撑平台",
          d3: "认领部门",
          d4: "xx部门",
          d5: "认领人",
          d6: "小玄子",
          d7: "已认领",
          d8: "5000",
          d9: "认领状态",
          d10:"稽查中",
          d11:"我有疑问"
        },
          {
          d1: "认领子项目",
          d2: "xxx系统支撑平台",
          d3: "认领部门",
          d4: "xx部门",
          d5: "认领人",
          d6: "小玄子",
          d7: "已认领",
          d8: "5000",
          d9: "认领状态",
          d10:"稽查中",
          d11:"我有疑问"
        },
          {
          d1: "认领子项目",
          d2: "xxx系统支撑平台",
          d3: "认领部门",
          d4: "xx部门",
          d5: "认领人",
          d6: "小玄子",
          d7: "已认领",
          d8: "5000",
          d9: "认领状态",
          d10:"稽查中",
          d11:"我有疑问"
        },
          {
          d1: "认领子项目",
          d2: "xxx系统支撑平台",
          d3: "认领部门",
          d4: "xx部门",
          d5: "认领人",
          d6: "小玄子",
          d7: "已认领",
          d8: "5000",
          d9: "认领状态",
          d10:"稽查中",
          d11:"我有疑问"
        },
      ],
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
.hbTable {
  width: 1000px;
  padding: 20px;
  table {
    border: 1px solid rgb(187, 187, 187);
    border-collapse: collapse;
    font-size: 12px;
    td {
      border: 1px solid rgb(187, 187, 187);
      height: 30px;
    }
  }
  .list {
    width: 100%;
    font-size: 12px;
    .header {
      border-top: 0;
      border-left: 1px solid rgb(187, 187, 187);
      /deep/.ivu-col {
        border-right: 1px solid rgb(187, 187, 187);
        border-bottom: 1px solid rgb(187, 187, 187);
        line-height: 30px;
        &:nth-child(odd) {
          background-color: rgb(232, 232, 232);
        }
      }
    }
  }
}
</style>