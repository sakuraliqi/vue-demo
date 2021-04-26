<!--
 * @Descripttion: 详情tab页-表单公共内容
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-23 11:28:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 00:03:11
-->
<template>
  <div class="businessForm">
    <div class="busin-title"><span class="title">#基本信息</span></div>
    <Form :model="addForm" label-position="right" :label-width="120">
      <Row>
        <Col span="12">
          <FormItem props="businessName" label="商机名称">
            <Input v-model="addForm.businessName"></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="商机来源">
            <Select v-model="addForm.businessSource" clearable>
              <Option
                v-for="item in businessSourceList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="商机区域">
            <Select v-model="addForm.businessArea" clearable>
              <Option
                v-for="item in businessAreaList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="所属行业">
            <Select v-model="addForm.businessIndustry" clearable>
              <Option
                v-for="item in businessIndustryList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="商机类型">
            <Select v-model="addForm.businessType" clearable>
              <Option
                v-for="item in businessTypeList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预算金额">
            <Input v-model="addForm.businessAmount"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="商机级别">
            <Select v-model="addForm.businessLevel" clearable>
              <Option
                v-for="item in businessLevelList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="预计签约期限">
            <div class="date-con">
              <DatePicker
                type="date"
                :value="addForm.startDate"
                placeholder="选择开始时间"
                @on-change="changeStartDate"
              ></DatePicker>
              <span style="margin: 0 10px">-</span>
              <DatePicker
                type="date"
                :value="addForm.endDate"
                placeholder="选择结束时间"
                @on-change="changeEndDate"
              ></DatePicker>
            </div>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="收入类型">
            <Select v-model="addForm.incomeType" clearable>
              <Option
                v-for="item in incomeTypeList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
        </Col>
      </Row>
      <div class="busin-title">
        <div class="title">#客户信息</div>
        <div class="radio-change">
          <span class="radio-title">项目权限</span>
          <RadioGroup v-model="selectRadio">
            <Radio label="1">
              <span>组内成员可见</span>
            </Radio>
            <Radio label="2">
              <span>所有成员可见</span>
            </Radio>
          </RadioGroup>
        </div>
      </div>
      <Row>
        <Col span="12">
          <FormItem props="customerName" label="客户名称">
            <Input v-model="addForm.customerName"></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem props="businessName" label="关键联系人">
            <Input v-model="addForm.importContact"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem props="businessName" label="联系人电话">
            <Input v-model="addForm.contactPhone"></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem props="businessName" label="联系人角色">
            <div class="check-con">
              <CheckboxGroup v-model="addForm.contactRole">
                <Checkbox label="普通" border></Checkbox>
                <Checkbox label="重要参与人" border></Checkbox>
                <Checkbox label="决策人" border></Checkbox>
              </CheckboxGroup>
            </div>
          </FormItem>
        </Col>
      </Row>
      <div class="busin-title"><span class="title">#商机背景</span></div>
      <Row>
        <Col span="24">
          <FormItem props="businessName" label="项目介绍">
            <Input
              type="textarea"
              :rows="3"
              v-model="addForm.projectIntroduce"
            ></Input>
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem props="businessName" label="需求描述">
            <Input
              type="textarea"
              :rows="3"
              v-model="addForm.requireDescribe"
            ></Input>
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem props="businessName" label="关键人介绍">
            <Input
              type="textarea"
              :rows="3"
              v-model="addForm.importPersonIntroduce"
            ></Input>
          </FormItem>
        </Col>
        <Col span="24">
          <FormItem props="businessName" label="备注">
            <Input type="textarea" :rows="3" v-model="addForm.remark"></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <FormItem props="businessName" label="上传附件"> </FormItem>
      </Row>
      <Row class="buttons">
        <j-button type="negative" >创建商机</j-button>
        <j-button type="negative">取消</j-button>
      </Row>
    </Form>
  </div>
</template>

<script>
import { isSucc, errMsg, compareDate, formatDate } from "@/libs/util";
export default {
  components: {},
  props: {},
  data() {
    return {
      addForm: {
        businessName: "", // 商机名称
        businessSource: "", //商机来源
        businessArea: "", // 商机区域
        businessIndustry: "", // 所属行业
        businessType: "", // 商机类型
        businessAmount: "", //预算金额
        businessLevel: "", // 商机级别
        startDate: "", // 预计签约期限
        endDate: "", // 预计签约期限
        incomeType: "", // 收入类型
        customerName: "", // 客户名称
        importContact: "", // 关键联系人
        contactPhone: "", // 联系人电话
        contactRole: [], // 联系人角色
        projectIntroduce: "", // 项目介绍
        requireDescribe: "", // 需求描述
        importPersonIntroduce: "", // 关键人介绍
        remark: "", // 备注
      },
      businessSourceList: [
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
      businessAreaList: [
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
      businessIndustryList: [
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
      businessLevelList: [
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
      incomeTypeList: [
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
      selectRadio: "1",
    };
  },
  watch: {},
  computed: {},
  methods: {
    changeStartDate(date) {
      if (date && this.endDate && compareDate(date, this.endDate) > 0) {
        this.startDate = null;
        errMsg(this, "开始时间不能在结束时间之后");
        return;
      }
      this.startDate = date;
    },
    changeEndDate(date) {
      if (this.startDate && date && compareDate(this.startDate, date) > 0) {
        errMsg(this, "结束时间不能在开始时间之前");
        this.endDate = null;
        return;
      }
      this.endDate = date;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.businessForm {
  padding: 20px 40px;
  .busin-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .title {
      font-size: 14px;
      font-weight: bolder;
      display: flex;
    }
    .radio-change {
      display: flex;
      .radio-title {
        margin-right: 10px;
      }
    }
  }
  .date-con {
    display: flex;
    /deep/ .ivu-date-picker {
      width: 100%;
    }
  }
  .check-con {
    /deep/ .ivu-checkbox-group {
      .ivu-checkbox-border {
        margin-right: 30px;
        &:nth-child(1) {
          border: 1px solid rgb(25, 137, 250);
          .ivu-checkbox-checked .ivu-checkbox-inner {
            border-color: rgb(25, 137, 250);
            background-color: rgb(25, 137, 250);
          }
        }
        &:nth-child(2) {
          border: 1px solid rgb(227, 140, 9);
          .ivu-checkbox-checked .ivu-checkbox-inner {
            border-color: rgb(227, 140, 9);
            background-color: rgb(227, 140, 9);
          }
        }
        &:nth-child(3) {
          border: 1px solid rgb(230, 76, 101);
          .ivu-checkbox-checked .ivu-checkbox-inner {
            border-color: rgb(230, 76, 101);
            background-color: rgb(230, 76, 101);
          }
        }
      }
    }
  }
  .buttons{
      display: flex;
      justify-content: center;
      button{
          border-radius: 200px;
          &:nth-child(1){
              margin-right: 10px;
          }
      }
  }
}
</style>