<template>
	<view class="login">
        <!-- <view class="title">请登录</view> -->
        <view class="box">
            <view class="phone">
                <uni-easyinput v-model="phone" type="number" placeholder="请输入手机号"></uni-easyinput>
            </view>
            <view class="password">
                <uni-easyinput v-model="code" type="number" :maxlength="4" :clearable="false" placeholder="请输入验证码"></uni-easyinput>
                <view class="get-code" v-if="isGetCode" @click="getCode">获取验证码</view>
                <view class="get-code code-not" v-else >{{s}}后重新获取</view>
            </view>
        </view>
        <view v-if="!isChange" class="btn submit" @click="login">登录</view>
        <view v-else class="change-btns">
            <view class="btn" @click="goBack">取消</view>
            <view class="btn btn-submit" @click="changePhone">确认</view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
            return {
                s: 0,
                phone: '',
                code: '',
                isGetCode: true,
                isChange: false
            }
        },
        onLoad(params) {
            if(params.change) {
                this.isChange = true
                uni.setNavigationBarTitle({
                    title: "修改绑定手机号"
                })
                return
            }
            uni.setNavigationBarTitle({
                title: "登录"
            })
        },
        mounted() {
            // #ifdef MP-WEIXIN
            wx.login({
                success (res) {
                    console.log(777, res)
                    if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: 'https://example.com/onLogin',
                        data: {
                        code: res.code
                        }
                    })
                    } else {
                    console.log('登录失败！' + res.errMsg)
                    }
                }
            })
            // #endif
        },
		methods: {
            // 登录
			login() {
                uni.switchTab({
                    url: '/pages/notice/index'
                });
            },
            // 获取验证码
            getCode() {
                this.isGetCode = false
                this.s = 60
                const timer = setInterval(() => {
                    if(this.s === 0) {
                        this.isGetCode = true
                       clearInterval(timer) 
                    } 
                    this.s--
                }, 1000)
            },
            // 修改手机
            changePhone() {
                uni.navigateBack()
            },
            // 返回
            goBack() {
                uni.navigateBack()
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
