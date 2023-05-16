"use strict";
var common_vendor = require("../../common/vendor.js");
const searchBox = () => "../../components/search-box/index.js";
const _sfc_main = {
  components: {
    searchBox
  },
  data() {
    return {
      affair: [
        { id: 1, img: "xxx", loc: "\u4E2D\u5EAD", status: 1, content: "\u63CF0\u8FF0\u63CF\u8FF00\u63CF\u8FF0\u63CF\u8FF0\u63CF0\u8FF0\u63CF\u8FF00\u63CF\u8FF0\u63CF\u8FF0\u63CF0\u8FF0\u63CF0\u8FF0\u63CF\u8FF0\u63CF\u8FF0", messages: 9, dealTime: "2059-10-08 17:16", createtime: "2058-11-24 04:34" },
        { id: 2, img: "", loc: "\u4E00\u680B25\u697C", status: 0, content: "\u63CF\u8FF03\u63CF\u8FF0\u63CF3\u8FF0\u63CF\u8FF03\u63CF\u8FF0\u63CF\u8FF03\u63CF\u8FF0\u63CF3\u8FF0\u63CF\u8FF03\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0", messages: 2, dealTime: "2059-10-08 17:16", createtime: "2058-11-24 04:34" },
        { id: 3, img: "xxx", loc: "\u4E5D\u680B\u7535\u68AF", status: 2, content: "\u63CF\u8FF01\u63CF1\u8FF0\u63CF\u8FF0\u63CF\u8FF01\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF1\u8FF0\u63CF1\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0", messages: 0, dealTime: "2059-10-08 17:16", createtime: "2058-11-24 04:34" },
        { id: 4, img: "xxx", loc: "\u5357\u95E8", status: 1, content: "\u63CF\u8FF02\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF02\u63CF\u8FF0\u63CF\u8FF02\u63CF\u8FF0\u63CF\u8FF02\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0", messages: 13, dealTime: "2059-10-08 17:16", createtime: "2058-11-24 04:34" }
      ],
      pattern: {
        color: "#7A7E83",
        backgroundColor: "#fff",
        selectedColor: "#007AFF",
        buttonColor: "#007AFF",
        iconColor: "#fff"
      },
      statusList: ["\u5F85\u5904\u7406", "\u5DF2\u5904\u7406", "\u5DF2\u53D6\u6D88"],
      searchParams: {},
      isShowSearch: false
    };
  },
  mounted() {
  },
  methods: {
    toDetail(id) {
      console.log(id);
      common_vendor.index.navigateTo({
        url: "/pages/affair-detail/index?id=" + id
      });
    },
    addAffair() {
      console.log(555);
      common_vendor.index.navigateTo({
        url: "/pages/affair-add/index"
      });
    },
    showSearch() {
      this.isShowSearch = true;
    },
    close() {
      this.isShowSearch = false;
    },
    search(obj) {
      this.searchParams = obj;
      this.isShowSearch = false;
      console.log(obj);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_searchBox = common_vendor.resolveComponent("searchBox");
  (_easycom_uni_icons2 + _component_searchBox)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.showSearch),
    b: common_vendor.p({
      type: "settings",
      size: "24"
    }),
    c: common_vendor.f($data.affair, (item, index, i0) => {
      return common_vendor.e({
        a: item.img
      }, item.img ? {} : {}, {
        b: common_vendor.t(item.loc),
        c: common_vendor.t($data.statusList[item.status]),
        d: common_vendor.n("status-" + item.status),
        e: common_vendor.t(item.content),
        f: item.messages
      }, item.messages ? {
        g: common_vendor.t(item.messages)
      } : {}, {
        h: item.status === 1
      }, item.status === 1 ? {
        i: common_vendor.t(item.dealTime)
      } : {
        j: common_vendor.t(item.createtime)
      }, {
        k: index,
        l: common_vendor.o(($event) => $options.toDetail(item.id), index)
      });
    }),
    d: common_vendor.p({
      type: "plusempty",
      size: "20"
    }),
    e: common_vendor.o((...args) => $options.addAffair && $options.addAffair(...args)),
    f: $data.isShowSearch
  }, $data.isShowSearch ? {
    g: common_vendor.o($options.close),
    h: common_vendor.o($options.search),
    i: common_vendor.p({
      searchParams: $data.searchParams
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-298629f6"], ["__file", "E:/project/propertyOwner/po_uni/pages/affair/index.vue"]]);
wx.createPage(MiniProgramPage);
