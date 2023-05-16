<template>
	<view class="chat">
        <scroll-view scroll-y="true" class="scroll-Y" >
            <view class="info-list">
                <view class="info-item" v-for="(item, index) in infoList" :key="index">
                    <view class="info-left" v-if="item.fromId === 2">
                        <image class="info-img" src="/static/60x60.png" />
                        <view class="info-context">
                            <!-- <view class="username">{{ item.username }}</view> -->
                            <view class="username">客服</view>
                            <view class="context">{{ item.context }}</view>
                        </view>
                    </view>
                    <view class="info-right" v-else>
                        <view class="info-context">
                            <!-- <view class="username">{{ item.username }}</view> -->
                            <view class="username">xxx</view>
                            <view class="context">{{ item.context }}</view>
                        </view>
                        <image class="info-img" src="/static/60x60.png" />
                    </view>
                </view>
            </view>
            <view class="info-link" v-if="aid !== ''">
                <view class="link-info">
                    <image src="/static/60x60.png" />
                    <view class="link-box">
                        <view class="label">区域：<text>六栋大堂</text></view>
                        <view class="content">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</view>
                        <view class="bottom">
                            <view class="status">已处理</view>
                            <view>2029-11-04 12:26</view>
                        </view>
                    </view>
                </view>
                <view class="send-link">
                    发送事务
                </view>
            </view>			
		</scroll-view>
        <view class="operation">
            <view class="operation-box">
                <!-- <image src="/static/plus.png" class="add-img" @click="selImg" /> -->
                <uni-icons type="plus-filled" size="25" @click="selImg"></uni-icons>
                <!-- <input type="text" v-model="value" maxlength="1000" /> -->
                <uni-easyinput v-model="value" maxlength="1000"></uni-easyinput>
                <button class="send-btn" type="primary" size="mini" @click="send">发送</button>
            </view>
            <view class="sel-img" v-if="isShowSelImg">
                <view class="sel-img-item">
                    <image src="/static/plus.png" />
                </view>
                <view class="sel-img-item">
                    <image src="/static/icons/swiper-dot.png" />
                </view>
            </view>
        </view>
	</view>
</template>

<script>
    import http from '@/utils/http.js'
    import util from '@/utils/util.js'
	export default {
		data() {
            return {
                infoList: [],
                value: '',
                isShowSelImg: false,
                aid: '',
                imSocketTask: null
            }
        },
        onLoad(params) {
            this.aid = params.id || ''
        },
        mounted() {
            this.getMessageList()
            this.line()
        },
        unmounted() {
            this.closeWs()
        },
		methods: {
            line() {
                const that = this
                that.imSocketTask = uni.connectSocket({
                    url: 'ws://localhost:80/websocket/1',
                    complete: () => {},
                });
                that.imSocketTask.onOpen(() => {
                    heartCheck.reset().start()
                })
                that.imSocketTask.onClose(() => {
                    clearTimeout(this.servertime)
                })
                that.imSocketTask.onMessage((res) => {
                    console.log(res)
                    let data = JSON.parse(res.data)
                    if(data.fromId) {
                        that.infoList.push(data)                        
                    }
                })

                let heartCheck = {
                    timeout: 3000,
                    servertime: null,
                    reset: function() {
                        clearTimeout(this.servertime)
                        return this
                    },
                    start: function() {
                        if(!this.timeout) return
                        this.servertime = setTimeout(() => {
                            if(!that.imSocketTask) return
                            if(that.imSocketTask.readyState == 1 ||
                                that.imSocketTask._webSocket.readyState == 1) {
                                that.imSocketTask.send({
                                    data: JSON.stringify({fromId: 1, toId: 2, type: 1, context: '保持连接'})
                                });
                                heartCheck.reset().start()
                            } else {
                                that.imSocketTask.close()
                                that.line()
                            }
                        }, this.timeout)
                    }
                }
            },
			selImg() {
                this.isShowSelImg = !this.isShowSelImg
            },
            send() {
                this.infoList.push({fromId: 1, toId: 2, context: this.value})
                this.imSocketTask.send({
                    data: JSON.stringify({fromId: 1, toId: 2, context: this.value})
                });
                this.value = ''
            },
            getMessageList() {
                http.request({
                    url: '/message/getMessageList',
                    methods: 'get',
                    success: (res) => {
                        console.log(res)
                        this.infoList = res.data
                    }
                })
            },
            closeWs() {
                this.imSocketTask.close()
                this.imSocketTask = null
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
