<template>
	<view class="notice">
        <view class="search-box">
			<view class="search-item">
				<view class="label">
					当前类型：
				</view>
				<view class="range">
					<picker @change="bindPickerChange" :value="typeIndex" :range="noticeTab">
						<view class="range-item">{{noticeTab[typeIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="search-item">
				<view class="label">
					时间：
				</view>
				<view class="range">
					<picker mode="date" :value="dateTime" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="range-item">{{ dateTime || '当前' }}</view>
					</picker>
				</view>
			</view>
        </view>
        <view class="notice-list" v-if="noticeList.length > 0">
            <view class="n-item" v-for="(item, index) in noticeList" :key="index" @click="showDetail(item.id)">
                <view class="title">{{ item.title }}</view>
                <view class="bottom">
                    <view :class="['n-tab', 'n-tab-' + item.type ]">{{ noticeTab[item.type + 1] }}</view>
                    <view class="n-time">{{ item.createtime }}</view>
                </view>
            </view>
        </view>
        <view v-else class="noData">暂无公告</view>

        <noticeDetails v-if="isShowDetail" :info="info" @close="close" />
	</view>
</template>

<script>
    import noticeDetails from "@/components/notice-details"
    import http from '@/utils/http.js'
    import util from '@/utils/util.js'
	export default {
        components: {
            noticeDetails
        },
		data() {
            const currentDate = this.getDate({
                format: true
            })
            return {
                noticeTab: ["全部", "通知", "活动", "取消活动", "广告"],
                noticeList: [],
                info: {},
                isShowDetail: false,
                typeIndex: 0,
                dateTime: ''
            }
        },
        computed: {
            startDate() {
                return this.getDate('start');
            },
            endDate() {
                return this.getDate('end');
            }
        },
        mounted() {
            this.getData()
        },
		methods: {
            getData() {
                http.request({
                    url: '/notice/getDataPage',
                    method: 'get',
                    data: {page: 1, size: 10},
                    success: (res) => {
                        console.log(res)
                        res.data.forEach((item) => {
                            item.createtime = util.filterCreatetime(item.createtime)
                        })
                        this.noticeList = res.data
                    }
                })
            },
			showDetail(id) {
                this.info = this.noticeList[id]
                this.info['context'] = "<h2><span style=\"color: rgb(255, 255, 255); background-color: rgb(231, 95, 51);\"><strong>【活动😀！！！😁】</strong></span></h2><p><span style=\"color: rgb(255, 77, 79);\"><strong>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</strong></span></p><p style=\"text-align: right;\">2024年10月11日</p>"
                console.log(id)
                this.isShowDetail = true
            },
            bindPickerChange(e) {
                this.typeIndex = e.detail.value
                console.log(this.noticeTab[this.typeIndex])
            },
            close() {
                this.isShowDetail = false
                this.info = {}
            },
            bindDateChange: function(e) {
                this.dateTime = e.detail.value
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();

                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
