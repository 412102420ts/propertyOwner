<template>
	<view class="user">
        <view class="user-info">
			<image class="user-img" src="/static/60x60.png" />
			<view class="user-name">{{ nickName }}</view>
		</view>
		<view class="btn-list">
			<view class="btn-item" @click="changePhone">
				<text>修改绑定手机号</text>
				<uni-icons type="forward" size="15"></uni-icons>
			</view>
			<view class="btn-item" @click.stop="changeNickName">
				<text>修改昵称</text>
				<uni-icons type="forward" size="15"></uni-icons>
			</view>
			<view class="btn-item" @click.stop="contact">
				<text>客服</text>
				<uni-icons type="forward" size="15"></uni-icons>
			</view>
			<view class="btn-item" @click="loginOut">
				<text>退出登录</text>
			</view>
		</view>

		<inputPopBox v-if="isShowInputBox" @close="close" @submit="submitNickName" :changeValue="nickName" :inputInfo="nicknameInfo" />
	</view>
</template>

<script>
	import inputPopBox from "@/components/input-pop-box"
	export default {
		components: {
			inputPopBox
		},
		data() {
            return {
				isShowInputBox: false,
				nickName: '默认昵称',
				nicknameInfo: {
                        title: "修改昵称",
                        placeholder: "请输入",
                        maxlength: 10,
                        closeBtn: "取消",
                        submitBtn: "确认"
                    }
            }
        },
        mounted() {

        },
		methods: {
			// 修改昵称
			changeNickName() {
				this.isShowInputBox = true
			},
			// 提交昵称
			submitNickName(val) {
				this.nickName = val
				this.isShowInputBox = false
			},
			// 修改手机
			changePhone() {
				uni.navigateTo({
					url: '/pages/login/index?change=1'
				});
			},
			// 退出登录
			loginOut() {
				uni.showModal({
					title: '提示',
					content: '确认退出？',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.redirectTo({
								url: '/pages/login/index'
							});
						}
					}
				});
			},
			// 客服
			contact() {
                uni.navigateTo({
                    url: '/pages/chat/index'
                })
			},
			// 关闭弹框
			close() {
				this.isShowInputBox = false
			}
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
