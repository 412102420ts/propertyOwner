"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    searchParams: {
      type: Object
    }
  },
  data() {
    return {
      status: this.searchParams.status || 0,
      region: this.searchParams.region || "",
      rangeCreate: this.searchParams.rangeCreate || ["", ""],
      rangeDeal: this.searchParams.rangeDeal || ["", ""],
      searchTop: 0,
      searchHeight: "100%",
      statusList: [
        { text: "\u5168\u90E8", value: 0 },
        { text: "\u5F85\u5904\u7406", value: 1 },
        { text: "\u5DF2\u5904\u7406", value: 2 },
        { text: "\u5DF2\u53D6\u6D88", value: 3 }
      ],
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
      ]
    };
  },
  mounted() {
    const that = this;
    common_vendor.index.getSystemInfo({
      success: function(res) {
        that.searchTop = res.windowTop + "px";
        that.searchHeight = `${res.windowHeight}px`;
      }
    });
  },
  methods: {
    changeRegion() {
      console.log(this.region);
    },
    changeStatus() {
      console.log(this.status);
    },
    changeCreate() {
      console.log(this.rangeCreate);
    },
    changeDeal() {
      console.log(this.rangeDeal);
    },
    search() {
      const searchObj = {
        status: this.status,
        region: this.region,
        rangeCreate: this.rangeCreate,
        rangeDeal: this.rangeDeal
      };
      this.$emit("search", searchObj);
    },
    close() {
      console.log(5555);
      this.$emit("close");
    },
    reast() {
      this.status = 0;
      this.region = "";
      this.rangeCreate = ["", ""];
      this.rangeDeal = ["", ""];
    }
  }
};
if (!Array) {
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  (_easycom_uni_data_checkbox2 + _easycom_uni_data_picker2 + _easycom_uni_datetime_picker2)();
}
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  (_easycom_uni_data_checkbox + _easycom_uni_data_picker + _easycom_uni_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.close && $options.close(...args)),
    b: common_vendor.o($options.changeStatus),
    c: common_vendor.o(($event) => $data.status = $event),
    d: common_vendor.p({
      mode: "tag",
      localdata: $data.statusList,
      modelValue: $data.status
    }),
    e: common_vendor.o($options.changeRegion),
    f: common_vendor.o(($event) => $data.region = $event),
    g: common_vendor.p({
      placeholder: "\u8BF7\u9009\u62E9\u533A\u57DF",
      ["popup-title"]: "\u8BF7\u9009\u62E9\u533A\u57DF",
      localdata: $data.regionTree,
      modelValue: $data.region
    }),
    h: common_vendor.o($options.changeCreate),
    i: common_vendor.o(($event) => $data.rangeCreate = $event),
    j: common_vendor.p({
      type: "daterange",
      modelValue: $data.rangeCreate
    }),
    k: common_vendor.o($options.changeDeal),
    l: common_vendor.o(($event) => $data.rangeDeal = $event),
    m: common_vendor.p({
      type: "daterange",
      modelValue: $data.rangeDeal
    }),
    n: common_vendor.o((...args) => $options.reast && $options.reast(...args)),
    o: common_vendor.o((...args) => $options.search && $options.search(...args)),
    p: $data.searchTop,
    q: $data.searchHeight
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47efa264"], ["__file", "E:/project/propertyOwner/po_uni/components/search-box/index.vue"]]);
wx.createComponent(Component);
