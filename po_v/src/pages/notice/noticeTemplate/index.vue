<template>
  <div class="noticeTemplate">
      <div class="search-box">
        <el-form-item label="模板名称">
          <el-input v-model="form.name" size="small" placeholder="请输入" />
        </el-form-item>
        <div class="btn-box">
          <el-button type="primary" size="small" @click="search">查询</el-button>
          <el-button size="small" @click="reast">重置</el-button>
        </div>
      </div>
      <div class="container">
        <el-button type="primary" size="small" @click="addNotice">新建模板</el-button>
      </div>
      <el-table :data="templateList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="70" />
        <el-table-column prop="name" label="模板名称" width="180" />
        <el-table-column prop="createtime" label="创建时间" >
          <template #default="scope">
            <div>{{ util.filterCreatetime(scope.row.createtime) }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row.id)"
              >编辑</el-button
            >
            <el-button size="small" type="danger" @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="list-pagination"
        v-model:current-page="pageParams.page"
        v-model:page-size="pageParams.size"
        :page-sizes="[10, 20, 50, 100]"
        :small="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
  </div>

  <noticeTemplateEdit v-if="isEdit" :id="nid" :type="2" :statusType="statusType" @submit="submit" @cancel="cancel" />
</template>

<script setup lang="ts">
    import { ref, reactive, onMounted } from 'vue'
    import { ElMessage, ElMessageBox } from 'element-plus'
    import noticeTemplateEdit from '../noticeTemplateEdit/index.vue'
    import http from '@/utils/http.ts'
    import util from '@/utils/util.ts'

    let form = reactive({name: ''})
    let templateList = reactive([])
    let nid = ref('')
    const pageParams = reactive({
      page: 1,
      size: 10
    })
    const total = ref(0)
    const statusType = ref(1)
    let isEdit = ref(false)

    const search = () => {
      console.log(form)
      let obj = {...pageParams, ...form}
      http({
        url: '/notice/selectAllTemplate',
        method: 'get',
        params: obj
      }).then((res:any) => {
        total.value = res.total
        util.assignmentList(templateList, res.data)
      })
    }

    onMounted(() => {
      search()
    })

    const addNotice = () => {
      statusType.value = 1
      isEdit.value = true
    }

    const handleEdit = (id: string) => {
      statusType.value = 2
      isEdit.value = true
      nid.value = id
    }

    const submit = () => {
      isEdit.value = false
      search()
    }

    const cancel = () => {
      isEdit.value = false
    }

    const handleDelete = (id:number) => {
      ElMessageBox.confirm('确认删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          http({
            url: '/notice/deleteNoticeTemplate/' + id,
            method: 'post'
          }).then((res:any) => {
            ElMessage({
              type: res.data ? 'success' : "error",
              message: res.data ? '已删除' : '删除失败',
            })  
            search()
          })
        })
    }

    const handleSizeChange = (val: number) => {
      pageParams.size = val
      search()
    }
    const handleCurrentChange = (val: number) => {
      pageParams.page = val
      search()
    }
    const reast = () => {
      form.name = ''
    }
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
