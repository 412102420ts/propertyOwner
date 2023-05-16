<template>
	<view class="input-pop-box">
        <view class="mask" />
        <view class="box">
            <view class="title">{{ inputInfo.title }}</view>
            <view class="input-box">
                <uni-easyinput trim="all" v-model="value" :placeholder="inputInfo.placeholder" :maxlength="inputInfo.maxlength"></uni-easyinput>
                <!-- <input type="text" :placeholder="inputInfo.placeholder" v-model="value" /> -->
                <text v-if="isShowNUll" class="no-null">内容不能为空</text>
            </view>
            <view class="btn-box">
                <view class="btn" @click="close">{{ inputInfo.closeBtn }}</view>
                <view class="btn submit" @click="submit">{{ inputInfo.submitBtn }}</view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
            return {
                value: this.changeValue,
                isShowNUll: false
            }
        },
        props: {
            inputInfo: {
                type: Object,
                default: function() {
                    return {
                        title: "请输入",
                        placeholder: "请输入",
                        maxlength: 10,
                        closeBtn: "取消",
                        submitBtn: "确认"
                    }
                }
            },
            changeValue: {
                type: String,
                default: ""
            }
        },
        mounted() {

        },
		methods: {
			close() {
                this.$emit("close")
            },
            submit() {
                if (!this.value || !this.value.trim()) {
                    this.isShowNUll = true
                    return
                } else this.isShowNUll = false
                this.$emit("submit", this.value)
            }
		}
	}
</script>

<style lang="sass" scoped>
@import "./index.scss"
</style>
