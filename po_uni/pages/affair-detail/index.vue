<template>
	<view class="affair-detail">
        <view class="top">
            <view class="loc">
                区域：{{ info.loc }}
            </view>
            <view :class="['status', 'status-' + info.status]">{{ statusList[info.status] }}</view>
        </view>
        <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000"
            :duration="500">
            <swiper-item>
                <view class="swiper-item">A</view>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item">B</view>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item">C</view>
            </swiper-item>
        </swiper>
        <view class="affair-info">
            <view class="content">{{ info.content }}</view>
            <view class="time">
                <view class="time-item">
                    <view>创建时间：</view>
                    <view class="time-con">{{ info.createtime }}</view>
                </view>
                <view class="time-item">
                    <view>处理时间：</view>
                    <view class="time-con">{{ info.dealTime }}</view>
                </view>
            </view>
            <view class="bottom">
                <button type="primary" class="contact-btn" plain="true" size="mini" @click.stop="contact">联系物业</button>
                <!-- <view class="contact-btn">联系物业</view> -->
                <view class="deal-user">处理人：{{ info.dealUser }}</view>
            </view>            
        </view>
        <view class="message-list">
            <view class="message-input" @click="addMessage">
                <text>新增留言</text>
                <uni-icons type="chatbubble" size="20"></uni-icons>
                <!-- <image src="/static/icons/badge.png" /> -->
            </view>
            <view class="message-item" v-for="(item, index) in messageList" :key="index">
                <image src="/static/60x60.png" />
                <view class="context">
                    <view class="nickname">{{ item.nickname }}</view>
                    <view class="message-con">{{ item.message }}</view>
                </view>
            </view>
        </view>

        <messageInput v-if="isShowInput" @close="close" @submit="submitMessage" />
	</view>
</template>

<script>
    import messageInput from "@/components/message-input"
	export default {
        components: {
            messageInput
        },
		data() {
            return {
				info: {id: 1, img: 'xxx', loc: '中庭', status: 1, content: '描0述描述0描述描述描0述描述0描述描述描0述描0述描述描述', messages: 9, dealTime: '2059-10-08 17:16', createtime: '2058-11-24 04:34', dealUser: 'xxx'},
                messageList: [
                    {nickname: '111', message: '？？？？？？？？？？？？？？？？？？？？？？？'},
                    {nickname: '333', message: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'},
                ],
				statusList: ['待处理', '已处理', '已取消'],
                isShowInput: false
            }
        },
        onload(params) {
            console.log(params.id)
        },
        mounted() {

        },
		methods: {
			addMessage() {
                this.isShowInput = true
            },
            submitMessage() {
                this.isShowInput = false
            },
            contact() {
                uni.navigateTo({
                    url: '/pages/chat/index?id=1'
                })
            },
            close() {
                this.isShowInput = false
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
