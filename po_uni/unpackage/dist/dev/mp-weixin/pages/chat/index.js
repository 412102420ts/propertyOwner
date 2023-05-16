"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      infoList: [
        { username: "\u5BA2\u670D", type: 1, context: "................" },
        { username: "\u5BA2\u670D", type: 1, context: "aaaaaaaaaaaaa" },
        { username: "xxx", type: 2, context: "xxxxxxxxxxx" },
        { username: "\u5BA2\u670D", type: 1, context: "eeeeeeeeeeeeeeeeee" }
      ],
      value: "",
      isShowSelImg: false,
      aid: ""
    };
  },
  onLoad(params) {
    this.aid = params.id || "";
  },
  mounted() {
  },
  methods: {
    selImg() {
      this.isShowSelImg = !this.isShowSelImg;
    },
    send() {
      this.infoList.push({ username: "xxx", type: 2, context: this.value });
      this.value = "";
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.infoList, (item, index, i0) => {
      return common_vendor.e({
        a: item.type === 1
      }, item.type === 1 ? {
        b: common_vendor.t(item.username),
        c: common_vendor.t(item.context)
      } : {
        d: common_vendor.t(item.username),
        e: common_vendor.t(item.context)
      }, {
        f: index
      });
    }),
    b: $data.aid !== ""
  }, $data.aid !== "" ? {} : {}, {
    c: common_vendor.o($options.selImg),
    d: common_vendor.p({
      type: "plus-filled",
      size: "25"
    }),
    e: common_vendor.o(($event) => $data.value = $event),
    f: common_vendor.p({
      maxlength: "1000",
      modelValue: $data.value
    }),
    g: common_vendor.o((...args) => $options.send && $options.send(...args)),
    h: $data.isShowSelImg
  }, $data.isShowSelImg ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3fea99d8"], ["__file", "E:/project/propertyOwner/po_uni/pages/chat/index.vue"]]);
wx.createPage(MiniProgramPage);
