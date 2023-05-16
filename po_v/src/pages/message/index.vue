<template>
  <div class="message">
    <el-container>
      <el-aside width="200px" class="el-aside-po">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="2">
            <span>测试</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="el-main-po">
        <div class="message-list">
          <div class="box" v-for="(item, index) in messageList" :key="index">
            <div class="left-message" v-if="item.fromId === 1">
              <img src="" class="logo" />
              <div class="con">
                <div class="name">xxx</div>
                <div class="context">{{item.context}}</div>
              </div>
            </div>
            <div class="right-message" v-else>
              <div class="con">
                <div class="name">客服</div>
                <div class="context">{{item.context}}</div>
              </div>
              <img src="" class="logo" />
            </div>
          </div>
        </div>
        <div class="message-input">
          <div></div>
          <div class="box">
            <el-input
              class="textarea-message"
              v-model="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              type="textarea"
            />
            <el-button size="small" type="primary" class="send-btn" @click="send">发送</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, onUnmounted } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import http from '@/utils/http.ts'
  import util from '@/utils/util.ts'

  var ws = new WebSocket('ws:/localhost:80/websocket/2')
  const textarea = ref('')
  const messageList:any[] = reactive([])
  const imSocketTask = ref(null)
  let serverTimeout = ref<any>(null)

  onMounted(() => {
    getMessageList()
  })

  onUnmounted(() => {
    clearTimeout(serverTimeout)
    ws.close()
  })

  ws.onmessage = function (e) {
    console.log("服务器返回的信息: " + e.data);
    messageList.push(JSON.parse(e.data))
  }

  const send = () => {
    let context:object = {fromId: 2, toId: 1, context: textarea.value}
    messageList.push(context)
    ws.send(JSON.stringify(context))

    textarea.value = ''
  }

  const keepLine = () => {
    serverTimeout = setTimeout(() => {
      let context:object = {fromId: 2, toId: 1, type: 1, context: "保持连接"}
      ws.send(JSON.stringify(context))
    }, 3000)
  }

  const getMessageList = () => {
    http({
      url: '/message/getMessageList',
      method: 'get'
    }).then((res:any) => {
      util.assignmentList(messageList, res.data)
    })
  }

  const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
  }
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
