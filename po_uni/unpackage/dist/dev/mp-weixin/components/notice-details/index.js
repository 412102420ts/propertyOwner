"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      noticeTab: ["\u901A\u77E5", "\u6D3B\u52A8", "\u53D6\u6D88\u6D3B\u52A8", "\u5E7F\u544A"]
    };
  },
  props: {
    info: {
      type: Object
    }
  },
  mounted() {
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.noticeTab[$props.info.type]),
    b: common_vendor.n("tab-" + $props.info.type),
    c: common_vendor.o($options.close),
    d: common_vendor.p({
      type: "closeempty",
      size: "15"
    }),
    e: common_vendor.t($props.info.title),
    f: common_vendor.t($props.info.time)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3786b76a"], ["__file", "E:/project/propertyOwner/po_uni/components/notice-details/index.vue"]]);
wx.createComponent(Component);
