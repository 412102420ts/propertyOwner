"use strict";
var common_vendor = require("../../common/vendor.js");
const inputPopBox = () => "../../components/input-pop-box/index.js";
const _sfc_main = {
  components: {
    inputPopBox
  },
  data() {
    return {
      isShowInputBox: false,
      nickName: "\u9ED8\u8BA4\u6635\u79F0",
      nicknameInfo: {
        title: "\u4FEE\u6539\u6635\u79F0",
        placeholder: "\u8BF7\u8F93\u5165",
        maxlength: 10,
        closeBtn: "\u53D6\u6D88",
        submitBtn: "\u786E\u8BA4"
      }
    };
  },
  mounted() {
  },
  methods: {
    changeNickName() {
      this.isShowInputBox = true;
    },
    submitNickName(val) {
      this.nickName = val;
      this.isShowInputBox = false;
    },
    changePhone() {
      common_vendor.index.navigateTo({
        url: "/pages/login/index?change=1"
      });
    },
    loginOut() {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u8BA4\u9000\u51FA\uFF1F",
        success: function(res) {
          if (res.confirm) {
            console.log("\u7528\u6237\u70B9\u51FB\u786E\u5B9A");
            common_vendor.index.redirectTo({
              url: "/pages/login/index"
            });
          }
        }
      });
    },
    contact() {
      common_vendor.index.navigateTo({
        url: "/pages/chat/index"
      });
    },
    close() {
      this.isShowInputBox = false;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_inputPopBox = common_vendor.resolveComponent("inputPopBox");
  (_easycom_uni_icons2 + _component_inputPopBox)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.nickName),
    b: common_vendor.p({
      type: "forward",
      size: "15"
    }),
    c: common_vendor.o((...args) => $options.changePhone && $options.changePhone(...args)),
    d: common_vendor.p({
      type: "forward",
      size: "15"
    }),
    e: common_vendor.o((...args) => $options.changeNickName && $options.changeNickName(...args)),
    f: common_vendor.p({
      type: "forward",
      size: "15"
    }),
    g: common_vendor.o((...args) => $options.contact && $options.contact(...args)),
    h: common_vendor.o((...args) => $options.loginOut && $options.loginOut(...args)),
    i: $data.isShowInputBox
  }, $data.isShowInputBox ? {
    j: common_vendor.o($options.close),
    k: common_vendor.o($options.submitNickName),
    l: common_vendor.p({
      changeValue: $data.nickName,
      inputInfo: $data.nicknameInfo
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-137d5072"], ["__file", "E:/project/propertyOwner/po_uni/pages/user/index.vue"]]);
wx.createPage(MiniProgramPage);
