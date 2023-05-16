"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      region: "",
      description: "",
      regionTree: [
        {
          text: "\u4E2D\u5EAD",
          value: "1-0",
          children: [
            {
              text: "\u6C60\u5858",
              value: "1-1"
            },
            {
              text: "\u7403\u573A",
              value: "1-2"
            }
          ]
        },
        {
          text: "\u4E94\u680B",
          value: "2-0",
          children: [
            {
              text: "\u7535\u68AF",
              value: "2-1"
            },
            {
              text: "\u5927\u5802",
              value: "2-2"
            }
          ]
        },
        {
          text: "\u5357\u95E8",
          value: "3-0"
        }
      ],
      imageStyles: {
        width: 70,
        height: 70
      }
    };
  },
  onload(params) {
    console.log(params.id);
  },
  mounted() {
  },
  methods: {
    changeRegion() {
      console.log(this.region);
    },
    goBack() {
      common_vendor.index.navigateBack(1);
    },
    submit() {
      common_vendor.index.navigateBack(1);
    }
  }
};
if (!Array) {
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  (_easycom_uni_data_picker2 + _easycom_uni_file_picker2)();
}
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  (_easycom_uni_data_picker + _easycom_uni_file_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.changeRegion),
    b: common_vendor.o(($event) => $data.region = $event),
    c: common_vendor.p({
      placeholder: "\u8BF7\u9009\u62E9\u533A\u57DF",
      ["popup-title"]: "\u8BF7\u9009\u62E9\u533A\u57DF",
      localdata: $data.regionTree,
      modelValue: $data.region
    }),
    d: $data.description,
    e: common_vendor.o(($event) => $data.description = $event.detail.value),
    f: common_vendor.p({
      limit: "9",
      imageStyles: $data.imageStyles,
      title: "\u6700\u591A\u9009\u62E99\u5F20\u56FE\u7247"
    }),
    g: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    h: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-46c13a59"], ["__file", "E:/project/propertyOwner/po_uni/pages/affair-add/index.vue"]]);
wx.createPage(MiniProgramPage);
