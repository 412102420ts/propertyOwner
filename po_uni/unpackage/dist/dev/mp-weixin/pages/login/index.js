"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      s: 0,
      phone: "",
      code: "",
      isGetCode: true,
      isChange: false
    };
  },
  onLoad(params) {
    if (params.change) {
      this.isChange = true;
      common_vendor.index.setNavigationBarTitle({
        title: "\u4FEE\u6539\u7ED1\u5B9A\u624B\u673A\u53F7"
      });
      return;
    }
    common_vendor.index.setNavigationBarTitle({
      title: "\u767B\u5F55"
    });
  },
  mounted() {
    wx.login({
      success(res) {
        console.log(777, res);
        if (res.code) {
          wx.request({
            url: "https://example.com/onLogin",
            data: {
              code: res.code
            }
          });
        } else {
          console.log("\u767B\u5F55\u5931\u8D25\uFF01" + res.errMsg);
        }
      }
    });
  },
  methods: {
    login() {
      common_vendor.index.switchTab({
        url: "/pages/notice/index"
      });
    },
    getCode() {
      this.isGetCode = false;
      this.s = 60;
      const timer = setInterval(() => {
        if (this.s === 0) {
          this.isGetCode = true;
          clearInterval(timer);
        }
        this.s--;
      }, 1e3);
    },
    changePhone() {
      common_vendor.index.navigateBack();
    },
    goBack() {
      common_vendor.index.navigateBack();
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
    a: common_vendor.o(($event) => $data.phone = $event),
    b: common_vendor.p({
      type: "number",
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      modelValue: $data.phone
    }),
    c: common_vendor.o(($event) => $data.code = $event),
    d: common_vendor.p({
      type: "number",
      maxlength: 4,
      clearable: false,
      placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
      modelValue: $data.code
    }),
    e: $data.isGetCode
  }, $data.isGetCode ? {
    f: common_vendor.o((...args) => $options.getCode && $options.getCode(...args))
  } : {
    g: common_vendor.t($data.s)
  }, {
    h: !$data.isChange
  }, !$data.isChange ? {
    i: common_vendor.o((...args) => $options.login && $options.login(...args))
  } : {
    j: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    k: common_vendor.o((...args) => $options.changePhone && $options.changePhone(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4586967a"], ["__file", "E:/project/propertyOwner/po_uni/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
