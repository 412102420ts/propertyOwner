<template>
	<view class="message-input">
        <view class="mask" />
        <view class="box">
            <view class="title">
                <text>新增留言</text>
                <image src="/static/plus.png" @click="close" />
            </view>
            <view class="input-box">
                <!-- <input type="text" placeholder="输入留言" v-model="value" :maxlength="100" /> -->
                <uni-easyinput v-model="value" focus placeholder="输入留言" :maxlength="200"></uni-easyinput>
                <!-- <text v-if="isShowNUll" class="no-null">内容不能为空</text> -->
            </view>
            <view class="upload">
                <view class="label">上传图片：</view>
                <view class="search-img">
                    <!-- <image src="/static/plus.png" /> -->
                    <uni-file-picker limit="9" :imageStyles="imageStyles" class="upload-img" title="最多选择9张图片"></uni-file-picker>
                </view>
            </view>
            <view class="btn-box">
                <view class="btn" @click="submit">确定</view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
            return {
				imageStyles: {
					width: 70,
					height: 70
				},
                value: this.changeValue,
                isShowNUll: false
            }
        },
        props: {
        },
        mounted() {

        },
		methods: {
			close() {
                this.$emit("close")
            },
            submit() {
                // if (!this.value || !this.value.trim()) {
                //     this.isShowNUll = true
                //     return
                // } else this.isShowNUll = false
                this.$emit("submit", this.value)
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
