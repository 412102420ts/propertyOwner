"use strict";
var common_vendor = require("../../common/vendor.js");
const messageInput = () => "../../components/message-input/index.js";
const _sfc_main = {
  components: {
    messageInput
  },
  data() {
    return {
      info: { id: 1, img: "xxx", loc: "\u4E2D\u5EAD", status: 1, content: "\u63CF0\u8FF0\u63CF\u8FF00\u63CF\u8FF0\u63CF\u8FF0\u63CF0\u8FF0\u63CF\u8FF00\u63CF\u8FF0\u63CF\u8FF0\u63CF0\u8FF0\u63CF0\u8FF0\u63CF\u8FF0\u63CF\u8FF0", messages: 9, dealTime: "2059-10-08 17:16", createtime: "2058-11-24 04:34", dealUser: "xxx" },
      messageList: [
        { nickname: "111", message: "\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F\uFF1F" },
        { nickname: "333", message: "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" }
      ],
      statusList: ["\u5F85\u5904\u7406", "\u5DF2\u5904\u7406", "\u5DF2\u53D6\u6D88"],
      isShowInput: false
    };
  },
  onload(params) {
    console.log(params.id);
  },
  mounted() {
  },
  methods: {
    addMessage() {
      this.isShowInput = true;
    },
    submitMessage() {
      this.isShowInput = false;
    },
    contact() {
      common_vendor.index.navigateTo({
        url: "/pages/chat/index?id=1"
      });
    },
    close() {
      this.isShowInput = false;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_messageInput = common_vendor.resolveComponent("messageInput");
  (_easycom_uni_icons2 + _component_messageInput)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.info.loc),
    b: common_vendor.t($data.statusList[$data.info.status]),
    c: common_vendor.n("status-" + $data.info.status),
    d: common_vendor.t($data.info.content),
    e: common_vendor.t($data.info.createtime),
    f: common_vendor.t($data.info.dealTime),
    g: common_vendor.o((...args) => $options.contact && $options.contact(...args)),
    h: common_vendor.t($data.info.dealUser),
    i: common_vendor.p({
      type: "chatbubble",
      size: "20"
    }),
    j: common_vendor.o((...args) => $options.addMessage && $options.addMessage(...args)),
    k: common_vendor.f($data.messageList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.nickname),
        b: common_vendor.t(item.message),
        c: index
      };
    }),
    l: $data.isShowInput
  }, $data.isShowInput ? {
    m: common_vendor.o($options.close),
    n: common_vendor.o($options.submitMessage)
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1313352f"], ["__file", "E:/project/propertyOwner/po_uni/pages/affair-detail/index.vue"]]);
wx.createPage(MiniProgramPage);
