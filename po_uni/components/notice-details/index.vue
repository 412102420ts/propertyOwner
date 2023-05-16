<template>
	<view class="notice-details">
        <view class="header">
            <view :class="['tab', 'tab-' + info.type]">{{ noticeTab[info.type] }}</view>
            <!-- <image class="close" src="/static/plus.png" /> -->
            <uni-icons type="closeempty" size="15" @click="close"></uni-icons>
        </view>
        <view class="box">
            <view class="title">{{ info.title }}</view>
            <view class="info">
                <view class="author">发布人：<text class="name">管家</text></view>
                <view class="time">{{ info.time }}</view>
            </view>
            <view class="content">
                <rich-text :nodes="info.context"></rich-text>
            </view>            
        </view>
	</view>
</template>

<script>
	export default {
		data() {
            return {
                noticeTab: ["通知", "活动", "取消活动", "广告"],
            }
        },
        props: {
            info: {
                type: Object
            }
        },
        mounted() {

        },
		methods: {
			close() {
                this.$emit("close")
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
