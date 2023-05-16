<template>
	<view class="search-box">
        <view class="mask" @click="close" />
        <view class="search" :style="{top: searchTop, height: searchHeight}">
            <view class="head">
                请选择搜索内容
            </view>
            <view class="box">
                <view class="box-item">
                    <view class="label">状态：</view>
                    <view class="select">
                        <uni-data-checkbox mode="tag" v-model="status" :localdata="statusList" @change="changeStatus"></uni-data-checkbox>
                        <!-- <view :class="['status-item', index === statusIndex ? 'status-active' : '']" v-for="(item, index) in statusList" :key="index" @click.stop="selStatus(index)">{{ item }}</view> -->
                    </view>
                </view>
                <view class="box-item">
                    <view class="label">区域：</view>
                    <view class="select">
                        <uni-data-picker placeholder="请选择区域" popup-title="请选择区域" :localdata="regionTree" v-model="region"
                            @change="changeRegion">
                        </uni-data-picker>
                    </view>
                </view>
                <view class="box-item">
                    <view class="label">创建时间：</view>
                    <view class="select">
                        <uni-datetime-picker v-model="rangeCreate" type="daterange" @change="changeCreate" />
                    </view>
                </view>
                <view class="box-item">
                    <view class="label">处理时间：</view>
                    <view class="select">
                        <uni-datetime-picker v-model="rangeDeal" type="daterange" @change="changeDeal" />
                    </view>
                </view>
            </view>
            <view class="btn-list">
                <view class="btn" @click.stop="reast">重置</view>
                <view class="btn submit" @click.stop="search">确认</view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
        props: {
            searchParams: {
                type: Object
            }
        },
		data() {
            return {
                status: this.searchParams.status || 0,
                region: this.searchParams.region || '',
                rangeCreate: this.searchParams.rangeCreate || ['',''],
                rangeDeal: this.searchParams.rangeDeal || ['',''],
                searchTop: 0,
                searchHeight: '100%',
				statusList: [
                    { text: '全部', value: 0 }, 
                    { text: '待处理', value: 1 }, 
                    { text: '已处理', value: 2 }, 
                    { text: '已取消', value: 3 }],
				regionTree: [{
					text: "中庭",
					value: "1-0",
					children: [{
						text: "池塘",
						value: "1-1"
					},
					{
						text: "球场",
						value: "1-2"
					}]
				},
				{
					text: "五栋",
					value: "2-0",
					children: [{
						text: "电梯",
						value: "2-1"
					},
					{
						text: "大堂",
						value: "2-2"
					}]
				},
				{
					text: "南门",
					value: "3-0"
				}]
            }
        },
        mounted() {
            const that = this
            uni.getSystemInfo({
                success: function (res) {
                    that.searchTop = res.windowTop + 'px'
                    that.searchHeight = `${res.windowHeight}px`
                }
            });
        },
		methods: {
            // 选择状态
			// selStatus(index) {
            //     this.statusIndex = index
            // },
            // 选择区域
            changeRegion() {
                console.log(this.region)
            },
            // 选择状态
            changeStatus() {
                console.log(this.status)
            },
            // 选择创建时间
            changeCreate() {
                console.log(this.rangeCreate)
            },
            // 选择处理时间
            changeDeal() {
                console.log(this.rangeDeal)
            },
            // 搜索
            search() {
                const searchObj = {
                    status: this.status,
                    region: this.region,
                    rangeCreate: this.rangeCreate,
                    rangeDeal: this.rangeDeal
                }
                this.$emit("search", searchObj)
            },
            close() {
                console.log(5555)
                this.$emit("close")
            },
            // 重置
            reast() {
                this.status = 0
                this.region = ''
                this.rangeCreate = ['','']
                this.rangeDeal = ['','']
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
