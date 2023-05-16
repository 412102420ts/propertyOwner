<template>
	<view class="affair">
        <view class="search">
			<!-- <image src="/static/templateIndex.png" /> -->
			<uni-icons type="settings" size="24" @click="showSearch"></uni-icons>
			
		</view>
		<view class="affair-list">
			<view class="affair-item" v-for="(item, index) in affair" :key="index" @click.stop="toDetail(item.id)">
				<image class="affair-img" v-if="item.img" src="/static/60x60.png" />
				<view class="box">
					<view class="one">
						<view class="loc">
							区域：<text>{{ item.loc }}</text>
						</view>
						<view :class="['status', 'status-' + item.status]">{{ statusList[item.status] }}</view>
					</view>
					<view class="content">
						{{ item.content }}
					</view>
					<view class="two">
						<view class="two-item" v-if="item.messages">
							留言：<text class="two-con">{{ item.messages }}</text>
						</view>
						<view class="two-item">
							<text v-if="item.status === 1">处理时间：<text class="two-con">{{ item.dealTime }}</text></text>
							<text v-else>创建时间：<text class="two-con">{{ item.createtime }}</text></text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- <uni-fab :pattern="pattern" horizontal="right" vertical="bottom" @click="addAffair" /> -->
		<view class="add-affair" @click="addAffair">
			<uni-icons type="plusempty" size="20" class="plus-icon"></uni-icons>
			<!-- <image src="/static/plus.png" /> -->
		</view>

		<searchBox v-if="isShowSearch" @close="close" :searchParams="searchParams" @search="search" />
	</view>
</template>

<script>
	import searchBox from '@/components/search-box'
	export default {
		components: {
			searchBox
		},
		data() {
            return {
				affair: [
					{id: 1, img: 'xxx', loc: '中庭', status: 1, content: '描0述描述0描述描述描0述描述0描述描述描0述描0述描述描述', messages: 9, dealTime: '2059-10-08 17:16', createtime: '2058-11-24 04:34'},
					{id: 2, img: '', loc: '一栋25楼', status: 0, content: '描述3描述描3述描述3描述描述3描述描3述描述3描述描述描述', messages: 2, dealTime: '2059-10-08 17:16', createtime: '2058-11-24 04:34'},
					{id: 3, img: 'xxx', loc: '九栋电梯', status: 2, content: '描述1描1述描述描述1描述描述描述描1述描1述描述描述描述', messages: 0, dealTime: '2059-10-08 17:16', createtime: '2058-11-24 04:34'},
					{id: 4, img: 'xxx', loc: '南门', status: 1, content: '描述2描述描述描述2描述描述2描述描述2描述描述描述描述', messages: 13, dealTime: '2059-10-08 17:16', createtime: '2058-11-24 04:34'},
				],
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
				statusList: ['待处理', '已处理', '已取消'],
				searchParams: {},
				isShowSearch: false
            }
        },
        mounted() {

        },
		methods: {
			// 前往事务详情
			toDetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/affair-detail/index?id=' + id
					
				});
			},
			// 发布事务
			addAffair() {
				console.log(555)
				uni.navigateTo({
					url: '/pages/affair-add/index'
				});
			},
			// 显示筛选项
			showSearch() {
				this.isShowSearch = true
			},
			close() {
				this.isShowSearch = false
			},
			// 搜索
			search(obj) {
				this.searchParams = obj
				this.isShowSearch = false
				console.log(obj)
			}
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
