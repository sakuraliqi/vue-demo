<!--
 * @Descripttion: 按钮
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-22 23:29:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-23 00:14:13
-->
<template>
  <button
    class="j-button"
    :class="[type, size, { disabled, autoWidth }]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  components: {},
  props: {
    // default primary negative 决定按钮的主题颜色
    type: {
      type: String,
      default: "default",
    },
    // big small mini tag
    size: {
      type: String,
      default: "big",
    },
    // 是否自动宽度
    autoWidth: {
      type: Boolean,
      default: false,
    },
    // 是否不可选
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.j-button {
  display: inline-block;
  background-color: white;
  border: none;
  outline: none;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  transition: 0.3s;
  &.big {
    height: 38px;
    width: 120px;
    font-size: 14px;
    border-radius: 4px;
    // & + & {
    //   margin-left: 6px;
    // }
  }
  &.small {
    height: 32px;
    width: 120px;
    font-size: 12px;
    border-radius: 2px;
  }
  &.mini {
    height: 30px;
    width: 64px;
    font-size: 12px;
    border-radius: 2px;
    // & + & {
    //   margin-left: 6px;
    // }
  }
  &.tag {
    height: 24px;
    line-height: 1;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
    border-radius: 2px;
  }
  &.autoWidth {
    padding: 0 4px;
    width: initial;
  }
  &.default {
    border-color: #2751e5;
    color: #202bda;
    &:hover {
      border-color: #418ffa;
      color: #418ffa;
    }
    &:active {
      border-color: #232cc0;
      color: #232cc0;
    }
    &.disabled {
      border-color: #e6e6e6;
      color: #e6e6e6;
      cursor: not-allowed;
    }
  }
  &.primary {
    background-color: #202bda;
    border: none;
    color: #ffffff;
    &:hover {
      background-color: #418ffa;
    }
    &:active {
      background-color: #232cc0;
    }
    &.disabled {
      border-color: #e6e6e6;
      color: #e6e6e6;
      cursor: not-allowed;
    }
  }
  &.negative {
    border-color: #d8d8d8;
    color: #4a4a4a;
    &:hover {
      border-color: #4c4c4c;
    }
    &:active {
      border-color: #070e31;
      color: #070e31;
    }
    &.disabled {
      border-color: #d8d8d8;
      color: #a2a3a9;
      cursor: not-allowed;
    }
  }
}
</style>