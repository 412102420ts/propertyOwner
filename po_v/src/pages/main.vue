<template>
  <div class="main">
    <el-container>
      <el-header class="main-el-header">
          <mainHeader />
      </el-header>
      <el-container>
        <el-aside width="200px" class="el-aside-po">
            <el-menu
                default-active="/noticeList"
                :router="true"
                :unique-opened="true"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="selectRouter"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>通知</span>
                    </template>
                    <el-menu-item index="/noticeList">公告列表</el-menu-item>
                    <el-menu-item index="/noticeTemplate">模板管理</el-menu-item>
                </el-sub-menu>
            
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>事务</span>
                    </template>
                    <el-menu-item index="/affairList">事务列表</el-menu-item>
                </el-sub-menu>

                <el-menu-item index="3">
                    <el-icon><document /></el-icon>
                    <span>公示</span>
                </el-menu-item>

                <el-sub-menu index="4">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>资源</span>
                    </template>
                    <el-menu-item index="/regionList">区域管理</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="5">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>用户</span>
                    </template>
                    <el-menu-item index="1-3-1">用户管理</el-menu-item>
                </el-sub-menu>

                <el-menu-item index="/message">
                    <el-icon><setting /></el-icon>
                    <span>客服</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main class="el-main-po">
            <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
    import mainHeader from './main-header.vue'
    const handleOpen = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    const selectRouter = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>

<style lang="scss" scoped>
.main {
    // width: 100vw;
    // height: 100vh;
    .main-el-header {
        height: auto;
        border-bottom: 1px solid #dcdfe6;
    }
    .el-aside-po {
    }
    .el-menu-vertical-demo {
        min-height: calc(100vh - 51px);
        height: 100%;
    }
    .el-main-po {
    }
}
</style>