<template>
  <div id="BusinessManagement">
    <j-query class="business-con">
      <div slot="left">
        <j-row>
          <j-col span="12" title="商机编号">
            <Input
              v-model="businessNumber"
              placeholder="请输入商机编号"
              clearable
            />
          </j-col>
          <j-col span="12" title="商机名称">
            <Input
              v-model="businessName"
              placeholder="请输入商机名称"
              clearable
            />
          </j-col>
        </j-row>
        <j-row>
          <j-col span="12" title="商机类型">
            <Select v-model="businessType" clearable>
              <Option
                v-for="item in businessTypeList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </j-col>
          <j-col span="12" title="商机状态">
            <Select v-model="businessStatus" clearable>
              <Option
                v-for="item in businessStatusList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </j-col>
        </j-row>
        <j-row>
          <j-col span="12" title="商机金额">
            <Input placeholder="" v-model="businessAmount1" />
            <span style="margin: 0 10px">-</span>
            <Input placeholder="" v-model="businessAmount2" />
            <div class="unit">万元</div>
          </j-col>
          <j-col span="12" title="客户经理">
            <Input v-model="customer" placeholder="请输入客户经理" clearable />
          </j-col>
        </j-row>
      </div>
      <div slot="button" class="button-list">
        <j-button type="negative">查询</j-button>
        <j-button type="negative" @click="addBusiness">新增</j-button>
      </div>
    </j-query>
    <div class="table">
      <Table border :columns="columns2" :data="data3"></Table>
      <j-pagination
        :total="total"
        :current="pageNo"
        :page-size="pageSize"
        placement="center"
        @on-change="onchange"
        @on-page-size-change="pageSizeChange"
        show-elevator
        show-total
        show-sizer
      >
      </j-pagination>
    </div>
    <checkScheduleDrawer
      v-if="isCheckScheduleFlag"
      v-model="isCheckScheduleFlag"
    />
  </div>
</template>

<script>
import checkScheduleDrawer from "@/view/BusinessManagement/modal/checkScheduleDrawer"; // 查看进度
export default {
  data() {
    return {
      businessNumber: "", // 商机编号
      businessName: "", // 商机名称
      businessType: "", //商机类型
      businessStatus: "", // 商机状态
      businessAmount1: "", // 商机金额
      businessAmount2: "", // 商机金额
      customer: "", // 客户经理
      businessTypeList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      businessStatusList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      columns2: [
        {
          title: "商机编号",
          key: "code",
          minWidth: 100,
          align: "center",
        },
        {
          title: "商机名称",
          key: "name",
          minWidth: 200,
          align: "center",
        },
        {
          title: "收入类型",
          key: "area",
          width: 150,
          align: "center",
        },
        {
          title: "客户经理",
          key: "e",
          width: 150,
          align: "center",
        },
        {
          title: "商机状态",
          key: "manager",
          width: 150,
          align: "center",
        },
        {
          title: "商机金额（万元）",
          key: "source",
          width: 150,
          align: "center",
        },
        {
          title: "操作",
          key: "操作",
          fixed: "right",
          width: 200,
          align: "center",
          render: (h, params) => {
            return <div>{this.renderOperation(params)}</div>;
          },
        },
      ],
      data3: [
        {
          num: 1,
          code: "XXXX000001",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
        {
          num: 2,
          code: "XXXX000002",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
        {
          num: 3,
          code: "XXXX000003",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
        {
          num: 4,
          code: "XXXX000004",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
        {
          num: 5,
          code: "XXXX000005",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
        {
          num: 6,
          code: "XXXX000006",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
        {
          num: 7,
          code: "XXXX000007",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
        {
          num: 8,
          code: "XXXX000008",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
        {
          num: 9,
          code: "XXXX000009",
          name: "永济市凯通印染有限责任公司局域网建设",
          area: "山西省-运城市",
          e: "12000",
          manager: "张三",
          source: "商情系统",
          stage: "概算",
          zip: 100000,
        },
      ],
      total: 0,
      pageNo: 1,
      pageSize: 10,
      isCheckScheduleFlag: false, // 控制进度的显示
      scheduleItem: {}, // 进度携带参数
    };
  },
  components: {
    checkScheduleDrawer,
  },
  methods: {
    addBusiness() {
      this.$router.push("/addBussiness");
    },
    // 操作列
    renderOperation(params) {
      return (
        <div class="action">
          <span
            onClick={(e) => {
              this.openQuery(params);
            }}
          >
            查询
          </span>
          <span
            onClick={(e) => {
              this.lookBusinessProgress(params);
            }}
          >
            查看商机进度
          </span>
        </div>
      );
    },
    // 查看商机进度
    lookBusinessProgress(params) {
      this.isCheckScheduleFlag = true;
      this.scheduleItem = params.row;
    },
    // 查询-打开详情页
    openQuery(params){
      this.$router.push("/indexDetail");
    },
    // 页码改变触发
    onchange() {},
    // 条数改变触发
    pageSizeChange() {},
    goView() {
      this.$router.push({
        path: "/indexDetail",
      });
    },
  },
};
</script>
<style>
#BusinessManagement .div1 input::-webkit-input-placeholder {
  color: #ccc;
  font-size: 14px;
  text-align: center;
}
#BusinessManagement td.ivu-table-column-center {
  font-size: 12px;
}
#BusinessManagement.ivu-select-small.ivu-select-single
  .ivu-select-selection
  .ivu-select-placeholder,
.ivu-select-small.ivu-select-single
  .ivu-select-selection
  .ivu-select-selected-value {
  text-align: center;
  font-size: 12px;
}

#BusinessManagement .ivu-btn-text {
  color: #0575d2;
  font-size: 12px;
}
#BusinessManagement td.ivu-table-column-center:nth-of-type(2) {
  color: #0575d2;
}
#BusinessManagement td.ivu-table-column-center:nth-of-type(3) {
  color: #0575d2;
}
</style>
<style lang="less" scoped>
label {
  color: #3f3f3f;
  font-weight: 400;
  font-size: 14px;
  font-family: "黑体";
  line-height: 40px;
  padding-left: 20px;
  padding-right: 25px;
}
#BusinessManagement {
  border: 1px solid #ccc;
  height: 100%;
  .business-con {
    .unit {
      width: 80px;
      margin-left: 10px;
    }
    .button-list {
      position: absolute;
      bottom: 0;
      /deep/ .j-button {
        display: block;
        &:nth-child(1) {
          margin-bottom: 10px;
        }
      }
    }
  }
}
.div1 {
  margin-top: 30px;
}
.div2 {
  display: flex;
  justify-content: flex-end;
}
.table {
  margin: 0;
  padding: 0 15px;
  font-weight: 0;
  color: #515a6e;
  /deep/ .ivu-table {
    width: 100%;
    .action {
      color: rgb(101, 101, 101);
      font-size: 12px;
      > span {
        cursor: pointer;
        margin-right: 10px;
        color: rgb(72, 127, 239);
      }
    }
  }
}
.page {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
