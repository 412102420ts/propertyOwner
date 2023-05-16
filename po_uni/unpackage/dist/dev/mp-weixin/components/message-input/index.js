"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      imageStyles: {
        width: 70,
        height: 70
      },
      value: this.changeValue,
      isShowNUll: false
    };
  },
  props: {},
  mounted() {
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      this.$emit("submit", this.value);
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_easyinput2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_file_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.close && $options.close(...args)),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      focus: true,
      placeholder: "\u8F93\u5165\u7559\u8A00",
      maxlength: 200,
      modelValue: $data.value
    }),
    d: common_vendor.p({
      limit: "9",
      imageStyles: $data.imageStyles,
      title: "\u6700\u591A\u9009\u62E99\u5F20\u56FE\u7247"
    }),
    e: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1ca4071c"], ["__file", "E:/project/propertyOwner/po_uni/components/message-input/index.vue"]]);
wx.createComponent(Component);
