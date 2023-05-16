"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: this.changeValue,
      isShowNUll: false
    };
  },
  props: {
    inputInfo: {
      type: Object,
      default: function() {
        return {
          title: "\u8BF7\u8F93\u5165",
          placeholder: "\u8BF7\u8F93\u5165",
          maxlength: 10,
          closeBtn: "\u53D6\u6D88",
          submitBtn: "\u786E\u8BA4"
        };
      }
    },
    changeValue: {
      type: String,
      default: ""
    }
  },
  mounted() {
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      if (!this.value || !this.value.trim()) {
        this.isShowNUll = true;
        return;
      } else
        this.isShowNUll = false;
      this.$emit("submit", this.value);
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.inputInfo.title),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      trim: "all",
      placeholder: $props.inputInfo.placeholder,
      maxlength: $props.inputInfo.maxlength,
      modelValue: $data.value
    }),
    d: $data.isShowNUll
  }, $data.isShowNUll ? {} : {}, {
    e: common_vendor.t($props.inputInfo.closeBtn),
    f: common_vendor.o((...args) => $options.close && $options.close(...args)),
    g: common_vendor.t($props.inputInfo.submitBtn),
    h: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-310ff038"], ["__file", "E:/project/propertyOwner/po_uni/components/input-pop-box/index.vue"]]);
wx.createComponent(Component);
