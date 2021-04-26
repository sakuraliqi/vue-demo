<!--
 * @Descripttion: 查看商机进度
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-23 09:08:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-23 23:50:18
-->
<template>
  <div>
    <Drawer
      class-name="checkScheduleDrawer"
      :closable="false"
      :value="value"
      @on-visible-change="onVisibleChange"
      width="30%"
    >
      <div class="title">
        {{ item.title }}
      </div>
      <div class="check-time">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in activities"
            :key="index"
            :color="item.isSuccess ? 'green' : '#E4E7ED'"
            :class="[item.isSuccess ? 'is-success' : '']"
          >
            <div class="info-one">
              <span class="info-title">{{ item.title }}</span>
              <span class="info-content">{{ item.timestamp }}</span>
              <span class="info-content" style="margin-right: 20px">{{
                item.fzr
              }}</span>
              <span class="info-success" v-show="item.isSuccess">已完成</span>
            </div>
            <div class="info-two">{{ item.content }}</div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="bottom-con">
        <span class="next-button">下一页</span>
      </div>
    </Drawer>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    scheduleItem: {
      type: Object,
    },
  },
  data() {
    return {
      item: {
        title: "2020年苏州市xxx科技有限公司",
      },
      activities: [
        {
          title: "商情认领",
          timestamp: "2018-08-21 09:29:39",
          isSuccess: true,
          fzr: "小玄子",
          content: "从部门商情里认领相关商情",
        },
        {
          title: "商情建立",
          timestamp: "2018-08-25 09:29:39",
          isSuccess: true,
          fzr: "小玄子",
          content: "商情转换商机",
        },
        {
          title: "利润测算",
          timestamp: "2018-08-29 09:29:39",
          isSuccess: true,
          fzr: "小玄子",
          content: "完成商机审批",
        },
        {
          title: "投标",
          content: "上传标书等投标文件",
        },
        {
          title: "中标",
          content: "提交中标通知书",
        },
        {
          title: "生成合同",
          content: "商机转化合同",
        },
        {
          title: "合同解析",
          content: "合同解析",
        },
        {
          title: "立项",
          content: "获取项目信息",
        },
        {
          title: "商机归档",
          content: "商机信息及文件归档",
        },
        {
          title: "回款",
          content: "收款计划跟进",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 关闭
    onVisibleChange(flag) {
      this.$emit("input", flag);
    },
  },
  created() {
    console.log("打开抽屉");
  },
  mounted() {},
};
</script>
<style lang="less">
.checkScheduleDrawer {
  .title {
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: bolder;
    font-size: 15px;
    text-align: center;
  }
  .check-time {
    margin-left: 50px;
    .el-timeline-item {
      &.is-success {
        .el-timeline-item__tail {
          border-left: 1px solid green;
        }
      }
    }
    .info-one {
      display: flex;
      align-items: center;
      .info-title {
        font-weight: bolder;
        font-size: 12px;
        margin-right: 30px;
      }
      .info-content {
        font-size: 12px;
        margin-right: 10px;
      }
      .info-success {
        font-size: 12px;
        color: green;
      }
    }
    .info-two {
      font-size: 12px;
      margin-top: 5px;
      padding-left: 10px;
    }
  }
  .bottom-con {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    font-size: 12px;
    .next-button {
      cursor: pointer;
      width: 55px;
      height: 55px;
      border: 1px solid blue;
      border-radius: 100px;
      text-align: center;
      line-height: 55px;
    }
  }
}
</style>