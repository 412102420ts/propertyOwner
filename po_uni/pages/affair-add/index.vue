<template>
	<view class="affair-add">
        <view class="affair-form">
            <view class="form-item">
                <view class="label">区域：</view>
                <view class="input-box">
                    <uni-data-picker class="sel-region" placeholder="请选择区域" popup-title="请选择区域" :localdata="regionTree" v-model="region"
                        @change="changeRegion">
                    </uni-data-picker>
                </view>
            </view>
            <view class="form-item">
                <view class="label">描述：</view>
                <view class="input-box">
                    <textarea v-model="description" auto-height />
                </view>
            </view>
            <view class="form-item">
                <view class="label">图片：</view>
                <view class="input-box">
                    <!-- <view class="upload-img">
                        <image src="/static/plus.png" />
                    </view> -->
                    <uni-file-picker limit="9" :imageStyles="imageStyles" class="upload-img" title="最多选择9张图片"></uni-file-picker>
                </view>
            </view>
        </view>
        <view class="btn-list">
            <button type="default" @click="goBack">取消</button>
            <button type="primary" @click="submit">提交</button>
        </view>
	</view>
</template>

<script>
	export default {
        components: {
            
        },
		data() {
            return {
                region: '',
                description: '',
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
				}],
				imageStyles: {
					width: 70,
					height: 70
				}
            }
        },
        onload(params) {
            console.log(params.id)
        },
        mounted() {

        },
		methods: {
            // 选择区域
            changeRegion() {
                console.log(this.region)
            },
            goBack() {
                uni.navigateBack(1);
            },
            submit() {
                uni.navigateBack(1);
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
