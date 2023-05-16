"use strict";
var common_vendor = require("../../common/vendor.js");
const noticeDetails = () => "../../components/notice-details/index.js";
const _sfc_main = {
  components: {
    noticeDetails
  },
  data() {
    this.getDate({
      format: true
    });
    return {
      noticeTab: ["\u5168\u90E8", "\u901A\u77E5", "\u6D3B\u52A8", "\u53D6\u6D88\u6D3B\u52A8", "\u5E7F\u544A"],
      noticeList: [
        { title: "\u6D4B\u8BD5\u901A\u77E51-0", type: 0, time: "2029-06-14 12:56", id: 0 },
        { title: "\u6D4B\u8BD5\u53D6\u6D88\u6D3B\u52A81-2", type: 2, time: "2029-06-14 12:56", id: 1 },
        { title: "\u6D4B\u8BD5\u6D3B\u52A81-1", type: 1, time: "2029-06-14 12:56", id: 2 },
        { title: "\u6D4B\u8BD5\u5E7F\u544A1-4", type: 3, time: "2029-06-14 12:56", id: 3 }
      ],
      info: {},
      isShowDetail: false,
      typeIndex: 0,
      dateTime: ""
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    }
  },
  mounted() {
  },
  methods: {
    showDetail(id) {
      this.info = this.noticeList[id];
      console.log(id);
      this.isShowDetail = true;
    },
    bindPickerChange(e) {
      this.typeIndex = e.detail.value;
      console.log(this.noticeTab[this.typeIndex]);
    },
    close() {
      this.isShowDetail = false;
      this.info = {};
    },
    bindDateChange: function(e) {
      this.dateTime = e.detail.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    }
  }
};
if (!Array) {
  const _component_noticeDetails = common_vendor.resolveComponent("noticeDetails");
  _component_noticeDetails();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.noticeTab[$data.typeIndex]),
    b: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    c: $data.typeIndex,
    d: $data.noticeTab,
    e: common_vendor.t($data.dateTime || "\u5F53\u524D"),
    f: $data.dateTime,
    g: $options.startDate,
    h: $options.endDate,
    i: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args)),
    j: $data.noticeList.length > 0
  }, $data.noticeList.length > 0 ? {
    k: common_vendor.f($data.noticeList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t($data.noticeTab[item.type + 1]),
        c: common_vendor.n("n-tab-" + item.type),
        d: common_vendor.t(item.time),
        e: index,
        f: common_vendor.o(($event) => $options.showDetail(item.id), index)
      };
    })
  } : {}, {
    l: $data.isShowDetail
  }, $data.isShowDetail ? {
    m: common_vendor.o($options.close),
    n: common_vendor.p({
      info: $data.info
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ce639b58"], ["__file", "E:/project/propertyOwner/po_uni/pages/notice/index.vue"]]);
wx.createPage(MiniProgramPage);
